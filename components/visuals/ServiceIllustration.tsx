"use client";

import { motion, MotionConfig } from "motion/react";
import { EscalationMark } from "./EscalationBar";

export type ServiceIllustrationType =
  | "emergency"
  | "private"
  | "bls"
  | "icu"
  | "ventilator"
  | "nicu"
  | "oxygen"
  | "patient-transfer"
  | "outstation"
  | "dead-body"
  | "freezer-box"
  | "mortuary"
  | "event"
  | "corporate";

// Old local geometry was ~6px-wide bars; the shared EscalationMark uses the
// logo's real 40px-wide proportions, so scale it down to match existing
// scene compositions without touching every call site's `scale` value.
const SIGNATURE_SCALE_CORRECTION = 0.15;

/** The brand's escalating-bar motif — the recurring "Life Line visual signature". */
function SignatureBars({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale * SIGNATURE_SCALE_CORRECTION})`}>
      <EscalationMark withPoint={false} />
    </g>
  );
}

function AmbulanceGlyph({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="0" y="10" width="70" height="34" rx="8" fill="var(--color-cloud)" stroke="var(--color-ink)" strokeOpacity="0.12" />
      <rect x="0" y="10" width="26" height="34" rx="8" fill="var(--color-tint)" />
      <rect x="34" y="18" width="14" height="14" rx="2" fill="var(--color-primary)" opacity="0.9" />
      <rect x="39" y="21" width="4" height="8" rx="1" fill="white" />
      <rect x="36" y="23.5" width="10" height="3" rx="1" fill="white" />
      <circle cx="16" cy="46" r="7" fill="var(--color-ink)" />
      <circle cx="56" cy="46" r="7" fill="var(--color-ink)" />
    </g>
  );
}

function Cross({ x, y, scale = 1, color = "var(--color-primary)" }: { x: number; y: number; scale?: number; color?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} stroke={color} strokeWidth="4" strokeLinecap="round">
      <line x1="10" y1="0" x2="10" y2="20" />
      <line x1="0" y1="10" x2="20" y2="10" />
    </g>
  );
}

function Waveform({ x, y, w = 90, scale = 1, color = "var(--color-primary)" }: { x: number; y: number; w?: number; scale?: number; color?: string }) {
  const d = `M0 0 L${w * 0.22} 0 L${w * 0.3} -14 L${w * 0.4} 16 L${w * 0.48} -6 L${w * 0.56} 0 L${w} 0`;
  return (
    <motion.path
      d={d}
      transform={`translate(${x} ${y}) scale(${scale})`}
      fill="none"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
    />
  );
}

function Stretcher({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="0" y="0" width="80" height="16" rx="5" fill="var(--color-cloud)" stroke="var(--color-ink)" strokeOpacity="0.12" />
      <line x1="8" y1="0" x2="8" y2="-8" stroke="var(--color-ink)" strokeOpacity="0.25" strokeWidth="2" />
      <line x1="72" y1="0" x2="72" y2="-8" stroke="var(--color-ink)" strokeOpacity="0.25" strokeWidth="2" />
      <circle cx="10" cy="20" r="4" fill="var(--color-ink)" opacity="0.7" />
      <circle cx="70" cy="20" r="4" fill="var(--color-ink)" opacity="0.7" />
    </g>
  );
}

function Cylinder({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="0" y="10" width="34" height="70" rx="14" fill="var(--color-tint)" stroke="var(--color-primary)" strokeWidth="1.5" />
      <rect x="10" y="0" width="14" height="14" rx="3" fill="var(--color-ink)" opacity="0.75" />
      <rect x="6" y="34" width="22" height="8" rx="2" fill="var(--color-primary)" opacity="0.85" />
    </g>
  );
}

function OxygenFlow({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {[0, 1, 2].map((i) => (
        <motion.path
          key={i}
          d={`M0 ${i * 10} Q10 ${i * 10 - 6} 20 ${i * 10} T40 ${i * 10}`}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity={0.75 - i * 0.15}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.75 - i * 0.15 }}
          transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" }}
        />
      ))}
    </g>
  );
}

function Cot({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M4 20 Q30 -6 56 20" fill="none" stroke="var(--color-primary)" strokeWidth="2" opacity="0.6" />
      <rect x="0" y="20" width="60" height="22" rx="8" fill="var(--color-tint)" stroke="var(--color-primary)" strokeWidth="1.2" />
      <line x1="10" y1="50" x2="10" y2="42" stroke="var(--color-ink)" strokeOpacity="0.3" strokeWidth="3" />
      <line x1="50" y1="50" x2="50" y2="42" stroke="var(--color-ink)" strokeOpacity="0.3" strokeWidth="3" />
    </g>
  );
}

function Monitor({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="0" y="0" width="52" height="38" rx="6" fill="var(--color-ink)" />
      <path
        d="M6 20 L16 20 L20 8 L26 30 L30 16 L34 20 L46 20"
        fill="none"
        stroke="var(--color-tint)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="20" y="38" width="12" height="8" fill="var(--color-ink)" opacity="0.6" />
    </g>
  );
}

function Building({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="0" y="0" width="60" height="80" rx="4" fill="var(--color-cloud)" stroke="var(--color-ink)" strokeOpacity="0.12" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={8 + col * 17}
            y={8 + row * 17}
            width="10"
            height="10"
            rx="1.5"
            fill={row === 3 && col === 1 ? "var(--color-primary)" : "var(--color-primary)"}
            opacity={row === 3 && col === 1 ? 0.9 : 0.18}
          />
        )),
      )}
    </g>
  );
}

function Snowflake({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round">
      {[0, 60, 120].map((angle) => (
        <line key={angle} x1="0" y1="-14" x2="0" y2="14" transform={`rotate(${angle})`} />
      ))}
      {[0, 60, 120].map((angle) => (
        <g key={`br-${angle}`} transform={`rotate(${angle})`}>
          <line x1="0" y1="-9" x2="-4" y2="-13" />
          <line x1="0" y1="-9" x2="4" y2="-13" />
        </g>
      ))}
    </g>
  );
}

function RouteLine({ x, y, w = 100, scale = 1 }: { x: number; y: number; w?: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <motion.path
        d={`M0 0 Q${w * 0.3} -18 ${w * 0.55} 0 T${w} 6`}
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4 6"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.65 }}
        transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
      />
      <motion.circle
        cx={w}
        cy={6}
        r="5"
        fill="var(--color-primary)"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1.1, ease: "easeOut" }}
      />
    </g>
  );
}

function PulseRing({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          r={6 + i * 9}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="1.6"
          initial={{ opacity: 0.5 - i * 0.12, scale: 0.7 }}
          animate={{ opacity: 0.28 - i * 0.08, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: "easeOut" }}
        />
      ))}
      <circle r="4" fill="var(--color-primary)" />
    </g>
  );
}

const SCENES: Record<ServiceIllustrationType, () => React.ReactNode> = {
  emergency: () => (
    <>
      <PulseRing x={150} y={50} />
      <AmbulanceGlyph x={30} y={85} />
      <SignatureBars x={12} y={40} scale={0.6} />
    </>
  ),
  private: () => (
    <>
      <AmbulanceGlyph x={35} y={80} />
      <circle cx="150" cy="55" r="10" fill="var(--color-tint)" stroke="var(--color-primary)" strokeWidth="1.5" />
      <path d="M146 55 L149 58 L155 51" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <SignatureBars x={15} y={35} scale={0.6} />
    </>
  ),
  bls: () => (
    <>
      <Stretcher x={55} y={110} />
      <Cross x={85} y={55} scale={1.3} />
      <Waveform x={40} y={155} w={110} />
    </>
  ),
  icu: () => (
    <>
      <AmbulanceGlyph x={20} y={110} scale={0.9} />
      <Monitor x={110} y={40} />
      <Waveform x={112} y={62} w={40} scale={0.7} color="var(--color-tint)" />
    </>
  ),
  ventilator: () => (
    <>
      <rect x="30" y="60" width="46" height="60" rx="8" fill="var(--color-cloud)" stroke="var(--color-ink)" strokeOpacity="0.12" />
      <rect x="40" y="70" width="26" height="16" rx="3" fill="var(--color-primary)" opacity="0.85" />
      <Waveform x={30} y={100} w={46} scale={0.8} />
      <OxygenFlow x={90} y={70} />
    </>
  ),
  nicu: () => (
    <>
      <Cot x={70} y={95} scale={1.2} />
      <Waveform x={80} y={115} w={44} scale={0.55} color="var(--color-primary)" />
      <SignatureBars x={18} y={40} scale={0.55} />
    </>
  ),
  oxygen: () => (
    <>
      <Cylinder x={80} y={60} />
      <OxygenFlow x={125} y={80} scale={1.1} />
    </>
  ),
  "patient-transfer": () => (
    <>
      <Stretcher x={40} y={90} />
      <RouteLine x={45} y={130} w={110} />
    </>
  ),
  outstation: () => (
    <>
      <AmbulanceGlyph x={25} y={70} />
      <RouteLine x={30} y={130} w={130} />
    </>
  ),
  "dead-body": () => (
    <>
      <rect x="35" y="70" width="110" height="30" rx="10" fill="var(--color-cloud)" stroke="var(--color-ink)" strokeOpacity="0.14" />
      <rect x="35" y="70" width="34" height="30" rx="10" fill="var(--color-tint)" />
      <SignatureBars x={95} y={45} scale={0.55} />
    </>
  ),
  "freezer-box": () => (
    <>
      <rect x="55" y="65" width="80" height="60" rx="8" fill="var(--color-cloud)" stroke="var(--color-primary)" strokeWidth="1.2" opacity="0.9" />
      <rect x="55" y="65" width="80" height="16" rx="8" fill="var(--color-tint)" />
      <Snowflake x={95} y={104} scale={1.1} />
    </>
  ),
  mortuary: () => (
    <>
      <AmbulanceGlyph x={30} y={90} />
      <Snowflake x={130} y={55} scale={0.75} />
    </>
  ),
  event: () => (
    <>
      <AmbulanceGlyph x={20} y={95} />
      <g transform="translate(135 45)">
        <path d="M0 0 C8 0 14 6 14 14 C14 24 0 38 0 38 C0 38 -14 24 -14 14 C-14 6 -8 0 0 0 Z" fill="var(--color-tint)" stroke="var(--color-primary)" strokeWidth="1.5" />
        <circle cx="0" cy="14" r="4.5" fill="var(--color-primary)" />
      </g>
    </>
  ),
  corporate: () => (
    <>
      <Building x={20} y={30} scale={0.85} />
      <AmbulanceGlyph x={95} y={112} scale={0.75} />
      <SignatureBars x={150} y={40} scale={0.5} />
    </>
  ),
};

/**
 * Custom brand-geometric hero illustration per service — the shared visual
 * system referenced throughout the service pages. All compositions are
 * assembled from the same small set of primitives above, never duplicated
 * per-service, and share the "escalating bars" signature motif.
 */
export function ServiceIllustration({
  type,
  label,
}: {
  type: ServiceIllustrationType;
  label: string;
}) {
  const scene = SCENES[type]();

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex h-[200px] w-full items-center justify-center md:h-[260px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(50% 60% at 60% 50%, var(--color-tint) 0%, rgba(252,228,236,0) 70%)",
          }}
        />
        <svg role="img" aria-label={label} viewBox="0 0 200 180" className="h-full w-full max-w-[280px]">
          {/* faint technical grid mark, restrained */}
          <line x1="0" y1="150" x2="200" y2="150" stroke="var(--color-ink)" strokeOpacity="0.06" strokeWidth="1" />
          {scene}
        </svg>
      </div>
    </MotionConfig>
  );
}
