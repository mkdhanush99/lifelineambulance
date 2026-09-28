import { PHONE_DISPLAY, PHONE_HREF, SERVING_SINCE_CLAIM } from "@/lib/site-config";
import { PRIMARY_BUTTON, SECONDARY_BUTTON } from "@/lib/button-styles";
import { AmbulanceHeroVisual } from "./AmbulanceHeroVisual";
import { LifeLineAtmosphere } from "./ui/life-line-atmosphere";

export function Hero() {
  return (
    <section className="relative overflow-x-clip">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <LifeLineAtmosphere height="100%" />
      </div>

      <div className="relative z-[3] mx-auto max-w-6xl px-4 pt-14 pb-10 md:px-8 md:pt-20 md:pb-16">
        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-[1.05fr_1fr] md:gap-8">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">
              Life Line Ambulance Service
            </p>
            <h1 className="mt-4 text-4xl leading-tight font-bold tracking-tight text-[var(--color-ink)] md:text-5xl lg:text-6xl">
              Ambulance Service in Hyderabad, When You Need Patient Transport
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base text-[var(--color-ink-muted)] md:mx-0 md:text-lg">
              Life Line Ambulance Service provides ambulance transportation for emergency response,
              hospital transfers, critical-care transport, outstation journeys and other patient
              transport requirements across Hyderabad, subject to vehicle and service availability.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <a href={PHONE_HREF} className={`${PRIMARY_BUTTON} px-7 py-3.5 text-base`}>
                Call {PHONE_DISPLAY}
              </a>
              <a href="#services" className={`${SECONDARY_BUTTON} px-6 py-3.5 text-base`}>
                View Ambulance Services
              </a>
            </div>

            <p className="mt-6 text-sm text-[var(--color-ink-muted)]">{SERVING_SINCE_CLAIM}</p>
          </div>

          <AmbulanceHeroVisual />
        </div>
      </div>
    </section>
  );
}
