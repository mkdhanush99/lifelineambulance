import { SERVICES } from "@/lib/services";
import { AVAILABILITY_CAVEAT, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-config";
import { PRIMARY_BUTTON } from "@/lib/button-styles";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { CTASection } from "./CTASection";
import { FAQ, type FaqItem } from "./FAQ";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { ServicePhoto } from "./ServicePhoto";
import Link from "next/link";

export type ServicePageContent = {
  breadcrumb: Crumb[];
  heroKicker: string;
  heroTitle: string;
  heroIntro: string;
  heroImage?: { src: string; alt: string };
  whatItIs: string[];
  whenAppropriate: string[];
  whatToTell: string[];
  transferPrep: string[];
  safety: string[];
  areasServed: string;
  relatedSlugs: string[];
  faqs: FaqItem[];
  /** Contextual CTA label, e.g. "Call About ICU Ambulance". Defaults to a plain call CTA. */
  ctaLabel?: string;
  ctaHeading?: string;
  ctaSubheading?: string;
};

export function ServicePageTemplate({ content }: { content: ServicePageContent }) {
  const related = SERVICES.filter((s) => content.relatedSlugs.includes(s.slug));

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-14">
      <Breadcrumbs items={content.breadcrumb} />

      <section>
        <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">
          {content.heroKicker}
        </p>
        <h1 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-[var(--color-ink)] md:text-4xl">
          {content.heroTitle}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-[var(--color-ink-muted)] md:text-lg">
          {content.heroIntro}
        </p>
        <a href={PHONE_HREF} className={`${PRIMARY_BUTTON} mt-6 px-7 py-3.5 text-base`}>
          {content.ctaLabel ?? `Call ${PHONE_DISPLAY}`}
        </a>
        {content.heroImage && <ServicePhoto src={content.heroImage.src} alt={content.heroImage.alt} />}
      </section>

      <div className="mt-14 space-y-14">
        <section>
          <SectionHeading index="01" title="What this service is" />
          <div className="space-y-4 text-[var(--color-ink)]">
            {content.whatItIs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading index="02" title="When this ambulance may be appropriate" />
          <ul className="list-disc space-y-2 pl-5 text-[var(--color-ink)]">
            {content.whenAppropriate.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading
            index="03"
            title="What to tell our coordinator"
            subtitle="A few clear details help us discuss the right vehicle and staffing for the transfer."
          />
          <ul className="list-disc space-y-2 pl-5 text-[var(--color-ink)]">
            {content.whatToTell.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading index="04" title="Preparing for the transfer" />
          <ul className="list-disc space-y-2 pl-5 text-[var(--color-ink)]">
            {content.transferPrep.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading index="05" title="Safety considerations" />
          <ul className="list-disc space-y-2 pl-5 text-[var(--color-ink)]">
            {content.safety.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href="/safety/" className="mt-4 inline-block text-sm font-medium text-[var(--color-primary)]">
            Read our full safety guide →
          </Link>
        </section>

        <section>
          <SectionHeading index="06" title="Availability" />
          <p className="text-[var(--color-ink)]">{AVAILABILITY_CAVEAT}</p>
        </section>

        <section>
          <SectionHeading index="07" title="Areas served" />
          <p className="text-[var(--color-ink)]">{content.areasServed}</p>
        </section>

        {related.length > 0 && (
          <section>
            <SectionHeading index="08" title="Related services" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {related.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
            <Link
              href="/#services"
              className="mt-4 inline-block text-sm font-medium text-[var(--color-primary)]"
            >
              View all ambulance services →
            </Link>
          </section>
        )}

        <section>
          <SectionHeading index="09" title="Frequently asked questions" />
          <FAQ items={content.faqs} />
        </section>

        <CTASection heading={content.ctaHeading} subheading={content.ctaSubheading} ctaLabel={content.ctaLabel} />
      </div>
    </div>
  );
}
