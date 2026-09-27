export type ServiceSummary = {
  slug: string;
  name: string;
  short: string;
  /** Only set once the page actually exists — keeps the site link-safe. */
  href?: string;
};

// All 14 primary service categories from the site's information architecture.
// Add `href` here once a page ships — an entry without one still renders
// (non-linked) on the homepage so nothing 404s.
export const SERVICES: ServiceSummary[] = [
  {
    slug: "emergency-ambulance-service-hyderabad",
    name: "Emergency Ambulance",
    short: "Rapid-response transport for medical emergencies.",
    href: "/emergency-ambulance-service-hyderabad/",
  },
  {
    slug: "private-ambulance-service-hyderabad",
    name: "Private Ambulance",
    short: "Booked ambulance transport outside emergency dispatch.",
    href: "/private-ambulance-service-hyderabad/",
  },
  {
    slug: "bls-ambulance-hyderabad",
    name: "BLS Ambulance",
    short: "Basic life support transport for stable patients.",
    href: "/bls-ambulance-hyderabad/",
  },
  {
    slug: "icu-ambulance-hyderabad",
    name: "ICU Ambulance",
    short: "Intensive-care-equipped transport for critical patients.",
    href: "/icu-ambulance-hyderabad/",
  },
  {
    slug: "ventilator-ambulance-hyderabad",
    name: "Ventilator Ambulance",
    short: "Transport for patients who need ventilator support in transit.",
    href: "/ventilator-ambulance-hyderabad/",
  },
  {
    slug: "nicu-ambulance-hyderabad",
    name: "NICU / Neonatal Ambulance",
    short: "Specialised transport for newborns and infants.",
    href: "/nicu-ambulance-hyderabad/",
  },
  {
    slug: "oxygen-ambulance-hyderabad",
    name: "Oxygen Ambulance",
    short: "Transport with onboard oxygen support.",
    href: "/oxygen-ambulance-hyderabad/",
  },
  {
    slug: "patient-transfer-ambulance-hyderabad",
    name: "Patient Transfer Ambulance",
    short: "Hospital-to-hospital and hospital-to-home transfers.",
    href: "/patient-transfer-ambulance-hyderabad/",
  },
  {
    slug: "outstation-ambulance-hyderabad",
    name: "Outstation Ambulance",
    short: "Long-distance ambulance transport outside Hyderabad.",
    href: "/outstation-ambulance-hyderabad/",
  },
  {
    slug: "dead-body-transport-hyderabad",
    name: "Dead Body Transport",
    short: "Respectful transport of deceased individuals.",
    href: "/dead-body-transport-hyderabad/",
  },
  {
    slug: "freezer-box-on-rent-hyderabad",
    name: "Freezer Box on Rent",
    short: "Mortuary freezer box rental for families.",
    href: "/freezer-box-on-rent-hyderabad/",
  },
  {
    slug: "mortuary-ambulance-hyderabad",
    name: "Mortuary Ambulance",
    short: "Vehicle-based mortuary transport, distinct from freezer box rental.",
    href: "/mortuary-ambulance-hyderabad/",
  },
  {
    slug: "event-ambulance-service-hyderabad",
    name: "Event Standby Ambulance",
    short: "Standby ambulance coverage for events and gatherings.",
    href: "/event-ambulance-service-hyderabad/",
  },
  {
    slug: "corporate-ambulance-service-hyderabad",
    name: "Corporate Ambulance",
    short: "Ambulance support arrangements for offices and industrial sites.",
    href: "/corporate-ambulance-service-hyderabad/",
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
