"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { BUSINESS_NAME } from "@/lib/site-config";

/**
 * The footer wordmark, recreated inline (same geometry as
 * public/brand/horizontal-pink.svg) so the three bars can be animated on
 * interaction — a subtle brand easter egg, not a redesign of the logo
 * itself. One-shot on click/tap only, never looping, skipped entirely
 * under prefers-reduced-motion.
 */
export function FooterMark() {
  const bar1 = useRef<SVGRectElement>(null);
  const bar2 = useRef<SVGRectElement>(null);
  const bar3 = useRef<SVGRectElement>(null);
  const dot = useRef<SVGCircleElement>(null);
  const line = useRef<SVGLineElement>(null);
  const [caption, setCaption] = useState(false);
  const playing = useRef(false);

  const play = () => {
    if (playing.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCaption(true);
      window.setTimeout(() => setCaption(false), 2200);
      return;
    }

    playing.current = true;
    const bars = [bar1.current, bar2.current, bar3.current];
    const tl = gsap.timeline({
      onComplete: () => {
        playing.current = false;
      },
    });

    bars.forEach((bar) => {
      if (!bar) return;
      tl.to(bar, { scale: 1.12, transformOrigin: "center", duration: 0.18, yoyo: true, repeat: 1 }, "+=0.05");
    });
    if (dot.current) {
      tl.to(dot.current, { scale: 1.3, transformOrigin: "center", duration: 0.2, yoyo: true, repeat: 1 }, "-=0.1");
    }
    if (line.current) {
      tl.fromTo(line.current, { opacity: 0 }, { opacity: 1, duration: 0.25 }, "-=0.1").to(
        line.current,
        { opacity: 0, duration: 0.4, delay: 0.3 }
      );
    }
    tl.call(() => setCaption(true), undefined, "-=0.3");
    tl.call(() => setCaption(false), undefined, "+=1.6");
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={play}
        aria-label={`${BUSINESS_NAME} — tap the mark`}
        className="block rounded-lg"
      >
        <svg viewBox="0 0 1180 300" className="h-10 w-auto" role="img" aria-label={BUSINESS_NAME}>
          <svg x="0" y="10" width="280" height="280" viewBox="0 0 512 512">
            <rect
              ref={bar1}
              x="120"
              y="300"
              width="40"
              height="90"
              rx="20"
              fill="var(--color-primary)"
              transform="rotate(20 140 345)"
            />
            <rect
              ref={bar2}
              x="190"
              y="250"
              width="40"
              height="140"
              rx="20"
              fill="var(--color-primary)"
              transform="rotate(20 210 320)"
            />
            <rect
              ref={bar3}
              x="260"
              y="180"
              width="40"
              height="210"
              rx="20"
              fill="var(--color-primary)"
              transform="rotate(20 280 285)"
            />
            <line ref={line} x1="140" y1="345" x2="335" y2="135" stroke="var(--color-primary)" strokeWidth="4" opacity={0} />
            <circle ref={dot} cx="335" cy="135" r="24" fill="var(--color-primary)" />
          </svg>
          <g transform="translate(330,60)">
            <text fontFamily="Helvetica Neue, Arial, sans-serif" fontWeight={700} fontSize="80" letterSpacing="0.5">
              <tspan x="0" y="90" fill="var(--color-ink)">
                LIFE{" "}
              </tspan>
              <tspan fill="var(--color-primary)">LINE</tspan>
            </text>
            <text
              x="2"
              y="140"
              fontFamily="Helvetica Neue, Arial, sans-serif"
              fontWeight={600}
              fontSize="30"
              letterSpacing="5"
              fill="var(--color-ink-muted)"
            >
              AMBULANCE SERVICE
            </text>
          </g>
        </svg>
      </button>

      <span
        role="status"
        className={
          "pointer-events-none absolute top-full left-0 mt-2 text-sm font-medium whitespace-nowrap text-[var(--color-primary)] transition-opacity duration-300 " +
          (caption ? "opacity-100" : "opacity-0")
        }
      >
        Ready when you need us.
      </span>
    </div>
  );
}
