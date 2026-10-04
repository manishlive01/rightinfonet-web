import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import PostLink from "@/components/insights/PostLink";
import type { Post } from "./types";

export const limsUrsTemplate: Post = {
  slug: "lims-urs-template",
  title: "LIMS URS template: how to write user requirements for a lab system",
  metaTitle: "LIMS URS Template: Writing Lab User Requirements",
  description:
    "How to write a LIMS user requirements specification: the sections, testable GxP and business requirements, priority and traceability, plus a free URS template.",
  excerpt:
    "The sections of a LIMS URS, how to write requirements that can be tested, which GxP requirements belong in it, and a free spreadsheet template to start from.",
  category: "Regulated software",
  pillar: "regulated",
  cta: {
    href: "/services/lims-software-development",
    label: "LIMS software development",
  },
  cover: "vmodel",
  published: "2026-10-20",
  readingMinutes: 7,
  keywords: [
    "LIMS URS template",
    "user requirements specification LIMS",
    "URS template GxP",
    "how to write a URS",
    "LIMS requirements checklist",
    "URS for laboratory software",
    "GAMP 5 URS",
  ],
  takeaways: [
    "A URS says what the lab needs, not how the software should be built, in short statements that can each be tested.",
    "Give every requirement an ID, a type (GxP or business), a priority and a verification method so it can be traced to tests.",
    "Data-integrity requirements such as audit trails, access control and e-signatures belong in the URS from the first draft.",
    "The URS is approved by the lab and QA and then kept under change control as the project learns more.",
  ],
  intro: (
    <>
      <p>
        A LIMS URS (user requirements specification) is the document that lists
        what your laboratory needs the system to do, written as short, numbered
        statements that can each be tested. It covers sample handling, testing,
        results, approvals, data integrity, interfaces and support, and becomes
        the baseline every specification and test traces back to.
      </p>
      <p>
        A weak URS is the most common root cause of a LIMS project that runs
        late or fails validation. This guide explains how to structure one, how
        to write requirements that hold up in testing, and offers a{" "}
        <Link href="/resources/lims-urs-template">free LIMS URS template</Link>{" "}
        as a spreadsheet you can adapt.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-a-urs-does",
      title: "What a URS is for",
      body: (
        <>
          <p>
            In the GAMP 5 life cycle the URS sits at the top left of the
            V-model. Everything else hangs off it: the functional and
            configuration specifications explain how each requirement will be
            met, the risk assessment rates each one, and the tests prove it. Our{" "}
            <PostLink slug="gxp-software-validation-guide">
              GxP validation guide
            </PostLink>{" "}
            shows where it fits in the whole life cycle.
          </p>
          <p>A good URS does four jobs at once:</p>
          <ul>
            <li>It gets the lab, QA and IT to agree on what is needed.</li>
            <li>It lets suppliers quote and propose against the same list.</li>
            <li>It sets the scope that change control protects.</li>
            <li>It gives validation something concrete to test against.</li>
          </ul>
        </>
      ),
    },
    {
      id: "structure",
      title: "The sections of a LIMS URS",
      body: (
        <>
          <p>
            Labs differ, but most LIMS requirement sets cover the same ground.
            The template follows this structure:
          </p>
          <DataTable
            caption="Typical sections of a LIMS user requirements specification"
            head={["Section", "What it covers", "Example requirement"]}
            rows={[
              [
                "Scope and process",
                "Labs, sites, sample types and the process the LIMS supports",
                "The system shall support QC release testing of raw materials and finished products at one site.",
              ],
              [
                "Sample management",
                "Login, labelling, receipt, storage, chain of custody, disposal",
                "The system shall assign a unique sample ID at login and print a barcode label.",
              ],
              [
                "Specifications and methods",
                "Versioned specifications, methods, limits and units",
                "The system shall compare each result with the approved specification version linked to the sample.",
              ],
              [
                "Testing and results",
                "Worklists, result entry or capture, calculations, OOS handling",
                "The system shall flag results outside specification limits and require an investigation reference.",
              ],
              [
                "Review and approval",
                "Review steps, segregation of duties, release, CoA",
                "The system shall prevent the analyst who entered a result from approving it.",
              ],
              [
                "Data integrity",
                "Audit trail, access control, e-signatures, time stamps",
                "The system shall record user, server time, old value, new value and reason for every change to a result.",
              ],
              [
                "Interfaces",
                "Instruments, data systems, ERP, label printers",
                "The system shall import results from the chromatography data system with a link to the raw data file.",
              ],
              [
                "Non-functional",
                "Availability, performance, backup, security, browser support",
                "The system shall support restore of a backup to a test environment for verification.",
              ],
              [
                "Data migration",
                "Which legacy records move, and how they are verified",
                "Migrated results shall keep their original values, units and approval history.",
              ],
              [
                "Documentation and support",
                "Manuals, training, validation documents, support terms",
                "The supplier shall provide a configuration specification for the delivered system.",
              ],
            ]}
          />
        </>
      ),
    },
    {
      id: "columns",
      title: "The columns that make a URS traceable",
      body: (
        <>
          <p>
            Writing requirements in a spreadsheet or requirements tool, one per
            row, makes traceability much easier than long prose. The template
            uses these columns:
          </p>
          <ul>
            <li>
              <strong>ID</strong> — unique and never reused, such as URS-SM-004.
            </li>
            <li>
              <strong>Section</strong> — the area from the structure above.
            </li>
            <li>
              <strong>Requirement</strong> — one testable statement.
            </li>
            <li>
              <strong>Type</strong> — GxP (affects product quality, patient
              safety or data integrity) or business.
            </li>
            <li>
              <strong>Priority</strong> — for example mandatory, important or
              nice to have.
            </li>
            <li>
              <strong>Regulatory reference</strong> — such as 21 CFR 11.10(e) or
              Annex 11 section 9, where one applies.
            </li>
            <li>
              <strong>Verification method</strong> — test, inspection of a
              document, demonstration or supplier evidence.
            </li>
            <li>
              <strong>Notes</strong> — assumptions, open questions, links.
            </li>
          </ul>
          <p>
            The Type and Priority columns feed straight into the risk
            assessment, and the ID becomes the first column of the traceability
            matrix.
          </p>
        </>
      ),
    },
    {
      id: "writing-requirements",
      title: "Writing requirements that can be tested",
      body: (
        <>
          <p>
            Most URS problems come from requirements that nobody can test. A few
            rules fix most of them:
          </p>
          <DataTable
            caption="Weak requirements and testable rewrites"
            head={["Weak", "Problem", "Testable rewrite"]}
            rows={[
              [
                "The system shall be user-friendly.",
                "No pass or fail criterion",
                "An analyst shall be able to enter a result for a sample from the worklist without leaving the worklist screen.",
              ],
              [
                "The system shall be Part 11 compliant.",
                "Too broad; compliance also depends on procedures",
                "The system shall require user ID and password at each signing and show the meaning of the signature.",
              ],
              [
                "Results should be reviewed.",
                "Not specific about who or when",
                "The system shall prevent CoA generation until all results for the sample are approved by a reviewer role.",
              ],
              [
                "Fast performance.",
                "Unmeasurable",
                "Worklist screens shall load within a time agreed in the performance test plan, with the agreed data volume.",
              ],
            ]}
          />
          <Checklist
            items={[
              "One requirement per row; split anything joined with “and”.",
              "Say what is needed, not which screen or technology delivers it.",
              "Use “shall” for mandatory items and keep the wording consistent.",
              "Avoid vague words: easy, flexible, fast, appropriate, etc.",
              "Write from the lab’s process, not from a product brochure.",
            ]}
          />
        </>
      ),
    },
    {
      id: "gxp-requirements",
      title: "GxP requirements you should not leave out",
      body: (
        <>
          <p>
            These are the requirements most often missing from a first draft,
            and the most expensive to add later:
          </p>
          <ul>
            <li>
              Unique user accounts, role-based access and access-change logs.
            </li>
            <li>
              A secure audit trail with old value, new value and reason; see{" "}
              <PostLink slug="21-cfr-part-11-audit-trail-requirements">
                audit trail requirements
              </PostLink>
              .
            </li>
            <li>Electronic signatures with name, date, time and meaning.</li>
            <li>Segregation of duties between entry, review and approval.</li>
            <li>Server-controlled time stamps with time zone.</li>
            <li>Controlled calculations, verified in the system.</li>
            <li>
              Backup, restore and archive retrieval for the retention period.
            </li>
            <li>
              Readable export of records with their audit trail for inspectors.
            </li>
          </ul>
          <Callout title="Avoid copying a vendor’s feature list">
            <p>
              A URS copied from one product’s brochure biases the selection and
              often misses your real process. Write it from how your lab works,
              then let suppliers show how they meet it.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "approval-and-change",
      title: "Review, approval and keeping it current",
      body: (
        <>
          <p>
            The lab or process owner writes the URS with input from analysts,
            reviewers, IT and QA. QA reviews it for GxP completeness and
            approves it before selection or design is finalised. After approval
            it is a controlled document: changes go through change control and
            are traced through to specifications and tests.
          </p>
          <p>
            On agile builds the URS can live as a controlled backlog, with each
            user story pointing at a requirement ID. That keeps the flexibility
            of sprints without losing traceability. The next step after an
            approved URS is planning the roll-out; our{" "}
            <PostLink slug="lims-implementation-checklist">
              LIMS implementation checklist
            </PostLink>{" "}
            covers it.
          </p>
        </>
      ),
    },
    {
      id: "product-vs-custom",
      title: "A URS for a product selection vs a custom build",
      body: (
        <>
          <p>
            The same URS format works for both routes, with a different
            emphasis. For a product selection, the URS is a scoring tool:
            suppliers state for each row whether it is met by standard function,
            configuration, scripting or not at all, and you compare the gaps.
            For a custom build, the URS becomes the starting backlog, and the
            functional and design specifications are written against it during
            the project.
          </p>
          <p>
            In both cases, resist writing the URS around one product or one
            developer’s proposal. A requirement that only one supplier can meet
            should be there because the lab needs it, not because it appeared in
            a demo.
          </p>
        </>
      ),
    },
    {
      id: "using-the-template",
      title: "How to use the free template",
      body: (
        <>
          <ol>
            <li>Download the spreadsheet from the template page.</li>
            <li>Delete the example rows that do not apply to your lab.</li>
            <li>Add your own process, sample types, methods and interfaces.</li>
            <li>Mark each row GxP or business, and set its priority.</li>
            <li>
              Review it with analysts, QA and IT, then route it for approval.
            </li>
          </ol>
          <p>
            The example rows are generic and only a starting point; your
            process, risk assessment and QA decide the final content. If you
            would rather have a LIMS built around an approved URS, see our{" "}
            <Link href="/services/lims-software-development">
              LIMS development service
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "What is a URS in LIMS validation?",
      a: "A user requirements specification is the controlled list of what the laboratory needs the LIMS to do, written as numbered, testable statements. Specifications, risk assessment and tests all trace back to it.",
    },
    {
      q: "Who writes and approves a LIMS URS?",
      a: "The lab or process owner usually writes it with analysts, reviewers and IT. QA reviews it for GxP completeness and approves it, and it is then kept under change control.",
    },
    {
      q: "How detailed should a URS be?",
      a: "Detailed enough that each requirement can be tested and a supplier can quote against it, but focused on what is needed rather than how it is built. Design detail belongs in the functional or configuration specification.",
    },
    {
      q: "What is the difference between a URS and a functional specification?",
      a: "The URS states what the users need. The functional specification describes how the system will meet each requirement, and is usually written by the supplier or development team.",
    },
    {
      q: "Is the free URS template ready to use as it is?",
      a: "No. It is a generic starting point with example rows. Adapt it to your process, remove what does not apply, and have your QA review and approve the final version.",
    },
    {
      q: "Should GxP and business requirements be in the same URS?",
      a: "Yes, in one list, but marked by type. The GxP flag drives the risk assessment and testing depth, while business requirements still matter for acceptance.",
    },
  ],
};
