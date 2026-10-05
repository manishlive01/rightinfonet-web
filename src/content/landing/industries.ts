import type { Landing } from "./types";

const INDUSTRIES_PARENT = { name: "Industries", path: "/industries" };

/** Industry pages, served at /industries/… — one per sector we build for, linking out to services. */
export const INDUSTRY_PAGES: Landing[] = [
  {
    path: "/industries/pharma-software",
    kind: "industry",
    parent: INDUSTRIES_PARENT,
    serviceType: "Pharmaceutical software development",
    crumb: "Pharma software",
    kicker: "Industries · Pharma & life sciences",
    title: "Pharma software that holds up",
    titleAccent: "in an inspection.",
    metaTitle: "Pharma Software Development · LIMS, PV, QMS, CSV",
    description:
      "Software for pharma and life-science teams: QC and R&D LIMS, pharmacovigilance, QMS workflows and computer system validation, built for Part 11 and Annex 11.",
    keywords: [
      "pharma software development company",
      "pharmaceutical software development India",
      "pharma QMS software development",
      "life sciences software development",
      "GxP software for pharma",
      "pharma IT solutions India",
    ],
    lead: "Quality, safety and laboratory systems for pharma manufacturers, biotech companies and CROs — with the audit trail, e-signatures and validation evidence designed in.",
    answer:
      "Bright Infonet is a Panchkula-based software company that builds software for pharma and life-science teams: LIMS for QC and R&D labs, pharmacovigilance systems, QMS workflows such as deviations and CAPA, and computer system validation. Every system is designed for 21 CFR Part 11 and EU Annex 11 controls, and your QA team keeps validation sign-off.",
    about: [
      "A pharma company rarely needs “an app”. It needs a set of systems that each carry regulatory weight: the QC lab records results that release batches, the safety team reports adverse events against legal deadlines, and quality assurance tracks every deviation to closure. This page is the map of how we help across those areas.",
      "Each area has its own specialist page. LIMS covers samples, stability studies, instrument data and certificates of analysis. Pharmacovigilance covers case intake, MedDRA coding, E2B(R3) reporting and signals. Computer system validation covers proving that any GxP system — ours or a vendor’s — is fit for its intended use.",
      "What ties them together is the same engineering discipline: requirements that trace to tests, controls for data integrity under ALCOA+, change control after go-live, and documents your QA can review. We have built PVgenix, a pharmacovigilance SaaS, and a LIMS for pharma QC and diagnostic labs, both described on our work page.",
    ],
    facts: [
      { k: "Systems", v: "LIMS · PV · QMS" },
      { k: "Regulations", v: "Part 11 · Annex 11" },
      { k: "Validation", v: "GAMP 5 · CSA" },
      { k: "Sign-off", v: "Your QA team" },
    ],
    sections: [
      {
        id: "pharma-systems",
        kicker: "Where we help",
        title: "Systems across the",
        accent: "pharma value chain.",
        cards: [
          {
            t: "QC & R&D laboratories",
            d: "LIMS for sample login, test methods, specifications, stability pulls, OOS handling and certificates of analysis.",
          },
          {
            t: "Drug safety",
            d: "Pharmacovigilance case management from intake and triage to coding, assessment and regulatory submission.",
          },
          {
            t: "Quality management",
            d: "Deviations, CAPA, change control, complaints and training records routed with due dates and e-signatures.",
          },
          {
            t: "Document control",
            d: "SOP authoring, review, approval, effective dates and periodic review, with controlled versions only.",
          },
          {
            t: "Validation of existing systems",
            d: "CSV or CSA for systems you already run — commercial LIMS, ERP modules, QMS tools or GxP spreadsheets.",
          },
          {
            t: "Data and reporting",
            d: "Trend reports and dashboards for quality reviews, built on validated data rather than exported copies.",
          },
        ],
      },
      {
        id: "pharma-controls",
        kicker: "Built in, not bolted on",
        title: "Controls inspectors",
        accent: "ask about first.",
        cards: [
          {
            t: "Audit trail by design",
            d: "Every GxP record keeps who, what, when and why, with old and new values that cannot be edited or switched off by users.",
          },
          {
            t: "Electronic signatures",
            d: "Signatures bound to the record with the signer’s name, date, time and meaning, as Part 11 describes.",
          },
          {
            t: "Role and duty separation",
            d: "Analysts, reviewers and approvers get different rights, and nobody approves their own work.",
          },
          {
            t: "Traceable requirements",
            d: "A traceability matrix links each user requirement to its design and test, so coverage gaps show early.",
          },
          {
            t: "Change control after go-live",
            d: "Releases go through impact assessment and regression testing so the validated state is kept.",
          },
          {
            t: "Backup and restore tested",
            d: "Retention, archive and restore procedures are tested, not assumed, before the system goes live.",
          },
        ],
      },
    ],
    fit: [
      "You are a pharma manufacturer, biotech company or CRO replacing paper logbooks, spreadsheets or an unsupported system.",
      "You need more than one regulated system and want one partner who understands how they connect.",
      "Your QA team wants requirements, risk assessments and test evidence, not just a working demo.",
      "You have a vendor system in place and need it validated or brought back into a validated state.",
    ],
    faqs: [
      {
        q: "What software does a pharma company need?",
        a: "Most need a LIMS for QC testing, a pharmacovigilance system for adverse events, QMS workflows for deviations, CAPA and change control, and document control for SOPs. Which to build, buy or validate first depends on your current gaps and inspection findings.",
      },
      {
        q: "Should we build custom pharma software or buy a commercial product?",
        a: "Buy when a product fits your process with configuration only; build when your workflows are unusual or packaged tools need heavy workarounds. Either way the system must be validated, and we can do that for both.",
      },
      {
        q: "Do you work with Indian pharma companies exporting to the US and EU?",
        a: "Yes. We design for 21 CFR Part 11 and EU Annex 11 together, because export-oriented sites are inspected against both, and we work with teams anywhere in India and abroad.",
      },
      {
        q: "Who is responsible for compliance, you or us?",
        a: "We build the technical controls and prepare validation documents. Compliance also depends on your procedures, training and QA decisions, so approval of the validated state stays with your Quality Assurance team.",
      },
      {
        q: "Can different systems share data, for example LIMS and ERP?",
        a: "Yes. We design interfaces with checks so data is not altered in transit, and include them in the validation scope so the integration is tested like the rest of the system.",
      },
      {
        q: "How does a pharma software project usually start?",
        a: "With a short discovery: we review your process, current systems and recent audit observations, then agree the first system to tackle and the validation approach in writing.",
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
        href: "/services/regulated-software",
        label: "All regulated software services",
      },
      {
        href: "/gxp-software-development-india",
        label: "GxP software development in India",
      },
      {
        href: "/insights/gamp-5-software-validation-guide",
        label: "GAMP 5 validation, explained",
      },
    ],
  },
  {
    path: "/industries/diagnostic-lab-software",
    kind: "industry",
    parent: INDUSTRIES_PARENT,
    serviceType: "Diagnostic laboratory software development",
    crumb: "Diagnostic lab software",
    kicker: "Industries · Diagnostic & pathology labs",
    title: "Lab software from sample to",
    titleAccent: "signed report.",
    metaTitle: "Diagnostic Lab Software · LIS/LIMS for NABL Labs",
    description:
      "Software for pathology and diagnostic labs: sample tracking, analyser interfacing, report sign-off and delivery, home collection, and NABL ISO 15189 records.",
    keywords: [
      "diagnostic lab software",
      "pathology lab software development",
      "laboratory information system development",
      "LIS software India",
      "NABL lab software",
      "ISO 15189 LIMS",
      "home sample collection app",
    ],
    lead: "LIS-style workflows for pathology, diagnostic and hospital labs — barcoded samples, analyser results captured automatically, and reports patients and doctors receive quickly.",
    answer:
      "Bright Infonet is a Panchkula-based software company that builds diagnostic lab software: patient and sample registration, barcode tracking, analyser interfacing, result validation, signed reports delivered to patients and doctors, and home-collection apps. It is designed to support the records NABL assessors review under ISO 15189, while accreditation itself stays with your lab.",
    about: [
      "A diagnostic lab runs on volume and turnaround. Samples arrive from walk-ins, collection centres, home visits and hospitals, pass through several analysers and technicians, and must come out as a correct, signed report — often the same day. Every manual step in that chain is a chance to mix up a sample or retype a result wrongly.",
      "Our lab software follows the sample, not the paperwork. Barcodes are printed at registration, analysers send results straight into the system, delta and range checks flag unusual values, and a pathologist reviews and signs before the report is released by SMS, WhatsApp, email or a patient portal.",
      "Labs working towards or holding NABL accreditation under ISO 15189 also need evidence: who handled a sample, which instrument and reagent lot were used, internal quality control results and corrective actions. We keep those records alongside the results so they are ready for assessments without a separate register.",
    ],
    facts: [
      { k: "Workflow", v: "Registration → report" },
      { k: "Instruments", v: "Analyser interfacing" },
      { k: "Standard", v: "NABL · ISO 15189" },
      { k: "Delivery", v: "SMS · WhatsApp · portal" },
    ],
    sections: [
      {
        id: "lab-workflow",
        kicker: "What we build",
        title: "The lab’s daily work,",
        accent: "in one flow.",
        cards: [
          {
            t: "Registration & billing",
            d: "Patient details, test orders, packages, referring doctors and payments captured once at the front desk.",
          },
          {
            t: "Barcoded sample tracking",
            d: "Labels at collection, scans at each bench and a clear status for every tube, so nothing is lost between departments.",
          },
          {
            t: "Analyser interfacing",
            d: "Results imported from analysers through their supported interfaces, instead of being typed in from screens or printouts.",
          },
          {
            t: "Result review & sign-off",
            d: "Reference ranges, delta checks and critical-value alerts before a pathologist approves with an electronic signature.",
          },
          {
            t: "Report delivery",
            d: "Branded PDF reports sent by SMS, WhatsApp or email, with a portal where patients and doctors can download past results.",
          },
          {
            t: "Home collection app",
            d: "Booking, phlebotomist routes, sample handover and payment on a mobile app that works on weak networks.",
          },
        ],
      },
      {
        id: "lab-quality",
        kicker: "Quality & accreditation",
        title: "Records your assessors",
        accent: "will ask for.",
        cards: [
          {
            t: "Internal quality control",
            d: "QC runs logged per analyser with Levey-Jennings charts and rule-based flags before patient results are released.",
          },
          {
            t: "Instrument & reagent logs",
            d: "Calibration, maintenance and reagent lot details linked to the results they affected.",
          },
          {
            t: "Audit trail",
            d: "Every edit to a result or report keeps the old value, the new value, the user and the reason.",
          },
          {
            t: "Turnaround reports",
            d: "Time from collection to release by test and department, so delays are visible and fixable.",
          },
          {
            t: "Multi-centre setup",
            d: "Collection centres and partner labs on one system, with access limited to the data each site needs.",
          },
          {
            t: "Patient data protection",
            d: "Role-based access, consent records and secure report links, designed with India’s DPDP Act in mind.",
          },
        ],
      },
    ],
    fit: [
      "You run a pathology or diagnostic lab and results are still typed in from analyser screens or printouts.",
      "Your lab is preparing for NABL accreditation and needs cleaner records for ISO 15189.",
      "You are adding collection centres or home collection and the current software cannot keep up.",
      "Your packaged lab software does not match your workflow and the vendor cannot change it.",
    ],
    faqs: [
      {
        q: "What is the difference between a LIS and a LIMS?",
        a: "A LIS (laboratory information system) is usually patient-centred and used by clinical and diagnostic labs; a LIMS is sample-centred and common in pharma QC and research. Modern lab software often combines both, and we build to whichever workflow your lab follows.",
      },
      {
        q: "Will your software make our lab NABL accredited?",
        a: "No software can do that. NABL accredits the laboratory against ISO 15189. Our software supports the records assessors look at, such as sample traceability, QC, instrument logs and audit trails.",
      },
      {
        q: "Can you connect our analysers to the software?",
        a: "In most cases, yes. Many analysers offer an interface such as ASTM or HL7 output; we confirm the model-specific protocol and any vendor settings during discovery before committing to it.",
      },
      {
        q: "Can patients get reports on WhatsApp?",
        a: "Yes. Approved reports can be sent through an approved WhatsApp Business provider, SMS or email, with a secure link or portal for downloads.",
      },
      {
        q: "Can one system run several collection centres?",
        a: "Yes. Each centre registers patients and samples into the same system, with access rights limited to its own data and a central view for the main lab.",
      },
      {
        q: "Can you migrate data from our current lab software?",
        a: "Usually, if the old system can export patient, test and result data. We run trial migrations and check totals with your team before switching over.",
      },
    ],
    related: [
      {
        href: "/services/lims-software-development",
        label: "LIMS software development",
      },
      { href: "/industries/pharma-software", label: "Software for pharma" },
      {
        href: "/industries/healthcare-app-development",
        label: "Healthcare app development",
      },
      {
        href: "/insights/21-cfr-part-11-compliance-checklist-lims",
        label: "Part 11 checklist for LIMS",
      },
      {
        href: "/insights/lims-software-development-cost-india",
        label: "LIMS development cost in India",
      },
      { href: "/insights/lims-urs-template#download", label: "Free LIMS URS template" },
      { href: "/work", label: "Our LIMS and other work" },
    ],
  },
  {
    path: "/industries/healthcare-app-development",
    kind: "industry",
    parent: INDUSTRIES_PARENT,
    serviceType: "Healthcare app development",
    crumb: "Healthcare apps",
    kicker: "Industries · Healthcare",
    title: "Healthcare apps patients use and",
    titleAccent: "clinics can trust.",
    metaTitle: "Healthcare App Development · Clinic & Patient Apps",
    description:
      "Healthcare app development for clinics and hospitals: appointment booking, patient apps, telehealth video visits and clinic dashboards, built for the DPDP Act.",
    keywords: [
      "healthcare app development company India",
      "clinic appointment booking app",
      "patient app development",
      "telemedicine app development India",
      "hospital app development",
      "DPDP Act healthcare app",
    ],
    lead: "Booking, patient and telehealth apps for clinics, hospitals and health startups — simple enough for every patient, careful with every record.",
    answer:
      "Bright Infonet is a Panchkula-based software company that builds healthcare apps: clinic appointment booking, patient apps for records and reminders, telehealth video consultations and dashboards for doctors and front-desk staff. Apps ship on iOS and Android from one Flutter codebase and are designed around consent and data protection under India’s DPDP Act.",
    about: [
      "Healthcare apps fail in two ways: patients give up because booking is confusing, or clinics stop trusting the app because it shows the wrong slot or leaks information. We design against both — short flows tested with real patients, and data handling that a doctor would be comfortable defending.",
      "A typical build has three parts: the patient app, a web dashboard for doctors and the front desk, and the backend that keeps schedules, payments and records in sync. Reminders go out by push notification, SMS or WhatsApp so fewer appointments are missed.",
      "Health data is sensitive personal data in every practical sense. Under India’s Digital Personal Data Protection Act, 2023 you need clear notice, consent, purpose limits and a way for patients to exercise their rights. We build those mechanisms in; how your organisation interprets the law stays with your legal advisers.",
    ],
    facts: [
      { k: "Apps", v: "Patient · Doctor · Admin" },
      { k: "Platforms", v: "iOS + Android (Flutter)" },
      { k: "Telehealth", v: "Video visits" },
      { k: "Privacy", v: "DPDP Act by design" },
    ],
    sections: [
      {
        id: "healthcare-apps",
        kicker: "What we build",
        title: "Apps for the whole",
        accent: "care journey.",
        cards: [
          {
            t: "Appointment booking",
            d: "Doctor and slot selection, deposits or full payment, rescheduling and queue status in a few taps.",
          },
          {
            t: "Patient app",
            d: "Prescriptions, lab reports, visit history and family profiles in one place, with reminders patients see.",
          },
          {
            t: "Telehealth consultations",
            d: "Video visits with waiting rooms, consent capture, notes and e-prescriptions issued by the doctor.",
          },
          {
            t: "Clinic dashboard",
            d: "Today’s schedule, walk-ins, billing and follow-ups for the front desk, on any browser.",
          },
          {
            t: "Doctor app",
            d: "Patient summaries, notes and prescriptions on the phone, so doctors are not tied to one desk.",
          },
          {
            t: "Integrations",
            d: "Payment gateways, SMS and WhatsApp providers, lab reports and existing hospital software where they offer an interface.",
          },
        ],
      },
      {
        id: "healthcare-data",
        kicker: "Data protection",
        title: "Careful with data",
        accent: "by default.",
        cards: [
          {
            t: "Notice and consent",
            d: "Plain-language notices and consent recorded per purpose, with the option to withdraw later.",
          },
          {
            t: "Least-privilege access",
            d: "Front desk, nurses and doctors see only what their role needs, and every view of a record can be logged.",
          },
          {
            t: "Encryption",
            d: "Data encrypted in transit and at rest, with secure links for reports instead of open attachments.",
          },
          {
            t: "Patient rights",
            d: "Ways for patients to access, correct or ask to erase their data, handled through a tracked workflow.",
          },
          {
            t: "Retention rules",
            d: "Records kept as long as your medical and legal obligations require, and removed when they end.",
          },
          {
            t: "Breach readiness",
            d: "Monitoring, alerts and an incident log so a security issue can be assessed and reported quickly.",
          },
        ],
      },
    ],
    fit: [
      "Your clinic or hospital takes bookings by phone and wants patients to book and pay online.",
      "You are launching a telehealth or health-tech product and need a team that understands patient data.",
      "Patients miss appointments and follow-ups because reminders do not reach them.",
      "You want one team for the patient app, the clinic dashboard and the backend.",
    ],
    faqs: [
      {
        q: "How much does a healthcare app cost to build in India?",
        a: "It depends on the number of apps (patient, doctor, admin), telehealth, payments and integrations. We give a written, itemised estimate after a short discovery and can phase the build so a booking app launches first.",
      },
      {
        q: "Does the DPDP Act apply to clinic apps?",
        a: "If your app collects personal data of people in India digitally, the Digital Personal Data Protection Act, 2023 applies. We build notice, consent and data-rights features; your legal advisers confirm how the Act and its rules apply to you.",
      },
      {
        q: "Can doctors do video consultations in the app?",
        a: "Yes. We build video visits with waiting rooms, consent capture and visit notes, following the Telemedicine Practice Guidelines that registered doctors in India work under.",
      },
      {
        q: "Will the app work for patients with basic phones and slow internet?",
        a: "We design for that: light screens, few steps, and SMS or WhatsApp reminders and report links for patients who do not use the app often.",
      },
      {
        q: "Can the app connect to our existing hospital software?",
        a: "Often, if the software offers an API, HL7 interface or data export. We check what your system exposes during discovery before promising an integration.",
      },
      {
        q: "Who owns the app and patient data?",
        a: "You do. The app is published under your store accounts, the data sits in your cloud account, and a written agreement sets out how we may handle it while we build and support the app.",
      },
    ],
    related: [
      {
        href: "/services/mobile-apps",
        label: "Flutter mobile app development",
      },
      {
        href: "/industries/diagnostic-lab-software",
        label: "Diagnostic lab software",
      },
      {
        href: "/services/ai-chatbot-development-india",
        label: "AI chatbots for patient queries",
      },
      {
        href: "/mobile-app-development-panchkula",
        label: "App development in Panchkula",
      },
      {
        href: "/insights/flutter-vs-native-app-development",
        label: "Flutter vs native: how to choose",
      },
      {
        href: "/insights/app-development-cost-india",
        label: "App development cost in India",
      },
    ],
  },
];
