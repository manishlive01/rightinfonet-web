import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import type { Post } from "./types";

export const csvVsCsa: Post = {
  slug: "csv-vs-csa-computer-software-assurance",
  title: "CSV vs CSA: FDA Computer Software Assurance explained",
  metaTitle: "CSV vs CSA: FDA Computer Software Assurance Explained",
  description:
    "How FDA’s Computer Software Assurance (CSA) differs from traditional CSV: risk-based effort, critical thinking, unscripted testing, records, GAMP 5 and Part 11.",
  excerpt:
    "Computer Software Assurance shifts validation from documenting everything to testing what matters. What CSA changes, what it doesn’t, and how it fits with GAMP 5 and Part 11.",
  category: "Regulated software",
  pillar: "regulated",
  cover: "audit",
  published: "2026-09-28",
  readingMinutes: 8,
  keywords: [
    "CSV vs CSA",
    "computer software assurance",
    "FDA CSA guidance",
    "computer system validation vs computer software assurance",
    "CSA unscripted testing",
    "GAMP 5 second edition CSA",
    "risk-based software validation",
    "CSV training India",
  ],
  takeaways: [
    "CSA is a risk-based way to establish confidence in software; it focuses effort on features whose failure could affect product quality or patient safety.",
    "It encourages critical thinking and allows unscripted testing — ad hoc, exploratory, error guessing — for lower-risk features, with lean records.",
    "FDA’s CSA guidance is written for medical device production and quality system software, but its thinking is used widely across life sciences.",
    "CSA does not replace 21 CFR Part 11 or remove the need for validation; it changes how much and what kind of evidence you produce.",
  ],
  intro: (
    <>
      <p>
        Computer system validation (CSV) is the long-standing practice of
        proving software works for its intended use, often through heavy
        scripted testing and documentation. Computer Software Assurance (CSA) is
        FDA’s risk-based approach to the same goal: focus testing on high-risk
        features, use unscripted testing where risk is lower, and keep only
        records that add value.
      </p>
      <p>
        FDA issued its final guidance,{" "}
        <em>
          Computer Software Assurance for Production and Quality System Software
        </em>
        , in September 2025, after a draft in 2022. This article explains what
        CSA changes in practice, what stays the same, and how it relates to GAMP
        5 and Part 11.
      </p>
    </>
  ),
  sections: [
    {
      id: "why-csa",
      title: "Why CSA came about",
      body: (
        <>
          <p>
            For years, many companies treated validation as a documentation
            exercise. Every screen got a scripted test, every step got a
            screenshot, and every deviation in a low-risk test triggered
            paperwork. The result was large validation packages, slow releases
            and a reluctance to adopt new tools — without necessarily making
            systems safer.
          </p>
          <p>
            FDA and industry recognised that this burden was holding back modern
            software, automation and continuous improvement. CSA was developed
            to redirect effort: spend time where a failure could hurt product
            quality or patients, and less where it couldn’t.
          </p>
          <Callout title="Scope, stated carefully">
            <p>
              FDA’s CSA guidance is written for software used in medical device
              production and quality systems. It is not a pharmaceutical GMP
              regulation. Its principles, though, line up closely with ISPE’s
              GAMP 5 second edition, and many pharma, biotech and lab
              organisations apply the same risk-based thinking. Always check
              what your own regulators, SOPs and quality agreements require.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "csv-vs-csa-compared",
      title: "Traditional CSV vs CSA, side by side",
      body: (
        <>
          <DataTable
            caption="How traditional CSV practice compares with CSA"
            head={["Aspect", "Traditional CSV practice", "CSA approach"]}
            rows={[
              [
                "Mindset",
                "Document to satisfy an auditor",
                "Build confidence that the software is fit for its intended use",
              ],
              [
                "Effort",
                "Similar depth for most functions",
                "Scaled to the risk of each feature or function",
              ],
              [
                "Testing",
                "Mostly scripted, step-by-step test cases",
                "Scripted for high-risk features; unscripted methods where risk is lower",
              ],
              [
                "Evidence",
                "Screenshots and signatures on every step",
                "Records that show what was tested, by whom, the result and the conclusion",
              ],
              [
                "Supplier work",
                "Often repeated in-house",
                "Leveraged where the supplier is assessed and trustworthy",
              ],
              [
                "Tools",
                "Manual execution and paper or PDF records",
                "Automated testing, digital records and system logs welcomed",
              ],
            ]}
          />
          <p>
            Note the word “practice”. Nothing in the older regulations demanded
            screenshots of every click; much of the burden came from habit and
            caution. CSA makes it explicit that a leaner, risk-based approach is
            acceptable.
          </p>
        </>
      ),
    },
    {
      id: "risk-based-approach",
      title: "The CSA risk-based approach, step by step",
      body: (
        <>
          <p>The guidance describes a simple sequence of thinking:</p>
          <ol>
            <li>
              <strong>Identify the intended use.</strong> Is the software used
              directly in production or the quality system, or does it support
              those processes? Software with no such role is outside the scope.
            </li>
            <li>
              <strong>Determine the risk.</strong> For each feature, function or
              operation, ask whether its failure could lead to a quality problem
              that foreseeably compromises safety. The guidance separates{" "}
              <em>high process risk</em> from <em>not high process risk</em>.
            </li>
            <li>
              <strong>Choose assurance activities</strong> that match the risk —
              more rigorous and scripted for high-risk features, lighter and
              unscripted for the rest.
            </li>
            <li>
              <strong>Establish the appropriate record</strong> — enough to show
              the software was assessed and performs as intended, without
              collecting evidence for its own sake.
            </li>
          </ol>
          <p>
            A feature that calculates a release result or controls a process
            parameter is high risk. A report layout, a search filter or a
            dashboard colour usually isn’t.
          </p>
        </>
      ),
    },
    {
      id: "critical-thinking-and-testing",
      title: "Critical thinking and unscripted testing",
      body: (
        <>
          <p>
            “Critical thinking” is the heart of CSA and of the GAMP 5 second
            edition. It means people who understand the process and the system
            decide what could go wrong and how best to check it — rather than
            following a template.
          </p>
          <DataTable
            caption="Testing methods and where they fit"
            head={["Method", "What it is", "Typical use"]}
            rows={[
              [
                "Robust scripted testing",
                "Detailed, pre-approved test cases with expected results and objective evidence",
                "High-risk features",
              ],
              [
                "Limited scripted testing",
                "Scripted tests for high-risk parts, unscripted for the rest",
                "Features that mix high and lower risk",
              ],
              [
                "Ad hoc testing",
                "Testing without a pre-written script, based on the tester’s understanding",
                "Lower-risk features",
              ],
              [
                "Error guessing",
                "Deliberately trying inputs likely to cause failures",
                "Lower-risk features; also useful alongside scripts",
              ],
              [
                "Exploratory testing",
                "Learning the system and designing tests on the fly, with notes on what was covered",
                "Lower-risk features and new or changed areas",
              ],
            ]}
          />
          <p>
            Unscripted does not mean undocumented or careless. Testers still
            plan the objective, record what they covered and log any defects. It
            often finds more real problems than a script, because testers look
            for failures rather than confirming expected steps.
          </p>
        </>
      ),
    },
    {
      id: "records",
      title: "What records CSA expects",
      body: (
        <>
          <p>
            CSA reduces unnecessary evidence; it does not remove records. A lean
            record for an assurance activity typically covers:
          </p>
          <Checklist
            items={[
              "The intended use of the software, feature or function.",
              "The risk determination and the reasoning behind it.",
              "A description of the testing or other assurance activity performed.",
              "Issues found and how they were resolved or dispositioned.",
              "A conclusion that the software is acceptable for its intended use.",
              "Who performed the activity and when.",
            ]}
          />
          <p>
            Records can be digital. System logs, automated test results and tool
            output are acceptable evidence where they show what happened.
            Screenshots are useful when they add assurance, not as a default for
            every step.
          </p>
        </>
      ),
    },
    {
      id: "gamp-5-and-part-11",
      title: "How CSA relates to GAMP 5 and Part 11",
      body: (
        <>
          <h3>GAMP 5 second edition</h3>
          <p>
            ISPE’s GAMP 5 second edition, published in 2022, puts critical
            thinking, risk-based effort, supplier leverage and agile delivery at
            the centre — the same direction as CSA. If you already follow GAMP 5
            well, adopting CSA thinking is an evolution rather than a new
            framework. Software categories, the life-cycle approach and the
            V-model still apply; CSA influences how deeply you test and document
            each part. Our{" "}
            <Link href="/insights/gamp-5-software-validation-guide">
              GAMP 5 validation guide
            </Link>{" "}
            covers the framework itself.
          </p>
          <h3>21 CFR Part 11</h3>
          <p>
            CSA does not replace or relax 21 CFR Part 11. Where a system creates
            or keeps electronic records or signatures that fall under Part 11,
            you still need the required controls — audit trails, access control,
            signature controls, record protection and validation. CSA can shape
            how you verify those controls, but a system’s audit trail and
            signatures will usually count as high risk. See our{" "}
            <Link href="/insights/21-cfr-part-11-compliance-checklist-lims">
              Part 11 checklist
            </Link>
            .
          </p>
          <Callout title="The short version">
            <p>
              GAMP 5 describes the framework, Part 11 sets requirements for
              electronic records and signatures, and CSA guides how much
              assurance effort each feature needs. They work together.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "adopting-csa",
      title: "Moving from CSV to CSA in practice",
      body: (
        <>
          <p>
            Teams that move to CSA successfully tend to follow a similar path:
          </p>
          <ul>
            <li>
              <strong>Update SOPs first.</strong> Auditors inspect you against
              your own procedures. If they still demand screenshots on every
              step, CSA won’t happen.
            </li>
            <li>
              <strong>Train people in risk assessment</strong>, with worked
              examples from your own systems.
            </li>
            <li>
              <strong>Pilot on one system</strong> — a lower-risk system or a
              change to an existing one — and compare effort and defects found.
            </li>
            <li>
              <strong>Assess suppliers properly</strong> so you can rely on
              their testing with confidence.
            </li>
            <li>
              <strong>Use automation</strong> for regression testing, keeping
              results as records.
            </li>
          </ul>
          <p>
            We build regulated software — LIMS, pharmacovigilance and other GxP
            systems — with risk-based validation packs produced alongside the
            code, and our{" "}
            <Link href="/academy/software-validation-gamp5-course">
              Software Validation course
            </Link>{" "}
            teaches GAMP 5, CSV and Part 11 to QA and life-science
            professionals. For a project, see our{" "}
            <Link href="/services/regulated-software">
              regulated software service
            </Link>{" "}
            or <Link href="/#contact">get in touch</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "What is the difference between CSV and CSA?",
      a: "CSV is the traditional practice of validating computer systems, often with heavy scripted testing and documentation. CSA is FDA’s risk-based approach that focuses effort on high-risk features and allows unscripted testing and leaner records elsewhere.",
    },
    {
      q: "Is the FDA CSA guidance final?",
      a: "Yes. FDA issued the final guidance, Computer Software Assurance for Production and Quality System Software, in September 2025, following a draft published in 2022.",
    },
    {
      q: "Does CSA apply to pharmaceutical companies?",
      a: "The FDA guidance is written for medical device production and quality system software. Many pharma and biotech companies apply the same risk-based thinking, which aligns with GAMP 5 second edition, but should check their own regulatory expectations.",
    },
    {
      q: "Does CSA replace 21 CFR Part 11?",
      a: "No. Part 11 requirements for electronic records and signatures still apply. CSA influences how you plan and document assurance activities, not whether Part 11 controls are needed.",
    },
    {
      q: "What is unscripted testing in CSA?",
      a: "Unscripted testing is testing without pre-written step-by-step scripts, such as ad hoc testing, error guessing and exploratory testing. It suits lower-risk features and is still recorded.",
    },
    {
      q: "Is CSA training available in India?",
      a: "Bright Infonet’s Software Validation course is an 8-week live online programme for QA and life-science professionals covering GAMP 5, CSV and Part 11, including risk-based approaches.",
    },
  ],
};
