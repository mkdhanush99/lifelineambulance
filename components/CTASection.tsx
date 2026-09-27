import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-config";
import { PRIMARY_BUTTON } from "@/lib/button-styles";

export function CTASection({
  heading = "Need an ambulance in Hyderabad?",
  subheading = "Call our team directly to discuss pickup, destination and the right vehicle.",
  ctaLabel = `Call ${PHONE_DISPLAY}`,
}: {
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="rounded-3xl bg-[var(--color-ink)] px-6 py-10 text-center text-white md:px-10 md:py-14">
      <h2 className="text-2xl font-bold md:text-3xl">{heading}</h2>
      <p className="mx-auto mt-3 max-w-xl text-white/70">{subheading}</p>
      <a href={PHONE_HREF} className={`${PRIMARY_BUTTON} mt-6 px-7 py-3.5 text-base`}>
        {ctaLabel}
      </a>
    </section>
  );
}
