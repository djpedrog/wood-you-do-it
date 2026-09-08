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
  <h4 className="text-white font-bold mb-2">
    <a
      href="https://www.xtool.eu/pages/xtool-m2-color-craft-laser-cutter-engraver"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-brand transition-colors"
    >
      xTool M2
    </a>
  </h4>

  <p className="text-gray-400 text-sm">
    A hybrid laser cutter and blade cutting machine designed for makers, crafters and small businesses. Ideal for wood, leather, acrylic and creative projects.
  </p>
</div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="text-white font-bold mb-2">
  <Link to="/laser-engraving/ortur-laser-master-2-pro-review">
    Ortur Laser Master 2 Pro
  </Link>
</h4>
<p className="text-gray-400 text-sm">
  20W diode laser engraver featuring advanced safety systems, fast engraving speeds and excellent LightBurn compatibility.
</p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
  <h4 className="text-white font-bold mb-2">
    <a
      href="https://atomstack.com/en-eu/products/atomstack-ace-pro-v2"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-brand transition-colors"
    >
      Atomstack ACE Pro V2
    </a>
  </h4>

  <p className="text-gray-400 text-sm">
    High-performance diode laser engraver with advanced safety features, fast engraving speeds and excellent engraving precision for workshop and business use.
  </p>
</div>

          </div>
        </div>

        {/* TROUBLESHOOTING */}
<div className="mb-20">
  <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
    <Wrench className="w-6 h-6"/> Troubleshooting Guide
  </h2>

  {/* ENGRAVING ISSUES */}
  <h3 className="text-xl font-bold text-gray-300 mb-4">Engraving Issues</h3>

  <div className="grid md:grid-cols-2 gap-6 mb-10">

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Weak Engraving</h4>
      <p className="text-sm text-gray-400">
        Increase power or reduce speed. Also check if the lens is clean and focus distance is correct.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Blurry Details</h4>
      <p className="text-sm text-gray-400">
        Incorrect focus is the main cause. Always recalibrate focal height before starting.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Burn Marks</h4>
      <p className="text-sm text-gray-400">
        Reduce power and increase speed. Use masking tape to protect wood surfaces.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">No Visible Engraving</h4>
      <p className="text-sm text-gray-400">
        Some materials don't react to diode lasers. Try coated materials or increase contrast.
      </p>
    </div>

  </div>

  {/* CUTTING ISSUES */}
  <h3 className="text-xl font-bold text-gray-300 mb-4">Cutting Issues</h3>

  <div className="grid md:grid-cols-2 gap-6 mb-10">

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Cut Not Going Through</h4>
      <p className="text-sm text-gray-400">
        Increase power, reduce speed or use multiple passes. Air assist is highly recommended.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Excessive Charring</h4>
      <p className="text-sm text-gray-400">
        Use air assist and increase speed slightly to reduce heat buildup.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Edges Too Dark</h4>
      <p className="text-sm text-gray-400">
        Lower power and improve airflow. Masking also helps reduce burn marks.
      </p>
    </div>

  </div>

  {/* MACHINE ISSUES */}
  <h3 className="text-xl font-bold text-gray-300 mb-4">Machine & Setup Issues</h3>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Laser Not Firing</h4>
      <p className="text-sm text-gray-400">
        Check safety lock, power supply and software connection.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Machine Disconnecting</h4>
      <p className="text-sm text-gray-400">
        Restart USB/Bluetooth and avoid low-quality cables.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Uneven Engraving</h4>
      <p className="text-sm text-gray-400">
        Ensure material surface is flat and stable across the entire working area.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Distorted Designs</h4>
      <p className="text-sm text-gray-400">
        Recalibrate frame preview and check scaling settings before engraving.
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

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="font-bold mb-2">Can you start a business with laser engraving?</h4>
              <p className="text-gray-400">
  Yes. Laser engraving has become one of the most accessible ways to start a small creative business. Many makers sell personalized gifts, signage, product branding, custom workshop accessories and engraved items online. Starting small with a diode laser and focusing on niche products is often the best approach before scaling production.
</p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="font-bold mb-2">Is it hard to learn?</h4>
              <p className="text-gray-400">
  Not really. Most beginners can learn the fundamentals within a few days. Modern software such as LightBurn has made the learning process much easier, and there are thousands of tutorials available online. The biggest learning curve is understanding the relationship between speed, power and material settings.
</p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="font-bold mb-2">What is the best beginner machine?</h4>
              <p className="text-gray-400">
  The best machine depends on your budget and goals, but the LaserPecker 2 Pro is one of the easiest ways to get started. It offers simple setup, good portability and reliable performance. For larger projects, desktop machines such as the Ortur or Atomstack product lines offer more working area and flexibility.
</p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="font-bold mb-2">Do I need ventilation?</h4>
              <p className="text-gray-400">
  Absolutely. Laser engraving produces smoke, particles and fumes that should not be inhaled. Proper ventilation improves both safety and engraving quality by removing smoke from the laser path. Whenever possible, use an extraction system, air assist and operate the machine in a well-ventilated area.
</p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="font-bold mb-2">How long does it take to learn?</h4>
              <p className="text-gray-400">
  Most users can produce acceptable engravings within a few hours of setup and testing. However, mastering materials, fine-tuning settings and achieving consistent professional results usually takes a few weeks of experimentation. Like any tool, experience has a significant impact on quality and efficiency.
</p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="font-bold mb-2">Is laser engraving safe indoors?</h4>
              <p className="text-gray-400">
  It can be safe indoors when proper precautions are followed. Good ventilation, suitable laser safety glasses and constant supervision are essential. Certain materials can release harmful fumes when engraved, so always verify material compatibility before starting a project and never leave a running laser unattended.
</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}