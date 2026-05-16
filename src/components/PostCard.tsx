import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../lib/data";

export function PostCard({ post }: { post: Post }) {
  const categorySlug = post.category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const postUrl = `/${categorySlug}/${post.slug}`;

  return (
    <div className="bg-[#15181E] rounded-2xl border border-[#1F2937] overflow-hidden hover:border-[#374151] transition-colors flex flex-col h-full group">
      <Link to={postUrl} className="block aspect-[16/9] bg-[#1F2937] overflow-hidden relative">
        <img
          src={post.heroImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 blur-sm"
          loading="lazy"
        />

        {/* Play icon overlay if it has a video */}
        {post.youtubeVideoId && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <img
              src={`https://img.youtube.com/vi/${post.youtubeVideoId}/maxresdefault.jpg`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt={post.title}
              onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${post.youtubeVideoId}/hqdefault.jpg`;
              }}
            />
            <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl z-20">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
        )}
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <Link
            to={`/categories/${categorySlug}`}
            className="text-[10px] font-bold uppercase tracking-widest text-brand hover:text-brand-600 transition-colors"
          >
            {post.category}
          </Link>
          <span className="text-gray-600">&bull;</span>
          <span className="text-xs text-gray-500">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        <Link to={postUrl}>
          <h3 className="text-lg font-bold text-white leading-tight mb-3 group-hover:text-brand transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">{post.excerpt}</p>

        <Link
          to={postUrl}
          className="inline-flex font-semibold text-white hover:text-brand transition-colors uppercase text-xs tracking-widest items-center gap-1"
        >
          Read Project <span className="text-brand">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
