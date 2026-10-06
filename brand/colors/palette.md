# Color — Final

Locked from Palette B in the Phase 1 evaluation (see `../phase1-brand-analysis.md`). No objection was raised on color, so this is the working assumption for the final system — flag it if a different palette should be locked instead.

| Role | Hex | Use |
|---|---|---|
| **Primary — Deep Rose** | `#C2185B` | Symbol, "LINE" in the wordmark, primary accent (stripes, avatars, CTAs) |
| **Tint — Blush** | `#FCE4EC` | Backgrounds, hover states, large soft fields — never for the mark itself |
| **White** | `#FFFFFF` | Reverse mark on Primary or Ink; all light backgrounds |
| **Ink** | `#252525` | "LIFE" in the wordmark, body copy, black-mode fallback |

## Contrast

- Primary on White: passes WCAG AA for large text/graphics (contrast ratio ≈ 5.9:1). Do not use Primary for small body text on white — use Ink.
- White on Primary: same ratio, safe for the reverse symbol (social avatars, stripes).
- Tint is a background only — never place White or Ink text directly on Tint without testing; prefer Ink on Tint.

## Single-color rule

Black and White single-color versions of the logo system (`logo/final/*-black.svg`, `*-white.svg`) exist for contexts where only one ink is available (engraving, single-color print, embroidery, vehicle vinyl in a non-brand color). In those modes, "LIFE" and "LINE" both flatten to the one ink — the two-tone wordmark is a full-color-only device.
