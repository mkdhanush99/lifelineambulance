import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate, type ServicePageContent } from "@/components/ServicePageTemplate";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/ventilator-ambulance-hyderabad/";

export const metadata: Metadata = buildMetadata({
  title: "Ventilator Ambulance in Hyderabad | Life Line Ambulance",
  description:
    "Transporting a patient who needs ventilator support? Life Line Ambulance Service arranges ventilator-equipped transport in Hyderabad. Call 9951244266.",
  path: PATH,
});

const content: ServicePageContent = {
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Ventilator Ambulance", path: PATH },
  ],
  heroKicker: "Ventilator Ambulance",
  illustration: { type: "ventilator", label: "Ventilator-equipped ambulance illustration" },
  heroTitle: "Ventilator Ambulance in Hyderabad",
  heroIntro:
    "A patient who is currently on a ventilator needs a vehicle and crew equipped for that specific requirement in transit. Call our team to discuss the transfer.",
  whatItIs: [
    "A ventilator ambulance is arranged when a patient needs continued ventilator support during the journey itself, not only at the origin or destination hospital.",
    "This is a more specialised transfer than standard patient transport. Our coordinator will ask about the patient's current ventilator settings and monitoring needs so the right vehicle and staffing can be discussed for your specific transfer.",
  ],
  whenAppropriate: [
    "The patient is currently on a ventilator and needs to move between hospitals or wards",
    "A patient is being discharged to home care but still requires ventilator support during the journey",
    "The treating doctor has specifically recommended ventilator-equipped transport",
  ],
  whatToTell: [
    "Current ventilator settings and mode, ideally confirmed by the treating doctor or ICU staff",
    "Backup oxygen and power requirements for the journey duration",
    "Pickup and destination hospitals, including department",
    "Whether a doctor or nurse will accompany the patient, or needs to be arranged",
  ],
  transferPrep: [
    "Get written handover notes from the current treating team covering ventilator settings and recent vitals",
    "Confirm the receiving hospital's ICU or ward is ready to accept the patient before departure",
    "Check that portable ventilator battery and backup oxygen supply are sufficient for the expected travel time",
    "Arrange for a family member to be reachable throughout the transfer",
  ],
  safety: [
    "Ventilator transfers are more sensitive to delay and route conditions — discuss timing and any known road issues with our coordinator",
    "Confirm backup arrangements in case of equipment issues during transport",
    "Share full current medication and monitoring details before the vehicle departs",
  ],
  areasServed:
    "We arrange ventilator-equipped ambulance transfers across Hyderabad's hospital network, and for longer distances where a ventilator patient needs outstation transport — see our outstation ambulance page for that scenario specifically.",
  ctaLabel: "Discuss Ventilator Transport",
  relatedSlugs: [
    "icu-ambulance-hyderabad",
    "oxygen-ambulance-hyderabad",
    "outstation-ambulance-hyderabad",
    "patient-transfer-ambulance-hyderabad",
  ],
  faqs: [
    {
      question: "When does a patient need a ventilator ambulance?",
      answer:
        "When they are currently on a ventilator and need to travel between facilities, or are being discharged home while still requiring ventilator support. Your treating doctor can confirm if this applies.",
    },
    {
      question: "Do you provide ventilator ambulance services for outstation transfers?",
      answer:
        "This can be discussed — call 9951244266 with the distance and the patient's current ventilator requirements so we can talk through what's possible.",
    },
    {
      question: "Will a doctor travel with the patient?",
      answer:
        "This depends on the case and what's arranged with the treating hospital. Raise it with our coordinator early so it can be planned for.",
    },
    {
      question: "What information do you need before dispatching a ventilator ambulance?",
      answer:
        "Current ventilator settings, pickup and destination hospitals, and expected travel time are the essentials — share whatever handover notes are available.",
    },
  ],
};

export default function VentilatorAmbulancePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Ventilator Ambulance Service",
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
