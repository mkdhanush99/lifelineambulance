# Typography — Final

## Typeface

**Geometric/grotesk sans** (system stack: `Helvetica Neue, Arial, sans-serif`), bold weight for the name, medium weight + wide tracking for the descriptor. Kept self-contained (no external font loading) per the SVG conventions this system is built to — every logo file renders identically with no font dependency.

Grotesk was chosen over humanist (too soft/friendly for 24-hour emergency transport) and over a heavier slab/serif (reads dated, closer to the "civic/utilitarian" cliché flagged in Phase 1).

## The custom move: two words, two colors

Rather than typing the name in one flat color, the wordmark splits on the brand's two names:

- **LIFE** — set in Ink (`#252525`)
- **LINE** — set in Primary (`#C2185B`)
- **AMBULANCE SERVICE** — set beneath in a neutral gray (`#6b6b6b`), medium weight, +5 letter-spacing, roughly 38% the point size of the name

This typographic decision was originally paired with the LL Rotor concept (two interlocked L-blocks = two words) but holds independently of which symbol it sits next to — it's a naming-level device, not a symbol-level one, so it carried over unchanged when the client selected Response Marks instead. The pink used for "LINE" also echoes the symbol's own bars, keeping type and mark in the same color family.

Single-color modes (black/white) flatten both words to one ink — see `../colors/palette.md`.

## Spacing & kerning

- Name: `letter-spacing: 0.5` (near-default; the bold grotesk doesn't need loosening at this size)
- Descriptor: `letter-spacing: 5` — deliberately wide, standard convention for a small-caps-style descriptor line under a wordmark, and it keeps "AMBULANCE SERVICE" from feeling cramped under the much larger name above it
- Name-to-descriptor baseline gap: fixed at 50 units in a 620-unit-wide artboard (see `../logo/final/wordmark-pink.svg`) — do not tighten this further, it's already at the minimum before the descriptor starts to visually merge with the name's baseline

## Symbol-to-wordmark relationship

- **Horizontal lockup:** symbol at left, full two-line wordmark at right, vertically centered on the wordmark's optical center (not its mathematical center — the descriptor line's extra weight pulls it slightly lower)
- **Stacked lockup:** symbol centered above, wordmark centered below, name lines centered under the symbol
- Minimum clearspace around either lockup: one bar-width of the symbol (the shortest bar, 40 of the symbol's 512 units) on every side — don't crop tighter than that in any application
