import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BlogCard } from "@/components/BlogCard";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { BLOG_POSTS } from "@/lib/blog";

const PATH = "/blog/";
const BREADCRUMB = [
  { name: "Home", path: "/" },
  { name: "Blog", path: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: "Ambulance Guide for Hyderabad | Life Line Ambulance Service",
  description:
    "Practical guides on booking, preparing for and understanding ambulance and patient transport services in Hyderabad, from Life Line Ambulance Service.",
  path: PATH,
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(BREADCRUMB)} />
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
        <Breadcrumbs items={BREADCRUMB} />

        <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">
          Blog
        </p>
        <h1 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
          Ambulance Information & Hyderabad Patient Transport Guide
        </h1>
        <p className="mt-5 max-w-2xl text-base text-[var(--color-ink-muted)] md:text-lg">
          Practical answers to the questions families and coordinators actually ask when arranging
          ambulance or patient transport in Hyderabad.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
