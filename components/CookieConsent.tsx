"use client";

import { useState } from "react";
import Link from "next/link";
import { useConsent } from "./ConsentProvider";
import type { ConsentState } from "@/lib/consent";

export function CookieConsent() {
  const { consent, ready, setConsent } = useConsent();
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState({ analytics: false, advertising: false });

  if (!ready || consent) return null;

  const acceptAll = () => setConsent({ necessary: true, analytics: true, advertising: true });
  const rejectOptional = () => setConsent({ necessary: true, analytics: false, advertising: false });
  const savePreferences = () => setConsent({ necessary: true, ...prefs } as ConsentState);

  return (
    <div className="no-print fixed inset-x-0 bottom-[76px] z-[70] border-t border-black/10 bg-white px-4 py-4 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] md:bottom-0 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[var(--color-ink-muted)]">
            We use necessary cookies to run this site. With your permission, we&rsquo;d also like
            to use analytics and advertising cookies to understand site usage. See our{" "}
            <Link href="/cookie-policy/" className="font-medium text-[var(--color-primary)]">
              Cookie Policy
            </Link>
            .
          </p>
          <div className="flex shrink-0 flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="rounded-full border border-black/15 px-4 py-2 text-sm font-medium text-[var(--color-ink)]"
            >
              Manage preferences
            </button>
            <button
              type="button"
              onClick={rejectOptional}
              className="rounded-full border border-black/15 px-4 py-2 text-sm font-medium text-[var(--color-ink)]"
            >
              Reject optional
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white"
            >
              Accept all
            </button>
          </div>
        </div>

        {expanded && (
          <div className="mt-4 grid grid-cols-1 gap-3 border-t border-black/10 pt-4 sm:grid-cols-3">
            <label className="flex items-center justify-between gap-3 rounded-xl border border-black/10 p-3 text-sm">
              <span>
                <span className="block font-medium text-[var(--color-ink)]">Necessary</span>
                <span className="text-xs text-[var(--color-ink-muted)]">Always on</span>
              </span>
              <input type="checkbox" checked disabled className="h-4 w-4" />
            </label>
            <label className="flex items-center justify-between gap-3 rounded-xl border border-black/10 p-3 text-sm">
              <span className="block font-medium text-[var(--color-ink)]">Analytics</span>
              <input
                type="checkbox"
                checked={prefs.analytics}
                onChange={(e) => setPrefs((p) => ({ ...p, analytics: e.target.checked }))}
                className="h-4 w-4"
              />
            </label>
            <label className="flex items-center justify-between gap-3 rounded-xl border border-black/10 p-3 text-sm">
              <span className="block font-medium text-[var(--color-ink)]">Advertising</span>
              <input
                type="checkbox"
                checked={prefs.advertising}
                onChange={(e) => setPrefs((p) => ({ ...p, advertising: e.target.checked }))}
                className="h-4 w-4"
              />
            </label>
            <button
              type="button"
              onClick={savePreferences}
              className="sm:col-span-3 rounded-full bg-[var(--color-ink)] px-4 py-2.5 text-sm font-semibold text-white"
            >
              Save preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
