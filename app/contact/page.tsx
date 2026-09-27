import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { PRIMARY_BUTTON } from "@/lib/button-styles";
import {
  ADDRESSES,
  EMERGENCY_DISCLAIMER,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site-config";

const PATH = "/contact/";
const BREADCRUMB = [
  { name: "Home", path: "/" },
  { name: "Contact", path: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: "Contact Life Line Ambulance Service | Hyderabad",
  description:
    "Reach Life Line Ambulance Service at 9951244266, or find our Hyderabad location. For a medical emergency, call us directly rather than messaging.",
  path: PATH,
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(BREADCRUMB)} />
      <div className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
        <Breadcrumbs items={BREADCRUMB} />

        <section>
          <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">
            Contact
          </p>
          <h1 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Contact Life Line Ambulance Service
          </h1>
          <p className="mt-5 max-w-2xl text-base text-[var(--color-ink-muted)] md:text-lg">
            For an ambulance requirement — emergency or planned — calling us directly is the
            fastest way to reach a coordinator.
          </p>
          <p className="mt-4 max-w-2xl rounded-xl bg-[var(--color-tint)] p-4 text-sm text-[var(--color-ink)]">
            {EMERGENCY_DISCLAIMER}
          </p>
        </section>

        <div className="mt-14 space-y-14">
          <section>
            <SectionHeading index="01" title="Call us" />
            <a href={PHONE_HREF} className={`${PRIMARY_BUTTON} px-7 py-3.5 text-base`}>
              Call {PHONE_DISPLAY}
            </a>
          </section>

          <section>
            <SectionHeading index="02" title="Our location" />
            {(() => {
              const address = ADDRESSES[0];
              const fullAddress = `${address.lines.join(", ")}, ${address.city}, ${address.state} ${address.postalCode}`;
              return (
                <div className="rounded-2xl border border-black/5 bg-white p-5 sm:max-w-sm">
                  <div className="text-sm text-[var(--color-ink-muted)]">
                    {address.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                    <p>
                      {address.city}, {address.state} {address.postalCode}
                    </p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-[var(--color-primary)]"
                  >
                    View on Google Maps →
                  </a>
                </div>
              );
            })()}
          </section>

          <section>
            <SectionHeading index="03" title="Follow us" />
            <SocialLinks />
          </section>
        </div>
      </div>
    </>
  );
}
