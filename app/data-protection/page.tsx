import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { buildMetadata } from "@/lib/metadata";
import { PHONE_DISPLAY } from "@/lib/site-config";

const PATH = "/data-protection/";
const BREADCRUMB = [
  { name: "Home", path: "/" },
  { name: "Data Protection", path: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: "Data Protection | Life Line Ambulance Service",
  description:
    "How Life Line Ambulance Service approaches data protection when handling information shared to arrange ambulance transport in Hyderabad.",
  path: PATH,
  noindex: true,
});

export default function DataProtectionPage() {
  return (
    <LegalLayout title="Data Protection" breadcrumb={BREADCRUMB}>
      <LegalSection title="1. Our approach">
        <p>
          This page sets out how we aim to handle personal information responsibly. It should be
          read alongside our{" "}
          <Link href="/privacy-policy/" className="font-medium text-[var(--color-primary)]">
            Privacy Policy
          </Link>
          , which describes what we collect and why.
        </p>
      </LegalSection>

      <LegalSection title="2. Legal framework">
        <p>
          We aim to handle personal data in a manner consistent with applicable Indian data
          protection law, including the Digital Personal Data Protection Act, 2023, as it applies
          to our operations. This statement reflects our current intent and practice, and is
          reviewed periodically as our processes and applicable law evolve.
        </p>
      </LegalSection>

      <LegalSection title="3. Data minimisation">
        <p>
          We ask only for the information needed to arrange and carry out the transport service
          you&rsquo;ve requested — not additional medical or personal detail beyond what&rsquo;s relevant to
          the transfer.
        </p>
      </LegalSection>

      <LegalSection title="4. Security measures">
        <p>
          We take reasonable technical and organisational steps to protect information shared with
          us, including restricting access to information on a need-to-know basis and using
          secure systems to store business records.
        </p>
      </LegalSection>

      <LegalSection title="5. Sharing and disclosure">
        <p>
          Information is shared only as necessary with the assigned ambulance crew and, where
          relevant, the receiving hospital or facility — or where required by law.
        </p>
      </LegalSection>

      <LegalSection title="6. Your rights and how to exercise them">
        <p>
          You can ask to access, correct or request deletion of information we hold about you by
          calling {PHONE_DISPLAY}.
        </p>
      </LegalSection>

      <LegalSection title="7. Grievance contact">
        <p>
          For a data protection concern that isn&rsquo;t resolved through a normal enquiry, call{" "}
          {PHONE_DISPLAY} and ask to speak with our team about a data protection matter.
        </p>
      </LegalSection>

      <LegalSection title="8. Updates to this page">
        <p>
          We may revise this page as our practices or applicable law change. The &ldquo;Last
          updated&rdquo; date above reflects the most recent revision.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
