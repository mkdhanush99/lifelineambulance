import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate, type ServicePageContent } from "@/components/ServicePageTemplate";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/outstation-ambulance-hyderabad/";

export const metadata: Metadata = buildMetadata({
  title: "Outstation Ambulance Service from Hyderabad | Life Line",
  description:
    "Need long-distance ambulance transport from Hyderabad? Life Line Ambulance Service arranges outstation patient transport. Call 9951244266 to plan your journey.",
  path: PATH,
});

const content: ServicePageContent = {
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Outstation Ambulance", path: PATH },
  ],
  heroKicker: "Outstation Ambulance",
  illustration: { type: "outstation", label: "Long-distance outstation route illustration" },
  heroTitle: "Outstation Ambulance Service from Hyderabad",
  heroIntro:
    "Long-distance patient transport needs more planning than a local transfer — route, rest stops, fuel and the patient's condition over several hours all matter. Call us to plan the journey.",
  heroImage: {
    src: "/photos/ambulance-outstation-highway-hyderabad.jpg",
    alt: "Ambulance on a highway during an outstation patient transfer from Hyderabad",
  },
  whatItIs: [
    "An outstation ambulance is arranged for patient transport between Hyderabad and another city or town, rather than within Hyderabad itself. These journeys are typically planned in advance rather than dispatched immediately.",
    "Because outstation transfers can take several hours, our coordinator will discuss the patient's condition, the route, and what the vehicle and crew need to carry for the full journey.",
  ],
  whenAppropriate: [
    "A patient is being moved to a hospital in another city for specialised treatment",
    "A patient is being brought back to Hyderabad from another city or town",
    "A stable patient is returning home to a location outside Hyderabad after treatment",
    "Family requests transport to a hospital closer to home in another town",
  ],
  whatToTell: [
    "The exact pickup city/town and destination",
    "The patient's current condition and whether any equipment (oxygen, ventilator, monitoring) is needed for the full journey",
    "Preferred travel timing, since outstation trips are usually planned rather than immediate",
    "Whether a family member or medical attendant will accompany the patient",
  ],
  transferPrep: [
    "Share the patient's current medical reports and medication list with our coordinator in advance",
    "Confirm the receiving hospital, if any, and their expected arrival time",
    "Plan for rest stops on longer routes if the patient's condition allows",
    "Keep emergency contacts for both the origin and destination reachable throughout the journey",
  ],
  safety: [
    "Longer journeys mean more time for a patient's condition to change — mention any risk factors clearly when arranging the transfer",
    "Confirm what equipment and backup supplies (oxygen, medication) will travel with the vehicle for the full distance",
    "Ask about planned stops and estimated journey time before departure",
  ],
  areasServed:
    "We arrange outstation ambulance transport from Hyderabad to destinations across Telangana and neighbouring states. Exact routes, journey time and vehicle availability depend on the distance involved — call 9951244266 with your specific destination to discuss planning.",
  ctaLabel: "Plan an Outstation Transfer",
  relatedSlugs: [
    "icu-ambulance-hyderabad",
    "ventilator-ambulance-hyderabad",
    "patient-transfer-ambulance-hyderabad",
    "emergency-ambulance-service-hyderabad",
  ],
  faqs: [
    {
      question: "Do you provide outstation ambulance services from Hyderabad?",
      answer:
        "Yes. Call 9951244266 with the destination city and the patient's condition, and our coordinator will discuss planning and availability.",
    },
    {
      question: "How far in advance should I book an outstation ambulance?",
      answer:
        "As early as possible, since these journeys involve more planning than a local transfer. If the need is urgent, call anyway and we'll discuss what can be arranged.",
    },
    {
      question: "Can an outstation ambulance carry oxygen or ventilator equipment?",
      answer:
        "This depends on the vehicle assigned and the patient's needs — mention the requirement when you call so it can be confirmed for your route.",
    },
    {
      question: "Can a family member travel with the patient on an outstation trip?",
      answer:
        "In most cases, yes — confirm seating and arrangements with our coordinator when booking.",
    },
  ],
};

export default function OutstationAmbulancePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Outstation Ambulance Service",
            description: content.heroIntro,
            path: PATH,
          }),
          breadcrumbJsonLd(content.breadcrumb),
          faqJsonLd(content.faqs),
        ]}
      />
      <ServicePageTemplate content={content} />
    </>
  );
}
