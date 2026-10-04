import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import PostLink from "@/components/insights/PostLink";
import type { Post } from "./types";

export const pharmacovigilanceE2bR3Explained: Post = {
  slug: "pharmacovigilance-e2b-r3-explained",
  title:
    "ICH E2B(R3) explained: the ICSR format for pharmacovigilance reporting",
  metaTitle: "ICH E2B(R3) Explained: ICSR Format for PV Reporting",
  description:
    "ICH E2B(R3) explained for pharmacovigilance teams: ICSR message structure, what changed from R2, code lists, acknowledgements and what PV software must support.",
  excerpt:
    "How an E2B(R3) individual case safety report is structured, what changed from R2, which code lists it uses, how acknowledgements work and what your PV system needs.",
  category: "Regulated software",
  pillar: "regulated",
  cta: {
    href: "/services/pharmacovigilance-software",
    label: "Pharmacovigilance software",
  },
  cover: "audit",
  published: "2026-11-03",
  readingMinutes: 8,
  keywords: [
    "E2B(R3)",
    "ICH E2B R3 explained",
    "ICSR E2B R3 format",
    "E2B R2 vs R3",
    "EudraVigilance E2B R3",
    "pharmacovigilance ICSR submission",
    "E2B XML",
  ],
  takeaways: [
    "E2B(R3) is the ICH standard for exchanging individual case safety reports electronically, built on the ISO/HL7 ICSR standard and sent as XML.",
    "EudraVigilance has required ISO ICSR/E2B(R3) reporting since 30 June 2022; other authorities publish their own regional implementation guides.",
    "R3 adds repeatable elements, standard code lists, null flavours and a clearer structure, and is not directly compatible with R2.",
    "PV software has to do more than export XML: validate against business rules, handle acknowledgements and keep a full case history.",
  ],
  intro: (
    <>
      <p>
        ICH E2B(R3) is the international standard for sending individual case
        safety reports (ICSRs) electronically between companies and regulators.
        It defines the data elements of a case and the XML message that carries
        them, based on the ISO/HL7 ICSR standard. EudraVigilance has required
        it since 30 June 2022.
      </p>
      <p>
        For a pharmacovigilance team, E2B(R3) shapes how cases are captured,
        coded, versioned and submitted. This guide explains the structure of an
        R3 message, what changed from R2, how acknowledgements work and what
        your safety system needs to support.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-e2b-is",
      title: "What E2B(R3) is",
      body: (
        <>
          <p>
            The ICH guideline E2B(R3) covers the electronic transmission of
            ICSRs: the data elements that describe a suspected adverse reaction
            case, and the message specification for sending them. It is
            implemented through the ISO ICSR standard developed with HL7, and
            replaced the older E2B(R2) format.
          </p>
          <p>
            The guideline is the common core. Each regulator publishes a{" "}
            <strong>regional implementation guide</strong> with its own business
            rules, extra fields, gateways and acknowledgement handling. The EU’s
            guide for EudraVigilance is the most widely used example. Before
            submitting anywhere, read the current guide for that destination.
          </p>
          <Callout title="Where E2B(R3) is required">
            <p>
              Since 30 June 2022, reports to EudraVigilance must use the ISO
              ICSR/E2B(R3) format with ISO-based terminology for pharmaceutical
              form and route of administration. Requirements elsewhere vary by
              authority and change over time, so confirm them with each
              regulator’s current guidance.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "message-structure",
      title: "How an E2B(R3) message is structured",
      body: (
        <>
          <p>
            An R3 message wraps one or more ICSRs in batch and message headers.
            Each ICSR is organised into lettered sections:
          </p>
          <DataTable
            caption="Main sections of an E2B(R3) ICSR"
            head={["Section", "Content", "Examples of data"]}
            rows={[
              [
                "N",
                "Batch and message headers",
                "Batch number, sender and receiver identifiers, transmission date",
              ],
              [
                "C",
                "Case administration",
                "Sender’s safety report ID, worldwide unique case ID, report type, dates, primary source, sender, literature, study",
              ],
              [
                "D",
                "Patient characteristics",
                "Age, sex, weight, medical history, past drugs, death details, parent information",
              ],
              [
                "E",
                "Reactions and events",
                "Reaction as reported and MedDRA-coded, seriousness criteria, outcome, dates",
              ],
              [
                "F",
                "Tests and procedures",
                "Relevant laboratory tests, results, units and normal ranges",
              ],
              [
                "G",
                "Drug information",
                "Suspect, concomitant and interacting drugs, dose, route, indication, action taken, drug–reaction assessment",
              ],
              [
                "H",
                "Narrative and comments",
                "Case narrative, reporter comments, sender diagnosis and comments",
              ],
            ]}
          />
          <p>
            Two identifiers matter in every case: the sender’s safety report
            unique identifier, and the worldwide unique case identification
            number that stays the same across senders and follow-ups. Getting
            them right is the basis of duplicate detection and case versioning.
          </p>
        </>
      ),
    },
    {
      id: "r2-vs-r3",
      title: "What changed from E2B(R2)",
      body: (
        <>
          <DataTable
            caption="E2B(R2) compared with E2B(R3)"
            head={["Topic", "E2B(R2)", "E2B(R3)"]}
            rows={[
              [
                "Standard",
                "ICH-specific message definition",
                "ISO/HL7 ICSR standard with ICH implementation",
              ],
              [
                "Repeating data",
                "Limited",
                "More elements can repeat, such as reporters, identifiers and test results",
              ],
              [
                "Code lists",
                "Mostly free text or local codes",
                "Standard terminologies, such as UCUM units and ISO-based dose forms and routes",
              ],
              [
                "Missing data",
                "Blank fields",
                "Null flavours that say why a value is missing, such as unknown or masked",
              ],
              [
                "Product identifiers",
                "Names and local codes",
                "Fields for ISO IDMP identifiers as they become available",
              ],
              [
                "Compatibility",
                "—",
                "Not directly compatible with R2; conversion follows ICH mapping guidance",
              ],
            ]}
          />
          <p>
            Null flavours deserve a note. In R3 an empty field is not the same
            as “unknown” or “asked but not known”, and business rules often
            check which null flavour is allowed. Safety systems need to capture
            that distinction at data entry, not invent it at export.
          </p>
        </>
      ),
    },
    {
      id: "coding",
      title: "Coding and terminologies",
      body: (
        <>
          <p>
            Reactions, indications and medical history are coded with MedDRA,
            using the version the receiver accepts. Many companies also code
            drugs with a drug dictionary such as WHODrug for consistency, while
            the ICSR carries product names and identifiers. Units use UCUM, and
            the EU expects ISO-based terms for dose form and route.
          </p>
          <ul>
            <li>Keep the reported verbatim term alongside the coded term.</li>
            <li>Record which MedDRA version each case was coded with.</li>
            <li>Plan for MedDRA version upgrades and recoding rules.</li>
            <li>
              Remember that MedDRA and drug dictionaries need their own licences,
              held by the marketing authorisation holder or its provider.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "acknowledgements",
      title: "Submission, validation and acknowledgements",
      body: (
        <>
          <p>
            Sending a case is a round trip. The receiver checks the message
            against the schema and its business rules, then returns an
            acknowledgement message saying whether each ICSR was accepted or
            rejected, with error details. Your system should:
          </p>
          <Checklist
            items={[
              "Validate the XML against the schema and regional business rules before sending.",
              "Send through the regulator’s gateway or approved tool and log the transmission.",
              "Receive and parse acknowledgements automatically and link them to the case version.",
              "Flag rejections immediately so the case can be corrected and resent within the deadline.",
              "Track reporting timelines from the day the company first became aware of the case.",
            ]}
          />
          <p>
            Every one of these steps changes GxP records, so the case history and
            audit trail must show who did what and when; our deep dive on{" "}
            <PostLink slug="21-cfr-part-11-audit-trail-requirements">
              audit trail requirements
            </PostLink>{" "}
            applies here too.
          </p>
        </>
      ),
    },
    {
      id: "software-requirements",
      title: "What a PV system needs to support E2B(R3)",
      body: (
        <>
          <ul>
            <li>
              <strong>Case intake</strong> from email, forms, literature and
              partners, with duplicate checks on key identifiers.
            </li>
            <li>
              <strong>A data model that mirrors R3</strong>, including repeating
              elements and null flavours, so export is faithful.
            </li>
            <li>
              <strong>MedDRA coding</strong> with version control and verbatim
              terms kept.
            </li>
            <li>
              <strong>Follow-up versioning</strong> that keeps every version of
              the case and what changed.
            </li>
            <li>
              <strong>E2B(R3) import and export</strong>, schema and
              business-rule validation, gateway connection and acknowledgement
              handling.
            </li>
            <li>
              <strong>Workflow and deadlines</strong> for triage, medical review
              and submission, with alerts before due dates.
            </li>
            <li>
              <strong>Audit trail, access control and validation</strong> like
              any other GxP system.
            </li>
          </ul>
          <p>
            Whether to buy a safety database or build one around your process is
            covered in{" "}
            <PostLink slug="pharmacovigilance-software-build-vs-buy">
              pharmacovigilance software: build vs buy
            </PostLink>
            . Validation of the system follows the same life cycle as any other,
            described in our{" "}
            <PostLink slug="gxp-software-validation-guide">
              GxP validation guide
            </PostLink>
            .
          </p>
        </>
      ),
    },
    {
      id: "how-we-help",
      title: "How we approach E2B(R3) projects",
      body: (
        <p>
          We build pharmacovigilance software covering case intake, MedDRA
          coding, E2B(R3) submissions and signal management, with the validation
          deliverables written alongside the code and sign-off by your QA. Our
          PVgenix platform is described on our{" "}
          <Link href="/work">work page</Link>, and the service itself on our{" "}
          <Link href="/services/pharmacovigilance-software">
            pharmacovigilance software
          </Link>{" "}
          page.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "What is E2B(R3) in pharmacovigilance?",
      a: "E2B(R3) is the ICH standard for the electronic transmission of individual case safety reports. It defines the data elements of a case and the XML message format, based on the ISO/HL7 ICSR standard.",
    },
    {
      q: "Is E2B(R3) mandatory?",
      a: "For EudraVigilance, yes: ISO ICSR/E2B(R3) has been mandatory since 30 June 2022. Other regulators set their own requirements and timelines, so check each authority’s current implementation guide.",
    },
    {
      q: "What is the difference between E2B(R2) and E2B(R3)?",
      a: "R3 is based on the ISO/HL7 ICSR standard, allows more repeating elements, uses standard code lists and null flavours, and supports product identifiers. It is not directly compatible with R2, and conversion follows ICH mapping guidance.",
    },
    {
      q: "What is an ICSR acknowledgement?",
      a: "It is a message returned by the receiver after checking a submission, stating whether each ICSR was accepted or rejected and listing any errors. Rejected cases must be corrected and resent.",
    },
    {
      q: "Does E2B(R3) require MedDRA?",
      a: "Reactions, indications and medical history in an ICSR are coded with MedDRA. The marketing authorisation holder or its service provider needs a MedDRA licence.",
    },
    {
      q: "What are null flavours in E2B(R3)?",
      a: "Null flavours are codes that explain why a value is missing, for example unknown, asked but unknown, or masked for privacy. Business rules often define which null flavours are allowed for each field.",
    },
  ],
};
