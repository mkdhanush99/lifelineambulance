import type { Metadata } from "next";
import { AmbulanceFinder } from "@/components/AmbulanceFinder";
import { BeforeYouCall } from "@/components/BeforeYouCall";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { PatientTransferBrief } from "@/components/PatientTransferBrief";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceMatrix } from "@/components/ServiceMatrix";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/ambulance-finder/";
const BREADCRUMB = [
  { name: "Home", path: "/" },
  { name: "Ambulance Finder", path: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: "Ambulance Finder & Call Preparation | Life Line Ambulance",
  description:
    "Not sure which ambulance you need? Answer three quick questions to prepare for your call, print a patient transfer brief, or browse the full service matrix.",
  path: PATH,
});

export default function AmbulanceFinderPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(BREADCRUMB)} />
      <div className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
        <Breadcrumbs items={BREADCRUMB} />

        <section>
          <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">
            Prepare for your call
          </p>
          <h1 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Ambulance Finder & Call Preparation
          </h1>
          <p className="mt-5 max-w-2xl text-base text-[var(--color-ink-muted)] md:text-lg">
            A few quick tools to help you organise an ambulance enquiry before you call — not a
            medical diagnosis, just a way to have the right details ready.
          </p>
        </section>

        <div className="mt-14 space-y-14">
          <section>
            <SectionHeading index="01" title="Not sure which ambulance you need?" />
            <AmbulanceFinder />
          </section>

          <section>
            <SectionHeading index="02" title="Before you call" />
            <BeforeYouCall />
          </section>

          <section>
            <SectionHeading
              index="03"
              title="Service matrix"
              subtitle="A quick reference for common needs — always confirm the specific service with our team."
            />
            <ServiceMatrix />
          </section>

          <section>
            <SectionHeading
              index="04"
              title="Patient transfer brief"
              subtitle="Fill in the details once, then print it to bring along or read out when you call."
            />
            <PatientTransferBrief />
          </section>

          <CTASection />
        </div>
      </div>
    </>
  );
}
