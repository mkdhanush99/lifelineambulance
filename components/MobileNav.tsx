"use client";

import { Dialog } from "radix-ui";
import { useState } from "react";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-config";
import { PRIMARY_BUTTON } from "@/lib/button-styles";
import { NAV_LINKS } from "./nav-links";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors hover:border-[var(--color-primary)] active:bg-[var(--color-tint)] md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-black/40" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-[91] flex w-[82vw] max-w-xs flex-col gap-1 bg-white p-6 pt-8 shadow-xl">
          <Dialog.Title className="mb-4 text-sm font-semibold tracking-wide text-[var(--color-ink-muted)] uppercase">
            Menu
          </Dialog.Title>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-[var(--color-ink)] hover:bg-[var(--color-tint)]"
            >
              {link.label}
            </Link>
          ))}
          <a href={PHONE_HREF} className={`${PRIMARY_BUTTON} mt-4 px-4 py-3`}>
            Call {PHONE_DISPLAY}
          </a>
          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Close menu"
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-colors hover:border-[var(--color-primary)] active:bg-[var(--color-tint)]"
            >
              ×
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
