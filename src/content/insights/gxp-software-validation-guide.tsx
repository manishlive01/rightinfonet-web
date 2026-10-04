import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import PostLink from "@/components/insights/PostLink";
import type { Post } from "./types";

export const gxpSoftwareValidationGuide: Post = {
  slug: "gxp-software-validation-guide",
  title:
    "GxP software validation: the complete guide for pharma, labs and life sciences",
  metaTitle: "GxP Software Validation: The Complete Guide",
  description:
    "GxP software validation explained: which rules apply, GAMP 5 categories, the validation life cycle, Part 11 and Annex 11 controls, and what QA signs off.",
  excerpt:
    "Which regulations apply, which systems need validating, the life cycle from URS to summary report, and how Part 11, Annex 11, GAMP 5 and CSA fit together.",
  category: "Regulated software",
  pillar: "regulated",
  pillarHub: true,
  cta: {
    href: "/services/computer-system-validation",
    label: "Computer system validation service",
  },
  cover: "vmodel",
  published: "2026-07-17",
  readingMinutes: 7,
  keywords: [
    "GxP software validation",
    "computer system validation guide",
    "GxP computerised systems",
    "GAMP 5 validation",
    "21 CFR Part 11 validation",
    "EU Annex 11 validation",
    "CSV pharma India",
    "validation life cycle",
  ],
  takeaways: [
    "GxP software validation is documented evidence that a computerised system is fit for its intended use and stays that way.",
    "Part 11 and Annex 11 say what regulators expect; GAMP 5 is the widely used method for meeting it; CSA shapes how much testing each feature needs.",
    "The effort follows risk: what can affect patient safety, product quality or data integrity gets the deepest specification and testing.",
    "A supplier can write and execute much of the work, but approving the validation and releasing the system stays with the regulated company’s QA.",
  ],
  intro: (
    <>
      <p>
        GxP software validation is the documented proof that a computerised
        system used in regulated pharma, lab or clinical work does what it is
        meant to do, reliably, and keeps its records trustworthy. You plan it,
        write testable requirements, assess risk, test in proportion to that
        risk, and keep the system under control until it is retired.
      </p>
      <p>
        This guide is the hub for our regulated-software articles. It explains
        the regulations in plain language, walks through the life cycle from
        intended use to the validation summary report, and points to a deeper
        guide for each step.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-gxp-validation-means",
      title: "What “GxP validation” actually means",
      body: (
        <>
          <p>
            GxP is shorthand for the “good practice” rules in life sciences:
            Good Manufacturing Practice (GMP), Good Laboratory Practice (GLP),
            Good Clinical Practice (GCP), Good Distribution Practice (GDP) and
            Good Pharmacovigilance Practice (GVP). Each of them expects the
            records behind a decision — a batch release, a stability result, a
            safety report — to be accurate, complete and attributable.
          </p>
          <p>
            Once those records live in software, the software becomes part of
            the quality system. Validation is how you show it can be trusted. It
            answers three questions an inspector will ask:
          </p>
          <ul>
            <li>
              <strong>Intended use:</strong> what does the system do in your
              process, and which records does it create or hold?
            </li>
            <li>
              <strong>Fitness:</strong> where is the evidence that it does that
              correctly, including when users make mistakes?
            </li>
            <li>
              <strong>Control:</strong> how do you know it is still in that
              state today, after patches, configuration changes and staff
              turnover?
            </li>
          </ul>
          <p>
            Validation is not a one-off test phase or a certificate from the
            vendor. It is a life cycle that starts before you build or buy and
            ends when the last record has been migrated or archived.
          </p>
        </>
      ),
    },
    {
      id: "regulations-and-guidance",
      title: "The regulations and guidance, side by side",
      body: (
        <>
          <p>
            Most confusion comes from mixing up law and guidance. Regulations
            say <em>what</em> must be true; industry guidance describes{" "}
            <em>how</em> companies usually get there.
          </p>
          <DataTable
            caption="Key rules and guidance for GxP computerised systems"
            head={["Document", "Type", "What it covers"]}
            rows={[
              [
                "21 CFR Part 11 (US FDA)",
                "Regulation",
                "Electronic records and signatures: validation, audit trails, access and signature controls",
              ],
              [
                "21 CFR 211.68 (US FDA)",
                "Regulation",
                "GMP rule for automatic and electronic equipment, including checks on inputs and outputs",
              ],
              [
                "EU GMP Annex 11",
                "EU GMP guideline",
                "Computerised systems across the life cycle: risk, suppliers, validation, data, audit trails, change control",
              ],
              [
                "PIC/S PI 011",
                "Inspector guidance",
                "How inspectors approach computerised systems in GxP environments",
              ],
              [
                "ISPE GAMP 5 (2nd edition, 2022)",
                "Industry guidance",
                "A risk-based method for specifying, verifying and operating GxP systems",
              ],
              [
                "FDA Computer Software Assurance",
                "FDA guidance",
                "Risk-based assurance for production and quality system software (medical devices)",
              ],
              [
                "Revised Schedule M (India)",
                "Regulation",
                "Indian GMP, revised in December 2023 and aligned more closely with WHO and PIC/S, including computerised systems",
              ],
            ]}
          />
          <p>
            If you export to the US, Part 11 applies to the records your
            predicate rules require. If you supply the EU or work with PIC/S
            inspectorates, Annex 11 is the reference; our{" "}
            <PostLink slug="eu-annex-11-computerised-systems">
              EU Annex 11 guide
            </PostLink>{" "}
            walks through its sections. Diagnostic labs are usually assessed
            against ISO 15189 and NABL instead, covered in our guide to{" "}
            <PostLink slug="nabl-iso-15189-lab-software-requirements">
              NABL and ISO 15189 software requirements
            </PostLink>
            .
          </p>
          <Callout title="Keep an eye on Annex 11">
            <p>
              A revised draft of Annex 11 was published for public consultation
              in July 2025, together with a revised Chapter 4 and a new Annex 22
              on artificial intelligence. Check the current status before you
              write new SOPs; until a final version is adopted, the 2011 text is
              the one in force.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "which-systems",
      title: "Which systems need validating",
      body: (
        <>
          <p>
            Start with a GxP impact assessment for each system rather than a
            blanket rule. A system needs validating when it creates, changes,
            stores or uses records that a GxP rule requires, or when it controls
            a process that affects product quality or patient safety. Typical
            examples:
          </p>
          <Checklist
            items={[
              "LIMS and chromatography data systems in QC and R&D labs.",
              "Quality management systems for deviations, CAPA, change control and training.",
              "Pharmacovigilance safety databases and case-processing tools.",
              "Manufacturing execution, batch record and warehouse systems.",
              "ERP modules that hold batch status, quarantine or release decisions.",
              "Document management for SOPs and controlled records.",
              "Spreadsheets and small tools that perform GxP calculations.",
            ]}
          />
          <p>
            Many real systems mix types. A configured LIMS with a custom
            instrument interface is part GAMP 5 Category 4 and part Category 5;
            our explainer on{" "}
            <PostLink slug="gamp-5-category-4-vs-category-5">
              GAMP 5 Category 4 vs Category 5
            </PostLink>{" "}
            shows how that changes the work.
          </p>
        </>
      ),
    },
    {
      id: "validation-life-cycle",
      title: "The validation life cycle, step by step",
      body: (
        <>
          <p>
            Whatever the system, the life cycle follows the same logic. The{" "}
            <PostLink slug="gamp-5-software-validation-guide">
              GAMP 5 validation guide
            </PostLink>{" "}
            covers the V-model in detail; here is the short version.
          </p>
          <ol>
            <li>
              <strong>Define the intended use and GxP impact.</strong> Which
              process, which records, which users.
            </li>
            <li>
              <strong>Write the validation plan.</strong> Scope, approach,
              roles, deliverables and acceptance criteria.
            </li>
            <li>
              <strong>Write the user requirements (URS).</strong> Testable
              statements, each with an ID. Our{" "}
              <PostLink slug="lims-urs-template">LIMS URS template</PostLink> is
              a practical starting point.
            </li>
            <li>
              <strong>Assess the supplier and the risks.</strong> Decide what
              you can rely on and where testing must go deeper.
            </li>
            <li>
              <strong>Specify the design or configuration.</strong> Functional,
              design and configuration specifications as the category demands.
            </li>
            <li>
              <strong>Verify.</strong> Installation, operational and performance
              testing (IQ/OQ/PQ) in proportion to risk.
            </li>
            <li>
              <strong>Trace and report.</strong> A traceability matrix and a
              validation summary report support the release decision.
            </li>
            <li>
              <strong>Operate under control.</strong> Change control, incident
              management, periodic review, backup and, finally, retirement.
            </li>
          </ol>
          <p>
            Together these documents form the{" "}
            <PostLink slug="what-is-a-validation-package">
              validation package
            </PostLink>{" "}
            an auditor asks to see.
          </p>
        </>
      ),
    },
    {
      id: "data-integrity-controls",
      title: "Data integrity: the controls inspectors test first",
      body: (
        <>
          <p>
            Data-integrity guidance from FDA, MHRA, WHO and PIC/S uses the
            ALCOA+ idea: records must be attributable, legible, contemporaneous,
            original and accurate, and also complete, consistent, enduring and
            available. In software, that turns into a short list of controls:
          </p>
          <ul>
            <li>
              Unique user accounts and role-based access, with no shared logins.
            </li>
            <li>
              A secure, computer-generated audit trail that keeps old values and
              reasons for change; see{" "}
              <PostLink slug="21-cfr-part-11-audit-trail-requirements">
                Part 11 audit trail requirements
              </PostLink>
              .
            </li>
            <li>
              Electronic signatures that show name, date, time and meaning, and
              stay linked to the record.
            </li>
            <li>
              Calculations inside the validated system, not in uncontrolled
              spreadsheets.
            </li>
            <li>Backups that are restored and checked, not only taken.</li>
          </ul>
          <p>
            Our{" "}
            <PostLink slug="21-cfr-part-11-compliance-checklist-lims">
              Part 11 checklist for LIMS
            </PostLink>{" "}
            turns each clause into a control you can check.
          </p>
        </>
      ),
    },
    {
      id: "risk-based-effort",
      title: "Risk-based effort: from CSV to CSA",
      body: (
        <>
          <p>
            Traditional computer system validation often meant scripted tests
            and screenshots for every screen. GAMP 5’s second edition and FDA’s
            Computer Software Assurance guidance both push the other way: think
            critically, test hardest where failure could harm patients or
            product, and use lighter, unscripted testing where risk is low. The
            difference is explained in{" "}
            <PostLink slug="csv-vs-csa-computer-software-assurance">
              CSV vs CSA
            </PostLink>
            .
          </p>
          <p>
            Risk-based does not mean less rigorous. Audit trails, e-signatures,
            release calculations and anything that decides whether a batch or a
            patient result goes out are high risk almost everywhere, and get
            scripted tests with objective evidence.
          </p>
        </>
      ),
    },
    {
      id: "guide-map",
      title: "Deeper guides by system",
      body: (
        <>
          <p>
            Each system type has its own questions. These guides go one level
            deeper:
          </p>
          <DataTable
            caption="Regulated-software guides by system"
            head={["System", "Start with", "Then read"]}
            rows={[
              [
                "LIMS (choosing)",
                <PostLink key="a" slug="custom-lims-vs-off-the-shelf-lims">
                  Custom vs off-the-shelf LIMS
                </PostLink>,
                <PostLink key="b" slug="lims-software-development-cost-india">
                  LIMS development cost in India
                </PostLink>,
              ],
              [
                "LIMS (rolling out)",
                <PostLink key="c" slug="lims-implementation-checklist">
                  LIMS implementation checklist
                </PostLink>,
                <PostLink key="d" slug="lims-urs-template">
                  LIMS URS template
                </PostLink>,
              ],
              [
                "Diagnostic lab software",
                <PostLink
                  key="e"
                  slug="nabl-iso-15189-lab-software-requirements"
                >
                  NABL and ISO 15189 requirements
                </PostLink>,
                <PostLink
                  key="f"
                  slug="21-cfr-part-11-compliance-checklist-lims"
                >
                  Part 11 checklist
                </PostLink>,
              ],
              [
                "Pharmacovigilance",
                <PostLink key="g" slug="pharmacovigilance-e2b-r3-explained">
                  E2B(R3) explained
                </PostLink>,
                <PostLink
                  key="h"
                  slug="pharmacovigilance-software-build-vs-buy"
                >
                  PV software: build vs buy
                </PostLink>,
              ],
              [
                "Any GxP system",
                <PostLink key="i" slug="what-is-a-validation-package">
                  What is a validation package?
                </PostLink>,
                <PostLink key="j" slug="gamp-5-category-4-vs-category-5">
                  GAMP 5 Category 4 vs 5
                </PostLink>,
              ],
            ]}
          />
        </>
      ),
    },
    {
      id: "who-does-what",
      title: "Who does what: supplier, regulated company and QA",
      body: (
        <>
          <p>
            A good supplier does a lot of the work: a quality system for
            development, specifications, test scripts, executed testing in its
            own environment and a draft summary report. The regulated company
            still owns the decision. Its QA approves the plan and the URS,
            reviews evidence, executes or witnesses the testing it requires, and
            signs the summary report that releases the system for GxP use.
          </p>
          <p>
            That split is how we work. We build regulated systems and write the
            validation deliverables alongside the code, and your QA reviews and
            signs off. For an existing system, our{" "}
            <Link href="/services/computer-system-validation">
              computer system validation service
            </Link>{" "}
            covers the documents from URS to summary report. Teams who want to
            do it in-house can learn the method in our{" "}
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
      q: "What is GxP software validation?",
      a: "It is documented evidence that a computerised system used in GxP work, such as manufacturing, lab testing, clinical trials or pharmacovigilance, does what it is intended to do, protects its records and stays under control throughout its life.",
    },
    {
      q: "Is GAMP 5 a regulation?",
      a: "No. GAMP 5 is industry guidance published by ISPE. Regulations such as 21 CFR Part 11 and EU GMP Annex 11 require validated systems, and GAMP 5 is a widely recognised method for doing that validation.",
    },
    {
      q: "Which software needs GxP validation?",
      a: "Any system that creates, changes, stores or uses records required by a GxP rule, or controls a process that affects product quality or patient safety. A GxP impact assessment decides this system by system.",
    },
    {
      q: "Can the software vendor validate the system for us?",
      a: "A vendor can write specifications and test scripts, run testing and draft the summary report. Approving the validation and releasing the system for GxP use remain the regulated company’s responsibility, through its QA.",
    },
    {
      q: "How is CSA different from CSV?",
      a: "CSA is FDA’s risk-based approach to software assurance. It keeps the goal of CSV but focuses scripted testing on high-risk features and allows unscripted testing and leaner records where risk is lower.",
    },
    {
      q: "Does validation end at go-live?",
      a: "No. Change control, incident management, periodic review, backup and restore testing and a retirement plan keep the system in a validated state for as long as it is used.",
    },
  ],
};
