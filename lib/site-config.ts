// [CLIENT CONFIRMATION REQUIRED: production domain] — placeholder until the client confirms one.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lifelineambulanceservice.in";

export const PHONE_DISPLAY = "9951244266";
export const PHONE_HREF = "tel:+919951244266";
export const WHATSAPP_HREF = "https://wa.me/919951244266";

export type Address = {
  label: string;
  lines: string[];
  city: string;
  state: string;
  postalCode: string;
};

// Single confirmed client address (client removed the second location).
export const ADDRESSES: Address[] = [
  {
    label: "Address",
    lines: ["Plot No. 10", "House No. 7-3-234, 2nd Floor", "Sri Sai Ram Colony", "Bairamalguda"],
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500070",
  },
];

export const BUSINESS_NAME = "Life Line Ambulance Service";

// Client-provided business claim — retained as stated, not independently verified.
export const SERVING_SINCE_CLAIM = "Serving patients and families since 2012";

export const EMERGENCY_DISCLAIMER =
  "Emergency medical situations may require immediate professional medical assistance. Information on this website is general and does not replace medical advice.";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/people/Lifeline-Ambulances/61576050151469/",
  instagram: "https://www.instagram.com/lifelineambulances/",
};

export const AVAILABILITY_CAVEAT =
  "Service availability and vehicle type can vary by location, traffic and current availability. Call " +
  PHONE_DISPLAY +
  " to confirm.";
