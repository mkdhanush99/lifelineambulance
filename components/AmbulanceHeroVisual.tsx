"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { EscalationMark } from "./visuals/EscalationBar";

export function AmbulanceHeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 22 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setParallaxEnabled(fine.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!parallaxEnabled) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 6);
    rotateX.set(-py * 6);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex h-[260px] w-full items-center justify-center md:h-[420px]"
      style={{ perspective: 1200 }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(55% 55% at 58% 50%, var(--color-tint) 0%, rgba(252,228,236,0) 72%)",
        }}
      />

      <svg
        aria-hidden
        viewBox="0 0 330 260"
        className="pointer-events-none absolute -left-2 top-1/2 z-[1] h-24 w-28 -translate-y-1/2 md:-left-4 md:h-32 md:w-36"
        style={{ overflow: "visible" }}
      >
        <EscalationMark />
      </svg>

      <motion.div
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-[2] w-[92%] max-w-[560px] md:w-full md:max-w-[640px] md:translate-x-6"
      >
        <Image
          src="/brand/ambulance-hero-v3.webp"
          alt="Life Line branded ambulance"
          width={1605}
          height={827}
          priority
          className="h-auto w-full origin-bottom select-none"
        />
        <div
          aria-hidden
          className="absolute inset-x-[10%] -bottom-1 h-6 rounded-full blur-lg md:h-8"
          style={{
            background:
              "radial-gradient(50% 100% at 50% 50%, rgba(37,37,37,0.28) 0%, rgba(37,37,37,0) 75%)",
          }}
        />
      </motion.div>
    </div>
  );
}
