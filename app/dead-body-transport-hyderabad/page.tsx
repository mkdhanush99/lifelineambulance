import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate, type ServicePageContent } from "@/components/ServicePageTemplate";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/dead-body-transport-hyderabad/";

export const metadata: Metadata = buildMetadata({
  title: "Dead Body Transport Service in Hyderabad | Life Line",
  description:
    "Respectful dead body transport in Hyderabad for families arranging transfer between hospital, home or another city. Call Life Line Ambulance at 9951244266.",
  path: PATH,
});

const content: ServicePageContent = {
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Dead Body Transport", path: PATH },
  ],
  heroKicker: "Dead Body Transport",
  heroTitle: "Dead Body Transport Service in Hyderabad",
  heroIntro:
    "At a difficult time for a family, we try to make arranging transport as straightforward as possible. Call our team and we'll talk through what's needed.",
  whatItIs: [
    "This service arranges respectful transport of a deceased individual — from a hospital, home or elsewhere in Hyderabad to a residence, funeral location, or another city.",
    "This is distinct from a mortuary ambulance (a specific vehicle used within a hospital or mortuary setting) and from freezer box rental (used when preservation is needed over a longer period). Our coordinator can help you understand which applies to your situation.",
  ],
  whenAppropriate: [
    "Transport from a hospital or nursing home to the family residence",
    "Transport to a funeral location or crematorium/burial ground",
    "Transport to another city or town for last rites, where the family is located elsewhere",
  ],
  whatToTell: [
    "The current location and the destination",
    "Whether documentation such as a death certificate or hospital release has already been arranged",
    "The preferred timing for transport",
    "Whether the destination is within Hyderabad or outstation",
  ],
  transferPrep: [
    "Confirm required hospital or administrative paperwork is completed before transport begins, since this is usually required before a vehicle can proceed",
    "Share the exact destination address, including any specific entry instructions",
    "Let us know if the journey is outstation, since this affects timing and planning",
  ],
  safety: [
    "Our team will confirm what documentation is needed before transport, so the family isn't caught unaware at the last step",
    "For longer or outstation journeys, timing is discussed in advance",
  ],
  areasServed:
    "We arrange dead body transport within Hyderabad and to outstation destinations. Call 9951244266 and our coordinator will discuss timing and requirements with you directly.",
  ctaLabel: "Call About Transport Arrangements",
  relatedSlugs: ["mortuary-ambulance-hyderabad", "freezer-box-on-rent-hyderabad", "outstation-ambulance-hyderabad"],
  faqs: [
    {
      question: "Can I arrange dead body transportation?",
      answer:
        "Yes. Call 9951244266 and share the current location, destination and any documentation already in hand, and our coordinator will guide you through the next steps.",
    },
    {
      question: "What documents are needed before transport can begin?",
      answer:
        "This typically depends on where the transport originates (hospital, home, etc.). Our coordinator will confirm exactly what's needed for your situation when you call.",
    },
    {
      question: "Can you arrange transport to another city?",
      answer:
        "Yes — mention the destination city when you call so timing and planning can be discussed.",
    },
  ],
};

export default function DeadBodyTransportPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ name: "Dead Body Transport Service", description: content.heroIntro, path: PATH }),
          breadcrumbJsonLd(content.breadcrumb),
          faqJsonLd(content.faqs),
        ]}
      />
      <ServicePageTemplate content={content} />
    </>
  );
}
