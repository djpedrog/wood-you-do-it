import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Printer, Settings, HelpCircle, Wrench, Layers } from 'lucide-react';

export function Pillar3D() {

  return (
    <div>
      <SEO 
        title="3D Printing Hub - Ultimate Guide"
        description="Complete guide to 3D printing: printers, materials, troubleshooting and workflow."
      />

      {/* HERO */}
      <div className="bg-[#15181E] border-b border-[#1F2937] text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Printer className="w-16 h-16 text-brand mx-auto mb-6"/>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            3D Printing Hub
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Learn how to design, print and troubleshoot like a pro — from beginner mistakes to advanced tuning.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-20 text-white">

        {/* INTRO */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-6">Why 3D Printing?</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            3D printing allows you to create functional parts, prototypes and custom tools on demand.
            Once you understand the fundamentals of slicing, materials and machine calibration, 
            it becomes one of the most powerful tools in any workshop.
          </p>
        </div>

        {/* PRINTERS */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-6">Recommended Printers</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">
                <Link to="/3d-printing/longer-lk5-pro-3d-printer">
                  Longer LK5 Pro (My Setup)
                </Link>
              </h4>
              <p className="text-gray-400 text-sm">
                Ideal for large-format prints. Perfect for learning while working on real-world projects.
              </p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">Creality Ender 3</h4>
              <p className="text-gray-400 text-sm">
                One of the most popular entry-level printers with huge community support.
              </p>
            </div>

          </div>
        </div>

        {/* TROUBLESHOOTING */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
            <Wrench className="w-6 h-6"/> Troubleshooting Guide
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-400">

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">Poor Bed Adhesion</h4>
              <p className="text-sm">
                Usually caused by poor leveling or dirty build plate. Clean the surface and adjust Z-offset.
              </p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">Stringing</h4>
              <p className="text-sm">
                Caused by incorrect retraction and high temperatures. Adjust both settings accordingly.
              </p>
            </div>

          </div>
        </div>

        {/* SOFTWARE */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
            <Settings className="w-6 h-6"/> Software & Workflow
          </h2>

          <div className="space-y-3">
            <a href="https://ultimaker.com/software/ultimaker-cura/" target="_blank" rel="noreferrer" className="text-brand block">
              Cura →
            </a>

            <a href="https://www.prusa3d.com/page/prusaslicer_424/" target="_blank" rel="noreferrer" className="text-brand block">
              PrusaSlicer →
            </a>
          </div>
        </div>

        {/* ✅ FAQ EM GRID PREMIUM */}
        <div className="border-t border-[#1F2937] pt-16">
          <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
            <HelpCircle className="w-6 h-6"/> FAQ
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">Is 3D printing expensive?</h4>
              <p className="text-gray-400 text-sm">
                Entry-level printers are now very affordable. The main investment becomes time spent learning and experimenting with settings.
              </p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">How long does a print take?</h4>
              <p className="text-gray-400 text-sm">
                Print time varies depending on size and detail. Small prints can take under an hour, while large prints may take several hours.
              </p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">Why do prints fail?</h4>
              <p className="text-gray-400 text-sm">
                Most failures are caused by incorrect bed leveling, temperature settings or material adhesion problems.
              </p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">Do I need calibration?</h4>
              <p className="text-gray-400 text-sm">
                Yes. Proper calibration ensures first layer success and consistent print quality across projects.
              </p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">Can I make money with 3D printing?</h4>
              <p className="text-gray-400 text-sm">
                Many people start side businesses using 3D printing to sell custom parts and designs.
              </p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">How often should I maintain my printer?</h4>
              <p className="text-gray-400 text-sm">
                Regular maintenance like cleaning, tightening belts and lubricating parts is essential for long-term reliability.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}