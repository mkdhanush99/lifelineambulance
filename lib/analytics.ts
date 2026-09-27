// Unset until the client provides real IDs — every consumer of these treats
// an unset value as "don't load", not as a placeholder to fabricate.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
export const GOOGLE_ADS_PHONE_CONVERSION_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL;

export function gtagEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", name, params);
}

/**
 * Per-page call-click event name (call_click_home, call_click_icu, …) so
 * each service page can be set up as its own conversion action in Google
 * Ads, alongside the generic `phone_click` event GA4 uses for the funnel.
 */
export function pageCallEventName(pathname: string): string {
  if (pathname === "/") return "call_click_home";
  const slug = pathname
    .replace(/^\/|\/$/g, "")
    .replace(/-ambulance-service-hyderabad$|-ambulance-hyderabad$|-service-hyderabad$|-hyderabad$/, "")
    .replace(/-/g, "_");
  return `call_click_${slug || "page"}`;
}
