# Developer Guide — Life Line Ambulance Service

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4. Fully static: no backend, database, auth or CMS. Deploy details: `DEPLOYMENT.md`. QA record: `FINAL-QA.md`. Documents in `handover/`.

## Architecture
- Every page is a server component that renders content from `lib/*` data plus shared components. Pre-rendered at build (39 pages).
- Client components exist only where needed: header menu, floating dock, consent banner, analytics, homepage interactive sections (service explorer, areas map, how-it-works scroll animation), custom cursor, footer mark.
- Security headers (CSP, HSTS, X-Frame-Options, Permissions-Policy, nosniff, Referrer-Policy) are set in `next.config.ts`. `Permissions-Policy` allows `geolocation=(self)` because the Location button needs it.
- `trailingSlash: true`: all URLs end with `/`.

## Folder structure
```
app/            routes (one folder per page), layout.tsx, globals.css (design tokens), sitemap.ts, robots.ts, not-found.tsx
components/     shared UI; home/ = homepage sections + icon paths; visuals/ = service illustrations
lib/            site-config (NAP, URLs), services, areas, blog, legal, finder-data, metadata, jsonld, analytics, attribution, consent, button-styles
public/         brand/ (logo SVGs + hero image), photos/, favicons, og-image.jpg
brand/          approved brand package: logos, colors, typography, guidelines (reference only, not served)
handover/       CONTENT, CONTACT, ROUTES, SEO, SEO-INDEXING-SETUP, ANALYTICS
scripts/audit.mjs   SEO/link crawler (see below)
.claude/ .cursor/ .impeccable   AI design-tooling config; not used by the build
```
Asset naming: files in `public/` keep their existing descriptive names. There is no separate `/assets` tree; moving files would change URLs and break references for no benefit.

## Routes
See `handover/ROUTES.md`. 29 in the sitemap, 6 `noindex` legal pages, `/sitemap.xml`, `/robots.txt`, 404.

## Reusable components
`Header`, `Footer`, `FloatingDock` (Call/WhatsApp/Location), `ServicePageTemplate` (all 14 service pages), `ServicePhoto`, `FAQ` (Radix accordion), `Breadcrumbs`, `CTASection`, `SectionHeading`, `Reveal` (scroll reveal), `BlogCard`/`BlogPostLayout`, `LegalLayout`, `JsonLd`, `ConsentProvider`/`CookieConsent`/`Analytics`. Button class strings: `lib/button-styles.ts`.

## Design tokens
CSS variables in `app/globals.css`: `--color-primary #C2185B`, `--color-tint #FCE4EC`, `--color-ink #252525`, `--color-ink-muted #6B6B6B`, `--color-white`, `--color-cloud #F4F3F5`; exposed to Tailwind through `@theme inline`. Font: Geist Sans / Geist Mono via `next/font` (self-hosted). Brand rules: `brand/guidelines/style-guide.md`.

## Assets
Logos used by the site: `public/brand/horizontal-pink.svg` (header), `symbol-pink.svg` (schema logo), hero `ambulance-hero-v3.webp`. Photos: `public/photos/icu-square.jpg`, `outstation-square.jpg`. Social image `public/og-image.jpg` (1200x630). Service illustrations are inline SVG in `components/visuals/ServiceIllustration.tsx` and `components/home/service-icons.ts`.

## SEO
`lib/metadata.ts` `buildMetadata()` builds title/description/canonical/OG/Twitter for every page. `lib/jsonld.ts` builds schema (LocalBusiness, WebSite, Service, BreadcrumbList, FAQPage, Article, Person). Sitemap routes are a hand-maintained list in `app/sitemap.ts` (+ blog slugs): **adding a page means adding it there**. Legal pages are noindex via metadata and excluded from the sitemap. Report: `handover/SEO.md`. Crawler: `npm run build && npx next start -p 3100`, then `AUDIT_BASE_URL=http://localhost:3100 node scripts/audit.mjs`.

## Analytics
Consent-gated GA4/Google Ads, delegated click tracking for `tel:` and Maps links, UTM/gclid capture. See `handover/ANALYTICS.md` for events and what is NOT implemented.

## Environment variables
Five optional `NEXT_PUBLIC_*` variables, build-time only: `.env.example`, `DEPLOYMENT.md`.

## Build / deploy
`npm run build` = `next build --webpack` (Turbopack crashes on Hostinger's builder). Upload a `git archive` zip or connect the GitHub repo. See `DEPLOYMENT.md`.

## Known limitations
- No contact form, booking, CMS or admin; content edits require a code change and redeploy.
- No WhatsApp/Location click tracking; no GA4/Ads IDs in the repo.
- Homepage FAQs have no `FAQPage` schema.
- Legal copy and all medical/service copy are unreviewed by the client or a lawyer.
- No Lighthouse/Core Web Vitals measurement was taken; not claimed.
- `npm audit` still reports 5 high findings in the **lint toolchain** (`eslint-config-next` -> `fast-glob`). Not part of the production runtime; the fix needs a breaking `--force` upgrade, deliberately not applied.
- Footer/inline text links inside paragraphs are shorter than 24px (inline links are exempt under WCAG 2.2 target-size); standalone footer links were enlarged.
- `.impeccable` is a git submodule (design tooling); a fresh clone needs `git submodule update --init` only if you use it.
- Temporary site `darkgray-mosquito-287545.hostingersite.com` still exists on the account.
