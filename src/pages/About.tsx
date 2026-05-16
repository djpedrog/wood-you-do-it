import React from 'react';
import { SEO } from '../components/SEO';
import { Youtube, Instagram } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEO 
        title="About Pedro Gameiro" 
        description="Learn more about Pedro Gameiro, the maker behind Wood You Do It."
      />
      
      <div className="prose prose-lg prose-invert prose-zinc mx-auto prose-headings:font-serif">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 text-center font-serif">About The Maker</h1>
        
        <img 
          src="https://images.unsplash.com/photo-1542838686-37ed7a05a0d3?auto=format&fit=crop&q=80" 
          alt="Workshop" 
          className="w-full rounded-2xl mb-8 aspect-[21/9] object-cover"
        />

        <p>
          Hi, I'm Pedro Gameiro. Welcome to Wood You Do It!
        </p>
        <p>
          This channel and website started as a way for me to document my weekend projects in the garage. Over the years, it has snowballed into a passionate community of DIYers, makers, and tool enthusiasts trying to figure out how to build cool things at home without necessarily dropping thousands of dollars on industrial equipment.
        </p>

        <h3>My Workshop Journey</h3>
        <p>
          Like many, my first workshop was incredibly tiny. I built a mobile workbench incorporating my Dewalt DW745 table saw just so I could wheel it out to the driveway when it was time to cut wood. I love finding creative ways to store tools, maximize space (hello, French Cleats!), and test affordable CNC toys like entry-level Diode and Galvo lasers.
        </p>

        <h3>Where to find me</h3>
        <p>The best place to see the actual builds come together is on YouTube. For quick updates, failed cuts, and behind-the-scenes, Instagram is where I post regularly.</p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 not-prose mt-12 mb-8">
          <a
            href="https://www.youtube.com/@WoodYouDoIt"
            target="_blank"
            rel="noopener noreferrer"
            className="yt-subscribe-btn flex items-center gap-2 px-6 py-3 bg-[#FF0000] hover:bg-[#CC0000] text-black font-bold rounded-xl transition-all shadow-xl shadow-black/20"
          >
            <Youtube className="w-5 h-5" /> YouTube
          </a>
          <a
            href="https://www.instagram.com/wood_you_do_it"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:opacity-90 text-white font-bold rounded-xl transition-opacity"
          >
            <Instagram className="w-5 h-5" /> Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
