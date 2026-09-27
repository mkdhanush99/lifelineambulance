export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
};

// Publish date for the initial batch of articles — this is the actual date
// this content was written, not a fabricated editorial calendar.
export const BLOG_LAUNCH_DATE = "27 September 2026";
export const BLOG_LAUNCH_DATE_ISO = "2026-09-27";

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "how-to-book-an-ambulance-in-hyderabad",
    title: "How to Book an Ambulance in Hyderabad: A Practical Guide",
    description:
      "A practical, step-by-step look at what actually happens when you call to book an ambulance in Hyderabad — what to say, what to expect, and how to prepare.",
    excerpt:
      "What actually happens between calling and the ambulance arriving — and how to make that call more useful.",
  },
  {
    slug: "icu-ambulance-vs-bls-ambulance-difference",
    title: "ICU Ambulance vs BLS Ambulance: What Is the Difference?",
    description:
      "ICU ambulance or BLS ambulance? A clear comparison of what each is meant for, so you can describe your situation accurately when you call.",
    excerpt: "Two commonly confused ambulance types, and how to tell which one a situation actually needs.",
  },
  {
    slug: "when-does-a-patient-need-a-ventilator-ambulance",
    title: "When Does a Patient Need a Ventilator Ambulance?",
    description:
      "Ventilator ambulances are for a specific situation. Here's how to recognise it, and what to have ready when you call to arrange one.",
    excerpt: "Recognising when ventilator support is actually needed in transit, not just oxygen or monitoring.",
  },
  {
    slug: "hospital-to-hospital-ambulance-transfer-checklist",
    title: "What to Prepare Before a Hospital-to-Hospital Ambulance Transfer",
    description:
      "A practical checklist for families arranging a hospital-to-hospital ambulance transfer in Hyderabad — documents, timing and what to confirm first.",
    excerpt: "The documents, calls and confirmations that make a hospital-to-hospital transfer go smoothly.",
  },
  {
    slug: "outstation-ambulance-from-hyderabad-what-to-plan",
    title: "Outstation Ambulance from Hyderabad: What Families Should Plan",
    description:
      "Planning a long-distance ambulance journey from Hyderabad? Here's what actually needs deciding before the vehicle leaves the city.",
    excerpt: "Long-distance transfers need more than a phone call — here's what to think through first.",
  },
  {
    slug: "freezer-box-services-for-families-in-hyderabad",
    title: "How Freezer Box Services Work for Families in Hyderabad",
    description:
      "A respectful, practical explanation of how freezer box rental works for families in Hyderabad, and how it differs from mortuary ambulance and body transport.",
    excerpt: "Three related services families often confuse — explained clearly and without sensational language.",
  },
  {
    slug: "ambulance-services-for-corporate-offices-and-events",
    title: "Ambulance Services for Corporate Offices and Events in Hyderabad",
    description:
      "What corporate ambulance standby actually involves for offices, factories and events in Hyderabad, and how organisers typically plan for it.",
    excerpt: "What standby ambulance coverage actually involves, and the questions organisers should be asking.",
  },
  {
    slug: "emergency-ambulance-vs-patient-transport",
    title: "Emergency Ambulance vs Patient Transport: Understanding the Difference",
    description:
      "Emergency ambulance and patient transport sound similar but serve different situations. Here's how to tell which one applies to yours.",
    excerpt: "Two phrases people use interchangeably that actually describe very different kinds of journeys.",
  },
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
