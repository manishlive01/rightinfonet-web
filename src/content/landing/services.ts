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
        label: "Flutter vs native: how to choose",
      },
      {
        href: "/insights/app-development-cost-india",
        label: "App development cost in India",
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
      "Bright Infonet develops GxP regulated software such as LIMS and pharmacovigilance systems. Audit trails, e-signatures, role-based access and record locking are built in to meet 21 CFR Part 11 and EU Annex 11 expectations, and we deliver a GAMP 5 validation pack from URS to summary report. Final validation sign-off stays with your QA team.",
    about: [
      "In regulated work, the software is only half the deliverable. Inspectors want evidence: who changed a record, when, why, and who approved it. We design those controls into the data model from the first sprint, rather than bolting them on before go-live.",
      "Alongside the code we write the validation documents — URS, risk assessment, traceability matrix, IQ/OQ/PQ protocols and a summary report — following a risk-based GAMP 5 approach. Your QA team reviews, executes where required and signs off; approval of the validated state always stays with you.",
      "We have built PVgenix, a pharmacovigilance SaaS, and a LIMS for NABL/ISO 15189 and pharma QC labs. We support companies across India and worldwide, including labs and pharma units around Panchkula, Mohali and Chandigarh.",
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
];
