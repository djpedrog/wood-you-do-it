export interface Resource {
  label: string;
  url: string;
  note?: string;
  active: boolean;
}

export interface Download {
  label: string;
  url: string;
  fileType: string;
  size?: string;
}

export interface Post {
  slug: string;
  title: string;
  category: string;
  date: string;
  youtubeVideoId: string;
  originalBloggerUrl: string;
  excerpt: string;
  heroImage: string;
  tags: string[];
  body: string;
  resources: Resource[];
  downloads: Download[];
}

// Vite glob import for all JSON posts
const postModules = import.meta.glob('../content/posts/*.json', { eager: true });

export const allPosts: Post[] = Object.values(postModules).map((mod: any) => mod.default || mod).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find(p => p.slug === slug);
}

export function getCategories(): string[] {
  const cats = new Set(allPosts.map(p => p.category));
  return Array.from(cats).sort();
}

export function getPostsByCategory(category: string): Post[] {
  return allPosts.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

export function getRecentPosts(limit = 3): Post[] {
  return allPosts.slice(0, limit);
}
