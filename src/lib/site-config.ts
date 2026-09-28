type SocialLink = { label: string; href: string };

// Leave phone, address and social hrefs empty until real values exist; empty fields are hidden
// on the site and left out of structured data.
const social: SocialLink[] = [
  { label: "LinkedIn", href: "" },
  { label: "Instagram", href: "" },
  { label: "GitHub", href: "" },
];

export const siteConfig = {
  name: "Bright Infonet",
  title: "Bright Infonet — Software Development Company in India | Web, Mobile & AI",
  description:
    "Bright Infonet is an AI-first software development company in India. We design and build web platforms, mobile apps, AI agents and GxP-ready software for pharma and labs.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_IN",
  email: "hello@brightinfonet.com",
  phone: "",
  address: {
    locality: "",
    region: "",
    country: "IN",
  },
  twitterHandle: "@brightinfonet",
};

export const socialLinks = social.filter((link) => link.href);
