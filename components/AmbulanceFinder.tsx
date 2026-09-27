"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FINDER_DISCLAIMER,
  FINDER_JOURNEYS,
  FINDER_LOCATIONS,
  FINDER_NEEDS,
  type FinderNeed,
} from "@/lib/finder-data";
import { SECONDARY_BUTTON } from "@/lib/button-styles";
import { BeforeYouCall } from "./BeforeYouCall";

type Step = 1 | 2 | 3 | 4;

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={
        "rounded-2xl border px-4 py-3.5 text-left text-sm font-medium transition-colors duration-150 " +
        (selected
          ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
          : "border-black/10 bg-white text-[var(--color-ink)] hover:border-[var(--color-primary)] hover:bg-[var(--color-tint)]")
      }
    >
      {label}
    </button>
  );
}

export function AmbulanceFinder() {
  const [step, setStep] = useState<Step>(1);
  const [need, setNeed] = useState<FinderNeed | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [journey, setJourney] = useState<string | null>(null);

  const reset = () => {
    setStep(1);
    setNeed(null);
    setLocation(null);
    setJourney(null);
  };

  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">
        Not sure which ambulance you need?
      </p>

      {step === 1 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[var(--color-ink)]">What do you need?</h3>
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {FINDER_NEEDS.map((n) => (
              <OptionButton
                key={n.key}
                label={n.label}
                selected={need?.key === n.key}
                onClick={() => {
                  setNeed(n);
                  setStep(2);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[var(--color-ink)]">Where is the patient?</h3>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {FINDER_LOCATIONS.map((l) => (
              <OptionButton
                key={l}
                label={l}
                selected={location === l}
                onClick={() => {
                  setLocation(l);
                  setStep(3);
                }}
              />
            ))}
          </div>
          <button type="button" onClick={() => setStep(1)} className="mt-4 text-sm font-medium text-[var(--color-primary)]">
            ← Back
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[var(--color-ink)]">What&rsquo;s the journey?</h3>
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {FINDER_JOURNEYS.map((j) => (
              <OptionButton
                key={j}
                label={j}
                selected={journey === j}
                onClick={() => {
                  setJourney(j);
                  setStep(4);
                }}
              />
            ))}
          </div>
          <button type="button" onClick={() => setStep(2)} className="mt-4 text-sm font-medium text-[var(--color-primary)]">
            ← Back
          </button>
        </div>
      )}

      {step === 4 && need && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-[var(--color-ink)]">Here&rsquo;s what to have ready when you call</h3>
          <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
            {need.label} · {location} · {journey}
          </p>

          <div className="mt-5">
            <BeforeYouCall compact />
          </div>

          {need.serviceSlug && (
            <Link href={`/${need.serviceSlug}/`} className={`${SECONDARY_BUTTON} mt-4 px-5 py-2.5 text-sm`}>
              Read more about this service →
            </Link>
          )}

          <p className="mt-4 text-xs text-[var(--color-ink-muted)]">{FINDER_DISCLAIMER}</p>

          <button type="button" onClick={reset} className="mt-4 block text-sm font-medium text-[var(--color-primary)]">
            Start over
          </button>
        </div>
      )}
    </div>
  );
}
