/* Content for the inner pages (/services, /industries, /process, /about).
   Home-page data stays in ../home/data.ts; entries here extend it by index. */

export type RelatedLink = { href: string; label: string };

export const SERVICE_DETAILS: {
  slug: string;
  fit: string[];
  stack: string[];
  timeline: string;
  related?: RelatedLink;
}[] = [
  {
    slug: "product-design",
    fit: [
      "You have an idea and need it shaped before anyone writes code.",
      "Your product works, but users get lost or give up.",
      "Your developers need a design system they can actually build from.",
    ],
    stack: ["Figma", "Prototyping", "Usability testing", "Design tokens"],
    timeline: "Usually 2–6 weeks",
  },
  {
    slug: "web-platforms",
    fit: [
      "You are launching a SaaS product, customer portal or marketplace.",
      "Your team runs on spreadsheets and email and needs a real tool.",
      "Your current app is slow, fragile or hard to change.",
    ],
    stack: ["React", "TypeScript", "AWS · Azure · GCP"],
    timeline: "First release in weeks, not quarters",
  },
  {
    slug: "mobile-apps",
    fit: [
      "Customers need to book, order, pay or track from their phone.",
      "Field teams need an app that keeps working without a network.",
      "You have two ageing native apps and want one codebase.",
    ],
    stack: ["Flutter", "Dart", "Native modules", "Push & offline sync"],
    timeline: "iOS and Android from one release train",
    related: {
      href: "/insights/flutter-vs-native-app-development",
      label: "Flutter vs native: how to choose",
    },
  },
  {
    slug: "ai-agents",
    fit: [
      "People spend hours on inboxes, tickets or documents.",
      "Answers are buried in manuals, SOPs and policies.",
      "Staff copy the same data between tools every day.",
    ],
    stack: ["LLM APIs", "RAG", "Tool use", "Evals", "Human approval"],
    timeline: "A pilot on real data in weeks",
    related: {
      href: "/insights/ai-agents-for-business-operations",
      label: "AI agents: where they work and fail",
    },
  },
  {
    slug: "regulated-software",
    fit: [
      "A pharma, QC or diagnostic lab is moving off paper and spreadsheets.",
      "Your system has to pass audits and regulatory inspections.",
      "An existing system needs to be brought into a validated state.",
    ],
    stack: ["GAMP 5", "21 CFR Part 11", "EU Annex 11", "ALCOA+"],
    timeline: "Validation pack delivered with the code",
    related: {
      href: "/insights/21-cfr-part-11-compliance-checklist-lims",
      label: "Part 11 checklist for LIMS",
    },
  },
];

export const ENGAGEMENTS = [
  {
    n: "01",
    t: "Fixed-scope project",
    d: "A product with a clear scope. We agree milestones up front, demo every Friday and ship to an agreed plan.",
    best: "MVPs, apps, portals",
  },
  {
    n: "02",
    t: "Dedicated product team",
    d: "A small senior team that works as your product team, month to month, on a roadmap we shape together.",
    best: "Growing products",
  },
  {
    n: "03",
    t: "Audit & rescue",
    d: "An existing system that is slow, fragile or not audit-ready. We review it, fix what matters and document it.",
    best: "Legacy & GxP systems",
  },
] as const;

export const INDUSTRY_DETAILS: { slug: string; hard: string[]; related?: RelatedLink }[] = [
  {
    slug: "pharma",
    hard: [
      "Every change to a record has to be traceable and signed.",
      "Inspectors ask for evidence, not promises.",
      "Validation paperwork that takes longer than the build.",
    ],
    related: {
      href: "/insights/gamp-5-software-validation-guide",
      label: "GAMP 5 validation, explained",
    },
  },
  {
    slug: "labs",
    hard: [
      "Samples move across people, instruments and shifts.",
      "Results retyped from instrument screens by hand.",
      "Reports that must be reviewed, signed and traceable.",
    ],
    related: {
      href: "/insights/21-cfr-part-11-compliance-checklist-lims",
      label: "Part 11 checklist for LIMS",
    },
  },
  {
    slug: "healthcare",
    hard: [
      "Patients drop off when booking takes too many steps.",
      "Clinic Wi-Fi that can’t be relied on.",
      "Personal health data that has to stay protected.",
    ],
    related: {
      href: "/insights/flutter-vs-native-app-development",
      label: "Flutter vs native for business apps",
    },
  },
  {
    slug: "saas",
    hard: [
      "MVP code that can’t carry the next stage of growth.",
      "Customer data that must never leak between tenants.",
      "Billing, roles and admin work that eats the roadmap.",
    ],
  },
  {
    slug: "retail",
    hard: [
      "Peak-day traffic that breaks slow systems.",
      "“Where is my order?” questions all day long.",
      "Operations data scattered across tools.",
    ],
    related: {
      href: "/insights/ai-agents-for-business-operations",
      label: "AI agents for operations",
    },
  },
];

export const STANDARDS = [
  { k: "21 CFR Part 11", v: "US FDA — electronic records & signatures" },
  { k: "EU Annex 11", v: "EU GMP — computerised systems" },
  { k: "GAMP 5", v: "Risk-based computer system validation" },
  { k: "ALCOA+", v: "Data-integrity principles" },
  { k: "ISO 15189", v: "Medical laboratories — quality & competence" },
  { k: "DPDP Act, 2023", v: "India — digital personal data protection" },
] as const;

export const WEEK = [
  { d: "Mon", t: "Plan", x: "Agree the week’s goals from the backlog, together." },
  { d: "Tue", t: "Build", x: "Design and code in small, reviewed changes." },
  { d: "Wed", t: "Review", x: "Every change is code-reviewed and tested before it merges." },
  { d: "Thu", t: "Test", x: "QA on a staging link; fixes go in the same day." },
  { d: "Fri", t: "Demo", x: "A live demo on a real link, plus a short written update." },
] as const;

export const ALWAYS_INCLUDED = [
  { t: "A live demo every Friday", d: "Working software on a real link — not slides." },
  { t: "A weekly written update", d: "What shipped, what’s next, and any risks, in plain words." },
  { t: "A board you can see", d: "The same task board our engineers use, open to you." },
  {
    t: "Review and tests on every change",
    d: "Nothing merges without a second pair of eyes and passing checks.",
  },
  {
    t: "Documentation as we go",
    d: "Decisions and set-up notes written down while they’re fresh.",
  },
  { t: "One point of contact", d: "A tech lead who knows your product and answers directly." },
] as const;

export const PROCESS_QA = [
  {
    q: "How do you estimate a project?",
    a: "After a short discovery we break the scope into features, estimate each one and share the plan with its assumptions written down. Big unknowns get a small, paid discovery first, so the estimate rests on facts.",
  },
  {
    q: "What if the scope changes?",
    a: "It usually does. New ideas go into the backlog, and we show the impact on time and cost before anything changes. You decide what goes in.",
  },
  {
    q: "Can you work with our in-house team?",
    a: "Yes. We can own the whole build, or work alongside your developers with shared code review, standards and tooling.",
  },
  {
    q: "What happens after launch?",
    a: "We monitor, fix and keep improving under a support plan — or hand over cleanly to your team with the documentation to run it.",
  },
] as const;

export const VALUES = [
  {
    n: "01",
    t: "Clarity over cleverness",
    d: "Simple code, plain words and decisions written down — software the next developer can understand.",
  },
  {
    n: "02",
    t: "Ship every week",
    d: "Small, working steps on a live link beat a big reveal at the end.",
  },
  {
    n: "03",
    t: "Compliance is a feature",
    d: "Audit trails, access control and data protection are designed in, not bolted on.",
  },
  {
    n: "04",
    t: "Teach what we know",
    d: "Our Academy trains new engineers on the same standards we use for client work.",
  },
] as const;
