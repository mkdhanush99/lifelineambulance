"use client";

import { useState } from "react";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/site-config";

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.47 1.28 4.94L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0 0 12.04 2Zm5.8 14.09c-.24.68-1.4 1.32-1.93 1.38-.5.06-1.03.29-3.47-.72-2.93-1.21-4.82-4.18-4.97-4.38-.14-.19-1.19-1.58-1.19-3.02 0-1.43.75-2.14 1.02-2.43.26-.29.58-.36.77-.36.19 0 .39 0 .55.01.19.01.42-.07.66.5.24.58.83 2.01.9 2.16.07.14.12.31.02.5-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.14-.3.3-.13.59.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.29.14.46.12.63-.07.17-.19.72-.84.92-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.92.29.15.48.22.55.34.07.13.07.72-.17 1.4Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const LINK_ACTIONS = [
  { label: "Call", href: PHONE_HREF, color: "var(--color-primary)", Icon: PhoneIcon, external: false },
  { label: "WhatsApp", href: WHATSAPP_HREF, color: "#25D366", Icon: WhatsAppIcon, external: true },
];

const itemClass =
  "flex min-h-16 flex-1 flex-col items-center justify-center gap-1 rounded-full px-2 py-2 text-[12px] font-medium text-[var(--color-ink)] transition-colors duration-200 hover:bg-[var(--color-tint)]/50 focus-visible:bg-[var(--color-tint)]/50 disabled:opacity-50 md:min-h-0 md:flex-none md:flex-row md:gap-2 md:px-4 md:py-2.5 md:text-sm md:font-semibold";

/**
 * The site's single global contact interaction layer — one floating pill
 * with Call / WhatsApp / Location, replacing the previously separate mobile
 * bar and expandable button. Persistent (not expand-on-tap): all three
 * actions are always visible, since together they're the site's core task.
 *
 * "Location" sends the VISITOR's current position to the business's
 * WhatsApp (as a maps link in a pre-filled message) — not the business's
 * own address, which is already in the footer/contact page.
 */
export function FloatingDock() {
  const [locating, setLocating] = useState(false);

  function shareLocation() {
    const openWhatsApp = (text: string) => {
      window.open(`${WHATSAPP_HREF}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    };

    if (!("geolocation" in navigator)) {
      openWhatsApp("Hi, I need an ambulance. I couldn't share my location automatically — please help me describe where I am.");
      return;
    }

    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        const { latitude, longitude } = pos.coords;
        openWhatsApp(
          `Hi, I need an ambulance. My current location: https://maps.google.com/?q=${latitude},${longitude}`,
        );
      },
      () => {
        setLocating(false);
        openWhatsApp("Hi, I need an ambulance. I couldn't share my location automatically — please help me describe where I am.");
      },
      { enableHighAccuracy: true, timeout: 8000 },
    );
  }

  return (
    <div className="no-print pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:inset-x-auto md:right-5 md:bottom-5 md:justify-end md:px-0 md:pb-0">
      <div className="pointer-events-auto flex w-full max-w-sm items-stretch divide-x divide-black/8 rounded-full border border-black/10 bg-white/90 shadow-[0_12px_32px_-10px_rgba(37,37,37,0.3)] backdrop-blur-md md:w-auto md:max-w-none md:divide-x-0 md:gap-1 md:p-1.5">
        {LINK_ACTIONS.map(({ label, href, color, Icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            className={itemClass}
          >
            <span style={{ color }}>
              <Icon />
            </span>
            {label}
          </a>
        ))}
        <button
          type="button"
          onClick={shareLocation}
          disabled={locating}
          aria-label="Share your current location with us on WhatsApp"
          className={itemClass}
        >
          <span style={{ color: "var(--color-ink)" }}>
            <LocationIcon />
          </span>
          {locating ? "Locating…" : "Location"}
        </button>
      </div>
    </div>
  );
}
