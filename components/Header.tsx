import Image from "next/image";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-config";
import { PRIMARY_BUTTON } from "@/lib/button-styles";
import { NAV_LINKS } from "./nav-links";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" className="flex items-center" aria-label="Life Line Ambulance Service — home">
          <Image
            src="/brand/horizontal-pink.svg"
            alt="Life Line Ambulance Service"
            width={230}
            height={58}
            priority
            className="hidden h-10 w-auto md:block"
          />
          <Image
            src="/brand/symbol-pink.svg"
            alt="Life Line Ambulance Service"
            width={36}
            height={36}
            priority
            className="h-9 w-9 md:hidden"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={PHONE_HREF} className={`${PRIMARY_BUTTON} hidden px-5 py-2.5 text-sm md:inline-flex`}>
            Call {PHONE_DISPLAY}
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
