import type { ReactNode } from "react";

export type CoverVariant = "audit" | "vmodel" | "agent" | "phones";

export type PostSection = {
  /** anchor id, also used for the table of contents */
  id: string;
  title: string;
  body: ReactNode;
};

export type Faq = { q: string; a: string };

export type Post = {
  slug: string;
  /** the on-page H1 */
  title: string;
  /** the <title> tag; the layout template appends " | Bright Infonet" */
  metaTitle: string;
  /** meta description, ~150–160 characters */
  description: string;
  /** shorter summary for cards */
  excerpt: string;
  category: string;
  cover: CoverVariant;
  /** ISO dates */
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
