"use client";

import { useEffect, useState } from "react";
import Velaris from "./velaris";

const LIFE_LINE_COLORS = ["#FCE4EC", "#F8D7E3", "#C2185B", "#FFFFFF"];

/**
 * Brand-tuned wrapper around Velaris: soft rose atmosphere, not the
 * component's original green/black demo palette. Kept deliberately faint —
 * opacity does the "extremely subtle" work here rather than touching the
 * shader's own blend math, so it reads as depth behind content, never as
 * "there's a WebGL effect here."
 */
export function LifeLineAtmosphere({
  className,
  height = "100%",
}: {
  className?: string;
  height?: string;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <Velaris
      bg="#FFFFFF"
      colors={LIFE_LINE_COLORS}
      speed={isMobile ? 0.45 : 0.7}
      grain={isMobile ? 0.06 : 0.1}
      height={height}
      className={`opacity-[0.08] md:opacity-[0.14] ${className ?? ""}`}
    />
  );
}
