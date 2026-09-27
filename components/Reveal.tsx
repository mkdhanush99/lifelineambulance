"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

/** Scroll-reveal for below-the-fold sections only — never wraps the hero/CTA. */
export function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
