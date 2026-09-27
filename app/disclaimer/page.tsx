import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { buildMetadata } from "@/lib/metadata";
import { EMERGENCY_DISCLAIMER, PHONE_DISPLAY } from "@/lib/site-config";

const PATH = "/disclaimer/";
const BREADCRUMB = [
  { name: "Home", path: "/" },
  { name: "Disclaimer", path: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer | Life Line Ambulance Service",
  description:
    "Important disclaimers about the general information, medical content and third-party links on the Life Line Ambulance Service website.",
  path: PATH,
  noindex: true,
});

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" breadcrumb={BREADCRUMB}>
      <LegalSection title="1. Medical information">
        <p>
          {EMERGENCY_DISCLAIMER} Content on this website, including our{" "}
          <Link href="/safety/" className="font-medium text-[var(--color-primary)]">
            Safety Guide
          </Link>
          , is general information only and is not medical advice.
        </p>
      </LegalSection>

      <LegalSection title="2. Emergencies">
        <p>
          If you are facing an immediate, life-threatening emergency, call {PHONE_DISPLAY} or seek
          the nearest available emergency medical assistance without delay — do not rely on this
          website alone in a time-critical situation.
        </p>
      </LegalSection>

      <LegalSection title="3. Service availability">
        <p>
          References to services on this website describe what we generally coordinate, not a
          guarantee of availability, response time, or vehicle type for any specific request.
          Availability is confirmed only when you speak with our coordinator.
        </p>
      </LegalSection>

      <LegalSection title="4. Business claims">
        <p>
          Statements such as our service history are provided by Life Line Ambulance Service as
          business claims and are presented in good faith.
        </p>
      </LegalSection>

      <LegalSection title="5. Third-party links">
        <p>
          This website links to third-party services, including Google Maps and our Facebook and
          Instagram profiles. We do not control and are not responsible for the content or
          practices of those third parties.
        </p>
      </LegalSection>

      <LegalSection title="6. Changes to this page">
        <p>
          We may update this disclaimer from time to time. The &ldquo;Last updated&rdquo; date
          above reflects the most recent revision.
        </p>
      </LegalSection>

      <LegalSection title="7. Contact us">
        <p>For any question about this disclaimer, call {PHONE_DISPLAY}.</p>
      </LegalSection>
    </LegalLayout>
  );
}
