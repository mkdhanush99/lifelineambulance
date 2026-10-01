const TRUST = [
  "Serving patients and families since 2012",
  "Hyderabad-based ambulance service",
  "Emergency and patient transport",
  "Hospital-to-hospital transfers",
  "Outstation patient transport",
];

function MiniBars() {
  return (
    <span aria-hidden className="mt-0.5 inline-flex h-4 shrink-0 items-end gap-0.5">
      <i className="w-1 rounded-sm bg-[var(--color-primary)]" style={{ height: 6, transform: "rotate(20deg)" }} />
      <i className="w-1 rounded-sm bg-[var(--color-primary)]" style={{ height: 10, transform: "rotate(20deg)" }} />
      <i className="w-1 rounded-sm bg-[var(--color-primary)]" style={{ height: 15, transform: "rotate(20deg)" }} />
    </span>
  );
}

export function CredibilityBar() {
  return (
    <section className="border-t border-b border-black/5 bg-[#fffafc]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-4 sm:grid-cols-2 md:px-8 lg:grid-cols-5">
        {TRUST.map((label) => (
          <div key={label} className="flex items-start gap-3 py-5.5 pr-5">
            <MiniBars />
            <span className="text-sm leading-[1.35] font-medium text-[var(--color-ink)]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
