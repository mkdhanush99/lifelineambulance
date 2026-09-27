import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { BLOG_LAUNCH_DATE_ISO } from "@/lib/blog";
import { PHONE_DISPLAY } from "@/lib/site-config";

const PATH = "/blog/how-to-book-an-ambulance-in-hyderabad/";
const TITLE = "How to Book an Ambulance in Hyderabad: A Practical Guide";
const DESCRIPTION =
  "A practical, step-by-step look at what actually happens when you call to book an ambulance in Hyderabad — what to say, what to expect, and how to prepare.";
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
        relatedSlugs={["emergency-ambulance-service-hyderabad", "private-ambulance-service-hyderabad"]}
      >
        <p>
          Most people only think about how to book an ambulance once they actually need one, which
          means there&rsquo;s rarely time to figure out the process from scratch. The good news is
          that booking an ambulance in Hyderabad isn&rsquo;t complicated — it&rsquo;s a phone call,
          not a form to fill in or an app to download. Here&rsquo;s what that call actually looks
          like, and how to make it as useful as possible.
        </p>

        <h2>Start with a phone call, not a search</h2>
        <p>
          It&rsquo;s tempting to search around, compare a few websites, and read through service
          lists before deciding who to call. In an urgent situation, that costs time you don&rsquo;t
          have. Calling {PHONE_DISPLAY} directly gets you straight to a coordinator who can ask the
          right questions and tell you what&rsquo;s actually available right now — which is more
          useful than anything a webpage can promise in advance.
        </p>

        <h2>What the coordinator will ask you</h2>
        <p>A typical call covers a handful of details:</p>
        <ul>
          <li>The pickup location — an exact address, or a landmark if the address is hard to find</li>
          <li>What&rsquo;s happening with the patient — symptoms, or the reason for the transfer</li>
          <li>Where the patient needs to go, if you already know</li>
          <li>Whether this is urgent or something you&rsquo;re planning ahead of time</li>
          <li>A callback number, in case the crew needs to reach you en route</li>
        </ul>
        <p>
          You don&rsquo;t need medical terminology — describing what you see and what&rsquo;s
          happening is enough for the coordinator to work out what kind of vehicle makes sense.
        </p>

        <h2>Emergency booking vs planned booking</h2>
        <p>
          These are handled differently, and it helps to know which one you&rsquo;re making. An{" "}
          <Link href="/emergency-ambulance-service-hyderabad/">emergency ambulance</Link> is for a
          sudden, urgent situation — you call, and dispatch is arranged as quickly as availability
          allows. A{" "}
          <Link href="/private-ambulance-service-hyderabad/">private ambulance booking</Link> is for
          something planned in advance, like a hospital appointment or a scheduled discharge, where
          you can call ahead and agree on a date and time. If you&rsquo;re not sure which applies,
          just describe the situation — the coordinator will guide you.
        </p>

        <h2>What happens after you call</h2>
        <p>
          Once the coordinator has the details, they&rsquo;ll let you know what can be arranged and
          roughly what to expect. For an urgent call, that usually means a vehicle being dispatched
          toward your location. For a planned booking, it means agreeing on the date, time and
          vehicle type, with confirmation ahead of the actual day.
        </p>

        <h2>What to have ready before the vehicle arrives</h2>
        <p>
          A few small things make the handover faster once the ambulance reaches you: any ID or
          medical documents for the patient, a clear path from the patient to the vehicle, and
          someone available at the location who can meet the crew. Our{" "}
          <Link href="/safety/">safety guide</Link> goes into more detail on preparing for different
          kinds of transfers.
        </p>

        <h2>A few things people forget to mention</h2>
        <p>
          Small details can save real time: a hard-to-find gate or building entrance, a specific
          floor with no lift access, or a security desk that needs to know a vehicle is coming.
          Mentioning these upfront means the crew isn&rsquo;t figuring it out on arrival.
        </p>

        <p>
          If you&rsquo;re arranging transport right now, call {PHONE_DISPLAY}. If you&rsquo;re
          reading this ahead of time, our{" "}
          <Link href="/contact/">contact page</Link> has our Hyderabad location and the
          fastest way to reach us when you do need to call.
        </p>
      </BlogPostLayout>
    </>
  );
}
