# Life Line Ambulance Service — Brand Identity Style Guide
### Final — Response Marks system

This is the locked identity, selected from the Phase 1–4 exploration (`phase1-brand-analysis.md`, `logo/concepts/`, `logo/selected/shortlist.md`) and refined in Phase 5. **Client selected Response Marks** (concept 5) over the originally-recommended LL Rotor; this document and the `logo/final/` system were rebuilt around that choice.

## The mark

**Response Marks** — three forward-leaning bars of increasing height, resolving into a leading point. Unchanged from the approved concept geometry (`logo/concepts/concept-5-response.svg`) — same bars, same rotation, same dot; nothing was redrawn or re-proportioned for production.

Architecture: an escalating silhouette (not a borrowed "speed lines" cliché) that arrives at a single point of care — the client-facing read is urgency and forward motion arriving at a person, not a generic corporate motion mark. Per the original concept notes: this direction reads as the most overtly "fast" of the six explored, at the cost of being the most geometrically conventional device in the set (closest of the six to a generic motion mark) — a tradeoff the client weighed and accepted in choosing it.

## Color

See `colors/palette.md`. Primary `#C2185B`, Tint `#FCE4EC`, White `#FFFFFF`, Ink `#252525`.

## Typography

See `typography/typography.md`. Geometric grotesk, bold name / medium wide-tracked descriptor, with the wordmark's two words carrying the two palette colors as a direct callback to the two-arm symbol.

## The full system

All files in `logo/final/`, each in three color modes (`-pink`, `-white`, `-black`):

| File | Use |
|---|---|
| `symbol-*.svg` | Icon-only mark. Also the favicon / compact symbol — no further simplification needed, it already holds at 16px. |
| `wordmark-*.svg` | Type-only, no symbol. |
| `horizontal-*.svg` | Symbol + wordmark side by side — the primary lockup for headers, vehicle panels, business cards. |
| `stacked-*.svg` | Symbol above wordmark, centered — for square/portrait contexts (rear doors, invoices, social headers). |

PNG exports (16 / 32 / 48 / 192 / 512 / 1024 / 2048px, via Inkscape) live in `logo/final/png/<variant>/logo-<size>.png` for all 12 variants — use these anywhere a raster file is required instead of SVG.

**Which color mode, when:**
- `-pink` — default, on white or light backgrounds
- `-white` — reverse, on the Primary pink field or any dark/photographic background (this is also the "pink + white" version the brief asked for: white mark, shown on the pink field)
- `-black` — single-ink contexts only (engraving, one-color print, non-brand vehicle vinyl)

## Application testing

See `applications/mockups.html` for all 10 required contexts (ambulance side panel, ambulance rear, staff uniform, website header, mobile header, social profile, business card, invoice, favicon, 16px symbol). Two findings worth carrying forward:

- The **two-line wordmark doesn't fit a mobile nav bar** at a readable size — mobile header uses symbol-only, by design, not as a fallback.
- The **three bars can visually merge below ~24px** — the leading dot is what keeps the mark anchored and identifiable at favicon scale, even when the individual bars blur together. Don't rely on the bar count being countable at 16px; the color + silhouette + dot are doing the identifying work there, not the bar detail.

## Clearspace & minimum size

- Minimum clearspace: one bar-width (the shortest bar) on every side of any lockup (see `typography/typography.md`)
- Minimum digital size: 16px (favicon floor, verified)
- Minimum print size: recommend not below 12mm symbol height for vinyl/embroidery, consistent with the 24px legibility floor above

## Don'ts

- Don't recolor the symbol into a gradient — flat fills only, all the way down to single-color modes
- Don't split the wordmark's two-tone treatment across single-color (black/white) versions — those flatten to one ink
- Don't crop the symbol tighter than its own bounding square when placing it in a circle/badge — the current avatar treatment (pink field, white reverse symbol, generous internal padding) is the reference (`applications/mockups.html`, #6)
- Don't reproduce this mark, or reference this document's construction notes, as a substitute for the client's own trademark search/clearance — that's a legal step outside this design process
