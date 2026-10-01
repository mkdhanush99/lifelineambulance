import Image from "next/image";

const READY = [
  { no: "01", t: "Pickup location" },
  { no: "02", t: "Destination hospital or address" },
  { no: "03", t: "The patient's condition" },
  { no: "04", t: "The type of service you need" },
];

export function BeforeYouCall() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 pt-16 md:grid-cols-2 md:gap-16 md:px-8 md:pt-28">
      <div className="relative mx-auto w-full max-w-[480px]">
        <div aria-hidden className="absolute top-[8%] right-0 bottom-0 left-[8%] rounded-[28px] bg-[var(--color-tint)]" />
        <div
          className="relative aspect-square overflow-hidden"
          style={{ clipPath: "polygon(12% 0, 100% 0, 88% 100%, 0 100%)" }}
        >
          <Image
            src="/photos/icu-square.jpg"
            alt="Life Line mobile ICU ambulance, front view"
            fill
            loading="lazy"
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <p className="font-mono text-xs font-medium tracking-[0.14em] text-[var(--color-primary)]">06 — BEFORE YOU CALL</p>
        <h2 className="mt-2.5 text-2xl leading-[1.08] font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
          Have these four things ready.
        </h2>
        <ol className="mt-5.5 grid border-t border-black/10">
          {READY.map((r) => (
            <li key={r.no} className="flex items-baseline gap-4 border-b border-black/10 py-3.5 font-medium">
              <span className="font-mono text-xs text-[var(--color-primary)]">{r.no}</span>
              {r.t}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-[var(--color-ink-muted)]">
          Don&apos;t have everything? Call anyway — the coordinator will ask.
        </p>
      </div>
    </section>
  );
}
