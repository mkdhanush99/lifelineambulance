# Content Handover — Life Line Ambulance Service

Content lives in code (no CMS). Where to edit each item is in the right-hand column. Content is split into what the **client supplied** and what **needs client confirmation**. Nothing in the second list should be treated as verified.

## A. VERIFIED CLIENT INFORMATION (supplied by the client for this project)

| Item | Value | Where |
|---|---|---|
| Business name | Life Line Ambulance Service | `lib/site-config.ts` |
| Phone / WhatsApp | 9951244266 | `lib/site-config.ts` |
| Single published address | Plot No. 10, House No. 7-3-234, 2nd Floor, Sri Sai Ram Colony, Bairamalguda, Hyderabad, Telangana 500070 (the client removed the second location) | `lib/site-config.ts` |
| Operating since | 2012 (client-stated claim, shown as "Serving patients and families since 2012") | `lib/site-config.ts`, homepage |
| Founder / owner | Aluvala Lokesh | `app/about/page.tsx`, `lib/jsonld.ts` |
| Social profiles | Facebook and Instagram URLs | `lib/site-config.ts` |
| Service lineup | The 14 services below | `lib/services.ts` |
| Brand | Logo, palette (#C2185B, #FCE4EC, #252525, white), typography | `brand/` |
| Domain | lifelineambulances.in | Hostinger |

## B. CONTENT REQUIRING CLIENT CONFIRMATION

Written for the site from general knowledge of how these services work and from the brief; the client has **not** certified these statements.

- Descriptions of what each ambulance type is and can carry ("what to expect" text on the 14 service pages). Equipment and staffing vary by vehicle; the pages deliberately say "confirm with the coordinator" rather than listing guaranteed equipment.
- Coverage: the list of Hyderabad localities on the areas page (`lib/areas.ts`) is descriptive, not a guaranteed response time anywhere.
- Founder biography paragraphs on the About page (role, involvement) beyond the name.
- All FAQ answers (homepage 4, service pages 2-4 each).
- All 8 blog articles (`lib/blog.ts`, `app/blog/*`). Medical statements in them are general information and should be reviewed by the client.
- Safety guide (`app/safety/page.tsx`) and the Ambulance Finder logic/data (`lib/finder-data.ts`).
- The six legal pages (see section G).
- **Not published because not supplied:** email address, opening hours (the site does not claim 24x7 or any response time), fleet size, certifications, customer reviews/ratings, prices. None may be added without client-supplied proof.

## C. Homepage (`app/page.tsx`)

Order: Hero (H1 "Ambulance Service in Hyderabad, When You Need Patient Transport", Call and View-services buttons) -> credibility bar (5 items) -> "since 2012" bar -> Service explorer (finder chips + 14 service cards) -> visual story -> How it works (scroll animation) -> Hyderabad areas network map -> Before you call -> Latest articles -> "Common questions" FAQ (4) -> dark closing CTA.

## D. Service pages (14)

Emergency, Private, BLS, ICU, Ventilator, NICU / Neonatal, Oxygen, Patient Transfer, Outstation, Dead Body Transport, Freezer Box on Rent, Mortuary, Event Standby, Corporate. Shared template: `components/ServicePageTemplate.tsx`; per-page copy in `app/<slug>/page.tsx`; illustrations in `components/visuals/ServiceIllustration.tsx`. Each page has hero, explanation, FAQ block, related services, call CTA, breadcrumbs and schema.

## E. Other pages

About (`app/about`), Contact (`app/contact`: call, location, social; no form), Areas (`app/ambulance-service-areas-hyderabad`), Safety guide, Ambulance Finder, Blog index + 8 posts.

## F. Footer (`components/Footer.tsx`)

Phone, address, social links, Services list (14), Company list, legal links, emergency disclaimer (`EMERGENCY_DISCLAIMER` in `lib/site-config.ts`).

## G. Legal pages (`lib/legal.ts`, `app/<page>`)

Privacy Policy, Terms & Conditions, Cancellation & Refund, Cookie Policy, Data Protection, Disclaimer. "Last updated" is `LEGAL_LAST_UPDATED` in `lib/legal.ts`.

**These texts were drafted for the site, not by a lawyer. They need client / legal review before being relied on.** Do not add commitments (refund windows, response times, liability limits) that the client has not approved.
