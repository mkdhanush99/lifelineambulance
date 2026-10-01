import { PHONE_DISPLAY, PHONE_HREF, SERVING_SINCE_CLAIM } from "@/lib/site-config";
import { PRIMARY_BUTTON, SECONDARY_BUTTON } from "@/lib/button-styles";
import { AmbulanceHeroVisual } from "./AmbulanceHeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-x-clip">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-0 px-4 pt-7 pb-0 md:grid-cols-2 md:gap-4 md:px-8 md:pt-18">
        <div className="relative z-[2] pb-6">
          <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">
            Life Line Ambulance Service
          </p>
          <h1 className="mt-4 text-4xl leading-[1.04] font-bold tracking-tight text-[var(--color-ink)] md:text-6xl">
            Ambulance Service in Hyderabad, When You Need Patient Transport
          </h1>
          <p className="mt-5 max-w-[500px] text-[17px] leading-[1.55] text-[var(--color-ink-muted)]">
            Emergency response, hospital transfers, critical-care transport and outstation journeys
            across Hyderabad, subject to vehicle and service availability.
          </p>

          <div className="mt-[30px] flex flex-wrap items-center gap-3.5">
            <a href={PHONE_HREF} className={`${PRIMARY_BUTTON} px-7 py-3.5 text-base`}>
              Call {PHONE_DISPLAY}
            </a>
            <a href="#services" className={`${SECONDARY_BUTTON} px-6 py-3.5 text-base`}>
              View services
            </a>
          </div>

          <p className="mt-5 text-sm text-[var(--color-ink-muted)]">{SERVING_SINCE_CLAIM}</p>
        </div>

        <AmbulanceHeroVisual />
      </div>
    </section>
  );
}
