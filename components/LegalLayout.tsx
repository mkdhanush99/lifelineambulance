import type { ReactNode } from "react";
import Link from "next/link";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { LEGAL_LAST_UPDATED } from "@/lib/legal";
import { PHONE_DISPLAY } from "@/lib/site-config";

export function LegalLayout({
  title,
  breadcrumb,
  children,
}: {
  title: string;
  breadcrumb: Crumb[];
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-14">
      <Breadcrumbs items={breadcrumb} />

      <h1 className="text-3xl leading-tight font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
        {title}
      </h1>
      <p className="mt-2 text-sm text-[var(--color-ink-muted)]">Last updated: {LEGAL_LAST_UPDATED}</p>

      <div className="prose-legal mt-10 space-y-8 text-[var(--color-ink)]">{children}</div>

      <p className="mt-14 border-t border-black/10 pt-6 text-sm text-[var(--color-ink-muted)]">
        Questions about this policy? Call {PHONE_DISPLAY} or visit our{" "}
        <Link href="/contact/" className="font-medium text-[var(--color-primary)]">
          contact page
        </Link>
        .
      </p>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-[var(--color-ink)]">{title}</h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-[var(--color-ink-muted)]">
        {children}
      </div>
    </section>
  );
}
