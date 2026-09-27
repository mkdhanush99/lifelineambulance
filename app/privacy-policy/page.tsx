import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { buildMetadata } from "@/lib/metadata";
import { PHONE_DISPLAY } from "@/lib/site-config";

const PATH = "/privacy-policy/";
const BREADCRUMB = [
  { name: "Home", path: "/" },
  { name: "Privacy Policy", path: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Life Line Ambulance Service",
  description:
    "How Life Line Ambulance Service collects, uses and protects information shared when you contact us about ambulance transport in Hyderabad.",
  path: PATH,
  noindex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" breadcrumb={BREADCRUMB}>
      <LegalSection title="1. Introduction">
        <p>
          This policy explains what information Life Line Ambulance Service (&ldquo;we&rdquo;,
          &ldquo;us&rdquo;) collects when you contact us about ambulance or patient transport
          services in Hyderabad, and how that information is used. It applies to this website and
          to enquiries made by phone.
        </p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <p>When you call or otherwise contact us, we may collect:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Your name and phone number</li>
          <li>Pickup location and destination</li>
          <li>Details of the ambulance or transport service you need</li>
          <li>Any message or additional context you choose to share</li>
        </ul>
        <p>
          If this website adds a web enquiry form or analytics in the future, that update will
          describe what device, browser or cookie-based information is collected at that time —
          see our{" "}
          <Link href="/cookie-policy/" className="font-medium text-[var(--color-primary)]">
            Cookie Policy
          </Link>{" "}
          for the current state of cookies on this site.
        </p>
      </LegalSection>

      <LegalSection title="3. How we use this information">
        <p>
          We use the information you share to discuss and arrange the ambulance or transport
          service you&rsquo;ve requested, to communicate with you about that request, and to
          maintain accurate records of the service provided.
        </p>
      </LegalSection>

      <LegalSection title="4. How we share this information">
        <p>
          We share the minimum information necessary with the ambulance crew assigned to your
          transfer, and, where relevant, with the receiving hospital or facility. We do not sell
          your information. We may disclose information where required by law or a valid request
          from a public authority.
        </p>
      </LegalSection>

      <LegalSection title="5. Data retention">
        <p>
          We retain information only for as long as reasonably necessary to provide the requested
          service and to meet our business record-keeping obligations, after which it is deleted
          or anonymised.
        </p>
      </LegalSection>

      <LegalSection title="6. Your rights">
        <p>
          You can ask us what information we hold about you, request a correction, or ask us to
          delete it, subject to any legal or record-keeping requirements. Call {PHONE_DISPLAY} to
          make a request.
        </p>
      </LegalSection>

      <LegalSection title="7. Children's information">
        <p>
          This website is not directed at children. Where a family member shares details about a
          child as a patient in order to arrange transport for them, that information is used
          solely for that purpose as described above.
        </p>
      </LegalSection>

      <LegalSection title="8. Security">
        <p>
          We take reasonable steps to protect the information you share with us. No method of
          storage or transmission is completely secure, and we cannot guarantee absolute security.
        </p>
      </LegalSection>

      <LegalSection title="9. Changes to this policy">
        <p>
          We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the
          top of this page reflects the most recent revision.
        </p>
      </LegalSection>

      <LegalSection title="10. Contact us">
        <p>For any privacy-related question, call {PHONE_DISPLAY}.</p>
      </LegalSection>
    </LegalLayout>
  );
}
