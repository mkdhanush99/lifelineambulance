import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustSignal } from "@/components/TrustSignal";
import { PRIMARY_BUTTON } from "@/lib/button-styles";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { ADDRESSES, BUSINESS_NAME, PHONE_DISPLAY, PHONE_HREF, SERVING_SINCE_CLAIM, SITE_URL } from "@/lib/site-config";

const FOUNDER_NAME = "Aluvala Lokesh";
const PATH = "/about/";
const BREADCRUMB = [
  { name: "Home", path: "/" },
  { name: "About", path: PATH },
];

function founderJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: FOUNDER_NAME,
    jobTitle: "Founder & Owner",
    url: new URL(PATH, SITE_URL).toString(),
    worksFor: { "@type": "Organization", name: BUSINESS_NAME },
  };
}

export const metadata: Metadata = buildMetadata({
  title: "About Life Line Ambulance Service | Hyderabad",
  description:
    "Life Line Ambulance Service is a Hyderabad-based ambulance and patient transport service founded and run by Aluvala Lokesh since 2012. Call 9951244266 to reach our team.",
  path: PATH,
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(BREADCRUMB), founderJsonLd()]} />
      <div className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
        <Breadcrumbs items={BREADCRUMB} />

        <section>
          <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">
            About Us
          </p>
          <h1 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
            About Life Line Ambulance Service
          </h1>
          <p className="mt-5 max-w-2xl text-base text-[var(--color-ink-muted)] md:text-lg">
            {SERVING_SINCE_CLAIM}, Life Line Ambulance Service coordinates ambulance transport
            across Hyderabad — from emergency response to planned patient transfers.
          </p>
        </section>

        <div className="mt-14 space-y-14">
          <section>
            <SectionHeading index="01" title="What we do" />
            <div className="space-y-4 text-[var(--color-ink)]">
              <p>
                Life Line Ambulance Service coordinates ambulance transport for a range of patient
                needs across Hyderabad — emergency response, hospital-to-hospital transfers,
                ICU and ventilator-equipped transport, outstation journeys, and more specialised
                services such as dead body transport and freezer box rental. Each service is
                arranged based on the specific vehicle and staffing a situation calls for.
              </p>
              <p>
                Because patient needs vary so much from one call to the next, our coordinator
                discusses the details of each request directly with the caller — the pickup
                location, the patient&rsquo;s condition, and the destination — rather than offering a
                one-size-fits-all booking.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading index="02" title="Our approach" />
            <p className="text-[var(--color-ink)]">
              We try to keep the experience of arranging an ambulance as calm and straightforward
              as the situation allows — clear communication about what&rsquo;s needed, honest answers
              about what can and can&rsquo;t be confirmed in advance, and a direct line to a coordinator
              rather than an automated booking flow.
            </p>
          </section>

          <section>
            <SectionHeading index="03" title="Why Life Line" />
            <TrustSignal />
          </section>

          <section>
            <SectionHeading index="04" title="Founder & Owner" />
            <div className="space-y-4 text-[var(--color-ink)]">
              <p>
                Life Line Ambulance Service is founded and owned by <strong>{FOUNDER_NAME}</strong>,
                who has run the service since 2012. {FOUNDER_NAME} oversees the day-to-day
                operations of Life Line Ambulance Service — coordinating requests, managing the
                risk and logistics behind each transfer, and working to keep patient safety at the
                centre of how every ambulance is arranged.
              </p>
              <p>
                Under {FOUNDER_NAME}&rsquo;s ownership, Life Line Ambulance Service has grown to
                cover a wide range of patient transport needs across Hyderabad — from emergency
                response to outstation transfers and specialised services such as freezer box
                rental. {FOUNDER_NAME} remains directly involved in how the service is run today.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading index="05" title="Our location" />
            <div className="rounded-2xl border border-black/5 bg-white p-5 sm:max-w-sm">
              <div className="text-sm text-[var(--color-ink-muted)]">
                {ADDRESSES[0].lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p>
                  {ADDRESSES[0].city}, {ADDRESSES[0].state} {ADDRESSES[0].postalCode}
                </p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeading index="06" title="Get in touch" />
            <p className="text-[var(--color-ink)]">
              Call {PHONE_DISPLAY} to discuss an ambulance requirement, or visit our{" "}
              <Link href="/contact/" className="font-medium text-[var(--color-primary)]">
                contact page
              </Link>{" "}
              for our Hyderabad location.
            </p>
            <a href={PHONE_HREF} className={`${PRIMARY_BUTTON} mt-4 px-7 py-3.5 text-base`}>
              Call {PHONE_DISPLAY}
            </a>
          </section>

          <CTASection />
        </div>
      </div>
    </>
  );
}
