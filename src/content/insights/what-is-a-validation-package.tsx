import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import PostLink from "@/components/insights/PostLink";
import type { Post } from "./types";

export const whatIsAValidationPackage: Post = {
  slug: "what-is-a-validation-package",
  title:
    "What is a validation package? The documents behind a validated system",
  metaTitle: "What Is a Validation Package? Documents Explained",
  description:
    "What a computer system validation package contains, from validation plan and URS to test evidence, traceability matrix and summary report, and who signs each one.",
  excerpt:
    "Every document in a computer system validation package, what it proves, who usually writes and approves it, and how to scale the package to risk.",
  category: "Regulated software",
  pillar: "regulated",
  cta: {
    href: "/services/computer-system-validation",
    label: "Computer system validation service",
  },
  cover: "vmodel",
  published: "2026-11-06",
  readingMinutes: 8,
  keywords: [
    "validation package",
    "computer system validation documents",
    "CSV deliverables",
    "validation documentation pharma",
    "IQ OQ PQ documents",
    "validation summary report",
    "traceability matrix validation",
  ],
  takeaways: [
    "A validation package is the set of approved documents that proves a computerised system is fit for its intended use and under control.",
    "Its spine is plan → requirements → risk → specifications → testing → traceability → summary report.",
    "The supplier can write and execute much of it; the regulated company’s QA approves it and releases the system.",
    "Scale it to risk and category. A configured low-risk tool needs a much thinner package than a custom system that releases batches.",
  ],
  intro: (
    <>
      <p>
        A validation package is the set of approved documents that proves a
        computerised system is fit for its intended use in GxP work. It
        typically includes a validation plan, user requirements, risk
        assessment, specifications, test protocols with executed evidence, a
        traceability matrix and a validation summary report that releases the
        system.
      </p>
      <p>
        Auditors ask for it by name, suppliers promise to deliver it, and the
        contents vary more than most people expect. This guide lists each
        document, what it proves, who usually writes and approves it, and how
        to keep the package in proportion to the system’s risk.
      </p>
    </>
  ),
  sections: [
    {
      id: "the-documents",
      title: "The documents in a typical package",
      body: (
        <DataTable
          caption="Documents in a computer system validation package"
          head={["Document", "What it proves", "Usually written by", "Approved by"]}
          rows={[
            [
              "Validation plan",
              "Scope, approach, roles, deliverables and acceptance criteria are agreed",
              "Validation lead or supplier",
              "System owner, QA",
            ],
            [
              "GxP impact assessment",
              "Whether and why the system is GxP-relevant",
              "System or process owner",
              "QA",
            ],
            [
              "Supplier assessment",
              "How far the supplier’s work can be relied on",
              "QA or validation lead",
              "QA",
            ],
            [
              "User requirements (URS)",
              "What the users need, as testable statements",
              "Process owner",
              "Process owner, QA",
            ],
            [
              "Risk assessment",
              "Which functions matter most and how deeply to test them",
              "Project team",
              "QA",
            ],
            [
              "Functional, design or configuration specifications",
              "How each requirement is met",
              "Supplier or development team",
              "System owner; QA as required",
            ],
            [
              "Test protocols and scripts",
              "What will be tested, how, and the expected results",
              "Validation team or supplier",
              "QA before execution",
            ],
            [
              "Executed tests and evidence",
              "What actually happened, with objective evidence",
              "Testers",
              "Reviewed by QA",
            ],
            [
              "Deviation records",
              "Problems found and how they were resolved",
              "Testers, project team",
              "QA",
            ],
            [
              "Traceability matrix",
              "Every requirement links to risk, specification and test",
              "Validation lead",
              "QA",
            ],
            [
              "Validation summary report",
              "What was done, results, open items and the release decision",
              "Validation lead",
              "System owner, QA",
            ],
          ]}
        />
      ),
    },
    {
      id: "planning",
      title: "Planning documents",
      body: (
        <>
          <p>
            The <strong>validation plan</strong> sets the rules before work
            starts: which system and version, which GAMP 5 categories, which
            deliverables, who does what, how deviations are handled and what
            counts as success. A short, specific plan is better than a long
            generic one.
          </p>
          <p>
            The <strong>GxP impact assessment</strong> records why the system is
            in scope. The <strong>supplier assessment</strong> — a questionnaire,
            a document review or an audit, depending on risk — decides how much
            supplier evidence you can leverage.
          </p>
        </>
      ),
    },
    {
      id: "requirements-and-risk",
      title: "Requirements, risk and specifications",
      body: (
        <>
          <p>
            The <strong>URS</strong> is the anchor. Every later document points
            back to its requirement IDs; our{" "}
            <PostLink slug="lims-urs-template">LIMS URS template</PostLink>{" "}
            shows the format. The <strong>risk assessment</strong> rates each
            requirement or function for its effect on patient safety, product
            quality and data integrity, and records the testing depth that
            follows.
          </p>
          <p>
            <strong>Specifications</strong> depend on the category. A
            configured product needs a configuration specification that records
            every setting that matters. Custom software adds functional and
            design specifications and evidence of code review and developer
            testing, as explained in{" "}
            <PostLink slug="gamp-5-category-4-vs-category-5">
              GAMP 5 Category 4 vs 5
            </PostLink>
            .
          </p>
        </>
      ),
    },
    {
      id: "testing",
      title: "Test protocols, evidence and deviations",
      body: (
        <>
          <p>
            Testing is usually split into installation, operational and
            performance qualification (IQ, OQ, PQ), though GAMP 5 itself talks
            about verification rather than insisting on those labels.
          </p>
          <ul>
            <li>
              <strong>IQ</strong> confirms the system is installed correctly, in
              the right environment, at the right versions.
            </li>
            <li>
              <strong>OQ</strong> confirms functions work as specified,
              including audit trails, signatures, calculations, access rights
              and error handling.
            </li>
            <li>
              <strong>PQ</strong> confirms the system supports the real process
              with trained users and realistic data.
            </li>
          </ul>
          <p>
            Protocols are approved before execution. Executed scripts record the
            actual result, pass or fail, tester and date. Evidence can be
            screenshots, reports, system logs or automated test output — what
            matters is that it shows what happened. Every failure becomes a
            deviation with an assessment, a fix or justification, and a retest
            where needed.
          </p>
          <Callout title="Good documentation practice still applies">
            <p>
              Executed records must be attributable, contemporaneous and
              complete. Pre-filled results, missing signatures or unexplained
              corrections are among the first things an auditor notices.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "traceability-and-report",
      title: "Traceability matrix and summary report",
      body: (
        <>
          <p>
            The <strong>traceability matrix</strong> is a table with one row per
            requirement, showing its risk, where it is specified and which tests
            verify it. It is the fastest way to show an auditor that nothing was
            missed, and to find what needs retesting after a change.
          </p>
          <p>
            The <strong>validation summary report</strong> closes the work. It
            summarises what was done against the plan, lists deviations and
            their outcome, records any open items with justification, and
            states whether the system is fit for its intended use. When QA
            approves it, the system can be released for GxP use.
          </p>
        </>
      ),
    },
    {
      id: "operational-documents",
      title: "Documents that keep the system validated",
      body: (
        <>
          <p>
            The package does not stop at the summary report. Inspectors also ask
            for the documents that show control after go-live:
          </p>
          <Checklist
            items={[
              "SOPs for use, administration, access management, backup and restore, and audit-trail review.",
              "Training records for users and administrators.",
              "Change control records with impact assessment and any retesting.",
              "Incident and problem records.",
              "Periodic review reports confirming the system is still fit and compliant.",
              "A retirement or archive plan when the system is replaced.",
            ]}
          />
        </>
      ),
    },
    {
      id: "scaling",
      title: "Scaling the package to risk",
      body: (
        <>
          <p>
            A package should be as large as the risk demands and no larger. A
            low-risk, non-configured tool may need a short combined document:
            intended use, requirements, a brief risk note, a few tests and a
            conclusion. A custom system that calculates release results needs
            the full set.
          </p>
          <p>
            FDA’s Computer Software Assurance guidance and the GAMP 5 second
            edition both encourage this: rigorous scripted testing where failure
            could harm patients or product, lighter unscripted testing and lean
            records elsewhere. Our article on{" "}
            <PostLink slug="csv-vs-csa-computer-software-assurance">
              CSV vs CSA
            </PostLink>{" "}
            explains the shift, and the{" "}
            <PostLink slug="gxp-software-validation-guide">
              GxP validation guide
            </PostLink>{" "}
            shows where each document fits in the life cycle.
          </p>
        </>
      ),
    },
    {
      id: "who-signs",
      title: "Who prepares it, and who signs it",
      body: (
        <p>
          A supplier or validation partner can write most of the package and
          execute much of the testing. The regulated company still approves the
          plan, the URS, the protocols and the summary report, and decides to
          release the system. When we build regulated systems we write the
          package alongside the code; for systems from other suppliers our{" "}
          <Link href="/services/computer-system-validation">
            computer system validation service
          </Link>{" "}
          prepares it. In both cases sign-off stays with your QA.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What is a validation package in pharma?",
      a: "It is the set of approved documents showing that a computerised system is fit for its intended use in GxP work: typically a validation plan, URS, risk assessment, specifications, test protocols and evidence, a traceability matrix and a validation summary report.",
    },
    {
      q: "What is the difference between IQ, OQ and PQ?",
      a: "IQ confirms correct installation and versions, OQ confirms functions work as specified, and PQ confirms the system supports the real process with trained users and realistic data.",
    },
    {
      q: "What is a traceability matrix?",
      a: "A table that links each requirement to its risk rating, the specification that meets it and the tests that verify it. It shows nothing was missed and helps decide what to retest after a change.",
    },
    {
      q: "Can a supplier provide the validation package?",
      a: "A supplier can prepare much of it and execute testing. The regulated company’s QA must still review and approve the key documents and make the release decision.",
    },
    {
      q: "Does every system need the full package?",
      a: "No. The package should be scaled to the system’s risk and GAMP 5 category. Low-risk tools can use a short combined document; high-risk custom systems need the full set.",
    },
    {
      q: "What happens to the package after go-live?",
      a: "It is maintained through change control, incident records and periodic reviews, so the documents continue to describe the system as it is actually used.",
    },
  ],
};
