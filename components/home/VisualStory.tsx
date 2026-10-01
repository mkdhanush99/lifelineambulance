import Image from "next/image";

export function VisualStory() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 md:px-8 md:pt-28">
      <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-12">
        <div className="relative md:col-span-7">
          <div
            aria-hidden
            className="absolute -top-3.5 -left-3.5 h-[58%] w-6.5 rounded-full bg-[var(--color-primary)] opacity-90"
            style={{ transform: "rotate(20deg)" }}
          />
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-[0_24px_48px_-28px_rgba(37,37,37,0.45)]">
            <Image
              src="/photos/outstation-square.jpg"
              alt="Life Line mobile ICU ambulance on an open highway"
              fill
              loading="lazy"
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "62% 62%" }}
            />
          </div>
        </div>
        <div className="md:col-span-5">
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-[var(--color-primary)]">03 — THE VEHICLE</p>
          <h2 className="mt-2.5 text-2xl leading-[1.08] font-bold tracking-tight text-balance text-[var(--color-ink)] md:text-4xl">
            Real vehicles. Real roads out of Hyderabad.
          </h2>
          <p className="mt-4 text-base leading-[1.6] text-pretty text-[var(--color-ink-muted)]">
            A Life Line mobile ICU ambulance on the highway. Equipment and vehicle type vary by
            service and are subject to availability — the coordinator confirms on the call.
          </p>
        </div>
      </div>
    </section>
  );
}
