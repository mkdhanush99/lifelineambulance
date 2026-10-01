import type { Metadata } from "next";
import { BUSINESS_NAME, SITE_URL } from "./site-config";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Path starting with "/", e.g. "/icu-ambulance-hyderabad/" */
  path: string;
  noindex?: boolean;
};

export function buildMetadata({ title, description, path, noindex }: PageMetadataInput): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS_NAME,
      locale: "en_IN",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: BUSINESS_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
  };
}
