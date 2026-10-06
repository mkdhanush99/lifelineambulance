# Route Inventory

Source of truth: `find app -name page.tsx` plus `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`. All URLs use a trailing slash (`trailingSlash: true`). Production build output: **39 static pages**, no server-rendered or API routes.

Base: `https://lifelineambulances.in`

## Indexable pages (in `sitemap.xml`, 29)

| Group | Route |
|---|---|
| Home | `/` |
| Service pages (14) | `/emergency-ambulance-service-hyderabad/` · `/private-ambulance-service-hyderabad/` · `/bls-ambulance-hyderabad/` · `/icu-ambulance-hyderabad/` · `/ventilator-ambulance-hyderabad/` · `/nicu-ambulance-hyderabad/` · `/oxygen-ambulance-hyderabad/` · `/patient-transfer-ambulance-hyderabad/` · `/outstation-ambulance-hyderabad/` · `/dead-body-transport-hyderabad/` · `/freezer-box-on-rent-hyderabad/` · `/mortuary-ambulance-hyderabad/` · `/event-ambulance-service-hyderabad/` · `/corporate-ambulance-service-hyderabad/` |
| Local / coverage | `/ambulance-service-areas-hyderabad/` |
| Company | `/about/` · `/safety/` · `/contact/` |
| Tool | `/ambulance-finder/` |
| Blog (index + 8 posts) | `/blog/` · `/blog/how-to-book-an-ambulance-in-hyderabad/` · `/blog/icu-ambulance-vs-bls-ambulance-difference/` · `/blog/when-does-a-patient-need-a-ventilator-ambulance/` · `/blog/hospital-to-hospital-ambulance-transfer-checklist/` · `/blog/outstation-ambulance-from-hyderabad-what-to-plan/` · `/blog/freezer-box-services-for-families-in-hyderabad/` · `/blog/ambulance-services-for-corporate-offices-and-events/` · `/blog/emergency-ambulance-vs-patient-transport/` |

## Live but `noindex, follow` and not in the sitemap (6)

`/privacy-policy/` · `/terms-and-conditions/` · `/cancellation-refund-policy/` · `/cookie-policy/` · `/data-protection/` · `/disclaimer/`

## Generated routes

`/sitemap.xml` · `/robots.txt` · custom 404 (`app/not-found.tsx`, returns HTTP 404).

## Not present

There is no `/services/` index page (services are listed on the homepage and in the footer), no booking/checkout, no login, no admin, no API routes, no contact form endpoint.

## Ad-destination guidance

Use a service page as the landing page for the matching ad group (e.g. ICU ad -> `/icu-ambulance-hyderabad/`). Do not use the legal pages as ad destinations.
