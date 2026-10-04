import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import PostLink from "@/components/insights/PostLink";
import type { Post } from "./types";

export const part11AuditTrailRequirements: Post = {
  slug: "21-cfr-part-11-audit-trail-requirements",
  title:
    "21 CFR Part 11 audit trail requirements: what to capture, design and review",
  metaTitle: "21 CFR Part 11 Audit Trail Requirements Explained",
  description:
    "What 21 CFR 11.10(e) asks of an audit trail: the fields to capture, how to design it so it can’t be altered, how to review it, and how to test it in validation.",
  excerpt:
    "The audit-trail clause of Part 11, unpacked: which fields to record, how to make the trail tamper-evident, how QA should review it and how to validate it.",
  category: "Regulated software",
  pillar: "regulated",
  cta: {
    href: "/services/regulated-software",
    label: "Regulated software service",
  },
  cover: "audit",
  published: "2026-07-21",
  readingMinutes: 7,
  keywords: [
    "21 CFR Part 11 audit trail",
    "audit trail requirements FDA",
    "11.10(e) audit trail",
    "audit trail review",
    "electronic records audit trail",
    "data integrity audit trail",
    "Annex 11 audit trail",
  ],
  takeaways: [
    "Section 11.10(e) asks for a secure, computer-generated, time-stamped trail of entries and actions that create, modify or delete electronic records.",
    "Changes must not obscure earlier values, and the trail must be kept as long as the record and be available for FDA review and copying.",
    "A useful trail records who, what, when, the old and new value and why; the reason is a data-integrity expectation rather than literal Part 11 text.",
    "An audit trail nobody reviews protects nothing. Design it so reviewers can find the entries that matter quickly.",
  ],
  intro: (
    <>
      <p>
        Under 21 CFR 11.10(e), a system holding regulated electronic records
        needs a secure, computer-generated, time-stamped audit trail that
        independently records who created, changed or deleted a record and when.
        Changes must not hide earlier values, and the trail must be kept as long
        as the record and be available to the FDA.
      </p>
      <p>
        That one sentence of regulation drives a lot of design work. This
        article goes deeper than our{" "}
        <PostLink slug="21-cfr-part-11-compliance-checklist-lims">
          Part 11 checklist
        </PostLink>
        : what to capture, how to build a trail that cannot be quietly altered,
        how QA should review it, and how to test it during validation.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-the-rule-says",
      title: "What the regulation and FDA guidance say",
      body: (
        <>
          <p>
            Part 11 is short on detail. Section 11.10(e) gives four requirements
            for closed systems:
          </p>
          <ul>
            <li>
              The trail is{" "}
              <strong>secure, computer-generated and time-stamped</strong>, and
              records operator entries and actions independently of the user.
            </li>
            <li>
              It covers actions that <strong>create, modify or delete</strong>{" "}
              electronic records.
            </li>
            <li>
              Record changes must <strong>not obscure</strong> previously
              recorded information.
            </li>
            <li>
              The trail is <strong>retained at least as long</strong> as the
              record itself and is available for agency review and copying.
            </li>
          </ul>
          <p>
            FDA’s 2003 guidance on the scope and application of Part 11 said the
            agency would apply enforcement discretion to some requirements,
            including audit trails, while expecting companies to meet their
            predicate rules and use risk assessment. That is not a licence to
            skip them. FDA’s 2018 guidance on data integrity and CGMP describes
            an audit trail as a record that lets you reconstruct the history of
            an electronic record, and recommends that audit trails capturing
            changes to critical data are reviewed with each record before it is
            finally approved.
          </p>
        </>
      ),
    },
    {
      id: "what-to-capture",
      title: "What each audit-trail entry should capture",
      body: (
        <>
          <p>
            The test of a good entry is simple: could an inspector reconstruct
            exactly what happened from the trail alone, without asking anyone?
          </p>
          <DataTable
            caption="Fields in a useful audit-trail entry"
            head={["Field", "Why it matters"]}
            rows={[
              [
                "User identity",
                "Attributable: the unique account that acted, never a shared or system login for user actions",
              ],
              [
                "Date and time",
                "From a synchronised server clock, with the time zone, so sequences can be trusted",
              ],
              [
                "Action",
                "Create, modify, delete, approve, reject, status change",
              ],
              [
                "Record and field",
                "Which sample, result, specification or case, and which attribute changed",
              ],
              [
                "Old value",
                "Needed so the change does not obscure what was recorded before",
              ],
              ["New value", "What the record says now"],
              [
                "Reason for change",
                "Expected by data-integrity guidance and Annex 11 for GxP data; picked from a list or typed",
              ],
              [
                "Context",
                "Linked signature, instrument, workstation or batch where relevant",
              ],
            ]}
          />
          <p>
            Part 11 itself does not use the words “reason for change”. EU Annex
            11 does, and so do MHRA, WHO and PIC/S data-integrity guidance. A
            system sold to both markets should ask for a reason on every change
            to GxP data.
          </p>
        </>
      ),
    },
    {
      id: "which-events",
      title: "Which events belong in the trail",
      body: (
        <>
          <p>
            It helps to separate two kinds of trail. A{" "}
            <strong>record audit trail</strong> follows the GxP data itself:
            results, sample status, specifications, case data. A{" "}
            <strong>system audit trail</strong> follows the configuration and
            security around it: user and role changes, password policy, master
            data, calculation formulas, interface settings and the audit-trail
            settings themselves.
          </p>
          <p>
            Both matter. A changed calculation formula can alter every result
            that follows, and a temporary role change can let someone approve
            their own work. Log-ins, failed log-in attempts and session
            time-outs are usually kept in a security log, which reviewers need
            alongside the record trail when they investigate.
          </p>
          <Callout title="Don’t log everything equally">
            <p>
              Logging every screen view creates noise that hides the entries
              that matter. Decide, with QA, which data is GxP-relevant and make
              sure those changes are always trailed. Risk assessment is the
              right place to record that decision.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "design",
      title: "Designing a trail that cannot be quietly altered",
      body: (
        <>
          <p>“Secure” is the word that shapes the architecture. In practice:</p>
          <ul>
            <li>
              <strong>Append-only storage.</strong> Entries are inserted, never
              updated or deleted, and no application role — including
              administrators — can edit them.
            </li>
            <li>
              <strong>Written by the system, not the user interface.</strong>{" "}
              Capturing changes at the data layer means a new screen or an API
              call cannot bypass the trail.
            </li>
            <li>
              <strong>Cannot be switched off</strong> for GxP data. If a product
              allows it, the setting itself must be controlled and trailed.
            </li>
            <li>
              <strong>Tamper-evident.</strong> Chaining a hash of each entry
              into the next lets you show the log has not been edited, even by
              someone with database access.
            </li>
            <li>
              <strong>Readable and exportable.</strong> Inspectors need human
              readable copies with the record’s metadata, which ties into
              11.10(b).
            </li>
            <li>
              <strong>Retained with the record.</strong> Archiving and migration
              plans must carry the trail along, or the records lose their
              history.
            </li>
          </ul>
          <p>
            Retrofitting this into a system that was not designed for it is
            expensive, which is why we design the audit trail into the data
            model on day one of a{" "}
            <Link href="/services/lims-software-development">LIMS build</Link>{" "}
            and every other regulated system.
          </p>
        </>
      ),
    },
    {
      id: "review",
      title: "Audit-trail review: making it practical",
      body: (
        <>
          <p>
            Review is where most labs struggle. Nobody can read every entry for
            every result, and nobody should have to. A practical approach has
            two levels:
          </p>
          <ol>
            <li>
              <strong>Record-level review</strong> as part of result or case
              review, before approval. The reviewer checks changes to critical
              data for that record: re-integrations, edited results, deleted
              runs, late entries.
            </li>
            <li>
              <strong>Periodic system review</strong> on a risk-based schedule:
              user and role changes, configuration changes, failed log-ins and
              anything unusual since the last review.
            </li>
          </ol>
          <p>The software can make this much easier:</p>
          <Checklist
            items={[
              "Filter the trail by record, user, date range and action type.",
              "Flag exceptions automatically: changes after review, deletions, repeated edits, changes by the approver.",
              "Show the trail beside the record on the review screen, not in a separate report.",
              "Record that the review happened, by whom and when, as its own trailed event.",
            ]}
          />
        </>
      ),
    },
    {
      id: "common-findings",
      title: "Common audit-trail findings",
      body: (
        <>
          <p>
            These are the gaps that show up again and again in reviews of lab
            and quality software:
          </p>
          <Checklist
            items={[
              "Only the new value is stored, so the original result is lost.",
              "Time comes from the user’s PC, which the user can change.",
              "Administrators can disable the trail or purge old entries.",
              "Result data is trailed, but specification and formula changes are not.",
              "Deleted or aborted instrument runs leave no trace.",
              "The trail exists but there is no SOP or evidence of review.",
              "Exports drop the trail, so archived records lose their history.",
            ]}
          />
          <p>
            Most of these are design decisions, not bugs. They are much cheaper
            to fix in the requirements than after go-live; the EU view of the
            same topic is in our{" "}
            <PostLink slug="eu-annex-11-computerised-systems">
              EU Annex 11 guide
            </PostLink>
            .
          </p>
        </>
      ),
    },
    {
      id: "legacy-systems",
      title: "Legacy systems without a proper audit trail",
      body: (
        <>
          <p>
            Many labs run older instruments or software whose audit trail is
            missing, incomplete or easy to switch off. Replacing them is not
            always possible straight away. Interim measures usually combine:
          </p>
          <ul>
            <li>A documented risk assessment of what the gap allows.</li>
            <li>Restricted access, with no shared accounts.</li>
            <li>
              Procedural controls such as logbooks or second-person checks.
            </li>
            <li>
              Moving the GxP record of truth into a system that does have a
              compliant trail.
            </li>
            <li>A dated plan to upgrade or replace the system.</li>
          </ul>
          <p>
            Inspectors generally accept interim controls only when the gap is
            recognised, assessed and on a path to closure.
          </p>
        </>
      ),
    },
    {
      id: "validation",
      title: "How to test an audit trail during validation",
      body: (
        <>
          <p>
            Because the audit trail protects every other record, it is almost
            always treated as high risk and tested with scripted tests and
            objective evidence. Typical operational tests:
          </p>
          <ul>
            <li>
              Create, modify and delete a record; confirm each entry shows user,
              server time, old value, new value and reason.
            </li>
            <li>
              Try to edit or delete trail entries as each role, including
              administrator, and through any API.
            </li>
            <li>
              Change the workstation clock and confirm entries still use server
              time.
            </li>
            <li>
              Export a record and confirm the trail travels with it in readable
              form.
            </li>
            <li>
              Restore a backup and confirm the trail is complete and matches.
            </li>
          </ul>
          <p>
            These tests sit in the OQ part of the{" "}
            <PostLink slug="gxp-software-validation-guide">
              GxP validation life cycle
            </PostLink>
            , traced back to audit-trail requirements in the URS.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "What does 21 CFR 11.10(e) require?",
      a: "It requires secure, computer-generated, time-stamped audit trails that independently record operator entries and actions that create, modify or delete electronic records. Changes must not obscure earlier information, and the trail must be kept as long as the record and be available to the FDA.",
    },
    {
      q: "Does Part 11 require a reason for change?",
      a: "The Part 11 text does not say so explicitly. EU Annex 11 and data-integrity guidance from regulators such as MHRA, WHO and PIC/S expect a documented reason for changes to GxP data, so most regulated systems ask for one.",
    },
    {
      q: "How often should audit trails be reviewed?",
      a: "FDA’s data-integrity guidance recommends reviewing audit trails that capture changes to critical data with each record, before final approval. System-level trails are usually reviewed periodically on a risk-based schedule set in your SOPs.",
    },
    {
      q: "Can an administrator be allowed to edit the audit trail?",
      a: "No. No user, including administrators, should be able to edit, delete or disable the audit trail for GxP data. Any setting that affects the trail must itself be controlled and recorded.",
    },
    {
      q: "Do log-in records belong in the audit trail?",
      a: "Log-ins and failed attempts are usually kept in a security log rather than the record audit trail. Both should be retained and available, because reviewers often need them together during an investigation.",
    },
    {
      q: "How is an audit trail validated?",
      a: "With scripted tests that create, change and delete records and check every field of the entries, attempts to alter the trail as each role, clock-change tests, export checks and a backup restore check, all traced to URS requirements.",
    },
  ],
};
