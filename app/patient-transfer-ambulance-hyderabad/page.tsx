import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate, type ServicePageContent } from "@/components/ServicePageTemplate";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/patient-transfer-ambulance-hyderabad/";

export const metadata: Metadata = buildMetadata({
  title: "Patient Transfer Ambulance in Hyderabad | Life Line Ambulance",
  description:
    "Arrange hospital-to-hospital or hospital-to-home patient transfer in Hyderabad. Life Line Ambulance Service coordinates the vehicle — call 9951244266.",
  path: PATH,
});

const content: ServicePageContent = {
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Patient Transfer Ambulance", path: PATH },
  ],
  heroKicker: "Patient Transfer Ambulance",
  illustration: { type: "patient-transfer", label: "Patient transfer route illustration" },
  heroTitle: "Patient Transfer Ambulance in Hyderabad",
  heroIntro:
    "Moving a patient between hospitals, or from hospital back home, needs careful coordination on both ends. We help arrange the vehicle for that transfer.",
  whatItIs: [
    "A patient transfer ambulance covers hospital-to-hospital moves (for a second opinion, specialised treatment, or insurance network reasons) and hospital-to-home discharges where the patient still needs assisted transport.",
    "The right vehicle for a transfer — BLS, ICU, ventilator or oxygen-equipped — depends on the patient's condition at the time, which our coordinator will discuss with you.",
  ],
  whenAppropriate: [
    "Moving a patient from one hospital to another for continued or specialised treatment",
    "Discharge from hospital to home when the patient cannot travel by regular vehicle",
    "Transfer between a hospital and a rehabilitation or care facility",
  ],
  whatToTell: [
    "Pickup facility/address and destination",
    "The patient's current condition and mobility level",
    "Any equipment currently in use (oxygen, monitors, IV lines)",
    "Preferred date and time, since most transfers are planned rather than urgent",
  ],
  transferPrep: [
    "Request discharge summary or referral documents to travel with the patient",
    "Confirm the receiving facility is expecting the patient, if applicable",
    "Arrange for a family member to accompany the patient or be reachable during the transfer",
  ],
  safety: [
    "Share the patient's mobility level (able to sit, needs a stretcher, etc.) so the right vehicle is arranged",
    "Mention any equipment attached to the patient before the vehicle arrives",
    "Confirm medication timing that falls during the transfer window",
  ],
  areasServed:
    "We arrange patient transfer ambulances between hospitals, care facilities and homes across Hyderabad. Call 9951244266 with your pickup and destination to confirm availability.",
  ctaLabel: "Arrange a Patient Transfer",
  relatedSlugs: [
    "icu-ambulance-hyderabad",
    "bls-ambulance-hyderabad",
    "private-ambulance-service-hyderabad",
    "outstation-ambulance-hyderabad",
  ],
  faqs: [
    {
      question: "Can I arrange an ambulance for hospital-to-hospital transfer?",
      answer:
        "Yes. Share both hospitals and the patient's condition with our coordinator, and we'll confirm the appropriate vehicle.",
    },
    {
      question: "Can you arrange transport for a hospital discharge to home?",
      answer:
        "Yes — share the discharge date, hospital and home address, along with the patient's mobility needs.",
    },
    {
      question: "How is a patient transfer ambulance different from a private ambulance?",
      answer:
        "They overlap significantly — a patient transfer is generally between two medical facilities or a facility and home, while a private ambulance booking can cover other planned, non-emergency journeys too.",
    },
  ],
};

export default function PatientTransferAmbulancePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "Patient Transfer Ambulance Service",
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
