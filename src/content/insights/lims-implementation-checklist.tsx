import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import PostLink from "@/components/insights/PostLink";
import type { Post } from "./types";

export const limsImplementationChecklist: Post = {
  slug: "lims-implementation-checklist",
  title: "LIMS implementation checklist: from kick-off to go-live and beyond",
  metaTitle: "LIMS Implementation Checklist: Kick-off to Go-live",
  description:
    "A phase-by-phase LIMS implementation checklist: governance, requirements, configuration, data migration, interfaces, validation, training and go-live.",
  excerpt:
    "Every phase of a LIMS roll-out as a checklist: who owns what, the deliverables for each phase, and the steps that most often get missed before go-live.",
  category: "Regulated software",
  pillar: "regulated",
  cta: {
    href: "/services/lims-software-development",
    label: "LIMS software development",
  },
  cover: "vmodel",
  published: "2026-10-27",
  readingMinutes: 7,
  keywords: [
    "LIMS implementation checklist",
    "LIMS implementation plan",
    "LIMS go-live checklist",
    "LIMS data migration",
    "LIMS validation steps",
    "LIMS project plan",
    "lab software implementation",
  ],
  takeaways: [
    "A LIMS project is a process change with software attached; name a process owner and a QA owner before anything else.",
    "Lock the URS, then design, migrate data, build interfaces and validate in phases, each with its own deliverables.",
    "Data migration, master data and instrument interfaces cause more delays than the core software; start them early.",
    "Go-live needs a cut-over plan, trained users, approved SOPs and a signed validation report, followed by a hypercare period.",
  ],
  intro: (
    <>
      <p>
        A LIMS implementation succeeds when you treat it as a lab process
        project: appoint owners, approve a testable URS, configure or build in
        phases, migrate and verify master data, connect instruments, validate in
        proportion to risk, train users on new SOPs, and plan cut-over and
        hypercare before go-live. This checklist covers each phase.
      </p>
      <p>
        It works for a configured product or a custom build. Tick each item off,
        or note why it does not apply, and you will have most of the evidence an
        auditor expects by the time the system goes live.
      </p>
    </>
  ),
  sections: [
    {
      id: "phases-at-a-glance",
      title: "The phases at a glance",
      body: (
        <DataTable
          caption="LIMS implementation phases, deliverables and owners"
          head={["Phase", "Key deliverables", "Usually owned by"]}
          rows={[
            [
              "1 Set-up",
              "Charter, team, scope, validation plan",
              "Lab head, QA, project manager",
            ],
            [
              "2 Requirements",
              "Approved URS, process maps, GxP impact assessment",
              "Process owner, QA",
            ],
            [
              "3 Selection or design",
              "Supplier assessment, functional and configuration or design specifications",
              "Project team, supplier",
            ],
            [
              "4 Build and configure",
              "Configured or developed system, master data, interfaces",
              "Supplier or development team",
            ],
            [
              "5 Data migration",
              "Migration plan, mapping, verification report",
              "Project team, QA",
            ],
            [
              "6 Validation",
              "Risk assessment, IQ/OQ/PQ, traceability matrix, summary report",
              "Validation lead, QA approval",
            ],
            [
              "7 Training and SOPs",
              "Updated SOPs, training records",
              "Lab head, QA",
            ],
            [
              "8 Cut-over and hypercare",
              "Cut-over plan, go-live approval, issue log",
              "Project manager, lab head, QA",
            ],
          ]}
        />
      ),
    },
    {
      id: "set-up",
      title: "Phase 1: set-up and governance",
      body: (
        <Checklist
          items={[
            "Name a process owner from the lab and a QA owner who will approve the validation.",
            "Write a one-page charter: which labs, which sample types, what is in and out of scope.",
            "Decide the delivery model: configured product, custom build or a mix.",
            "Draft the validation plan early, so the approach is agreed before work starts.",
            "Agree how decisions and changes will be approved during the project.",
            "Book analysts’ time; a LIMS cannot be designed without the people who use it.",
          ]}
        />
      ),
    },
    {
      id: "requirements",
      title: "Phase 2: requirements",
      body: (
        <>
          <Checklist
            items={[
              "Map the current process for each sample type, including paper and spreadsheet steps.",
              "Write the URS as numbered, testable requirements, marked GxP or business.",
              "Include data-integrity requirements: audit trail, access control, e-signatures, backup.",
              "List every instrument, data system and business system the LIMS must exchange data with.",
              "Have QA review and approve the URS before selection or design is finalised.",
            ]}
          />
          <p>
            Our <PostLink slug="lims-urs-template">LIMS URS template</PostLink>{" "}
            is a practical starting point. If you have not decided between a
            product and a custom build yet, read{" "}
            <PostLink slug="custom-lims-vs-off-the-shelf-lims">
              custom vs off-the-shelf LIMS
            </PostLink>{" "}
            first.
          </p>
        </>
      ),
    },
    {
      id: "design-and-build",
      title: "Phases 3 and 4: design, build and configuration",
      body: (
        <Checklist
          items={[
            "Assess the supplier’s quality system and development practices, and record the result.",
            "Write functional and configuration or design specifications that trace to the URS.",
            "Prepare master data early: products, specifications, methods, limits, units, users and roles.",
            "Have master data checked by a second person; a wrong limit is a GxP error.",
            "Build interfaces one instrument or system at a time, with test data from the real device.",
            "Hold regular demos with analysts so problems surface before formal testing.",
          ]}
        />
      ),
    },
    {
      id: "environments",
      title: "Environments: keep testing and production apart",
      body: (
        <>
          <p>
            Plan the environments before the build starts. Most regulated
            projects use at least three: development, where the supplier or team
            builds and configures; a controlled test or validation environment
            that mirrors production, where formal testing runs; and production,
            used only for real GxP work.
          </p>
          <Checklist
            items={[
              "Record the versions and configuration of each environment, so test results can be trusted for production.",
              "Move configuration and code between environments by a controlled, repeatable process.",
              "Never test with live patient or batch data unless it has been approved and protected.",
              "Keep a test environment after go-live for changes and upgrades.",
            ]}
          />
        </>
      ),
    },
    {
      id: "data-migration",
      title: "Phase 5: data migration",
      body: (
        <>
          <p>
            Migration is the step most often underestimated. Decide what moves,
            and how you will prove it moved correctly.
          </p>
          <Checklist
            items={[
              "Decide which records migrate, which are archived in the old system and which stay on paper.",
              "Map each field from source to target, including units and status values.",
              "Run trial migrations and fix mapping errors before the final run.",
              "Verify migrated data with a documented check, such as full comparison for critical data and sampling for the rest.",
              "Keep the audit trail and approval history where they are needed to understand the record.",
            ]}
          />
          <Callout title="Archive, don’t abandon">
            <p>
              Records left in the old system must stay readable and retrievable
              for their retention period. Plan that archive before you switch
              the old system off.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "validation",
      title: "Phase 6: validation",
      body: (
        <>
          <Checklist
            items={[
              "Complete the risk assessment against the URS and agree test depth with QA.",
              "Install in a controlled environment and record versions and settings (IQ).",
              "Test functions, especially audit trail, signatures, calculations and access (OQ).",
              "Test real workflows with trained users and realistic data (PQ).",
              "Log and resolve deviations; retest where needed.",
              "Complete the traceability matrix and the validation summary report for QA approval.",
            ]}
          />
          <p>
            The full list of documents is in our explainer on{" "}
            <PostLink slug="what-is-a-validation-package">
              what a validation package contains
            </PostLink>
            .
          </p>
        </>
      ),
    },
    {
      id: "training-and-go-live",
      title: "Phases 7 and 8: training, cut-over and hypercare",
      body: (
        <>
          <Checklist
            items={[
              "Update or write SOPs for sample handling, review, audit-trail review, access and backup.",
              "Train every user on the validated system and SOPs, and record the training.",
              "Write a cut-over plan: freeze date, final migration, parallel running if any, go/no-go criteria.",
              "Get QA approval of the validation summary report before GxP use.",
              "Run a hypercare period with fast support and a visible issue log.",
              "Schedule the first periodic review and hand over to change control.",
            ]}
          />
          <p>
            After go-live the system is only as validated as its change control.
            Every patch, new instrument or new test method goes through impact
            assessment before release.
          </p>
        </>
      ),
    },
    {
      id: "roles",
      title: "Who you need on the team",
      body: (
        <>
          <p>
            Small labs combine some of these roles, but each responsibility
            should have a named person:
          </p>
          <ul>
            <li>
              <strong>Process owner</strong> — usually the lab head; owns the
              requirements, makes process decisions and accepts the system.
            </li>
            <li>
              <strong>QA owner</strong> — approves the validation plan, URS and
              summary report, and decides whether deviations are acceptable.
            </li>
            <li>
              <strong>Project manager</strong> — runs the plan, the risks and
              the issue log, and keeps decisions recorded.
            </li>
            <li>
              <strong>Key users</strong> — experienced analysts and reviewers
              who help design workflows, check master data and run PQ.
            </li>
            <li>
              <strong>System owner and IT</strong> — infrastructure, security,
              backups, user administration and the environments.
            </li>
            <li>
              <strong>Validation lead</strong> — writes or coordinates the
              validation documents and the traceability matrix.
            </li>
            <li>
              <strong>Supplier or development team</strong> — delivers the
              configured or custom system, specifications and developer
              evidence.
            </li>
          </ul>
          <p>
            The roles that are most often left empty are key users and the
            system owner. Without key users the workflows are designed from
            assumptions; without a system owner nobody runs access reviews,
            backups or periodic reviews after go-live.
          </p>
        </>
      ),
    },
    {
      id: "instruments-and-interfaces",
      title: "Instruments and interfaces",
      body: (
        <>
          <p>
            Interfaces deserve their own checklist, because each one is a small
            project with its own risks:
          </p>
          <Checklist
            items={[
              "List every instrument and data system, with its software version and what it can output.",
              "Decide for each one: direct interface, file import, or controlled manual entry with a second-person check.",
              "Collect real output files early and test parsing against them, including error cases.",
              "Make sure the raw data stays linked to the result in the LIMS.",
              "Agree what happens when an import fails or a value is out of range.",
              "Include interface changes, such as instrument software upgrades, in change control.",
            ]}
          />
        </>
      ),
    },
    {
      id: "common-delays",
      title: "Where LIMS projects usually slip",
      body: (
        <>
          <ul>
            <li>Analysts are not released from routine work to help design.</li>
            <li>
              Master data turns out to be inconsistent across sites or teams.
            </li>
            <li>
              Instrument outputs differ from what the specification assumed.
            </li>
            <li>The URS changes late without going through change control.</li>
            <li>Validation starts after the build instead of alongside it.</li>
          </ul>
          <p>
            We build LIMS in phases with the validation deliverables written
            alongside the code, so these risks show up early. See our{" "}
            <Link href="/services/lims-software-development">
              LIMS development service
            </Link>{" "}
            for how a project runs.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "What are the main phases of a LIMS implementation?",
      a: "Set-up and governance, requirements, selection or design, build and configuration, data migration, validation, training and SOPs, then cut-over and hypercare. Each phase has its own deliverables and owner.",
    },
    {
      q: "How long does a LIMS implementation take?",
      a: "It depends on the number of labs, sample types, instruments and the delivery model. A phased plan, agreed in writing after requirements, is more reliable than a single estimate at the start.",
    },
    {
      q: "Who should own a LIMS project?",
      a: "A process owner from the lab should own the requirements and outcome, with a QA owner who approves validation. A project manager coordinates the work and the supplier delivers the system.",
    },
    {
      q: "Does data migration need to be validated?",
      a: "Yes. Migrated GxP data must be verified so values, units and meaning are not altered. The plan, mapping and verification results form part of the validation evidence.",
    },
    {
      q: "Can we go live before validation is complete?",
      a: "Not for GxP use. The system should be released for GxP work only after QA has approved the validation summary report, with any open deviations assessed and justified.",
    },
    {
      q: "What happens after LIMS go-live?",
      a: "A hypercare period for quick fixes and support, then normal operation under change control, incident management, audit-trail review and periodic review.",
    },
  ],
};
