import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate, type ServicePageContent } from "@/components/ServicePageTemplate";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/freezer-box-on-rent-hyderabad/";

export const metadata: Metadata = buildMetadata({
  title: "Freezer Box on Rent in Hyderabad | Life Line Ambulance",
  description:
    "Freezer box rental in Hyderabad for families who need to preserve a body while arrangements are made. Call Life Line Ambulance Service at 9951244266.",
  path: PATH,
});

const content: ServicePageContent = {
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Freezer Box on Rent", path: PATH },
  ],
  heroKicker: "Freezer Box on Rent",
  illustration: { type: "freezer-box", label: "Freezer box rental illustration" },
  heroTitle: "Freezer Box on Rent in Hyderabad",
  heroIntro:
    "When family members need time to travel or arrangements need to be finalised, a freezer box can be rented to preserve the body in the meantime.",
  whatItIs: [
    "A freezer box is rented and placed at the home or another location, used to preserve a body while the family waits for relatives to arrive or finalises funeral arrangements.",
    "This is different from dead body transport (moving the body between locations) and from a mortuary ambulance (a vehicle used within a hospital or mortuary setting). Ask our coordinator if you're unsure which service applies to your situation.",
  ],
  whenAppropriate: [
    "Waiting for family members travelling from other cities before final rites",
    "Additional time needed to finalise funeral or burial arrangements",
    "Any situation where the family needs to delay proceedings by a day or more",
  ],
  whatToTell: [
    "The address where the freezer box is needed",
    "How long the box may be required for, if known",
    "Whether transport of the body to that location is also needed",
  ],
  transferPrep: [
    "Confirm the location has adequate space and power access for the unit",
    "Let our coordinator know your expected timeline so arrangements can be planned accordingly",
  ],
  safety: [
    "We do not make specific preservation-duration guarantees — discuss your timeline with our coordinator so realistic expectations are set",
    "Confirm power and space requirements at the location before the unit arrives",
  ],
  areasServed:
    "We arrange freezer box rental across Hyderabad. Call 9951244266 with your address and expected timeline to check availability.",
  ctaLabel: "Ask About Freezer Box Availability",
  relatedSlugs: ["dead-body-transport-hyderabad", "mortuary-ambulance-hyderabad"],
  faqs: [
    {
      question: "Can I rent a freezer box in Hyderabad?",
      answer:
        "Yes. Call 9951244266 with the address and how long you expect to need it, and our coordinator will confirm availability.",
    },
    {
      question: "How long can a freezer box be rented for?",
      answer:
        "This depends on the family's needs and current availability — discuss your expected timeline with our coordinator when you call. We don't make fixed preservation-duration guarantees over the phone.",
    },
    {
      question: "Do you also arrange transport along with the freezer box?",
      answer: "Yes, mention this when you call so both can be coordinated together.",
    },
  ],
};

export default function FreezerBoxPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ name: "Freezer Box Rental Service", description: content.heroIntro, path: PATH }),
          breadcrumbJsonLd(content.breadcrumb),
          faqJsonLd(content.faqs),
        ]}
      />
      <ServicePageTemplate content={content} />
    </>
  );
}
