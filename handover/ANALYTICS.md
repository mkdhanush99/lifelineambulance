# Analytics & Conversion Tracking

Code: `lib/analytics.ts`, `lib/attribution.ts`, `components/Analytics.tsx`, `components/ConsentProvider.tsx`, `components/CookieConsent.tsx`.

## How it is gated

1. Nothing loads until the visitor accepts cookies in the consent banner (categories: necessary, analytics, advertising).
2. `gtag.js` loads only if the matching consent is given **and** the matching env var is set (`NEXT_PUBLIC_GA_MEASUREMENT_ID` for GA4, `NEXT_PUBLIC_GOOGLE_ADS_ID` for Ads).
3. Without IDs the tracking code is inert and the events below go nowhere. **Confirm in Hostinger that the IDs are actually set; this project does not contain them.**

## Implemented events

| Event name | Trigger | Destination | Purpose |
|---|---|---|---|
| `phone_click` | Click on any link whose href starts with `tel:` | GA4 / Google tag | Generic call-click funnel event; params: `phone_number` + attribution |
| `call_click_<page>` | Same `tel:` click | GA4 / Google tag | Per-page call event so each landing page can be its own Google Ads conversion. Name is derived from the URL, see below |
| `conversion` (`send_to` = label) | Same `tel:` click, only when `NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL` is set | Google Ads | Click-to-call conversion |
| `map_click` | Click on any link containing `google.com/maps` | GA4 / Google tag | Map interest |
| Attribution capture | First page view in a session | `sessionStorage` key `llas-attribution` | Stores `gclid` and `utm_source/medium/campaign/term/content` and attaches them to the events above |

### `call_click_<page>` naming

Derived from the path: `/` -> `call_click_home`; otherwise the slug with `-ambulance-service-hyderabad`, `-ambulance-hyderabad`, `-service-hyderabad` or `-hyderabad` removed and `-` -> `_`.

| Page | Event |
|---|---|
| Home | `call_click_home` |
| Emergency / Private / BLS / ICU | `call_click_emergency` / `_private` / `_bls` / `_icu` |
| Ventilator / NICU / Oxygen | `call_click_ventilator` / `_nicu` / `_oxygen` |
| Patient transfer / Outstation | `call_click_patient_transfer` / `_outstation` |
| Dead body / Freezer box / Mortuary | `call_click_dead_body_transport` / `_freezer_box_on_rent` / `_mortuary` |
| Event / Corporate | `call_click_event` / `_corporate` |
| Areas page | `call_click_ambulance_service_areas` |
| Other pages | `call_click_<slug>` by the same rule (e.g. `call_click_contact`, `call_click_about`) |

## NOT IMPLEMENTED

- **WhatsApp click tracking.** The dock's WhatsApp link is a plain link; no event fires.
- **Dock "Location" button tracking.** It is a button that opens WhatsApp with the visitor's coordinates; no event fires, and it is not matched by `map_click`.
- **Contact form submission tracking.** There is no contact form on the site (the site is call/WhatsApp only), so nothing to track.
- **Other CTA interaction events** (buttons that are not `tel:` or Maps links), scroll depth, outbound social clicks.
- **Custom page-view events.** Page views rely on GA4's default behaviour once the tag is loaded; SPA navigation reporting depends on GA4 "enhanced measurement" being enabled and was not tested.
- **Google Ads conversion for WhatsApp.**

Adding WhatsApp/Location events is a small change in `components/Analytics.tsx` (extend the click handler) and was out of scope for this handover.
