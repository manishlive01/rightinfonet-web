import type { Metadata } from "next";
import Link from "next/link";
import home from "@/components/home/Home.module.css";
import Industries from "@/components/home/Industries";
import Reveal from "@/components/home/Reveal";
import SectionHeading, { accent } from "@/components/home/SectionHeading";
import { INDUSTRIES } from "@/components/home/data";
import PageHero from "@/components/pages/PageHero";
import PageLayout from "@/components/pages/PageLayout";
import styles from "@/components/pages/Pages.module.css";
import { INDUSTRY_DETAILS, STANDARDS } from "@/components/pages/content";
import { breadcrumbJsonLd, pageMetadata } from "@/components/pages/seo";

const description =
  "Software for pharma, diagnostic and QC labs, healthcare, SaaS and retail — built for audits, real-world operations and data protection from day one.";

export const metadata: Metadata = pageMetadata({
  path: "/industries",
  title: "Industries — Pharma, Labs, Healthcare, SaaS & Retail",
  description: description,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbJsonLd("Industries", "/industries")],
};

export default function IndustriesPage() {
  return (
    <PageLayout jsonLd={jsonLd}>
      <PageHero
        crumb="Industries"
        kicker="Industries"
        title={["Built for teams where ", { text: "errors cost.", className: home.accentItalic }]}
        lead="Deep experience where software meets regulation and real-world operations — and the same rigour for every other product we build."
        index={INDUSTRIES.map((ind, i) => ({
          href: `#${INDUSTRY_DETAILS[i].slug}`,
          n: ind.n,
          label: ind.t,
        }))}
      />

      <Industries bare />

      <section className={styles.sectionPad} aria-labelledby="industry-detail-title">
        <SectionHeading
          kicker="Up close"
          id="industry-detail-title"
          title={["The problems we ", accent("solve.")]}
          lead="What tends to go wrong in each industry, and what we build to fix it."
        />
        <div className={styles.industryGrid}>
          {INDUSTRIES.map((ind, i) => {
            const detail = INDUSTRY_DETAILS[i];
            return (
              <Reveal
                key={ind.n}
                as="article"
                id={detail.slug}
                className={styles.industry}
                aria-labelledby={`${detail.slug}-title`}
                delay={(i % 2) * 0.08}
              >
                <div className={styles.industryHead}>
                  <h3
                    id={`${detail.slug}-title`}
                    className={`${styles.industryTitle} ${home.serif}`}
                  >
                    {ind.t}
                  </h3>
                  <span className={`${styles.detailNum} ${home.mono}`}>{ind.n}</span>
                </div>
                <p className={styles.cardText}>{ind.d}</p>
                <div className={styles.industryCols}>
                  <div>
                    <span className={`${styles.monoLabel} ${home.mono}`}>What’s hard</span>
                    <ul className={styles.dots}>
                      {detail.hard.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className={`${styles.monoLabel} ${home.mono}`}>What we build</span>
                    <ul className={styles.checks}>
                      {ind.builds.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.industryFoot}>
                  <ul className={home.tagRow} aria-label="Standards and focus">
                    {ind.tags.map((t) => (
                      <li key={t} className={home.tagPill}>
                        {t}
                      </li>
                    ))}
                  </ul>
                  {detail.related && (
                    <Link href={detail.related.href} className={styles.related}>
                      {detail.related.label} <span aria-hidden="true">&rarr;</span>
                    </Link>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className={styles.sectionPad} aria-labelledby="standards-title">
        <SectionHeading
          kicker="Compliance"
          id="standards-title"
          title={["Standards we ", accent("design for.")]}
          lead="The regulations and frameworks our regulated and data-heavy builds are designed around."
        />
        <Reveal as="dl" className={styles.standards}>
          {STANDARDS.map((s) => (
            <div key={s.k} className={styles.standard}>
              <dt className={`${styles.standardKey} ${home.serif}`}>{s.k}</dt>
              <dd className={styles.standardVal} style={{ margin: 0 }}>
                {s.v}
              </dd>
            </div>
          ))}
        </Reveal>
        <p className={styles.note}>
          We build the technical controls and the validation documents. Compliance itself also
          depends on your procedures, and validation sign-off stays with your QA team.
        </p>
      </section>
    </PageLayout>
  );
}
