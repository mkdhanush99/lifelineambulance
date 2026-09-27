import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate, type ServicePageContent } from "@/components/ServicePageTemplate";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/event-ambulance-service-hyderabad/";

export const metadata: Metadata = buildMetadata({
  title: "Event Standby Ambulance Service in Hyderabad | Life Line",
  description:
    "Standby ambulance coverage in Hyderabad for sports events, exhibitions, conferences and public gatherings. Discuss requirements at 9951244266.",
  path: PATH,
});

const content: ServicePageContent = {
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Event Standby Ambulance", path: PATH },
  ],
  heroKicker: "Event Standby Ambulance",
  heroTitle: "Event Standby Ambulance Service in Hyderabad",
  heroIntro:
    "Larger gatherings often need an ambulance on standby, ready to respond immediately if something happens. Talk to us about your event's requirements.",
  whatItIs: [
    "Event standby ambulance service places a vehicle (and, depending on what's arranged, crew) on site for the duration of an event, so that any medical situation can be responded to immediately rather than waiting for a vehicle to be dispatched from elsewhere.",
    "What's provided — vehicle only, crew size, duration — is discussed and confirmed case by case based on your event, since every gathering has different needs.",
  ],
  whenAppropriate: [
    "Sports events and tournaments",
    "Cultural events and public gatherings",
    "Exhibitions and conferences",
    "Any event where organisers want on-site medical transport standing by",
  ],
  whatToTell: [
    "The event date, venue and expected duration",
    "Expected attendance, if known",
    "Whether standby coverage is needed for the full event or specific hours",
    "Any specific requirements from the venue or local authority",
  ],
  transferPrep: [
    "Share event details as early as possible, since standby coverage needs to be planned around vehicle availability",
    "Confirm on-site parking or positioning for the standby vehicle with venue management",
    "Provide a point of contact for the event who the crew can coordinate with directly",
  ],
  safety: [
    "We do not commit to a specific crew size or on-site response time without first discussing your event's scale and requirements",
    "Confirm venue access and any permissions needed for the vehicle to be positioned on site",
  ],
  areasServed:
    "We discuss event standby coverage for venues across Hyderabad. Call 9951244266 with your event details and we'll talk through what can be arranged.",
  relatedSlugs: ["corporate-ambulance-service-hyderabad", "emergency-ambulance-service-hyderabad"],
  faqs: [
    {
      question: "Do you provide standby ambulances for events?",
      answer:
        "Yes. Call 9951244266 with your event date, venue and expected attendance, and we'll discuss what can be arranged.",
    },
    {
      question: "How far in advance should I book event standby coverage?",
      answer:
        "As early as possible — ideally several weeks ahead for larger events, since standby coverage is planned around vehicle and crew availability.",
    },
    {
      question: "Can you confirm crew size and response time in advance?",
      answer:
        "This depends on your specific event and is discussed case by case. We don't quote a fixed crew size or response time without understanding the event first.",
    },
  ],
  ctaLabel: "Discuss Event Ambulance Support",
  ctaHeading: "Planning an event in Hyderabad?",
  ctaSubheading: "Call our team to discuss standby ambulance coverage for your venue and dates.",
};

export default function EventAmbulancePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ name: "Event Standby Ambulance Service", description: content.heroIntro, path: PATH }),
          breadcrumbJsonLd(content.breadcrumb),
          faqJsonLd(content.faqs),
        ]}
      />
      <ServicePageTemplate content={content} />
    </>
  );
}
