import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import type { Post } from "./types";

export const gamp5Guide: Post = {
  slug: "gamp-5-software-validation-guide",
  title: "GAMP 5 software validation, explained: from URS to validation summary report",
  metaTitle: "GAMP 5 Software Validation: URS to VSR Explained",
  description:
    "A plain-English guide to GAMP 5 validation: software categories, the V-model, risk assessment, IQ/OQ/PQ, and how to validate without a paperwork mountain.",
  excerpt:
    "Software categories, the V-model, risk assessment and IQ/OQ/PQ — a plain-English walk through GAMP 5 validation, and how to do it without drowning in paper.",
  category: "Regulated software",
  cover: "vmodel",
  published: "2026-09-28",
  readingMinutes: 7,
  keywords: [
    "GAMP 5",
    "computer system validation",
    "CSV pharma",
    "GAMP 5 software categories",
    "IQ OQ PQ software",
    "URS FS DS",
    "validation summary report",
  ],
  takeaways: [
    "GAMP 5 is a risk-based framework, not a regulation: the effort should match the risk to patients, product quality and data integrity.",
    "The software category (1, 3, 4 or 5) decides how much you specify and test — custom code needs the most.",
    "A traceability matrix is the spine of the package: every requirement links to a risk, a design element and a test.",
    "Validation doesn’t end at go-live. Change control and periodic review keep the system in a validated state.",
  ],
  intro: (
    <>
      <p>
        If you build or buy software for a pharma plant, QC lab or drug-safety team, someone will
        ask: <em>“Is it validated?”</em> In regulated life sciences, the usual answer is shaped by{" "}
        <strong>GAMP 5</strong> — the industry’s most widely used framework for computerised system
        validation (CSV).
      </p>
      <p>
        Validation has a reputation for binders full of screenshots. It doesn’t have to work that
        way. This guide explains what GAMP 5 asks for, which documents you actually need, and how
        to scale the effort to the risk — for software you configure and software written from
        scratch.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-is-gamp-5",
      title: "What GAMP 5 is — and isn’t",
      body: (
        <>
          <p>
            GAMP stands for Good Automated Manufacturing Practice. <em>GAMP 5: A Risk-Based
            Approach to Compliant GxP Computerized Systems</em> is published by ISPE, the
            International Society for Pharmaceutical Engineering. The first edition came out in
            2008; the second edition, published in 2022, updated it for agile development, cloud
            services and a stronger focus on critical thinking.
          </p>
          <p>
            GAMP 5 is <strong>guidance, not law</strong>. Regulations such as 21 CFR Part 11 in the
            US and EU Annex 11 say computerised systems must be validated; GAMP 5 is the widely
            recognised way of doing it. Regulators and auditors know it, which is why following it
            makes inspections smoother.
          </p>
          <p>Its core principles are simple:</p>
          <ul>
            <li><strong>Product and process understanding</strong> — know what the system does and why it matters.</li>
            <li><strong>A life-cycle approach</strong> — from concept to retirement, not only a test phase before go-live.</li>
            <li><strong>Scalable, risk-based effort</strong> — focus on what can affect patient safety, product quality and data integrity.</li>
            <li><strong>Leveraging supplier work</strong> — reuse a good supplier’s testing and documentation instead of repeating it.</li>
          </ul>
        </>
      ),
    },
    {
      id: "software-categories",
      title: "The software categories decide the effort",
      body: (
        <>
          <p>
            GAMP 5 sorts software into categories. The higher the category, the more of the system
            is unique to you — and the more you have to specify and test yourself.
          </p>
          <DataTable
            caption="GAMP 5 software categories"
            head={["Category", "What it is", "Typical examples", "Validation focus"]}
            rows={[
              ["1 — Infrastructure", "Layered software the application runs on", "Operating systems, databases, middleware", "Record versions, qualify the infrastructure"],
              ["3 — Non-configured", "Used as supplied, settings only", "Instrument firmware, simple off-the-shelf tools", "Test against your requirements"],
              ["4 — Configured", "Standard product set up for your process", "Configured LIMS, QMS, ERP modules", "Specify and test your configuration"],
              ["5 — Custom", "Written specifically for you", "Custom portals, bespoke LIMS modules, integrations", "Full life cycle: design, code review, testing"],
            ]}
          />
          <p>
            There is no Category 2: it covered firmware in earlier versions and was removed in GAMP
            5. Most real systems mix categories — a configured LIMS (4) with a custom instrument
            integration (5) running on a validated database (1). Each part gets the treatment its
            category needs.
          </p>
        </>
      ),
    },
    {
      id: "v-model",
      title: "The V-model and the documents that matter",
      body: (
        <>
          <p>
            GAMP 5 describes validation with a V-model. The left side of the V is specification,
            going from “what we need” to “how it’s built”. The right side is verification, proving
            each level on the left was met.
          </p>
          <h3>Planning</h3>
          <ul>
            <li><strong>Validation plan (VP)</strong> — scope, approach, roles, deliverables and acceptance criteria.</li>
            <li><strong>Supplier assessment</strong> — how far you can rely on the vendor’s quality system and testing.</li>
          </ul>
          <h3>Specification (left side)</h3>
          <ul>
            <li><strong>User requirements specification (URS)</strong> — what the business needs, in testable statements.</li>
            <li><strong>Functional specification (FS)</strong> — how the system will meet each requirement.</li>
            <li><strong>Design or configuration specification (DS/CS)</strong> — the technical build, or the exact configuration of a product.</li>
          </ul>
          <h3>Verification (right side)</h3>
          <ul>
            <li><strong>Installation qualification (IQ)</strong> — it is installed correctly, in the right environment, at the right versions.</li>
            <li><strong>Operational qualification (OQ)</strong> — each function works as specified, including edge cases and error handling.</li>
            <li><strong>Performance qualification (PQ)</strong> — it works for your real process, with real users and realistic data.</li>
          </ul>
          <h3>Closing</h3>
          <ul>
            <li><strong>Traceability matrix (RTM)</strong> — links every requirement to its risk, specification and tests.</li>
            <li><strong>Validation summary report (VSR)</strong> — what was done, deviations and how they were resolved, and the release decision.</li>
          </ul>
          <Callout title="Terminology varies">
            <p>
              GAMP 5 itself speaks of “specification and verification” rather than insisting on
              the IQ/OQ/PQ labels. Many companies still use IQ/OQ/PQ because their SOPs and auditors
              expect them. What matters is that every requirement is specified and verified — not
              the name on the document.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "risk-assessment",
      title: "Risk assessment: test more where it matters",
      body: (
        <>
          <p>
            Risk assessment is what turns validation from “test everything the same way” into
            focused, defensible work. A practical approach:
          </p>
          <ol>
            <li>List the system’s functions from the URS.</li>
            <li>
              For each, ask whether it can affect patient safety, product quality or data
              integrity. A function that calculates an assay result is critical; one that changes
              the colour of a dashboard is not.
            </li>
            <li>
              For critical functions, rate the <strong>severity</strong> of a failure, how{" "}
              <strong>likely</strong> it is, and how likely it is to be <strong>detected</strong>{" "}
              before it causes harm — the familiar FMEA-style method.
            </li>
            <li>Decide the controls and the depth of testing for each risk level.</li>
          </ol>
          <p>
            High-risk functions get detailed, scripted tests with documented evidence. Low-risk
            functions can rely on supplier testing or lighter, unscripted checks. This is the same
            thinking behind the FDA’s <strong>Computer Software Assurance (CSA)</strong> approach,
            first published as draft guidance in 2022. It was written for medical-device production
            and quality-system software, but its message — use critical thinking, and don’t
            generate evidence that adds no assurance — is shaping validation practice across life
            sciences.
          </p>
        </>
      ),
    },
    {
      id: "agile-validation",
      title: "Validating software that is built in sprints",
      body: (
        <>
          <p>
            Custom (Category 5) software is rarely built in one waterfall pass today. GAMP 5’s
            second edition explicitly supports agile delivery, as long as control is kept. What
            works in practice:
          </p>
          <ul>
            <li>Treat the URS as a controlled, living backlog — each user story traces to a requirement ID.</li>
            <li>Define “done” to include updated specifications and passing tests, not only working code.</li>
            <li>Use automated tests as validation evidence where they cover a requirement, with results kept as records.</li>
            <li>Run formal verification on a release candidate in a controlled environment, then release under change control.</li>
          </ul>
          <p>
            Done this way, validation evidence builds up sprint by sprint instead of arriving as a
            three-month documentation project at the end.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      title: "Common validation mistakes",
      body: (
        <Checklist
          items={[
            <><strong>Writing the URS after the system is built</strong> — requirements copied from the finished screens prove nothing.</>,
            <><strong>Testing everything equally</strong> — hundreds of screenshots of low-risk screens, and thin tests on the calculations that matter.</>,
            <><strong>Untestable requirements</strong> — “the system shall be user-friendly” can’t be verified. “A reviewer can approve a result in no more than three clicks” can.</>,
            <><strong>No traceability</strong> — without a matrix, nobody can show that every requirement was tested.</>,
            <><strong>Validate once, then forget</strong> — patches, configuration changes and new integrations go live without impact assessment.</>,
            <><strong>Ignoring data integrity</strong> — the audit trail, access control and backup/restore are functions too, and need testing like any other. See our <Link href="/insights/21-cfr-part-11-compliance-checklist-lims">Part 11 checklist</Link>.</>,
          ]}
        />
      ),
    },
    {
      id: "after-go-live",
      title: "After go-live: staying validated",
      body: (
        <>
          <p>
            A system is only validated as long as it stays under control. The operational phase
            needs:
          </p>
          <ul>
            <li><strong>Change control</strong> — every change assessed for impact, tested as needed and approved before release.</li>
            <li><strong>Incident and problem management</strong> — failures recorded, investigated and fixed.</li>
            <li><strong>Periodic review</strong> — a scheduled check that the system is still fit for use and still compliant.</li>
            <li><strong>Backup, restore and business continuity</strong> — tested, not assumed.</li>
            <li><strong>Retirement</strong> — a plan to migrate or archive records so they stay readable for the retention period.</li>
          </ul>
          <p>
            At Bright Infonet we build LIMS, drug-safety and other GxP platforms with the
            validation pack produced alongside the code: URS, risk assessment, specifications,
            IQ/OQ/PQ scripts, traceability matrix and summary report. If you are planning a
            regulated build or need to bring an existing system into a validated state,{" "}
            <Link href="/#contact">tell us about it</Link>.
          </p>
        </>
      ),
    },
  ],
};
