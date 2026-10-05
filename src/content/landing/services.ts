import type { Landing } from "./types";

const SERVICES_PARENT = { name: "Services", path: "/services" };

/** Service pages, served at /services/… — India and worldwide, no single city. */
export const SERVICE_PAGES: Landing[] = [
  {
    path: "/services/product-design",
    kind: "service",
    parent: SERVICES_PARENT,
    serviceType: "UX and product design",
    crumb: "Product design",
    kicker: "Product & UX design",
    title: "Product design that makes complex software",
    titleAccent: "feel obvious.",
    metaTitle: "UI/UX Design Company in India · Product Design",
    description:
      "Product and UI/UX design from India: user research, journey maps, tested prototypes and a design system your developers can build from, by a team that codes.",
    keywords: [
      "UI/UX design company India",
      "product design agency India",
      "UX design services",
      "SaaS product design",
      "mobile app UI design",
      "design system agency",
      "UX research and prototyping",
    ],
    lead: "Research, flows and interfaces for SaaS products, portals and apps — tested with real users before a single production screen is coded.",
    answer:
      "Bright Infonet is a product and UI/UX design studio based in India. We interview your users, map their journeys and test clickable prototypes with real people before production code starts. You leave with validated flows and a Figma design system your developers can build from, made by a team that also writes the code.",
    about: [
      "Good product design is mostly about removing doubt: what the user should do next, what a screen is for, what happens when something goes wrong. We get there by watching real users try real tasks, not by polishing mock-ups in isolation.",
      "Our designers sit in the same small team as the engineers, so every flow is checked against what is practical to build, and every component in the design system maps to a component in code. That keeps handoff short and avoids the “looks great, can’t ship it” gap.",
      "We design for clients across India and worldwide, and for teams near Panchkula, Mohali or Chandigarh we can run research sessions and workshops in person. Everything else happens in shared Figma files and weekly reviews you can join.",
    ],
    facts: [
      { k: "Typical length", v: "2–6 weeks" },
      { k: "Tools", v: "Figma · design tokens" },
      { k: "Testing", v: "With real users" },
      { k: "Handoff", v: "Code-ready design system" },
    ],
    sections: [
      {
        id: "design-deliverables",
        kicker: "What you get",
        title: "Design work your developers",
        accent: "can build from.",
        cards: [
          {
            t: "User research",
            d: "Short interviews and task walk-throughs with the people who will actually use the product, summarised into clear findings.",
          },
          {
            t: "Journey maps",
            d: "The end-to-end path for each role, with the pain points and decisions that shape the product scope.",
          },
          {
            t: "Information architecture",
            d: "Navigation, naming and screen structure that match how users think about the work, not how the database is organised.",
          },
          {
            t: "Clickable prototypes",
            d: "Realistic flows in Figma that stakeholders and users can click through before anything is committed to code.",
          },
          {
            t: "Usability test reports",
            d: "What users struggled with, what we changed and what we would test next — written up, not just remembered.",
          },
          {
            t: "Design system",
            d: "Tokens, components and states documented so front-end work stays consistent as the product grows.",
          },
        ],
      },
      {
        id: "design-use-cases",
        kicker: "Where it helps",
        title: "Design for products that are",
        accent: "hard to get right.",
        cards: [
          {
            t: "New product ideas",
            d: "Turn a rough concept into a scoped, tested first release before you commit a development budget.",
          },
          {
            t: "SaaS dashboards",
            d: "Dense data, filters and roles arranged so busy users find what they need in seconds.",
          },
          {
            t: "Mobile apps",
            d: "Thumb-friendly flows for booking, ordering and field work, designed for small screens and weak networks.",
          },
          {
            t: "Redesigns",
            d: "Fix the steps where users drop off or call support, without throwing away what already works.",
          },
          {
            t: "Regulated workflows",
            d: "Review, sign and approve screens for lab and pharma systems that stay clear under audit pressure.",
          },
          {
            t: "AI features",
            d: "Interfaces that show what an AI agent did, why, and where a human needs to confirm it.",
          },
        ],
      },
    ],
    fit: [
      "You have a product idea and want it shaped and tested before anyone writes code.",
      "Your product works, but users get lost, give up or keep asking support how to use it.",
      "Your developers need a design system they can actually build from, not a folder of static screens.",
      "You want designers who understand engineering limits and can stay on through the build.",
    ],
    faqs: [
      {
        q: "What does a UI/UX design company do?",
        a: "It researches how users work, designs the flows and screens of a product, and tests them before development. With us you also get a design system your developers can build from directly.",
      },
      {
        q: "How long does product design take?",
        a: "Most design engagements run two to six weeks, depending on the number of user roles and flows. We agree the scope and timeline in writing after a short discovery call.",
      },
      {
        q: "Do you test designs with real users?",
        a: "Yes. We run usability sessions with people who match your actual users, and change the prototype based on what we see before handing it over.",
      },
      {
        q: "Can you design and also build the product?",
        a: "Yes. The same team can take the design into a web platform or Flutter mobile app, which avoids a handoff between separate agencies.",
      },
      {
        q: "Do you redesign existing apps and websites?",
        a: "Yes. We start by finding where users struggle today, then redesign those parts first so improvements ship in steps rather than as one risky relaunch.",
      },
      {
        q: "Which design tools do you use?",
        a: "We work in Figma, with shared files you can comment on, and document design tokens and components so they map cleanly to code.",
      },
    ],
    related: [
      { href: "/services/web-platforms", label: "Web platform development" },
      { href: "/services/mobile-apps", label: "Mobile app development" },
      { href: "/process", label: "How we work, week by week" },
      { href: "/work", label: "Products we have built" },
      {
        href: "/insights/mvp-development-cost-timeline",
        label: "MVP cost and timeline",
      },
      {
        href: "/web-development-company-chandigarh",
        label: "Web development in Chandigarh",
      },
    ],
  },
  {
    path: "/services/web-platforms",
    kind: "service",
    parent: SERVICES_PARENT,
    serviceType: "Web application development",
    crumb: "Web platforms",
    kicker: "Web platforms",
    title: "Web platforms that stay fast at ten users or",
    titleAccent: "ten thousand.",
    metaTitle: "Web Application Development Company in India",
    description:
      "SaaS products, customer portals and dashboards built with Next.js, Node and PostgreSQL on AWS, Azure or GCP — senior team, weekly demos, code you fully own.",
    keywords: [
      "web application development company India",
      "SaaS development company India",
      "custom web portal development",
      "Next.js development company",
      "Node.js and PostgreSQL development",
      "dashboard development services",
      "cloud web app development",
    ],
    lead: "Multi-tenant SaaS, customer portals, admin panels and internal tools — built on a modern stack and deployed to the cloud with monitoring from day one.",
    answer:
      "Bright Infonet develops web applications for businesses in India and worldwide: SaaS products, customer portals, dashboards and internal tools. We build with Next.js, Node and PostgreSQL, deploy to AWS, Azure or GCP with CI/CD and monitoring, and show working software on a live link every Friday. You own the code and cloud accounts.",
    about: [
      "A web platform usually starts as one of three things: a SaaS idea that needs a first release, a team drowning in spreadsheets and email, or an existing app that has become slow and fragile. Each needs a different first step, and we agree that step before estimating the whole build.",
      "We use a deliberately boring, well-supported stack — TypeScript, React and Next.js on the front, Node and PostgreSQL behind it — so the next developer can pick it up easily. Tenancy, roles, audit logs and billing are designed early, because they are painful to retrofit.",
      "Clients reach us from across India and abroad, with a few near our base in the Panchkula, Mohali and Chandigarh area. Wherever you are, you get repository access, a shared task board and a short written update every week.",
    ],
    facts: [
      { k: "Front end", v: "React · Next.js" },
      { k: "Back end", v: "Node · PostgreSQL" },
      { k: "Cloud", v: "AWS · Azure · GCP" },
      { k: "Delivery", v: "CI/CD + monitoring" },
    ],
    sections: [
      {
        id: "platform-deliverables",
        kicker: "What you get",
        title: "A platform built to",
        accent: "carry growth.",
        cards: [
          {
            t: "Multi-tenant architecture",
            d: "Customer data kept separate by design, with per-tenant settings, roles and limits.",
          },
          {
            t: "Admin panels",
            d: "Tools for your team to manage users, content, orders and support without asking a developer.",
          },
          {
            t: "Live dashboards",
            d: "Charts and tables that update as data changes, with filters and exports people actually use.",
          },
          {
            t: "APIs & integrations",
            d: "Clean APIs plus connections to payments, email, CRM, ERP and the other systems you already run.",
          },
          {
            t: "Auth & permissions",
            d: "Sign-in, SSO where needed, role-based access and an audit log of who changed what.",
          },
          {
            t: "Cloud & CI/CD",
            d: "Automated builds, tests and deploys to your own cloud account, with error tracking and uptime alerts.",
          },
        ],
      },
      {
        id: "platform-use-cases",
        kicker: "What we build",
        title: "Web software for",
        accent: "real operations.",
        cards: [
          {
            t: "SaaS products",
            d: "From a first paying customer to a multi-tenant product with plans, billing and usage limits.",
          },
          {
            t: "Customer portals",
            d: "Self-service accounts for orders, invoices, documents and support tickets.",
          },
          {
            t: "Internal tools",
            d: "Replace shared spreadsheets and email chains with one tool that has roles, history and reports.",
          },
          {
            t: "Marketplaces",
            d: "Listings, search, bookings and payouts between buyers and sellers.",
          },
          {
            t: "Rebuilds & rescues",
            d: "Stabilise a slow or fragile app, then replace it in stages without a risky big-bang switch.",
          },
          {
            t: "AI-enabled platforms",
            d: "Search, summaries and agents built into the product where they save users real time.",
          },
        ],
      },
    ],
    fit: [
      "You are launching a SaaS product, customer portal or marketplace and need it to scale.",
      "Your team runs on spreadsheets and email and needs one proper tool.",
      "Your current web app is slow, fragile or hard to change, and you need a safe path forward.",
      "You want senior engineers who own design, build and deployment end to end.",
    ],
    faqs: [
      {
        q: "How much does web application development cost in India?",
        a: "It depends on user roles, integrations, reporting and compliance needs. We share an itemised written estimate after a short discovery, and can phase the work so a first release fits your budget.",
      },
      {
        q: "Which tech stack do you use for web apps?",
        a: "Usually TypeScript with React and Next.js on the front end, Node on the back end and PostgreSQL for data, hosted on AWS, Azure or GCP.",
      },
      {
        q: "Can you build a multi-tenant SaaS platform?",
        a: "Yes. We design tenant isolation, roles, plans and billing from the start so customer data never leaks between accounts.",
      },
      {
        q: "How long does it take to launch a web platform?",
        a: "A focused first release typically ships in weeks to a few months, depending on scope. You see a working version on a live link every Friday along the way.",
      },
      {
        q: "Can you take over or fix an existing web app?",
        a: "Yes. We start with a code and infrastructure review, fix the most urgent risks, then improve or replace parts in stages.",
      },
      {
        q: "Who hosts and owns the web application?",
        a: "You do. We deploy to your own cloud account and you have repository access from day one.",
      },
    ],
    related: [
      {
        href: "/web-development-company-panchkula",
        label: "Web development in Panchkula",
      },
      {
        href: "/software-development-company-mohali",
        label: "Software development in Mohali",
      },
      {
        href: "/insights/custom-software-vs-saas",
        label: "Custom software vs SaaS",
      },
      {
        href: "/insights/how-to-choose-software-development-company-india",
        label: "Choosing a software company in India",
      },
      { href: "/services/product-design", label: "Product & UX design" },
      { href: "/work", label: "Products we have built" },
    ],
  },
  {
    path: "/services/mobile-apps",
    kind: "service",
    parent: SERVICES_PARENT,
    serviceType: "Mobile app development",
    crumb: "Mobile apps",
    kicker: "Mobile apps",
    title: "One codebase, a native feel on",
    titleAccent: "iOS and Android.",
    metaTitle: "Flutter Mobile App Development for iOS & Android",
    description:
      "Flutter app development for iOS and Android from one codebase: offline sync, push notifications, native modules and App Store and Play Store release included.",
    keywords: [
      "Flutter app development company India",
      "mobile app development company India",
      "cross-platform app development",
      "iOS and Android app development",
      "offline-first mobile app",
      "App Store and Play Store submission",
      "Flutter developers India",
    ],
    lead: "Customer, staff and field apps built once in Flutter and shipped to both stores — designed to keep working when the network doesn’t.",
    answer:
      "Bright Infonet builds mobile apps in Flutter, so a single codebase ships to both iOS and Android with a native look and feel. We handle design, backend, offline sync, push notifications, testing and App Store and Play Store release, and add native modules when a feature needs direct device access.",
    about: [
      "Most businesses do not need two separate native apps. Flutter lets one team write the app once and release it to both platforms together, which roughly halves the code to maintain and keeps features in step across iPhone and Android.",
      "The hard parts of mobile are rarely the screens. They are sync when the connection drops, notifications people act on, sign-in that doesn’t annoy, and store reviews that pass first time. We plan for those from the first sprint rather than at the end.",
      "We build for clients across India and worldwide, including teams in and around Panchkula, Mohali and Chandigarh. Test builds reach your phone through TestFlight and Play testing tracks, so you can try progress every week wherever you are.",
    ],
    facts: [
      { k: "Framework", v: "Flutter · Dart" },
      { k: "Platforms", v: "iOS + Android" },
      { k: "Offline", v: "Local store + sync" },
      { k: "Release", v: "Both app stores" },
    ],
    sections: [
      {
        id: "app-deliverables",
        kicker: "What you get",
        title: "Everything it takes to",
        accent: "reach the store.",
        cards: [
          {
            t: "Flutter app",
            d: "One Dart codebase for iOS and Android, with platform-appropriate navigation, fonts and gestures.",
          },
          {
            t: "Offline sync",
            d: "Data saved on the device first and synced safely when the network returns, with conflict handling.",
          },
          {
            t: "Push notifications",
            d: "Reminders, status updates and alerts, segmented so users get the ones that matter to them.",
          },
          {
            t: "Backend & admin",
            d: "The API, database and admin panel that power the app, built by the same team.",
          },
          {
            t: "Native modules",
            d: "Camera, Bluetooth, maps, payments or biometrics bridged natively where a plugin isn’t enough.",
          },
          {
            t: "Store release",
            d: "Listings, screenshots, privacy details and submission under your own developer accounts.",
          },
        ],
      },
      {
        id: "app-release-cycle",
        kicker: "How it runs",
        title: "A release train for",
        accent: "both platforms.",
        cards: [
          {
            t: "Scope the first release",
            d: "Pick the smallest set of features that proves the app’s value and can reach the stores quickly.",
          },
          {
            t: "Prototype on a phone",
            d: "Clickable flows tested on real devices before production code, so layout issues surface early.",
          },
          {
            t: "Weekly test builds",
            d: "A new build through TestFlight and Play testing every Friday, with notes on what changed.",
          },
          {
            t: "Device testing",
            d: "Checks across screen sizes, OS versions and slow networks, plus automated widget and integration tests.",
          },
          {
            t: "Staged rollout",
            d: "Phased store releases with crash reporting and analytics, so problems are caught on a small group first.",
          },
          {
            t: "OS-update upkeep",
            d: "Yearly iOS and Android changes, SDK updates and store policy changes handled under a support plan.",
          },
        ],
      },
    ],
    fit: [
      "Customers need to book, order, pay or track from their phone.",
      "Field teams need an app that keeps working without a network and syncs later.",
      "You have two ageing native apps and want to move to one maintainable codebase.",
      "You want design, backend and store release handled by one accountable team.",
    ],
    faqs: [
      {
        q: "Is Flutter good for business apps?",
        a: "For most business apps, yes. It gives near-native performance and one codebase for iOS and Android; we add native modules where a device feature needs them.",
      },
      {
        q: "Can a Flutter app work offline?",
        a: "Yes. We store data on the device and sync it with the server when the connection returns, including handling edits made on two devices at once.",
      },
      {
        q: "Do you publish apps to the App Store and Play Store?",
        a: "Yes. We prepare listings and privacy details and submit under your own developer accounts, so the apps stay yours.",
      },
      {
        q: "How much does it cost to build an iOS and Android app?",
        a: "It varies with features, integrations and offline needs. Building once in Flutter usually costs less than two native apps; we give a written estimate after discovery.",
      },
      {
        q: "Can you migrate our native apps to Flutter?",
        a: "Yes. We usually rebuild in stages, starting with the most-used flows, while the existing apps keep running until the new one is ready.",
      },
      {
        q: "Do you maintain mobile apps after launch?",
        a: "Yes. Support plans cover yearly OS updates, SDK and store policy changes, fixes and new features.",
      },
    ],
    related: [
      {
        href: "/mobile-app-development-chandigarh",
        label: "App development in Chandigarh",
      },
      {
        href: "/mobile-app-development-mohali",
        label: "App development in Mohali",
      },
      {
        href: "/hire-flutter-developers-india",
        label: "Hire Flutter developers in India",
      },
      {
        href: "/insights/flutter-vs-native-app-development",
        label: "Flutter vs React Native vs native",
      },
      {
        href: "/insights/app-development-cost-india",
        label: "App development cost in India",
      },
      {
        href: "/tools/app-development-cost-calculator",
        label: "App development cost calculator",
      },
      {
        href: "/insights/outsourcing-app-development-to-india",
        label: "Outsourcing app development to India",
      },
    ],
  },
  {
    path: "/services/ai-agents",
    kind: "service",
    parent: SERVICES_PARENT,
    serviceType: "AI agent development",
    crumb: "AI agents",
    kicker: "AI agents & automation",
    title: "AI agents that don’t just chat —",
    titleAccent: "they finish the work.",
    metaTitle: "AI Agent Development Company · LLMs, RAG & Evals",
    description:
      "AI agents that read, decide and act inside your tools: LLMs, RAG over your documents, tool use, eval suites, human approval for risky steps and cost monitoring.",
    keywords: [
      "AI agent development company",
      "AI agent development India",
      "LLM application development",
      "RAG development services",
      "AI automation for business",
      "custom AI assistant development",
      "LLM evaluation and monitoring",
    ],
    lead: "Assistants wired into your inbox, CRM, documents and internal systems — tested against real past work, with a human approving anything risky.",
    answer:
      "Bright Infonet builds AI agents that do real work inside your systems: reading emails and documents, looking up answers with RAG, updating tools like your CRM or calendar, and asking a person before risky actions. Every agent ships with an eval suite built from your real cases and monitoring for cost, accuracy and failures.",
    about: [
      "An agent is only useful if you can trust what it does. So we start from a narrow, repetitive task — triaging tickets, extracting data from documents, drafting replies — and measure how well the agent handles real past examples before it touches live work.",
      "Under the hood we combine LLM APIs with retrieval over your own documents and tool calls into the systems you already use. Guardrails limit what the agent may do, risky steps wait for human approval, and every action is logged so you can see why it happened.",
      "We work with teams across India and worldwide, and with businesses near Panchkula, Mohali and Chandigarh who prefer to map workflows face to face. A pilot on real data usually runs in weeks, not months.",
    ],
    facts: [
      { k: "Pilot", v: "Real data, in weeks" },
      { k: "Core", v: "LLMs · RAG · tool use" },
      { k: "Quality", v: "Eval suites" },
      { k: "Control", v: "Human approval" },
    ],
    sections: [
      {
        id: "agent-deliverables",
        kicker: "What you get",
        title: "An agent you can",
        accent: "measure and trust.",
        cards: [
          {
            t: "Workflow map",
            d: "The task broken into steps, with what the agent may do alone and what needs a person.",
          },
          {
            t: "RAG over your documents",
            d: "Manuals, SOPs, policies and past tickets indexed so answers cite the source they came from.",
          },
          {
            t: "Tool integrations",
            d: "Secure connections to email, calendar, CRM, helpdesk, Slack or your own APIs.",
          },
          {
            t: "Eval suite",
            d: "A test set built from real past cases, run on every change so accuracy never silently drops.",
          },
          {
            t: "Human approval",
            d: "Review screens for risky or unusual actions, with the agent’s reasoning and sources shown.",
          },
          {
            t: "Cost & quality monitoring",
            d: "Dashboards for token spend, latency, error rates and eval scores, with alerts when they drift.",
          },
        ],
      },
      {
        id: "agent-use-cases",
        kicker: "Where agents help",
        title: "Hours of busywork,",
        accent: "handed off.",
        cards: [
          {
            t: "Inbox triage",
            d: "Sort, summarise and route incoming emails, and draft replies for a person to send.",
          },
          {
            t: "Document extraction",
            d: "Pull fields from invoices, forms, reports or case files into structured records.",
          },
          {
            t: "Knowledge assistant",
            d: "Staff ask questions in plain language and get answers from your own documents, with citations.",
          },
          {
            t: "Support deflection",
            d: "Answer routine customer questions and hand complex ones to your team with context attached.",
          },
          {
            t: "Data entry between tools",
            d: "Move information between systems that don’t talk to each other, with a log of every change.",
          },
          {
            t: "Case pre-review",
            d: "Read each case first and pre-fill fields, as we do in PVgenix, so reviewers never start from zero.",
          },
        ],
      },
    ],
    fit: [
      "People on your team spend hours on inboxes, tickets or documents every day.",
      "Answers are buried in manuals, SOPs and policies that staff struggle to search.",
      "Staff copy the same data between tools that don’t integrate.",
      "You want AI that is tested and monitored, not a demo that breaks on real inputs.",
    ],
    faqs: [
      {
        q: "What is an AI agent for business?",
        a: "It is software that uses a language model to read information, decide the next step and act in your tools — such as updating a CRM or drafting a reply — within limits you set.",
      },
      {
        q: "How do you stop an AI agent from making mistakes?",
        a: "We test it against real past cases with an eval suite, restrict which actions it can take, and require human approval for risky steps. Monitoring flags drops in quality.",
      },
      {
        q: "What is RAG and do I need it?",
        a: "Retrieval-augmented generation lets the model answer from your own documents instead of its general training. You need it when answers must match your policies, products or records.",
      },
      {
        q: "How much does it cost to run an AI agent?",
        a: "Running cost depends mostly on volume and model choice. We estimate it during the pilot and track token spend on a dashboard so there are no surprises.",
      },
      {
        q: "Is our data safe with an AI agent?",
        a: "We use provider settings that exclude your data from model training where available, limit access by role, and keep logs of what the agent read and did.",
      },
      {
        q: "How long does an AI agent pilot take?",
        a: "A focused pilot on real data usually takes a few weeks, ending with eval results you can use to decide whether to roll it out.",
      },
    ],
    related: [
      {
        href: "/ai-development-company-chandigarh",
        label: "AI development in Chandigarh",
      },
      {
        href: "/insights/ai-agents-for-business-operations",
        label: "AI agents: where they work and fail",
      },
      {
        href: "/insights/how-to-choose-ai-development-company-india",
        label: "Choosing an AI development company",
      },
      { href: "/services/web-platforms", label: "Web platform development" },
      { href: "/work", label: "Products we have built" },
      {
        href: "/academy/ai-agents-course",
        label: "Applied AI & Agents course",
      },
    ],
  },
  {
    path: "/services/regulated-software",
    kind: "service",
    parent: SERVICES_PARENT,
    serviceType: "GxP regulated software development",
    crumb: "Regulated software",
    kicker: "Regulated software · GxP",
    title: "Software built for the audit",
    titleAccent: "from day one.",
    metaTitle: "GxP Software Development · LIMS, Part 11, GAMP 5",
    description:
      "LIMS, pharmacovigilance and GxP software with audit trails, e-signatures and a GAMP 5 validation pack, built for 21 CFR Part 11 and EU Annex 11 expectations.",
    keywords: [
      "GxP software development",
      "LIMS software development company",
      "pharmacovigilance software development",
      "21 CFR Part 11 compliant software",
      "EU Annex 11 software",
      "GAMP 5 validation services",
      "computer system validation software",
    ],
    lead: "LIMS, drug-safety and QA systems for pharma, QC and diagnostic labs — with audit trails, e-signatures and validation documents delivered alongside the code.",
    answer:
      "Bright Infonet’s regulated software service is the umbrella for all our GxP work: LIMS, pharmacovigilance, QA workflows and computer system validation. Audit trails, e-signatures, access control and record locking are built in for 21 CFR Part 11 and EU Annex 11, with a GAMP 5 validation pack. Final sign-off stays with your QA team.",
    about: [
      "In regulated work, the software is only half the deliverable. Inspectors want evidence: who changed a record, when, why, and who approved it. We design those controls into the data model from the first sprint, rather than bolting them on before go-live.",
      "Alongside the code we write the validation documents — URS, risk assessment, traceability matrix, IQ/OQ/PQ protocols and a summary report — following a risk-based GAMP 5 approach. Your QA team reviews, executes where required and signs off; approval of the validated state always stays with you.",
      "We have built PVgenix, a pharmacovigilance SaaS, and a LIMS for NABL/ISO 15189 and pharma QC labs. We support companies across India and worldwide, including labs and pharma units around Panchkula, Mohali and Chandigarh.",
      "This page gives the overview. If you already know which system you need, the specialist pages go deeper: LIMS software development for QC, R&D and stability labs; pharmacovigilance software for case processing and E2B(R3) reporting; and computer system validation for any GxP system, including software from other vendors.",
    ],
    facts: [
      { k: "Approach", v: "GAMP 5, risk-based" },
      { k: "Records", v: "Part 11 · Annex 11" },
      { k: "Integrity", v: "ALCOA+" },
      { k: "Sign-off", v: "Your QA team" },
    ],
    sections: [
      {
        id: "gxp-deliverables",
        kicker: "What you get",
        title: "Controls and evidence,",
        accent: "delivered together.",
        cards: [
          {
            t: "Audit trails",
            d: "Secure, time-stamped records of every create, change and delete, with the old value, new value and reason.",
          },
          {
            t: "Electronic signatures",
            d: "Signatures linked to their records, with meaning, date and signer identity, per Part 11 expectations.",
          },
          {
            t: "Access & record locking",
            d: "Role-based permissions, segregation of duties and locking of approved records against edits.",
          },
          {
            t: "Validation pack",
            d: "URS, risk assessment, traceability matrix, IQ/OQ/PQ protocols and a validation summary report.",
          },
          {
            t: "Change control",
            d: "Documented releases with impact assessment, so updates don’t quietly break the validated state.",
          },
          {
            t: "Instrument & data capture",
            d: "Results captured from lab instruments and files, not retyped, to reduce transcription errors.",
          },
        ],
      },
      {
        id: "gxp-systems",
        kicker: "Systems we build",
        title: "For work that has to",
        accent: "pass inspection.",
        cards: [
          {
            t: "LIMS",
            d: "Sample registration to signed report for NABL/ISO 15189 diagnostic labs and pharma QC labs.",
          },
          {
            t: "Pharmacovigilance",
            d: "Case intake, coding and regulatory reporting, with AI pre-reading each case, as in PVgenix.",
          },
          {
            t: "QA & document workflows",
            d: "Deviations, CAPA, SOP review and approvals with full history and e-signatures.",
          },
          {
            t: "Validated web platforms",
            d: "Custom GxP portals and tools built on the same stack as our other platforms, with validation added.",
          },
          {
            t: "Legacy remediation",
            d: "Gap assessment of an existing system and the fixes and documents to bring it into a validated state.",
          },
          {
            t: "Paper-to-digital moves",
            d: "Replace paper logbooks and spreadsheets with controlled electronic records.",
          },
        ],
      },
    ],
    fit: [
      "A pharma, QC or diagnostic lab is moving off paper and spreadsheets.",
      "Your system has to hold up in audits and regulatory inspections.",
      "An existing system needs to be assessed and brought into a validated state.",
      "You want the validation documents written by the people who built the software.",
    ],
    faqs: [
      {
        q: "What is GxP software development?",
        a: "It is building software used in regulated life-science work, where records must be accurate, traceable and controlled, and the system must be validated for its intended use.",
      },
      {
        q: "Is your software 21 CFR Part 11 compliant?",
        a: "We build the technical controls Part 11 expects — audit trails, e-signatures, access control and record protection. Compliance also depends on your procedures and validation, which your QA team owns.",
      },
      {
        q: "What is included in a GAMP 5 validation pack?",
        a: "Typically a URS, risk assessment, traceability matrix, IQ/OQ/PQ protocols and a validation summary report, scaled to the system’s risk.",
      },
      {
        q: "Who signs off software validation?",
        a: "Your QA team. We prepare the documents and support execution, but approval of the validated state stays with the regulated company.",
      },
      {
        q: "Can you build a custom LIMS for our lab?",
        a: "Yes. We have built a LIMS for NABL/ISO 15189 diagnostic labs and pharma QC labs, and adapt workflows, instruments and reports to your lab.",
      },
      {
        q: "Does EU Annex 11 differ from 21 CFR Part 11?",
        a: "They overlap heavily on audit trails, signatures and data integrity. Annex 11 adds more emphasis on risk management, supplier oversight and periodic review; we design for both.",
      },
    ],
    related: [
      {
        href: "/services/lims-software-development",
        label: "LIMS software development",
      },
      {
        href: "/services/pharmacovigilance-software",
        label: "Pharmacovigilance software",
      },
      {
        href: "/services/computer-system-validation",
        label: "Computer system validation (CSV/CSA)",
      },
      {
        href: "/gxp-software-development-india",
        label: "GxP software development in India",
      },
      {
        href: "/insights/gamp-5-software-validation-guide",
        label: "GAMP 5 validation, explained",
      },
      {
        href: "/insights/21-cfr-part-11-compliance-checklist-lims",
        label: "Part 11 checklist for LIMS",
      },
      {
        href: "/insights/lims-software-development-cost-india",
        label: "LIMS development cost in India",
      },
      {
        href: "/insights/pharmacovigilance-software-build-vs-buy",
        label: "Pharmacovigilance software: build or buy",
      },
      {
        href: "/academy/software-validation-gamp5-course",
        label: "Software Validation course",
      },
    ],
  },
  {
    path: "/services/lims-software-development",
    kind: "service",
    parent: SERVICES_PARENT,
    serviceType: "LIMS software development",
    crumb: "LIMS development",
    kicker: "Regulated software · LIMS",
    title: "A LIMS built around your lab,",
    titleAccent: "not the other way round.",
    metaTitle: "LIMS Software Development · Part 11 & GAMP 5",
    description:
      "Custom LIMS for pharma QC, R&D and stability labs: sample lifecycle, instrument integration, CoA generation and Part 11 controls, delivered with a GAMP 5 pack.",
    keywords: [
      "LIMS software development",
      "custom LIMS development company",
      "pharma QC LIMS",
      "LIMS for stability studies",
      "21 CFR Part 11 LIMS",
      "GAMP 5 LIMS validation",
      "LIMS development India",
    ],
    lead: "Laboratory information management for pharma QC, R&D and stability labs — samples, methods, instruments and certificates in one validated system.",
    answer:
      "Bright Infonet is a Panchkula-based software company that builds LIMS and pharmacovigilance software for 21 CFR Part 11, validated with a GAMP 5 approach. Our custom LIMS covers the full sample lifecycle, stability studies, instrument integration and certificates of analysis, with audit trails, e-signatures and a validation pack delivered alongside the code.",
    about: [
      "Off-the-shelf LIMS products are built for an average lab. Many QC and R&D labs end up configuring around them for months, or keep critical steps on paper because the product does not fit. A custom LIMS starts from your methods, specifications and approval chain instead, and models them directly.",
      "We build the LIMS around the life of a sample: login against a specification, allocation to analysts and instruments, result entry or capture, calculations, review, approval and the certificate of analysis. Stability studies add protocols, storage conditions and pull schedules; out-of-specification results open an investigation rather than being overwritten.",
      "The validation work runs in parallel. URS, risk assessment, design specifications, traceability matrix and IQ/OQ/PQ protocols are written by the people building the system, and your QA reviews and approves them. We have built a LIMS for pharma QC and NABL diagnostic labs, described on our work page.",
    ],
    facts: [
      { k: "Labs", v: "QC · R&D · Stability" },
      { k: "Records", v: "Part 11 · Annex 11" },
      { k: "Validation", v: "GAMP 5 pack" },
      { k: "Output", v: "Signed CoA" },
    ],
    sections: [
      {
        id: "lims-modules",
        kicker: "What the LIMS covers",
        title: "Every step a sample",
        accent: "goes through.",
        cards: [
          {
            t: "Sample lifecycle",
            d: "Login, labelling, receipt, allocation, testing, review, approval, retention and disposal with status at every step.",
          },
          {
            t: "Specifications & methods",
            d: "Versioned specifications, test methods and limits, so results are always checked against the approved version.",
          },
          {
            t: "Stability studies",
            d: "Protocols, storage conditions, pull schedules and trend charts across time points and batches.",
          },
          {
            t: "Instrument integration",
            d: "Results captured from instruments, chromatography data systems or exported files, with the raw data linked.",
          },
          {
            t: "OOS & investigations",
            d: "Out-of-specification and out-of-trend results trigger a tracked investigation instead of a silent retest.",
          },
          {
            t: "Certificate of analysis",
            d: "CoAs generated from approved results only, signed electronically and released to the right customer or batch.",
          },
        ],
      },
      {
        id: "lims-controls",
        kicker: "Part 11 controls",
        title: "Data integrity your QA",
        accent: "can demonstrate.",
        cards: [
          {
            t: "Secure audit trail",
            d: "Each result, sample status and specification edit is logged automatically with user, timestamp and a mandatory reason.",
          },
          {
            t: "Electronic signatures",
            d: "Review and approval signatures linked to the record, with the meaning of each signature shown.",
          },
          {
            t: "Access by role",
            d: "Analyst, reviewer, approver and administrator rights kept separate, with periodic access reviews supported.",
          },
          {
            t: "Calculations under control",
            d: "Formulas defined and verified in the system, not in uncontrolled spreadsheets beside it.",
          },
          {
            t: "Reagents & standards",
            d: "Lots, expiry dates and preparation records linked to the tests that used them.",
          },
          {
            t: "Validation pack",
            d: "URS, risk assessment, specifications, traceability matrix, IQ/OQ/PQ protocols and a draft summary report.",
          },
        ],
      },
    ],
    fit: [
      "Your QC or R&D lab still runs on paper logbooks, Excel and manual CoAs.",
      "A commercial LIMS was quoted but needs too much configuration or too many workarounds for your methods.",
      "Stability studies are tracked in spreadsheets and pull dates get missed.",
      "Your QA wants the validation documents written alongside the system, not after it.",
    ],
    faqs: [
      {
        q: "What is a LIMS used for in pharma?",
        a: "A laboratory information management system tracks samples, tests, results and approvals in QC and R&D labs. In pharma it also provides the audit trail, e-signatures and certificates of analysis that regulators expect.",
      },
      {
        q: "Is a custom LIMS better than an off-the-shelf LIMS?",
        a: "Not always. Off-the-shelf suits labs whose workflow matches the product; custom suits labs with unusual methods, integrations or approval chains. We give an honest recommendation after looking at your process.",
      },
      {
        q: "Can the LIMS meet 21 CFR Part 11?",
        a: "The LIMS provides the controls Part 11 describes for lab records, such as secure audit trails, signature manifestation and unique user logins. Whether your use of it complies also depends on your SOPs, training and validation, which your QA approves.",
      },
      {
        q: "Which instruments can you integrate with the LIMS?",
        a: "It depends on what each instrument or data system can output, such as files, a database or an interface. We confirm the method for each instrument during discovery.",
      },
      {
        q: "How long does it take to build and validate a LIMS?",
        a: "It depends on the number of labs, modules and instruments. We usually deliver in phases, starting with the sample lifecycle and CoA, and agree the timeline in writing after discovery.",
      },
      {
        q: "Do you provide the GAMP 5 validation documents?",
        a: "Yes. We prepare the URS, risk assessment, specifications, traceability matrix, IQ/OQ/PQ protocols and a draft validation summary report. Your QA reviews, executes where required and signs off.",
      },
    ],
    related: [
      { href: "/industries/pharma-software", label: "Software for pharma" },
      {
        href: "/industries/diagnostic-lab-software",
        label: "Diagnostic lab software",
      },
      {
        href: "/services/computer-system-validation",
        label: "Computer system validation",
      },
      {
        href: "/insights/lims-software-development-cost-india",
        label: "LIMS development cost in India",
      },
      {
        href: "/insights/21-cfr-part-11-compliance-checklist-lims",
        label: "Part 11 checklist for LIMS",
      },
      { href: "/insights/lims-urs-template#download", label: "Free LIMS URS template" },
      { href: "/work", label: "Our LIMS and PVgenix" },
    ],
  },
  {
    path: "/services/pharmacovigilance-software",
    kind: "service",
    parent: SERVICES_PARENT,
    serviceType: "Pharmacovigilance software development",
    crumb: "Pharmacovigilance software",
    kicker: "Regulated software · Drug safety",
    title: "Pharmacovigilance software that keeps",
    titleAccent: "every deadline visible.",
    metaTitle: "Pharmacovigilance Software · E2B(R3) & MedDRA",
    description:
      "Pharmacovigilance software for case intake, MedDRA coding, E2B(R3) ICSR submissions and signal management, with Part 11 audit trails and AI-assisted case entry.",
    keywords: [
      "pharmacovigilance software development",
      "drug safety software",
      "E2B R3 software",
      "ICSR case management software",
      "MedDRA coding software",
      "signal management software",
      "PV software India",
    ],
    lead: "Drug-safety case management for marketing authorisation holders, CROs and PV service providers — from the first report to the regulatory submission.",
    answer:
      "Bright Infonet is a Panchkula-based software company that builds pharmacovigilance software: case intake from email, forms and literature, MedDRA coding, medical review, E2B(R3) ICSR generation and submission, and signal management. Part 11 audit trails and e-signatures are built in, and AI can pre-read each case so safety staff review instead of retyping.",
    about: [
      "Pharmacovigilance is a race against regulatory clocks. Every adverse event report has to be received, checked for validity, coded, assessed and, where required, submitted within a fixed number of days. When cases arrive in inboxes, PDFs and spreadsheets, staff spend their time copying data rather than assessing it.",
      "Our PV software brings intake into one queue, tracks the due date of every case from day zero, and moves it through data entry, MedDRA coding, quality check, medical review and submission. Cases are exported as E2B(R3) ICSR files for the gateways and partners you report to, and periodic data is ready for aggregate reports.",
      "We know this domain because we built PVgenix, our pharmacovigilance SaaS, where AI pre-reads each incoming case and pre-fills the fields for a person to confirm. You can see it described on our work page. For your own system, we reuse that experience in a build shaped around your SOPs.",
    ],
    facts: [
      { k: "Standard", v: "ICH E2B(R3)" },
      { k: "Coding", v: "MedDRA (your licence)" },
      { k: "Records", v: "Part 11 audit trail" },
      { k: "AI", v: "Pre-read, human-confirmed" },
    ],
    sections: [
      {
        id: "pv-workflow",
        kicker: "Case workflow",
        title: "From first report",
        accent: "to submission.",
        cards: [
          {
            t: "Multi-channel intake",
            d: "Cases from email, web forms, call notes, partners and literature collected into one queue with duplicate checks.",
          },
          {
            t: "Validity & triage",
            d: "Minimum criteria checked, seriousness and expectedness assessed, and the reporting clock started on day zero.",
          },
          {
            t: "MedDRA coding",
            d: "Events and indications coded with your licensed MedDRA version, and products against your product dictionary.",
          },
          {
            t: "QC and medical review",
            d: "Second-person data checks and medical assessment with causality, narrative and electronic sign-off.",
          },
          {
            t: "E2B(R3) submission",
            d: "ICSR XML generated and validated against the E2B(R3) format, with acknowledgements tracked per receiver.",
          },
          {
            t: "Follow-ups",
            d: "Follow-up information versioned against the original case, with resubmission when the changes require it.",
          },
        ],
      },
      {
        id: "pv-oversight",
        kicker: "Oversight",
        title: "Compliance you can",
        accent: "see at a glance.",
        cards: [
          {
            t: "Due-date dashboard",
            d: "Every open case with its regulatory deadline, so late submissions are prevented rather than explained.",
          },
          {
            t: "Signal management",
            d: "Case series, disproportionality views and a tracked process for validating, prioritising and closing signals.",
          },
          {
            t: "Aggregate report data",
            d: "Line listings and summary tabulations for periodic reports, drawn from the same validated case data.",
          },
          {
            t: "Audit trail & signatures",
            d: "Every change to a case recorded with user, time and reason, and approvals signed electronically.",
          },
          {
            t: "AI with a human check",
            d: "AI suggests fields and codes from source documents; a qualified person confirms every suggestion.",
          },
          {
            t: "Partner exchange",
            d: "Case exchange with licensing partners and service providers under the timelines in your agreements.",
          },
        ],
      },
    ],
    fit: [
      "Your safety team tracks cases in spreadsheets and email and worries about missed deadlines.",
      "You are a PV service provider handling several clients and need one controlled system.",
      "A commercial safety database is too expensive or too heavy for your case volume.",
      "You want AI to speed up case entry without removing human review.",
    ],
    faqs: [
      {
        q: "What does pharmacovigilance software do?",
        a: "It manages individual case safety reports from intake to regulatory submission: validity checks, coding, assessment, reporting deadlines, E2B files and audit trails. Many systems also support signal detection and aggregate reports.",
      },
      {
        q: "What is E2B(R3)?",
        a: "E2B(R3) is the ICH standard for exchanging individual case safety reports electronically. Regulators such as the FDA and EMA accept ICSRs in this format through their gateways.",
      },
      {
        q: "Do we need our own MedDRA licence?",
        a: "Yes. MedDRA is licensed through its maintenance organisation, so the subscription stays with your company. The software loads the version you are licensed for and handles version upgrades.",
      },
      {
        q: "Can AI be used in pharmacovigilance case processing?",
        a: "Yes, as an assistant. AI can read source documents and suggest case fields and codes, but a qualified person must review and confirm, and the system must log what the AI suggested.",
      },
      {
        q: "Should we build pharmacovigilance software or buy it?",
        a: "Buy when a commercial safety database fits your volume and budget; build when your process, partners or cost structure do not fit. Our build-or-buy guide walks through the trade-offs.",
      },
      {
        q: "Is the system validated?",
        a: "We deliver it with a GAMP 5 validation pack and Part 11 controls. Your QA reviews, executes where required and approves the validated state.",
      },
    ],
    related: [
      { href: "/industries/pharma-software", label: "Software for pharma" },
      {
        href: "/insights/pharmacovigilance-software-build-vs-buy",
        label: "Pharmacovigilance software: build or buy",
      },
      {
        href: "/services/computer-system-validation",
        label: "Computer system validation",
      },
      { href: "/services/ai-agents", label: "AI agents for case intake" },
      { href: "/work", label: "PVgenix on our work page" },
      {
        href: "/services/regulated-software",
        label: "All regulated software services",
      },
    ],
  },
  {
    path: "/services/computer-system-validation",
    kind: "service",
    parent: SERVICES_PARENT,
    serviceType: "Computer system validation",
    crumb: "Computer system validation",
    kicker: "Regulated software · CSV / CSA",
    title: "Validation for any GxP system,",
    titleAccent: "ours or a vendor’s.",
    metaTitle: "Computer System Validation Services · CSV & CSA",
    description:
      "Computer system validation as a service for any GxP system: URS to VSR deliverables, CSA-style risk-based testing, vendor assessment and periodic review.",
    keywords: [
      "computer system validation services",
      "CSV services India",
      "computer software assurance services",
      "GxP system validation",
      "LIMS validation services",
      "periodic review computerised systems",
      "validation consultant pharma",
    ],
    lead: "Validation for systems you already run or are about to buy — commercial LIMS, QMS, ERP modules, chromatography data systems and GxP spreadsheets.",
    answer:
      "Bright Infonet is a Panchkula-based software company that provides computer system validation as a service for any GxP system, including third-party software. We plan and write the deliverables from URS to validation summary report, apply CSA-style risk-based testing, assess suppliers and run periodic reviews. Your QA approves every document and the validated state.",
    about: [
      "Most systems that need validation were not built by the team validating them. A lab buys a commercial LIMS, a plant extends its ERP, quality adopts a new QMS tool, or an analyst builds a spreadsheet that now feeds batch release. Each one is a computerised system under GxP and needs evidence that it is fit for its intended use.",
      "We run validation as a project of its own. We start with a validation plan and an inventory of what the system does, classify it under GAMP 5, assess risk per function, and then focus testing where patient safety, product quality and data integrity are at stake. Low-risk functions get lighter, unscripted assurance, in line with FDA’s Computer Software Assurance thinking.",
      "Because we also build regulated software, our testers understand how audit trails, signatures and interfaces are implemented, and where they tend to break. After go-live, we can support change control and periodic reviews so the system stays in a validated state rather than drifting out of it.",
    ],
    facts: [
      { k: "Scope", v: "Any GxP system" },
      { k: "Approach", v: "GAMP 5 · CSA" },
      { k: "Lifecycle", v: "URS → VSR → review" },
      { k: "Approval", v: "Your QA team" },
    ],
    sections: [
      {
        id: "csv-deliverables",
        kicker: "Deliverables",
        title: "The validation file,",
        accent: "end to end.",
        cards: [
          {
            t: "Validation plan",
            d: "Scope, system description, GAMP category, roles, deliverables and acceptance criteria agreed up front.",
          },
          {
            t: "URS",
            d: "User requirements written with process owners, each one specific, testable and traceable.",
          },
          {
            t: "Supplier assessment",
            d: "Questionnaire or audit of the software vendor, so you can rely on their testing where it is justified.",
          },
          {
            t: "Risk assessment",
            d: "Function-level risk scoring that decides where scripted testing is needed and where lighter assurance is enough.",
          },
          {
            t: "IQ / OQ / PQ",
            d: "Installation, operational and performance qualification protocols, executed with evidence and deviations recorded.",
          },
          {
            t: "Trace matrix & VSR",
            d: "Requirements traced to tests, and a validation summary report drafted for your QA to approve.",
          },
        ],
      },
      {
        id: "csv-services",
        kicker: "Validation services",
        title: "Where validation",
        accent: "usually stalls.",
        cards: [
          {
            t: "New system validation",
            d: "Validation of a commercial or custom system before go-live, planned alongside the implementation timeline.",
          },
          {
            t: "Legacy remediation",
            d: "Gap assessment of a system already in use, then the documents and tests needed to close the gaps.",
          },
          {
            t: "GxP spreadsheet validation",
            d: "Locked templates, verified formulas and controlled versions for spreadsheets used in GxP decisions.",
          },
          {
            t: "Audit trail review",
            d: "A defined process and checks for reviewing audit trails as part of routine data review.",
          },
          {
            t: "Change control support",
            d: "Impact assessments and regression testing for upgrades, patches and configuration changes.",
          },
          {
            t: "Periodic review",
            d: "Scheduled reviews of incidents, changes, access and backups that confirm the system is still in control.",
          },
        ],
      },
    ],
    fit: [
      "You bought a GxP system and the vendor’s validation package does not cover your intended use.",
      "An audit observation flagged a system as not validated or not reviewed periodically.",
      "Your QA team is stretched and needs experienced help writing and executing validation documents.",
      "You want to move from heavy scripted testing towards a risk-based CSA approach.",
    ],
    faqs: [
      {
        q: "What is computer system validation?",
        a: "Computer system validation (CSV) is documented evidence that a computerised system used in GxP work does what it is intended to do, consistently, and keeps data trustworthy. It covers planning, requirements, risk, testing, reporting and ongoing control.",
      },
      {
        q: "What is the difference between CSV and CSA?",
        a: "CSA (computer software assurance) is FDA’s risk-based way of thinking about the same goal. It puts more effort into high-risk functions and accepts lighter, unscripted testing for low-risk ones, instead of scripting everything.",
      },
      {
        q: "Can you validate software you did not build?",
        a: "Yes. Most of our validation work is for third-party systems. We assess the supplier, use their documentation where justified, and test your configuration and intended use.",
      },
      {
        q: "Which documents do you deliver?",
        a: "Typically a validation plan, URS, supplier assessment, risk assessment, configuration or functional specification, IQ/OQ/PQ protocols with executed evidence, traceability matrix and a draft validation summary report.",
      },
      {
        q: "Who approves the validation?",
        a: "Your Quality Assurance team. We prepare documents and support execution, but approval of protocols, results and the validated state stays with the regulated company.",
      },
      {
        q: "How often should a validated system be reviewed?",
        a: "At a frequency set by its risk, often yearly for critical systems. A periodic review checks changes, incidents, access, backups and audit trails since the last review.",
      },
    ],
    related: [
      {
        href: "/insights/csv-vs-csa-computer-software-assurance",
        label: "CSV vs CSA, explained",
      },
      {
        href: "/insights/gamp-5-software-validation-guide",
        label: "GAMP 5 validation guide",
      },
      {
        href: "/services/lims-software-development",
        label: "LIMS software development",
      },
      { href: "/industries/pharma-software", label: "Software for pharma" },
      {
        href: "/gxp-software-development-india",
        label: "GxP software development in India",
      },
      {
        href: "/academy/software-validation-gamp5-course",
        label: "Software Validation course",
      },
      { href: "/insights/lims-urs-template#download", label: "Free LIMS URS template" },
    ],
  },
  {
    path: "/services/saas-development-company-india",
    kind: "service",
    parent: SERVICES_PARENT,
    serviceType: "SaaS product development",
    crumb: "SaaS development",
    kicker: "SaaS product development · India",
    title: "SaaS products built to sell",
    titleAccent: "to the second customer, too.",
    metaTitle: "SaaS Development Company in India · MVP to Scale",
    description:
      "SaaS product development in India for founders: MVP, multi-tenant architecture, subscription billing, onboarding and admin, built with Next.js and PostgreSQL.",
    keywords: [
      "SaaS development company India",
      "SaaS product development services",
      "multi-tenant SaaS development",
      "SaaS MVP development",
      "subscription billing integration",
      "B2B SaaS development India",
    ],
    lead: "For founders and product teams turning an idea or a single-client tool into a SaaS business — tenancy, plans, billing and onboarding done properly from the start.",
    answer:
      "Bright Infonet is a Panchkula-based SaaS development company that takes founders from a first version to a multi-tenant product. We build tenant isolation, plans and subscription billing, self-serve onboarding, admin tools and usage analytics on Next.js, Node and PostgreSQL, and deploy to your own cloud with monitoring. You own the code and the accounts.",
    about: [
      "A SaaS product is more than a web app with a login. It has to keep each customer’s data apart, charge them correctly every month, let them sign up and invite colleagues without a sales call, and let your team support them without database access. Those parts are easy to skip in an MVP and expensive to add later.",
      "We help you decide what the first release must include and what can wait. Usually tenancy and roles are designed properly on day one, billing starts simple with one payment provider, and admin and analytics grow as customers arrive. That keeps the first version small without forcing a rewrite at the tenth customer.",
      "Many of our SaaS clients are B2B: vertical tools for clinics, labs, schools, distributors or service businesses. For India-facing products we plan for GST invoicing, UPI and card payments through local gateways; for global products, international payment providers and data residency questions come into the design.",
    ],
    facts: [
      { k: "Stack", v: "Next.js · Node · PostgreSQL" },
      { k: "Tenancy", v: "Isolated by design" },
      { k: "Billing", v: "Plans · trials · invoices" },
      { k: "Ownership", v: "Your code, your cloud" },
    ],
    sections: [
      {
        id: "saas-foundations",
        kicker: "SaaS foundations",
        title: "The parts every SaaS",
        accent: "eventually needs.",
        cards: [
          {
            t: "Multi-tenant architecture",
            d: "Tenant isolation at the data layer, per-tenant settings and limits, and safe ways to support customers.",
          },
          {
            t: "Plans & subscription billing",
            d: "Free trials, monthly and annual plans, upgrades, proration and invoices through a payment provider you choose.",
          },
          {
            t: "Self-serve onboarding",
            d: "Sign-up, email verification, workspace setup, team invites and a first-run guide that shows value quickly.",
          },
          {
            t: "Roles & SSO",
            d: "Owner, admin and member roles, with Google or Microsoft sign-in and SAML for enterprise customers when needed.",
          },
          {
            t: "Internal admin console",
            d: "Search tenants, change plans, issue credits and impersonate safely, with every admin action logged.",
          },
          {
            t: "Usage analytics",
            d: "Product events, activation and churn signals so you know which features keep customers paying.",
          },
        ],
      },
      {
        id: "saas-stages",
        kicker: "By stage",
        title: "Where you are",
        accent: "decides the first step.",
        cards: [
          {
            t: "Idea to MVP",
            d: "A tightly scoped first release for early customers, with tenancy and billing designed so they can grow.",
          },
          {
            t: "Single client to SaaS",
            d: "Turn software built for one customer into a product many customers can configure for themselves.",
          },
          {
            t: "Scaling up",
            d: "Performance work, background jobs, caching and database tuning as tenants and data grow.",
          },
          {
            t: "Enterprise readiness",
            d: "SSO, audit logs, data export and security documentation that larger customers ask for in procurement.",
          },
          {
            t: "AI features",
            d: "Search, summaries and agents inside the product, with cost per tenant tracked so margins stay healthy.",
          },
          {
            t: "Rescue & rebuild",
            d: "A review of an existing SaaS codebase, then fixes or a staged rebuild without stopping current customers.",
          },
        ],
      },
    ],
    fit: [
      "You are a founder with a validated idea and need a team to build the first sellable version.",
      "You built software for one client and want to turn it into a product for many.",
      "Your SaaS works but billing, roles or onboarding are held together with manual steps.",
      "You want senior engineers who think about tenancy, cost and support, not just screens.",
    ],
    faqs: [
      {
        q: "How much does it cost to build a SaaS product in India?",
        a: "It depends on the features in the first release, integrations, roles and compliance needs. We share an itemised written estimate after discovery and can phase the build so an MVP fits your budget.",
      },
      {
        q: "What is a multi-tenant SaaS?",
        a: "One application serving many customer organisations, with each customer’s data, users and settings kept separate. It is cheaper to run and update than a separate copy per customer.",
      },
      {
        q: "Which payment providers can you integrate for subscriptions?",
        a: "We integrate the provider that suits your market, such as Razorpay or Cashfree for India and Stripe or Paddle for international customers, depending on where you can open an account.",
      },
      {
        q: "Can you turn our custom software into a SaaS product?",
        a: "Yes. We review the code, add tenancy, configuration and billing, and move existing customers across in stages.",
      },
      {
        q: "How is this different from your web platform service?",
        a: "Our web platform service covers any web application, including internal tools and portals. This page is for products you sell by subscription, where tenancy, billing and onboarding matter most.",
      },
      {
        q: "Who owns the SaaS code and data?",
        a: "You do. Code lives in your repository, the product runs in your cloud account, and customer data stays under your control.",
      },
    ],
    related: [
      { href: "/services/web-platforms", label: "Web platform development" },
      {
        href: "/insights/mvp-development-cost-timeline",
        label: "MVP cost and timeline",
      },
      {
        href: "/insights/custom-software-vs-saas",
        label: "Custom software vs SaaS",
      },
      { href: "/services/product-design", label: "Product & UX design" },
      {
        href: "/services/hire-dedicated-developers-india",
        label: "Hire a dedicated team",
      },
      { href: "/work", label: "PVgenix and other products" },
    ],
  },
  {
    path: "/services/ai-chatbot-development-india",
    kind: "service",
    parent: SERVICES_PARENT,
    serviceType: "AI chatbot development",
    crumb: "AI chatbot development",
    kicker: "AI chatbots · Website & WhatsApp",
    title: "AI chatbots that answer customers",
    titleAccent: "from your own content.",
    metaTitle: "AI Chatbot Development in India · Web & WhatsApp",
    description:
      "AI chatbot development in India for websites and WhatsApp: answers from your own content, lead capture, booking, human handoff and English, Hindi or Hinglish.",
    keywords: [
      "AI chatbot development India",
      "WhatsApp chatbot development",
      "website chatbot development",
      "GPT chatbot for business",
      "customer support chatbot India",
      "Hindi chatbot development",
      "RAG chatbot development",
    ],
    lead: "Customer-facing chat for your website and WhatsApp — answering questions, capturing leads and booking appointments, with a person taking over when it matters.",
    answer:
      "Bright Infonet is a Panchkula-based software company that builds AI chatbots for websites and WhatsApp. The chatbot answers customer questions from your own content, captures leads, books appointments and hands the conversation to a person when it cannot help. It can reply in English, Hindi or Hinglish, and is tested against real customer questions before launch.",
    about: [
      "A chatbot and an AI agent are not the same thing. A chatbot talks to your customers: it answers questions, collects details and routes them. An AI agent works behind the scenes on tasks inside your systems. This page covers the customer-facing chatbot; our AI agents service covers the back-office side.",
      "The old kind of chatbot followed a fixed menu and frustrated anyone who typed a real question. Modern chatbots use a language model with retrieval over your own pages, price lists, policies and FAQs, so they answer in natural language but stay within what your business has actually published.",
      "Most Indian customers would rather message on WhatsApp than fill in a form. We build on the WhatsApp Business Platform through an approved provider, with your website chat sharing the same knowledge and the same inbox, so your team sees every conversation in one place.",
    ],
    facts: [
      { k: "Channels", v: "Website · WhatsApp" },
      { k: "Answers", v: "From your content" },
      { k: "Languages", v: "English · Hindi · Hinglish" },
      { k: "Fallback", v: "Human handoff" },
    ],
    sections: [
      {
        id: "chatbot-features",
        kicker: "What it does",
        title: "A chatbot that",
        accent: "knows its limits.",
        cards: [
          {
            t: "Answers from your content",
            d: "Pages, PDFs, FAQs and policies indexed so replies are grounded in what you have published, with links to the source.",
          },
          {
            t: "Lead capture",
            d: "Name, number and requirement collected in conversation and pushed to your CRM, sheet or email.",
          },
          {
            t: "Bookings & enquiries",
            d: "Appointment slots, demo calls or site visits booked from the chat, with confirmations sent automatically.",
          },
          {
            t: "Human handoff",
            d: "The bot passes the chat to your team with a summary when a customer asks, gets stuck or raises a complaint.",
          },
          {
            t: "Order & status lookups",
            d: "Customers check an order, ticket or application status after verifying who they are.",
          },
          {
            t: "Guardrails",
            d: "Topics the bot must refuse, no invented prices or promises, and a clear message when it does not know.",
          },
        ],
      },
      {
        id: "chatbot-quality",
        kicker: "Before and after launch",
        title: "Tested like any other",
        accent: "customer channel.",
        cards: [
          {
            t: "Question bank",
            d: "Real customer questions collected from your inbox and calls, used to test the bot before it goes live.",
          },
          {
            t: "Answer evaluation",
            d: "Each change is checked against the question bank so a fix in one place does not break answers elsewhere.",
          },
          {
            t: "Conversation review",
            d: "A dashboard of chats, unanswered questions and handoffs so content gaps are easy to fill.",
          },
          {
            t: "WhatsApp templates",
            d: "Message templates and opt-ins set up so follow-ups follow WhatsApp Business policies.",
          },
          {
            t: "Privacy controls",
            d: "Personal data minimised, retention limited and conversations stored in your own account.",
          },
          {
            t: "Running cost tracking",
            d: "Model and messaging costs monitored per conversation so the bot stays affordable as volume grows.",
          },
        ],
      },
    ],
    fit: [
      "Your team answers the same customer questions on WhatsApp and phone all day.",
      "Website visitors leave without contacting you because nobody replies after hours.",
      "You tried a menu-based chatbot and customers found it frustrating.",
      "You want a bot that refuses to guess, rather than one that makes up answers.",
    ],
    faqs: [
      {
        q: "What is the difference between an AI chatbot and an AI agent?",
        a: "A chatbot is customer-facing and mainly answers, collects and routes. An AI agent carries out tasks inside your systems, such as updating records or processing documents. Many businesses start with a chatbot and add agents later.",
      },
      {
        q: "Can the chatbot work on WhatsApp?",
        a: "Yes. We connect it to the WhatsApp Business Platform through an approved provider, so it replies on your business number and hands over to your team in a shared inbox.",
      },
      {
        q: "Will the chatbot make up answers?",
        a: "We design it to answer only from your approved content and to say when it does not know. We test it against real questions before launch and keep reviewing unanswered ones.",
      },
      {
        q: "Can it reply in Hindi or Hinglish?",
        a: "Yes. Modern language models handle English, Hindi and mixed Hinglish well; we test the replies with your real customer messages in each language.",
      },
      {
        q: "How much does an AI chatbot cost to run?",
        a: "Running cost depends on conversation volume, the model used and WhatsApp messaging charges. We estimate it during the pilot and show cost per conversation on a dashboard.",
      },
      {
        q: "Can the chatbot connect to our CRM or booking system?",
        a: "Usually, if the system has an API or integration option. We confirm what it supports during discovery and start with the connections that save your team the most time.",
      },
    ],
    related: [
      { href: "/services/ai-agents", label: "AI agents for back-office work" },
      {
        href: "/ai-development-company-chandigarh",
        label: "AI development in Chandigarh",
      },
      {
        href: "/insights/how-to-choose-ai-development-company-india",
        label: "Choosing an AI development company",
      },
      {
        href: "/industries/healthcare-app-development",
        label: "Healthcare apps",
      },
      {
        href: "/services/ecommerce-development-chandigarh",
        label: "E-commerce development",
      },
    ],
  },
  {
    path: "/services/hire-dedicated-developers-india",
    kind: "service",
    parent: SERVICES_PARENT,
    serviceType: "Dedicated software development team",
    crumb: "Hire dedicated developers",
    kicker: "Dedicated teams · India",
    title: "A dedicated team that works like",
    titleAccent: "your own engineers.",
    metaTitle: "Hire Dedicated Developers in India · Full Team",
    description:
      "Hire a dedicated developer team in India: full-stack, Flutter, backend, QA and design engineers in your sprints, with NDA, IP assignment and code review.",
    keywords: [
      "hire dedicated developers India",
      "dedicated development team India",
      "offshore development team",
      "team extension services India",
      "hire full stack developers India",
      "hire remote developers India",
    ],
    lead: "A small, senior, multi-skill team — web, mobile, backend, QA and design — working in your stand-ups, your tracker and your repository.",
    answer:
      "Bright Infonet is a Panchkula-based software company that provides dedicated development teams from India. You get senior full-stack, Flutter, backend, QA and design engineers who join your sprints, work in your tools and repository, and stay on your product month after month. Contracts include NDA, IP assignment and agreed overlap hours, and every change is code-reviewed.",
    about: [
      "A dedicated team suits companies that have a product roadmap but not enough engineers to deliver it. Instead of a fixed-scope project, you get people who learn your product, attend your planning and keep working on the next priority as it changes.",
      "Our teams are multi-skill by design. A typical setup might pair a full-stack lead with a Flutter developer and part-time QA and design, rather than several people with the same skill. If you only need mobile engineers, our hire-Flutter-developers page covers that narrower case.",
      "We are a small studio, not a staffing agency, so we confirm capacity honestly before agreeing a team size and introduce you to the actual engineers first. The code lives in your repository from day one, and handover to your in-house team is planned into the contract.",
    ],
    facts: [
      { k: "Roles", v: "Full-stack · Flutter · QA · UX" },
      { k: "Process", v: "Your sprints, your tools" },
      { k: "Legal", v: "NDA + IP assignment" },
      { k: "Quality", v: "Review on every change" },
    ],
    sections: [
      {
        id: "team-models",
        kicker: "Team models",
        title: "Pick the shape",
        accent: "your roadmap needs.",
        cards: [
          {
            t: "Dedicated product team",
            d: "A small cross-functional team that owns a product or module, with a tech lead accountable for delivery.",
          },
          {
            t: "Team extension",
            d: "Individual engineers who join your existing team and follow your processes, reviews and standards.",
          },
          {
            t: "Managed team",
            d: "We run the sprints and report on progress against your roadmap, with you setting priorities.",
          },
          {
            t: "Discovery sprint first",
            d: "A short paid sprint to understand your product and codebase before you commit to a longer engagement.",
          },
          {
            t: "Part-time specialists",
            d: "QA, UX design, DevOps or validation expertise added for the weeks they are actually needed.",
          },
          {
            t: "Planned handover",
            d: "Documentation, pairing and a transition plan when you are ready to take the work in-house.",
          },
        ],
      },
      {
        id: "team-skills",
        kicker: "Skills on the team",
        title: "One team,",
        accent: "the whole stack.",
        cards: [
          {
            t: "Web front end",
            d: "React and Next.js interfaces, design systems and accessibility, built for performance.",
          },
          {
            t: "Backend & APIs",
            d: "Node, TypeScript and PostgreSQL services, integrations and background jobs.",
          },
          {
            t: "Mobile",
            d: "Flutter apps for iOS and Android, with offline sync, push notifications and store releases.",
          },
          {
            t: "AI features",
            d: "LLM integrations, retrieval over your documents and agents with evaluation and monitoring.",
          },
          {
            t: "QA & automation",
            d: "Test plans, automated tests in CI and release checks, so speed does not cost quality.",
          },
          {
            t: "Cloud & DevOps",
            d: "Infrastructure on AWS, Azure or GCP, CI/CD pipelines, monitoring and cost reviews.",
          },
        ],
      },
    ],
    fit: [
      "You have a long-running product roadmap and not enough engineers to deliver it.",
      "Hiring locally is slow or expensive and you need experienced people sooner.",
      "You want one team covering web, mobile and backend instead of several freelancers.",
      "You need clear IP ownership, NDA and code in your own repository from day one.",
    ],
    faqs: [
      {
        q: "What is a dedicated development team?",
        a: "It is a group of engineers who work only on your product for an agreed period, inside your planning and tools, rather than delivering a fixed scope and leaving.",
      },
      {
        q: "How much does it cost to hire dedicated developers in India?",
        a: "It depends on roles, seniority, team size and contract length. We share a written quote after a call about your roadmap rather than a one-size rate card.",
      },
      {
        q: "How is this different from hiring Flutter developers?",
        a: "Our Flutter page covers mobile-only engagements. A dedicated team mixes skills such as web, backend, mobile, QA and design around your whole product.",
      },
      {
        q: "Which time zones can the team work with?",
        a: "We agree daily overlap hours in the contract. UK, Europe and the Middle East overlap comfortably with Indian hours; for US teams we arrange early or late India hours.",
      },
      {
        q: "Can we interview the developers first?",
        a: "Yes. You meet the engineers proposed for your team before the engagement starts, and can ask technical questions.",
      },
      {
        q: "Who owns the code the team writes?",
        a: "You do. The contract assigns IP to you, and the code is committed to your repository from the first day.",
      },
    ],
    related: [
      {
        href: "/hire-flutter-developers-india",
        label: "Hire Flutter developers",
      },
      {
        href: "/insights/outsourcing-app-development-to-india",
        label: "Outsourcing development to India",
      },
      {
        href: "/insights/how-to-choose-software-development-company-india",
        label: "Choosing a software company in India",
      },
      { href: "/process", label: "How we work" },
      {
        href: "/services/saas-development-company-india",
        label: "SaaS product development",
      },
      {
        href: "/software-development-company-kharar",
        label: "Software development in Kharar",
      },
    ],
  },
  {
    path: "/services/ecommerce-development-chandigarh",
    kind: "service",
    parent: SERVICES_PARENT,
    city: "Chandigarh",
    serviceType: "E-commerce website development",
    crumb: "E-commerce · Chandigarh",
    kicker: "E-commerce development · Chandigarh",
    title: "Online stores Chandigarh businesses",
    titleAccent: "can run themselves.",
    metaTitle: "E-commerce Website Development in Chandigarh",
    description:
      "E-commerce development in Chandigarh: fast online stores with UPI and card payments, GST invoices, shipping, WhatsApp updates and an admin your team can run.",
    keywords: [
      "ecommerce website development Chandigarh",
      "ecommerce development company Chandigarh",
      "online store development Chandigarh",
      "B2B ordering portal Chandigarh",
      "Next.js ecommerce development",
      "headless Shopify development",
    ],
    lead: "Online stores and B2B ordering portals for Chandigarh retailers, brands and distributors — fast on mobile, simple to manage, and connected to payments and shipping.",
    answer:
      "Bright Infonet is a Panchkula-based software company that builds e-commerce websites for Chandigarh businesses: fast storefronts, UPI and card payments, GST-ready invoices, shipping integrations, WhatsApp order updates and an admin panel your team can run. We help you choose between a hosted platform and a custom Next.js store, and build what fits.",
    about: [
      "Chandigarh businesses selling online usually fall into two groups. Retailers and local brands want a store that looks like their shop and sells to customers across the Tricity and beyond. Distributors and manufacturers want a private ordering portal where trade customers see their own prices and reorder quickly.",
      "The first decision is the platform. A hosted platform is quicker to start when your catalogue and checkout are standard. A custom or headless store on Next.js makes sense when you need unusual pricing, B2B rules, deep integrations or more control over speed. We explain the trade-off in writing before you commit.",
      "We are based in Panchkula, so meeting at your Chandigarh office or showroom to understand the catalogue, stock and dispatch process is straightforward. After launch, your team manages products, orders and offers from the admin, and we stay available for changes and peak-season support.",
    ],
    facts: [
      { k: "Payments", v: "UPI · cards · COD" },
      { k: "Invoices", v: "GST-ready" },
      { k: "Updates", v: "WhatsApp · SMS · email" },
      { k: "Stack", v: "Hosted or Next.js" },
    ],
    sections: [
      {
        id: "store-features",
        kicker: "What your store gets",
        title: "Everything from product page",
        accent: "to doorstep.",
        cards: [
          {
            t: "Fast mobile storefront",
            d: "Product pages, search and filters that load quickly on phones, where most of your shoppers are.",
          },
          {
            t: "Payments",
            d: "UPI, cards, net banking, wallets and cash on delivery through an Indian payment gateway you choose.",
          },
          {
            t: "GST invoices",
            d: "Tax-correct invoices with HSN codes and GSTIN capture for business buyers.",
          },
          {
            t: "Shipping & tracking",
            d: "Courier or shipping-aggregator integration with labels, tracking links and local delivery options.",
          },
          {
            t: "WhatsApp order updates",
            d: "Order confirmations, dispatch alerts and abandoned-cart reminders on WhatsApp, with customer opt-in.",
          },
          {
            t: "Admin your team can use",
            d: "Products, stock, orders, returns, coupons and reports managed without calling a developer.",
          },
        ],
      },
      {
        id: "store-types",
        kicker: "What we build",
        title: "Stores for how",
        accent: "you actually sell.",
        cards: [
          {
            t: "D2C brand stores",
            d: "A branded store for products you make, with content, reviews from real buyers and repeat-purchase offers.",
          },
          {
            t: "Retail shop online",
            d: "Your showroom catalogue online, with store pickup and local delivery for nearby customers.",
          },
          {
            t: "B2B ordering portal",
            d: "Trade logins, customer-specific prices, minimum quantities, credit terms and quick reorders.",
          },
          {
            t: "Multi-vendor marketplace",
            d: "Seller onboarding, commission rules and payouts when you sell other businesses’ products.",
          },
          {
            t: "Stock and ERP sync",
            d: "Inventory and orders synced with your accounting or ERP software where it offers an interface.",
          },
          {
            t: "Store rebuilds",
            d: "Move a slow or hard-to-manage store to a better platform, keeping products, customers and search rankings.",
          },
        ],
      },
    ],
    fit: [
      "You run a shop, brand or distribution business in Chandigarh and want to sell online properly.",
      "Your current store is slow on mobile or your team struggles to update it.",
      "Trade customers order by phone and WhatsApp and you want a self-service ordering portal.",
      "You want honest advice on hosted versus custom before spending on a build.",
    ],
    faqs: [
      {
        q: "How much does an e-commerce website cost in Chandigarh?",
        a: "It depends on the platform, catalogue size, payment and shipping integrations and any B2B rules. We give a written, itemised estimate after a short discovery, and a hosted store usually costs less to start than a custom build.",
      },
      {
        q: "Should we use Shopify or a custom store?",
        a: "A hosted platform such as Shopify suits standard catalogues and checkouts. A custom or headless Next.js store suits unusual pricing, B2B ordering or heavy integrations. We recommend one in writing after looking at your needs.",
      },
      {
        q: "Can customers pay with UPI?",
        a: "Yes. We integrate an Indian payment gateway that supports UPI, cards, net banking and wallets, and can add cash on delivery with rules to limit risk.",
      },
      {
        q: "Can the store send order updates on WhatsApp?",
        a: "Yes. Order, dispatch and delivery updates can go out on WhatsApp through an approved provider, to customers who have opted in.",
      },
      {
        q: "Can we meet you in Chandigarh?",
        a: "Yes. We are based in Panchkula and can meet at your Chandigarh office, shop or warehouse for discovery and reviews.",
      },
      {
        q: "Will moving to a new store hurt our Google rankings?",
        a: "Not if it is planned. We map old URLs to new ones with redirects, keep product content and check search console after launch.",
      },
    ],
    related: [
      {
        href: "/web-development-company-chandigarh",
        label: "Web development in Chandigarh",
      },
      {
        href: "/insights/website-development-cost-small-business-india",
        label: "Website cost for small businesses",
      },
      {
        href: "/services/ai-chatbot-development-india",
        label: "WhatsApp and website chatbots",
      },
      {
        href: "/app-development-company-zirakpur",
        label: "App development in Zirakpur",
      },
      { href: "/services/web-platforms", label: "Web platform development" },
      {
        href: "/web-development-company-shimla",
        label: "Web development in Shimla",
      },
    ],
  },
];
