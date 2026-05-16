import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Zap, Shield, HelpCircle, Wrench, Settings, Flame } from 'lucide-react';

export function PillarLaser() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can beginners use laser engravers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many modern laser engravers are designed for beginners and require minimal setup, especially portable models like LaserPecker."
        }
      },
      {
        "@type": "Question",
        "name": "What can a laser engraver cut or engrave?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can engrave wood, leather, acrylic, coated metals, plastics and more depending on the power of the machine."
        }
      }
    ]
  };

  return (
    <div>
      <SEO 
        title="Laser Engraving Hub - Ultimate Guide"
        description="Learn laser engraving from beginner to advanced. Machines, materials, troubleshooting, safety and real-world tips."
        schema={schema}
      />

      {/* HERO */}
      <div className="bg-[#15181E] border-b border-[#1F2937] text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Zap className="w-16 h-16 text-brand mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Laser Engraving Hub
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Master laser engraving from beginner to advanced with real tools, real workflows and real results.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-4 py-20 text-white">

        {/* INTRO */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-6">Why Laser Engraving?</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Laser engraving is one of the most versatile tools in modern DIY and small business creation.
            It allows you to create precise, repeatable designs on a wide range of materials, from wood and leather to metal and plastics.
          </p>
        </div>

        {/* SAFETY */}
        <div className="bg-[#15181E] border border-[#1F2937] rounded-2xl p-8 mb-20 flex gap-6">
          <Shield className="w-10 h-10 text-brand shrink-0"/>
          <div>
            <h3 className="text-xl font-bold mb-3">Safety First</h3>
            <p className="text-gray-400">
              Laser engravers are powerful tools. Always wear certified laser safety glasses,
              ensure proper ventilation and never leave your machine unattended.
              Wood and leather can ignite quickly during cutting operations.
            </p>
          </div>
        </div>

        {/* MACHINES */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold mb-6">Recommended Machines</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">
                <Link to="/posts/laserpecker-2-pro-laser-engraver-review">
                  LaserPecker 2 Pro (Top Pick)
                </Link>
              </h4>
              <p className="text-gray-400 text-sm">
                Extremely portable and fast. Perfect for beginners, small production and detailed engraving.
              </p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">xTool D1 Pro</h4>
              <p className="text-gray-400 text-sm">
                Powerful diode system with excellent precision and modular upgrades.
              </p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">Ortur Laser Master 3</h4>
              <p className="text-gray-400 text-sm">
                High-speed diode engraver with strong power output.
              </p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">Atomstack A10 Pro</h4>
              <p className="text-gray-400 text-sm">
                Great balance between cost and performance.
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

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Weak Engraving</h4>
      <p className="text-sm">
        Usually caused by low power, high speed or incorrect focus. 
        Increase laser power, slow down movement, and make sure the focal distance is correct.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Blurry or Faded Details</h4>
      <p className="text-sm">
        The most common cause is incorrect focus. Even a 1–2mm difference can ruin precision. 
        Refocus carefully using the manufacturer’s recommended distance.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Cut Not Going Through</h4>
      <p className="text-sm">
        Increase power or run multiple passes. Also check material thickness and ensure air assist is being used.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Burn Marks Around Edges</h4>
      <p className="text-sm">
        Reduce power and increase speed slightly. Using masking tape helps prevent staining on wood surfaces.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Excessive Charring</h4>
      <p className="text-sm">
        This usually means heat is accumulating. Use air assist, increase speed or reduce power.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Engraving Not Visible</h4>
      <p className="text-sm">
        Some materials do not react well to diode lasers. Try different settings or test on another material.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Inconsistent Depth</h4>
      <p className="text-sm">
        The material surface may not be flat. Ensure the object is level and the laser distance is constant.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Laser Does Not Fire</h4>
      <p className="text-sm">
        Check emergency stop, safety lock, and software connection. Also ensure power is correctly supplied.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Machine Disconnecting</h4>
      <p className="text-sm">
        Restart the connection (USB/Bluetooth), close conflicting apps, and check cable quality.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Warped or Distorted Designs</h4>
      <p className="text-sm">
        Often caused by incorrect scaling or movement issues. Recalibrate and check preview alignment before engraving.
      </p>
    </div>

  </div>
</div>

        {/* SOFTWARE */}
<div className="mb-20">
  <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
    <Settings className="w-6 h-6"/> Software & Workflow
  </h2>

  <div className="space-y-6 text-gray-400">

    <div className="bg-[#15181E] border border-[#1F2937] p-6 rounded-xl">
      <h4 className="text-white font-bold mb-2">LightBurn (Recommended)</h4>
      <p className="mb-3 text-sm">
        Industry standard software for laser engraving. Offers advanced control over power, speed, layers and workflows.
      </p>
      <a href="https://lightburnsoftware.com/" target="_blank" rel="noreferrer" className="text-brand">
        Visit LightBurn →
      </a>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-6 rounded-xl">
      <h4 className="text-white font-bold mb-2">LaserGRBL (Free Option)</h4>
      <p className="mb-3 text-sm">
        A free and open-source solution for diode laser engravers. Ideal for beginners and simple engraving tasks.
      </p>
      <a href="https://lasergrbl.com/" target="_blank" rel="noreferrer" className="text-brand">
        Visit LaserGRBL →
      </a>
    </div>

  </div>
</div>

        {/* FAQ */}
        <div className="border-t border-[#1F2937] pt-16">
          <h2 className="text-3xl font-serif font-bold mb-10 flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-gray-500"/> FAQ
          </h2>

          <div className="grid gap-6">

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="font-bold mb-2">Can you start a business with laser engraving?</h4>
              <p className="text-gray-400">Yes, it's one of the most popular side hustles today.</p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="font-bold mb-2">Is it hard to learn?</h4>
              <p className="text-gray-400">No, most beginners learn the basics in a few hours.</p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="font-bold mb-2">What is the best beginner machine?</h4>
              <p className="text-gray-400">
                The LaserPecker 2 Pro is one of the easiest ways to get started.
              </p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="font-bold mb-2">Do I need ventilation?</h4>
              <p className="text-gray-400">
                Yes. Laser engraving produces smoke and fumes. Proper ventilation is highly recommended.
              </p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="font-bold mb-2">How long does it take to learn?</h4>
              <p className="text-gray-400">
                Most beginners can start producing results within a few hours of setup and testing.
              </p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="font-bold mb-2">Is laser engraving safe indoors?</h4>
              <p className="text-gray-400">
                It can be, but only with proper ventilation and safety precautions.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}