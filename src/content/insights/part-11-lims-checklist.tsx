import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import type { Post } from "./types";

export const part11Checklist: Post = {
  slug: "21-cfr-part-11-compliance-checklist-lims",
  title: "21 CFR Part 11 for LIMS and lab software: a practical compliance checklist",
  metaTitle: "21 CFR Part 11 Checklist for LIMS & Lab Software",
  description:
    "What 21 CFR Part 11 really asks of LIMS and lab software — audit trails, e-signatures, access control and validation — as a clause-by-clause checklist.",
  excerpt:
    "Audit trails, e-signatures, access control and validation — what Part 11 actually asks of lab software, clause by clause, and where most systems fall short.",
  category: "Regulated software",
  cover: "audit",
  published: "2026-09-28",
  readingMinutes: 8,
  keywords: [
    "21 CFR Part 11",
    "Part 11 compliance checklist",
    "LIMS Part 11",
    "audit trail requirements",
    "electronic signatures FDA",
    "data integrity lab software",
  ],
  takeaways: [
    "Part 11 applies when an electronic record is required by an FDA predicate rule or submitted to the FDA — not to every file in the lab.",
    "No software is “Part 11 certified”. Compliance comes from technical controls, written procedures and validation, together.",
    "Audit trails and e-signatures are where most lab systems fall short: missing old values, no reason for change, shared logins.",
    "Build the controls into the data model from day one; retrofitting an audit trail is far more expensive than designing one.",
  ],
  intro: (
    <>
      <p>
        If your lab produces results that end up in an FDA submission, a batch release or an
        inspection, the software that holds those results has to meet <strong>21 CFR Part 11</strong>.
        It is one of the most quoted regulations in pharma and one of the most misunderstood:
        vendors call their products “Part 11 compliant”, auditors ask for things the brochure never
        mentioned, and lab teams end up with workarounds on paper.
      </p>
      <p>
        This guide is written for QA heads, lab managers and IT teams who are buying, building or
        fixing a LIMS or any other lab system. It explains what Part 11 covers, then turns the
        regulation into a checklist of controls you can check your software against.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-part-11-covers",
      title: "What Part 11 actually covers",
      body: (
        <>
          <p>
            Part 11 is the US FDA regulation that sets the conditions under which electronic
            records and electronic signatures are treated as trustworthy, reliable and equivalent to
            paper records and handwritten signatures. It took effect in 1997.
          </p>
          <p>
            The key idea is the <strong>predicate rule</strong>. Part 11 does not create new
            record-keeping duties; it applies to records that other FDA regulations already require
            you to keep — for example the GMP rules in 21 CFR 211 or the GLP rules in 21 CFR 58 — and
            to records you submit to the FDA. If a regulation says “keep a record of this test” and
            you keep it electronically, Part 11 applies to that record.
          </p>
          <p>
            In 2003 the FDA published guidance, <em>Part 11, Electronic Records; Electronic
            Signatures — Scope and Application</em>, which narrowed how it interprets the rule and
            said it would take a risk-based approach to some requirements, such as validation and
            audit trails. That guidance did not make those controls optional; it made clear that
            the predicate rules still demand trustworthy records and that the depth of control
            should match the risk to product quality and patient safety.
          </p>
          <Callout title="Selling outside the US?">
            <p>
              The EU equivalent is EudraLex Volume 4, <strong>Annex 11</strong> (Computerised
              Systems). WHO and PIC/S data-integrity guidance ask the same questions under the
              ALCOA+ principles — data must be attributable, legible, contemporaneous, original and
              accurate, as well as complete, consistent, enduring and available. A system built well
              for Part 11 covers most of Annex 11 too.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "does-it-apply",
      title: "Does Part 11 apply to your lab?",
      body: (
        <>
          <p>Part 11 is likely to apply if any of these are true:</p>
          <ul>
            <li>You manufacture or test drugs, APIs or medical devices for the US market.</li>
            <li>You are a CRO, CDMO or contract testing lab whose results support a US client’s filings.</li>
            <li>Your electronic records are used for batch release, stability studies or regulatory submissions.</li>
            <li>Your clients audit you against Part 11 or Annex 11 as part of supplier qualification.</li>
          </ul>
          <p>
            Many Indian pharma QC labs, CROs and API makers fall into at least one of these groups.
            Diagnostic labs that serve only local patients are usually assessed against ISO 15189
            and NABL requirements instead — but the data-integrity expectations are close enough that
            the same software controls pay off.
          </p>
        </>
      ),
    },
    {
      id: "checklist",
      title: "The checklist: controls your software must have",
      body: (
        <>
          <p>
            Section 11.10 lists the controls for <strong>closed systems</strong> — systems where
            access is controlled by the people responsible for the records, which describes most
            LIMS installations. Here is each requirement and what it means in software terms.
          </p>
          <DataTable
            caption="21 CFR 11.10 controls, translated into software requirements"
            head={["Requirement", "Clause", "What it means in the software"]}
            rows={[
              ["Validation", "11.10(a)", "Documented evidence the system does what it should, accurately and consistently, and can detect invalid or altered records."],
              ["Accurate, complete copies", "11.10(b)", "Records can be exported in human-readable and electronic form, with their metadata and audit trail, for inspectors."],
              ["Record protection", "11.10(c)", "Records are retrievable for the full retention period — backups, restores that are tested, and readable formats."],
              ["Limited access", "11.10(d)", "Unique user accounts, role-based permissions, no shared logins, disabled accounts for leavers."],
              ["Audit trails", "11.10(e)", "Secure, computer-generated, time-stamped trail of every create, change and delete — who, what, when, old and new value."],
              ["Operational checks", "11.10(f)", "The system enforces the right order of steps — e.g. a result can’t be approved before it is reviewed."],
              ["Authority checks", "11.10(g)", "Only authorised roles can sign, approve, change specifications or alter records."],
              ["Device checks", "11.10(h)", "The system confirms data comes from a valid source, such as a qualified instrument or terminal."],
              ["Training", "11.10(i)", "People who build, run and use the system are trained, and that training is recorded."],
              ["Accountability policy", "11.10(j)", "Written policy that users are responsible for actions under their e-signature."],
              ["Documentation control", "11.10(k)", "System documentation is controlled, versioned and changes are tracked."],
            ]}
          />
          <p>
            Items (a) to (h) are mostly technical — they live in your software. Items (i) to (k)
            are procedural — they live in your SOPs. An inspector will look at both.
          </p>
        </>
      ),
    },
    {
      id: "audit-trails",
      title: "Audit trails: where most systems fall short",
      body: (
        <>
          <p>
            Part 11 asks for audit trails that record the date and time of operator entries and
            actions that create, modify or delete electronic records, and says changes must not
            obscure previously recorded information. The trail must be kept at least as long as
            the record itself and be available for FDA review and copying.
          </p>
          <p>In practice, these are the gaps we find most often when we review lab software:</p>
          <Checklist
            items={[
              <><strong>Only the new value is stored.</strong> The trail says “result updated” but not what it was before.</>,
              <><strong>No reason for change.</strong> Data-integrity guidance expects a reason for changes to GxP data; the system should ask for one.</>,
              <><strong>The trail can be switched off</strong> or edited by an administrator. It should be append-only, with no user able to alter it.</>,
              <><strong>Time comes from the user’s PC.</strong> Time stamps should come from a synchronised server clock, with the time zone recorded.</>,
              <><strong>Nobody reviews it.</strong> A trail that is never read does not protect data. Reviewing relevant audit-trail entries should be part of result review.</>,
              <><strong>Deleted runs disappear.</strong> Re-running a test and discarding the first result without a trace is exactly what inspectors look for.</>,
            ]}
          />
          <p>
            The fix is architectural. We design audit trails at the database layer as an
            append-only log, with each entry capturing the user, server time, record, field, old
            value, new value and reason. Making it tamper-evident — for example by chaining a hash
            of each entry into the next — lets you prove the log has not been edited.
          </p>
        </>
      ),
    },
    {
      id: "electronic-signatures",
      title: "Electronic signatures, done right",
      body: (
        <>
          <p>
            Subpart C of Part 11 covers electronic signatures. For a LIMS, the requirements that
            shape the screens and the data model are:
          </p>
          <ul>
            <li>
              <strong>Signature manifestation (11.50).</strong> A signed record must show the
              signer’s printed name, the date and time of signing, and the meaning of the signature
              — such as review, approval, responsibility or authorship. This must appear wherever
              the record is displayed or printed.
            </li>
            <li>
              <strong>Signature/record linking (11.70).</strong> Signatures must be linked to their
              records so they cannot be removed, copied or transferred to falsify another record.
            </li>
            <li>
              <strong>Uniqueness (11.100).</strong> Each e-signature belongs to one person and is
              never reused or reassigned. Before using e-signatures, the organisation must also
              certify to the FDA that they are intended to be the legally binding equivalent of
              handwritten signatures.
            </li>
            <li>
              <strong>Two components (11.200).</strong> Signatures not based on biometrics need at
              least two distinct components, such as a user ID and a password. In one continuous
              session, the first signing uses all components; later signings need at least one
              component that only the signer can use.
            </li>
            <li>
              <strong>Password controls (11.300).</strong> Unique ID and password combinations,
              periodic checks, procedures for lost credentials, and detection and reporting of
              attempts at unauthorised use.
            </li>
          </ul>
          <p>
            A good signing flow re-asks for the password at the moment of signing, makes the user
            choose the meaning of the signature, and stores the signature as its own record pointing
            at a specific version of the data — so if the data changes later, the signature visibly
            no longer applies.
          </p>
        </>
      ),
    },
    {
      id: "not-a-certificate",
      title: "Part 11 is not a certificate you can buy",
      body: (
        <>
          <p>
            There is no official “Part 11 certification” for software. A vendor can build the
            technical controls, but compliance belongs to the regulated company and depends on
            three things working together:
          </p>
          <ol>
            <li><strong>Technical controls</strong> in the software — audit trails, access control, e-signatures.</li>
            <li><strong>Procedural controls</strong> — SOPs for access, backup, periodic review, training and change control.</li>
            <li>
              <strong>Validation</strong> — documented evidence that the system, as configured in
              your lab, is fit for its intended use. Our guide to{" "}
              <Link href="/insights/gamp-5-software-validation-guide">GAMP 5 software validation</Link>{" "}
              walks through what that evidence looks like.
            </li>
          </ol>
          <p>
            When you evaluate a system, ask the vendor for a Part 11 assessment that maps each
            clause to a feature, and for the validation documents they can supply. If the answer
            is only a logo on a brochure, plan for extra work.
          </p>
        </>
      ),
    },
    {
      id: "quick-self-check",
      title: "A quick self-check for your current system",
      body: (
        <>
          <p>Answer these honestly. Every “no” is a finding waiting to happen:</p>
          <Checklist
            items={[
              "Does every person have their own login, including at shared instrument PCs?",
              "Can you show who changed a result, when, from what value to what value, and why?",
              "Is it impossible for any user — including admins — to edit or disable the audit trail?",
              "Do signed records show the signer’s name, date, time and meaning of the signature?",
              "Are calculations done inside the validated system rather than in uncontrolled spreadsheets?",
              "Have you restored a backup in the last year and checked the data came back intact?",
              "Is there a documented, current validation package for the system as it is configured today?",
            ]}
          />
          <p>
            If you are building a new lab platform, or your current one fails several of these, we
            can help. We build LIMS and drug-safety systems with these controls in the data model
            from day one, and deliver the validation pack alongside the code.{" "}
            <Link href="/#contact">Talk to an engineer</Link> about your system.
          </p>
        </>
      ),
    },
  ],
};
