import Link from "next/link";
import {
  ADDRESSES,
  BUSINESS_NAME,
  EMERGENCY_DISCLAIMER,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site-config";
import { SERVICES } from "@/lib/services";
import { LEGAL_LINKS } from "@/lib/legal";
import { COMPANY_LINKS } from "./nav-links";
import { FooterMark } from "./FooterMark";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 bg-[var(--color-tint)]/40 pb-28 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-5 md:px-8">
        <div>
          <FooterMark />
          <a
            href={PHONE_HREF}
            className="mt-4 inline-flex min-h-11 items-center text-lg font-semibold text-[var(--color-primary)]"
          >
            {PHONE_DISPLAY}
          </a>
          <SocialLinks className="mt-5" />
        </div>

        <div className="text-sm text-[var(--color-ink-muted)] md:col-span-2">
          <p className="mb-1 font-semibold text-[var(--color-ink)]">Address</p>
          {ADDRESSES[0].lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>
            {ADDRESSES[0].city}, {ADDRESSES[0].state} {ADDRESSES[0].postalCode}
          </p>
        </div>

        <nav aria-label="Services" className="grid grid-cols-1 gap-1.5 text-sm">
          <p className="mb-1 font-semibold text-[var(--color-ink)]">Services</p>
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={service.href ?? "/#services"}
              className="text-[var(--color-ink-muted)] hover:text-[var(--color-primary)]"
            >
              {service.name}
            </Link>
          ))}
        </nav>

        <nav aria-label="Company" className="grid grid-cols-1 gap-1.5 text-sm">
          <p className="mb-1 font-semibold text-[var(--color-ink)]">Company</p>
          {COMPANY_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-[var(--color-ink-muted)] hover:text-[var(--color-primary)]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-8 text-xs leading-relaxed text-[var(--color-ink-muted)] md:px-8">
        <p>{EMERGENCY_DISCLAIMER}</p>
        <nav
          aria-label="Legal"
          className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 border-t border-black/10 pt-4"
        >
          {LEGAL_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--color-primary)]">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="mt-3">
          © {new Date().getFullYear()} {BUSINESS_NAME}. Hyderabad, Telangana, India.
        </p>
      </div>
    </footer>
  );
}
