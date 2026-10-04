import type { Metadata } from "next";
import Link from "next/link";
import home from "@/components/home/Home.module.css";
import Reveal from "@/components/home/Reveal";
import SectionHeading, { accent } from "@/components/home/SectionHeading";
import { DataTable } from "@/components/insights/Prose";
import PostLink from "@/components/insights/PostLink";
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
import CostCalculator from "@/components/tools/CostCalculator";
import { COST_PRODUCTS } from "@/content/cost-calculator";
import { siteConfig } from "@/lib/site-config";

// Re-rendered hourly so links to scheduled cost guides appear on their publish day (PostLink).
export const revalidate = 3600;

const PATH = "/tools/app-development-cost-calculator";
const NAME = "App development cost calculator";
const description =
  "Free app development cost calculator for India: pick a mobile app, website or MVP, answer a few questions and get an indicative range plus typical timeline.";

export const metadata: Metadata = pageMetadata({
  path: PATH,
  title: "App Development Cost Calculator (India)",
  description,
  keywords: [
    "app development cost calculator",
    "app cost calculator India",
    "website cost calculator India",
    "MVP cost calculator",
    "mobile app development cost India",
    "Flutter app cost estimate",
  ],
});

const FAQS = [
  {
    q: "How accurate is the app development cost calculator?",
    a: "It gives an indicative range, not a quote. Each answer points at one of the published ranges in our cost guides. Your real figure depends on scope, integrations, design depth and who builds it, so get a written quote.",
  },
  {
    q: "How much does it cost to build an app in India?",
    a: "Indicatively, a simple app costs around ₹3–8 lakh, a medium-complexity app ₹8–25 lakh and a complex platform ₹25 lakh or more, assuming one cross-platform codebase for iOS and Android.",
  },
  {
    q: "Why does one answer move the estimate into a higher range?",
    a: "The calculator shows the largest range any of your answers points at. A single need such as offline sync, ERP integration or compliance work usually decides the size of the project on its own.",
  },
  {
    q: "Does the estimate include hosting and upkeep?",
    a: "No. The range covers the build. Apps typically need around 15–25% of the build cost per year for upkeep, and websites have yearly domain, hosting and maintenance costs, shown with each result.",
  },
  {
    q: "Is a Flutter app cheaper than two native apps?",
    a: "Usually, yes, for apps that need both iOS and Android, because the UI and logic are written once. Design, backend, device testing and store work cost the same either way.",
  },
  {
    q: "How do I get a written quote?",
    a: "Send us your user roles, key flows, integrations, platforms, any compliance needs, your target launch date and a rough budget. We reply with a written, phased estimate.",
  },
];

const url = `${siteConfig.url}${PATH}`;
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      name: NAME,
      description,
      url,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    faqJsonLd(FAQS, url),
    breadcrumbJsonLd(NAME, PATH),
  ],
};

export default function AppDevelopmentCostCalculatorPage() {
  return (
    <PageLayout jsonLd={jsonLd}>
      <PageHero
        crumb="App cost calculator"
        kicker="Free tool · Cost"
        title={[
          "App development cost ",
          { text: "calculator.", className: home.accentItalic },
        ]}
        lead="An indicative cost range for your mobile app, website or MVP in India, in under a minute. Answer a few questions; the range updates as you go."
      />

      <section className={styles.sectionPad} aria-label="Overview">
        <div className={landing.answer}>
          <Reveal as="p" className={`${landing.answerLead} ${home.serif}`}>
            This free calculator gives an indicative cost range for building a
            mobile app, website or MVP in India in 2026. Choose what you are
            building and answer a few questions; it returns the matching range
            from our published cost guides, with a typical timeline. For a real
            figure, get a written quote.
          </Reveal>
          <Reveal className={landing.answerBody} delay={0.1}>
            <p>
              The ranges are the same ones we use in our guides to{" "}
              <Link href="/insights/app-development-cost-india">
                app development cost in India
              </Link>
              ,{" "}
              <Link href="/insights/website-development-cost-small-business-india">
                website cost for small businesses
              </Link>{" "}
              and{" "}
              <Link href="/insights/mvp-development-cost-timeline">
                MVP cost and timeline
              </Link>
              . There are no hidden multipliers: each answer points at one of
              those ranges, and the calculator shows the largest one.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        id="calculator"
        className={styles.sectionPad}
        aria-labelledby="calculator-title"
      >
        <SectionHeading
          kicker="Calculator"
          id="calculator-title"
          title={["Estimate your ", accent("project.")]}
          lead="Indicative ranges for India, 2026. Not a quote."
        />
        <CostCalculator />
      </section>

      <section className={styles.sectionPad} aria-labelledby="ranges-title">
        <SectionHeading
          kicker="All ranges"
          id="ranges-title"
          title={["Every range ", accent("at a glance.")]}
          lead="The full set the calculator chooses from, as published in our cost guides."
        />
        {COST_PRODUCTS.map((p) => (
          <DataTable
            key={p.id}
            caption={`${p.label}: indicative cost in India, 2026 (varies by scope; get a written quote)`}
            head={["Type", "Typical scope", "Indicative cost", "Timeline"]}
            rows={p.bands.map((b) => [
              b.label,
              b.scope,
              b.usd ? `${b.range} (${b.usd})` : b.range,
              b.timeline ?? "Varies by scope",
            ])}
          />
        ))}
      </section>

      <section className={styles.sectionPad} aria-labelledby="next-title">
        <SectionHeading
          kicker="Next steps"
          id="next-title"
          title={["From estimate to ", accent("written quote.")]}
        />
        <Reveal className={styles.panel}>
          <ul className={styles.checks}>
            <li>
              List every user role, the three to five key flows, integrations,
              platforms and any compliance needs.
            </li>
            <li>
              Decide on Flutter or native with our{" "}
              <Link href="/insights/flutter-vs-native-app-development">
                Flutter vs React Native vs native guide
              </Link>
              .
            </li>
            <li>
              Plan a focused first release; our{" "}
              <PostLink slug="mvp-in-8-weeks">8-week MVP plan</PostLink> shows
              what fits in two months.
            </li>
            <li>
              Building in the Tricity? See{" "}
              <PostLink slug="app-development-cost-chandigarh">
                app development cost in Chandigarh
              </PostLink>{" "}
              for local factors.
            </li>
            <li>
              Ask each team for a written, phased quote with what is included
              and excluded.
            </li>
          </ul>
        </Reveal>
        <p className={styles.note}>
          Ready for a real number? See our{" "}
          <Link href="/services/mobile-apps">mobile app development</Link> and{" "}
          <Link href="/services/web-platforms">web platform development</Link>{" "}
          services, or <Link href="/#contact">tell us what you’re building</Link>{" "}
          for a written estimate.
        </p>
      </section>

      <FaqSection faqs={FAQS} />
    </PageLayout>
  );
}
