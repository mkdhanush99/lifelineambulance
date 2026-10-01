// Small (24-64px) icon set matching the "Life Line Illustration System" —
// same construction as the service-page hero illustrations: ink outline,
// rose accent, blush fill planes. Ported verbatim from the supplied design.
const INK = "#252525";
const ROSE = "#C2185B";
const TINT = "#FCE4EC";

export type IconPart = { d: string; stroke: string; fill: string; dash: string };

const circle = (x: number, y: number, r: number) =>
  `M${x - r} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;

type Kind = "s" | "a" | "d" | "ca" | "t";
const part = (kind: Kind, d: string): IconPart => {
  const byKind: Record<Kind, { stroke: string; fill: string; dash: string }> = {
    s: { stroke: INK, fill: "none", dash: "" },
    a: { stroke: ROSE, fill: "none", dash: "" },
    d: { stroke: ROSE, fill: "none", dash: "1 6" },
    ca: { stroke: ROSE, fill: ROSE, dash: "" },
    t: { stroke: INK, fill: TINT, dash: "" },
  };
  return { d, ...byKind[kind] };
};

const ambulance: IconPart[] = [
  part("s", "M4 34V16h24v18 M28 22h8l8 8v4H28"),
  part("s", circle(13, 36, 4)),
  part("s", circle(35, 36, 4)),
  part("a", "M10 30l6-10 M16 30l6-10"),
];

export const SERVICE_ICONS: Record<string, IconPart[]> = {
  "emergency-ambulance-service-hyderabad": [...ambulance, part("a", "M29 17h6 M32 13v-3")],
  "icu-ambulance-hyderabad": [
    part("t", "M4 27h28v6H4z"),
    part("s", "M8 33v4 M28 33v4"),
    part("s", "M35 8h10v13H35z M40 21v14 M36 35h8"),
    part("a", "M37 15h2l1-3 2 5 1-2"),
  ],
  "ventilator-ambulance-hyderabad": [
    part("s", "M5 10h18v24H5z"),
    part("a", "M9 20q2-5 4 0t4 0"),
    part("s", "M14 34v7 M8 41h12"),
    part("d", "M23 28c8 0 8-8 16-8"),
    part("t", circle(41, 20, 3)),
  ],
  "nicu-ambulance-hyderabad": [
    part("t", "M6 30v-6a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v6"),
    part("s", "M4 30h40v8H4z"),
    part("a", "M15 24h18"),
  ],
  "bls-ambulance-hyderabad": [
    part("t", "M4 27h36v6H4z"),
    part("s", "M10 33l-3 7 M34 33l3 7 M6 40h32"),
    part("a", "M16 27v6 M26 27v6"),
    part("a", "M5 18h6l2-4 3 8 2-4h6"),
  ],
  "patient-transfer-ambulance-hyderabad": [
    part("t", "M3 32h18v5H3z"),
    part("s", "M6 37v4 M18 37v4"),
    part("d", "M23 34h8"),
    part("s", "M32 12h13v26H32z"),
    part("a", "M38.5 18v9 M34 22.5h9"),
  ],
  "outstation-ambulance-hyderabad": [
    part("s", circle(8, 38, 3)),
    part("d", "M11 38c10 0 8-14 18-14s8-12 12-12"),
    part("ca", circle(41, 11, 4.5)),
    part("a", circle(41, 11, 8)),
  ],
  "oxygen-ambulance-hyderabad": [
    part("t", "M13 13h18a2 2 0 0 1 2 2v22a4 4 0 0 1-4 4H15a4 4 0 0 1-4-4V15a2 2 0 0 1 2-2z"),
    part("s", "M18 13V8h8v5"),
    part("a", "M11 26h22"),
    part("d", "M33 17c6 0 6 8 10 8"),
  ],
  "dead-body-transport-hyderabad": [
    part("s", "M4 36h40"),
    part("t", "M6 36c0-9 6-12 14-11s18 0 22 4v7z"),
    part("a", "M8 31h34"),
    part("s", circle(11, 41, 2.5)),
    part("s", circle(37, 41, 2.5)),
  ],
  "freezer-box-on-rent-hyderabad": [
    part("t", "M6 22h28v20H6z"),
    part("t", "M6 22l8-8h28l-8 8"),
    part("s", "M34 22l8-8v20l-8 8"),
    part("a", "M12 33h9"),
    part("ca", circle(28, 33, 1.8)),
  ],
  "mortuary-ambulance-hyderabad": [
    part("t", "M3 34V20q0-4 4-4h22q4 0 6 3l8 9q2 2 2 5v1H3z"),
    part("s", circle(13, 36, 4)),
    part("s", circle(37, 36, 4)),
    part("a", "M3 28h42"),
  ],
  "event-ambulance-service-hyderabad": [
    part("t", "M6 40V26Q22 12 38 26v14z"),
    part("a", "M22 4v9"),
    part("ca", "M22 4l9 3-9 3z"),
    part("d", "M2 45h44"),
  ],
  "corporate-ambulance-service-hyderabad": [
    part("t", "M8 42V8h20v34"),
    part("s", "M28 20h10v22 M4 42h40"),
    part("a", "M14 15h8 M14 23h8 M14 31h8"),
  ],
  // Not part of the 13-service illustration batch — kept close in construction
  // to the emergency icon (same shared ambulance base) since no dedicated
  // artwork was supplied for this service.
  "private-ambulance-service-hyderabad": [...ambulance, part("ca", circle(31, 15, 3.5))],
};
