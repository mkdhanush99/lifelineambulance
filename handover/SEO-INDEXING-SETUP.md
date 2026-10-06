# SEO & Indexing Setup

This site is **ready to be submitted to Google. It has not been indexed by anything this project can verify.** No Search Console data, rankings, impressions or indexed-page counts exist here, and none should be claimed.

## Steps after the site is live on https://lifelineambulances.in

1. **Connect Google Search Console.** Add the property for `https://lifelineambulances.in` (a *URL-prefix* property matches how the site is built). Either use the HTML-tag method: copy the `content` value into the env var `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, rebuild and redeploy (the tag is emitted by `app/layout.tsx`); or verify with a DNS TXT record in Hostinger hPanel.
2. **Submit the sitemap:** Search Console -> Sitemaps -> `https://lifelineambulances.in/sitemap.xml`. It lists 29 URLs. `robots.txt` already points to it.
3. **Inspect important URLs** with URL Inspection and click *Request indexing*: the homepage, each of the 14 service pages, `/ambulance-service-areas-hyderabad/`, `/contact/`.
4. **Monitor after launch:** Search Console -> Pages (indexing report) for "Crawled, currently not indexed" or "Duplicate" statuses; check that Google picks the slash canonical URL.
5. **Google Business Profile:** verify the listing with the same name, phone (9951244266) and address (see `CONTACT.md`) as the site. For a local ambulance business this matters as much as the website.
6. **Retire the temporary site** `darkgray-mosquito-287545.hostingersite.com` (or make sure its canonical points at the real domain) so Google does not see two copies.

## Expectations

Indexing can take days to weeks and is never guaranteed. A new domain with little history may show few impressions at first. Do not represent any ranking or timeline to the client as a promise.

## What already exists in the code

Per-page titles/descriptions/H1/canonicals, Open Graph + Twitter metadata with a 1200x630 image, JSON-LD (LocalBusiness, WebSite, Service, BreadcrumbList, FAQPage, Article), sitemap, robots, trailing-slash redirects, `en-IN` language tag, noindex on the six legal pages. Details: `SEO.md`.
