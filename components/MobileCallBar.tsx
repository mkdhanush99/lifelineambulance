"use client";

import { motion } from "motion/react";
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

/**
 * Two-action bottom bar, mobile only — plain edge-to-edge bar with icon
 * stacked over label per item (not filled pill buttons), matching the
 * reference competitor layout the client pointed to.
 */
export function MobileCallBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="no-print fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-stretch">
        <a
          href={PHONE_HREF}
          className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[13px] font-medium text-[var(--color-ink)]"
        >
          <span style={{ color: "var(--color-primary)" }}>
            <PhoneIcon />
          </span>
          Call
        </a>
        <div className="my-2 w-px bg-black/10" />
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[13px] font-medium text-[var(--color-ink)]"
        >
          <span style={{ color: "#25D366" }}>
            <WhatsAppIcon />
          </span>
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
