import type { Metadata } from "next";
import Link from "next/link";
import { AreaChip } from "@/components/AreaChip";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { AREAS } from "@/lib/areas";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { SERVICES } from "@/lib/services";
import { AVAILABILITY_CAVEAT, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-config";

const PATH = "/ambulance-service-areas-hyderabad/";
const BREADCRUMB = [
  { name: "Home", path: "/" },
  { name: "Service Areas", path: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: "Ambulance Service Areas in Hyderabad | Life Line",
  description:
    "Life Line Ambulance Service coordinates ambulance transport across Hyderabad. See the localities we're regularly asked about, and call 9951244266 to confirm your area.",
  path: PATH,
});

const highlighted = SERVICES.filter((s) =>
  ["emergency-ambulance-service-hyderabad", "icu-ambulance-hyderabad", "outstation-ambulance-hyderabad"].includes(
    s.slug
  )
);

export default function AreasPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(BREADCRUMB)} />
      <div className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
        <Breadcrumbs items={BREADCRUMB} />

        <section>
          <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">
            Coverage
          </p>
          <h1 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Ambulance Service Areas in Hyderabad
          </h1>
          <p className="mt-5 max-w-2xl text-base text-[var(--color-ink-muted)] md:text-lg">
            Life Line Ambulance Service coordinates ambulance transport across Hyderabad and the
            surrounding areas. Below is a general picture of where we&rsquo;re regularly asked to help —
            not a guarantee of coverage for any specific address, since that depends on where a
            vehicle currently is when you call.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-base font-semibold text-white"
          >
            Call {PHONE_DISPLAY}
          </a>
        </section>

        <div className="mt-14 space-y-14">
          <section>
            <SectionHeading index="01" title="Where we operate" />
            <div className="space-y-4 text-[var(--color-ink)]">
              <p>
                Hyderabad spans a wide mix of geography — the older, denser lanes of the Old City
                and Charminar area, the twin city of Secunderabad to the north, the GHMC&rsquo;s central
                residential neighbourhoods, and the newer IT corridor stretching through Gachibowli,
                HITEC City and Kondapur to the west. Ambulance transport in each of these areas can
                look different: narrow lanes in the Old City call for a different approach than the
                wide arterial roads near the IT corridor, and traffic patterns shift through the day
                across the whole city.
              </p>
              <p>
                We coordinate ambulance transport across this full spread — central Hyderabad,
                Secunderabad, the western IT corridor, the city&rsquo;s hospital districts, and the
                southern and eastern residential belts — rather than limiting service to a single
                zone. Which vehicle can reach a given pickup fastest depends on its current position
                at the time of your call, not a fixed zone map.
              </p>
            </div>
          </section>

          <section>
            <SectionHeading
              index="02"
              title="Localities we're regularly asked about"
              subtitle="A general sense of the neighbourhoods our callers most often mention — not an exhaustive list, and not individual service pages."
            />
            <div className="flex flex-wrap gap-2.5">
              {AREAS.map((area) => (
                <AreaChip key={area} name={area} />
              ))}
            </div>
            <p className="mt-6 text-sm text-[var(--color-ink-muted)]">{AVAILABILITY_CAVEAT}</p>
          </section>

          <section>
            <SectionHeading index="03" title="What affects availability" />
            <ul className="list-disc space-y-2 pl-5 text-[var(--color-ink)]">
              <li>How far the pickup location is from a currently available vehicle</li>
              <li>Traffic conditions at the time of your call</li>
              <li>Whether the situation needs a specific vehicle type (ICU, ventilator, oxygen, etc.)</li>
              <li>Overall demand across the city at that time</li>
            </ul>
          </section>

          <section>
            <SectionHeading index="04" title="Checking coverage for your area" />
            <p className="text-[var(--color-ink)]">
              The fastest way to confirm availability for your specific location is to call{" "}
              {PHONE_DISPLAY} directly. Share your pickup address and our coordinator will let you
              know what can be arranged at that moment, rather than relying on a general area list.
            </p>
          </section>

          <section>
            <SectionHeading index="05" title="Related services" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {highlighted.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
            <Link href="/#services" className="mt-4 inline-block text-sm font-medium text-[var(--color-primary)]">
              View all ambulance services →
            </Link>
          </section>

          <CTASection
            heading="Not sure if we cover your area?"
            subheading="Call us with your pickup location and we'll confirm what's possible right now."
          />
        </div>
      </div>
    </>
  );
}
