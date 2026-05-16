import React from 'react';

export function YouTubeEmbed({ videoId, title }: { videoId: string, title?: string }) {
  if (!videoId) return null;

  return (
    <div className="w-full max-w-4xl mx-auto my-8 rounded-2xl overflow-hidden shadow-2xl aspect-video bg-[#0A0C0F] border border-[#1F2937]">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
        title={title || "YouTube video player"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
