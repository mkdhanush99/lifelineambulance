import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { BLOG_LAUNCH_DATE_ISO } from "@/lib/blog";
import { PHONE_DISPLAY } from "@/lib/site-config";

const PATH = "/blog/emergency-ambulance-vs-patient-transport/";
const TITLE = "Emergency Ambulance vs Patient Transport: Understanding the Difference";
const DESCRIPTION =
  "Emergency ambulance and patient transport sound similar but serve different situations. Here's how to tell which one applies to yours.";
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
        relatedSlugs={["emergency-ambulance-service-hyderabad", "patient-transfer-ambulance-hyderabad", "private-ambulance-service-hyderabad"]}
      >
        <p>
          People often use &ldquo;ambulance&rdquo; as a single catch-all word, but the service
          behind an urgent call and the service behind a planned hospital transfer are genuinely
          different — in how they&rsquo;re arranged, how quickly they happen, and what you should
          expect. Understanding the difference helps you ask for the right thing when you call.
        </p>

        <h2>Emergency ambulance: urgent, unplanned, immediate</h2>
        <p>
          An <Link href="/emergency-ambulance-service-hyderabad/">emergency ambulance</Link> is for
          a sudden situation — an accident, a medical crisis, anything where a patient needs to
          reach a hospital promptly rather than at a scheduled time. You call, describe what&rsquo;s
          happening, and a vehicle is arranged based on what&rsquo;s available at that moment.
          There&rsquo;s no advance planning involved, by definition.
        </p>

        <h2>Patient transport: planned, scheduled, arranged ahead</h2>
        <p>
          <Link href="/patient-transfer-ambulance-hyderabad/">Patient transport</Link> (sometimes
          called a{" "}
          <Link href="/private-ambulance-service-hyderabad/">private ambulance booking</Link>)
          covers situations that are known about in advance — a scheduled hospital appointment, a
          discharge home, or a transfer between facilities on an agreed date. Because there&rsquo;s
          time to plan, these bookings can be arranged ahead, with a confirmed date, time and
          vehicle type.
        </p>

        <h2>Why the distinction actually matters</h2>
        <p>
          Beyond terminology, the practical difference is what you can expect from the call itself.
          An emergency call is about getting a vehicle moving as fast as availability allows. A
          planned booking call is about agreeing on details in advance — so a coordinator has time
          to confirm vehicle type, timing and any special requirements before the day itself. Using
          the wrong framing (treating a planned discharge like an emergency, or vice versa) doesn&rsquo;t
          usually cause a problem, but describing your situation accurately helps our coordinator
          respond appropriately from the first question.
        </p>

        <h2>What if you&rsquo;re not sure which applies?</h2>
        <p>
          That&rsquo;s fine — most people aren&rsquo;t sure, and it&rsquo;s not something you need
          to work out before calling. Describe what&rsquo;s happening and whether it&rsquo;s
          happening right now or coming up on a certain date. That alone is usually enough for our
          coordinator to steer the conversation the right way.
        </p>

        <p>
          Whichever situation you&rsquo;re facing, the number is the same: call {PHONE_DISPLAY} and
          we&rsquo;ll take it from there.
        </p>
      </BlogPostLayout>
    </>
  );
}
