import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate, type ServicePageContent } from "@/components/ServicePageTemplate";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/oxygen-ambulance-hyderabad/";

export const metadata: Metadata = buildMetadata({
  title: "Oxygen Ambulance Service in Hyderabad | Life Line Ambulance",
  description:
    "Oxygen-supported ambulance transport in Hyderabad for patients with breathing difficulty or low oxygen levels. Call Life Line Ambulance Service at 9951244266.",
  path: PATH,
});

const content: ServicePageContent = {
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Oxygen Ambulance", path: PATH },
  ],
  heroKicker: "Oxygen Ambulance",
  heroTitle: "Oxygen Ambulance Service in Hyderabad",
  heroIntro:
    "Some patients need supplemental oxygen throughout a journey, without necessarily needing full ICU or ventilator support. An oxygen ambulance is arranged for that need.",
  whatItIs: [
    "An oxygen ambulance provides onboard oxygen support for patients with breathing difficulty, low oxygen saturation, or a respiratory condition that needs supplemental oxygen during transport.",
    "It sits between standard patient transport and ventilator-equipped transport — for patients who need oxygen support but are not on a ventilator.",
  ],
  whenAppropriate: [
    "Patients with breathing difficulty or a diagnosed respiratory condition needing oxygen during travel",
    "Post-hospital discharge for patients who are on home oxygen therapy",
    "Transfers for patients with low oxygen saturation levels, as advised by the treating doctor",
  ],
  whatToTell: [
    "The patient's current oxygen requirement (flow rate, if known)",
    "Any respiratory diagnosis or condition relevant to the transfer",
    "Pickup and destination details",
    "Whether the patient uses a mask, nasal cannula or another form of oxygen delivery",
  ],
  transferPrep: [
    "Confirm current oxygen flow rate and delivery method with the treating doctor or nurse",
    "Bring along any current prescriptions or respiratory medication",
    "Let our coordinator know the expected journey duration so oxygen supply can be planned for it",
  ],
  safety: [
    "Share any recent changes in the patient's breathing or oxygen levels before the vehicle arrives",
    "Confirm backup oxygen supply is discussed for longer journeys",
    "Mention any other equipment (nebuliser, monitors) currently in use",
  ],
  areasServed:
    "We arrange oxygen-supported ambulance transport across Hyderabad. Call 9951244266 with the patient's oxygen requirement so the right vehicle can be confirmed for your pickup location.",
  ctaLabel: "Call About Oxygen Ambulance",
  relatedSlugs: [
    "ventilator-ambulance-hyderabad",
    "icu-ambulance-hyderabad",
    "bls-ambulance-hyderabad",
    "patient-transfer-ambulance-hyderabad",
  ],
  faqs: [
    {
      question: "Do you provide oxygen ambulance services?",
      answer:
        "Yes. Call 9951244266 and share the patient's current oxygen requirement so our coordinator can confirm vehicle availability.",
    },
    {
      question: "What's the difference between an oxygen ambulance and a ventilator ambulance?",
      answer:
        "An oxygen ambulance supports patients who need supplemental oxygen but are breathing on their own. A ventilator ambulance is for patients who are currently on a ventilator — see our ventilator ambulance page for that scenario.",
    },
    {
      question: "Can you arrange oxygen ambulance transport for a home discharge?",
      answer:
        "Yes, this is a common request. Share the discharge date, destination and current oxygen flow rate when you call.",
    },
  ],
};

export default function OxygenAmbulancePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ name: "Oxygen Ambulance Service", description: content.heroIntro, path: PATH }),
          breadcrumbJsonLd(content.breadcrumb),
          faqJsonLd(content.faqs),
        ]}
      />
      <ServicePageTemplate content={content} />
    </>
  );
}
