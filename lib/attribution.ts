// Client-side ad-attribution capture. No backend: this just persists the
// first-touch params for the session so they can be attached to the
// phone_click / map_click events already fired by components/Analytics.tsx.
// Ready to feed GA4/Google Ads the moment real IDs are configured — until
// then it's inert data sitting in sessionStorage, nothing is transmitted.
const KEY = "llas-attribution";
const TRACKED_PARAMS = ["gclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

export type Attribution = Partial<Record<(typeof TRACKED_PARAMS)[number], string>> & {
  landing_page?: string;
};

export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    // First touch wins for the session — don't overwrite on internal navigation.
    if (sessionStorage.getItem(KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const found: Attribution = {};
    for (const key of TRACKED_PARAMS) {
      const value = params.get(key);
      if (value) found[key] = value;
    }
    if (Object.keys(found).length === 0) return;

    found.landing_page = window.location.pathname;
    sessionStorage.setItem(KEY, JSON.stringify(found));
  } catch {
    // sessionStorage unavailable — attribution is simply not captured.
  }
}

export function readAttribution(): Attribution | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}
