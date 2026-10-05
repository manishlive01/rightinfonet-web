import type { Faq } from "../insights/types";

export type LandingCard = { t: string; d: string };

export type LandingSection = {
  id: string;
  kicker: string;
  /** H2 is `${title} ${accent}` with the accent in italics */
  title: string;
  accent: string;
  lead?: string;
  cards: LandingCard[];
};

/**
 * A keyword-focused landing page: service pages (/services/…), industry pages (/industries/…),
 * local pages (/…-panchkula) and Academy course or city pages (/academy/…). Plain strings only, so the same data feeds
 * the page, its structured data and llms.txt.
 */
export type Landing = {
  /** path from the site root, e.g. "/mobile-app-development-panchkula" */
  path: string;
  /** "industry" pages (/industries/…) render and get Service schema like "service" pages */
  kind: "service" | "industry" | "local" | "course" | "training";
  /** breadcrumb parent between Home and this page */
  parent?: { name: string; path: string };
  crumb: string;
  kicker: string;
  title: string;
  titleAccent: string;
  /** <title>; the layout appends " | Bright Infonet"; ≤ 60 chars */
  metaTitle: string;
  /** 140–160 chars */
  description: string;
  keywords: string[];
  lead: string;
  /** 40–60 word direct answer to the page's main query — the part search and AI tools quote */
  answer: string;
  about: string[];
  facts?: { k: string; v: string }[];
  fit?: string[];
  sections: LandingSection[];
  faqs: Faq[];
  related: { href: string; label: string }[];
  /** schema.org serviceType for service/industry/local pages */
  serviceType?: string;
  /** main city for local pages; omitted for India/worldwide pages */
  city?: string;
  /** index into TRACKS for course pages */
  trackIndex?: number;
  /** label for the main call to action */
  cta?: string;
  /** ISO date of the last real content change (sitemap lastmod); defaults to LANDING_UPDATED_DEFAULT */
  updated?: string;
  /**
   * Thin local page with no real local client or content yet: robots noindex,follow, and left
   * out of the sitemap, llms.txt, footer and related links. The route stays (delete to re-index).
   */
  noindex?: true;
};
