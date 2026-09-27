import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { BLOG_LAUNCH_DATE_ISO } from "@/lib/blog";
import { PHONE_DISPLAY } from "@/lib/site-config";

const PATH = "/blog/hospital-to-hospital-ambulance-transfer-checklist/";
const TITLE = "What to Prepare Before a Hospital-to-Hospital Ambulance Transfer";
const DESCRIPTION =
  "A practical checklist for families arranging a hospital-to-hospital ambulance transfer in Hyderabad — documents, timing and what to confirm first.";
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
        relatedSlugs={["patient-transfer-ambulance-hyderabad", "icu-ambulance-hyderabad", "bls-ambulance-hyderabad"]}
      >
        <p>
          Hospital-to-hospital transfers — moving a patient for a second opinion, specialised
          treatment, or an insurance network reason — involve two medical teams instead of one,
          which means a bit more coordination than a straightforward pickup. Here&rsquo;s what
          actually needs sorting out before the ambulance arrives.
        </p>

        <h2>Confirm the receiving hospital is ready first</h2>
        <p>
          Before arranging the ambulance itself, make sure the receiving hospital has actually
          agreed to accept the patient — ideally with a specific department or doctor identified.
          Turning up at a hospital that isn&rsquo;t expecting the patient is the single most common
          source of delay in these transfers, and it&rsquo;s entirely avoidable with one phone call
          ahead of time.
        </p>

        <h2>Gather the paperwork that travels with the patient</h2>
        <ul>
          <li>Discharge summary or referral note from the current hospital</li>
          <li>Recent test results or scans relevant to the transfer reason</li>
          <li>Current medication list</li>
          <li>ID and any insurance documentation, if relevant to the receiving hospital</li>
        </ul>
        <p>
          Ask the current treating team for these directly — most hospitals can prepare a transfer
          summary quickly once you tell them a transfer is happening.
        </p>

        <h2>Decide on the right vehicle type</h2>
        <p>
          Not every hospital-to-hospital transfer needs the same level of support. A stable patient
          moving for a scheduled procedure may only need a{" "}
          <Link href="/bls-ambulance-hyderabad/">BLS ambulance</Link>, while a critical patient may
          need <Link href="/icu-ambulance-hyderabad/">ICU-level transport</Link>. If you&rsquo;re
          not sure, describe the patient&rsquo;s condition to our coordinator and we can help work
          through it — see our{" "}
          <Link href="/patient-transfer-ambulance-hyderabad/">patient transfer ambulance</Link> page
          for more on how this is typically arranged.
        </p>

        <h2>Plan for who travels and who stays in contact</h2>
        <p>
          Decide in advance whether a family member will accompany the patient, and make sure
          whoever stays behind has a way to reach both the ambulance crew and the receiving
          hospital. If the transfer happens during a shift change at either hospital, a direct
          contact number saves a lot of back-and-forth.
        </p>

        <h2>Confirm timing on both ends</h2>
        <p>
          Where possible, agree on a rough pickup time with the current hospital and a rough arrival
          window with the receiving one. This isn&rsquo;t always possible for urgent transfers, but
          for planned ones it makes a real difference — the receiving team can have a bed and staff
          ready instead of scrambling when the ambulance arrives.
        </p>

        <h2>Call ahead of time, not at the last minute</h2>
        <p>
          If the transfer is planned rather than urgent, calling {PHONE_DISPLAY} a day or more in
          advance gives everyone — the current hospital, the receiving hospital, and our
          coordinator — time to align. If it&rsquo;s urgent, call anyway; we&rsquo;ll work with
          whatever timeline you&rsquo;re given.
        </p>
      </BlogPostLayout>
    </>
  );
}
