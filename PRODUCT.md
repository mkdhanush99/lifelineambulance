# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: individuals or family members in Hyderabad who need to arrange ambulance or patient transport, right now or for a planned date — most calls are made under stress, by someone who is not a medical professional and does not know the correct service category in advance.

Secondary: hospital-side coordinators arranging a transfer on a patient's behalf; corporate/facility contacts (offices, factories, construction sites) and event organisers arranging standby coverage; families arranging respectful transport for a deceased relative (dead body transport, mortuary transport, freezer box rental).

## Product Purpose

Life Line Ambulance Service is a phone-coordinated ambulance and patient-transport business in Hyderabad, Telangana — operating since 2012 (client-stated claim, not independently verified). The website's job is to get the right person to the phone number (9951244266) as fast as possible with the right context already in mind; it does not book, dispatch, or process payment itself. Success is a call that reaches a coordinator with a clear enough picture of the situation (pickup, destination, condition, service type) that the coordinator can act on it immediately.

## Positioning

Breadth of service under one phone number, not a speed or fleet-size claim: emergency response, private/planned transport, BLS, ICU, ventilator, NICU/neonatal, oxygen, patient transfer, outstation (intercity), dead body transport, mortuary ambulance, freezer box rental, and corporate/event standby all route through the same coordinator. The pitch to a family is "call this one number for whatever kind of transport you need," rather than having to find a different specialist provider for an unusual case (freezer box, NICU, outstation). This was confirmed with the site owner during `/impeccable init`, not inferred from marketing copy.

## Operating Context

Everything is coordinated by phone — there is no online booking, no payment flow, no patient portal, and no logged-in area. The website is read-only/informational plus a phone CTA. One physical Hyderabad location is published (`lib/site-config.ts`) — a second address was in earlier drafts but the client removed it; do not reintroduce it. A meaningful share of traffic is expected to arrive from Google Ads directly onto a service page rather than the homepage, so every service page must stand alone (full explanation + CTA, no forced homepage detour).

## Capabilities and Constraints

- Fully static Next.js 16 / TypeScript / Tailwind v4 site (App Router). No backend, no database, no auth, no CMS.
- GA4 / Google Ads / GCLID-UTM attribution wiring exists in `lib/analytics.ts` and `lib/attribution.ts` but is inert — no real GA4 measurement ID or Ads conversion ID has been supplied yet. Do not treat this as "analytics is live."
- Cookie consent banner (`components/CookieConsent.tsx`) gates analytics/advertising script loading; necessary-only by default.
- **Hard no-fabrication rule, carried from the original client brief and still binding**: never invent reviews, ratings, awards, certifications, hospital partnerships, fleet/vehicle counts, response times, staff names/credentials, prices, WhatsApp numbers, email addresses, or additional office locations. Missing facts get marked for client confirmation, not guessed.
- No WhatsApp number and no email address have been supplied — contact is phone-only (9951244266) plus the one published address.
- Legal pages (`/privacy-policy/`, `/terms-and-conditions/`, `/cancellation-refund-policy/`, `/cookie-policy/`, `/data-protection/`, `/disclaimer/`) have been read and approved by the client as final, including jurisdiction (Hyderabad, Telangana). Do not reopen these as pending or reintroduce "confirmation required" framing on the live pages.
- Terminology: "coordinator" (never "dispatcher," "operator," or "agent"); "transfer" or "transport" (not "trip" or "ride"); service names exactly as used in `lib/services.ts` (Emergency, Private, BLS, ICU, Ventilator, NICU/Neonatal, Oxygen, Patient Transfer, Outstation, Dead Body Transport, Freezer Box, Mortuary Ambulance, Event Standby, Corporate Ambulance).
- Tone: calm, direct, human — written like a knowledgeable Hyderabad ambulance coordinator explaining things to a family, not marketing copy. No superlatives ("best," "number one," "world-class") unless independently verifiable.

## Brand Commitments

- Founder & Owner: **Aluvala Lokesh**, who has run Life Line Ambulance Service since 2012 — oversees day-to-day operations and risk management behind each transfer. Named on `/about/` with a `Person` schema block; do not add unverified biographical detail (education, prior career, awards) beyond what's stated here.
- Name: Life Line Ambulance Service. Logo ("Response Marks"): three forward-leaning bars of increasing height resolving into a leading point — concept is "escalating motion, arriving at a point of care." The mark must never be redrawn, recolored into a gradient, rotated, or replaced with a generic ambulance icon; flat fills only, per the client's own brand guide.
- Palette: Primary/Deep Rose `#C2185B`, Blush `#FCE4EC`, White `#FFFFFF`, Ink `#252525`, with a muted `#6b6b6b` for secondary text — all defined as CSS variables in `app/globals.css`.
- Typography: geometric grotesk (Geist, self-hosted via `next/font`); the wordmark itself renders "LIFE" in Ink and "LINE" in Primary as a fixed brand device (see `components/FooterMark.tsx` and `public/brand/`).
- Real client-supplied vehicle and freezer-box-equipment photography exists in `public/photos/` and should be preferred over stock imagery or illustration for anything depicting the actual fleet.

## Evidence on Hand

- The Hyderabad address, phone number, and social links (Facebook, Instagram — resolved to their canonical non-tracking URLs) are real, client-supplied, and live in `lib/site-config.ts` / `lib/legal.ts`.
- "Serving patients and families since 2012" is a client-provided claim, carried verbatim, not independently verified.
- No reviews, ratings, awards, certifications, hospital partnership names, fleet size, or staff credentials have ever been supplied. Absence is deliberate, not an oversight — future work must not fill these in to make a section "feel complete."
- 4 real fleet/equipment photos supplied by the client are in use; a 5th was withheld because it shows phone numbers painted on the vehicle that don't match the official 9951244266 (unresolved — flagged, not silently dropped).

## Product Principles

1. The phone number is the product. Every surface exists to get the right person to 9951244266 with useful context, not to replace the phone call.
2. Never invent what wasn't given. A missing fact is marked for confirmation, never smoothed over with plausible-sounding specifics.
3. Breadth over speed. The honest differentiator is covering unusual/specialist needs (outstation, NICU, freezer box, corporate standby) under one number, not a response-time or fleet-size claim nobody has verified.
4. Every paid-traffic landing page stands alone. Users arriving from Google Ads on a specific service page must never be forced through the homepage to get what they need.
5. Calm, specific, human language over marketing register — the tone of a coordinator who has explained this a thousand times, not an ad.

## Accessibility & Inclusion

No client-specified accessibility requirement was given; the build defaults to WCAG 2.1 AA practice on its own initiative (44px touch targets, visible focus states, semantic landmarks, `prefers-reduced-motion` respected throughout, no hover-only functionality). Treat this as the working standard unless the client states otherwise.
