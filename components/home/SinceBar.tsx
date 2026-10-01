const YEARS = Array.from({ length: 15 }, (_, i) => ({
  h: 10 + i * 3.7,
  o: 0.35 + i * 0.045,
}));

export function SinceBar() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-6 px-4 pt-10 sm:grid-cols-2 md:gap-12 md:px-8 md:pt-18">
      <div>
        <p className="font-mono text-xs font-medium tracking-[0.14em] text-[var(--color-primary)]">SINCE 2012</p>
        <p className="mt-2 text-3xl leading-[1.05] font-bold tracking-tight text-balance text-[var(--color-ink)] md:text-5xl">
          Serving patients and families in Hyderabad.
        </p>
      </div>
      <div>
        <div className="flex h-16 items-end gap-1 md:gap-2.5" aria-hidden="true">
          {YEARS.map((y, i) => (
            <i
              key={i}
              className="max-w-4 flex-1 origin-bottom rounded-full bg-[var(--color-primary)]"
              style={{ height: `${y.h}px`, opacity: y.o, transform: "rotate(20deg)" }}
            />
          ))}
        </div>
        <div className="mt-2.5 flex justify-between font-mono text-xs font-medium tracking-[0.1em] text-[var(--color-ink-muted)]">
          <span>2012</span>
          <span>TODAY</span>
        </div>
      </div>
    </section>
  );
}
