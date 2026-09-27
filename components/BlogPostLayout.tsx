import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { CTASection } from "./CTASection";
import { ServiceCard } from "./ServiceCard";
import { BLOG_LAUNCH_DATE } from "@/lib/blog";
import { SERVICES } from "@/lib/services";
import { BUSINESS_NAME } from "@/lib/site-config";

export function BlogPostLayout({
  title,
  breadcrumb,
  relatedSlugs,
  children,
}: {
  title: string;
  breadcrumb: Crumb[];
  relatedSlugs?: string[];
  children: ReactNode;
}) {
  const related = SERVICES.filter((s) => relatedSlugs?.includes(s.slug));

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-14">
      <Breadcrumbs items={breadcrumb} />

      <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">Blog</p>
      <h1 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
        {BLOG_LAUNCH_DATE} · {BUSINESS_NAME}
      </p>

      <div className="prose-blog mt-10 space-y-5 text-[var(--color-ink)] [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-[var(--color-ink)] [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_a]:font-medium [&_a]:text-[var(--color-primary)]">
        {children}
      </div>

      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="mb-4 text-xl font-bold tracking-tight text-[var(--color-ink)]">Related services</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {related.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-10">
        <Link href="/blog/" className="text-sm font-medium text-[var(--color-primary)]">
          ← Back to all articles
        </Link>
      </div>

      <div className="mt-10">
        <CTASection />
      </div>
    </article>
  );
}
