export const NAV_LINKS = [
  { id: "services", href: "/#services", label: "Services" },
  { id: "work", href: "/#work", label: "Work" },
  { id: "industries", href: "/#industries", label: "Industries" },
  { id: "process", href: "/#process", label: "Process" },
  { id: "about", href: "/#about", label: "About" },
  { id: "academy", href: "/academy", label: "Academy", badge: "New" },
] as const;

export const TABS = [
  {
    n: "01",
    t: "Web platforms",
    d: "Dashboards, portals and SaaS products built to scale.",
  },
  {
    n: "02",
    t: "Mobile apps",
    d: "iOS and Android apps people actually keep opening.",
  },
  {
    n: "03",
    t: "AI agents",
    d: "Assistants that don’t just chat — they get the work done.",
  },
] as const;

export const MARQUEE_WORDS = [
  "Web platforms",
  "AI agents",
  "Mobile apps",
  "Product design",
  "LIMS",
  "Pharmacovigilance",
  "GxP validation",
];

// PLACEHOLDER: swap for real client logos (SVG) once approved for public use.
export const CLIENT_LOGOS = [
  "Client 01",
  "Client 02",
  "Client 03",
  "Client 04",
  "Client 05",
  "Client 06",
  "Client 07",
  "Client 08",
];

// PLACEHOLDER: replace with real, verifiable figures before launch.
export const STATS = [
  { value: 10, suffix: "+", label: "Products shipped to production" },
  { value: 5, suffix: "", label: "Industries served, pharma to retail" },
  { value: 24, suffix: "h", label: "To hear back from an engineer" },
  { value: 100, suffix: "%", label: "In-house — nothing outsourced" },
];

export const SERVICES = [
  {
    n: "01",
    t: "Product & UX design",
    d: "Research, flows and interfaces that make complex software feel obvious — tested with real users before we build.",
    tags: ["Discovery", "UX flows", "Design systems", "Prototypes"],
    get: [
      "User research & journey maps",
      "Clickable, tested prototypes",
      "A design system your devs can use",
    ],
  },
  {
    n: "02",
    t: "Web platforms",
    d: "SaaS products, portals and internal tools that stay fast at ten users or ten thousand.",
    tags: ["Next.js", "Node", "PostgreSQL", "Cloud"],
    get: [
      "Multi-tenant SaaS architecture",
      "Admin panels & live dashboards",
      "CI/CD, cloud hosting, monitoring",
    ],
  },
  {
    n: "03",
    t: "Mobile apps",
    d: "One codebase, native feel on iOS and Android — offline-ready and store-approved.",
    tags: ["Flutter", "iOS", "Android", "Offline-first"],
    get: [
      "Flutter apps for iOS & Android",
      "Offline sync & push notifications",
      "Store submission & release",
    ],
  },
  {
    n: "04",
    t: "AI agents & automation",
    d: "Assistants wired into your tools that read, decide and act — with evals so you can trust the output.",
    tags: ["LLMs", "RAG", "Tool use", "Evals"],
    get: [
      "Agents wired into your tools",
      "RAG over your own documents",
      "Eval suites & cost monitoring",
    ],
  },
  {
    n: "05",
    t: "Regulated software",
    d: "LIMS and drug-safety systems built for audits from day one, with validation packs to match.",
    tags: ["GAMP 5", "CSV", "21 CFR Part 11", "NABL"],
    get: [
      "Audit trails & e-signatures",
      "Role-based access & locking",
      "Validation pack, URS → VSR",
    ],
  },
] as const;

export const VALIDATION_STEPS = ["URS", "Risk", "IQ", "OQ", "PQ", "VSR"];

export const WORK = [
  {
    id: "pvgenix",
    n: "01",
    name: "PVgenix",
    kind: "SaaS · Pharmacovigilance",
    headline: "Drug-safety case processing, with AI that reads every case first.",
    description:
      "Case intake, coding and regulatory reporting for pharmacovigilance teams — AI pre-reads each case so reviewers never start from zero.",
    highlights: [
      { k: "AI intake", v: "Cases pre-read and pre-filled for review" },
      { k: "Part 11", v: "Audit trail and e-signatures built in" },
      { k: "End to end", v: "Intake → coding → reporting" },
    ],
    tags: ["Web platform", "AI agents", "21 CFR Part 11"],
  },
  {
    id: "lims",
    n: "02",
    name: "LIMS",
    kind: "Lab software · GxP",
    headline: "From sample registration to signed report — in one traceable flow.",
    description:
      "Audit trails, e-signatures and instrument data built in for NABL-accredited diagnostic labs and pharma QC labs.",
    highlights: [
      { k: "ISO 15189", v: "NABL-ready lab workflows" },
      { k: "GAMP 5", v: "Validation pack delivered with it" },
      { k: "Instruments", v: "Results captured, not re-typed" },
    ],
    tags: ["Web platform", "GAMP 5 validation", "ISO 15189"],
  },
] as const;

export const INDUSTRIES = [
  {
    n: "01",
    t: "Pharma & life sciences",
    d: "Pharmacovigilance, QA and regulated workflows that have to stand up in an inspection — not just a demo.",
    builds: ["Drug-safety case systems", "QA & document workflows", "Validated web platforms"],
    tags: ["GxP", "21 CFR Part 11", "EU Annex 11"],
  },
  {
    n: "02",
    t: "Diagnostic & QC labs",
    d: "LIMS and lab tools that follow every sample from registration to a signed, traceable report.",
    builds: ["LIMS & sample tracking", "Instrument integration", "Patient report portals"],
    tags: ["NABL", "ISO 15189", "GAMP 5"],
  },
  {
    n: "03",
    t: "Healthcare",
    d: "Patient-facing apps and clinic tools that feel simple for patients and stay careful with their data.",
    builds: ["Appointment & booking apps", "Clinic dashboards", "Care-team workflows"],
    tags: ["Mobile", "Privacy by design", "Integrations"],
  },
  {
    n: "04",
    t: "SaaS & startups",
    d: "From a first MVP to a multi-tenant platform — without a rewrite in between.",
    builds: ["MVPs that can grow", "Multi-tenant SaaS", "Billing, admin & analytics"],
    tags: ["Next.js", "PostgreSQL", "Cloud"],
  },
  {
    n: "05",
    t: "Retail & logistics",
    d: "Ordering, tracking and operations tools that stay fast on the busiest day of the year.",
    builds: ["Order & delivery tracking", "Ops dashboards", "AI support agents"],
    tags: ["Real-time", "Mobile", "AI agents"],
  },
] as const;

export const PROCESS_STEPS = [
  {
    n: "01",
    t: "Discover",
    d: "We map the users, the risks and the one metric the product has to move.",
    time: "1–2 weeks",
    out: ["Scope & risk map", "Success metric", "Estimate & plan"],
  },
  {
    n: "02",
    t: "Design",
    d: "Clickable prototypes, tested with real users before production code.",
    time: "2–3 weeks",
    out: ["Clickable prototype", "User testing", "Design system"],
  },
  {
    n: "03",
    t: "Build",
    d: "Two-week sprints with a working demo on a live link every Friday.",
    time: "Sprints",
    out: ["Two-week sprints", "Friday live demos", "Code review & QA"],
  },
  {
    n: "04",
    t: "Launch & grow",
    d: "Deploy, validate, monitor — and keep improving after go-live.",
    time: "Ongoing",
    out: ["Deploy & monitor", "Validation docs for GxP", "Continuous improvement"],
  },
] as const;

export const ABOUT_STATEMENT =
  "One small team, end to end. The people who scope your product are the ones who design it, write it and put it live — no handoffs, no lost context, no junior bait-and-switch.";

export const ABOUT_POINTS = [
  {
    t: "Senior hands only",
    d: "The engineers on your first call are the engineers writing your code.",
  },
  {
    t: "Working software every Friday",
    d: "Weekly demos on a live link. You never wait months to see progress.",
  },
  {
    t: "Built to be audited",
    d: "Audit trails, access control and validation docs are part of the build — not an afterthought.",
  },
] as const;

export const TRACKS = [
  {
    n: "01",
    t: "Full-stack Web",
    stack: "React · Next.js · Node · Postgres",
    wk: 16,
    format: "Hybrid",
    level: "Beginner → Job-ready",
    pitch:
      "Go from first line of HTML to shipping a production web app, reviewed by the engineers who build ours.",
    cap: "A production SaaS dashboard — deployed, tested and code-reviewed.",
    mods: [
      { t: "Web foundations", d: "HTML, CSS, JavaScript, Git", a: 1, b: 3 },
      { t: "React & Next.js", d: "Components, state, routing", a: 4, b: 7 },
      { t: "APIs & databases", d: "Node, REST, Postgres, auth", a: 8, b: 11 },
      { t: "Studio project", d: "Build a real brief in a team", a: 12, b: 16 },
    ],
  },
  {
    n: "02",
    t: "Mobile with Flutter",
    stack: "Dart · Flutter · Firebase",
    wk: 12,
    format: "Hybrid",
    level: "Some coding",
    pitch:
      "Design and ship cross-platform apps with one codebase — all the way to the store listing.",
    cap: "An app published to the Play Store, with analytics wired in.",
    mods: [
      { t: "Dart & Flutter basics", d: "Widgets, layout, theming", a: 1, b: 3 },
      { t: "State & navigation", d: "Riverpod, routing, forms", a: 4, b: 6 },
      { t: "Data & offline", d: "APIs, Firebase, local storage", a: 7, b: 9 },
      { t: "Release", d: "Testing, builds, store launch", a: 10, b: 12 },
    ],
  },
  {
    n: "03",
    t: "Applied AI & Agents",
    stack: "Python · LLMs · RAG · Tools",
    wk: 10,
    format: "Live online",
    level: "Developers",
    pitch:
      "Build AI that does real work: retrieval, tool use and evaluation — the parts demos skip.",
    cap: "An agent that automates a real business workflow, with evals.",
    mods: [
      { t: "LLM fundamentals", d: "Prompting, tokens, APIs", a: 1, b: 2 },
      { t: "Retrieval (RAG)", d: "Embeddings, vector search", a: 3, b: 5 },
      { t: "Tool-using agents", d: "Function calls, memory, guardrails", a: 6, b: 8 },
      { t: "Evaluate & deploy", d: "Evals, cost, monitoring", a: 9, b: 10 },
    ],
  },
  {
    n: "04",
    t: "Software Validation",
    stack: "GAMP 5 · CSV · Part 11",
    wk: 8,
    format: "Live online",
    level: "QA & life-science",
    pitch:
      "Learn computer system validation the way pharma auditors expect it — on a live LIMS.",
    cap: "A complete validation pack — URS to summary report — for a real LIMS.",
    mods: [
      { t: "GxP & GAMP 5", d: "Categories, lifecycle, roles", a: 1, b: 2 },
      { t: "URS, risk & RTM", d: "Requirements, FMEA, traceability", a: 3, b: 4 },
      { t: "IQ / OQ / PQ", d: "Protocols, scripts, execution", a: 5, b: 6 },
      { t: "Part 11 & data integrity", d: "ALCOA+, audit trails, VSR", a: 7, b: 8 },
    ],
  },
] as const;

export const ACADEMY_PILLARS = [
  {
    letter: "A",
    t: "Taught by working engineers",
    d: "Mentors ship client work in our studio every week. You learn today’s stack, not last year’s slides.",
  },
  {
    letter: "B",
    t: "Real briefs, real reviews",
    d: "Every project goes through the same code review and QA as the products we build for clients.",
  },
  {
    letter: "C",
    t: "Graduate with proof",
    d: "A deployed portfolio and a reviewed Git history — the things hiring teams actually check.",
  },
] as const;

export const CONTACT_INTERESTS = [
  "Web platform",
  "Mobile app",
  "AI agents",
  "Product & UX design",
  "Regulated / GxP software",
  "Academy",
] as const;

// Budget bands are a starting point; adjust to match how the studio actually prices.
export const CONTACT_BUDGETS = [
  "Under ₹5L",
  "₹5L – ₹15L",
  "₹15L – ₹40L",
  "₹40L+",
  "Not sure yet",
] as const;

export const CONTACT_STEPS = [
  { t: "We reply", d: "An engineer reads your brief and replies within one working day." },
  { t: "30-minute call", d: "We talk through goals, users, risks and timelines." },
  { t: "Written plan", d: "You get scope, milestones and an estimate in writing." },
] as const;

export const BAR_HEIGHTS = [38, 52, 45, 66, 58, 72, 64, 80, 70, 88, 76, 94];
