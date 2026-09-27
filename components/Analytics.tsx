"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useConsent } from "./ConsentProvider";
import {
  GA_MEASUREMENT_ID,
  GOOGLE_ADS_ID,
  GOOGLE_ADS_PHONE_CONVERSION_LABEL,
  gtagEvent,
  pageCallEventName,
} from "@/lib/analytics";
import { captureAttribution, readAttribution } from "@/lib/attribution";

/**
 * Click-to-call and map-click tracking via delegation, so every tel:/Maps
 * link on the site is tracked automatically without touching each CTA.
 * gtagEvent no-ops until gtag is actually loaded below, so this is safe to
 * run even before consent is granted.
 */
function useClickTracking() {
  useEffect(() => {
    captureAttribution();

    const handler = (e: MouseEvent) => {
      const link = (e.target as Element)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const attribution = readAttribution() ?? undefined;

      if (href.startsWith("tel:")) {
        const params = { phone_number: href.replace("tel:", ""), ...attribution };
        gtagEvent("phone_click", params);
        gtagEvent(pageCallEventName(window.location.pathname), params);
        if (GOOGLE_ADS_PHONE_CONVERSION_LABEL) {
          gtagEvent("conversion", { send_to: GOOGLE_ADS_PHONE_CONVERSION_LABEL });
        }
      } else if (href.includes("google.com/maps")) {
        gtagEvent("map_click", { link_url: href, ...attribution });
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
}

export function Analytics() {
  const { consent, ready } = useConsent();
  useClickTracking();

  if (!ready || !consent) return null;

  const loadAnalytics = Boolean(consent.analytics && GA_MEASUREMENT_ID);
  const loadAds = Boolean(consent.advertising && GOOGLE_ADS_ID);
  if (!loadAnalytics && !loadAds) return null;

  const scriptId = GA_MEASUREMENT_ID ?? GOOGLE_ADS_ID;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${scriptId}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());${
          loadAnalytics ? `gtag('config','${GA_MEASUREMENT_ID}');` : ""
        }${loadAds ? `gtag('config','${GOOGLE_ADS_ID}');` : ""}`}
      </Script>
    </>
  );
}
