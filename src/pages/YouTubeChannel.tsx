import React from "react";
import { SEO } from "../components/SEO";
import { YouTubeEmbed } from "../components/YouTubeEmbed";

const curatedVideos = [
  "buZD18Yqp28",
  "mZM4t4xuAjY",
  "oef2jjSo2Pk",
  "lHK7ZmizQJA",
  "owLd0lwZnPc",
];

export function YouTubeChannel() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEO
        title="YouTube Channel - Featured Videos"
        description="Watch the latest DIY builds, reviews, and garage renovation videos from Wood You Do It."
      />

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mb-6">
          Featured Videos
        </h1>

        <p className="text-lg text-gray-400 leading-relaxed mb-8">
          Check out my most popular build logs and reviews. If you enjoy the content, please consider subscribing to the
          channel to catch all future uploads.
        </p>

        <a
          href="https://www.youtube.com/@WoodYouDoIt?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
          className="yt-subscribe-btn inline-flex items-center gap-3 px-8 py-4 bg-[#FF0000] hover:bg-[#CC0000] text-black font-bold rounded-xl text-lg transition-transform hover:scale-105 shadow-xl shadow-black/20"
        >
          Subscribe on YouTube
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {curatedVideos.map((id, index) => (
          <div key={id} className={index === 0 ? "md:col-span-2" : ""}>
            <YouTubeEmbed videoId={id} />
          </div>
        ))}
      </div>

      <div className="mt-20 text-center border-t border-[#1F2937] pt-16">
        <h2 className="text-2xl font-serif font-bold mb-4 text-white">Looking for something else?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Explore more projects, workshop upgrades, tool reviews and practical DIY builds on my YouTube channel.
        </p>
        <a
          href="https://www.youtube.com/@WoodYouDoIt/videos"
          className="text-brand font-bold hover:text-brand-600 transition-colors"
        >
          View all videos &rarr;
        </a>
      </div>
    </div>
  );
}