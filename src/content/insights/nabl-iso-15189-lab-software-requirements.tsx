import Link from "next/link";
import {
  Callout,
  Checklist,
  DataTable,
  Source,
} from "@/components/insights/Prose";
import PostLink from "@/components/insights/PostLink";
import type { Post } from "./types";

export const nablIso15189LabSoftwareRequirements: Post = {
  slug: "nabl-iso-15189-lab-software-requirements",
  title:
    "NABL and ISO 15189 software requirements for diagnostic labs, explained",
  metaTitle: "NABL & ISO 15189 Lab Software Requirements",
  description:
    "What ISO 15189 and NABL expect from lab software: sample traceability, validated interfaces, report content, authorised release, security and downtime plans.",
  excerpt:
    "What an ISO 15189 assessor looks for in your LIS or LIMS: traceability, validated interfaces, report content, authorised release, access control and downtime plans.",
  category: "Regulated software",
  pillar: "regulated",
  cta: {
    href: "/industries/diagnostic-lab-software",
    label: "Diagnostic lab software",
  },
  cover: "audit",
  published: "2026-08-11",
  updated: "2026-10-04",
  readingMinutes: 7,
  keywords: [
    "NABL software requirements",
    "ISO 15189 LIS requirements",
    "ISO 15189 2022 information management",
    "NABL accreditation lab software",
    "pathology lab software India",
    "LIS validation ISO 15189",
    "diagnostic lab reporting software",
  ],
  takeaways: [
    "ISO 15189 expects lab information systems to be validated or verified before use and after changes, protected from unauthorised access and loss, and covered by downtime plans.",
    "NABL accredits Indian medical labs against ISO 15189 together with its own specific criteria, so check NABL’s current documents as well as the standard.",
    "In software terms that means sample traceability, controlled result entry and interfaces, complete reports, authorised release and amended-report history.",
    "Diagnostic labs are not usually assessed against Part 11, but the same audit-trail and access controls make accreditation easier.",
  ],
  intro: (
    <>
      <p>
        ISO 15189, the standard NABL uses to accredit medical laboratories in
        India, expects lab software to be validated before use, protected
        against unauthorised access and data loss, and able to trace every
        sample and result. Reports must carry the required content and be
        released only by authorised staff, with a plan for when systems are
        down.
      </p>
      <p>
        This guide translates those expectations into software requirements for
        a laboratory information system (LIS) or LIMS, so you can check a
        product, brief a developer or prepare for an assessment. It is general
        guidance; your quality manager and NABL’s current documents have the
        final word.
      </p>
    </>
  ),
  sections: [
    {
      id: "iso-15189-and-nabl",
      title: "ISO 15189 and NABL in brief",
      body: (
        <>
          <p>
            ISO 15189,{" "}
            <Source href="https://www.iso.org/standard/76677.html">
              <em>
                Medical laboratories — Requirements for quality and competence
              </em>
            </Source>
            , is the international standard for medical labs. Its current
            edition was published in 2022 and also absorbed the requirements for
            point-of-care testing that used to sit in a separate standard.
          </p>
          <p>
            NABL, the{" "}
            <Source href="https://nabl-india.org/">
              National Accreditation Board for Testing and Calibration
              Laboratories
            </Source>
            , is a constituent board of the Quality Council of
            India. It accredits medical laboratories against ISO 15189 together
            with its own specific criteria and policies. Accreditation bodies
            set transition timelines when a standard is revised, so check NABL’s
            current requirements rather than relying on older checklists.
          </p>
          <Callout title="Accreditation is about the lab, not the software">
            <p>
              No software is “NABL approved”. Accreditation assesses the lab’s
              quality system and competence. Good software makes the evidence
              easy to produce; procedures, people and records still do the work.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "information-systems",
      title: "What the standard asks of information systems",
      body: (
        <>
          <p>
            The 2022 edition has a clause on the control of data and information
            management. Summarised in plain language, it expects the lab to:
          </p>
          <ul>
            <li>
              Define who may access patient data and information, enter and
              change results, and authorise release of reports.
            </li>
            <li>
              Validate or verify information systems before introduction, and
              again after changes, including interfaces and calculations.
            </li>
            <li>
              Protect systems and data against unauthorised access, tampering
              and loss, and operate them in a suitable environment.
            </li>
            <li>
              Keep documentation, maintenance records and supplier information
              for the systems in use.
            </li>
            <li>
              Plan for downtime so the service can continue when systems fail,
              and check data after recovery.
            </li>
            <li>
              Apply the same controls when systems are hosted or managed off
              site, or by a supplier.
            </li>
          </ul>
          <p>
            Confidentiality of patient information runs through the whole
            standard, which in India sits alongside the Digital Personal Data
            Protection Act, 2023. How that Act applies to your lab is a question
            for your legal advisers.
          </p>
        </>
      ),
    },
    {
      id: "requirements-table",
      title: "From standard to software requirements",
      body: (
        <DataTable
          caption="ISO 15189 expectations translated into lab software requirements"
          head={[
            "Area",
            "What the lab must show",
            "What the software should do",
          ]}
          rows={[
            [
              "Patient and sample identity",
              "Unambiguous identification from request to report",
              "Unique IDs, barcode labels, positive identification at each step",
            ],
            [
              "Pre-examination",
              "Requests, collection and receipt recorded and traceable",
              "Record requester, collection time, collector, receipt time and condition",
            ],
            [
              "Examination",
              "Results transferred and calculated correctly",
              "Validated analyser interfaces, verified calculations, no retyping where avoidable",
            ],
            [
              "Quality control",
              "QC reviewed before patient results are released",
              "QC results stored and visible to reviewers, with rule violations flagged",
            ],
            [
              "Reporting",
              "Reports contain the required information",
              "Templates with units, reference intervals, dates and authoriser",
            ],
            [
              "Release",
              "Only authorised staff release results",
              "Role-based release rights and a record of who released and when",
            ],
            [
              "Critical results",
              "Prompt notification and a record of it",
              "Alerts for critical values and a log of who was told, when",
            ],
            [
              "Amended reports",
              "Changes identified, original retained",
              "Versioned reports marked as amended, with reason and history",
            ],
            [
              "Security and continuity",
              "Data protected; service continues during downtime",
              "Access control, audit trail, backups, tested restore, downtime procedure",
            ],
          ]}
        />
      ),
    },
    {
      id: "reports",
      title: "Getting report content and release right",
      body: (
        <>
          <p>
            Reports are what patients and clinicians see, and assessors read
            them closely. The standard lists what a report should contain. In
            software terms, a report template should be able to show:
          </p>
          <Checklist
            items={[
              "The patient’s identification and the location or requester.",
              "The laboratory’s identity, and which examinations were referred to another lab.",
              "Sample type, collection date and time, and receipt time where relevant.",
              "Each result with its units and biological reference interval or decision limits.",
              "Comments on sample quality that may affect results.",
              "The identity of the person who reviewed and authorised release.",
              "The date and time of release, and page numbers shown against the total number of pages.",
            ]}
          />
          <p>
            When a released report is corrected, the system should issue a new
            version clearly marked as amended, keep the original, and record who
            changed what and why. That is an audit trail, even if nobody calls
            it Part 11.
          </p>
        </>
      ),
    },
    {
      id: "validating-the-lis",
      title: "Validating or verifying the LIS",
      body: (
        <>
          <p>
            The standard asks for validation or verification before use, but not
            for a particular method. A proportionate approach for a diagnostic
            lab:
          </p>
          <ol>
            <li>
              Write down what the system is used for and which data it holds.
            </li>
            <li>
              Test each analyser interface with real samples: values, units,
              flags and patient matching.
            </li>
            <li>
              Check every calculated result against an independent calculation.
            </li>
            <li>
              Check report templates for every test against the required
              content.
            </li>
            <li>
              Test access rights, release rights and critical-value alerts.
            </li>
            <li>Restore a backup and run the downtime procedure once.</li>
            <li>
              Record results, sign them off, and repeat the relevant checks
              after changes.
            </li>
          </ol>
          <p>
            Many of the same steps appear in our{" "}
            <PostLink slug="lims-implementation-checklist">
              LIMS implementation checklist
            </PostLink>
            , and the life-cycle thinking behind them in the{" "}
            <PostLink slug="gxp-software-validation-guide">
              GxP validation guide
            </PostLink>
            .
          </p>
        </>
      ),
    },
    {
      id: "iso-15189-vs-part-11",
      title: "ISO 15189 compared with Part 11",
      body: (
        <>
          <p>
            Labs that test only for local patients are normally assessed against
            ISO 15189 and NABL, not 21 CFR Part 11. Labs that also support
            pharma clinical trials or export work may face both. The overlap is
            large: unique logins, audit trails, controlled release and backups
            satisfy much of each. Our{" "}
            <PostLink slug="21-cfr-part-11-compliance-checklist-lims">
              Part 11 checklist
            </PostLink>{" "}
            shows the extra controls Part 11 adds, such as its detailed
            electronic-signature rules.
          </p>
        </>
      ),
    },
    {
      id: "report-delivery",
      title: "Delivering reports to patients and clinicians",
      body: (
        <>
          <p>
            Many labs now send reports by email, SMS link, WhatsApp or a patient
            portal. The same controls apply to these channels as to printed
            reports:
          </p>
          <ul>
            <li>Only authorised, released reports are sent, never drafts.</li>
            <li>The delivered file is the same version that was released.</li>
            <li>Links are secure and time-limited, and access is logged.</li>
            <li>Amended reports are sent as new versions, clearly marked.</li>
            <li>
              Patient contact details and consent are recorded and kept current.
            </li>
          </ul>
          <p>
            Build the delivery channel into the validated system, rather than
            exporting PDFs to a separate tool by hand.
          </p>
        </>
      ),
    },
    {
      id: "common-gaps",
      title: "Common gaps in diagnostic lab software",
      body: (
        <>
          <p>
            These are the issues that tend to surface during internal audits and
            assessments of lab information systems:
          </p>
          <Checklist
            items={[
              "Results retyped from analyser printouts because no interface exists, with no second check.",
              "Shared logins at reception or at instrument PCs, so entries cannot be attributed.",
              "Released reports edited in place, with no amended version and no record of the original.",
              "Critical results phoned through, but no record in the system of who was told and when.",
              "Reference intervals changed without version history, so old reports cannot be explained.",
              "Backups taken but never restored, and no tested downtime procedure.",
              "Home-collection or patient apps holding data outside the controlled system.",
            ]}
          />
          <p>
            Each of these has a software fix, but most also need a procedure:
            who checks manual entries, who reviews amended reports, how critical
            calls are documented. Fixing the software without the SOP rarely
            closes the finding.
          </p>
        </>
      ),
    },
    {
      id: "choosing-software",
      title: "Questions to ask before you choose lab software",
      body: (
        <>
          <ul>
            <li>Which analysers can it interface with today, and how?</li>
            <li>Can reports show every element the standard asks for?</li>
            <li>How are amended reports versioned and marked?</li>
            <li>Who can release results, and is that recorded?</li>
            <li>
              What is the downtime procedure, and how is data reconciled after?
            </li>
            <li>Where is patient data hosted, and who can access it?</li>
          </ul>
          <p>
            We build software for pathology and diagnostic labs, including
            patient report delivery and analyser interfaces. See{" "}
            <Link href="/industries/diagnostic-lab-software">
              diagnostic lab software
            </Link>{" "}
            or our{" "}
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
      q: "Does NABL approve lab software?",
      a: "No. NABL accredits laboratories, not software. The lab must show that its information systems are validated, secure and controlled; good software makes that evidence easier to produce.",
    },
    {
      q: "Which version of ISO 15189 applies?",
      a: "The current edition is ISO 15189:2022. Accreditation bodies, including NABL, set transition arrangements when the standard changes, so check NABL’s current requirements for your lab.",
    },
    {
      q: "Does ISO 15189 require validation of the LIS?",
      a: "Yes. The standard expects information systems, including interfaces and calculations, to be validated or verified before use and after changes, with records kept.",
    },
    {
      q: "Do diagnostic labs need 21 CFR Part 11?",
      a: "Labs serving only local patients are usually assessed against ISO 15189 and NABL rather than Part 11. Labs supporting pharma trials or export work may need both, depending on their clients and records.",
    },
    {
      q: "What should an amended lab report show?",
      a: "It should be clearly identified as a revision, keep the original available, and record who changed it, when and why, so the history of the result can be traced.",
    },
    {
      q: "Does lab software need a downtime plan?",
      a: "Yes. ISO 15189 expects the lab to plan for system failure so the service can continue, and to check data integrity when systems are restored.",
    },
  ],
};
