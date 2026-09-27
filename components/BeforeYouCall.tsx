import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-config";
import { BEFORE_YOU_CALL_ITEMS, FINDER_DISCLAIMER } from "@/lib/finder-data";
import { PRIMARY_BUTTON } from "@/lib/button-styles";

export function BeforeYouCall({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
      {!compact && (
        <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">
          Before You Call
        </p>
      )}
      <ol className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {BEFORE_YOU_CALL_ITEMS.map((item, index) => (
          <li key={item} className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-tint)] text-xs font-semibold text-[var(--color-primary)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="pt-0.5 text-sm text-[var(--color-ink)]">{item}</span>
          </li>
        ))}
      </ol>
      <a href={PHONE_HREF} className={`${PRIMARY_BUTTON} mt-6 w-full px-6 py-3.5 text-base sm:w-auto`}>
        Call {PHONE_DISPLAY}
      </a>
      {!compact && <p className="mt-4 text-xs text-[var(--color-ink-muted)]">{FINDER_DISCLAIMER}</p>}
    </div>
  );
}
