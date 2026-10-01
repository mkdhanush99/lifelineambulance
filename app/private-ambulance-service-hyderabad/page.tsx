import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate, type ServicePageContent } from "@/components/ServicePageTemplate";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/private-ambulance-service-hyderabad/";

export const metadata: Metadata = buildMetadata({
  title: "Private Ambulance Service in Hyderabad | Life Line Ambulance",
  description:
    "Book a private ambulance in Hyderabad for planned, non-emergency patient transport. Life Line Ambulance Service can be reached at 9951244266.",
  path: PATH,
});

const content: ServicePageContent = {
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Private Ambulance", path: PATH },
  ],
  heroKicker: "Private Ambulance",
  illustration: { type: "private", label: "Private ambulance booking illustration" },
  heroTitle: "Private Ambulance Service in Hyderabad",
  heroIntro:
    "Not every ambulance journey is an emergency. A private ambulance is booked in advance for planned patient transport, on your schedule rather than dispatched urgently.",
  whatItIs: [
    "A private ambulance is arranged ahead of time for non-emergency patient transport — for example, a scheduled hospital appointment, a discharge home, or moving a patient between care facilities on a planned date.",
    "Because the journey is planned rather than urgent, there's more time to discuss the patient's needs, the route and timing with our coordinator in advance.",
  ],
  whenAppropriate: [
    "A scheduled hospital visit, procedure or check-up where the patient cannot travel by regular vehicle",
    "Discharge from hospital to home when the patient still needs assisted or lying-down transport",
    "Planned transfer between a hospital, clinic or care facility on a set date and time",
    "Any situation where the transport is known in advance and doesn't require emergency dispatch",
  ],
  whatToTell: [
    "The date and time the ambulance is needed",
    "Pickup and destination addresses",
    "Whether the patient needs a stretcher, wheelchair or can sit upright",
    "Any equipment or support needed during the journey (oxygen, assistance getting in/out, etc.)",
  ],
  transferPrep: [
    "Book as early as you can, since planned trips are scheduled around vehicle availability",
    "Have the patient's ID and relevant medical documents ready",
    "Confirm the pickup address is easily accessible for the vehicle",
    "Let the receiving facility know the expected arrival time, if applicable",
  ],
  safety: [
    "Share mobility limitations (wheelchair, stretcher, assistance needed) in advance so the right vehicle is arranged",
    "Mention any medication schedule that falls during the journey",
    "Confirm who will accompany the patient, if anyone",
  ],
  areasServed:
    "We arrange private ambulance bookings across Hyderabad, including pickups from homes, hospitals and care facilities across the city. Confirm your specific pickup location and timing with our coordinator when booking.",
  ctaLabel: "Arrange Patient Transport",
  relatedSlugs: [
    "patient-transfer-ambulance-hyderabad",
    "bls-ambulance-hyderabad",
    "emergency-ambulance-service-hyderabad",
    "outstation-ambulance-hyderabad",
  ],
  faqs: [
    {
      question: "Do you provide private ambulance services?",
      answer:
        "Yes. Call 9951244266 with your preferred date, time, pickup and destination, and our coordinator will confirm availability.",
    },
    {
      question: "How far in advance should I book a private ambulance?",
      answer:
        "As early as possible, since planned bookings are arranged around vehicle availability. Call as soon as you know the date and time you need.",
    },
    {
      question: "Can I book a private ambulance for a same-day appointment?",
      answer:
        "Call 9951244266 and describe your timing — we'll let you know what can be arranged on short notice.",
    },
    {
      question: "What's the difference between a private ambulance and an emergency ambulance?",
      answer:
        "A private ambulance is booked in advance for planned, non-urgent transport. An emergency ambulance is dispatched for urgent, unplanned medical situations — see our emergency ambulance page for that scenario.",
    },
  ],
};

export default function PrivateAmbulancePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Private Ambulance Service",
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
