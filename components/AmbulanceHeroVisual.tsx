"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Homepage hero composition — ported from the "Life Line Homepage v2" design:
 * a radial blush blob, three translucent escalating bars, a dashed route
 * curve traveling to a destination ring, and the ambulance photo rising in
 * on load. Scroll drives a small parallax shift on the ambulance layer.
 */
export function AmbulanceHeroVisual() {
  const [parY, setParY] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onScroll = () => {
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        const sy = Math.min(window.scrollY, 400);
        setParY(-(sy * 0.03));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="relative aspect-[640/540] min-w-0" style={{ marginRight: "clamp(-40px, -3vw, 0px)" }}>
      <svg
        viewBox="0 0 640 540"
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ overflow: "visible" }}
        aria-hidden
      >
        <defs>
          <radialGradient id="heroGlow" cx="50%" cy="55%" r="50%">
            <stop offset="0" stopColor="var(--color-tint)" stopOpacity="0.9" />
            <stop offset="1" stopColor="var(--color-tint)" stopOpacity="0" />
          </radialGradient>
          <filter id="heroShadowBlur" x="-20%" y="-300%" width="140%" height="700%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
        </defs>

        <ellipse cx="330" cy="300" rx="300" ry="230" fill="url(#heroGlow)" />

        <g fill="var(--color-primary)">
          <rect x="250" y="330" width="52" height="120" rx="26" opacity="0.08" transform="rotate(20 276 390)" />
          <rect x="336" y="250" width="52" height="200" rx="26" opacity="0.11" transform="rotate(20 362 350)" />
          <rect x="422" y="150" width="52" height="300" rx="26" opacity="0.15" transform="rotate(20 448 300)" />
        </g>

        <ellipse cx="320" cy="464" rx="270" ry="13" fill="var(--color-ink)" opacity="0.26" filter="url(#heroShadowBlur)" />

        <path
          className="hero-route"
          d="M640 500 H210 C90 500 46 430 48 330 S56 150 80 100"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="1 9"
        />
        <circle cx="80" cy="100" r="24" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" opacity="0.35" />
        <circle cx="80" cy="100" r="11" fill="var(--color-primary)" />
      </svg>

      <div
        className="hero-amb absolute"
        style={{
          left: "1.6%",
          top: "22.2%",
          width: "96.9%",
          height: "60.9%",
          transform: `translate3d(0, ${parY}px, 0)`,
        }}
      >
        <Image
          src="/brand/ambulance-hero-v3.webp"
          alt="Life Line branded ambulance"
          width={1605}
          height={827}
          priority
          className="h-full w-full object-contain object-center select-none"
        />
      </div>
    </div>
  );
}
