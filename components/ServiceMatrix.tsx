import Link from "next/link";
import { SERVICE_MATRIX } from "@/lib/finder-data";

export function ServiceMatrix() {
  return (
    <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-black/10 bg-[var(--color-tint)]/40">
            <th className="px-5 py-3 font-semibold text-[var(--color-ink)]">If you need&hellip;</th>
            <th className="px-5 py-3 font-semibold text-[var(--color-ink)]">Ask about</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-black/5">
          {SERVICE_MATRIX.map((row) => (
            <tr key={row.need}>
              <td className="px-5 py-3.5 text-[var(--color-ink-muted)]">{row.need}</td>
              <td className="px-5 py-3.5 font-medium">
                {row.slug ? (
                  <Link href={`/${row.slug}/`} className="text-[var(--color-primary)] hover:underline">
                    {row.service}
                  </Link>
                ) : (
                  <span className="text-[var(--color-ink)]">{row.service}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-black/10 px-5 py-3 text-xs text-[var(--color-ink-muted)]">
        Ask the ambulance team which option is appropriate for your specific situation.
      </p>
    </div>
  );
}
