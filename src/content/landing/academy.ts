import type { Landing } from "./types";

const ACADEMY = { name: "Academy", path: "/academy" };
const CTA = "Apply for the next cohort";



/** Academy course pages and city training pages, served under /academy/…. */
export const ACADEMY_PAGES: Landing[] = [
  // ─── Course pages ────────────────────────────────────────────────
  {
    path: "/academy/full-stack-web-development-course",
    kind: "course",
    parent: ACADEMY,
    trackIndex: 0,
    crumb: "Full-stack Web course",
    kicker: "Academy · Full-stack Web · 16 weeks",
    title: "Full-stack web development course in",
    titleAccent: "Chandigarh Tricity.",
    metaTitle: "Full-Stack Web Development Course in Chandigarh Tricity",
    description:
      "A 16-week hybrid full-stack course in the Chandigarh Tricity — React, Next.js, Node and Postgres, taught by working engineers, with a code-reviewed capstone.",
    keywords: [
      "full stack development course in Chandigarh",
      "full stack course Mohali",
      "full stack course Panchkula",
      "full stack course Tricity",
      "full stack web development course",
      "React Next.js course Chandigarh",
      "MERN stack course Chandigarh",
      "web development course Chandigarh",
    ],
    lead: "Sixteen weeks from your first line of HTML to a deployed, tested web app — taught in a small hybrid cohort by the engineers who build our client products.",
    answer:
      "Bright Infonet’s full-stack web course is a 16-week hybrid program for beginners in Chandigarh, Mohali and Panchkula. You learn HTML, JavaScript, React, Next.js, Node and PostgreSQL from working engineers, build in small cohorts, and finish with a deployed, code-reviewed SaaS dashboard for your portfolio.",
    about: [
      "The course is built for people who want to work as web developers, not just finish a certificate. That includes B.Tech, BCA and MCA students, graduates switching careers, and self-taught coders who have watched tutorials but never shipped anything real.",
      "You start with web foundations and Git, move through React and Next.js, then build APIs and databases with Node and PostgreSQL. The last weeks are a studio project: a real brief, built in a team, with the same code review and QA our client work goes through.",
      "Classes run in a hybrid format, so Tricity students can join in-person sessions and still keep up online. Cohorts stay small so mentors can review your code line by line instead of marking a checklist.",
    ],
    facts: [
      { k: "Duration", v: "16 weeks" },
      { k: "Format", v: "Hybrid" },
      { k: "Level", v: "Beginner → Job-ready" },
      { k: "Stack", v: "React · Next.js · Node · Postgres" },
    ],
    sections: [
      {
        id: "fullstack-what-you-build",
        kicker: "What you build",
        title: "Projects that look like",
        accent: "real work.",
        lead: "Every project is reviewed by an engineer and lives in your own Git history.",
        cards: [
          {
            t: "A responsive marketing site",
            d: "Semantic HTML, modern CSS and accessibility basics, deployed on a live link in the first weeks.",
          },
          {
            t: "An interactive React app",
            d: "Components, state and forms — the kind of front end most job tasks actually involve.",
          },
          {
            t: "A Next.js product front end",
            d: "Routing, data fetching and server rendering, structured the way production teams do it.",
          },
          {
            t: "A REST API with auth",
            d: "Node, PostgreSQL, validation and login, with tests you write yourself.",
          },
          {
            t: "A team studio project",
            d: "A real brief built in a small team with branches, pull requests and code review.",
          },
          {
            t: "A deployed SaaS dashboard",
            d: "Your capstone: deployed, tested and reviewed, ready to walk through in an interview.",
          },
        ],
      },
      {
        id: "fullstack-how-you-learn",
        kicker: "How you learn",
        title: "Studio habits,",
        accent: "not just syntax.",
        cards: [
          {
            t: "Working-engineer mentors",
            d: "Your mentors ship client software every week, so you learn the tools teams use now.",
          },
          {
            t: "Code review on every project",
            d: "Written feedback on your pull requests — naming, structure, bugs and security.",
          },
          {
            t: "Git from day one",
            d: "Commits, branches and pull requests become routine long before the capstone.",
          },
          {
            t: "Small cohorts",
            d: "Enough people to work as a team, few enough that mentors know your code.",
          },
          {
            t: "Hybrid sessions",
            d: "Join in person in the Tricity or online, with recordings and shared notes.",
          },
          {
            t: "Portfolio and interview prep",
            d: "Help presenting your projects, cleaning your GitHub and practising technical interviews.",
          },
        ],
      },
    ],
    fit: [
      "You are a student or graduate in Chandigarh, Mohali or Panchkula who wants a web developer job.",
      "You have tried tutorials but have never built and deployed a complete app.",
      "You want a mentor to review your code, not just a video library.",
      "You can commit regular time each week for sixteen weeks.",
    ],
    faqs: [
      {
        q: "What is the fee for the full stack development course in Chandigarh?",
        a: "Fees depend on the track and format; contact us for the current fee and batch dates.",
      },
      {
        q: "Do I need coding experience to join the full stack course?",
        a: "No. The track starts from HTML, CSS and JavaScript basics and is designed for beginners who are willing to practise every week.",
      },
      {
        q: "Is this course MERN stack?",
        a: "It covers similar ground: React and Next.js on the front end and Node for APIs, with PostgreSQL as the database instead of MongoDB, since relational data suits most business apps.",
      },
      {
        q: "Is the course online or offline?",
        a: "It is hybrid. Students in the Tricity can attend in-person sessions, and everything can also be followed live online.",
      },
      {
        q: "Do you offer placement after the full stack course?",
        a: "We help with your portfolio, code reviews, CV and interview preparation, but we don’t promise jobs. What you leave with is a deployed project and a reviewed Git history you can show employers.",
      },
      {
        q: "Can college students join during their degree?",
        a: "Yes. Many students take it alongside B.Tech, BCA or MCA studies; talk to us about which batch timing fits your semester.",
      },
    ],
    related: [
      { href: "/academy", label: "Bright Infonet Academy" },
      {
        href: "/insights/full-stack-developer-roadmap-india",
        label: "Full-stack developer roadmap for India",
      },
      {
        href: "/insights/software-developer-career-chandigarh-tricity",
        label: "Software developer careers in the Tricity",
      },
      {
        href: "/insights/online-vs-offline-coding-course",
        label: "Online vs offline coding course",
      },
      {
        href: "/academy/industrial-training-chandigarh",
        label: "Industrial training in Chandigarh",
      },
      { href: "/services/web-platforms", label: "Our web platform work" },
    ],
    cta: CTA,
  },
  {
    path: "/academy/flutter-app-development-course",
    kind: "course",
    parent: ACADEMY,
    trackIndex: 1,
    crumb: "Flutter course",
    kicker: "Academy · Mobile with Flutter · 12 weeks",
    title: "Flutter app development course in",
    titleAccent: "Chandigarh.",
    metaTitle: "Flutter App Development Course in Chandigarh",
    description:
      "A 12-week hybrid Flutter course in the Chandigarh Tricity — Dart, Flutter and Firebase, taught by working engineers, ending with your own app on the Play Store.",
    keywords: [
      "Flutter course in Chandigarh",
      "app development course Mohali",
      "Flutter training Panchkula",
      "mobile app development course Chandigarh",
      "Android app development course Tricity",
      "Flutter course India",
      "Dart Flutter course",
    ],
    lead: "Twelve weeks to design, build and publish a cross-platform app — from your first widget to a live Play Store listing, taught by engineers who ship Flutter apps for clients.",
    answer:
      "Bright Infonet’s Flutter course is a 12-week hybrid program in the Chandigarh Tricity for people with some coding experience. You learn Dart, Flutter, state management, Firebase and offline data from working engineers, and finish by publishing your own app to the Google Play Store with analytics wired in.",
    about: [
      "Flutter lets one codebase run on Android and iOS, which is why so many startups and agencies now hire for it. This track teaches it the way our studio uses it on client apps: clean widget structure, predictable state and data that survives a bad network.",
      "You begin with Dart and Flutter layout, then move to state and navigation with Riverpod, then APIs, Firebase and local storage. The final weeks cover testing, release builds and the Play Store submission, so you go through a real launch rather than reading about one.",
      "It suits students and developers across Chandigarh, Mohali and Panchkula who already know basic programming. The hybrid format means you can attend in person in the Tricity or join the same sessions online.",
    ],
    facts: [
      { k: "Duration", v: "12 weeks" },
      { k: "Format", v: "Hybrid" },
      { k: "Level", v: "Some coding" },
      { k: "Stack", v: "Dart · Flutter · Firebase" },
    ],
    sections: [
      {
        id: "flutter-what-you-build",
        kicker: "What you build",
        title: "Apps you can put",
        accent: "in someone’s hand.",
        lead: "Each build runs on a real phone and is reviewed by an engineer.",
        cards: [
          {
            t: "A polished UI screen set",
            d: "Layout, theming and responsive widgets that look right on small and large phones.",
          },
          {
            t: "A multi-screen app with forms",
            d: "Navigation, validation and state handled cleanly, not with copy-pasted setState calls.",
          },
          {
            t: "An API-connected app",
            d: "Fetching, caching and error states against a real backend.",
          },
          {
            t: "A Firebase-backed feature",
            d: "Authentication, cloud data and push notifications of the kind client apps ask for.",
          },
          {
            t: "An offline-ready flow",
            d: "Local storage and sync so the app keeps working on patchy mobile networks.",
          },
          {
            t: "Your published app",
            d: "Signed release build, store listing and analytics — live on the Play Store under your name.",
          },
        ],
      },
      {
        id: "flutter-how-you-learn",
        kicker: "How you learn",
        title: "Taught like a",
        accent: "studio sprint.",
        cards: [
          {
            t: "Mentors who ship Flutter",
            d: "The people teaching you build Flutter apps for clients in our studio.",
          },
          {
            t: "Reviewed pull requests",
            d: "Feedback on structure, state handling and performance, the way a team lead would give it.",
          },
          {
            t: "Real-device testing",
            d: "You test on your own phone early and often, not only on an emulator.",
          },
          {
            t: "Small hybrid cohorts",
            d: "In-person sessions in the Tricity plus live online access for the same classes.",
          },
          {
            t: "Release, not just build",
            d: "Signing, versioning and store review are part of the syllabus, not an afterthought.",
          },
          {
            t: "Portfolio support",
            d: "Help writing up your app, tidying your repository and preparing for Flutter interviews.",
          },
        ],
      },
    ],
    fit: [
      "You know basic programming in any language and want to build mobile apps.",
      "You want a live app on the Play Store to show employers or clients.",
      "You are a web or Android developer who wants to add Flutter to your skills.",
      "You prefer mentor feedback on your code over self-paced videos.",
    ],
    faqs: [
      {
        q: "What is the fee for the Flutter course in Chandigarh?",
        a: "Fees depend on the track and format; contact us for the current fee and batch dates.",
      },
      {
        q: "Do I need to know Dart before joining?",
        a: "No. You need some programming experience in any language; Dart is taught from the start of the track.",
      },
      {
        q: "Will my app really be published on the Play Store?",
        a: "That is the goal of the final module. You prepare the release build and listing and go through Google’s review with mentor support.",
      },
      {
        q: "Does the course cover iOS as well?",
        a: "Flutter code runs on both Android and iOS, and we explain iOS builds and App Store requirements. Publishing to the App Store needs a Mac and an Apple developer account, so the hands-on release focuses on the Play Store.",
      },
      {
        q: "Do you provide placement after the Flutter course?",
        a: "We help with your portfolio, code reviews and interview preparation, but we don’t promise jobs. A published app and a clean repository are what we help you build.",
      },
      {
        q: "Can I attend from Mohali or Panchkula?",
        a: "Yes. The course is hybrid, so students from anywhere in the Tricity can attend in person or join the same sessions online.",
      },
    ],
    related: [
      { href: "/academy", label: "Bright Infonet Academy" },
      {
        href: "/insights/flutter-developer-roadmap",
        label: "Flutter developer roadmap",
      },
      {
        href: "/insights/flutter-vs-native-app-development",
        label: "Flutter vs native: how to choose",
      },
      {
        href: "/insights/skills-for-placement-btech-bca-mca",
        label: "Skills for placement: B.Tech, BCA, MCA",
      },
      {
        href: "/academy/it-training-institute-mohali",
        label: "IT training in Mohali",
      },
      { href: "/services/mobile-apps", label: "Our mobile app work" },
    ],
    cta: CTA,
  },
  {
    path: "/academy/ai-agents-course",
    kind: "course",
    parent: ACADEMY,
    trackIndex: 2,
    crumb: "AI agents course",
    kicker: "Academy · Applied AI & Agents · 10 weeks",
    title: "Applied AI and agents course,",
    titleAccent: "live online.",
    metaTitle: "AI Agents Course: Generative AI Training, Live Online",
    description:
      "A 10-week live online AI course for developers in Chandigarh and across India — LLMs, RAG, tool-using agents and evals, built on a real business workflow.",
    keywords: [
      "AI course in Chandigarh",
      "generative AI course",
      "AI agents course India",
      "LLM course for developers",
      "RAG course online",
      "generative AI training Mohali",
      "AI course Panchkula",
      "agentic AI course",
    ],
    lead: "Ten weeks of live online classes on the parts of AI that demos skip — retrieval, tool use, evaluation and cost — taught by engineers who build AI agents for clients.",
    answer:
      "Bright Infonet’s Applied AI & Agents course is a 10-week live online program for developers in Chandigarh and across India. You learn LLM APIs, retrieval-augmented generation, tool-using agents, guardrails and evaluation in Python, and finish by building an agent that automates a real business workflow, with evals to prove it works.",
    about: [
      "Most generative AI courses stop at prompting and a chatbot demo. This track is for developers who want to build AI that does real work inside a business: reading documents, calling tools, asking a human before risky actions and staying within a cost budget.",
      "You start with LLM fundamentals and APIs, then build retrieval over your own documents with embeddings and vector search. From there you wire up tool-using agents with memory and guardrails, and finish with evals, cost tracking and monitoring — the same practices our studio uses on client agents.",
      "Classes are live online, so developers in the Tricity and anywhere in India can join the same cohort. You should be comfortable writing code; Python basics help, but experienced developers from other languages pick it up quickly.",
    ],
    facts: [
      { k: "Duration", v: "10 weeks" },
      { k: "Format", v: "Live online" },
      { k: "Level", v: "Developers" },
      { k: "Stack", v: "Python · LLMs · RAG · Tools" },
    ],
    sections: [
      {
        id: "ai-what-you-build",
        kicker: "What you build",
        title: "AI that does",
        accent: "actual work.",
        lead: "Every build is measured, not just demoed.",
        cards: [
          {
            t: "A structured-output assistant",
            d: "Reliable JSON from an LLM, with retries and validation instead of hoping the format holds.",
          },
          {
            t: "Document Q&A with RAG",
            d: "Chunking, embeddings and vector search over a real document set, with cited answers.",
          },
          {
            t: "A tool-using agent",
            d: "Function calls into calendars, databases or APIs, with clear limits on what it may do.",
          },
          {
            t: "Human-in-the-loop approval",
            d: "Risky actions routed to a person before they happen, with a log of every decision.",
          },
          {
            t: "An eval suite",
            d: "Test cases from real examples so you can tell whether a change made the agent better or worse.",
          },
          {
            t: "A workflow agent capstone",
            d: "An agent that automates a real business process, deployed with cost and quality monitoring.",
          },
        ],
      },
      {
        id: "ai-how-you-learn",
        kicker: "How you learn",
        title: "Engineering first,",
        accent: "hype last.",
        cards: [
          {
            t: "Mentors who ship agents",
            d: "Taught by engineers who build AI agents and RAG systems for our clients.",
          },
          {
            t: "Live online classes",
            d: "Interactive sessions you can join from anywhere in India, with recordings for review.",
          },
          {
            t: "Code review on your agents",
            d: "Feedback on prompts, tool design, error handling and evals, not just whether it runs.",
          },
          {
            t: "Model-agnostic skills",
            d: "Patterns that carry across LLM providers, so you are not tied to one API.",
          },
          {
            t: "Cost and safety habits",
            d: "Token budgets, guardrails and logging taught as part of every build.",
          },
          {
            t: "Portfolio write-ups",
            d: "Help documenting your capstone so hiring teams can see how you measured it.",
          },
        ],
      },
    ],
    fit: [
      "You already write code and want to build production AI features, not just use chat tools.",
      "You want to understand RAG, tool use and evals well enough to explain them in an interview.",
      "You are a developer in the Tricity or elsewhere in India who prefers live online classes.",
      "You want mentors to review your agent code and point out what would break in production.",
    ],
    faqs: [
      {
        q: "What is the fee for the AI agents course?",
        a: "Fees depend on the track and format; contact us for the current fee and batch dates.",
      },
      {
        q: "Is this AI course suitable for beginners?",
        a: "It is designed for people who can already code. If you are new to programming, start with the full-stack web track and move to AI afterwards.",
      },
      {
        q: "Is the generative AI course online or in Chandigarh?",
        a: "It runs live online, so you can join from Chandigarh, Mohali, Panchkula or anywhere in India with a stable internet connection.",
      },
      {
        q: "Do I need a paid LLM account?",
        a: "Some exercises use commercial LLM APIs, which usually cost little at learning scale. We tell you what you need before the course starts and show options for keeping costs low.",
      },
      {
        q: "Do you offer placement after the AI course?",
        a: "We help with your portfolio, code reviews and interview preparation, but we don’t promise jobs. You leave with a measured, documented agent project you can walk through with employers.",
      },
      {
        q: "Is this a machine learning or data science course?",
        a: "No. It focuses on building applications with existing LLMs — retrieval, agents and evaluation — rather than training models from scratch.",
      },
    ],
    related: [
      { href: "/academy", label: "Bright Infonet Academy" },
      {
        href: "/insights/ai-ml-jobs-for-freshers-india",
        label: "AI and ML jobs for freshers in India",
      },
      {
        href: "/insights/ai-agents-for-business-operations",
        label: "AI agents for business operations",
      },
      {
        href: "/insights/best-programming-language-to-learn-india",
        label: "Best programming language to learn",
      },
      {
        href: "/insights/online-vs-offline-coding-course",
        label: "Online vs offline coding course",
      },
      { href: "/services/ai-agents", label: "Our AI agent work" },
    ],
    cta: CTA,
  },
  {
    path: "/academy/software-validation-gamp5-course",
    kind: "course",
    parent: ACADEMY,
    trackIndex: 3,
    crumb: "Software validation course",
    kicker: "Academy · Software Validation · 8 weeks",
    title: "Computer system validation and GAMP 5",
    titleAccent: "training.",
    metaTitle: "Computer System Validation Course: GAMP 5 & Part 11",
    description:
      "An 8-week live online CSV course for QA and life-science professionals in India — GAMP 5, URS, risk, IQ/OQ/PQ and 21 CFR Part 11, practised on a working LIMS.",
    keywords: [
      "computer system validation course",
      "GAMP 5 training",
      "CSV course India",
      "21 CFR Part 11 training",
      "software validation course for pharma",
      "CSV training Chandigarh",
      "IQ OQ PQ training",
      "data integrity ALCOA+ training",
    ],
    lead: "Eight weeks of live online training in computer system validation, taught by the team that builds and validates LIMS and pharmacovigilance software — and practised on a working system.",
    answer:
      "Bright Infonet’s Software Validation course is an 8-week live online program for QA and life-science professionals in India. You learn GAMP 5, computer system validation, URS, risk assessment, traceability, IQ/OQ/PQ protocols and 21 CFR Part 11 data integrity, and produce a complete validation pack for a working LIMS.",
    about: [
      "Many people in pharma QA, QC and IT are asked to validate systems without ever seeing how the software is built. This track connects the two: it is taught by a team that develops regulated software, including a LIMS and a pharmacovigilance platform, and writes the validation documents that go with it.",
      "You start with GxP principles and GAMP 5 categories and lifecycle, then write a URS, run a risk assessment and build a traceability matrix. After that you draft and execute IQ, OQ and PQ scripts, and close with 21 CFR Part 11, EU Annex 11 concepts, ALCOA+ data integrity and the validation summary report.",
      "Classes are live online, so working professionals across India can attend. We also explain how the risk-based thinking in FDA’s Computer Software Assurance guidance fits alongside traditional CSV, so your approach matches what reviewers now expect.",
    ],
    facts: [
      { k: "Duration", v: "8 weeks" },
      { k: "Format", v: "Live online" },
      { k: "Level", v: "QA & life-science" },
      { k: "Stack", v: "GAMP 5 · CSV · Part 11" },
    ],
    sections: [
      {
        id: "csv-what-you-produce",
        kicker: "What you produce",
        title: "A validation pack you",
        accent: "wrote yourself.",
        lead: "Every document is reviewed the way an auditor would read it.",
        cards: [
          {
            t: "User requirements (URS)",
            d: "Clear, testable requirements for a real LIMS, written from the users’ point of view.",
          },
          {
            t: "Risk assessment",
            d: "A risk-based analysis that decides where testing effort actually goes.",
          },
          {
            t: "Traceability matrix",
            d: "Every requirement linked to its risk, test and result, with no gaps left for an inspector to find.",
          },
          {
            t: "IQ / OQ / PQ protocols",
            d: "Test scripts with acceptance criteria, executed on a working system with evidence captured.",
          },
          {
            t: "Part 11 assessment",
            d: "Audit trails, e-signatures, access control and records checked against the regulation.",
          },
          {
            t: "Validation summary report",
            d: "The closing document that ties the pack together, including how deviations were handled.",
          },
        ],
      },
      {
        id: "csv-how-you-learn",
        kicker: "How you learn",
        title: "Validation from",
        accent: "the builder’s side.",
        cards: [
          {
            t: "Taught by a GxP software team",
            d: "Mentors build and validate regulated software, so you see both the system and the paperwork.",
          },
          {
            t: "A live system to test",
            d: "You execute scripts on a working LIMS rather than a slide of screenshots.",
          },
          {
            t: "Document reviews",
            d: "Written feedback on your URS, protocols and reports, as a QA reviewer would give it.",
          },
          {
            t: "Risk-based thinking",
            d: "How GAMP 5 and Computer Software Assurance ideas help you test what matters most.",
          },
          {
            t: "Live online for professionals",
            d: "Sessions you can join from anywhere in India, with recordings for revision.",
          },
          {
            t: "Interview and audit readiness",
            d: "Practice explaining your validation decisions the way you would to an interviewer or inspector.",
          },
        ],
      },
    ],
    fit: [
      "You work in pharma QA, QC, IT or a CRO and are asked to validate computerised systems.",
      "You are a life-science or pharmacy graduate aiming for CSV or QA roles.",
      "You are a developer or tester moving into regulated software.",
      "You want to practise on a real system and have your documents reviewed.",
    ],
    faqs: [
      {
        q: "What is the fee for the computer system validation course?",
        a: "Fees depend on the track and format; contact us for the current fee and batch dates.",
      },
      {
        q: "Who should take GAMP 5 training?",
        a: "QA, QC and IT professionals in pharma, biotech, labs and CROs, plus life-science graduates and testers who want to work on validated systems.",
      },
      {
        q: "Does the CSV course cover 21 CFR Part 11?",
        a: "Yes. One module covers Part 11 requirements such as audit trails, electronic signatures and access control, along with EU Annex 11 concepts and ALCOA+ data integrity.",
      },
      {
        q: "Do I need a coding background for the validation course?",
        a: "No. The course focuses on validation documents and testing practice; basic comfort with software and spreadsheets is enough.",
      },
      {
        q: "Do you offer placement after the CSV course?",
        a: "We help with your portfolio of validation documents, reviews and interview preparation, but we don’t promise jobs.",
      },
      {
        q: "Is Computer Software Assurance covered?",
        a: "Yes. We explain how FDA’s risk-based Computer Software Assurance approach relates to traditional CSV and how to apply it sensibly.",
      },
    ],
    related: [
      { href: "/academy", label: "Bright Infonet Academy" },
      {
        href: "/insights/gamp-5-software-validation-guide",
        label: "GAMP 5 software validation guide",
      },
      {
        href: "/insights/21-cfr-part-11-compliance-checklist-lims",
        label: "21 CFR Part 11 checklist for LIMS",
      },
      {
        href: "/insights/csv-vs-csa-computer-software-assurance",
        label: "CSV vs CSA explained",
      },
      {
        href: "/services/regulated-software",
        label: "Our regulated software work",
      },
      {
        href: "/gxp-software-development-india",
        label: "GxP software development in India",
      },
    ],
    cta: CTA,
  },

  // ─── City training pages ─────────────────────────────────────────
  {
    path: "/academy/software-training-institute-panchkula",
    kind: "training",
    parent: ACADEMY,
    city: "Panchkula",
    crumb: "Software training · Panchkula",
    kicker: "Academy · Software training · Panchkula",
    title: "Software training for",
    titleAccent: "Panchkula students.",
    metaTitle: "Software Training Institute in Panchkula",
    description:
      "Software training for Panchkula students — full-stack web, Flutter, AI agents and software validation, taught by working engineers in small project cohorts.",
    keywords: [
      "best IT training institute in Panchkula",
      "software training Panchkula",
      "coding classes Panchkula",
      "IT courses Panchkula",
      "web development course Panchkula",
      "Flutter course Panchkula",
      "computer courses Panchkula for graduates",
    ],
    lead: "Career-focused coding classes for students and graduates in Panchkula — four tracks, small cohorts, and real projects reviewed by engineers who build client software every week.",
    answer:
      "Bright Infonet Academy offers software training for Panchkula students in four tracks: full-stack web development, Flutter mobile apps, applied AI and agents, and software validation for pharma. Classes are small and taught by working engineers, and every student builds real, code-reviewed projects that become a portfolio for job applications.",
    about: [
      "Panchkula has plenty of students finishing B.Tech, BCA, MCA and science degrees who want a software career without moving to a metro first. Our Academy is built for them: practical training close to home, taught by people who write production code rather than full-time instructors.",
      "The web and Flutter tracks run hybrid, so you can attend sessions in the Tricity and follow along online on other days. The AI and validation tracks are live online, which suits working professionals in Panchkula’s industrial areas and anyone with a daily commute.",
      "Choosing an institute is a big decision, so ask every option the same questions: who teaches, what you will actually build, how your code is reviewed and what help you get preparing for interviews. We are happy to answer those in detail before you apply.",
    ],
    facts: [
      { k: "Tracks", v: "Web · Flutter · AI · Validation" },
      { k: "Format", v: "Hybrid and live online" },
      { k: "Cohorts", v: "Small, mentor-led" },
      { k: "Outcome", v: "A reviewed portfolio" },
    ],
    sections: [
      {
        id: "panchkula-tracks",
        kicker: "Tracks",
        title: "Four tracks for",
        accent: "Panchkula learners.",
        lead: "Pick the track that matches where you are now and the job you want next.",
        cards: [
          {
            t: "Full-stack Web · 16 weeks",
            d: "Hybrid, for beginners. React, Next.js, Node and Postgres, ending with a deployed SaaS dashboard.",
          },
          {
            t: "Mobile with Flutter · 12 weeks",
            d: "Hybrid, for those with some coding. Build and publish your own app to the Play Store.",
          },
          {
            t: "Applied AI & Agents · 10 weeks",
            d: "Live online, for developers. LLMs, RAG, tool use and evals on a real business workflow.",
          },
          {
            t: "Software Validation · 8 weeks",
            d: "Live online, for QA and life-science. GAMP 5, CSV and Part 11 on a working LIMS.",
          },
          {
            t: "Not sure which track?",
            d: "Tell us your background and goals and we will suggest a starting point honestly — including if you should wait.",
          },
          {
            t: "Industrial training",
            d: "Need 6-week or 6-month training for your degree? Our project-based industrial training builds on the same tracks.",
          },
        ],
      },
      {
        id: "panchkula-why",
        kicker: "Why train with a studio",
        title: "Learn where software",
        accent: "gets built.",
        cards: [
          {
            t: "Working-engineer mentors",
            d: "The people teaching you ship client software every week, so the syllabus stays current.",
          },
          {
            t: "Real briefs",
            d: "Projects follow the same brief, review and QA steps as the products we build for clients.",
          },
          {
            t: "Code review, every time",
            d: "Written feedback on your pull requests, so you learn what good code looks like in a team.",
          },
          {
            t: "Close to home",
            d: "Tricity sessions without relocating, plus live online classes for the days you can’t travel.",
          },
          {
            t: "Portfolio you can show",
            d: "Deployed projects and a reviewed Git history — the things hiring teams actually check.",
          },
          {
            t: "Honest guidance",
            d: "Straight answers about fees, effort and outcomes, with no inflated placement claims.",
          },
        ],
      },
    ],
    fit: [
      "You live or study in Panchkula and want practical software training nearby.",
      "You are finishing B.Tech, BCA, MCA or a science degree and want a job-ready portfolio.",
      "You want to be taught by engineers who build real products.",
      "You prefer small cohorts where a mentor knows your code.",
    ],
    faqs: [
      {
        q: "Which is the best IT training institute in Panchkula?",
        a: "The best fit depends on your goals. Compare who teaches, what you build, how code is reviewed and what interview help you get; we are glad to answer all of those about our Academy.",
      },
      {
        q: "What are the fees for software training in Panchkula?",
        a: "Fees depend on the track and format; contact us for the current fee and batch dates.",
      },
      {
        q: "Do you offer coding classes for complete beginners in Panchkula?",
        a: "Yes. The full-stack web track starts from HTML, CSS and JavaScript and is designed for beginners.",
      },
      {
        q: "Are classes online or offline?",
        a: "The web and Flutter tracks are hybrid with in-person sessions in the Tricity; the AI and software validation tracks are live online.",
      },
      {
        q: "Do you guarantee placement?",
        a: "No. We help with your portfolio, code reviews, CV and interview preparation, but we don’t promise jobs.",
      },
      {
        q: "Can I do industrial training for my degree with you?",
        a: "Yes, we offer project-based industrial training. Check your university’s requirements for duration and documents first, and we will tell you what we can provide.",
      },
    ],
    related: [
      { href: "/academy", label: "Bright Infonet Academy" },
      {
        href: "/insights/best-it-training-institute-chandigarh-mohali-panchkula",
        label: "How to choose an IT training institute",
      },
      {
        href: "/academy/full-stack-web-development-course",
        label: "Full-stack web development course",
      },
      {
        href: "/academy/flutter-app-development-course",
        label: "Flutter app development course",
      },
      {
        href: "/academy/industrial-training-chandigarh",
        label: "Industrial training in Chandigarh",
      },
      {
        href: "/insights/software-developer-career-chandigarh-tricity",
        label: "Software developer careers in the Tricity",
      },
    ],
    cta: CTA,
  },
  {
    path: "/academy/software-training-institute-chandigarh",
    kind: "training",
    parent: ACADEMY,
    city: "Chandigarh",
    crumb: "Software training · Chandigarh",
    kicker: "Academy · Software training · Chandigarh",
    title: "Software training institute in",
    titleAccent: "Chandigarh.",
    metaTitle: "Software Training Institute in Chandigarh",
    description:
      "IT courses in Chandigarh from a working software studio — full-stack web, Flutter, AI agents and GAMP 5 validation, in small cohorts with reviewed projects.",
    keywords: [
      "software training institute Chandigarh",
      "IT courses Chandigarh",
      "software courses in Chandigarh",
      "coding institute Chandigarh",
      "programming classes Chandigarh",
      "job oriented courses Chandigarh",
      "web development training Chandigarh",
    ],
    lead: "Job-focused IT courses for Chandigarh students, graduates and career-changers — taught inside a software studio by engineers who ship web, mobile, AI and regulated software.",
    answer:
      "Bright Infonet Academy is a software training program in the Chandigarh Tricity run by a working software studio. It offers four tracks — full-stack web, Flutter mobile, applied AI and agents, and GAMP 5 software validation — in small cohorts, with every project code-reviewed by engineers so you graduate with a real portfolio.",
    about: [
      "Chandigarh has no shortage of computer courses. What is harder to find is training taught by people who build software for clients every week, using the same review and QA standards on student projects that they use on paid work. That is what our Academy is designed to offer.",
      "The four tracks cover the areas where our studio works: web platforms, Flutter apps, AI agents and validated software for pharma and labs. Each track ends in a capstone that looks like real work — a deployed dashboard, a published app, a measured agent or a full validation pack.",
      "Chandigarh’s colleges and its large pool of graduates and professionals mean many learners need flexibility. Web and Flutter run hybrid with in-person sessions in the Tricity, while AI and validation are live online so you can join after work.",
    ],
    facts: [
      { k: "Tracks", v: "Web · Flutter · AI · Validation" },
      { k: "Format", v: "Hybrid and live online" },
      { k: "Mentors", v: "Working studio engineers" },
      { k: "Outcome", v: "Deployed, reviewed projects" },
    ],
    sections: [
      {
        id: "chandigarh-tracks",
        kicker: "IT courses",
        title: "Four tracks,",
        accent: "one standard.",
        lead: "Every track is taught and reviewed by engineers from our studio.",
        cards: [
          {
            t: "Full-stack Web",
            d: "16 weeks, hybrid, beginner to job-ready. React, Next.js, Node and Postgres with a deployed capstone.",
          },
          {
            t: "Mobile with Flutter",
            d: "12 weeks, hybrid, for those with some coding. Ends with your own app on the Play Store.",
          },
          {
            t: "Applied AI & Agents",
            d: "10 weeks, live online, for developers. RAG, tool-using agents and evals on a real workflow.",
          },
          {
            t: "Software Validation",
            d: "8 weeks, live online, for QA and life-science. GAMP 5, CSV and 21 CFR Part 11 on a working LIMS.",
          },
          {
            t: "For career-changers",
            d: "Graduates from non-CS backgrounds can start with the web track and build up from the basics.",
          },
          {
            t: "For working professionals",
            d: "Live online AI and validation tracks fit around a job in Chandigarh or anywhere in India.",
          },
        ],
      },
      {
        id: "chandigarh-what-to-expect",
        kicker: "What to expect",
        title: "Training that feels like",
        accent: "your first job.",
        cards: [
          {
            t: "Briefs, not exercises",
            d: "Projects start from a brief with users and constraints, the way client work does.",
          },
          {
            t: "Pull requests and reviews",
            d: "You submit code through Git and get written feedback from an engineer.",
          },
          {
            t: "Friday-style demos",
            d: "You present working software regularly, as our studio does with clients.",
          },
          {
            t: "Small cohorts",
            d: "Mentors know your projects and where you get stuck.",
          },
          {
            t: "Portfolio and interview prep",
            d: "Help presenting your work, cleaning your GitHub and practising technical interviews.",
          },
          {
            t: "Clear, honest answers",
            d: "We tell you what each track demands and what it can and can’t do for your career.",
          },
        ],
      },
    ],
    fit: [
      "You are in Chandigarh and want an IT course tied to real software work.",
      "You want mentors who build client products, not only teach.",
      "You want capstone projects you can demo in interviews.",
      "You value honest guidance over placement promises.",
    ],
    faqs: [
      {
        q: "Which software training institute in Chandigarh should I choose?",
        a: "Compare who teaches, what you build, how your code is reviewed and what interview support you get. Ask to see sample projects and the syllabus before paying anywhere, including with us.",
      },
      {
        q: "What IT courses do you offer in Chandigarh?",
        a: "Four tracks: full-stack web development, Flutter mobile apps, applied AI and agents, and software validation (GAMP 5, CSV, Part 11).",
      },
      {
        q: "What are the course fees?",
        a: "Fees depend on the track and format; contact us for the current fee and batch dates.",
      },
      {
        q: "Do you provide 100% placement?",
        a: "No. We help with your portfolio, code reviews, CV and interview preparation, but we don’t promise jobs, and we would be cautious of anyone who does.",
      },
      {
        q: "Are the classes in person in Chandigarh?",
        a: "The web and Flutter tracks are hybrid with in-person Tricity sessions; the AI and validation tracks run live online.",
      },
      {
        q: "Do you offer industrial training for B.Tech, BCA and MCA?",
        a: "Yes, project-based industrial training is available. Check your university’s requirements first so we can confirm what fits.",
      },
    ],
    related: [
      { href: "/academy", label: "Bright Infonet Academy" },
      {
        href: "/insights/best-it-training-institute-chandigarh-mohali-panchkula",
        label: "How to choose an IT training institute",
      },
      {
        href: "/academy/ai-agents-course",
        label: "Applied AI & agents course",
      },
      {
        href: "/academy/software-validation-gamp5-course",
        label: "Software validation (GAMP 5) course",
      },
      {
        href: "/insights/online-vs-offline-coding-course",
        label: "Online vs offline coding course",
      },
      {
        href: "/insights/software-developer-career-chandigarh-tricity",
        label: "Software developer careers in the Tricity",
      },
    ],
    cta: CTA,
  },
  {
    path: "/academy/it-training-institute-mohali",
    kind: "training",
    parent: ACADEMY,
    city: "Mohali",
    crumb: "IT training · Mohali",
    kicker: "Academy · IT training · Mohali",
    title: "IT training for",
    titleAccent: "Mohali’s tech scene.",
    metaTitle: "IT Training Institute in Mohali: Coding Courses",
    description:
      "Coding courses for Mohali students and developers — full-stack web, Flutter, AI agents and software validation, taught by working engineers on real projects.",
    keywords: [
      "IT training institute Mohali",
      "coding institute Mohali",
      "software training Mohali",
      "IT courses Mohali",
      "full stack course Mohali",
      "app development course Mohali",
      "AI course Mohali",
    ],
    lead: "Practical coding courses for Mohali’s students, freshers and working developers — four tracks built around the skills local software teams hire for.",
    answer:
      "Bright Infonet Academy offers IT training for Mohali students and developers in four tracks: full-stack web, Flutter mobile apps, applied AI and agents, and GAMP 5 software validation. Small cohorts are taught by engineers from our software studio, and every project is code-reviewed so you finish with a portfolio employers can check.",
    about: [
      "Mohali has become one of the Tricity’s main software hubs, with IT parks, product startups and service companies. Many of them want freshers who can already work in a team: use Git, take code review, and ship a feature end to end. Our tracks are designed around those habits.",
      "If you are starting out, the full-stack web track takes you from basics to a deployed app. If you already code, Flutter adds mobile to your skills and the AI track teaches retrieval, agents and evals. For pharma and lab professionals, the validation track covers GAMP 5 and Part 11 on a working LIMS.",
      "Working developers in Mohali can take the live online AI and validation tracks after office hours. The web and Flutter tracks are hybrid, with in-person sessions in the Tricity and the same classes available online.",
    ],
    facts: [
      { k: "Tracks", v: "Web · Flutter · AI · Validation" },
      { k: "Format", v: "Hybrid and live online" },
      { k: "For", v: "Freshers and working developers" },
      { k: "Outcome", v: "Code-reviewed portfolio" },
    ],
    sections: [
      {
        id: "mohali-tracks",
        kicker: "Coding courses",
        title: "Tracks for where",
        accent: "you are now.",
        cards: [
          {
            t: "Starting from zero",
            d: "Full-stack Web, 16 weeks, hybrid. From HTML and JavaScript to a deployed Next.js and Postgres app.",
          },
          {
            t: "Adding mobile",
            d: "Mobile with Flutter, 12 weeks, hybrid. One codebase for Android and iOS, published to the Play Store.",
          },
          {
            t: "Moving into AI",
            d: "Applied AI & Agents, 10 weeks, live online. RAG, tool-using agents and evals for developers.",
          },
          {
            t: "Working in pharma or labs",
            d: "Software Validation, 8 weeks, live online. GAMP 5, CSV and Part 11 practised on a real LIMS.",
          },
          {
            t: "After-work learning",
            d: "Live online tracks suit developers and QA staff working in Mohali’s IT and pharma companies.",
          },
          {
            t: "Degree training",
            d: "Project-based industrial training for B.Tech, BCA and MCA students, built on the same tracks.",
          },
        ],
      },
      {
        id: "mohali-team-habits",
        kicker: "Team-ready habits",
        title: "What Mohali teams",
        accent: "look for.",
        lead: "These are practised on every project, not taught in a single lecture.",
        cards: [
          {
            t: "Git workflow",
            d: "Branches, commits and pull requests as your normal way of working.",
          },
          {
            t: "Taking code review",
            d: "Responding to written feedback and improving code, the way you will in a job.",
          },
          {
            t: "Shipping end to end",
            d: "Features built from brief to deployment, not left half-finished in a notebook.",
          },
          {
            t: "Testing and QA",
            d: "Writing tests and checking your own work before it reaches a reviewer.",
          },
          {
            t: "Explaining your work",
            d: "Regular demos so you can talk through your decisions in an interview.",
          },
          {
            t: "A portfolio to prove it",
            d: "Deployed projects and a reviewed Git history, with help presenting both.",
          },
        ],
      },
    ],
    fit: [
      "You study or work in Mohali and want training tied to real software work.",
      "You are a fresher who wants team-ready habits before your first job.",
      "You are a working developer adding Flutter or AI to your skills.",
      "You work in pharma or lab QA and need practical CSV training.",
    ],
    faqs: [
      {
        q: "Which is a good IT training institute in Mohali?",
        a: "Look at who teaches, what projects you build, how code is reviewed and what interview help you get. We are happy to walk you through all of that for our Academy before you apply.",
      },
      {
        q: "What are the fees for coding courses in Mohali?",
        a: "Fees depend on the track and format; contact us for the current fee and batch dates.",
      },
      {
        q: "Can working professionals in Mohali join?",
        a: "Yes. The AI and validation tracks run live online and suit people with day jobs; ask us about batch timings for the hybrid tracks.",
      },
      {
        q: "Do you have courses for complete beginners?",
        a: "Yes. The full-stack web track starts from the basics and is designed for beginners.",
      },
      {
        q: "Do you offer placement in Mohali IT companies?",
        a: "We help with your portfolio, code reviews, CV and interview preparation, but we don’t promise jobs or placements with specific companies.",
      },
      {
        q: "Do you offer 6 weeks or 6 months training for students?",
        a: "Yes, project-based industrial training is available. Check your university’s rules on duration and documents first, and we will confirm what we can offer.",
      },
    ],
    related: [
      { href: "/academy", label: "Bright Infonet Academy" },
      {
        href: "/insights/skills-for-placement-btech-bca-mca",
        label: "Skills for placement: B.Tech, BCA, MCA",
      },
      {
        href: "/academy/full-stack-web-development-course",
        label: "Full-stack web development course",
      },
      {
        href: "/academy/ai-agents-course",
        label: "Applied AI & agents course",
      },
      {
        href: "/academy/industrial-training-chandigarh",
        label: "Industrial training in Chandigarh",
      },
      {
        href: "/insights/best-it-training-institute-chandigarh-mohali-panchkula",
        label: "How to choose an IT training institute",
      },
    ],
    cta: CTA,
  },
  {
    path: "/academy/industrial-training-chandigarh",
    kind: "training",
    parent: ACADEMY,
    city: "Chandigarh",
    crumb: "Industrial training · Chandigarh",
    kicker: "Academy · Industrial training · Tricity",
    title: "Industrial training on",
    titleAccent: "live projects.",
    metaTitle: "6 Months Industrial Training in Chandigarh",
    description:
      "6-week and 6-month industrial training in Chandigarh and Mohali for B.Tech, BCA and MCA students — live, code-reviewed projects with a working software studio.",
    keywords: [
      "6 months industrial training in Chandigarh",
      "6 weeks training Mohali",
      "live project training for B.Tech BCA MCA",
      "industrial training Chandigarh",
      "summer training Chandigarh",
      "internship for CSE students Chandigarh",
      "6 weeks industrial training Panchkula",
    ],
    lead: "Project-based industrial training for B.Tech, BCA and MCA students in the Tricity — you build real software in a team, with code review from engineers who ship client work.",
    answer:
      "Bright Infonet offers 6-week and 6-month industrial training in Chandigarh for B.Tech, BCA and MCA students. You work on real, code-reviewed projects in web, Flutter or AI with engineers from our software studio, using Git, sprints and demos. Check your university’s requirements first so we can confirm the right duration.",
    about: [
      "Most degree programs in Punjab, Haryana and Chandigarh ask students to complete industrial training — often around six weeks after the second or third year, and up to six months in the final semester. The exact rules differ between universities and even departments, so always confirm your own requirements before you choose a program.",
      "Our training is built on the same tracks as the Academy. Shorter programs focus on core skills and a small project; longer ones add a team project from a real brief, worked in sprints with pull requests, code review and regular demos — close to how a junior developer spends their first months at a company.",
      "The aim is that you finish with work you can explain in an interview, not just a file for your college. Before you apply, we talk through your university’s requirements and tell you plainly what we can provide.",
    ],
    facts: [
      { k: "Durations", v: "6 weeks · 6 months" },
      { k: "For", v: "B.Tech · BCA · MCA" },
      { k: "Tracks", v: "Web · Flutter · AI" },
      { k: "Work style", v: "Git, sprints, code review" },
    ],
    sections: [
      {
        id: "industrial-how-it-works",
        kicker: "How it works",
        title: "From first day to",
        accent: "final demo.",
        cards: [
          {
            t: "Check your requirements",
            d: "Share your university’s rules on duration, timing and documents so we can plan around them.",
          },
          {
            t: "Pick a track",
            d: "Web, Flutter or AI, based on your current skills and the roles you want.",
          },
          {
            t: "Skills sprint",
            d: "A focused start on the tools and practices you need before joining project work.",
          },
          {
            t: "Project from a brief",
            d: "You build features for a real brief with users, constraints and a definition of done.",
          },
          {
            t: "Reviews and demos",
            d: "Every change goes through code review, and you demo working software regularly.",
          },
          {
            t: "Wrap-up",
            d: "A final demo and write-up of what you built, ready for your portfolio and interviews.",
          },
        ],
      },
      {
        id: "industrial-6-weeks-vs-6-months",
        kicker: "6 weeks or 6 months",
        title: "Choose the length that",
        accent: "fits your degree.",
        lead: "Your university decides the minimum; your goals decide how much you take on.",
        cards: [
          {
            t: "6 weeks · core skills",
            d: "Usually taken in a summer break. Learn a stack properly and build one reviewed project.",
          },
          {
            t: "6 months · team project",
            d: "Usually in the final semester. Deeper skills plus a longer team project from a real brief.",
          },
          {
            t: "B.Tech CSE and IT",
            d: "Web, Flutter or AI tracks, depending on what you already know.",
          },
          {
            t: "BCA and MCA",
            d: "Full-stack web is the common starting point; Flutter suits students with some coding.",
          },
          {
            t: "Hybrid attendance",
            d: "In-person sessions in the Tricity, with live online options where your university allows it.",
          },
          {
            t: "Honest expectations",
            d: "We help with portfolio and interview prep, and we tell you clearly what we can’t promise.",
          },
        ],
      },
    ],
    fit: [
      "You are a B.Tech, BCA or MCA student who needs 6-week or 6-month industrial training.",
      "You want to work on real, reviewed code rather than a copied project.",
      "You study in Chandigarh, Mohali, Panchkula or nearby and can attend Tricity sessions.",
      "You want training that also prepares you for placement interviews.",
    ],
    faqs: [
      {
        q: "Where can I do 6 months industrial training in Chandigarh?",
        a: "Look for a company where you work on real code with reviews, not just classroom lectures. We offer project-based industrial training in the Tricity; check your university’s requirements first so we can confirm fit.",
      },
      {
        q: "What documents will I get after industrial training?",
        a: "Universities ask for different documents, so share your college’s requirements with us before you join and we will tell you exactly what we can provide.",
      },
      {
        q: "What are the fees for industrial training?",
        a: "Fees depend on the track and format; contact us for the current fee and batch dates.",
      },
      {
        q: "Is the industrial training paid or stipend-based?",
        a: "It is a training program rather than a paid internship, so we don’t advertise stipends. Contact us about the current fee and batch dates.",
      },
      {
        q: "Do you give placement after industrial training?",
        a: "We help with your portfolio, code reviews and interview preparation, but we don’t promise jobs.",
      },
      {
        q: "Can I do 6 weeks training from Mohali or Panchkula?",
        a: "Yes. Students from across the Tricity join; sessions are hybrid, and we can discuss timings around your semester.",
      },
    ],
    related: [
      { href: "/academy", label: "Bright Infonet Academy" },
      {
        href: "/insights/six-months-industrial-training-chandigarh",
        label: "Guide to 6 months industrial training",
      },
      {
        href: "/insights/skills-for-placement-btech-bca-mca",
        label: "Skills for placement: B.Tech, BCA, MCA",
      },
      {
        href: "/academy/full-stack-web-development-course",
        label: "Full-stack web development course",
      },
      {
        href: "/academy/flutter-app-development-course",
        label: "Flutter app development course",
      },
      {
        href: "/insights/software-developer-career-chandigarh-tricity",
        label: "Software developer careers in the Tricity",
      },
    ],
    cta: CTA,
  },
];
