import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-config";
import { PRIMARY_BUTTON } from "@/lib/button-styles";

/** Sticky bottom call action, mobile only. Pure CSS — no scroll listener needed. */
export function MobileCallBar() {
  return (
    <div className="no-print fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 backdrop-blur px-4 py-3 md:hidden [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
      <a href={PHONE_HREF} className={`${PRIMARY_BUTTON} w-full px-5 py-3 text-base`}>
        Call Ambulance · {PHONE_DISPLAY}
      </a>
    </div>
  );
}
