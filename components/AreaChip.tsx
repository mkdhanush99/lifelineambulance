export function AreaChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-[var(--color-ink)] transition-colors duration-150 hover:border-[var(--color-primary)] hover:bg-[var(--color-tint)]">
      {name}
    </span>
  );
}
