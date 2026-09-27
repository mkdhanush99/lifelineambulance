export type ConsentState = {
  necessary: true;
  analytics: boolean;
  advertising: boolean;
};

const KEY = "llas-cookie-consent";

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ConsentState) : null;
  } catch {
    return null;
  }
}

export function writeConsent(consent: ConsentState) {
  try {
    localStorage.setItem(KEY, JSON.stringify(consent));
  } catch {
    // localStorage unavailable (private mode, blocked storage) — consent
    // banner will simply reappear next visit, which is an acceptable fallback.
  }
}
