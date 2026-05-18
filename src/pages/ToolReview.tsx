import { allPosts } from "../lib/data";
import { PostCard } from "../components/PostCard";

export function ToolReview() {
  const posts = allPosts.filter(p =>
    p.tags?.includes("tool-review")
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-white">
      <h1 className="text-4xl font-serif font-bold mb-10">
        Tool Reviews
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}