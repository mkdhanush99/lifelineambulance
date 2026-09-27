import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { ServicePageTemplate, type ServicePageContent } from "@/components/ServicePageTemplate";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/metadata";

const PATH = "/corporate-ambulance-service-hyderabad/";

export const metadata: Metadata = buildMetadata({
  title: "Corporate Ambulance Service in Hyderabad | Life Line",
  description:
    "Ambulance standby and medical transport support for offices, factories and campuses in Hyderabad. Discuss requirements with Life Line at 9951244266.",
  path: PATH,
});

const content: ServicePageContent = {
  breadcrumb: [
    { name: "Home", path: "/" },
    { name: "Corporate Ambulance", path: PATH },
  ],
  heroKicker: "Corporate Ambulance",
  heroTitle: "Corporate Ambulance Service in Hyderabad",
  heroIntro:
    "Offices, factories and industrial sites often want an ambulance arrangement in place before it's needed. We discuss what's realistic for your site and schedule.",
  whatItIs: [
    "Corporate ambulance support covers standing arrangements for workplaces — offices, factories, construction sites and campuses — so that medical transport can be arranged quickly if an employee or visitor needs it.",
    "This can range from an on-call arrangement to standby coverage for a specific corporate event. What's practical for your organisation is something we'd need to discuss directly, based on your site and requirements.",
  ],
  whenAppropriate: [
    "Offices and campuses wanting a standing ambulance arrangement for staff",
    "Factories and industrial sites with on-site medical risk considerations",
    "Construction sites requiring medical transport arrangements",
    "Corporate events or off-site gatherings needing standby coverage",
  ],
  whatToTell: [
    "Your site address and the nature of the workplace (office, factory, construction site, etc.)",
    "Whether you need an on-call arrangement or standby coverage for a specific date",
    "Approximate headcount on site, if relevant to the discussion",
    "Any existing safety or medical protocols at your site",
  ],
  transferPrep: [
    "Share your requirements with our coordinator so we can discuss what arrangement fits your site",
    "Confirm site access and any security/entry protocols in advance",
    "Provide a point of contact at your organisation for coordination",
  ],
  safety: [
    "We only describe arrangements that are actually confirmed with your organisation — nothing here should be read as a standing guarantee until discussed and agreed directly",
    "Site-specific safety protocols should be shared with our team in advance",
  ],
  areasServed:
    "We discuss corporate ambulance arrangements for offices, factories and campuses across Hyderabad, including the IT corridor and industrial areas. Call 9951244266 to start the conversation.",
  relatedSlugs: ["event-ambulance-service-hyderabad", "emergency-ambulance-service-hyderabad"],
  faqs: [
    {
      question: "Do you provide ambulance support for companies?",
      answer:
        "Yes — call 9951244266 to discuss your site, requirements and whether an on-call arrangement or event-specific standby makes more sense.",
    },
    {
      question: "Can you provide a standing ambulance arrangement for our office?",
      answer:
        "This is something we discuss and confirm directly with your organisation based on your site and needs — call us to talk it through.",
    },
    {
      question: "Do you serve industrial sites and factories, not just offices?",
      answer: "Yes, share your site type and location when you call and we'll discuss what's practical.",
    },
  ],
  ctaLabel: "Discuss Ambulance Support",
  ctaHeading: "Have a corporate site or event in mind?",
  ctaSubheading: "Call our team to discuss ambulance support arrangements for your organisation.",
};

export default function CorporateAmbulancePage() {
  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd({ name: "Corporate Ambulance Service", description: content.heroIntro, path: PATH }),
          breadcrumbJsonLd(content.breadcrumb),
          faqJsonLd(content.faqs),
        ]}
      />
      <ServicePageTemplate content={content} />
    </>
  );
}
