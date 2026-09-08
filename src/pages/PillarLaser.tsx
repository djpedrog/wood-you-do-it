import React from 'react';
import { SEO } from '../components/SEO';
import { AdSense } from '../components/AdSense';
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

        {/* ADSENSE */}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 flex justify-center">
  <AdSense slot="laser-hub" />
</div>

        {/* TROUBLESHOOTING */}
<div className="mb-20">
  <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
    <Wrench className="w-6 h-6" /> Troubleshooting Guide
  </h2>

  <p className="text-gray-400 mb-10 leading-relaxed">
    Even the best laser engravers occasionally produce unexpected results. Most
    problems are caused by focus issues, incorrect speed and power settings,
    material inconsistencies or poor airflow. The good news is that the vast
    majority of engraving and cutting problems can be solved with a few basic
    checks before starting a new project.
  </p>

  {/* ENGRAVING ISSUES */}
  <h3 className="text-xl font-bold text-gray-300 mb-4">
    Engraving Issues
  </h3>

  <div className="grid md:grid-cols-2 gap-6 mb-10">

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Weak Engraving</h4>
      <p className="text-sm text-gray-400">
        Weak or barely visible engravings are usually caused by low laser power,
        excessive engraving speed or incorrect focus. Start by checking the
        focal distance and ensure that the laser beam is concentrated at its
        smallest point. A dirty lens can also dramatically reduce performance,
        so regular cleaning is essential. If the material allows it, increase
        the power setting or reduce the travel speed to give the laser more time
        to mark the surface effectively.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Blurry Details</h4>
      <p className="text-sm text-gray-400">
        Blurred lines, fuzzy edges or poor image definition are almost always
        related to focus issues. Recheck the focal height before every project
        and ensure the material surface is perfectly flat. Mechanical vibrations,
        loose belts or excessive engraving speed may also reduce detail quality.
        For photo engravings and intricate artwork, slower speeds often produce
        noticeably sharper results.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Burn Marks</h4>
      <p className="text-sm text-gray-400">
        Burn marks and smoke staining are particularly common when engraving wood
        and plywood. Excessive power settings or poor airflow allow heat to
        accumulate on the surface. Using masking tape, improving ventilation and
        reducing laser power can significantly reduce discoloration. Air assist
        systems are especially effective at keeping the engraving zone clean and
        minimizing residue.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">No Visible Engraving</h4>
      <p className="text-sm text-gray-400">
        If the machine appears to be working but leaves no visible mark, the
        material may simply be unsuitable for diode laser engraving. Transparent
        acrylic, mirrors and certain coated metals often require specific laser
        types or surface treatments. Verify that the laser is actually firing,
        confirm the focus settings and test on a known engravable material
        before troubleshooting further.
      </p>
    </div>

  </div>

  {/* CUTTING ISSUES */}
  <h3 className="text-xl font-bold text-gray-300 mb-4">
    Cutting Issues
  </h3>

  <div className="grid md:grid-cols-2 gap-6 mb-10">

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Cut Not Going Through</h4>
      <p className="text-sm text-gray-400">
        One of the most common cutting problems occurs when the laser fails to
        penetrate the full thickness of the material. This may be caused by
        insufficient power, excessive speed or a focus point that is not
        positioned correctly. Multiple passes can often solve the issue,
        especially on thicker wood products. Air assist can also greatly improve
        cutting efficiency by clearing smoke and debris from the kerf.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Excessive Charring</h4>
      <p className="text-sm text-gray-400">
        Heavy charring is usually a sign that too much heat is being transferred
        into the material. Slower airflow, excessive power or too many passes
        can create dark edges and smoke residue. Reducing power slightly and
        increasing airflow generally produces cleaner cuts while preserving edge
        quality.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Edges Too Dark</h4>
      <p className="text-sm text-gray-400">
        Dark cut edges are common when working with plywood and MDF. While some
        discoloration is unavoidable, it can be reduced through better
        ventilation, cleaner optics and optimized speed settings. Applying
        masking tape before cutting can also help protect visible surfaces from
        smoke staining.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Flame-Ups During Cutting</h4>
      <p className="text-sm text-gray-400">
        Small flames can occasionally occur when cutting wood, cardboard or
        other combustible materials. Stop the machine immediately if flames
        persist for more than a second or two. Improve airflow, use air assist,
        reduce power when possible and never leave a laser engraver unattended
        during operation.
      </p>
    </div>

  </div>

  {/* MACHINE ISSUES */}
  <h3 className="text-xl font-bold text-gray-300 mb-4">
    Machine & Setup Issues
  </h3>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Laser Not Firing</h4>
      <p className="text-sm text-gray-400">
        If the laser module does not activate, start by checking all physical
        connections and safety features. Many modern engravers include movement
        sensors, emergency stops and protective interlocks that prevent
        operation under certain conditions. Verify software settings, power
        connections and USB communication before assuming the laser module
        itself is faulty.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Machine Disconnecting</h4>
      <p className="text-sm text-gray-400">
        Unexpected disconnects are often related to unstable USB connections,
        poor quality cables or power management settings. Use a short shielded
        USB cable whenever possible and disable operating system power-saving
        features that may interrupt communication during long engraving sessions.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Uneven Engraving</h4>
      <p className="text-sm text-gray-400">
        Variations in engraving depth or darkness usually indicate that the
        material surface is not level across the working area. Even small height
        differences can affect focus and create inconsistent results. Always
        secure materials firmly and check that the work surface is flat before
        starting the job.
      </p>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-5 rounded-xl">
      <h4 className="text-white font-bold mb-2">Distorted Designs</h4>
      <p className="text-sm text-gray-400">
        Distorted circles, stretched graphics or incorrect scaling typically
        point to motion-system issues. Loose belts, improper calibration or
        incorrect software settings can all affect dimensional accuracy. Running
        a frame preview before engraving is a simple way to detect many of these
        problems in advance.
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
      <p className="mb-3 text-sm leading-relaxed">
  LightBurn is widely regarded as the industry-leading software for laser cutters and engravers, trusted by hundreds of thousands of users worldwide. By combining powerful design tools, advanced laser control settings and direct machine connectivity, it provides everything you need from the initial concept to the finished project.
  <br /><br />
  Designed for makers of all experience levels, LightBurn adapts equally well to hobby projects, side businesses and full-scale production environments. Whether you're engraving photos, personalizing products, cutting intricate designs or optimizing layouts to maximize material usage, the software offers the flexibility and precision required for professional results.
  <br /><br />
  One of LightBurn's greatest strengths is its broad hardware compatibility. It supports hundreds of laser machines from dozens of manufacturers, including diode, CO₂, fiber and UV lasers, allowing you to use the same workflow even when upgrading or expanding your workshop.
  <br /><br />
  Built for both speed and reliability, LightBurn delivers an intuitive interface, responsive editing tools and highly efficient cut planning. The result is a stable workflow that helps you stay productive, whether you're creating a single personalized item or managing larger batch-production jobs.
</p>
      <a href="https://lightburnsoftware.com/" target="_blank" rel="noreferrer" className="text-brand">
        Visit LightBurn →
      </a>
    </div>

    <div className="bg-[#15181E] border border-[#1F2937] p-6 rounded-xl">
      <h4 className="text-white font-bold mb-2">LaserGRBL (Free Option)</h4>
      <p className="mb-3 text-sm">
        LaserGRBL is one of the best Windows software for image Laser Engraving. LaserGRBL is able to load any image, pictures and logo and send to your laser engrave with few click.

Unlike other GUI, LaserGRBL it is specifically developed for use with hobbist laser cutter and engraver and could be a good free and easy alternative to picengrave, benbox, T2laser, lightburn for who don’t need more then a simple and effective tool.
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
              <p className="text-gray-400">Yes. Laser engraving has become one of the most accessible ways to start a small creative business. Many makers sell personalized gifts, signage, product branding, custom workshop accessories and engraved items online. Starting small with a diode laser and focusing on niche products is often the best approach before scaling production.</p>
            </div>

            <div className="bg-[#15181E] p-6 rounded-xl border border-[#1F2937]">
              <h4 className="font-bold mb-2">Is it hard to learn?</h4>
              <p className="text-gray-400">Not really. Most beginners can learn the fundamentals within a few days. Modern software such as LightBurn has made the learning process much easier, and there are thousands of tutorials available online. The biggest learning curve is understanding the relationship between speed, power and material settings.</p>
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