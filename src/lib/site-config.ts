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
  { label: "Instagram", network: "instagram", href: "https://www.instagram.com/bright_infonet/" },
  { label: "Facebook", network: "facebook", href: "https://www.facebook.com/bright.infonet/" },
  { label: "YouTube", network: "youtube", href: "https://www.youtube.com/@brightinfonet" },
];

export const siteConfig = {
  name: "Bright Infonet",
  title: "Bright Infonet | AI-First Software Development Company in India",
  description:
    "Bright Infonet is an AI-first software development company in India building web platforms, mobile apps, AI agents and GxP-ready software for pharma and labs.",
  // Live domain (brightinfonet.com redirects to www). NEXT_PUBLIC_SITE_URL overrides it,
  // e.g. for a staging deploy.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.brightinfonet.com").replace(/\/$/, ""),
  locale: "en_IN",
  /** new projects and general enquiries */
  email: "hello@brightinfonet.com",
  /** existing clients */
  supportEmail: "support@brightinfonet.com",
  phone: "",
  address: {
    locality: "",
    region: "",
    country: "IN",
  },
};

export const socialLinks = social.filter((link) => link.href);
