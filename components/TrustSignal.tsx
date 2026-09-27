import { SERVING_SINCE_CLAIM } from "@/lib/site-config";

const SIGNALS = [
  { label: SERVING_SINCE_CLAIM },
  { label: "Hyderabad-based ambulance service" },
  { label: "Clear contact details and our service address published" },
  { label: "Transparent policies, including cancellation terms" },
];

export function TrustSignal() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {SIGNALS.map((signal) => (
        <li
          key={signal.label}
          className="flex items-start gap-3 rounded-xl border border-black/5 bg-white p-4"
        >
          <span
            aria-hidden
            className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-primary)]"
          />
          <span className="text-sm text-[var(--color-ink)]">{signal.label}</span>
        </li>
      ))}
    </ul>
  );
}
