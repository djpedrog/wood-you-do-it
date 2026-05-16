import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Zap, Shield, HelpCircle } from 'lucide-react';

export function PillarLaser() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Are diode lasers good for cutting wood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, high-power diode lasers (like 10W or 20W modules) can easily cut through thin plywood (3mm to 6mm) using multiple passes or a single slow pass with air assist."
      }
    }, {
      "@type": "Question",
      "name": "Do I need air assist for laser engraving?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For pure engraving, air assist isn't strictly necessary but helps keep the lens clean. For cutting, air assist is absolutely mandatory as it blows away charred material and prevents flare-ups, resulting in cleaner cuts."
      }
    }]
  };

  return (
    <div>
      <SEO 
        title="Laser Engraving For Beginners - Ultimate Hub" 
        description="The ultimate guide to laser engraving for beginners. Learn about diode lasers, galvo units, safety requirements, and read comprehensive machine reviews."
        schema={schema}
      />
      
      <div className="bg-[#15181E] border-b border-[#1F2937] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="w-16 h-16 text-brand mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight mb-6 leading-tight">Laser Engraving Hub</h1>
          <p className="text-xl text-gray-400 font-medium">Your definitive guide to cutting, burning, and creating with lasers.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 prose prose-lg prose-invert prose-zinc prose-headings:font-serif prose-a:text-brand hover:prose-a:text-brand-600">
        <h2>Getting Started with Laser Engraving</h2>
        <p>
          Whether you're looking to personalize gifts or start a small side hustle, laser engraving has become incredibly accessible to hobbyists over the last few years. The jump from standard crafting to precise CNC cutting takes a bit of learning, but the results are unmatched.
        </p>

        <div className="bg-[#15181E] border border-[#1F2937] p-6 rounded-2xl my-8 not-prose flex items-start gap-4">
          <Shield className="w-8 h-8 text-brand shrink-0 mt-1"/>
          <div>
            <h3 className="font-serif font-bold text-lg mb-2 text-white">Crucial Safety Warning</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Laser engravers are not toys. A Class 4 diode laser can cause permanent eye damage instantly. <strong>ALWAYS wear the correct wavelength-specific safety glasses</strong> (the cheap ones included in boxes are often not enough). Never leave a running laser unattended, as flare-ups happen quickly when cutting wood or cardboard. Keep a fire extinguisher nearby.
            </p>
          </div>
        </div>

        <h2>Recommended Machines & Reviews</h2>
        <p>Over the years, I've tested several machines. My reviews dive deep into assembly, software setup, and real-world results.</p>
        <ul>
          <li>
            <Link to="/laser-engraving/ortur-laser-master-2-pro-engraver-cutter">ORTUR Laser Master 2 Pro - Assembly & Testing</Link> - An excellent entry-level diode laser offering great build volume and reliability.
          </li>
          <li>
            <Link to="/laser-engraving/laserpecker-2-pro-portable-laser-engraver">LaserPecker 2 Pro - Review</Link> - For lightning fast metal and plastic engraving, this portable Galvo unit is incredible.
          </li>
        </ul>

        <h2>Software: LightBurn is King</h2>
        <p>
          While many manufacturers ship standard free software like LaserGRBL, if you want reliable results and an efficient workflow, you need to transition to <a href="https://lightburnsoftware.com/" target="_blank" rel="noreferrer">LightBurn</a>. It is the industry standard for g-code lasers.
        </p>

        <div className="mt-16 pt-12 border-t border-[#1F2937]">
          <h2 className="flex items-center gap-3 font-serif"><HelpCircle className="w-6 h-6 text-gray-500"/> Frequently Asked Questions</h2>
          <div className="space-y-6 mt-8">
            <div className="bg-[#15181E] p-6 rounded-2xl border border-[#1F2937]">
              <h4 className="font-bold text-lg mb-2 text-white">Are diode lasers good for cutting wood?</h4>
              <p className="text-gray-400">Yes, high-power diode lasers (like 10W or 20W modules) can easily cut through thin plywood (3mm to 6mm) using multiple passes or a single slow pass with air assist.</p>
            </div>
            <div className="bg-[#15181E] p-6 rounded-2xl border border-[#1F2937]">
              <h4 className="font-bold text-lg mb-2 text-white">Do I need air assist for laser engraving?</h4>
              <p className="text-gray-400">For pure engraving, air assist isn't strictly necessary but helps keep the lens clean. For cutting, air assist is absolutely mandatory as it blows away charred material and prevents flare-ups, resulting in cleaner cuts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
