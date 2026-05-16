import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Cuboid, LayoutGrid, Wrench } from 'lucide-react';

export function Pillar3D() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Which filament should a beginner start with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PLA (Polylactic Acid) is the universal starting point. It prints easily, doesn't require an enclosure, smells slightly sweet while printing, and doesn't warp heavily."
      }
    }, {
      "@type": "Question",
      "name": "Why is my 3D printer not sticking to the bed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Poor bed adhesion usually comes down to three things: an unlevel bed (nozzle is too high), a dirty build surface (clean it with isopropyl alcohol), or printing temperatures that are too low."
      }
    }]
  };

  return (
    <div>
      <SEO 
        title="3D Printing Guide & Machine Reviews" 
        description="A complete guide to 3D printing. Learn about filament choices, bed leveling, assembly, and browse comprehensive reviews of modern FDM machines."
        schema={schema}
      />
      
      <div className="bg-[#15181E] text-white py-20 px-4 border-b border-[#1F2937]">
        <div className="max-w-4xl mx-auto text-center">
          <Cuboid className="w-16 h-16 text-brand mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 leading-tight">3D Printing Hub</h1>
          <p className="text-xl text-gray-400 font-medium">Printer reviews, filament guides, and troubleshooting for makers.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 prose prose-lg prose-invert prose-zinc prose-headings:font-serif prose-a:text-brand hover:prose-a:text-brand-600">
        <h2>From Zero to Your First Print</h2>
        <p>
          3D printing is arguably the most powerful tool you can add to a DIY workshop. Instead of buying replacement parts or adapters, you can just model and manufacture them overnight.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose my-10">
           <div className="border border-[#1F2937] bg-[#15181E] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <LayoutGrid className="text-brand w-8 h-8 mb-4"/>
              <h3 className="font-bold font-serif text-white text-lg mb-2">Modeling (CAD)</h3>
              <p className="text-gray-400 text-sm">To truly unlock a printer, learn to model. I heavily recommend starting with <strong>Tinkercad</strong> for basics before graduating to Fusion360.</p>
           </div>
           <div className="border border-[#1F2937] bg-[#15181E] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <Wrench className="text-brand w-8 h-8 mb-4"/>
              <h3 className="font-bold font-serif text-white text-lg mb-2">Maintenance</h3>
              <p className="text-gray-400 text-sm">Printers are CNC machines. They require tensioning belts, checking eccentric nuts, and cleaning the hotend regularly to prevent clogs.</p>
           </div>
        </div>

        <h2>Recommended Machines</h2>
        <p>If you're looking for an expansive build volume to create large pieces without slicing them up, check out my review of the Longer LK5 Pro:</p>
        <ul>
          <li>
            <Link to="/3d-printing/longer-lk5-pro-3d-printer">LONGER LK5 Pro - Unboxing & Setup</Link> - A 300x300x400mm massive build volume printer that handles big jobs smoothly.
          </li>
        </ul>

        <h2>Essential Troubleshooting: Bed Leveling</h2>
        <p>
          90% of your failed prints will originate in the first layer. If the first layer fails, the remaining hours of printing are doomed. Always use the "paper test" during manual leveling. Make sure there is slight resistance between the nozzle and the bed using standard printer paper.
        </p>

        <div className="mt-16 pt-12 border-t border-[#1F2937]">
          <h2 className="mb-8 font-serif">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-[#15181E] p-6 rounded-2xl border border-[#1F2937]">
              <h4 className="font-bold text-lg mb-2 text-white">Which filament should a beginner start with?</h4>
              <p className="text-gray-400">PLA (Polylactic Acid) is the universal starting point. It prints easily, doesn't require an enclosure, smells slightly sweet while printing, and doesn't warp heavily. Save PETG and ABS for when you need impact or heat resistance.</p>
            </div>
            <div className="bg-[#15181E] p-6 rounded-2xl border border-[#1F2937]">
              <h4 className="font-bold text-lg mb-2 text-white">Why is my 3D printer not sticking to the bed?</h4>
              <p className="text-gray-400">Poor bed adhesion usually comes down to three things: an unlevel bed (nozzle is too high), a dirty build surface (fingerprint grease prevents adhesion—clean it with isopropyl alcohol), or printing temperatures that are too low.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
