// Shared button treatments so every CTA across the site gets the same
// hover/active/focus behaviour instead of each component reinventing it.
export const PRIMARY_BUTTON =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] font-semibold text-white transition-[transform,filter] duration-150 hover:brightness-110 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

export const SECONDARY_BUTTON =
  "inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white font-medium text-[var(--color-ink)] transition-colors duration-150 hover:border-[var(--color-primary)] hover:bg-[var(--color-tint)] hover:text-[var(--color-primary)] active:bg-[var(--color-tint)] disabled:pointer-events-none disabled:opacity-50";
