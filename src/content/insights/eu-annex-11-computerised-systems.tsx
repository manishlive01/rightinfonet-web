import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import PostLink from "@/components/insights/PostLink";
import type { Post } from "./types";

export const euAnnex11ComputerisedSystems: Post = {
  slug: "eu-annex-11-computerised-systems",
  title:
    "EU GMP Annex 11 explained: computerised systems, section by section",
  metaTitle: "EU GMP Annex 11 Computerised Systems Explained",
  description:
    "EU GMP Annex 11 in plain English: what each section asks of computerised systems, how it compares with 21 CFR Part 11, and what to check in your software.",
  excerpt:
    "Risk management, suppliers, validation, audit trails, e-signatures and archiving: each Annex 11 section in plain English, and how it compares with Part 11.",
  category: "Regulated software",
  pillar: "regulated",
  cta: {
    href: "/services/computer-system-validation",
    label: "Computer system validation service",
  },
  cover: "audit",
  published: "2026-10-16",
  readingMinutes: 8,
  keywords: [
    "EU GMP Annex 11",
    "Annex 11 computerised systems",
    "Annex 11 requirements",
    "Annex 11 vs Part 11",
    "EudraLex volume 4 annex 11",
    "Annex 11 audit trail",
    "Annex 11 validation",
  ],
  takeaways: [
    "Annex 11 is the EU GMP guideline for computerised systems used in GMP activities; PIC/S applies an equivalent annex.",
    "Its 17 sections cover the whole life cycle: risk, people, suppliers, validation, data, audit trails, change, security, e-signatures, continuity and archiving.",
    "Compared with Part 11 it says more about suppliers, risk management, periodic evaluation and business continuity, and explicitly asks for a reason for change.",
    "A revised draft was released for consultation in July 2025; check its status, but the 2011 text applies until a final version is adopted.",
  ],
  intro: (
    <>
      <p>
        EU GMP Annex 11 is the European guideline for computerised systems used
        in GMP-regulated work. It says such systems must be validated, managed
        with documented risk assessment, supported by qualified suppliers, and
        must protect data with audit trails, security, backups and controlled
        change. Replacing a manual step with software must not reduce product
        quality or control.
      </p>
      <p>
        If you sell to the EU or are inspected by a PIC/S authority, Annex 11 is
        the reference your auditors will use. This guide goes through it section
        by section, then compares it with 21 CFR Part 11.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-annex-11-is",
      title: "What Annex 11 is and where it applies",
      body: (
        <>
          <p>
            Annex 11, <em>Computerised Systems</em>, is part of EudraLex Volume
            4, the EU guidelines for Good Manufacturing Practice. The current
            text came into operation on 30 June 2011. PIC/S member inspectorates
            apply an equivalent annex in the PIC/S GMP Guide, so its reach goes
            well beyond the EU.
          </p>
          <p>
            It applies to every computerised system used as part of GMP
            activities: lab systems, quality systems, manufacturing and
            warehouse systems, and the IT infrastructure under them, which must
            be qualified. It works together with Chapter 4 on documentation,
            which covers records whatever medium they are kept in.
          </p>
          <p>
            The principle is short: when a computerised system replaces a
            manual operation, there should be no loss of product quality,
            process control or quality assurance, and no increase in overall
            risk.
          </p>
        </>
      ),
    },
    {
      id: "section-by-section",
      title: "The 17 sections, in plain English",
      body: (
        <>
          <DataTable
            caption="EU GMP Annex 11 sections and what they mean for software"
            head={["Section", "What it asks", "What to check in the software"]}
            rows={[
              [
                "1 Risk management",
                "Documented, justified risk assessment across the life cycle",
                "Validation depth and data-integrity controls follow the risk record",
              ],
              [
                "2 Personnel",
                "Process owners, system owners, QA and IT work together, with the right training",
                "Roles and responsibilities are defined",
              ],
              [
                "3 Suppliers",
                "Formal agreements; supplier assessment and audits based on risk",
                "Supplier documentation is available and reviewed",
              ],
              [
                "4 Validation",
                "Life-cycle documents, system inventory, traceable URS, tested data migration",
                "Requirements trace to tests; migrations are verified",
              ],
              [
                "5 Data",
                "Built-in checks for data exchanged electronically",
                "Interfaces validate what they send and receive",
              ],
              [
                "6 Accuracy checks",
                "An extra check for critical data entered manually",
                "Second-person or system verification of key entries",
              ],
              [
                "7 Data storage",
                "Data secured; backups taken; restore checked during validation and periodically",
                "Tested backup and restore procedures",
              ],
              [
                "8 Printouts",
                "Clear printed copies; batch-release prints show if data changed",
                "Reports flag edits since original entry",
              ],
              [
                "9 Audit trails",
                "Risk-based trail of GMP-relevant changes and deletions, with a reason, regularly reviewed",
                "Old and new values, reason and a review process",
              ],
              [
                "10 Change management",
                "Changes made under a defined procedure",
                "Configuration and code changes are controlled and recorded",
              ],
              [
                "11 Periodic evaluation",
                "Systems reviewed to confirm they remain valid and compliant",
                "A scheduled periodic review with evidence",
              ],
              [
                "12 Security",
                "Physical and logical access control; access changes recorded",
                "Unique accounts, roles and an access-change log",
              ],
              [
                "13 Incident management",
                "Incidents reported, assessed and their root cause found",
                "Incidents recorded and linked to CAPA",
              ],
              [
                "14 Electronic signature",
                "Same impact as handwritten; permanently linked; date and time",
                "Signature records tied to the exact record version",
              ],
              [
                "15 Batch release",
                "Only Qualified Persons certify release; e-signature can be used",
                "Release rights restricted to QP roles",
              ],
              [
                "16 Business continuity",
                "Arrangements to keep critical processes running if systems fail",
                "Documented, tested fallback procedures",
              ],
              [
                "17 Archiving",
                "Archived data stays accessible, readable and intact, including after system changes",
                "Archive retrieval tested after upgrades",
              ],
            ]}
          />
        </>
      ),
    },
    {
      id: "validation-section",
      title: "Section 4 in practice: what validation evidence looks like",
      body: (
        <>
          <p>
            Section 4 is the longest and the one most often discussed in
            inspections. Reduced to a checklist:
          </p>
          <Checklist
            items={[
              "An up-to-date inventory of GMP computerised systems and their functions.",
              "User requirements that describe required functions, are based on risk, and trace through the life cycle.",
              "Evidence that the supplier’s quality system and development work were assessed.",
              "For bespoke systems, a process for formal assessment and reporting of quality and performance across the life cycle.",
              "Test methods and scenarios that are shown to be appropriate, including limits and edge cases.",
              "Data migration from other systems verified so values and meaning are not altered.",
            ]}
          />
          <p>
            None of that is unique to the EU. It is the same life cycle described
            in our{" "}
            <PostLink slug="gxp-software-validation-guide">
              GxP software validation guide
            </PostLink>
            , and GAMP 5 is the common way of producing it.
          </p>
        </>
      ),
    },
    {
      id: "audit-trails-and-signatures",
      title: "Audit trails and e-signatures under Annex 11",
      body: (
        <>
          <p>
            Section 9 asks you to consider, based on risk, building in a
            system-generated record of all GMP-relevant changes and deletions.
            For a change or deletion of GMP-relevant data, the reason should be
            documented. Audit trails must be available, convertible to an
            intelligible form and regularly reviewed.
          </p>
          <p>
            Section 14 says electronic signatures have the same impact as
            handwritten ones within the company, are permanently linked to their
            record, and include the date and time of signing. Our deep dive on{" "}
            <PostLink slug="21-cfr-part-11-audit-trail-requirements">
              audit trail requirements
            </PostLink>{" "}
            covers the design work in detail, and it applies to both rules.
          </p>
        </>
      ),
    },
    {
      id: "annex-11-vs-part-11",
      title: "Annex 11 vs 21 CFR Part 11",
      body: (
        <>
          <p>
            The two overlap heavily, and a system designed well for one covers
            most of the other. The differences are mostly in emphasis.
          </p>
          <DataTable
            caption="EU Annex 11 compared with US 21 CFR Part 11"
            head={["Topic", "EU Annex 11", "21 CFR Part 11"]}
            rows={[
              [
                "Legal nature",
                "EU GMP guideline used by inspectors",
                "US federal regulation",
              ],
              [
                "Scope",
                "All computerised systems in GMP activities",
                "Electronic records and signatures required by predicate rules or submitted to FDA",
              ],
              [
                "Risk management",
                "Explicit, across the life cycle",
                "Not in the rule text; risk-based approach set out in FDA guidance",
              ],
              [
                "Suppliers",
                "Formal agreements and risk-based supplier assessment",
                "Not addressed directly",
              ],
              [
                "Audit trail reason",
                "Reason for change should be documented",
                "Not stated in the rule; expected by data-integrity guidance",
              ],
              [
                "E-signatures",
                "Same impact as handwritten, linked, dated",
                "Detailed rules on components, manifestation and certification to FDA",
              ],
              [
                "Operations",
                "Periodic evaluation, incidents, continuity, archiving",
                "Mainly through validation, record protection and procedures",
              ],
            ]}
          />
          <p>
            The clause-by-clause view of the US side is in our{" "}
            <PostLink slug="21-cfr-part-11-compliance-checklist-lims">
              Part 11 checklist for LIMS
            </PostLink>
            .
          </p>
        </>
      ),
    },
    {
      id: "2025-revision",
      title: "The draft revision published in 2025",
      body: (
        <>
          <p>
            In July 2025 the European Commission and PIC/S released a revised
            draft of Annex 11 for public consultation, together with a revised
            Chapter 4 and a new Annex 22 on artificial intelligence. The draft is
            much longer than the 2011 text and goes further on topics such as
            life-cycle quality risk management, cloud and service providers,
            audit-trail review and identity and access management.
          </p>
          <Callout title="What to do now">
            <p>
              Keep working to the current Annex 11 and watch for the final
              version and its effective date. Designing new systems with strong
              audit trails, access control and documented supplier oversight is
              a safe bet either way.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "what-to-ask",
      title: "Questions to ask a software supplier",
      body: (
        <>
          <ul>
            <li>Can you map each Annex 11 section to a feature or a document?</li>
            <li>How is the audit trail stored, and can anyone change it?</li>
            <li>How do backup and restore work, and how were they tested?</li>
            <li>What does a quality or service agreement with you cover?</li>
            <li>How are upgrades released, documented and impact-assessed?</li>
            <li>How do we retrieve archived records after a version change?</li>
          </ul>
          <p>
            We build regulated systems with these answers designed in, and our{" "}
            <Link href="/services/computer-system-validation">
              computer system validation service
            </Link>{" "}
            prepares Annex 11 and Part 11 deliverables for existing systems. To
            build the skills in-house, see our{" "}
            <Link href="/academy/software-validation-gamp5-course">
              Software Validation course
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "What is EU GMP Annex 11?",
      a: "Annex 11 is the part of the EU GMP guidelines, EudraLex Volume 4, that covers computerised systems used in GMP-regulated activities. It sets expectations for risk management, suppliers, validation, data integrity, security, change control and archiving.",
    },
    {
      q: "Is Annex 11 the same as 21 CFR Part 11?",
      a: "No, but they overlap heavily. Part 11 is a US regulation on electronic records and signatures. Annex 11 is an EU GMP guideline on computerised systems that also covers suppliers, risk management, periodic evaluation and business continuity.",
    },
    {
      q: "Does Annex 11 apply to Indian pharma companies?",
      a: "It applies when a company manufactures for the EU market or is inspected against EU or PIC/S GMP. Many Indian exporters therefore design their systems and procedures to meet Annex 11 as well as Part 11.",
    },
    {
      q: "Does Annex 11 require a reason for change in the audit trail?",
      a: "Yes. Section 9 says that for a change or deletion of GMP-relevant data the reason should be documented, and that audit trails should be available in an intelligible form and regularly reviewed.",
    },
    {
      q: "Is there a new version of Annex 11?",
      a: "A revised draft was published for public consultation in July 2025, alongside a revised Chapter 4 and a new Annex 22 on AI. Until a final version is adopted and takes effect, the 2011 text applies.",
    },
    {
      q: "Does infrastructure need qualification under Annex 11?",
      a: "Yes. The principle of Annex 11 states that IT infrastructure should be qualified, alongside validating the applications that run on it.",
    },
  ],
};
