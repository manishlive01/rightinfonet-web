import type { ReactNode } from "react";

export type CoverVariant = "audit" | "vmodel" | "agent" | "phones";

export type PostSection = {
  /** anchor id, also used for the table of contents */
  id: string;
  title: string;
  body: ReactNode;
};

export type Faq = { q: string; a: string };

/** Topic cluster a post belongs to; drives PillarNav, related posts and the end CTA. */
export type Pillar = "regulated" | "cost" | "ai" | "academy";

export type Post = {
  slug: string;
  /** the on-page H1 */
  title: string;
  /** the <title> tag (≤ 60 chars); " | Bright Infonet" is appended only when it still fits in 60 */
  metaTitle: string;
  pillar: Pillar;
  /** the pillar's hub article (one per pillar) */
  pillarHub?: true;
  /** author id from src/content/authors.ts; without a real author the byline is the team */
  author?: string;
  /** overrides the pillar's default end-of-article service CTA */
  cta?: { href: string; label: string };
  /** meta description, ~150–160 characters */
  description: string;
  /** shorter summary for cards */
  excerpt: string;
  category: string;
  cover: CoverVariant;
  /** ISO dates (YYYY-MM-DD). A post goes live on its `published` day (IST); future dates are scheduled. */
  published: string;
  updated?: string;
  readingMinutes: number;
  keywords: string[];
  takeaways: string[];
  intro: ReactNode;
  sections: PostSection[];
  /** rendered after the article and emitted as FAQPage structured data; plain-text answers */
  faqs?: Faq[];
};
