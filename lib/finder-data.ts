// Data for the Ambulance Finder wizard and the Service Matrix. This is an
// enquiry-preparation tool, not a medical triage tool — see the disclaimer
// rendered alongside every result.
export type FinderNeed = {
  key: string;
  label: string;
  serviceSlug?: string;
};

export const FINDER_NEEDS: FinderNeed[] = [
  { key: "emergency", label: "Emergency", serviceSlug: "emergency-ambulance-service-hyderabad" },
  { key: "hospital-transfer", label: "Hospital Transfer", serviceSlug: "patient-transfer-ambulance-hyderabad" },
  { key: "icu", label: "ICU / Critical Care", serviceSlug: "icu-ambulance-hyderabad" },
  { key: "ventilator", label: "Ventilator Support", serviceSlug: "ventilator-ambulance-hyderabad" },
  { key: "nicu", label: "NICU / Neonatal", serviceSlug: "nicu-ambulance-hyderabad" },
  { key: "outstation", label: "Outstation", serviceSlug: "outstation-ambulance-hyderabad" },
  { key: "mortuary", label: "Mortuary / Dead Body Transport", serviceSlug: "dead-body-transport-hyderabad" },
  { key: "standby", label: "Event / Corporate Standby", serviceSlug: "event-ambulance-service-hyderabad" },
];

export const FINDER_LOCATIONS = ["Hyderabad", "Outside Hyderabad"] as const;

export const FINDER_JOURNEYS = ["Home → Hospital", "Hospital → Hospital", "Hospital → Home", "City → City"] as const;

export type ServiceMatrixRow = { need: string; service: string; slug?: string };

export const SERVICE_MATRIX: ServiceMatrixRow[] = [
  { need: "Emergency transport", service: "Emergency Ambulance", slug: "emergency-ambulance-service-hyderabad" },
  { need: "Basic patient transfer", service: "BLS Ambulance", slug: "bls-ambulance-hyderabad" },
  { need: "Critical patient transfer", service: "ICU Ambulance", slug: "icu-ambulance-hyderabad" },
  { need: "Respiratory support", service: "Ventilator Ambulance", slug: "ventilator-ambulance-hyderabad" },
  { need: "Newborn transport", service: "NICU / Neonatal Ambulance", slug: "nicu-ambulance-hyderabad" },
  { need: "Oxygen requirement", service: "Oxygen Ambulance", slug: "oxygen-ambulance-hyderabad" },
  { need: "Long-distance journey", service: "Outstation Ambulance", slug: "outstation-ambulance-hyderabad" },
  { need: "Event coverage", service: "Event Standby Ambulance", slug: "event-ambulance-service-hyderabad" },
  { need: "Corporate support", service: "Corporate Ambulance", slug: "corporate-ambulance-service-hyderabad" },
  { need: "Mortuary transport", service: "Dead Body / Mortuary Transport", slug: "dead-body-transport-hyderabad" },
  { need: "Temporary preservation equipment", service: "Freezer Box", slug: "freezer-box-on-rent-hyderabad" },
];

export const BEFORE_YOU_CALL_ITEMS = [
  "Pickup location",
  "Destination",
  "Patient condition",
  "Known ambulance requirement",
  "Hospital details",
  "Contact person",
];

export const FINDER_DISCLAIMER =
  "This guide helps you prepare for an ambulance enquiry. It does not determine what medical level of transport a patient requires. Ask the ambulance or medical team about the appropriate service.";
