import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="block h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <p className="text-lg font-semibold text-[var(--color-ink)]">{post.title}</p>
      <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{post.excerpt}</p>
      <span className="mt-4 inline-block text-sm font-medium text-[var(--color-primary)]">Read article →</span>
    </Link>
  );
}
