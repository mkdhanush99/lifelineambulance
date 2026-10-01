import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CredibilityBar } from "@/components/home/CredibilityBar";
import { SinceBar } from "@/components/home/SinceBar";
import { ServiceExplorer } from "@/components/home/ServiceExplorer";
import { VisualStory } from "@/components/home/VisualStory";
import { HowItWorks } from "@/components/home/HowItWorks";
import { AreasNetwork } from "@/components/home/AreasNetwork";
import { BeforeYouCall } from "@/components/home/BeforeYouCall";
import { DarkCTA } from "@/components/home/DarkCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { buildMetadata } from "@/lib/metadata";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Ambulance Service in Hyderabad | Life Line Ambulance Service",
  description:
    "Life Line Ambulance Service provides ambulance transport in Hyderabad for emergencies, hospital transfers, ICU, ventilator and outstation journeys. Call 9951244266.",
  path: "/",
});

const HOME_FAQS = [
  {
    question: "Which ambulance do I need?",
    answer:
      "If you are unsure, call and describe the situation. The coordinator will help you pick between emergency, BLS, ICU, ventilator, NICU, oxygen or another service.",
  },
  {
    question: "Can I arrange a hospital-to-hospital transfer?",
    answer: "Yes. Give the coordinator the current hospital, the destination and the patient's condition.",
  },
  {
    question: "Do you travel outside Hyderabad?",
    answer:
      "Outstation patient transport is available, subject to vehicle and service availability. Call to confirm your route.",
  },
  {
    question: "Can I book online?",
    answer: "No. Everything is arranged by phone through a single coordinator, so call 9951244266.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <SinceBar />
      <ServiceExplorer />
      <VisualStory />
      <HowItWorks />
      <AreasNetwork />
      <BeforeYouCall />

      <section className="mx-auto max-w-6xl px-4 pt-16 md:px-8 md:pt-28">
        <Reveal>
          <SectionHeading
            index="07"
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

      <section id="faq" className="mx-auto max-w-3xl px-4 pt-16 md:px-8 md:pt-28">
        <SectionHeading index="08" title="Common questions" />
        <FAQ items={HOME_FAQS} />
      </section>

      <DarkCTA />
    </>
  );
}
