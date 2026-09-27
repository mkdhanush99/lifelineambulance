export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 md:mb-10">
      <p className="font-mono text-sm tracking-widest text-[var(--color-primary)]">{index}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-ink)] md:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-[var(--color-ink-muted)]">{subtitle}</p>}
    </div>
  );
}
