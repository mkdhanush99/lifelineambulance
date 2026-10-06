# FINAL QA — Life Line Ambulance Service

Date: 2026-10-06. Tested against a local **production build** (`next build --webpack` + `next start`, `NEXT_PUBLIC_SITE_URL=https://lifelineambulances.in`) and the live site where noted. `[x]` = verified by a test or inspection described here. `[ ]` = not verified / needs action. Nothing is ticked on assumption.

## Automated results (this run)

| Check | Result |
|---|---|
| `tsc --noEmit` | 0 errors |
| `eslint` | 0 problems |
| `next build --webpack` | Success, 39 static pages |
| `scripts/audit.mjs` (35 routes) | No issues: titles, descriptions, canonicals, H1, JSON-LD parse, OG/Twitter, alt, noindex on legal pages, 35 internal links, robots, 404 |
| Browser sweep: 35 routes x 8 widths (360, 390, 430, 768, 1024, 1280, 1440, 1920) | 0 horizontal overflows, 0 broken images, 0 console/page errors |
| DOM accessibility sweep at 390 and 1440 | 0 unnamed buttons/links, 0 unlabeled inputs, exactly one H1 per page, 0 skipped heading levels, 0 images without alt. Footer link lists were under 24px tall and were fixed (now 0) |
| Location button, with browser geolocation granted | Opens `api.whatsapp.com/send/?phone=919951244266&text=...My current location: https://maps.google.com/?q=<lat>,<lng>` |
| `npm audit` | Fixed the one runtime finding (`source-map-js`). 5 high remain in the lint toolchain only (see README-DEVELOPER) |

## Fixes made during handover (production issues only, no design change)

1. `Permissions-Policy` had `geolocation=()`, which blocks the Location button in browsers. Now `geolocation=(self)`. Deployed 2026-10-06 and verified live (`permissions-policy: ... geolocation=(self)`).
2. Fallback domain in code pointed at a non-existent domain; now `https://lifelineambulances.in` (also `.env.example`).
3. Footer links enlarged to a >=24px tap target (padding only).
4. JSON-LD output now escapes `<` (`<`) as defence in depth.
5. Removed unused code/assets: `components/ui/*` (WebGL atmosphere, unused), `components/visuals/EscalationBar.tsx`, 4 unreferenced photos, 4 unreferenced logo files (kept in `brand/`), unused package `@gsap/react`.
6. Replaced the default Next.js README.

## Checklist

### DESIGN
- [x] Approved visual design preserved (no layout/visual changes beyond footer link padding)
- [x] Logo correct (approved SVGs copied from the Developer Assets set; none redrawn)
- [x] Brand colours correct (tokens match `brand/colors/palette.md`)
- [ ] Typography: logo lockups use the approved wordmark; the site UI uses Geist Sans, which is a site decision and is not specified in the brand typography doc. Client to accept
- [ ] No placeholder visuals: the Private Ambulance page reuses emergency-style artwork (no dedicated approved art). Client to supply or approve

### FUNCTIONALITY
- [x] Navigation works (35 routes, 35 internal links, no broken ones)
- [x] Call works (`tel:+919951244266` links present; one number site-wide)
- [x] WhatsApp works (`wa.me/919951244266`)
- [x] Location button works (tested with granted geolocation); falls back to a plain WhatsApp message if denied
- [x] Contact: the page offers call / address / social links
- [x] Forms: **none exist** (call/WhatsApp only). Nothing to test
- [x] All links work (crawler; external social links not requested)
- [ ] Real-device test of Call / WhatsApp / Location on iOS and Android (the Permissions-Policy fix is now live)

### SEO
- [x] Titles, meta descriptions, H1, canonicals, schema syntax, sitemap, robots, internal links, alt text (see `handover/SEO.md`)
- [x] No accidental noindex; only the six legal pages are noindex by design
- [ ] Rich Results Test not run
- [ ] Search Console connection / sitemap submission / indexing: not done, client action (`handover/SEO-INDEXING-SETUP.md`)

### PERFORMANCE
- [x] Production build succeeds
- [x] Images use `next/image`; unused images removed
- [ ] Layout shift, Lighthouse and Core Web Vitals: **not measured**, no scores claimed
- [x] Mobile and desktop widths tested (automated, 8 widths); no overflow
- [ ] Visual review by eye at every breakpoint listed was not done; only automated checks plus earlier manual 390 and 1440 reviews

### ACCESSIBILITY
- [x] Keyboard: skip link present, visible focus ring defined (`a/button:focus-visible`); not a full manual keyboard walkthrough
- [x] Labels: buttons, links, images, headings pass the DOM sweep
- [ ] Colour contrast: not run on the site. Brand doc says primary on white is ~5.9:1 for large text only; keep small body text in ink
- [x] Reduced motion: `MotionConfig reducedMotion="user"`, CSS media queries and JS checks in the animated components (code inspected, not re-tested in a browser this run)
- [x] Touch targets: standalone links fixed; inline text links remain smaller and are exempt

### SECURITY
- [x] No secrets in source or git (pattern search on tracked files; only `.env.example` is tracked and holds no values)
- [x] No debug/admin/API routes; no `console.*`, `debugger`, localhost or TODO strings in `app/`, `components/`, `lib/`
- [x] All `target="_blank"` links have `rel="noopener noreferrer"`
- [x] Only unsafe HTML sink is JSON-LD built from static code data
- [x] Security headers set (CSP, HSTS, X-Frame-Options DENY, nosniff, Referrer-Policy)

### LEGAL
- [x] Six legal pages exist, linked in the footer, noindex
- [ ] **Client / legal review required** for all six. Drafted for the site, not by a lawyer. No new commitments were added

### DEPLOYMENT
- [x] Production domain https://lifelineambulances.in serves HTTPS 200 (checked 2026-10-01)
- [x] DNS resolves (managed in Hostinger)
- [ ] Environment variables: `NEXT_PUBLIC_SITE_URL` evidently set (live sitemap uses the right domain); GA/Ads/Search Console values unknown, confirm in hPanel
- [x] Fixes above deployed 2026-10-06; live site returns 200, sitemap 200 with 29 URLs, canonical `https://lifelineambulances.in/`
- [ ] Remove or redirect the temporary hostingersite.com copy

### CLIENT HANDOVER
- [x] README-CLIENT.md
- [x] README-DEVELOPER.md
- [x] DEPLOYMENT.md
- [x] FINAL-QA.md
- [x] SEO document (`handover/SEO.md`, `SEO-INDEXING-SETUP.md`)
- [x] Asset package (`brand/`); content, routes, contact and analytics docs in `handover/`
