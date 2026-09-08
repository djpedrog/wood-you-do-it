import React from 'react';
import { SEO } from '../components/SEO';
import { AdSense } from '../components/AdSense';
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
  3D printing has transformed the way makers, hobbyists and small businesses create products, prototypes and custom solutions. What once required expensive manufacturing equipment can now be produced directly from a desktop machine, often within a matter of hours.
  <br /><br />
  From replacement parts and workshop accessories to functional prototypes, home improvements and creative projects, 3D printing offers an incredible level of flexibility and freedom. The ability to design, customize and manufacture objects on demand makes it one of the most useful tools available to modern makers.
  <br /><br />
  Understanding the fundamentals of materials, slicing software, printer calibration and troubleshooting is the key to achieving reliable results. Whether you're printing simple functional components or highly detailed models, mastering these core principles will allow you to produce stronger, cleaner and more consistent prints.
  <br /><br />
  This hub brings together practical knowledge, recommended equipment, troubleshooting advice and frequently asked questions to help you get the most from your 3D printing journey.
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
  <h4 className="text-white font-bold mb-2">
    <a
      href="https://bambulab.com/en-us"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-brand transition-colors"
    >
      Bambu Lab
    </a>
  </h4>

  <p className="text-gray-400 text-sm">
    Widely regarded as one of the most innovative brands in consumer 3D printing, Bambu Lab combines high-speed printing, automatic calibration and exceptional print quality. Their printers are ideal for makers looking for professional results with minimal setup and tuning.
  </p>
</div>

          </div>
        </div>

        {/* ADSENSE */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 flex justify-center">
  <AdSense slot="3d-hub" />
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
  Not anymore. Entry-level 3D printers are more affordable than ever, and a quality machine can often be purchased for less than many power tools. Beyond the printer itself, the main ongoing costs are filament, occasional replacement parts and the time spent learning and experimenting. For most hobbyists, 3D printing quickly becomes a cost-effective way to create custom parts, repairs and prototypes.
</p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">How long does a print take?</h4>
              <p className="text-gray-400 text-sm">
  Print time depends on several factors, including the size of the model, layer height, infill percentage and overall complexity. Small functional parts may finish in under an hour, while larger projects, detailed models or multi-part assemblies can take many hours or even run overnight. Finding the right balance between speed and quality is one of the key skills every 3D printing enthusiast develops.
</p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">Why do prints fail?</h4>
              <p className="text-gray-400 text-sm">
  Most failed prints can be traced back to a handful of common issues such as poor bed leveling, incorrect temperatures, inadequate first-layer adhesion or improper slicer settings. Mechanical issues like loose belts or clogged nozzles can also cause problems. Fortunately, most failures are highly predictable and become much easier to diagnose once you gain experience with your machine and materials.
</p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">Do I need calibration?</h4>
              <p className="text-gray-400 text-sm">
  Yes. Proper calibration is one of the most important factors in achieving consistent print quality. Tasks such as bed leveling, nozzle height adjustment, flow calibration and temperature tuning help ensure reliable first layers and accurate dimensions. While modern printers have simplified many of these processes, occasional calibration remains essential for the best results.
</p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">Can I make money with 3D printing?</h4>
              <p className="text-gray-400 text-sm">
  Absolutely. Many makers start by selling customized products, replacement parts, workshop accessories or prototypes for local businesses. Success usually comes from identifying a specific niche rather than trying to compete in crowded markets. While a printer alone won't create a business overnight, it can become a valuable tool for generating additional income and building a side business.
</p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">How often should I maintain my printer?</h4>
              <p className="text-gray-400 text-sm">
  Regular maintenance is crucial for reliability and print quality. Basic tasks such as cleaning the build plate, inspecting belts, lubricating moving components and checking nozzle condition should be performed frequently. A few minutes of preventive maintenance can eliminate many common printing problems and significantly extend the lifespan of the machine.
</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}