const STEPS = [
  { label: "Call", detail: "Speak with our coordinator and share the pickup details." },
  { label: "Share Details", detail: "Tell us the patient's condition, pickup and destination." },
  { label: "Service Confirmation", detail: "We confirm the vehicle and any equipment needed." },
  { label: "Patient Pickup", detail: "The vehicle reaches the pickup location." },
  { label: "Destination / Transfer", detail: "The patient is transported to the destination." },
];

export function ProcessSteps() {
  return (
    <ol className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-5">
      {STEPS.map((step, index) => (
        <li key={step.label} className="relative">
          {index < STEPS.length - 1 && (
            <div
              aria-hidden
              className="absolute top-4.5 left-[calc(50%+18px)] hidden h-px w-[calc(100%-36px)] bg-gradient-to-r from-[var(--color-tint)] to-[var(--color-primary)]/40 md:block"
            />
          )}
          <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-0">
            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
              {index + 1}
            </span>
            <p className="font-semibold text-[var(--color-ink)] md:mt-3">{step.label}</p>
          </div>
          <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{step.detail}</p>
        </li>
      ))}
    </ol>
  );
}
