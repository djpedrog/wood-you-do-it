import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PostCard } from '../components/PostCard';
import { getPostsByCategory } from '../lib/data';

export function CategoryIndex() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  // Reconstruct the display name roughly, or fetch true name from a post
  const posts = categorySlug 
    ? getPostsByCategory(categorySlug.replace(/-/g, ' ')) // Very naive reconstruction, works for basic slugs
    : [];

  const displayCategory = posts.length > 0 ? posts[0].category : categorySlug;

  if (posts.length === 0) {
     const allPostsTry = import.meta.glob('../content/posts/*.json', { eager: true });
     const fallbackPosts = Object.values(allPostsTry)
       .map((mod: any) => mod.default || mod)
       .filter(p => p.category.toLowerCase().replace(/[^a-z0-9]+/g, '-') === categorySlug);
       
     if (fallbackPosts.length === 0) {
       return (
         <div className="text-center py-32">
           <h1 className="text-3xl font-bold mb-4">Category not found</h1>
           <Link to="/posts" className="text-brand-600 hover:underline">Return to all projects</Link>
         </div>
       );
     }
     posts.push(...fallbackPosts);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SEO 
        title={`${displayCategory} Projects`} 
        description={`Browse all projects inside the ${displayCategory} category on Wood You Do It.`}
      />
      
      <div className="mb-12">
        <Link to="/posts" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-brand mb-4 inline-block transition-colors">&larr; Back to all projects</Link>
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-white mb-4 capitalize">{displayCategory}</h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
          Showing {posts.length} {posts.length === 1 ? 'project' : 'projects'} in this category.
        </p>
        <hr className="border-[#1F2937]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
