import Link from "next/link";
import {
  Callout,
  Checklist,
  DataTable,
  Source,
} from "@/components/insights/Prose";
import PostLink from "@/components/insights/PostLink";
import type { Post } from "./types";

export const gamp5Category4VsCategory5: Post = {
  slug: "gamp-5-category-4-vs-category-5",
  title:
    "GAMP 5 Category 4 vs Category 5: configured vs custom software, explained",
  metaTitle: "GAMP 5 Category 4 vs 5: Configured vs Custom",
  description:
    "GAMP 5 Category 4 vs Category 5: how configured and custom software differ, where configuration ends, what each needs documented and tested, and mixed systems.",
  excerpt:
    "Configured product or custom code? How the GAMP 5 category changes specifications, testing and supplier reliance, and how to handle systems that are both.",
  category: "Regulated software",
  pillar: "regulated",
  cta: {
    href: "/services/computer-system-validation",
    label: "Computer system validation service",
  },
  cover: "vmodel",
  published: "2026-07-24",
  updated: "2026-10-04",
  readingMinutes: 7,
  keywords: [
    "GAMP 5 category 4 vs 5",
    "GAMP 5 software categories",
    "configured software validation",
    "custom software validation GAMP",
    "category 5 software examples",
    "category 4 LIMS validation",
    "configuration vs customisation",
  ],
  takeaways: [
    "Category 4 is a standard product configured for your process; Category 5 is software written specifically for you.",
    "The category decides how much you specify and test yourself: Category 5 adds functional and design specifications, code review and developer testing.",
    "Scripts, custom reports and bespoke interfaces inside a configured product are usually treated as Category 5 for those parts.",
    "Most real systems mix categories. Assess each component, then let risk, not the label alone, set the depth of testing.",
  ],
  intro: (
    <>
      <p>
        In GAMP 5, Category 4 covers configured products: standard software such
        as a commercial LIMS or QMS that you set up for your process without
        changing its code. Category 5 covers custom applications written for
        you. Category 5 needs more of the life cycle documented and tested by
        you, because no other customers have used that code.
      </p>
      <p>
        The difference sounds tidy on paper. In real projects the line between
        configuration and customisation is where most arguments start. This
        article explains both categories, where the line sits, and what each one
        means for your validation work.
      </p>
    </>
  ),
  sections: [
    {
      id: "the-categories",
      title: "The GAMP 5 categories in one minute",
      body: (
        <>
          <p>
            GAMP 5 groups software by how much of it is unique to you. Category
            1 is infrastructure such as operating systems and databases.
            Category 3 is software used as supplied, with only settings changed.
            Category 4 is a configured product. Category 5 is custom code. There
            is no Category 2; it covered firmware in earlier GAMP versions and
            was dropped. Our{" "}
            <PostLink slug="gamp-5-software-validation-guide">
              GAMP 5 validation guide
            </PostLink>{" "}
            covers all of them and the V-model behind them.
          </p>
          <p>
            The <Source href="https://ispe.org/publications/guidance-documents/gamp-5-guide-2nd-edition">second edition of GAMP 5</Source>, published in
            2022, keeps the
            categories but stresses that they are a starting point for thinking
            about risk, not a rule that decides the testing on its own.
          </p>
          <p>
            The second edition also puts more weight on critical thinking,
            involving suppliers early, iterative and agile development, and
            using tools and automated testing as evidence. For the Category 4 vs
            5 question that matters: a well-run custom build can produce its
            evidence continuously, and a configured product still needs people
            who understand the process to decide what to test.
          </p>
        </>
      ),
    },
    {
      id: "side-by-side",
      title: "Category 4 vs Category 5, side by side",
      body: (
        <>
          <DataTable
            caption="GAMP 5 Category 4 compared with Category 5"
            head={["Aspect", "Category 4: configured", "Category 5: custom"]}
            rows={[
              [
                "What it is",
                "A standard product set up for your process with the supplier’s tools",
                "Software written specifically for your organisation",
              ],
              [
                "Typical examples",
                "Commercial LIMS, QMS, EDMS or ERP modules after configuration",
                "Bespoke LIMS, custom portals, instrument interfaces, in-house tools",
              ],
              [
                "Who has used the code",
                "Many customers, across many releases",
                "Only you",
              ],
              [
                "Specifications you own",
                "URS and configuration specification",
                "URS, functional specification and design specification",
              ],
              [
                "Developer evidence",
                "Usually leveraged from the supplier after assessment",
                "Code review, unit and integration testing, build records",
              ],
              [
                "Your testing focus",
                "The configuration and your workflows",
                "The full function set, weighted by risk",
              ],
              [
                "Change impact",
                "Vendor upgrades need impact assessment and regression testing",
                "Every code change goes through your change control",
              ],
            ]}
          />
          <p>
            Neither category is “better”. A configured product reduces how much
            you specify and test; custom software fits the process exactly. The
            decision belongs to the business case, which our comparison of{" "}
            <PostLink slug="custom-lims-vs-off-the-shelf-lims">
              custom vs off-the-shelf LIMS
            </PostLink>{" "}
            looks at for labs.
          </p>
        </>
      ),
    },
    {
      id: "where-the-line-is",
      title: "Where configuration ends and customisation begins",
      body: (
        <>
          <p>
            The useful question is not “did we write code?” but “is this
            behaviour unique to us, and has anyone else’s use tested it?”
          </p>
          <h3>Usually Category 4 (configuration)</h3>
          <ul>
            <li>Choosing options, picklists and units in admin screens.</li>
            <li>
              Defining roles, permissions and approval steps with built-in
              tools.
            </li>
            <li>
              Entering specifications, test methods and limits as master data.
            </li>
            <li>Using standard report templates with your logo and fields.</li>
          </ul>
          <h3>Usually Category 5 (custom), even inside a product</h3>
          <ul>
            <li>
              Scripts or macros written in the product’s scripting language.
            </li>
            <li>
              Custom calculations that are not standard product functions.
            </li>
            <li>Bespoke reports built with a query or report designer.</li>
            <li>
              Interfaces to instruments, ERP or other systems built for you.
            </li>
          </ul>
          <Callout title="Configuration still needs testing">
            <p>
              Calling something configuration does not mean it is low risk. A
              mistyped specification limit or a missing approval step can do as
              much harm as a coding bug. Category 4 work moves the testing focus
              to your configuration; it does not remove it.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "mixed-systems",
      title: "Mixed systems: assess each component",
      body: (
        <>
          <p>
            Almost every lab or quality system is a mix. A typical LIMS project
            might look like this:
          </p>
          <ul>
            <li>Database and operating system: Category 1.</li>
            <li>The LIMS product configured for your lab: Category 4.</li>
            <li>A custom stability-study module: Category 5.</li>
            <li>An interface to a chromatography data system: Category 5.</li>
            <li>A barcode printer driver used as supplied: Category 3.</li>
          </ul>
          <p>
            Assess each component, record its category in the validation plan or
            risk assessment, and plan the work to match. The custom parts get
            functional and design specifications, code review and developer
            testing; the configured core gets a configuration specification and
            testing of your workflows. One traceability matrix then ties it
            together. Our{" "}
            <PostLink slug="gxp-software-validation-guide">
              GxP software validation guide
            </PostLink>{" "}
            walks through the full life cycle, from the validation plan to the
            summary report.
          </p>
        </>
      ),
    },
    {
      id: "documents-by-category",
      title: "What each category needs documented",
      body: (
        <>
          <p>
            The documents overlap more than people expect. Both categories need
            a plan, requirements, risk assessment, testing and a report; the
            difference is the design layer and the developer evidence.
          </p>
          <Checklist
            items={[
              "Both: validation plan, URS, supplier assessment, risk assessment, traceability matrix, IQ/OQ/PQ or equivalent testing, summary report.",
              "Category 4 adds: a configuration specification that records every setting that matters, so it can be tested and kept under change control.",
              "Category 5 adds: functional specification, design specification, coding standards, code review records, unit and integration test evidence.",
              "Category 5 also needs: source code under version control, controlled builds and a documented development life cycle.",
            ]}
          />
          <p>
            Our explainer on{" "}
            <PostLink slug="what-is-a-validation-package">
              what goes into a validation package
            </PostLink>{" "}
            lists each document and who usually writes and approves it.
          </p>
        </>
      ),
    },
    {
      id: "supplier-leverage",
      title: "Leveraging the supplier",
      body: (
        <>
          <p>
            GAMP 5 encourages you to rely on good supplier work rather than
            repeat it. For a Category 4 product that can be most of the
            functional testing; for Category 5, it is the developer’s own
            testing and quality records. Either way, reliance needs an
            assessment first. Look for:
          </p>
          <ul>
            <li>A documented quality system and development life cycle.</li>
            <li>Requirements and tests that trace to each other.</li>
            <li>Release notes and known-issue lists for each version.</li>
            <li>Change control and defect management you can inspect.</li>
            <li>Willingness to support audits and share evidence.</li>
          </ul>
          <p>
            When we build custom systems, we write the specifications, test
            evidence and traceability with the code so your QA can assess and
            leverage it. For systems from other suppliers, our{" "}
            <Link href="/services/computer-system-validation">
              computer system validation service
            </Link>{" "}
            prepares the validation deliverables; sign-off stays with your QA.
          </p>
        </>
      ),
    },
    {
      id: "common-mistakes",
      title: "Common mistakes when categorising software",
      body: (
        <>
          <Checklist
            items={[
              <>
                <strong>Calling everything Category 4</strong> to reduce the
                work, while scripts and custom reports go untested.
              </>,
              <>
                <strong>Treating the category as the risk.</strong> A configured
                function that calculates a release result is high risk; a custom
                dashboard may not be.
              </>,
              <>
                <strong>Not recording the rationale.</strong> An auditor will
                ask why a component was placed in a category; the answer should
                be written down.
              </>,
              <>
                <strong>Forgetting infrastructure.</strong> Category 1 software
                still needs qualified, controlled environments and recorded
                versions.
              </>,
              <>
                <strong>Assuming SaaS means less work.</strong> Cloud products
                are usually Category 4, but vendor-controlled releases need a
                plan for impact assessment and regression testing.
              </>,
              <>
                <strong>Re-categorising nothing after changes.</strong> When a
                configured product gains custom scripts over time, the
                validation approach for those parts has to change too.
              </>,
            ]}
          />
        </>
      ),
    },
    {
      id: "choosing",
      title: "Choosing between a configured product and custom software",
      body: (
        <>
          <p>A few honest questions usually settle it:</p>
          <ol>
            <li>
              Does a product cover most of your process with configuration
              alone, or would it need many scripts and workarounds?
            </li>
            <li>
              How unusual are your methods, calculations, approval chains or
              integrations?
            </li>
            <li>
              Who will maintain it, and how often will the vendor’s upgrade
              cycle force revalidation?
            </li>
            <li>
              Do you need to own the code and the roadmap, or is a supported
              product more valuable?
            </li>
          </ol>
          <p>
            A heavily scripted Category 4 product can end up with more custom
            code to validate than a well-scoped Category 5 build. Count the
            custom parts honestly before you decide.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "What is the difference between GAMP 5 Category 4 and Category 5?",
      a: "Category 4 is a standard product configured for your process using the supplier’s tools. Category 5 is custom software written for you. Category 5 needs functional and design specifications, code review and developer testing in addition to the work both categories share.",
    },
    {
      q: "Is a configured LIMS Category 4?",
      a: "Usually, yes. Scripts, custom calculations, bespoke reports or interfaces built inside or around it are typically treated as Category 5 for those components.",
    },
    {
      q: "Why is there no GAMP 5 Category 2?",
      a: "Category 2 covered firmware in earlier GAMP versions. GAMP 5 removed it, and firmware is now assessed under the other categories depending on what it does.",
    },
    {
      q: "Does Category 5 always mean more testing?",
      a: "It usually means more of the life cycle is documented and tested by you, because the code has no wider user base. The depth of testing for each function should still follow the risk to patients, product and data.",
    },
    {
      q: "Can one system have several GAMP categories?",
      a: "Yes. Most systems mix infrastructure, configured and custom components. Assess and record each component’s category and plan the validation work for each part.",
    },
    {
      q: "Can we rely on the supplier’s testing?",
      a: "GAMP 5 encourages it once the supplier has been assessed and found trustworthy. The assessment, and the decision to rely on the evidence, should be documented by the regulated company.",
    },
  ],
};
