// OWNER: only real, permissioned data. Empty = hidden on site and in schema.
// Never add a testimonial, logo, number, price or screenshot that a client has not approved.
// Every component that reads this file renders nothing while its entry is empty, and the
// matching structured data (Review, offers…) is left out as well.

export type Testimonial = {
  quote: string;
  /** real person's name, as they agreed to be credited */
  name: string;
  role: string;
  company: string;
  /** where the review was originally given, e.g. "Google", "Clutch" (optional) */
  source?: string;
  /** landing paths that also show this quote, e.g. ["/services/regulated-software"]; the home page shows all */
  servicePaths?: string[];
};

export type ClientLogo = {
  name: string;
  /** image under /public, e.g. "/clients/acme.svg" (with the client's permission) */
  src: string;
  /** intrinsic size of the image file, in px */
  width: number;
  height: number;
  href?: string;
};

export type Metric = { k: string; v: string };

export type Quote = {
  text: string;
  name: string;
  role: string;
  company: string;
};

export type Proof = {
  /** link to the matching case study, e.g. "/work" */
  caseStudyHref?: string;
  /** 3 real outcomes, e.g. { k: "Go-live", v: "14 weeks" } */
  metrics: Metric[];
  quote?: Quote;
};

export type CaseStudyProof = {
  metrics: Metric[];
  /** real product screenshots under /public with descriptive alt text */
  screenshots: { src: string; alt: string; width: number; height: number }[];
  quote?: Quote;
};

export type Pricing = {
  /** shown as "Starts from {from}", e.g. "₹4,00,000" */
  from: string;
  /** what the price covers and what changes it */
  note: string;
  currency: "INR";
  /** numeric starting price for schema.org offers; omit to keep price out of structured data */
  minPrice?: number;
};

export const TESTIMONIALS: Testimonial[] = [
  // {
  //   quote: "Exact words the client approved.",
  //   name: "Firstname Lastname",
  //   role: "Head of QA",
  //   company: "Company name",
  //   source: "Google",
  //   servicePaths: ["/services/regulated-software"],
  // },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  // { name: "Client name", src: "/clients/client-name.svg", width: 160, height: 40, href: "https://client.example" },
];

/** keyed by landing page path, e.g. "/services/regulated-software" */
export const PROOF: Record<string, Proof> = {};

/** keyed by WORK item id in src/components/home/data.ts: "pvgenix", "lims", "clinic", "ops-agent" */
export const CASE_STUDY_PROOF: Record<string, CaseStudyProof> = {};

/** keyed by landing page path, e.g. "/services/mobile-apps" */
export const PRICING: Record<string, Pricing> = {};

/** Testimonials for a landing page; with no path (home page), all of them. */
export function testimonialsFor(path?: string): Testimonial[] {
  const real = TESTIMONIALS.filter((t) => t.quote.trim() && t.name.trim());
  if (!path) return real;
  return real.filter((t) => t.servicePaths?.includes(path));
}

export const clientLogos = () =>
  CLIENT_LOGOS.filter((l) => l.name.trim() && l.src.trim());

/** Proof for a landing page, only if it has at least one real metric or a quote. */
export function proofFor(path: string): Proof | undefined {
  const p = PROOF[path];
  return p && (p.metrics.length > 0 || p.quote) ? p : undefined;
}

export function caseStudyProofFor(id: string): CaseStudyProof | undefined {
  const p = CASE_STUDY_PROOF[id];
  return p && (p.metrics.length > 0 || p.screenshots.length > 0 || p.quote)
    ? p
    : undefined;
}

export function pricingFor(path: string): Pricing | undefined {
  const p = PRICING[path];
  return p && p.from.trim() ? p : undefined;
}
