import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate, type ServicePageContent } from "@/components/ServicePageTemplate";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/emergency-ambulance-service-hyderabad/";

export const metadata: Metadata = buildMetadata({
  title: "Emergency Ambulance Service in Hyderabad | Life Line Ambulance",
  description:
    "Need urgent ambulance transport in Hyderabad? Call Life Line Ambulance Service at 9951244266 to arrange emergency patient transport to hospital.",
  path: PATH,
});

const content: ServicePageContent = {
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Emergency Ambulance", path: PATH },
  ],
  heroKicker: "Emergency Ambulance",
  illustration: { type: "emergency", label: "Emergency ambulance response illustration" },
  heroTitle: "Emergency Ambulance Service in Hyderabad",
  heroIntro:
    "When a medical emergency happens, the priority is getting the patient to appropriate care safely. Call our team directly and we'll discuss ambulance transport to the nearest suitable hospital.",
  whatItIs: [
    "An emergency ambulance is arranged for urgent, unplanned medical situations — where a patient needs to reach a hospital promptly rather than at a scheduled time. This is different from a private booked ambulance, which is arranged in advance for non-urgent transport.",
    "Life Line Ambulance Service coordinates emergency ambulance transport across Hyderabad, connecting callers with an available vehicle and discussing the destination hospital based on the situation described.",
  ],
  whenAppropriate: [
    "Sudden severe symptoms such as chest pain, breathing difficulty, or severe bleeding",
    "Road accidents or falls with suspected injury",
    "Loss of consciousness or unresponsiveness",
    "Any situation where a family member or bystander believes urgent hospital transport is needed",
  ],
  whatToTell: [
    "The patient's current condition and visible symptoms",
    "The exact pickup location, including a landmark if the address is hard to find",
    "A preferred or nearby hospital, if you already have one in mind",
    "A contact number for someone at the pickup location",
    "Any known medical history relevant to transport, such as allergies or existing conditions",
  ],
  transferPrep: [
    "Keep the patient still and in a safe position until the ambulance arrives, unless you have been advised otherwise",
    "Keep the entrance, driveway or parking area clear so the vehicle can reach the location",
    "Have any available ID, medical records or medication list ready to bring along",
    "Let a family member know which hospital the patient is being taken to",
    "Avoid moving a patient with a suspected spinal or major injury unless instructed by the coordinator or crew",
  ],
  safety: [
    "The crew will assess the patient before and during transport",
    "Mention any known allergies, current medication or infectious symptoms when you call, so the crew can prepare appropriately",
    "Keep a clear path between the patient and the vehicle wherever possible",
  ],
  areasServed:
    "We coordinate emergency ambulance transport across Hyderabad, including central Hyderabad, Secunderabad, the IT corridor (Gachibowli, HITEC City, Kondapur) and the Old City. Which vehicle can reach a given location, and how quickly, depends on current position, traffic and availability at the time of the call.",
  relatedSlugs: [
    "icu-ambulance-hyderabad",
    "ventilator-ambulance-hyderabad",
    "patient-transfer-ambulance-hyderabad",
    "outstation-ambulance-hyderabad",
  ],
  faqs: [
    {
      question: "How quickly can an ambulance reach me?",
      answer:
        "Arrival time depends on the vehicle's current location, traffic and demand at the time of your call. We don't quote a fixed response time — call 9951244266 and we'll give you the clearest picture we can at that moment.",
    },
    {
      question: "What if I'm not sure which hospital to go to?",
      answer:
        "That's fine — describe the patient's condition to our coordinator and we can discuss nearby hospital options as part of arranging the ambulance.",
    },
    {
      question: "Can I request a specific type of ambulance for an emergency?",
      answer:
        "Yes, mention it when you call — for example if ICU or ventilator support may be needed. We'll confirm what's available at that time.",
    },
    {
      question: "Is emergency ambulance service available at night?",
      answer:
        "Call 9951244266 at any time and our coordinator will confirm current availability for your location.",
    },
  ],
};

export default function EmergencyAmbulancePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Emergency Ambulance Service",
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
