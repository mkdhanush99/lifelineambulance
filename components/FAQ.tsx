"use client";

import { Accordion } from "radix-ui";

export type FaqItem = { question: string; answer: string };

export function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
      {items.map((item, index) => (
        <Accordion.Item key={item.question} value={`item-${index}`}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-primary)]">
              {item.question}
              <span
                aria-hidden
                className="shrink-0 text-xl text-[var(--color-primary)] transition-transform group-data-[state=open]:rotate-45"
              >
                +
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content overflow-hidden px-5 text-sm text-[var(--color-ink-muted)] data-[state=open]:pb-4">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
