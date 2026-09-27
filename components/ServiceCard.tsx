import Link from "next/link";
import type { ServiceSummary } from "@/lib/services";

export function ServiceCard({ service }: { service: ServiceSummary }) {
  const content = (
    <>
      <p className="text-base font-semibold text-[var(--color-ink)]">{service.name}</p>
      <p className="mt-1.5 text-sm text-[var(--color-ink-muted)]">{service.short}</p>
      {service.href && (
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)]">
          Learn more
          <span aria-hidden className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">
            →
          </span>
        </span>
      )}
      {!service.href && (
        <span className="mt-3 inline-block text-xs font-medium text-[var(--color-ink-muted)]">
          Page coming soon — call to ask
        </span>
      )}
    </>
  );

  const className =
    "group block h-full rounded-2xl border bg-white p-5 shadow-sm transition-[transform,box-shadow,border-color] duration-150 " +
    (service.href
      ? "border-black/5 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:shadow-md active:translate-y-0 active:shadow-sm"
      : "border-black/5 opacity-80");

  if (service.href) {
    return (
      <Link href={service.href} className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
