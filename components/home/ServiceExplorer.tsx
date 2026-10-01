"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { PHONE_HREF } from "@/lib/site-config";
import { PRIMARY_BUTTON } from "@/lib/button-styles";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICE_ICONS } from "./service-icons";

const NEEDS: Record<string, string[]> = {
  Emergency: ["emergency-ambulance-service-hyderabad", "private-ambulance-service-hyderabad"],
  "Hospital Transfer": [
    "patient-transfer-ambulance-hyderabad",
    "private-ambulance-service-hyderabad",
    "bls-ambulance-hyderabad",
  ],
  "Critical Care": ["icu-ambulance-hyderabad", "ventilator-ambulance-hyderabad", "oxygen-ambulance-hyderabad"],
  "Long Distance": ["outstation-ambulance-hyderabad"],
  Neonatal: ["nicu-ambulance-hyderabad"],
  "Other Support": [
    "dead-body-transport-hyderabad",
    "mortuary-ambulance-hyderabad",
    "freezer-box-on-rent-hyderabad",
    "event-ambulance-service-hyderabad",
    "corporate-ambulance-service-hyderabad",
  ],
};

export function ServiceExplorer() {
  const [need, setNeed] = useState("");
  const match = NEEDS[need] ?? [];
  const matchedNames = SERVICES.filter((s) => match.includes(s.slug))
    .map((s) => s.name)
    .join(" · ");

  return (
    <>
      <section id="finder" className="mx-auto max-w-6xl px-4 pt-14 md:px-8 md:pt-26">
        <p className="font-mono text-xs font-medium tracking-[0.14em] text-[var(--color-primary)]">
          01 — FIND YOUR SERVICE
        </p>
        <h2 className="mt-2.5 text-2xl leading-[1.06] font-bold tracking-tight text-[var(--color-ink)] md:text-5xl">
          What do you need today?
        </h2>
        <div role="group" aria-label="What do you need" className="mt-5.5 flex flex-wrap gap-2.5">
          {Object.keys(NEEDS).map((k) => {
            const on = k === need;
            return (
              <button
                key={k}
                type="button"
                onClick={() => setNeed(on ? "" : k)}
                aria-pressed={on}
                className="min-h-12 rounded-full border-[1.5px] px-5.5 text-[15px] font-semibold"
                style={{
                  borderColor: on ? "var(--color-primary)" : "#d9d3d6",
                  background: on ? "var(--color-primary)" : "#fff",
                  color: on ? "#fff" : "var(--color-ink)",
                }}
              >
                {k}
              </button>
            );
          })}
        </div>
        {need && (
          <div className="mt-4.5 flex flex-wrap items-center justify-between gap-3 rounded-[20px] border border-[#f2d3df] bg-[#fffafc] px-5.5 py-5">
            <div>
              <p className="font-mono text-xs font-medium tracking-[0.12em] text-[var(--color-primary)]">SUGGESTED</p>
              <p className="mt-1.5 text-lg leading-[1.35] font-semibold">{matchedNames}</p>
            </div>
            <a href={PHONE_HREF} className={`${PRIMARY_BUTTON} px-6 py-3 text-sm`}>
              Call to confirm
            </a>
          </div>
        )}
      </section>

      <section id="services" className="mx-auto max-w-6xl scroll-mt-24 px-4 pt-10 md:px-8 md:pt-18">
        <SectionHeading
          index="02"
          title="One number for every kind of transport."
          subtitle="Not sure which service you need? Call — the coordinator will help you choose."
        />
        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const dimmed = need && !match.includes(s.slug);
            const parts = SERVICE_ICONS[s.slug];
            const card = (
              <div
                className="flex h-full min-h-[262px] flex-col gap-3.5 rounded-[22px] border border-[#e9e2e6] bg-white p-5 text-[var(--color-ink)] transition-[opacity,border-color,background-color] duration-250 group-hover:border-[var(--color-primary)] group-hover:bg-[#fffafc]"
                style={{ opacity: dimmed ? 0.4 : 1 }}
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-[76px] w-[76px] place-items-center rounded-[20px] bg-[var(--color-tint)] transition-[transform,background-color] duration-250 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:bg-[#f8c9da]">
                    <svg viewBox="0 0 48 48" width="40" height="40" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {parts?.map((p, pi) => (
                        <path key={pi} d={p.d} stroke={p.stroke} fill={p.fill} strokeWidth="2" strokeDasharray={p.dash} />
                      ))}
                    </svg>
                  </span>
                  <span className="font-mono text-xs font-medium tracking-[0.1em] text-[var(--color-primary)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="mt-1.5 text-[19px] leading-[1.2] font-semibold tracking-tight">{s.name}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.5] text-pretty text-[var(--color-ink-muted)]">{s.short}</p>
                </div>
                {s.href && (
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]">
                    Learn more
                    <svg
                      width="16"
                      height="10"
                      viewBox="0 0 18 10"
                      fill="none"
                      stroke="var(--color-primary)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="transition-transform duration-200 group-hover:translate-x-[5px]"
                    >
                      <path d="M1 5h15M12 1l4 4-4 4" />
                    </svg>
                  </span>
                )}
              </div>
            );
            return s.href ? (
              <Link key={s.slug} href={s.href} className="group block">
                {card}
              </Link>
            ) : (
              <div key={s.slug}>{card}</div>
            );
          })}
        </div>
      </section>
    </>
  );
}
