import React from "react";
import { SEO } from "../components/SEO";
import { AdSense } from "../components/AdSense";
import { PostCard } from "../components/PostCard";
import { getRecentPosts } from "../lib/data";
import { ArrowRight, Drill, Zap, Cuboid } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  const recentPosts = getRecentPosts(6);

  return (
    <div>
      <SEO
        title="DIY Projects & Maker Guides"
        description="Wood You Do It - DIY Projects, Laser Engraving, 3D Printing, and tool reviews by Pedro Gameiro. Build it yourself with step-by-step guides and free plans."
      />

      {/* Hero Section */}
      <section className="px-4 pt-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand/15 to-[#0F1115] border border-brand/20 flex flex-col md:flex-row items-center p-8 md:p-16 gap-12">
          <div className="z-10 flex-1">
            <div className="text-xs font-bold text-brand mb-2 uppercase tracking-widest">
              Build It Yourself
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-white">
              DIY Projects &amp;<br />
              Maker Guides
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl max-w-xl mb-8 leading-relaxed">
              Step-by-step DIY projects, workshop upgrades, laser engraving guides, and 3D printing tutorials.
              Professional results for your home garage.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Use your CSS class: official brand color + black text */}
              <Link to="/posts" className="btn-primary w-full sm:w-auto text-center">
                EXPLORE PROJECTS
              </Link>

              {/* Secondary button */}
              <a
                href="https://www.youtube.com/@WoodYouDoIt"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto text-center"
              >
                SUBSCRIBE
              </a>
            </div>
          </div>

          {/* Decorative Circle with Logo (same asset as favicon: v2 white) */}
<div className="hidden md:flex flex-1 justify-center relative pointer-events-none">
  <div
    className="relative w-96 h-96 rounded-full flex items-center justify-center"
    style={{
      boxShadow: `
        0 30px 80px rgba(0,0,0,0.55),
        inset 0 0 0 10px rgba(255,255,255,0.12),
        inset 0 -22px 55px rgba(0,0,0,0.45),
        0 0 90px rgba(254,190,16,0.18)
      `,
      background: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.08), rgba(0,0,0,0) 55%)",
      border: "1px solid rgba(255,255,255,0.18)",
    }}
  >
    {/* Inner depth layer */}
    <div
      className="absolute inset-6 rounded-full"
      style={{
        boxShadow:
          "inset 0 18px 45px rgba(255,255,255,0.06), inset 0 -28px 60px rgba(0,0,0,0.60)",
      }}
    />

    {/* IMPORTANT: logo opacity must be normal (no parent opacity) */}
    
    <img
      src="/images/logo-v2-branco.png"
      alt="Wood You Do It logo"
      className="relative z-10 h-56 w-auto opacity-100 drop-shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
        draggable={false}

    />
  </div>
</div>

        </div>
      </section>

      {/* Featured Categories Bento Box */}
      <section className="py-12 relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            to="/categories/diy-projects"
            className="bg-night border border-[#1F2937] p-6 rounded-2xl hover:bg-[#1F2937]/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6 shadow-sm text-brand">
              <Drill className="w-6 h-6" />
            </div>
            <h3 className="text-lg text-white font-bold mb-2">Woodworking &amp; DIY</h3>
            <p className="text-gray-400 text-sm">Shop furniture, outdoor builds, and clever workshop upgrades.</p>
          </Link>

          <Link
            to="/laser-engraving"
            className="bg-night border border-[#1F2937] p-6 rounded-2xl hover:bg-[#1F2937]/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6 shadow-sm text-brand">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg text-white font-bold mb-2">Laser Engraving</h3>
            <p className="text-gray-400 text-sm">Reviewing galvo lasers, diode cutters, limits, and material tests.</p>
          </Link>

          <Link
            to="/3d-printing"
            className="bg-night border border-[#1F2937] p-6 rounded-2xl hover:bg-[#1F2937]/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-6 shadow-sm text-brand">
              <Cuboid className="w-6 h-6" />
            </div>
            <h3 className="text-lg text-white font-bold mb-2">3D Printing</h3>
            <p className="text-gray-400 text-sm">Printer unboxings, large volume prints, and practical functional fixes.</p>
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 flex justify-center">
  <AdSense slot="home-top" />
</div>

      {/* Latest Posts */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-serif font-bold tracking-tight text-white">Latest Builds</h2>

          <Link
            to="/posts"
            className="text-brand font-bold hover:text-[color:var(--brand-hover)] text-xs uppercase tracking-widest flex items-center gap-2 group"
          >
            View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <AdSense slot="home-bottom" />

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-brand/10 border border-brand/30 rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-xs font-bold text-brand uppercase tracking-widest mb-4">Support the Creator</h2>
          <h3 className="text-3xl font-serif font-bold text-white mb-6">
            Support the Channel &amp; the Workshop
          </h3>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            If my plans or videos have helped you, consider grabbing some merch or buying me a coffee. It helps keep the
            tools running!
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="https://wood-you-do-it.creator-spring.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Visit Merch Shop
            </a>

            <a
              href="https://buymeacoffee.com/woodyoudoit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Buy Me A Coffee
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}