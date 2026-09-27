import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { BLOG_LAUNCH_DATE_ISO } from "@/lib/blog";
import { PHONE_DISPLAY } from "@/lib/site-config";

const PATH = "/blog/when-does-a-patient-need-a-ventilator-ambulance/";
const TITLE = "When Does a Patient Need a Ventilator Ambulance?";
const DESCRIPTION =
  "Ventilator ambulances are for a specific situation. Here's how to recognise it, and what to have ready when you call to arrange one.";
const BREADCRUMB = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog/" },
  { name: TITLE, path: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: `${TITLE} | Life Line Ambulance`,
  description: DESCRIPTION,
  path: PATH,
});

export default function Post() {
  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({ headline: TITLE, description: DESCRIPTION, path: PATH, datePublished: BLOG_LAUNCH_DATE_ISO }),
          breadcrumbJsonLd(BREADCRUMB),
        ]}
      />
      <BlogPostLayout
        title={TITLE}
        breadcrumb={BREADCRUMB}
        relatedSlugs={["ventilator-ambulance-hyderabad", "icu-ambulance-hyderabad", "oxygen-ambulance-hyderabad"]}
      >
        <p>
          Of all the ambulance types, a ventilator ambulance is the one with the clearest
          definition: it&rsquo;s for a patient who is currently on a ventilator and needs to keep
          that support going during the journey. The harder part is usually recognising when that
          actually applies, and what to have ready before you call.
        </p>

        <h2>The simple test: is the patient on a ventilator right now?</h2>
        <p>
          If a patient is currently ventilator-dependent — whether in an ICU, a step-down ward, or
          at home on a home ventilator — and needs to travel, that&rsquo;s a{" "}
          <Link href="/ventilator-ambulance-hyderabad/">ventilator ambulance</Link> situation. This
          is different from a patient who simply needs supplemental oxygen (breathing on their own,
          with extra oxygen support) or a patient who needs close monitoring but isn&rsquo;t on a
          ventilator at all. Those situations are usually better matched to an{" "}
          <Link href="/oxygen-ambulance-hyderabad/">oxygen ambulance</Link> or an{" "}
          <Link href="/icu-ambulance-hyderabad/">ICU ambulance</Link>.
        </p>

        <h2>Common situations that call for one</h2>
        <ul>
          <li>Transferring a ventilated patient between hospital ICUs</li>
          <li>Moving a patient from an ICU to a step-down unit at another facility</li>
          <li>Discharging a patient home who still requires ventilator support</li>
          <li>Any transfer where the treating doctor has specifically said ventilator support is needed in transit</li>
        </ul>

        <h2>Why this transfer needs more coordination</h2>
        <p>
          Ventilator transfers are more sensitive to timing, route and backup planning than most
          other transfers, simply because the patient&rsquo;s breathing support can&rsquo;t pause.
          That&rsquo;s why these are almost always arranged in direct coordination with the treating
          doctor or ICU staff, rather than through a general phone description alone.
        </p>

        <h2>What to have ready before you call</h2>
        <p>
          If possible, have the following confirmed with the treating team before you call{" "}
          {PHONE_DISPLAY}:
        </p>
        <ul>
          <li>Current ventilator settings and mode</li>
          <li>Expected backup oxygen and battery needs for the length of the journey</li>
          <li>The pickup and destination hospitals, including department</li>
          <li>Whether a doctor or nurse will accompany the patient, or needs to be arranged</li>
        </ul>
        <p>
          Having these details ready doesn&rsquo;t just speed up the call — it&rsquo;s the same
          information the receiving facility will want confirmed before accepting the patient.
        </p>

        <h2>If you&rsquo;re not sure yet</h2>
        <p>
          Not every family has all of this to hand when they first call, and that&rsquo;s fine.
          Describe what you know, mention that the patient is on a ventilator, and our coordinator
          will help you work out what else needs confirming with the treating team before the
          transfer can be arranged.
        </p>
      </BlogPostLayout>
    </>
  );
}
