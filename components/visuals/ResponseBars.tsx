/**
 * The brand's own escalating-bar geometry (see public/brand/symbol-pink.svg),
 * reused as a decorative motif — never the logo itself, never recolored into
 * a gradient. Renders three forward-leaning bars of increasing height at a
 * given anchor point; scale controls overall size.
 */
export function ResponseBars({
  x,
  y,
  scale = 1,
  opacity = 1,
}: {
  x: number;
  y: number;
  scale?: number;
  opacity?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} opacity={opacity}>
      <rect x="0" y="18" width="8" height="18" rx="4" fill="var(--color-primary)" transform="rotate(20 4 27)" />
      <rect x="14" y="8" width="8" height="28" rx="4" fill="var(--color-primary)" transform="rotate(20 18 22)" />
      <rect x="28" y="-6" width="8" height="42" rx="4" fill="var(--color-primary)" transform="rotate(20 32 15)" />
    </g>
  );
}
