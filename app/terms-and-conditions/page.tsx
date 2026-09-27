import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { buildMetadata } from "@/lib/metadata";
import { PHONE_DISPLAY } from "@/lib/site-config";

const PATH = "/terms-and-conditions/";
const BREADCRUMB = [
  { name: "Home", path: "/" },
  { name: "Terms & Conditions", path: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions | Life Line Ambulance Service",
  description:
    "The terms that apply to using this website and to ambulance transport services arranged through Life Line Ambulance Service in Hyderabad.",
  path: PATH,
  noindex: true,
});

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" breadcrumb={BREADCRUMB}>
      <LegalSection title="1. Acceptance of these terms">
        <p>
          By using this website or contacting Life Line Ambulance Service to arrange a service, you
          agree to these terms. If you do not agree, please contact us directly at {PHONE_DISPLAY}{" "}
          before proceeding, rather than relying on the website alone.
        </p>
      </LegalSection>

      <LegalSection title="2. About this website">
        <p>
          This website provides general information about ambulance and patient transport services
          available in Hyderabad. It is informational — an actual booking is confirmed only after
          you speak with our coordinator by phone.
        </p>
      </LegalSection>

      <LegalSection title="3. Nature of the service">
        <p>
          All services are subject to vehicle, staff and route availability at the time of your
          request. Describing a service on this website does not guarantee that a specific vehicle
          type, crew, or response time will be available for your request. For an immediate,
          life-threatening emergency, please still call {PHONE_DISPLAY} or seek the nearest
          available emergency medical assistance without delay.
        </p>
      </LegalSection>

      <LegalSection title="4. Your responsibilities">
        <p>
          When arranging a service, please provide accurate information about the patient,
          pickup location and destination. Inaccurate information may affect our ability to
          arrange the appropriate vehicle and crew.
        </p>
      </LegalSection>

      <LegalSection title="5. No medical advice">
        <p>
          Content on this website, including the Safety Guide, is general information and is not
          medical advice. It does not replace consultation with a qualified medical professional.
        </p>
      </LegalSection>

      <LegalSection title="6. Third-party links">
        <p>
          This website links to third-party services such as Google Maps and our social media
          profiles. We are not responsible for the content, availability or practices of those
          third-party sites.
        </p>
      </LegalSection>

      <LegalSection title="7. Intellectual property">
        <p>
          The Life Line Ambulance Service name, logo and brand assets are the property of Life
          Line Ambulance Service and may not be reproduced without permission. Other website
          content may be reused only with our prior written consent.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of liability">
        <p>
          To the maximum extent permitted by applicable law, Life Line Ambulance Service is not
          liable for indirect, incidental or consequential loss arising from use of this website
          or from delays in service availability beyond our reasonable control. Our total
          liability in connection with a specific service is limited to the amount paid for that
          service.
        </p>
      </LegalSection>

      <LegalSection title="9. Governing law">
        <p>
          These terms are governed by the laws of India, and any disputes are subject to the
          exclusive jurisdiction of the courts of Hyderabad, Telangana.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to these terms">
        <p>
          We may update these terms from time to time. The &ldquo;Last updated&rdquo; date at the
          top of this page reflects the most recent revision.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact us">
        <p>For any question about these terms, call {PHONE_DISPLAY}.</p>
      </LegalSection>
    </LegalLayout>
  );
}
