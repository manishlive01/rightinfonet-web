// OWNER CONFIRM: indicative ranges copied from existing articles
// (app-development-cost-india.tsx, website-development-cost-small-business-india.tsx,
// mvp-development-cost-timeline.tsx). Do not add figures here that are not published in those
// posts; if a range changes, change it in the article too so the site says one thing.
//
// How the calculator works: every product type has bands ordered from smallest to largest. Each
// answer points at a band (`band` = index), and the result is the largest band any answer points
// at. No multipliers, no arithmetic: the output is always one published band.

export type CostBand = {
  label: string;
  /** typical scope, as described in the source article */
  scope: string;
  /** indicative range in INR, exactly as published */
  range: string;
  /** approximate USD, only where the source article publishes it */
  usd?: string;
  /** typical timeline, only where the source article publishes it */
  timeline?: string;
};

export type CostOption = {
  id: string;
  label: string;
  /** index into the product's bands */
  band: number;
  /** shown with the result when this option is chosen */
  note?: string;
};

export type CostQuestion = {
  id: string;
  legend: string;
  /** radio = pick one (first option is the default); checkbox = pick any */
  type: "radio" | "checkbox";
  options: CostOption[];
};

export type CostProduct = {
  id: string;
  label: string;
  bands: CostBand[];
  questions: CostQuestion[];
  /** running and upkeep costs, as published */
  upkeep: string;
  source: { slug: string; title: string };
};

export const COST_PRODUCTS: CostProduct[] = [
  {
    id: "mobile",
    label: "Mobile app for iOS and Android",
    source: {
      slug: "app-development-cost-india",
      title: "App development cost in India",
    },
    bands: [
      {
        label: "Simple app",
        scope:
          "One user role, 5–10 screens, login, basic backend, standard components, no payments or light payments",
        range: "₹3–8 lakh",
        usd: "about $4k–10k",
        timeline: "6–10 weeks",
      },
      {
        label: "Medium-complexity app",
        scope:
          "Two or three roles, admin panel, payments, notifications, maps or chat, a few integrations, custom design",
        range: "₹8–25 lakh",
        usd: "about $10k–30k",
        timeline: "3–5 months",
      },
      {
        label: "Complex platform",
        scope:
          "Multiple apps or portals, offline sync, real-time features, ERP/CRM integrations, AI features, compliance or audit needs",
        range: "₹25 lakh–₹1 crore+",
        usd: "about $30k–120k+",
        timeline: "5–12 months, often phased",
      },
    ],
    questions: [
      {
        id: "approach",
        legend: "How will it be built?",
        type: "radio",
        options: [
          {
            id: "flutter",
            label: "One cross-platform codebase (for example Flutter)",
            band: 0,
          },
          {
            id: "native",
            label: "Two separate native apps (Swift and Kotlin)",
            band: 0,
            note: "These ranges assume one cross-platform codebase. Two separate native apps usually cost more, because the UI and app logic are written twice.",
          },
        ],
      },
      {
        id: "roles",
        legend: "Who uses it?",
        type: "radio",
        options: [
          { id: "one", label: "One user role", band: 0 },
          {
            id: "few",
            label: "Two or three roles, with an admin panel",
            band: 1,
          },
          {
            id: "many",
            label: "Multiple apps or portals (for example customer, staff and admin)",
            band: 2,
          },
        ],
      },
      {
        id: "integrations",
        legend: "What does it connect to?",
        type: "radio",
        options: [
          {
            id: "basic",
            label: "Login and a basic backend, no or light payments",
            band: 0,
          },
          {
            id: "some",
            label: "Payments, notifications, maps or chat, a few integrations",
            band: 1,
          },
          { id: "erp", label: "ERP or CRM integrations", band: 2 },
        ],
      },
      {
        id: "design",
        legend: "Design depth",
        type: "radio",
        options: [
          { id: "standard", label: "Standard components", band: 0 },
          { id: "custom", label: "Custom design", band: 1 },
        ],
      },
      {
        id: "extras",
        legend: "Anything else? (choose any)",
        type: "checkbox",
        options: [
          { id: "offline", label: "Offline sync", band: 2 },
          { id: "realtime", label: "Real-time features", band: 2 },
          { id: "ai", label: "AI features", band: 2 },
          { id: "compliance", label: "Compliance or audit needs", band: 2 },
        ],
      },
    ],
    upkeep:
      "Plan roughly 15–25% of the build cost per year for upkeep (indicative), plus hosting and third-party services such as SMS, maps, payment gateway fees and AI model usage.",
  },
  {
    id: "website",
    label: "Website or web app",
    source: {
      slug: "website-development-cost-small-business-india",
      title: "Website development cost for small businesses in India",
    },
    bands: [
      {
        label: "Brochure site",
        scope: "4–8 pages, contact form, maps, WhatsApp button, basic SEO",
        range: "₹25,000–1.5 lakh",
        timeline: "2–4 weeks",
      },
      {
        label: "CMS site",
        scope: "10–30 pages, blog or listings, editable content, custom design",
        range: "₹1–4 lakh",
        timeline: "4–8 weeks",
      },
      {
        label: "E-commerce store",
        scope: "Catalogue, cart, payments, orders, shipping, GST invoices",
        range: "₹2–10 lakh",
        timeline: "6–12 weeks",
      },
      {
        label: "Web app",
        scope: "Logins, roles, dashboards, workflows, integrations",
        range: "₹5–30 lakh+",
        timeline: "2–6 months",
      },
    ],
    questions: [
      {
        id: "site",
        legend: "What does the site need to do?",
        type: "radio",
        options: [
          {
            id: "brochure",
            label: "Explain what we do and get enquiries (a few pages)",
            band: 0,
          },
          {
            id: "cms",
            label: "Publish pages, a blog or listings we edit ourselves",
            band: 1,
          },
          { id: "shop", label: "Sell products online", band: 2 },
          {
            id: "app",
            label: "Let customers or staff log in and do things",
            band: 3,
          },
        ],
      },
    ],
    upkeep:
      "Yearly running costs are indicatively ₹800–1,500 for a .in or .com domain, ₹3,000–30,000 for hosting and ₹10,000–1 lakh+ for maintenance and updates, depending on the type of site.",
  },
  {
    id: "mvp",
    label: "MVP to test a product idea",
    source: {
      slug: "mvp-development-cost-timeline",
      title: "MVP development: cost, timeline and what to build first",
    },
    bands: [
      {
        label: "Lean web MVP",
        scope: "One web app, one role, simple admin, standard design",
        range: "₹5–8 lakh",
        usd: "about $6k–10k",
      },
      {
        label: "Mobile MVP",
        scope:
          "Flutter app for iOS and Android, backend, admin, push notifications",
        range: "₹6–15 lakh",
        usd: "about $7k–18k",
      },
      {
        label: "MVP with integrations",
        scope:
          "Payments, maps, messaging or an existing system, two or three roles",
        range: "₹10–20 lakh",
        usd: "about $12k–25k",
      },
      {
        label: "MVP with AI features",
        scope:
          "Assistant, document reading or recommendations, with evaluation and guardrails",
        range: "₹10–25 lakh+",
        usd: "about $12k–30k+",
      },
    ],
    questions: [
      {
        id: "platform",
        legend: "Where will users use it?",
        type: "radio",
        options: [
          { id: "web", label: "A web app", band: 0 },
          { id: "mobile", label: "A mobile app for iOS and Android", band: 1 },
        ],
      },
      {
        id: "integrations",
        legend: "Integrations and roles",
        type: "radio",
        options: [
          {
            id: "none",
            label: "One role, no payments or outside systems",
            band: 0,
          },
          {
            id: "some",
            label:
              "Payments, maps, messaging or an existing system, two or three roles",
            band: 2,
          },
        ],
      },
      {
        id: "ai",
        legend: "AI features",
        type: "radio",
        options: [
          { id: "no", label: "No AI features", band: 0 },
          {
            id: "yes",
            label: "An assistant, document reading or recommendations",
            band: 3,
          },
        ],
      },
    ],
    upkeep:
      "Most MVPs take around 8–14 weeks from scoping to launch. Also budget for hosting, third-party services, store accounts and a few months of post-launch changes.",
  },
];

/** The band for a set of answers: the largest band any chosen option points at. */
export function costBandIndex(
  product: CostProduct,
  answers: Record<string, string[]>,
) {
  let band = 0;
  for (const q of product.questions) {
    for (const o of q.options) {
      if (answers[q.id]?.includes(o.id)) band = Math.max(band, o.band);
    }
  }
  return Math.min(band, product.bands.length - 1);
}

/** Default answers: the first option of every pick-one question, nothing ticked. */
export function defaultCostAnswers(product: CostProduct) {
  const answers: Record<string, string[]> = {};
  for (const q of product.questions) {
    answers[q.id] = q.type === "radio" ? [q.options[0].id] : [];
  }
  return answers;
}
