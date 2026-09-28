import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate, type ServicePageContent } from "@/components/ServicePageTemplate";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/mortuary-ambulance-hyderabad/";

export const metadata: Metadata = buildMetadata({
  title: "Mortuary Ambulance Service in Hyderabad | Life Line",
  description:
    "Mortuary ambulance transport in Hyderabad, arranged with care between hospital, mortuary and family. Call Life Line Ambulance Service at 9951244266.",
  path: PATH,
});

const content: ServicePageContent = {
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Mortuary Ambulance", path: PATH },
  ],
  heroKicker: "Mortuary Ambulance",
  illustration: { type: "mortuary", label: "Mortuary ambulance illustration" },
  heroTitle: "Mortuary Ambulance Service in Hyderabad",
  heroIntro:
    "A mortuary ambulance is a vehicle specifically used for moving a body to or from a hospital mortuary. Call our team to arrange this with care.",
  whatItIs: [
    "A mortuary ambulance is the vehicle used to transport a body to or from a hospital or facility mortuary — for example, from a ward to the hospital mortuary, or from the mortuary to a family's chosen location.",
    "This is a distinct service from general dead body transport (which can cover longer or more varied journeys) and from freezer box rental (a preservation unit placed at a location). Our coordinator can help clarify which service fits your situation.",
  ],
  whenAppropriate: [
    "Moving a body from a hospital ward to the hospital's own mortuary",
    "Transport from a hospital mortuary to a family residence or funeral location",
    "Any transfer specifically involving a mortuary facility",
  ],
  whatToTell: [
    "The mortuary or facility involved",
    "The destination address",
    "Whether any hospital paperwork or release documentation is already in progress",
  ],
  transferPrep: [
    "Confirm with hospital staff what documentation is required before the mortuary can release the body",
    "Share the exact destination and any timing constraints with our coordinator",
  ],
  safety: [
    "Our team will confirm required documentation before the transfer proceeds",
    "Timing is coordinated with the hospital or mortuary facility involved",
  ],
  areasServed:
    "We coordinate mortuary ambulance transport with hospitals and facilities across Hyderabad. Call 9951244266 and our coordinator will confirm the details with you.",
  ctaLabel: "Call About Mortuary Transport",
  relatedSlugs: ["dead-body-transport-hyderabad", "freezer-box-on-rent-hyderabad"],
  faqs: [
    {
      question: "What is a mortuary ambulance, specifically?",
      answer:
        "It's the vehicle used to move a body to or from a hospital or facility mortuary, as distinct from a freezer box (a preservation unit) or general dead body transport over longer distances.",
    },
    {
      question: "Do you coordinate directly with hospital mortuaries?",
      answer:
        "Yes — share the hospital and mortuary details with our coordinator so timing and any required paperwork can be confirmed.",
    },
  ],
};

export default function MortuaryAmbulancePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ name: "Mortuary Ambulance Service", description: content.heroIntro, path: PATH }),
          breadcrumbJsonLd(content.breadcrumb),
          faqJsonLd(content.faqs),
        ]}
      />
      <ServicePageTemplate content={content} />
    </>
  );
}
