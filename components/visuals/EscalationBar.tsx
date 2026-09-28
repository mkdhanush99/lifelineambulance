"use client";

import { motion, MotionConfig } from "motion/react";

/**
 * The Life Line Escalation Bar — a reusable brand graphic derived directly
 * from the logo's own escalating-bar geometry (public/brand/symbol-pink.svg:
 * three bars, 20deg lean, heights 90/140/210, rounded caps, terminating in a
 * point). It is a supporting graphic, never a redraw of the logo itself.
 * Communicates ESCALATION -> RESPONSE -> ARRIVAL.
 */
export type EscalationBarVariant = "horizontal" | "vertical" | "compact" | "hero";

const BAR_HEIGHTS = [90, 140, 210]; // exact logo proportions
const BAR_WIDTH = 40;
const BAR_GAP_X = 70;
const ROTATION = 20;
const BAR_DELAYS = [0, 0.12, 0.24];

/**
 * Embeddable version — a plain `<g>` of the same bars (+ optional response
 * line and point), for compositing inside another component's own `<svg>`
 * (service illustrations, the hero background). Wrap with a `<g transform>`
 * at the call site for position/scale.
 */
export function EscalationMark({ withPoint = true }: { withPoint?: boolean }) {
  return (
    <>
      {BAR_HEIGHTS.map((h, i) => {
        const x = i * BAR_GAP_X;
        const y = 210 - h;
        const cx = x + BAR_WIDTH / 2;
        const cy = y + h / 2;
        return (
          <motion.rect
            key={i}
            x={x}
            y={y}
            width={BAR_WIDTH}
            height={h}
            rx={BAR_WIDTH / 2}
            fill="var(--color-primary)"
            transform={`rotate(${ROTATION} ${cx} ${cy})`}
            initial={{ opacity: 0, scaleY: 0.4 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.32, delay: BAR_DELAYS[i], ease: "easeOut" }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        );
      })}
      {withPoint && (
        <>
          <motion.line
            x1={2 * BAR_GAP_X + BAR_WIDTH + 10}
            y1="135"
            x2={2 * BAR_GAP_X + BAR_WIDTH + 90}
            y2="135"
            stroke="var(--color-primary)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="2 20"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{ duration: 0.35, delay: 0.4, ease: "easeOut" }}
          />
          <motion.circle
            cx={2 * BAR_GAP_X + BAR_WIDTH + 100}
            cy="135"
            r="24"
            fill="var(--color-primary)"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, delay: 0.72, ease: "easeOut" }}
          />
        </>
      )}
    </>
  );
}

const V_BAR_THICKNESS = 30;
const V_BAR_GAP = 4;
const V_STEP = V_BAR_THICKNESS + V_BAR_GAP;

function VerticalBars() {
  // Same bar geometry, stacked as a column (escalating upward) ending in a
  // point at the top — for vertical section dividers.
  const bars = BAR_HEIGHTS.map((h, i) => ({
    h,
    barW: h * 0.19, // width scales with the bar's own "height" role here
    y: 210 - (i + 1) * V_STEP,
    i,
  }));
  const pointY = 210 - (BAR_HEIGHTS.length + 1) * V_STEP + V_BAR_GAP;
  return (
    <>
      {bars.map(({ h, barW, y, i }) => (
        <motion.rect
          key={i}
          x={100 - h / 2}
          y={y}
          width={h}
          height={barW}
          rx={barW / 2}
          fill="var(--color-primary)"
          initial={{ opacity: 0, scaleX: 0.4 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.32, delay: BAR_DELAYS[i], ease: "easeOut" }}
          style={{ transformOrigin: `100px ${y + barW / 2}px` }}
        />
      ))}
      <motion.circle
        cx="100"
        cy={pointY}
        r="16"
        fill="var(--color-primary)"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, delay: 0.5, ease: "easeOut" }}
      />
    </>
  );
}

const VIEWBOX: Record<EscalationBarVariant, string> = {
  horizontal: "0 0 330 260",
  hero: "0 0 330 260",
  compact: "0 0 210 260",
  vertical: "0 40 200 170",
};

export function EscalationBar({
  variant = "horizontal",
  animated = true,
  className,
}: {
  variant?: EscalationBarVariant;
  /** false renders the final settled state with no entrance animation. */
  animated?: boolean;
  className?: string;
}) {
  const content =
    variant === "vertical" ? (
      <VerticalBars />
    ) : variant === "compact" ? (
      <EscalationMark withPoint={false} />
    ) : (
      <EscalationMark withPoint />
    );

  return (
    <MotionConfig reducedMotion={animated ? "user" : "always"}>
      <svg
        aria-hidden
        viewBox={VIEWBOX[variant]}
        className={className}
        style={variant === "vertical" ? undefined : { overflow: "visible" }}
      >
        {content}
      </svg>
    </MotionConfig>
  );
}
