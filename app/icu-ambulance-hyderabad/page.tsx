import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate, type ServicePageContent } from "@/components/ServicePageTemplate";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/icu-ambulance-hyderabad/";

export const metadata: Metadata = buildMetadata({
  title: "ICU Ambulance Service in Hyderabad | Life Line Ambulance",
  description:
    "Arrange ICU ambulance transport in Hyderabad for critical patients who need close monitoring in transit. Call Life Line Ambulance Service at 9951244266.",
  path: PATH,
});

const content: ServicePageContent = {
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "ICU Ambulance", path: PATH },
  ],
  heroKicker: "ICU Ambulance",
  heroTitle: "ICU Ambulance Service in Hyderabad",
  heroIntro:
    "Some patients need close monitoring throughout a journey, not just transport. An ICU ambulance is discussed and arranged for exactly that kind of transfer.",
  heroImage: {
    src: "/photos/mobile-icu-ambulance-hyderabad.jpg",
    alt: "Mobile ICU ambulance used for critical patient transport in Hyderabad",
  },
  whatItIs: [
    "An ICU ambulance is typically used when a patient's condition needs closer monitoring during transport than a standard ambulance provides — for example, patients moving between intensive care units, or those who are critical but not on a ventilator.",
    "The specific monitoring equipment and staffing available for a transfer depends on the vehicle assigned and the patient's needs at the time. Our coordinator will discuss what's required and what can be arranged when you call.",
  ],
  whenAppropriate: [
    "Transfer between hospital ICUs or from a general ward to an ICU at another facility",
    "Patients who are critical or unstable but do not currently require ventilator support",
    "Post-surgical patients who need monitoring during transport",
    "Any transfer where the referring or receiving doctor has recommended ICU-level transport",
  ],
  whatToTell: [
    "The patient's current diagnosis and vital monitoring needs, ideally from the referring doctor or nurse",
    "The pickup hospital/ward and the destination facility",
    "Whether the patient is on any continuous medication, oxygen or monitoring equipment right now",
    "Contact details for the accompanying family member or hospital staff coordinating the transfer",
  ],
  transferPrep: [
    "Ask the current treating team for a referral note or discharge summary to travel with the patient",
    "Confirm the receiving hospital and department in advance where possible",
    "Arrange for a family member to accompany the patient, or be reachable during the transfer",
    "Share any equipment currently in use (monitors, drips, oxygen) with our coordinator before the vehicle arrives",
  ],
  safety: [
    "Confirm the receiving hospital has been informed and can accept the patient before departure",
    "Mention current medication, allergies and any equipment attached to the patient",
    "For longer transfers, ask about planned stops or checks along the route",
  ],
  areasServed:
    "We coordinate ICU ambulance transfers across Hyderabad's hospital districts and surrounding residential areas, including between major hospitals in the city and, where required, to and from outstation facilities.",
  ctaLabel: "Call About ICU Ambulance",
  relatedSlugs: [
    "ventilator-ambulance-hyderabad",
    "emergency-ambulance-service-hyderabad",
    "patient-transfer-ambulance-hyderabad",
    "outstation-ambulance-hyderabad",
  ],
  faqs: [
    {
      question: "Do you provide ICU ambulance services?",
      answer:
        "Yes. Call 9951244266 with the patient's condition and both hospitals involved, and our coordinator will discuss vehicle and staffing availability for the transfer.",
    },
    {
      question: "What's the difference between an ICU ambulance and a ventilator ambulance?",
      answer:
        "An ICU ambulance is generally used for critical but non-ventilated patients needing close monitoring. A patient who is currently on a ventilator needs a ventilator ambulance instead — see our ventilator ambulance page for more detail.",
    },
    {
      question: "Can family members travel in the ICU ambulance?",
      answer:
        "This depends on the vehicle and the patient's condition. Ask our coordinator when you call so space and arrangements can be confirmed in advance.",
    },
    {
      question: "Do you handle hospital-to-hospital ICU transfers only, or also home to hospital?",
      answer:
        "Both are possible — describe the pickup and destination when you call and we'll confirm what can be arranged.",
    },
  ],
};

export default function IcuAmbulancePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "ICU Ambulance Service",
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
