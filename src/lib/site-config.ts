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
  title:
    "Bright Infonet | Software & App Development Company, Chandigarh Tricity",
  description:
    "AI-first software and mobile app development company serving Panchkula, Mohali, Chandigarh and clients worldwide — web platforms, Flutter apps, AI agents and IT training.",
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
  /** cities we actively serve; used in structured data and local pages */
  areaServed: [
    "Panchkula",
    "Mohali",
    "Chandigarh",
    "Zirakpur",
    "Kharar",
    "India",
  ],
};

export const socialLinks = social.filter((link) => link.href);
