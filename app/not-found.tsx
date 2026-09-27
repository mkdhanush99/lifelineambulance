import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-config";
import { PRIMARY_BUTTON, SECONDARY_BUTTON } from "@/lib/button-styles";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">
        404
      </p>
      <h1 className="mt-3 text-2xl font-bold text-[var(--color-ink)] md:text-3xl">
        Looks like this route didn&apos;t reach the right destination.
      </h1>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/#services" className={`${SECONDARY_BUTTON} px-6 py-3 text-sm`}>
          Back to ambulance services
        </Link>
        <a href={PHONE_HREF} className={`${PRIMARY_BUTTON} px-6 py-3 text-sm`}>
          Call {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
