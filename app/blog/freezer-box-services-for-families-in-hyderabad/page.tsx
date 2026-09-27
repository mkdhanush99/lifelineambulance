import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { BLOG_LAUNCH_DATE_ISO } from "@/lib/blog";
import { PHONE_DISPLAY } from "@/lib/site-config";

const PATH = "/blog/freezer-box-services-for-families-in-hyderabad/";
const TITLE = "How Freezer Box Services Work for Families in Hyderabad";
const DESCRIPTION =
  "A respectful, practical explanation of how freezer box rental works for families in Hyderabad, and how it differs from mortuary ambulance and body transport.";
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
        relatedSlugs={["freezer-box-on-rent-hyderabad", "dead-body-transport-hyderabad", "mortuary-ambulance-hyderabad"]}
      >
        <p>
          At an already difficult time, families are often unfamiliar with what a freezer box
          service actually involves, or how it&rsquo;s different from related services with similar
          names. This is meant as a straightforward, practical explanation — not a sales pitch —
          so you know what to expect and what to ask for.
        </p>

        <h2>What a freezer box is for</h2>
        <p>
          A <Link href="/freezer-box-on-rent-hyderabad/">freezer box</Link> is a unit rented and
          placed at a home or another location to preserve a body while a family waits — for
          relatives travelling from other cities, or while funeral arrangements are finalised. It
          stays at one location; it isn&rsquo;t a vehicle.
        </p>

        <h2>How this differs from a mortuary ambulance</h2>
        <p>
          A <Link href="/mortuary-ambulance-hyderabad/">mortuary ambulance</Link> is the vehicle
          used to move a body to or from a hospital or facility mortuary — for example, from a ward
          to the hospital&rsquo;s own mortuary, or from the mortuary to wherever the family has
          chosen. It&rsquo;s specifically tied to a mortuary facility, whereas a freezer box is
          about where the body stays afterward.
        </p>

        <h2>How this differs from general dead body transport</h2>
        <p>
          <Link href="/dead-body-transport-hyderabad/">Dead body transport</Link> is a broader
          service — moving a body from a hospital, home, or elsewhere to a residence, funeral
          location, or another city entirely. It can happen with or without a freezer box being
          involved, depending on the distance and timing.
        </p>

        <h2>What to have ready when you call</h2>
        <ul>
          <li>The address where the freezer box is needed</li>
          <li>Roughly how long it may be required for, if you have an estimate</li>
          <li>Whether transport of the body to that location is also needed</li>
          <li>Any documentation already completed at the hospital, if applicable</li>
        </ul>

        <h2>On timing and preservation</h2>
        <p>
          We don&rsquo;t make specific preservation-duration promises over the phone, since this
          depends on circumstances our coordinator can discuss with you directly. What we can do is
          talk through your situation honestly, including realistic expectations for your specific
          timeline.
        </p>

        <h2>If you&rsquo;re not sure which service you need</h2>
        <p>
          That&rsquo;s completely normal — these three services overlap in people&rsquo;s minds
          because they&rsquo;re all part of the same difficult process. Call {PHONE_DISPLAY} and
          describe the situation as you understand it; our coordinator will help you work out what&rsquo;s
          actually needed, without requiring you to know the right term in advance.
        </p>
      </BlogPostLayout>
    </>
  );
}
