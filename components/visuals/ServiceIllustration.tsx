/**
 * The "Life Line Illustration System" — hand-constructed hero illustrations
 * per service (480x340, 3/4 view, 2.4px ink outline, one rose accent, blush
 * fill planes, pale rose glow, soft ground shadow). Ported verbatim from the
 * supplied design; not a generic icon set.
 */
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

function Defs() {
  return (
    <defs>
      <radialGradient id="lgGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0" stopColor="#FCE4EC" stopOpacity="0.9" />
        <stop offset="1" stopColor="#FCE4EC" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="lgShd" cx="50%" cy="50%" r="50%">
        <stop offset="0" stopColor="#252525" stopOpacity="0.3" />
        <stop offset="1" stopColor="#252525" stopOpacity="0" />
      </radialGradient>
      <symbol id="amb" viewBox="0 0 240 112" overflow="visible">
        <g fill="none" stroke="#252525" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 18L28 6H144L134 18Z" fill="#FCE4EC" />
          <rect x="10" y="18" width="126" height="70" rx="9" fill="#fff" />
          <path d="M136 34H188Q196 34 202 40L226 64Q232 70 232 78V88H136Z" fill="#fff" />
          <path d="M148 44H184L208 68H148Z" fill="#FCE4EC" />
          <path d="M32 76L40 62M52 76L66 50M74 76L94 38" stroke="#C2185B" strokeWidth="7" />
          <rect x="146" y="23" width="34" height="9" rx="4" fill="#C2185B" stroke="none" />
          <circle cx="52" cy="90" r="15" fill="#252525" />
          <circle cx="52" cy="90" r="5.5" fill="#fff" stroke="none" />
          <circle cx="188" cy="90" r="15" fill="#252525" />
          <circle cx="188" cy="90" r="5.5" fill="#fff" stroke="none" />
        </g>
      </symbol>
      <symbol id="van" viewBox="0 0 250 100" overflow="visible">
        <g fill="none" stroke="#252525" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 78V34Q8 24 20 24H150Q164 24 174 34L204 58Q214 64 232 66Q244 68 244 78V80H8Z" fill="#fff" />
          <rect x="26" y="34" width="112" height="16" rx="8" fill="#FCE4EC" />
          <path d="M156 34H170L194 56H156Z" fill="#FCE4EC" />
          <path d="M9 64H243" stroke="#C2185B" strokeWidth="3" />
          <circle cx="52" cy="80" r="14" fill="#252525" />
          <circle cx="52" cy="80" r="5" fill="#fff" stroke="none" />
          <circle cx="196" cy="80" r="14" fill="#252525" />
          <circle cx="196" cy="80" r="5" fill="#fff" stroke="none" />
        </g>
      </symbol>
    </defs>
  );
}

const SCENES: Record<ServiceIllustrationType, () => React.ReactNode> = {
  emergency: () => (
    <>
      <circle data-part="glow" cx="240" cy="172" r="150" fill="url(#lgGlow)" stroke="none" />
      <ellipse data-part="shadow" cx="250" cy="292" rx="190" ry="12" fill="url(#lgShd)" stroke="none" />
      <g data-part="route" stroke="#C2185B" strokeWidth="3" opacity="0.55">
        <path d="M22 176H62" />
        <path d="M8 204H56" opacity="0.7" />
        <path d="M28 232H62" opacity="0.5" />
      </g>
      <g data-part="object">
        <use href="#amb" x="70" y="130" width="360" height="168" />
      </g>
      <g data-part="signal" stroke="#C2185B" strokeWidth="3">
        <path d="M314 156V138M292 160L279 148M338 160L351 148" />
      </g>
      <path data-part="mark" d="M244 175v12M238 181h12" stroke="#C2185B" strokeWidth="3.6" />
    </>
  ),
  private: () => (
    <>
      <circle data-part="glow" cx="240" cy="172" r="150" fill="url(#lgGlow)" stroke="none" />
      <ellipse data-part="shadow" cx="250" cy="292" rx="190" ry="12" fill="url(#lgShd)" stroke="none" />
      <g data-part="object">
        <use href="#amb" x="70" y="130" width="360" height="168" />
      </g>
      <g data-part="signal">
        <circle cx="330" cy="150" r="18" fill="#fff" stroke="#C2185B" strokeWidth="2.4" />
        <path d="M323 150l5 5 9-11" stroke="#C2185B" strokeWidth="3" />
      </g>
      <path data-part="route" d="M22 200H66" stroke="#C2185B" strokeWidth="2.4" strokeDasharray="1 8" opacity="0.6" />
    </>
  ),
  bls: () => (
    <>
      <circle data-part="glow" cx="240" cy="172" r="150" fill="url(#lgGlow)" stroke="none" />
      <ellipse data-part="shadow" cx="250" cy="294" rx="200" ry="12" fill="url(#lgShd)" stroke="none" />
      <g data-part="object">
        <path d="M130 226L182 274M182 226L130 274M292 226L344 274M344 226L292 274M118 276H356" />
        <rect x="90" y="200" width="272" height="26" rx="13" fill="#fff" />
        <path d="M200 200v26M246 200v26" stroke="#C2185B" strokeWidth="4" />
        <rect x="284" y="186" width="70" height="14" rx="7" fill="#FCE4EC" />
        <circle cx="120" cy="286" r="7" fill="#252525" />
        <circle cx="120" cy="286" r="2.66" fill="#fff" stroke="none" />
        <circle cx="354" cy="286" r="7" fill="#252525" />
        <circle cx="354" cy="286" r="2.66" fill="#fff" stroke="none" />
      </g>
      <g data-part="secondary">
        <path d="M412 292V152M392 292H432" />
        <rect x="376" y="98" width="72" height="54" rx="9" fill="#252525" />
      </g>
      <path data-part="signal" d="M384 126h10l6-12 7 22 6-11h16" stroke="#C2185B" strokeWidth="2.6" />
      <path data-part="route" d="M30 314H300" stroke="#C2185B" strokeWidth="2.4" strokeDasharray="1 8" opacity="0.7" />
    </>
  ),
  icu: () => (
    <>
      <circle data-part="glow" cx="240" cy="172" r="150" fill="url(#lgGlow)" stroke="none" />
      <ellipse data-part="shadow" cx="250" cy="294" rx="205" ry="12" fill="url(#lgShd)" stroke="none" />
      <path data-part="route" d="M30 314H450" stroke="#C2185B" strokeWidth="2.4" strokeDasharray="1 8" opacity="0.7" />
      <g data-part="secondary">
        <rect x="62" y="196" width="34" height="92" rx="15" fill="#fff" />
        <path d="M72 196v-10h14v10" />
        <rect x="74" y="176" width="10" height="10" rx="2" fill="#C2185B" stroke="none" />
        <path d="M62 226H96" stroke="#C2185B" strokeWidth="3" />
        <path d="M352 292V96M336 96H368M334 292H370" />
        <rect x="332" y="104" width="26" height="40" rx="9" fill="#FCE4EC" stroke="#C2185B" />
        <path d="M345 144C345 176 330 196 312 210" strokeWidth="1.8" />
        <path d="M428 168V292M410 292H446" />
        <rect x="386" y="112" width="84" height="56" rx="9" fill="#252525" />
      </g>
      <path data-part="signal" d="M394 142h12l7-16 9 30 8-20 6 6h20" stroke="#C2185B" strokeWidth="2.6" />
      <g data-part="object">
        <path d="M124 250V282M316 250V282M116 282H324" />
        <rect x="104" y="232" width="232" height="16" rx="8" fill="#fff" />
        <rect x="108" y="210" width="224" height="24" rx="12" fill="#FCE4EC" />
        <path d="M228 210v24" stroke="#C2185B" strokeWidth="3.4" />
        <circle cx="124" cy="290" r="7" fill="#252525" />
        <circle cx="124" cy="290" r="2.66" fill="#fff" stroke="none" />
        <circle cx="316" cy="290" r="7" fill="#252525" />
        <circle cx="316" cy="290" r="2.66" fill="#fff" stroke="none" />
      </g>
      <path data-part="route" d="M79 176C79 146 120 148 158 208" stroke="#C2185B" strokeWidth="2.6" strokeDasharray="1 6" />
    </>
  ),
  ventilator: () => (
    <>
      <circle data-part="glow" cx="240" cy="172" r="150" fill="url(#lgGlow)" stroke="none" />
      <ellipse data-part="shadow" cx="260" cy="294" rx="205" ry="12" fill="url(#lgShd)" stroke="none" />
      <g data-part="object">
        <rect x="70" y="92" width="124" height="152" rx="14" fill="#fff" />
        <rect x="84" y="106" width="96" height="58" rx="8" fill="#252525" />
        <circle cx="104" cy="196" r="10" fill="#fff" />
        <circle cx="140" cy="196" r="10" fill="#fff" />
        <circle cx="170" cy="196" r="5" fill="#C2185B" stroke="none" />
        <path d="M132 244V282M90 290H174M100 282H164" />
      </g>
      <path data-part="signal" d="M92 136q9-24 18 0t18 0t18 0t18 0" stroke="#C2185B" strokeWidth="3" />
      <path data-part="route" d="M194 208C246 208 246 166 302 194" stroke="#C2185B" strokeWidth="6" strokeDasharray="0.1 6" />
      <g data-part="secondary">
        <path d="M292 292V252M436 292V252M280 292H448" />
        <rect x="268" y="232" width="192" height="20" rx="10" fill="#fff" />
        <path d="M296 232C296 196 340 186 380 202L444 232Z" fill="#FCE4EC" />
        <path d="M340 200C344 214 346 224 346 232M394 212C398 222 400 228 400 232" strokeWidth="1.8" />
        <circle cx="308" cy="200" r="11" fill="#FCE4EC" stroke="#C2185B" />
        <circle cx="292" cy="296" r="7" fill="#252525" />
        <circle cx="292" cy="296" r="2.66" fill="#fff" stroke="none" />
        <circle cx="436" cy="296" r="7" fill="#252525" />
        <circle cx="436" cy="296" r="2.66" fill="#fff" stroke="none" />
      </g>
      <path data-part="signal" d="M226 178l8 6-8 6M244 170l8 6-8 6" stroke="#C2185B" strokeWidth="2.4" opacity="0.7" />
    </>
  ),
  nicu: () => (
    <>
      <circle data-part="glow" cx="240" cy="172" r="150" fill="url(#lgGlow)" stroke="none" />
      <ellipse data-part="shadow" cx="240" cy="294" rx="180" ry="12" fill="url(#lgShd)" stroke="none" />
      <path data-part="signal" d="M96 124Q240 60 384 124" stroke="#C2185B" strokeWidth="2.4" strokeDasharray="1 7" />
      <g data-part="object">
        <rect x="100" y="214" width="280" height="62" rx="10" fill="#fff" />
        <path d="M130 276v8M350 276v8" />
        <circle cx="130" cy="292" r="8" fill="#252525" />
        <circle cx="130" cy="292" r="3.04" fill="#fff" stroke="none" />
        <circle cx="350" cy="292" r="8" fill="#252525" />
        <circle cx="350" cy="292" r="3.04" fill="#fff" stroke="none" />
        <rect x="304" y="228" width="60" height="32" rx="6" fill="#252525" />
        <circle cx="122" cy="245" r="5" fill="#C2185B" stroke="none" />
      </g>
      <path data-part="signal" d="M310 246h10l5-9 6 16 5-10h20" stroke="#C2185B" strokeWidth="2.4" />
      <g data-part="shell">
        <path d="M116 214V176Q116 128 170 128H310Q364 128 364 176V214Z" fill="#FCE4EC" fillOpacity="0.55" />
        <ellipse cx="240" cy="196" rx="100" ry="26" fill="#C2185B" fillOpacity="0.1" stroke="none" />
        <rect x="128" y="196" width="224" height="18" rx="9" fill="#fff" />
        <rect x="160" y="172" width="112" height="28" rx="14" fill="#fff" stroke="#C2185B" />
        <path d="M204 172v28" stroke="#C2185B" />
        <circle cx="332" cy="168" r="8" fill="#fff" />
        <path d="M136 172q6-26 34-30" stroke="#fff" strokeWidth="3.4" opacity="0.95" />
      </g>
    </>
  ),
  oxygen: () => (
    <>
      <circle data-part="glow" cx="240" cy="172" r="150" fill="url(#lgGlow)" stroke="none" />
      <ellipse data-part="shadow" cx="270" cy="294" rx="205" ry="12" fill="url(#lgShd)" stroke="none" />
      <g data-part="object">
        <rect x="110" y="112" width="76" height="176" rx="30" fill="#fff" />
        <path d="M110 188H186M110 214H186" stroke="#C2185B" strokeWidth="3" />
        <rect x="134" y="86" width="28" height="30" rx="4" fill="#fff" />
        <rect x="124" y="60" width="48" height="28" rx="7" fill="#C2185B" stroke="#252525" />
        <circle cx="200" cy="96" r="18" fill="#fff" />
        <path d="M200 96l8-8" stroke="#C2185B" strokeWidth="3" />
        <path d="M124 150q4-16 14-20" stroke="#e9dfe4" strokeWidth="3.4" />
      </g>
      <path data-part="route" d="M172 70C244 30 284 92 300 200" stroke="#C2185B" strokeWidth="5" strokeDasharray="0.1 6" />
      <g data-part="secondary">
        <path d="M282 292V254M436 292V254M270 292H448" />
        <rect x="258" y="232" width="192" height="22" rx="11" fill="#fff" />
        <rect x="270" y="222" width="70" height="12" rx="6" fill="#FCE4EC" />
        <circle cx="304" cy="212" r="12" fill="#FCE4EC" stroke="#C2185B" />
        <circle cx="282" cy="296" r="7" fill="#252525" />
        <circle cx="282" cy="296" r="2.66" fill="#fff" stroke="none" />
        <circle cx="436" cy="296" r="7" fill="#252525" />
        <circle cx="436" cy="296" r="2.66" fill="#fff" stroke="none" />
      </g>
      <path data-part="signal" d="M322 202q8-6 16 0M326 216q8-6 16 0" stroke="#C2185B" strokeWidth="2.2" opacity="0.7" />
    </>
  ),
  "patient-transfer": () => (
    <>
      <circle data-part="glow" cx="240" cy="172" r="150" fill="url(#lgGlow)" stroke="none" />
      <ellipse data-part="shadow" cx="250" cy="296" rx="215" ry="12" fill="url(#lgShd)" stroke="none" />
      <rect data-part="secondary" x="28" y="176" width="86" height="114" rx="8" strokeDasharray="3 6" opacity="0.4" />
      <g data-part="object">
        <rect x="324" y="112" width="116" height="178" rx="9" fill="#fff" />
        <path d="M382 128v22M371 139h22" stroke="#C2185B" strokeWidth="5" />
        <g fill="#FCE4EC" strokeWidth="1.8">
          <rect x="340" y="166" width="20" height="18" rx="3" />
          <rect x="372" y="166" width="20" height="18" rx="3" />
          <rect x="404" y="166" width="20" height="18" rx="3" />
          <rect x="340" y="198" width="20" height="18" rx="3" />
          <rect x="372" y="198" width="20" height="18" rx="3" />
          <rect x="404" y="198" width="20" height="18" rx="3" />
        </g>
        <rect x="366" y="242" width="32" height="48" rx="5" fill="#FCE4EC" stroke="#C2185B" />
      </g>
      <path data-part="route" d="M170 262C226 262 236 296 290 296H348" stroke="#C2185B" strokeWidth="3" strokeDasharray="1 8" />
      <g data-part="secondary">
        <path d="M62 244L80 274M80 244L62 274M122 244L140 274M140 244L122 274M56 276H156" />
        <rect x="48" y="228" width="116" height="16" rx="8" fill="#fff" />
        <circle cx="62" cy="284" r="6" fill="#252525" />
        <circle cx="62" cy="284" r="2.28" fill="#fff" stroke="none" />
        <circle cx="142" cy="284" r="6" fill="#252525" />
        <circle cx="142" cy="284" r="2.28" fill="#fff" stroke="none" />
      </g>
      <circle data-part="signal" cx="240" cy="286" r="8" fill="#C2185B" stroke="#fff" strokeWidth="3" />
      <circle cx="28" cy="298" r="7" fill="#fff" stroke="#C2185B" />
    </>
  ),
  outstation: () => (
    <>
      <circle data-part="glow" cx="240" cy="172" r="150" fill="url(#lgGlow)" stroke="none" />
      <g data-part="secondary" fill="#C2185B" stroke="none">
        <rect x="228" y="150" width="34" height="90" rx="17" opacity="0.07" transform="rotate(20 245 195)" />
        <rect x="290" y="112" width="34" height="140" rx="17" opacity="0.1" transform="rotate(20 307 182)" />
        <rect x="352" y="70" width="34" height="190" rx="17" opacity="0.13" transform="rotate(20 369 165)" />
      </g>
      <path
        data-part="route"
        d="M30 300C150 300 170 244 250 232S356 190 410 118"
        stroke="#252525"
        strokeOpacity="0.08"
        strokeWidth="30"
      />
      <path data-part="route" d="M30 300C150 300 170 244 250 232S356 190 410 118" stroke="#C2185B" strokeWidth="3" strokeDasharray="1 9" />
      <g data-part="object">
        <use href="#amb" x="40" y="222" width="150" height="70" />
      </g>
      <g data-part="signal">
        <path
          d="M410 138C392 114 384 100 384 86A26 26 0 0 1 436 86C436 100 428 114 410 138Z"
          fill="#C2185B"
          stroke="none"
        />
        <circle cx="410" cy="86" r="9" fill="#fff" stroke="none" />
        <ellipse cx="410" cy="142" rx="32" ry="8" stroke="#C2185B" strokeWidth="1.6" opacity="0.5" />
      </g>
      <circle cx="24" cy="302" r="6" fill="#fff" stroke="#C2185B" />
      <text x="20" y="326" fontFamily="Geist Mono, monospace" fontSize="10.5" letterSpacing="1.5" fill="#252525" stroke="none">
        HYDERABAD
      </text>
    </>
  ),
  "dead-body": () => (
    <>
      <circle data-part="glow" cx="240" cy="172" r="150" fill="url(#lgGlow)" stroke="none" />
      <ellipse data-part="shadow" cx="240" cy="296" rx="190" ry="12" fill="url(#lgShd)" stroke="none" />
      <g data-part="object">
        <path d="M110 232L150 280M150 232L110 280M330 232L370 280M370 232L330 280M98 282H382" />
        <rect x="70" y="222" width="340" height="14" rx="7" fill="#fff" />
        <path d="M84 222C84 190 122 178 162 186C224 198 300 190 380 196C402 198 408 212 402 222Z" fill="#fff" />
        <path
          d="M152 188C160 202 166 212 168 222M252 194C254 206 256 214 256 222M332 197C334 208 336 215 336 222"
          strokeWidth="1.8"
          opacity="0.55"
        />
        <path d="M96 212H396" stroke="#C2185B" strokeWidth="2.6" />
        <circle cx="98" cy="290" r="7" fill="#252525" />
        <circle cx="98" cy="290" r="2.66" fill="#fff" stroke="none" />
        <circle cx="382" cy="290" r="7" fill="#252525" />
        <circle cx="382" cy="290" r="2.66" fill="#fff" stroke="none" />
      </g>
      <path data-part="route" d="M60 316H366" stroke="#C2185B" strokeWidth="2.4" strokeDasharray="1 8" opacity="0.8" />
      <g data-part="signal">
        <circle cx="404" cy="316" r="15" stroke="#C2185B" strokeWidth="1.6" opacity="0.4" />
        <circle cx="404" cy="316" r="7" fill="#fff" stroke="#C2185B" />
      </g>
    </>
  ),
  "freezer-box": () => (
    <>
      <circle data-part="glow" cx="240" cy="172" r="150" fill="url(#lgGlow)" stroke="none" />
      <ellipse data-part="shadow" cx="230" cy="296" rx="195" ry="12" fill="url(#lgShd)" stroke="none" />
      <g data-part="object">
        <path d="M90 150L150 108H360L300 150Z" fill="#FCE4EC" />
        <path d="M300 150L360 108V232L300 272Z" fill="#f3e9ee" />
        <rect x="90" y="150" width="210" height="122" fill="#fff" />
        <path d="M90 178H300M300 178L360 136" strokeWidth="2" />
        <rect x="170" y="188" width="50" height="10" rx="5" fill="#252525" />
        <rect x="108" y="212" width="66" height="34" rx="6" fill="#252525" />
        <circle cx="188" cy="229" r="4.5" fill="#C2185B" stroke="none" />
        <path d="M96 272v10M290 272v10" strokeWidth="5" />
      </g>
      <path data-part="signal" d="M116 232h12l5-9 6 15 5-9h20" stroke="#C2185B" strokeWidth="2.4" />
      <g data-part="secondary" stroke="#C2185B" strokeWidth="2.4">
        <path d="M250 208v34M235 216l30 18M265 216l-30 18" />
      </g>
    </>
  ),
  mortuary: () => (
    <>
      <circle data-part="glow" cx="240" cy="172" r="150" fill="url(#lgGlow)" stroke="none" />
      <ellipse data-part="shadow" cx="240" cy="296" rx="200" ry="12" fill="url(#lgShd)" stroke="none" />
      <path data-part="route" d="M30 318H420" stroke="#C2185B" strokeWidth="2.4" strokeDasharray="1 8" opacity="0.8" />
      <g data-part="object">
        <use href="#van" x="50" y="150" width="380" height="152" />
      </g>
      <g data-part="signal">
        <circle cx="452" cy="318" r="14" stroke="#C2185B" strokeWidth="1.6" opacity="0.4" />
        <circle cx="452" cy="318" r="6" fill="#fff" stroke="#C2185B" />
      </g>
    </>
  ),
  event: () => (
    <>
      <circle data-part="glow" cx="240" cy="172" r="150" fill="url(#lgGlow)" stroke="none" />
      <ellipse data-part="shadow" cx="240" cy="296" rx="215" ry="12" fill="url(#lgShd)" stroke="none" />
      <g data-part="secondary">
        <path d="M244 140Q348 58 452 140Z" fill="#FCE4EC" />
        <rect x="254" y="140" width="188" height="150" rx="6" fill="#fff" />
        <path d="M300 140V290M348 140V290M396 140V290" strokeWidth="1.8" opacity="0.5" />
        <path d="M322 290V236Q348 216 374 236V290" fill="#FCE4EC" />
        <path d="M348 92V50" />
        <path d="M348 50l32 11-32 11Z" fill="#C2185B" stroke="none" />
      </g>
      <g data-part="object">
        <use href="#amb" x="26" y="204" width="190" height="89" />
      </g>
      <ellipse data-part="signal" cx="121" cy="296" rx="112" ry="15" stroke="#C2185B" strokeWidth="2" strokeDasharray="3 7" />
      <g data-part="signal">
        <circle cx="121" cy="172" r="17" fill="#C2185B" stroke="none" />
        <path d="M115 165v14M127 165v14" stroke="#fff" strokeWidth="3.6" />
      </g>
    </>
  ),
  corporate: () => (
    <>
      <circle data-part="glow" cx="240" cy="172" r="150" fill="url(#lgGlow)" stroke="none" />
      <ellipse data-part="shadow" cx="250" cy="296" rx="215" ry="12" fill="url(#lgShd)" stroke="none" />
      <g data-part="secondary">
        <path d="M200 74L242 54V262L200 290Z" fill="#f3e9ee" />
        <rect x="66" y="74" width="134" height="216" rx="6" fill="#fff" />
        <g fill="#FCE4EC" strokeWidth="1.8">
          <rect x="86" y="96" width="24" height="18" rx="3" />
          <rect x="122" y="96" width="24" height="18" rx="3" />
          <rect x="158" y="96" width="24" height="18" rx="3" />
          <rect x="86" y="130" width="24" height="18" rx="3" />
          <rect x="122" y="130" width="24" height="18" rx="3" />
          <rect x="158" y="130" width="24" height="18" rx="3" />
          <rect x="86" y="164" width="24" height="18" rx="3" />
          <rect x="122" y="164" width="24" height="18" rx="3" />
          <rect x="158" y="164" width="24" height="18" rx="3" />
          <rect x="86" y="198" width="24" height="18" rx="3" />
          <rect x="122" y="198" width="24" height="18" rx="3" />
          <rect x="158" y="198" width="24" height="18" rx="3" />
        </g>
        <rect x="118" y="242" width="34" height="48" rx="5" fill="#fff" stroke="#C2185B" />
      </g>
      <g data-part="object">
        <use href="#amb" x="270" y="206" width="190" height="89" />
      </g>
      <path data-part="route" d="M152 300C190 322 240 322 282 300" stroke="#C2185B" strokeWidth="3" strokeDasharray="1 8" />
      <circle data-part="signal" cx="135" cy="300" r="6" fill="#C2185B" stroke="#fff" strokeWidth="2.4" />
    </>
  ),
};

/**
 * Custom brand-geometric hero illustration per service. All 13 supplied
 * scenes are literal artwork from the design; only "private" (not part of
 * that batch) reuses the ambulance base with a booking-check accent.
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
    <div className="relative flex h-[220px] w-full items-center justify-center md:h-[300px]">
      <svg
        role="img"
        aria-label={label}
        viewBox="0 0 480 340"
        className="h-full w-full max-w-[480px]"
        fill="none"
        stroke="#252525"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Defs />
        {scene}
      </svg>
    </div>
  );
}
