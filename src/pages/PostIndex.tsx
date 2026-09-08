import React from 'react';
import { SEO } from '../components/SEO';
import { AdSense } from '../components/AdSense';
import { PostCard } from '../components/PostCard';
import { allPosts, getCategories } from '../lib/data';
import { Link } from 'react-router-dom';

export function PostIndex() {
  const categories = getCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEO
        title="All Projects & Articles"
        description="Browse all DIY projects, laser engraving tutorials, and 3D printing reviews."
      />

      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mb-4">
          All Projects
        </h1>

        <p className="text-lg text-gray-400 leading-relaxed">
          Search through years of woodworking, 3D printing, and workshop organization projects.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        <span className="text-gray-500 uppercase tracking-widest text-xs font-bold mr-2">
          Filter by Category:
        </span>

        {categories.map(cat => (
          <Link
            key={cat}
            to={`/categories/${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
            className="px-4 py-2 rounded-xl bg-[#15181E] text-gray-300 hover:bg-[#1F2937] text-sm font-semibold transition-colors border border-[#1F2937]"
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* ADSENSE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 flex justify-center">
        <AdSense slot="projects-top" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allPosts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}