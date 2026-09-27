import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostLayout } from "@/components/BlogPostLayout";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";
import { BLOG_LAUNCH_DATE_ISO } from "@/lib/blog";
import { PHONE_DISPLAY } from "@/lib/site-config";

const PATH = "/blog/icu-ambulance-vs-bls-ambulance-difference/";
const TITLE = "ICU Ambulance vs BLS Ambulance: What Is the Difference?";
const DESCRIPTION =
  "ICU ambulance or BLS ambulance? A clear comparison of what each is meant for, so you can describe your situation accurately when you call.";
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
        relatedSlugs={["icu-ambulance-hyderabad", "bls-ambulance-hyderabad"]}
      >
        <p>
          &ldquo;Do I need an ICU ambulance or a regular one?&rdquo; is one of the most common
          questions families ask when arranging a transfer. The two terms get used loosely, but
          they describe genuinely different levels of support. Knowing the difference — even in
          rough terms — helps you describe the situation accurately when you call, which helps our
          coordinator arrange the right vehicle faster.
        </p>

        <h2>What BLS actually means</h2>
        <p>
          BLS stands for Basic Life Support. A{" "}
          <Link href="/bls-ambulance-hyderabad/">BLS ambulance</Link> is built for patients who are
          stable but still need to travel lying down, with basic monitoring and first-aid-level
          support available if something changes en route. Think of it as the right choice for
          someone who can&rsquo;t travel by regular car — because of mobility, a recent procedure,
          or general frailty — but isn&rsquo;t in a critical condition.
        </p>

        <h2>What ICU-level transport adds</h2>
        <p>
          An <Link href="/icu-ambulance-hyderabad/">ICU ambulance</Link> is for patients whose
          condition needs closer, continuous monitoring during the journey itself — not just at the
          hospital on either end. This is typically discussed directly with the treating doctor or
          nurse, since what&rsquo;s actually needed (specific monitoring, medication support, or
          equipment) depends entirely on the patient&rsquo;s condition at that moment.
        </p>

        <h2>A rough way to tell which applies</h2>
        <p>Ask yourself, or the treating team, a few questions:</p>
        <ul>
          <li>Can the patient sit up, or do they need to travel lying flat with support?</li>
          <li>Is their condition currently stable, or could it change quickly during the journey?</li>
          <li>Has a doctor specifically said the patient needs close monitoring in transit?</li>
          <li>Is this a routine discharge or scheduled visit, or a more serious ongoing condition?</li>
        </ul>
        <p>
          If the answers point toward &ldquo;stable, but needs assisted transport,&rdquo; a BLS
          ambulance is usually the right starting point. If there&rsquo;s any doubt about the
          patient&rsquo;s stability during the journey, mention that clearly when you call — our
          coordinator would rather ask a follow-up question than guess.
        </p>

        <h2>Where ventilator and oxygen support fit in</h2>
        <p>
          Neither BLS nor ICU is automatically the same as ventilator support. A patient who is
          currently on a ventilator needs a dedicated ventilator ambulance, and a patient who needs
          supplemental oxygen but is breathing independently may only need an oxygen-equipped
          vehicle. These are related but distinct categories — if you&rsquo;re unsure, describing
          the patient&rsquo;s current equipment and condition is more useful than trying to name the
          right category yourself.
        </p>

        <h2>When in doubt, just call</h2>
        <p>
          You don&rsquo;t need to arrive at the exact right term before calling {PHONE_DISPLAY}.
          Describe what&rsquo;s happening — what the patient needs help with, what equipment is
          currently in use, and what the treating doctor has said, if anyone has — and our
          coordinator will work out with you what actually fits.
        </p>
      </BlogPostLayout>
    </>
  );
}
