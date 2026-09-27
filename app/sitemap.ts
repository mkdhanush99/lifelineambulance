import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { BLOG_POSTS } from "@/lib/blog";

// Only routes that actually exist. Extend as more pages ship.
const ROUTES = [
  "/",
  "/emergency-ambulance-service-hyderabad/",
  "/private-ambulance-service-hyderabad/",
  "/bls-ambulance-hyderabad/",
  "/icu-ambulance-hyderabad/",
  "/ventilator-ambulance-hyderabad/",
  "/nicu-ambulance-hyderabad/",
  "/oxygen-ambulance-hyderabad/",
  "/patient-transfer-ambulance-hyderabad/",
  "/outstation-ambulance-hyderabad/",
  "/dead-body-transport-hyderabad/",
  "/freezer-box-on-rent-hyderabad/",
  "/mortuary-ambulance-hyderabad/",
  "/event-ambulance-service-hyderabad/",
  "/corporate-ambulance-service-hyderabad/",
  "/ambulance-service-areas-hyderabad/",
  "/about/",
  "/safety/",
  "/ambulance-finder/",
  "/contact/",
  "/blog/",
  ...BLOG_POSTS.map((post) => `/blog/${post.slug}/`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: new URL(path, SITE_URL).toString(),
    lastModified: new Date(),
  }));
}
