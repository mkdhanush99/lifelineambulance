import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-config";
import { PRIMARY_BUTTON } from "@/lib/button-styles";

export function DarkCTA() {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-4 md:mt-28 md:px-8">
      <div className="relative overflow-hidden rounded-[32px] bg-[var(--color-ink)] p-8 text-white md:p-18">
        <svg
          viewBox="0 0 400 200"
          className="pointer-events-none absolute -right-5 -bottom-2.5 w-[min(70%,540px)]"
          fill="none"
          aria-hidden
        >
          <g fill="var(--color-primary)">
            <rect x="170" y="110" width="26" height="70" rx="13" opacity="0.35" transform="rotate(20 183 145)" />
            <rect x="220" y="70" width="26" height="110" rx="13" opacity="0.5" transform="rotate(20 233 125)" />
            <rect x="270" y="20" width="26" height="160" rx="13" opacity="0.7" transform="rotate(20 283 100)" />
          </g>
          <circle cx="340" cy="34" r="12" fill="var(--color-primary)" />
        </svg>
        <div className="relative max-w-xl">
          <h2 className="text-3xl leading-[1.05] font-bold tracking-tight text-balance md:text-5xl">
            Tell the coordinator where from and where to.
          </h2>
          <a href={PHONE_HREF} className={`${PRIMARY_BUTTON} mt-7 px-8 py-4 text-lg`}>
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
