import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate, type ServicePageContent } from "@/components/ServicePageTemplate";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/bls-ambulance-hyderabad/";

export const metadata: Metadata = buildMetadata({
  title: "BLS Ambulance Service in Hyderabad | Life Line Ambulance",
  description:
    "BLS ambulance transport in Hyderabad for stable patients who need basic monitoring in transit. Call Life Line Ambulance Service at 9951244266.",
  path: PATH,
});

const content: ServicePageContent = {
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "BLS Ambulance", path: PATH },
  ],
  heroKicker: "BLS Ambulance",
  heroTitle: "BLS Ambulance Service in Hyderabad",
  heroIntro:
    "Many patients need safe, comfortable transport without intensive-care-level monitoring. A BLS (Basic Life Support) ambulance is built for exactly that middle ground.",
  whatItIs: [
    "A BLS ambulance is used for patients who are stable but still need to travel lying down, with basic monitoring and first-aid-level support available if needed — a step below ICU or ventilator transport, and a step above a private car.",
    "It's a common choice for routine hospital visits, discharges and transfers where the patient's condition doesn't require critical-care equipment during the journey.",
  ],
  whenAppropriate: [
    "Stable patients being discharged who still need to travel lying down",
    "Routine hospital-to-hospital or hospital-to-home transfers without critical-care needs",
    "Elderly patients or those with limited mobility who need assisted transport",
    "Any transfer where the treating doctor has indicated basic support is sufficient",
  ],
  whatToTell: [
    "The patient's current condition and mobility level",
    "Pickup and destination addresses",
    "Whether a stretcher or wheelchair is needed",
    "Any medication the patient needs during the journey",
  ],
  transferPrep: [
    "Confirm the patient's discharge paperwork and medication list are ready to travel with them",
    "Check that the pickup location is accessible for a stretcher or wheelchair if needed",
    "Arrange for a family member to accompany the patient where possible",
  ],
  safety: [
    "Share any mobility limitations or fall risk with our coordinator in advance",
    "Mention current medication and timing so it isn't missed during the journey",
    "If the patient's condition changes before pickup, let us know so the right vehicle is still assigned",
  ],
  areasServed:
    "We arrange BLS ambulance transport across Hyderabad for routine hospital and home transfers. Call 9951244266 to confirm availability for your pickup location.",
  ctaLabel: "Call About BLS Ambulance",
  relatedSlugs: [
    "patient-transfer-ambulance-hyderabad",
    "private-ambulance-service-hyderabad",
    "icu-ambulance-hyderabad",
    "oxygen-ambulance-hyderabad",
  ],
  faqs: [
    {
      question: "What does BLS mean in an ambulance context?",
      answer:
        "BLS stands for Basic Life Support — transport with basic monitoring and first-aid-level support for patients who are stable but still need to travel lying down or with assistance.",
    },
    {
      question: "ICU ambulance vs BLS ambulance: what is the difference?",
      answer:
        "A BLS ambulance suits stable patients needing basic support, while an ICU ambulance is for critical patients needing closer monitoring in transit. Our coordinator can help you work out which applies — call 9951244266.",
    },
    {
      question: "Can I book a BLS ambulance for a routine hospital discharge?",
      answer: "Yes, this is one of the most common uses. Share the discharge date and destination when you call.",
    },
  ],
};

export default function BlsAmbulancePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ name: "BLS Ambulance Service", description: content.heroIntro, path: PATH }),
          breadcrumbJsonLd(content.breadcrumb),
          faqJsonLd(content.faqs),
        ]}
      />
      <ServicePageTemplate content={content} />
    </>
  );
}
