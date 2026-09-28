import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate, type ServicePageContent } from "@/components/ServicePageTemplate";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/nicu-ambulance-hyderabad/";

export const metadata: Metadata = buildMetadata({
  title: "NICU & Neonatal Ambulance in Hyderabad | Life Line",
  description:
    "Neonatal ambulance transport in Hyderabad for newborns and infants who need specialised transfer support. Call Life Line Ambulance Service at 9951244266.",
  path: PATH,
});

const content: ServicePageContent = {
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "NICU / Neonatal Ambulance", path: PATH },
  ],
  heroKicker: "NICU / Neonatal Ambulance",
  illustration: { type: "nicu", label: "Neonatal transport cot illustration" },
  heroTitle: "NICU & Neonatal Ambulance in Hyderabad",
  heroIntro:
    "Transporting a newborn or infant is a different undertaking from transporting an adult patient. Speak with our team about what a neonatal transfer needs.",
  whatItIs: [
    "A NICU or neonatal ambulance is arranged for newborns and infants who need specialised transport — for example, moving between a NICU and another hospital, or bringing a newborn home under continued monitoring.",
    "These transfers are usually coordinated closely with the treating neonatologist or paediatrician, since the equipment and staffing needed depends entirely on the infant's specific condition.",
  ],
  whenAppropriate: [
    "Transfer of a newborn between a NICU and another hospital's neonatal unit",
    "Bringing a newborn home after a NICU stay, where continued monitoring during travel is advised",
    "Any neonatal transfer specifically recommended by the treating paediatrician or neonatologist",
  ],
  whatToTell: [
    "The infant's current condition and any equipment currently in use, as confirmed by the treating doctor",
    "Pickup NICU/ward and destination facility or home address",
    "Whether a parent or NICU staff member will accompany the infant",
    "Any specific timing constraints given by the treating team",
  ],
  transferPrep: [
    "Get clear handover instructions and any equipment requirements confirmed by the neonatal team before the transfer",
    "Confirm the receiving facility (if any) is ready and has been informed",
    "Arrange for a parent or guardian to accompany the infant wherever possible",
  ],
  safety: [
    "This is a specialised transfer — always coordinate directly with the treating neonatologist or paediatrician on what the infant needs during transport",
    "Confirm temperature control, feeding schedule and any monitoring equipment needs with our coordinator in advance",
    "Share contact details for both the sending and receiving medical teams",
  ],
  areasServed:
    "We coordinate neonatal ambulance transfers across Hyderabad's hospital network. Because every neonatal case is different, call 9951244266 to discuss your specific situation with our coordinator.",
  ctaLabel: "Discuss Neonatal Transport",
  relatedSlugs: [
    "icu-ambulance-hyderabad",
    "oxygen-ambulance-hyderabad",
    "patient-transfer-ambulance-hyderabad",
    "ventilator-ambulance-hyderabad",
  ],
  faqs: [
    {
      question: "Do you provide neonatal ambulance transport?",
      answer:
        "Yes — call 9951244266 and share the infant's condition as confirmed by the treating neonatologist, and our coordinator will discuss what can be arranged.",
    },
    {
      question: "Can a parent travel with the infant?",
      answer:
        "In most cases, yes. Confirm this with our coordinator when arranging the transfer so seating and arrangements are planned in advance.",
    },
    {
      question: "Do you handle NICU-to-NICU transfers between hospitals?",
      answer:
        "Yes, this is a common reason for a neonatal ambulance. Share both the sending and receiving hospitals when you call.",
    },
  ],
};

export default function NicuAmbulancePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({
            name: "NICU / Neonatal Ambulance Service",
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
