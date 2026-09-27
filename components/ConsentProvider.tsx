"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { readConsent, writeConsent, type ConsentState } from "@/lib/consent";

type ConsentContextValue = {
  /** null = no choice recorded yet. */
  consent: ConsentState | null;
  /** false until the client has checked localStorage — avoids a hydration flash. */
  ready: boolean;
  setConsent: (consent: ConsentState) => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  // Starts as "no choice yet" on both server and first client render so
  // hydration matches, then syncs from localStorage (an external system)
  // once mounted — the one-time setState here is the documented exception
  // to "don't setState in an effect", not a synchronization loop.
  const [state, setState] = useState<{ consent: ConsentState | null; ready: boolean }>({
    consent: null,
    ready: false,
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setState({ consent: readConsent(), ready: true });
  }, []);

  const setConsent = (next: ConsentState) => {
    writeConsent(next);
    setState({ consent: next, ready: true });
  };

  const { consent, ready } = state;

  return (
    <ConsentContext.Provider value={{ consent, ready, setConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}
