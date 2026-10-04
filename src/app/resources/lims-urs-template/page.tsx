import type { Metadata } from "next";
import Link from "next/link";
import home from "@/components/home/Home.module.css";
import Reveal from "@/components/home/Reveal";
import SectionHeading, { accent } from "@/components/home/SectionHeading";
import PostLink from "@/components/insights/PostLink";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import FaqSection from "@/components/pages/FaqSection";
import PageHero from "@/components/pages/PageHero";
import PageLayout from "@/components/pages/PageLayout";
import styles from "@/components/pages/Pages.module.css";
import landing from "@/components/pages/Landing.module.css";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  pageMetadata,
} from "@/components/pages/seo";
import { siteConfig } from "@/lib/site-config";

// Re-rendered hourly so the link to the URS article appears on its publish day (PostLink).
export const revalidate = 3600;

const PATH = "/resources/lims-urs-template";
const FILE = "/downloads/lims-urs-template.csv";
const description =
  "Free LIMS URS template as a CSV spreadsheet: generic user requirements with ID, type, priority, Part 11 and Annex 11 references and a verification column.";

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: "Free LIMS URS Template (CSV Download)",
  description,
  keywords: [
    "LIMS URS template",
    "URS template download",
    "user requirements specification template",
    "LIMS requirements template",
    "GxP URS template",
  ],
});

const INSIDE = [
  "Example requirements for scope, sample management, specifications, testing and results, review and approval, interfaces, non-functional needs, data migration, archiving and documentation.",
  "Data-integrity requirements for unique logins, role-based access, audit trails, electronic signatures, server time stamps and readable exports.",
  "Eight columns: ID, Section, Requirement, Type (GxP or Business), Priority, Regulatory reference, Verification method and Notes.",
  "Regulatory references to 21 CFR Part 11 clauses and EU GMP Annex 11 sections where a requirement maps to one.",
  "Plain CSV that opens in Excel, Google Sheets or LibreOffice, ready to import into a requirements tool.",
];

const STEPS = [
  "Download the CSV and open it in your spreadsheet tool.",
  "Delete the example rows that do not apply and add your own process, sample types, methods and instruments.",
  "Mark each row GxP or Business and set its priority with QA.",
  "Review with analysts, reviewers, IT and QA, then route the URS for approval.",
  "Use the IDs as the first column of your risk assessment and traceability matrix.",
];

const FAQS = [
  {
    q: "What is a LIMS URS template?",
    a: "It is a starting list of user requirements for a laboratory information management system, laid out so each requirement has an ID, a type, a priority, a regulatory reference and a verification method.",
  },
  {
    q: "Is the template free?",
    a: "Yes. The CSV file is free to download and adapt for your own laboratory.",
  },
  {
    q: "Can I use the template as my approved URS?",
    a: "Not as it is. The rows are generic examples. Adapt them to your process, remove what does not apply, and have your QA review and approve the final URS.",
  },
  {
    q: "Does the template make a LIMS Part 11 compliant?",
    a: "No. It helps you ask for the technical controls Part 11 and Annex 11 describe. Compliance also depends on your procedures, training and validation.",
  },
  {
    q: "Which tools can open the file?",
    a: "Any spreadsheet tool that opens CSV files, such as Microsoft Excel, Google Sheets or LibreOffice Calc, and most requirements-management tools can import it.",
  },
];

const url = `${siteConfig.url}${PATH}`;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "DigitalDocument",
      "@id": `${url}#template`,
      name: "LIMS URS template",
      description,
      url: `${siteConfig.url}${FILE}`,
      encodingFormat: "text/csv",
      inLanguage: "en-IN",
      isAccessibleForFree: true,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      mainEntityOfPage: url,
    },
    faqJsonLd(FAQS, url),
    breadcrumbJsonLd("LIMS URS template", PATH),
  ],
};

export default function LimsUrsTemplatePage() {
  return (
    <PageLayout jsonLd={jsonLd}>
      <PageHero
        crumb="LIMS URS template"
        kicker="Free resource · LIMS"
        title={[
          "A LIMS URS template ",
          { text: "you can start from today.", className: home.accentItalic },
        ]}
        lead="A free, generic user requirements specification for laboratory software, as a spreadsheet you can adapt, review with QA and trace through validation."
      />

      <section className={styles.sectionPad} aria-label="Overview">
        <div className={landing.answer}>
          <Reveal as="p" className={`${landing.answerLead} ${home.serif}`}>
            This free LIMS URS template is a CSV spreadsheet of example user
            requirements for laboratory software, each with an ID, a GxP or
            business type, a priority, a Part 11 or Annex 11 reference where one
            applies, and a verification method, so you can adapt it and trace it
            through validation.
          </Reveal>
          <Reveal className={landing.answerBody} delay={0.1}>
            <p>
              A URS is the baseline every specification and test traces back to,
              and a weak one is a common reason LIMS projects slip or struggle
              in validation. The template gives you a structured starting point,
              written from a lab process rather than a product brochure.
            </p>
            <p>
              The rows are generic examples, not requirements for your lab. Your
              process, your risk assessment and your QA decide the final
              content. For how to write and approve a URS, read our guide to{" "}
              <PostLink slug="lims-urs-template">writing a LIMS URS</PostLink>{" "}
              and the{" "}
              <Link href="/insights/21-cfr-part-11-compliance-checklist-lims">
                Part 11 checklist for LIMS
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.sectionPad} aria-labelledby="inside-title">
        <SectionHeading
          kicker="What’s inside"
          id="inside-title"
          title={["What the template ", accent("covers.")]}
        />
        <Reveal className={styles.panel}>
          <ul className={styles.checks}>
            {INSIDE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section
        id="download"
        className={styles.sectionPad}
        aria-labelledby="download-title"
      >
        <SectionHeading
          kicker="Download"
          id="download-title"
          title={["Get the ", accent("template.")]}
          lead="CSV file, free to use and adapt for your own laboratory."
        />
        <Reveal className={styles.panel}>
          <LeadCaptureForm
            downloadHref={FILE}
            downloadLabel="Download the LIMS URS template (CSV)"
            form="urs_template"
          />
        </Reveal>
      </section>

      <section className={styles.sectionPad} aria-labelledby="use-title">
        <SectionHeading
          kicker="How to use it"
          id="use-title"
          title={["From template to ", accent("approved URS.")]}
        />
        <Reveal className={styles.panel}>
          <ol className={styles.dots}>
            {STEPS.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </Reveal>
        <p className={styles.note}>
          Want the LIMS built around your approved URS? See our{" "}
          <Link href="/services/lims-software-development">
            LIMS development service
          </Link>
          . Validating a system you already have? See{" "}
          <Link href="/services/computer-system-validation">
            computer system validation
          </Link>
          . Validation sign-off always stays with your QA.
        </p>
      </section>

      <FaqSection faqs={FAQS} />
    </PageLayout>
  );
}
