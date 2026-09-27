"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Desktop-only premium cursor. Disabled on touch devices, coarse pointers,
 * and under prefers-reduced-motion. Never blocks clicks — it's a fixed,
 * pointer-events:none overlay that just follows the real cursor.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("custom-cursor-active", enabled);
    if (!enabled) return;

    const move = (e: PointerEvent) => {
      const dot = dotRef.current;
      if (!dot) return;
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      const target = e.target as Element | null;
      setActive(!!target?.closest("a, button, [role='button']"));
    };

    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="no-print pointer-events-none fixed top-0 left-0 z-[200] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-primary)] transition-[width,height,background-color] duration-150 ease-out"
      style={{
        width: active ? 32 : 14,
        height: active ? 32 : 14,
        backgroundColor: active ? "rgba(194,24,91,0.15)" : "transparent",
      }}
    />
  );
}
