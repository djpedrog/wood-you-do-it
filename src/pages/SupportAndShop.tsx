import React from 'react';
import { SEO } from '../components/SEO';

export function Support() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <SEO 
        title="Support the Channel" 
        description="Help support Wood You Do It by buying a coffee or making a PayPal donation."
      />
      
      <h1 className="text-4xl font-serif font-bold tracking-tight text-white mb-6">Support the Workshop</h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
        All of the plans and guides on this site are completely free. If my videos have helped you build a project or fix an issue, consider helping me buy the next sheet of plywood!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
         <a href="https://buymeacoffee.com/woodyoudoit" target="_blank" rel="noopener noreferrer" className="bg-[#15181E] border border-[#FFDD00]/30 text-white p-10 rounded-2xl font-bold hover:scale-105 hover:bg-[#FFDD00]/10 transition-all flex flex-col items-center justify-center shadow-lg">
             <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" className="h-14 mb-6 rounded shadow-sm" />
             <span className="text-xl font-serif">Buy me a coffee</span>
         </a>
         
         <a href="https://www.paypal.me/djpedrog" target="_blank" rel="noopener noreferrer" className="bg-[#15181E] border border-[#00457C]/40 text-white p-10 rounded-2xl font-bold hover:scale-105 hover:bg-[#00457C]/20 transition-all flex flex-col items-center justify-center shadow-lg">
             <svg className="w-16 h-16 mb-4 fill-[#00457C]" viewBox="0 0 24 24"><path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.815 1.01 1.15 1.304 2.815.87 4.714-1.125 4.902-4.526 7.42-8.546 7.42h-1.921c-.482 0-.895.344-.984.81l-1.492 6.578zm8.995-15.01c-.147-.282-.417-.506-.826-.71-1.077-.534-2.905-.487-4.32-.487h-3.41c-.244 0-.45.174-.495.413l-3.23 14.195c-.04.18.102.348.286.348h2.646c.196 0 .365-.137.404-.33l.995-4.394c.09-.395.44-.67.842-.67h1.026c2.72 0 5.093-1.42 5.867-4.81.39-1.7.202-2.932-.785-3.555z"/></svg>
             <span className="text-xl font-serif">PayPal Donation</span>
         </a>
      </div>
    </div>
  );
}

export function Shop() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <SEO 
        title="Merch Shop" 
        description="Buy Wood You Do It merchandise, t-shirts, and apparel."
      />
      
      <h1 className="text-4xl font-serif font-bold tracking-tight text-white mb-6">Official Merch Shop</h1>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
        Rep the channel in your own workshop. Grab a t-shirt or hoodie from my Creator Spring store.
      </p>

      <a href="https://wood-you-do-it.creator-spring.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#15181E] border border-[#374151] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-[#1F2937] hover:border-brand transition-all shadow-2xl">
         Visit Creator Spring Store
      </a>
      
      <div className="mt-16 bg-[#15181E] rounded-3xl aspect-[21/9] flex items-center justify-center opacity-50 border-2 border-dashed border-[#374151]">
         <span className="font-mono text-gray-500 font-bold uppercase tracking-widest text-xs">Merch preview images would go here</span>
      </div>
    </div>
  );
}
