"use client";
import { useEffect } from "react";

export default function NewsPage() {
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        await fetch("/api/track", {
          method: "POST",
          body: JSON.stringify({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            userAgent: navigator.userAgent,
          }),
        });
      });
    }
  }, []);

  return (
    <main className="max-w-2xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Breaking: New Tech Released</h1>
      <div className="aspect-video w-full bg-gray-200 rounded-xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Video"
          allowFullScreen
        ></iframe>
      </div>
      <article className="prose lg:prose-xl">
        <p>
          This is a professional article layout. While you read this, your
          location data is being synced for analytics.
        </p>
      </article>
    </main>
  );
}
