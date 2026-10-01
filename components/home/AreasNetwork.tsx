"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

const INK = "#252525";
const ROSE = "#C2185B";
const TINT = "#FCE4EC";
const HUB: [number, number] = [520, 330];

// Hand-placed positions for a stylised (not geographically accurate) map of
// the service area, matched to the illustrated Hyderabad outline below.
const AREAS: Array<[string, number, number, "l" | "r"]> = [
  ["Kukatpally", 250, 140, "r"],
  ["Madhapur", 300, 215, "l"],
  ["Kondapur", 190, 265, "l"],
  ["HITEC City", 280, 300, "l"],
  ["Gachibowli", 190, 360, "l"],
  ["Jubilee Hills", 340, 335, "l"],
  ["Tolichowki", 320, 395, "l"],
  ["Attapur", 330, 490, "r"],
  ["Rajendranagar", 300, 545, "r"],
  ["Mehdipatnam", 400, 440, "l"],
  ["Banjara Hills", 420, 365, "r"],
  ["Punjagutta", 440, 300, "l"],
  ["Ameerpet", 400, 225, "r"],
  ["SR Nagar", 410, 270, "r"],
  ["Somajiguda", 480, 265, "r"],
  ["Begumpet", 470, 160, "r"],
  ["Secunderabad", 640, 120, "r"],
  ["Bairamalguda", 640, 450, "r"],
  ["LB Nagar", 730, 480, "r"],
  ["Dilsukhnagar", 760, 400, "r"],
];

export function AreasNetwork() {
  const [dest, setDest] = useState("Gachibowli");
  const [hot, setHot] = useState("");
  const [mapIn, setMapIn] = useState(false);
  const [reduced, setReduced] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = sectionRef.current;
    const setInitialReduced = () => setReduced(rm);
    setInitialReduced();
    if (rm || !el || !("IntersectionObserver" in window)) {
      const showMap = () => setMapIn(true);
      showMap();
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setMapIn(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const d0 = AREAS.find((a) => a[0] === dest) ?? AREAS[4];
  const mx = (HUB[0] + d0[1]) / 2;
  const my = (HUB[1] + d0[2]) / 2;
  const dx = d0[1] - HUB[0];
  const dy = d0[2] - HUB[1];
  const L = Math.hypot(dx, dy) || 1;
  const routeD = `M${HUB[0]} ${HUB[1]} Q${mx - (dy / L) * 45} ${my + (dx / L) * 45} ${d0[1]} ${d0[2]}`;

  return (
    <section id="areas" className="mt-16 border-t border-b border-black/5 bg-[#fffafc] md:mt-28">
      <div ref={sectionRef} className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-22">
        <SectionHeading
          index="05"
          title="Ambulance service across Hyderabad."
          subtitle="Hover or tap an area to see it on the network. A stylised map, not live tracking — coverage and timing are confirmed by the coordinator."
        />

        <div className="relative mt-6">
          <svg viewBox="0 0 1000 620" className="block h-auto w-full" role="img" aria-label="Stylised Hyderabad service network">
            <path
              pathLength={1}
              d="M120 300C110 200 200 110 300 90C380 40 520 30 620 50C740 40 860 110 900 220C960 300 930 420 860 500C780 570 640 595 520 580C400 600 260 580 190 500C130 450 125 370 120 300Z"
              fill="#fff"
              stroke={ROSE}
              strokeWidth="1.6"
              strokeLinejoin="round"
              strokeDasharray={1}
              style={{
                animation: !reduced && mapIn ? "hero-dash-draw 2.2s ease-out both" : "none",
                strokeDashoffset: mapIn || reduced ? 0 : 1,
              }}
            />
            <path
              d="M130 440C250 400 330 465 430 430S570 405 640 440S790 445 890 400"
              fill="none"
              stroke={ROSE}
              strokeOpacity="0.16"
              strokeWidth="7"
              strokeLinecap="round"
            />
            <path d="M545 205c14-18 50-20 62-2c8 14-6 34-30 34s-44-16-32-32z" fill={TINT} stroke={ROSE} strokeOpacity="0.4" />
            <text x="576" y="258" textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="10" letterSpacing="1.4" fill="var(--color-ink-muted)">
              HUSSAIN SAGAR
            </text>
            <path id="netPulse" d="M250 140L300 215L280 300L420 365L520 330L480 265L470 160L640 120" fill="none" stroke={ROSE} strokeOpacity="0.28" strokeWidth="1.5" strokeLinejoin="round" />
            <path d={routeD} fill="none" stroke={ROSE} strokeWidth="2.6" strokeLinecap="round" strokeDasharray="1 8" />

            {AREAS.map(([name, x, y], i) => {
              const on = name === hot;
              const sel = name === dest;
              return (
                <g
                  key={name}
                  onClick={() => setDest(name)}
                  onMouseEnter={() => setHot(name)}
                  onMouseLeave={() => setHot("")}
                  style={{
                    cursor: "pointer",
                    opacity: reduced || mapIn ? 1 : 0,
                    animation: !reduced && mapIn ? `hero-node-in .5s ease ${0.6 + i * 0.09}s both` : "none",
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={name}
                >
                  <circle cx={x} cy={y} r="24" fill="transparent" />
                  {on && (
                    <circle
                      cx={x}
                      cy={y}
                      r="9"
                      fill="none"
                      stroke={ROSE}
                      strokeWidth="1.5"
                      style={{ transformOrigin: `${x}px ${y}px`, animation: !reduced ? "hero-pulse 1.4s ease-out infinite" : "none" }}
                    />
                  )}
                  <circle cx={x} cy={y} r={on ? 9.5 : sel ? 8.5 : 6} fill={on || sel ? ROSE : "#fff"} stroke={on || sel ? ROSE : INK} strokeWidth="1.8" style={{ transition: "r .2s,fill .2s" }} />
                </g>
              );
            })}
            <circle cx={HUB[0]} cy={HUB[1]} r="14" fill={ROSE} />
            <text x={HUB[0]} y={HUB[1] - 22} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="11" letterSpacing="1.6" fill={ROSE}>
              HYDERABAD
            </text>
            {!reduced && (
              <circle r="6" fill={ROSE} stroke="#fff" strokeWidth="3">
                <animateMotion dur="9s" repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;.8;1" calcMode="linear">
                  <mpath href="#netPulse" />
                </animateMotion>
              </circle>
            )}
          </svg>

          {AREAS.map(([name, x, y, side]) => {
            const on = name === hot;
            const sel = name === dest;
            const l = side === "l";
            return (
              <span
                key={name}
                onClick={() => setDest(name)}
                onMouseEnter={() => setHot(name)}
                onMouseLeave={() => setHot("")}
                className={`absolute cursor-pointer text-[clamp(11px,1.5vw,15px)] whitespace-nowrap transition-colors duration-200 ${
                  on || sel ? "block" : "hidden md:block"
                }`}
                style={{
                  left: `${x / 10}%`,
                  top: `${(y / 620) * 100}%`,
                  transform: l ? "translate(calc(-100% - 15px),-50%)" : "translate(15px,-50%)",
                  fontWeight: on ? 600 : 400,
                  color: on ? ROSE : INK,
                  opacity: reduced || mapIn ? 1 : 0,
                }}
              >
                {name}
              </span>
            );
          })}
        </div>

        <ul className="mt-4 flex flex-wrap gap-2 md:mt-4">
          {AREAS.map(([name]) => {
            const on = name === hot;
            return (
              <li
                key={name}
                tabIndex={0}
                onMouseEnter={() => setHot(name)}
                onMouseLeave={() => setHot("")}
                onFocus={() => setHot(name)}
                onBlur={() => setHot("")}
                className="cursor-pointer rounded-full border px-4 py-2.5 text-[13.5px] transition-[border-color,background-color,transform] duration-200"
                style={{
                  background: on ? TINT : "#fff",
                  borderColor: on ? ROSE : "#f2d3df",
                  fontWeight: on ? 600 : 500,
                  transform: on ? "translateY(-2px)" : "none",
                }}
              >
                {name}
              </li>
            );
          })}
        </ul>

        <Link
          href="/ambulance-service-areas-hyderabad/"
          className="mt-4 inline-block text-sm font-medium text-[var(--color-primary)]"
        >
          View all service areas →
        </Link>
      </div>
    </section>
  );
}
