import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceGrid } from "@/components/ServiceGrid";
import { TrustSignal } from "@/components/TrustSignal";
import { ProcessSteps } from "@/components/ProcessSteps";
import { AreaChip } from "@/components/AreaChip";
import { BlogCard } from "@/components/BlogCard";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { ResponseBars } from "@/components/visuals/ResponseBars";
import { SECONDARY_BUTTON } from "@/lib/button-styles";
import { buildMetadata } from "@/lib/metadata";
import { AREAS } from "@/lib/areas";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Ambulance Service in Hyderabad | Life Line Ambulance Service",
  description:
    "Life Line Ambulance Service provides ambulance transport in Hyderabad for emergencies, hospital transfers, ICU, ventilator and outstation journeys. Call 9951244266.",
  path: "/",
});

const HOME_FAQS = [
  {
    question: "How can I book an ambulance in Hyderabad?",
    answer:
      "Call 9951244266 and share the pickup location, destination and patient condition. Our coordinator will discuss the appropriate vehicle and confirm availability.",
  },
  {
    question: "What types of ambulance services are available?",
    answer:
      "Life Line offers emergency response, private booked transport, ICU and ventilator-equipped transport, patient transfers, outstation journeys, and specialised services such as freezer box rental and event standby ambulances. Availability can vary — call to confirm the vehicle you need.",
  },
  {
    question: "Can I arrange a hospital-to-hospital transfer?",
    answer:
      "Yes. Share both the pickup hospital and destination with our coordinator so the right vehicle and any required equipment can be discussed in advance.",
  },
  {
    question: "Are services available across Hyderabad?",
    answer:
      "We serve Hyderabad and surrounding areas, subject to vehicle availability and traffic conditions. Call 9951244266 to confirm coverage for your specific location.",
  },
  {
    question: "How do I contact Life Line Ambulance Service?",
    answer: "Call 9951244266. Our Hyderabad location is listed in the footer of this site.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <div className="flex flex-col items-start gap-5 rounded-3xl border border-black/5 bg-[var(--color-tint)]/40 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div>
              <p className="text-lg font-semibold text-[var(--color-ink)]">
                Not sure which ambulance you need?
              </p>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                Answer three quick questions to see what to have ready when you call.
              </p>
            </div>
            <Link href="/ambulance-finder/" className={`${SECONDARY_BUTTON} shrink-0 px-6 py-3 text-sm`}>
              Find out now →
            </Link>
          </div>
        </Reveal>
      </section>

      <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:px-8">
        <Reveal>
          <SectionHeading
            index="01"
            title="Ambulance services"
            subtitle="Fourteen ambulance and patient-transport categories serving Hyderabad. Select a service below, or call to discuss what you need."
          />
          <ServiceGrid />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <Reveal>
          <SectionHeading index="02" title="Why Life Line" />
          <TrustSignal />
          <Link href="/about/" className="mt-4 inline-block text-sm font-medium text-[var(--color-primary)]">
            More about Life Line Ambulance Service →
          </Link>
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-6xl px-4 py-16 md:px-8">
        <Reveal>
          <SectionHeading
            index="03"
            title="On the road in Hyderabad"
            subtitle="Our own vehicles, not stock photography."
          />

          <div className="relative">
            {/* Atmospheric background — same glow language as the hero, so the
                real photography still reads as part of the brand's visual
                world rather than a dropped-in stock gallery. */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10 rounded-[3rem] blur-2xl"
              style={{
                background:
                  "radial-gradient(120% 100% at 15% 20%, var(--color-tint) 0%, rgba(252,228,236,0.25) 45%, rgba(252,228,236,0) 75%)",
              }}
            />
            <svg
              aria-hidden
              viewBox="0 0 60 60"
              className="pointer-events-none absolute -top-6 -left-4 h-14 w-14 md:-top-8 md:-left-8 md:h-20 md:w-20"
            >
              <ResponseBars x={0} y={40} scale={0.6} opacity={0.7} />
            </svg>

            {/* Mobile: the original simple equal-treatment stack (one column,
                same aspect ratio, same rounding — deliberately kept, not
                recomposed). Desktop only: the asymmetric featured layout. */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-sm md:col-span-3 md:row-span-2 md:aspect-auto md:rounded-[2rem] md:shadow-[0_25px_50px_-20px_rgba(37,37,37,0.25)]">
                <Image
                  src="/photos/mobile-icu-ambulance-hyderabad.jpg"
                  alt="Mobile ICU ambulance used for critical patient transport in Hyderabad"
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-sm md:col-span-2 md:rounded-[1.5rem] md:shadow-[0_20px_40px_-18px_rgba(37,37,37,0.22)]">
                <Image
                  src="/photos/ambulance-outstation-highway-hyderabad.jpg"
                  alt="Ambulance on a highway during an outstation patient transfer from Hyderabad"
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 22vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-sm md:col-span-2 md:rounded-[1.5rem] md:shadow-[0_20px_40px_-18px_rgba(37,37,37,0.22)]">
                <Image
                  src="/photos/ambulance-patient-transport-hyderabad.jpg"
                  alt="Ambulance used for planned patient transport in Hyderabad"
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 22vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <Reveal>
          <SectionHeading
            index="04"
            title="Hyderabad coverage"
            subtitle="We coordinate ambulance transport across Hyderabad, including these frequently asked-about areas."
          />
          <div className="flex flex-wrap gap-2.5">
            {AREAS.slice(0, 14).map((area) => (
              <AreaChip key={area} name={area} />
            ))}
          </div>
          <Link
            href="/ambulance-service-areas-hyderabad/"
            className="mt-4 inline-block text-sm font-medium text-[var(--color-primary)]"
          >
            View all service areas →
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <Reveal>
          <SectionHeading
            index="05"
            title="How a transfer works"
            subtitle="A simple five-step process from your call to the patient reaching their destination."
          />
          <ProcessSteps />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-8">
        <Reveal>
          <SectionHeading
            index="06"
            title="From the blog"
            subtitle="Practical guides on arranging and preparing for ambulance transport in Hyderabad."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
          <Link href="/blog/" className="mt-4 inline-block text-sm font-medium text-[var(--color-primary)]">
            View all articles →
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-8">
        <Reveal>
          <SectionHeading index="07" title="Frequently asked questions" />
          <FAQ items={HOME_FAQS} />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-8">
        <CTASection />
      </section>
    </>
  );
}
