import { ADDRESSES, BUSINESS_NAME, PHONE_DISPLAY, SITE_URL, SOCIAL_LINKS } from "./site-config";

const FOUNDER_NAME = "Aluvala Lokesh";

export function organizationJsonLd() {
  const address = ADDRESSES[0];
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: PHONE_DISPLAY,
    image: new URL("/og-image.jpg", SITE_URL).toString(),
    logo: new URL("/brand/symbol-pink.svg", SITE_URL).toString(),
    areaServed: "Hyderabad, Telangana, India",
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
    founder: { "@type": "Person", name: FOUNDER_NAME },
    address: {
      "@type": "PostalAddress",
      streetAddress: address.lines.join(", "),
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: "IN",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS_NAME,
    url: SITE_URL,
  };
}

export function serviceJsonLd(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    description: opts.description,
    url: new URL(opts.path, SITE_URL).toString(),
    areaServed: "Hyderabad, Telangana, India",
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
      telephone: PHONE_DISPLAY,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

export function articleJsonLd(opts: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: new URL(opts.path, SITE_URL).toString(),
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    author: { "@type": "Organization", name: BUSINESS_NAME },
    publisher: { "@type": "Organization", name: BUSINESS_NAME },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
