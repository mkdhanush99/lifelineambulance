# Contact Information — Single Source of Truth

Code source: `lib/site-config.ts`. Every page reads from there; nothing is hard-coded per page except body copy that quotes the phone number.

| Field | Value |
|---|---|
| Business | Life Line Ambulance Service |
| Phone (display) | 9951244266 |
| Phone (`tel:`) | `tel:+919951244266` |
| WhatsApp | `https://wa.me/919951244266` |
| Website | https://lifelineambulances.in |
| Address | Plot No. 10, House No. 7-3-234, 2nd Floor, Sri Sai Ram Colony, Bairamalguda, Hyderabad, Telangana 500070 |
| Facebook | https://www.facebook.com/people/Lifeline-Ambulances/61576050151469/ |
| Instagram | https://www.instagram.com/lifelineambulances/ |
| Founder / owner (as published) | Aluvala Lokesh |

## Consistency check (done on the source and the production build)

- One phone number (9951244266) appears across code and pages; no other number is used. The string `6157605015` that a raw search finds is inside the Facebook profile ID, not a phone number.
- One address, from `ADDRESSES[0]`, used by the footer, contact page, about page and LocalBusiness schema. A second address from early drafts was removed at the client's request and must not be reintroduced.
- `NEXT_PUBLIC_SITE_URL` / the code fallback both resolve to `https://lifelineambulances.in`.

## Needs client confirmation

- Whether WhatsApp `919951244266` is the number that should receive messages (the "Location" button sends the visitor's coordinates to it).
- Opening hours, email address and a Google Business Profile link: none are published on the site. Do not add them without client-supplied values.
