import type { NextConfig } from "next";

// Pragmatic CSP: allows gtag.js (only ever loaded post-consent, see
// components/Analytics.tsx) and the inline scripts Next.js itself needs for
// hydration/RSC. 'unsafe-inline' on style-src covers the handful of inline
// `style={{...}}` attributes in the app (e.g. the custom cursor position) —
// tightening that further would mean a nonce-based setup that isn't worth
// the complexity for a site with no user-generated content.
// React's dev-mode tooling (HMR, error overlay stack reconstruction) uses
// eval() — harmless in dev, and never used in a production React build, so
// 'unsafe-eval' is scoped to non-production only rather than weakening the
// real, deployed CSP.
const isDev = process.env.NODE_ENV !== "production";

const CSP = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ""}https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  `connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com${isDev ? " ws: wss:" : ""}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  // Every internal link, canonical and sitemap entry uses a trailing slash;
  // enforce it at the framework level (redirect the other variant) instead
  // of relying solely on the canonical tag to consolidate duplicate URLs.
  trailingSlash: true,
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [{ source: "/:path*", headers: SECURITY_HEADERS }];
  },
};

export default nextConfig;
