export type SocialNetwork = "linkedin" | "instagram" | "facebook" | "youtube";
type SocialLink = { label: string; network: SocialNetwork; href: string };

// Leave phone, address and social hrefs empty until real values exist; empty fields are hidden
// on the site and left out of structured data.
const social: SocialLink[] = [
  {
    label: "LinkedIn",
    network: "linkedin",
    href: "https://www.linkedin.com/company/brightinfonet",
  },
  {
    label: "Instagram",
    network: "instagram",
    href: "https://www.instagram.com/bright_infonet/",
  },
  {
    label: "Facebook",
    network: "facebook",
    href: "https://www.facebook.com/bright.infonet/",
  },
  {
    label: "YouTube",
    network: "youtube",
    href: "https://www.youtube.com/@brightinfonet",
  },
];

export const siteConfig = {
  name: "Bright Infonet",
  // ≤ 65 characters (home <title>); the crawler warns above that.
  title: "Bright Infonet | Software & App Development, Chandigarh Tricity",
  // 150–160 characters. Feeds the home meta description, Organization schema, llms.txt and OG,
  // so keep it identical everywhere (change it here only).
  description:
    "AI-first software company in Panchkula: GxP-ready LIMS and pharmacovigilance software, web platforms, Flutter apps, AI agents and IT training for the Tricity.",
  // Live domain (brightinfonet.com redirects to www). NEXT_PUBLIC_SITE_URL overrides it,
  // e.g. for a staging deploy.
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.brightinfonet.com"
  ).replace(/\/$/, ""),
  locale: "en_IN",
  /** new projects, general enquiries and Academy admissions */
  email: "support@brightinfonet.com",
  /** existing clients (same inbox as general enquiries) */
  supportEmail: "support@brightinfonet.com",
  /** careers, hiring and internships */
  hrEmail: "hr@brightinfonet.com",
  /** shown as typed; the tel: link strips the spaces */
  phone: "+91 79738 47707",
  /** WhatsApp number in international format, digits only (used for wa.me links) */
  whatsapp: "917973847707",
  // CONFIRM: locality/region assumed from the Tricity focus. Add the real street address and
  // PIN code (must match Google Business Profile exactly) — empty fields are left out.
  address: {
    street: "",
    locality: "Panchkula",
    region: "Haryana",
    postalCode: "",
    country: "IN",
  },
  // OWNER: fill — office coordinates exactly as on Google Business Profile. null = left out of schema.
  geo: { lat: null as number | null, lng: null as number | null },
  // OWNER: fill — real opening hours, e.g. { days: ["Monday", "Tuesday"], opens: "09:30", closes: "18:30" }.
  // Days are schema.org day names. Empty = no hours in schema.
  openingHours: [] as { days: string[]; opens: string; closes: string }[],
  // OWNER: fill — Google Maps "Embed a map" iframe src (https://www.google.com/maps/embed?pb=…).
  // Empty = no map in the footer.
  mapEmbedUrl: "",
  // OWNER: fill — public Google Business Profile / Maps link (used as hasMap in schema).
  googleBusinessUrl: "",
  /** cities we actively serve; used in structured data and local pages */
  // CONFIRM: Ambala and Shimla added for the planned location pages.
  areaServed: [
    "Panchkula",
    "Mohali",
    "Chandigarh",
    "Zirakpur",
    "Kharar",
    "Ambala",
    "Shimla",
    "India",
  ],
};

export const socialLinks = social.filter((link) => link.href);
