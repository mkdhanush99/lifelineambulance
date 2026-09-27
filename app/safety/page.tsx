import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { EMERGENCY_DISCLAIMER, PHONE_DISPLAY } from "@/lib/site-config";

const PATH = "/safety/";
const BREADCRUMB = [
  { name: "Home", path: "/" },
  { name: "Safety Guide", path: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: "Ambulance Safety & Patient Transport Guide | Life Line",
  description:
    "General guidance on preparing for an ambulance transfer in Hyderabad — what to have ready, what to tell the crew, and what to ask before a critical transfer.",
  path: PATH,
});

const SECTIONS: { index: string; title: string; body: ReactNode }[] = [
  {
    index: "01",
    title: "Before the ambulance arrives",
    body: (
      <p>
        Keep the patient in a safe, comfortable position and try to keep the path to the entrance
        clear. If you&rsquo;re unsure whether it&rsquo;s safe to move the patient at all, say so when you call
        — our coordinator can pass this on to the crew.
      </p>
    ),
  },
  {
    index: "02",
    title: "What information to provide",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>The exact pickup location, with a landmark if the address is hard to find</li>
        <li>A callback number for someone at the location</li>
        <li>The destination, if you already have one in mind</li>
        <li>A brief description of the patient&rsquo;s condition</li>
      </ul>
    ),
  },
  {
    index: "03",
    title: "Patient condition details",
    body: (
      <p>
        The more clearly you can describe symptoms, consciousness level and any visible injury, the
        better our coordinator can discuss the right vehicle type. It&rsquo;s fine to describe what you
        see rather than a formal diagnosis — the crew will assess further on arrival.
      </p>
    ),
  },
  {
    index: "04",
    title: "Medication and medical documents",
    body: (
      <p>
        If available, gather the patient&rsquo;s current medication list, recent prescriptions, allergy
        information and any relevant medical records before the vehicle arrives. For hospital
        transfers, a referral note or discharge summary is particularly useful for the receiving
        team.
      </p>
    ),
  },
  {
    index: "05",
    title: "Hospital destination",
    body: (
      <p>
        If you already have a preferred hospital, mention it when you call. If you&rsquo;re not sure,
        describe the patient&rsquo;s condition and our coordinator can talk through nearby options as
        part of arranging the ambulance.
      </p>
    ),
  },
  {
    index: "06",
    title: "Wheelchair and stretcher considerations",
    body: (
      <p>
        Let us know if the patient cannot walk, needs a stretcher, or uses a wheelchair, so the
        right vehicle and equipment are arranged. Also mention any doorway, staircase or lift
        access issues at the pickup location.
      </p>
    ),
  },
  {
    index: "07",
    title: "Critical patient transfers",
    body: (
      <p>
        For ICU or ventilator-dependent patients, transfers are usually coordinated directly with
        the treating doctor or nurse, who can confirm the equipment and monitoring needed for the
        journey. See our{" "}
        <a href="/icu-ambulance-hyderabad/" className="font-medium text-[var(--color-primary)]">
          ICU ambulance
        </a>{" "}
        and{" "}
        <a href="/ventilator-ambulance-hyderabad/" className="font-medium text-[var(--color-primary)]">
          ventilator ambulance
        </a>{" "}
        pages for more detail.
      </p>
    ),
  },
  {
    index: "08",
    title: "Oxygen and respiratory support considerations",
    body: (
      <p>
        If the patient currently needs supplemental oxygen or has a respiratory condition, mention
        the current flow rate and delivery method (mask, nasal cannula, etc.) when you call, so the
        appropriate vehicle can be discussed.
      </p>
    ),
  },
  {
    index: "09",
    title: "Long-distance transfers",
    body: (
      <p>
        Outstation journeys take more planning — expected duration, rest stops, and backup supplies
        for the full distance. Share the destination city as early as possible so this can be
        planned properly. See our{" "}
        <a href="/outstation-ambulance-hyderabad/" className="font-medium text-[var(--color-primary)]">
          outstation ambulance
        </a>{" "}
        page for more.
      </p>
    ),
  },
  {
    index: "10",
    title: "What to ask before a transfer",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>What type of vehicle and equipment will be used</li>
        <li>Roughly how long the journey is expected to take</li>
        <li>Whether a family member can accompany the patient</li>
        <li>What documents or belongings should travel with the patient</li>
      </ul>
    ),
  },
  {
    index: "11",
    title: "What our crew may need from your family",
    body: (
      <p>
        Clear answers about the patient&rsquo;s condition, any known allergies or medication, and a
        point of contact who can be reached during the journey. Cooperating with the crew&rsquo;s
        instructions during loading and transit also helps keep the transfer safe for everyone
        involved.
      </p>
    ),
  },
];

export default function SafetyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(BREADCRUMB)} />
      <div className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
        <Breadcrumbs items={BREADCRUMB} />

        <section>
          <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">
            Safety Guide
          </p>
          <h1 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
            Ambulance Safety & Patient Transport Guide
          </h1>
          <p className="mt-5 max-w-2xl text-base text-[var(--color-ink-muted)] md:text-lg">
            General guidance for families preparing for an ambulance transfer in Hyderabad — what
            to have ready, what to tell the crew, and what to ask before a critical transfer.
          </p>
          <p className="mt-4 max-w-2xl rounded-xl bg-[var(--color-tint)] p-4 text-sm text-[var(--color-ink)]">
            {EMERGENCY_DISCLAIMER}
          </p>
        </section>

        <div className="mt-14 space-y-14">
          {SECTIONS.map((section) => (
            <section key={section.index}>
              <SectionHeading index={section.index} title={section.title} />
              <div className="space-y-3 text-[var(--color-ink)]">{section.body}</div>
            </section>
          ))}

          <section>
            <SectionHeading index="12" title="Still have questions?" />
            <p className="text-[var(--color-ink)]">
              Call {PHONE_DISPLAY} and our coordinator can walk through your specific situation —
              this guide is general information and isn&rsquo;t a substitute for that conversation, or
              for professional medical advice.
            </p>
          </section>

          <CTASection />
        </div>
      </div>
    </>
  );
}
