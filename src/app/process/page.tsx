import type { Metadata } from "next";
import home from "@/components/home/Home.module.css";
import Process from "@/components/home/Process";
import Reveal from "@/components/home/Reveal";
import SectionHeading, { accent } from "@/components/home/SectionHeading";
import PageHero from "@/components/pages/PageHero";
import PageLayout from "@/components/pages/PageLayout";
import styles from "@/components/pages/Pages.module.css";
import { ALWAYS_INCLUDED, PROCESS_QA, WEEK } from "@/components/pages/content";
import { breadcrumbJsonLd } from "@/components/pages/seo";
import { siteConfig } from "@/lib/site-config";

const description =
  "How Bright Infonet builds software: discover, design, build and launch — with two-week sprints, a live demo every Friday and a weekly written update.";

export const metadata: Metadata = {
  title: "Process — How We Build Software, Week by Week",
  description,
  alternates: { canonical: "/process" },
  openGraph: {
    url: `${siteConfig.url}/process`,
    title: `Process | ${siteConfig.name}`,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbJsonLd("Process", "/process")],
};

export default function ProcessPage() {
  return (
    <PageLayout jsonLd={jsonLd}>
      <PageHero
        crumb="Process"
        kicker="Process"
        title={["Sketch to ", { text: "live", className: home.accentItalic }, " in four moves."]}
        lead="A calm, predictable way to build software: small steps, working demos every week, and no surprises at the end."
        index={[
          { href: "#process", n: "01", label: "The four stages" },
          { href: "#week", n: "02", label: "A week with us" },
          { href: "#included", n: "03", label: "Always included" },
          { href: "#questions", n: "04", label: "Common questions" },
        ]}
      />

      <Process bare />

      <section id="week" className={styles.sectionPad} aria-labelledby="week-title">
        <SectionHeading
          kicker="Inside a sprint"
          id="week-title"
          title={["A week ", accent("with us.")]}
          lead="Every week follows the same rhythm, so you always know what’s happening and when you’ll see it."
        />
        <ol className={styles.week} style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {WEEK.map((day, i) => (
            <Reveal
              key={day.d}
              as="li"
              className={`${styles.dayCard} ${day.d === "Fri" ? styles.dayFri : ""}`}
              delay={i * 0.07}
            >
              <span className={`${styles.dayName} ${home.mono}`}>
                {day.d}
                {day.d === "Fri" && <span className={styles.liveDot} aria-hidden="true" />}
              </span>
              <h3 className={`${styles.dayTitle} ${home.serif}`}>{day.t}</h3>
              <p className={styles.dayText}>{day.x}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section id="included" className={styles.sectionPad} aria-labelledby="included-title">
        <SectionHeading
          kicker="Every project"
          id="included-title"
          title={["Always ", accent("included.")]}
          lead="No add-ons, no premium tier — this is simply how we work."
        />
        <div className={styles.included}>
          {ALWAYS_INCLUDED.map((item, i) => (
            <Reveal key={item.t} className={styles.includedItem} delay={(i % 3) * 0.06}>
              <h3 className={styles.includedTitle}>{item.t}</h3>
              <p className={styles.includedText}>{item.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="questions" className={styles.sectionPad} aria-labelledby="questions-title">
        <SectionHeading
          kicker="Before you ask"
          id="questions-title"
          title={["Common ", accent("questions.")]}
        />
        <div className={styles.qa}>
          {PROCESS_QA.map((item, i) => (
            <Reveal key={item.q} as="article" className={styles.qaItem} delay={(i % 2) * 0.08}>
              <h3 className={`${styles.qaQ} ${home.serif}`}>{item.q}</h3>
              <p className={styles.qaA}>{item.a}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
