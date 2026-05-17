import React from "react";
import { SEO } from "../components/SEO";
import { ShoppingBag } from "lucide-react";

export function Shop() {
  return (
    <div>
      <SEO 
        title="Shop - Wood You Do It"
        description="Support the channel with official merch. Tools, design and maker lifestyle."
      />

      {/* HERO */}
      <div className="bg-[#15181E] border-b border-[#1F2937] text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ShoppingBag className="w-16 h-16 text-brand mx-auto mb-6"/>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Merch Store
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Support the channel and the projects by grabbing official merch.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-20 text-white">

        {/* INTRO */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-gray-400 text-lg">
            Every purchase helps fund new builds, better tutorials and higher quality content.
          </p>
        </div>

        {/* SHOP EMBED */}
<div className="mb-20">
  <iframe
    style={{ borderRadius: "24px", border: "none" }}
    src="https://embed.creator-spring.com/widget?slug=wood-you-do-it&per=30&currency=&page=1&layout=grid-sm-4&theme=dark"
    title="Wood You Do It Merch Store"
    width="100%"
    height="1200"
  />
</div>

        {/* FALLBACK LINK */}
        <div className="text-center mt-12">
          <a 
            href="https://wood-you-do-it.creator-spring.com"
            target="_blank"
            rel="noreferrer"
            className="text-brand"
          >
            Visit Full Store →
          </a>
        </div>

      </div>
    </div>
  );
}
