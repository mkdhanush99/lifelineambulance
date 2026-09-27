import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { BLOG_LAUNCH_DATE_ISO } from "@/lib/blog";
import { PHONE_DISPLAY } from "@/lib/site-config";

const PATH = "/blog/outstation-ambulance-from-hyderabad-what-to-plan/";
const TITLE = "Outstation Ambulance from Hyderabad: What Families Should Plan";
const DESCRIPTION =
  "Planning a long-distance ambulance journey from Hyderabad? Here's what actually needs deciding before the vehicle leaves the city.";
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
        relatedSlugs={["outstation-ambulance-hyderabad", "ventilator-ambulance-hyderabad", "icu-ambulance-hyderabad"]}
      >
        <p>
          A local ambulance transfer is usually measured in minutes. An outstation transfer from
          Hyderabad is measured in hours, sometimes many of them — which changes what actually needs
          planning before the vehicle leaves the city.
        </p>

        <h2>Decide how urgent the timing really is</h2>
        <p>
          Outstation transfers are almost always more useful as planned journeys than last-minute
          ones. If there&rsquo;s any flexibility in timing, use it — a journey planned a day ahead
          gives everyone (the current hospital, the receiving hospital or home, and our
          coordinator) time to prepare properly. If it genuinely can&rsquo;t wait, call{" "}
          {PHONE_DISPLAY} anyway and we&rsquo;ll work with the timeline you have.
        </p>

        <h2>Work out what the patient needs for the full journey</h2>
        <p>
          A short local transfer and a multi-hour outstation one can call for very different
          support, even for the same patient. Ask the treating doctor specifically about what&rsquo;s
          needed <em>for the duration of the trip</em> — not just right now. If ventilator or oxygen
          support is required, that changes both the vehicle needed and the planning involved; see
          our <Link href="/ventilator-ambulance-hyderabad/">ventilator ambulance</Link> and{" "}
          <Link href="/icu-ambulance-hyderabad/">ICU ambulance</Link> pages for more on those
          specific situations.
        </p>

        <h2>Plan for rest stops, if the patient&rsquo;s condition allows</h2>
        <p>
          Longer routes may include planned stops, depending on the patient&rsquo;s condition and
          the distance involved. This is worth discussing directly with our coordinator and the
          treating doctor, rather than assuming either a non-stop journey or frequent stops by
          default.
        </p>

        <h2>Confirm the destination is actually ready</h2>
        <p>
          If the destination is another hospital, confirm they&rsquo;re expecting the patient and
          have a bed or department ready. If the destination is home, make sure whoever is receiving
          the patient knows the expected arrival window and what, if anything, needs to be arranged
          before arrival — a home oxygen setup, for example, or a second person to help with
          mobility.
        </p>

        <h2>Keep emergency contacts reachable at both ends</h2>
        <p>
          For a journey that could take several hours, make sure there&rsquo;s a reachable contact
          both where the journey starts and where it ends. If plans change mid-route — traffic,
          a stop, a change in the patient&rsquo;s condition — this is who the crew and our
          coordinator will be in touch with.
        </p>

        <h2>Bring more documentation than you think you&rsquo;ll need</h2>
        <p>
          For outstation transfers especially, bring the patient&rsquo;s full current medical
          reports, medication list, and any relevant ID or insurance documents. If the receiving
          hospital is unfamiliar with the case, this paperwork is what lets them pick up care
          quickly on arrival.
        </p>

        <p>
          If you&rsquo;re planning an outstation transfer, the earlier you call, the more of this we
          can work through together. Call {PHONE_DISPLAY} with your destination and the patient&rsquo;s
          current condition to start planning.
        </p>
      </BlogPostLayout>
    </>
  );
}
