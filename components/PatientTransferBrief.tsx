"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/services";
import { BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/site-config";
import { PRIMARY_BUTTON, SECONDARY_BUTTON } from "@/lib/button-styles";

const FIELD_CLASS =
  "mt-1.5 w-full rounded-xl border border-black/15 bg-white px-3.5 py-2.5 text-sm text-[var(--color-ink)] focus-visible:border-[var(--color-primary)]";
const LABEL_CLASS = "block text-sm font-medium text-[var(--color-ink)]";

export function PatientTransferBrief() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [requirement, setRequirement] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-semibold tracking-widest text-[var(--color-primary)] uppercase">
        Patient Transfer Brief
      </p>
      <p className="mt-2 text-sm text-[var(--color-ink-muted)]">
        Fill this in and print it to bring along, or read it out when you call. Nothing you type
        here is sent anywhere or saved — it only exists in your browser for this visit.
      </p>

      {/* Editable form — hidden when printing. */}
      <div className="no-print mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className={LABEL_CLASS}>
          Pickup
          <input
            className={FIELD_CLASS}
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="Address or hospital"
          />
        </label>
        <label className={LABEL_CLASS}>
          Destination
          <input
            className={FIELD_CLASS}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Address or hospital"
          />
        </label>
        <label className={LABEL_CLASS}>
          Transport requirement
          <select
            className={FIELD_CLASS}
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
          >
            <option value="">Not sure yet</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className={LABEL_CLASS}>
          Contact person
          <input
            className={FIELD_CLASS}
            value={contactPerson}
            onChange={(e) => setContactPerson(e.target.value)}
            placeholder="Name"
          />
        </label>
        <label className={LABEL_CLASS}>
          Phone
          <input
            className={FIELD_CLASS}
            type="tel"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
            placeholder="Contact number"
          />
        </label>
      </div>

      <div className="no-print mt-6 flex flex-wrap gap-3">
        <button type="button" onClick={() => window.print()} className={`${PRIMARY_BUTTON} px-5 py-2.5 text-sm`}>
          Print
        </button>
        <a
          href={`tel:+919951244266`}
          className={`${SECONDARY_BUTTON} px-5 py-2.5 text-sm`}
        >
          Call {PHONE_DISPLAY}
        </a>
      </div>

      {/* Print-only summary — hidden on screen. */}
      <div className="hidden print:block">
        <p className="text-lg font-bold">{BUSINESS_NAME} — Patient Transfer Brief</p>
        <dl className="mt-4 space-y-2 text-sm">
          <div>
            <dt className="font-semibold">Pickup</dt>
            <dd>{pickup || "—"}</dd>
          </div>
          <div>
            <dt className="font-semibold">Destination</dt>
            <dd>{destination || "—"}</dd>
          </div>
          <div>
            <dt className="font-semibold">Transport requirement</dt>
            <dd>{requirement || "—"}</dd>
          </div>
          <div>
            <dt className="font-semibold">Contact person</dt>
            <dd>{contactPerson || "—"}</dd>
          </div>
          <div>
            <dt className="font-semibold">Phone</dt>
            <dd>{contactPhone || "—"}</dd>
          </div>
        </dl>
        <p className="mt-4 text-sm">Call {PHONE_DISPLAY} to arrange or confirm this transfer.</p>
      </div>
    </div>
  );
}
