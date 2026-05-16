import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostBySlug } from "../lib/data";
import { SEO } from "../components/SEO";
import { YouTubeEmbed } from "../components/YouTubeEmbed";
import { AdSense } from "../components/AdSense";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { Download, Youtube, Instagram } from "lucide-react";

const CustomImage = (props: any) => (
  <Zoom>
    <img
      {...props}
      className="rounded-lg"
      style={{
        width: "100%",
        cursor: "zoom-in"
      }}
    />
  </Zoom>
);

export function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug!);

  const headings = useMemo(() => {
    if (!post) return [];
    const matches = post.body.match(/^##\s+(.*)/gm);
    return matches ? matches.map((m) => m.replace("## ", "")) : [];
  }, [post]);

  if (!post) {
    return (
      <div className="text-center py-32">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link to="/posts" className="text-brand-600 hover:underline">
          Return to projects
        </Link>
      </div>
    );
  }

  const categorySlug = post.category.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  return (
    <div>
      <SEO title={post.title} description={post.excerpt} />

      {/* HERO */}
      <div className="bg-[#15181E] border-b border-[#1F2937] text-white py-16 px-4 mb-12">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 mb-6">
            <Link to={`/categories/${categorySlug}`} className="hover:text-brand">
              ← Back to {post.category}
            </Link>
          </nav>

          <h1 className="text-4xl font-serif font-bold mb-4">
            {post.title}
          </h1>

          <p className="text-gray-400">
            {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-24">
        <article>
          <p className="text-xl text-gray-400 mb-10">
            {post.excerpt}
          </p>

          <AdSense slot="in-article-top" />

          {post.youtubeVideoId && (
            <div className="mb-12">
              <YouTubeEmbed videoId={post.youtubeVideoId} />
            </div>
          )}

          {/* ✅ BODY + ZOOM (SEM ERROS) */}
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({ children }) => {
                  const childrenArray = React.Children.toArray(children);
                  const hasImage = childrenArray.some(
                    (child) => {
                      if (!React.isValidElement(child)) return false;
                      return (
                        child.type === "img" ||
                        child.type === CustomImage ||
                        child.type === Zoom ||
                        (typeof child.type === "function" && child.type.name === "Controlled")
                      );
                    }
                  );
                  if (hasImage) return <div className="gallery-p mb-4">{children}</div>;
                  return <p className="mb-4">{children}</p>;
                },
                img: CustomImage,
              }}
            >
              {post.body}
            </ReactMarkdown>
          </div>

          <AdSense slot="in-article-bottom" />

          {/* ✅ SUPPORT SECTION */}
          <div className="mt-16 bg-[#15181E] border border-[#1F2937] rounded-3xl p-8 text-center text-white">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Support the Channel
            </h3>

            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              If this project helped you, consider supporting the channel or follow for more builds.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.youtube.com/@WoodYouDoIt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#FF0000] text-black font-bold rounded-xl hover:scale-105 transition"
              >
                <Youtube className="w-5 h-5 !text-black" />
                <span className="!text-black">Subscribe</span>
              </a>

              <a
                href="https://www.instagram.com/wood_you_do_it"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-white font-bold rounded-xl hover:scale-105 transition"
                style={{
                  background:
                    "linear-gradient(45deg, #f09433, #dc2743, #cc2366, #bc1888)"
                }}
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>

              <a
                href="https://www.paypal.com/paypalme/woodyoudoit"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#003087] text-white font-bold rounded-xl hover:scale-105 transition"
              >
                💳 PayPal
              </a>

              <a
                href="https://www.buymeacoffee.com/woodyoudoit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#FFDD00] hover:bg-[#FFCC00] font-bold rounded-xl transition-all !text-black"
              >
                <span className="!text-black">☕ Buy Me a Coffee</span>
              </a>
            </div>
          </div>

          {/* ✅ DOWNLOADS */}
          {post.downloads && post.downloads.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[#1F2937]">
              <h3 className="text-2xl font-serif font-bold mb-6 text-white">
                Free Plans & Downloads
              </h3>

              <div className="space-y-4">
                {post.downloads.map((dl, i) => (
                  <a
                    key={i}
                    href={dl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#15181E] border border-[#1F2937] hover:border-brand hover:bg-[#1F2937] transition-colors group"
                  >
                    <Download className="w-5 h-5 text-gray-400 group-hover:text-brand" />

                    <div className="flex-1">
                      <div className="font-semibold text-white group-hover:text-brand">
                        {dl.label}
                      </div>
                    </div>

                    <span className="text-xs text-gray-400">
                      {dl.fileType}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}