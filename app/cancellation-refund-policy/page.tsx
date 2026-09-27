import type { Metadata } from "next";
import { LegalLayout, LegalSection } from "@/components/LegalLayout";
import { buildMetadata } from "@/lib/metadata";
import { PHONE_DISPLAY } from "@/lib/site-config";

const PATH = "/cancellation-refund-policy/";
const BREADCRUMB = [
  { name: "Home", path: "/" },
  { name: "Cancellation & Refund Policy", path: PATH },
];

export const metadata: Metadata = buildMetadata({
  title: "Cancellation & Refund Policy | Life Line Ambulance Service",
  description:
    "How enquiries, bookings, cancellations and refunds are handled for ambulance transport arranged through Life Line Ambulance Service.",
  path: PATH,
  noindex: true,
});

export default function CancellationRefundPage() {
  return (
    <LegalLayout title="Cancellation & Refund Policy" breadcrumb={BREADCRUMB}>
      <LegalSection title="1. Enquiry stage">
        <p>
          An initial phone enquiry does not create a booking and carries no charge. It&rsquo;s a
          conversation to understand what service may be needed.
        </p>
      </LegalSection>

      <LegalSection title="2. Booking request">
        <p>
          A booking request — for example, asking us to arrange a vehicle for a specific date and
          time — is not confirmed until our coordinator confirms vehicle and crew availability with
          you directly.
        </p>
      </LegalSection>

      <LegalSection title="3. Confirmed booking">
        <p>
          Once our coordinator confirms a vehicle, date and time with you, the booking is treated
          as confirmed. Charges depend on the specific service requested and are communicated by
          our coordinator at the time of confirmation, before the booking is finalised.
        </p>
      </LegalSection>

      <LegalSection title="4. Cancelling before dispatch">
        <p>
          If you need to cancel a confirmed booking before the vehicle has been dispatched, please
          call {PHONE_DISPLAY} as early as possible. Cancelling at this stage does not typically
          incur a charge; in some cases a nominal cancellation charge may apply depending on the
          service booked, which our coordinator will confirm when you call to cancel.
        </p>
      </LegalSection>

      <LegalSection title="5. Cancelling after dispatch">
        <p>
          Once a vehicle has been dispatched toward the pickup location, cancelling the booking may
          involve a charge, since the vehicle and crew have already been committed. Our coordinator
          will confirm the applicable charge for your specific booking when you call to cancel.
        </p>
      </LegalSection>

      <LegalSection title="6. Service already commenced">
        <p>
          Once patient transport has begun, the service is considered rendered and is not eligible
          for a refund, except where required by applicable law.
        </p>
      </LegalSection>

      <LegalSection title="7. No-show">
        <p>
          If the patient or an authorised contact cannot be reached, or is not present at the
          confirmed pickup location within a reasonable waiting period, this may be treated as a
          no-show and a charge may apply. Our coordinator will confirm the applicable waiting
          period and any charge at the time the booking is made.
        </p>
      </LegalSection>

      <LegalSection title="8. Third-party payment scenarios">
        <p>
          Where a booking is paid for by a third party — for example, a corporate account, insurer
          or hospital — cancellation and refund terms for that arrangement are agreed directly with
          the third party at the time of booking.
        </p>
      </LegalSection>

      <LegalSection title="9. Refund processing">
        <p>
          Where a refund is due, it is processed back to the original mode of payment. Our
          coordinator will confirm the expected timeframe when the refund is agreed.
        </p>
      </LegalSection>

      <LegalSection title="10. When we cannot provide the confirmed vehicle">
        <p>
          If Life Line Ambulance Service is unable to provide the confirmed vehicle due to
          circumstances beyond our control, we will inform you as soon as possible and discuss
          alternatives. No cancellation charge will apply on our part in this situation.
        </p>
      </LegalSection>

      <LegalSection title="11. Disputes and contact">
        <p>
          If you have a concern about a charge or cancellation, call {PHONE_DISPLAY} and our team
          will discuss it with you directly.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
