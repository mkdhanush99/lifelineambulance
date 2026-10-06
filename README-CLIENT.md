# Life Line Ambulance Service — Website Guide (for the owner)

## The website
A fast, mobile-friendly website for Life Line Ambulance Service in Hyderabad. Its job is to help a worried family reach you by **phone or WhatsApp** as quickly as possible. It does not take online bookings or payments; every request is handled by a call to the coordinator.

- **Domain:** https://lifelineambulances.in
- **Phone / WhatsApp:** 9951244266
- **Address:** Plot No. 10, House No. 7-3-234, 2nd Floor, Sri Sai Ram Colony, Bairamalguda, Hyderabad, Telangana 500070

## Main services (each has its own page)
Emergency · Private · BLS · ICU · Ventilator · NICU / Neonatal · Oxygen · Patient Transfer · Outstation · Dead Body Transport · Freezer Box on Rent · Mortuary · Event Standby · Corporate.

Other pages: Home, About, Areas We Serve (Hyderabad), Safety Guide, Ambulance Finder, Contact, Blog (8 articles), and six legal pages.

## The floating Call / WhatsApp / Location bar
Visitors always see Call, WhatsApp and Location buttons. **Location** asks the visitor's permission to share their current position, then opens WhatsApp to your number with their location link, so you can find them quickly. If they refuse, it opens a normal WhatsApp chat.

## How to update content
The site's text lives in the code, not in an admin panel. To change wording, prices, phone number, address or add a blog post, ask your developer. Tell them the page and the exact new text. Key places (for the developer): phone/address/social links `lib/site-config.ts`; services `lib/services.ts`; blog posts `lib/blog.ts`; service-area list `lib/areas.ts`; legal text `lib/legal.ts`. After any change the site must be rebuilt and uploaded again.

## How to update images
Photos are in `public/photos/`, logos in `public/brand/`, the original brand files in `brand/`. Give your developer the new image (JPG/WebP, ideally under 300 KB) and say which page it is for. Use the approved logo files only.

## Google and search (action needed from you)
The website is technically ready for Google, but it will not appear until Google is told about it. After launch:
1. Create / log in to **Google Search Console** and add https://lifelineambulances.in.
2. Submit the sitemap: `https://lifelineambulances.in/sitemap.xml`.
3. Make sure your **Google Business Profile** shows the same name, phone and address.

Google can take days or weeks to show a new site. Nobody can promise a ranking or a date.

## Things we need from you
- Review the **legal pages** (Privacy, Terms, Cancellation & Refund, Cookie, Data Protection, Disclaimer). They were drafted for the site and have not been checked by a lawyer.
- Confirm the descriptions of each ambulance type, the FAQ answers and the blog articles are correct for your service.
- Confirm that 9951244266 is the right WhatsApp number.
- Provide Google Analytics / Google Ads IDs if you want call tracking (see `handover/ANALYTICS.md`). Until then, no tracking runs.
- Tell us your opening hours, email address and any certifications you want shown. None are on the site because none were supplied.

## Support — before changing anything
The developer should: (1) read `README-DEVELOPER.md`, (2) run `npm run lint` and `npm run build` locally, (3) re-check the phone number, address and domain after the change, (4) redeploy and open the live site on a phone to test Call, WhatsApp and Location.
