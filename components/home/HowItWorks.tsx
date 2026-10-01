"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

const ROUTE_D =
  "M20 90 H170 l14-34 l18 66 l14-46 l10 14 H330 C400 90 400 44 470 44 H690 C760 44 760 100 830 100 H960";

const ROUTE_NODES = [
  { x: 20, y: 90, label: "01 · CALL", t: 0 },
  { x: 270, y: 90, label: "02 · REQUIREMENT", t: 0.25 },
  { x: 470, y: 44, label: "03 · AMBULANCE", t: 0.5 },
  { x: 690, y: 44, label: "04 · TRANSPORT", t: 0.75 },
  { x: 960, y: 100, label: "05 · DESTINATION", t: 1 },
];

const STEPS = [
  { t: "Call", d: "A coordinator answers." },
  { t: "Requirement", d: "Pickup, destination, condition, service." },
  { t: "Ambulance", d: "A suitable vehicle, subject to availability." },
  { t: "Transport", d: "The vehicle is dispatched to the patient." },
  { t: "Destination", d: "Arrival at the hospital or address." },
];
const STEP_AT = [0, 0.2, 0.4, 0.6, 0.8];

export function HowItWorks() {
  const routeRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const raf = useRef(0);
  const [prog, setProg] = useState(0);
  const [dot, setDot] = useState({ x: 20, y: 90 });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const init = () => setProg(1);
    if (reduced) {
      init();
      return;
    }

    const onScroll = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        const el = routeRef.current;
        const vh = window.innerHeight;
        let p = 0;
        if (el) {
          const r = el.getBoundingClientRect();
          p = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (vh * 0.55)));
        }
        p = Math.round(p * 100) / 100;
        setProg(p);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  useEffect(() => {
    const pe = pathRef.current;
    if (!pe) return;
    try {
      const len = pe.getTotalLength();
      const pt = pe.getPointAtLength(len * prog);
      setDot({ x: pt.x, y: pt.y });
    } catch {
      // ignore — path not yet laid out
    }
  }, [prog]);

  return (
    <section id="how" className="mx-auto max-w-6xl px-4 pt-16 md:px-8 md:pt-28">
      <SectionHeading index="04" title="Call. Requirement. Ambulance. Transport. Destination." />
      <div ref={routeRef} className="relative mt-7 hidden sm:block">
        <svg viewBox="0 0 1000 130" className="block h-auto w-full" style={{ overflow: "visible" }} role="img" aria-label="Route from call to arrival">
          <path d={ROUTE_D} fill="none" stroke="var(--color-primary)" strokeOpacity="0.18" strokeWidth="2" strokeLinecap="round" />
          <path
            ref={pathRef}
            pathLength={1}
            d={ROUTE_D}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={1}
            strokeDashoffset={1 - prog}
          />
          {ROUTE_NODES.map((n) => (
            <circle
              key={n.label}
              cx={n.x}
              cy={n.y}
              r="9"
              fill={prog >= n.t - 0.001 ? "var(--color-primary)" : "#fff"}
              stroke="var(--color-primary)"
              strokeWidth="2"
            />
          ))}
          <circle cx={dot.x} cy={dot.y} r="7" fill="var(--color-primary)" stroke="#fff" strokeWidth="3" />
        </svg>
        {ROUTE_NODES.map((n, i) => (
          <span
            key={n.label}
            className="pointer-events-none absolute font-mono text-xs font-medium tracking-[0.12em] whitespace-nowrap text-[var(--color-ink)]"
            style={{
              left: `${n.x / 10}%`,
              top: `${(n.y / 130) * 100}%`,
              transform:
                (i === 4 ? "translateX(-100%) " : i === 0 ? "" : "translateX(-50%) ") +
                (n.y < 60 ? "translateY(-170%)" : "translateY(90%)"),
            }}
          >
            {n.label}
          </span>
        ))}
      </div>

      <ol className="mt-7 grid grid-cols-2 gap-6 md:grid-cols-5">
        {STEPS.map((st, i) => (
          <li
            key={st.t}
            className="border-t-2 pt-3.5 transition-colors duration-300"
            style={{ borderColor: prog >= STEP_AT[i] ? "var(--color-primary)" : "#e9e2e6" }}
          >
            <span className="font-mono text-xs font-medium tracking-[0.12em] text-[var(--color-primary)]">
              {"0" + (i + 1)}
            </span>
            <h3 className="mt-1.5 text-[19px] leading-[1.2] font-semibold">{st.t}</h3>
            <p className="mt-2 text-[14.5px] leading-[1.55] text-pretty text-[var(--color-ink-muted)]">{st.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
