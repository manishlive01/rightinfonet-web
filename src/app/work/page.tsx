import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/components/home/Home.module.css";
import work from "@/components/home/Work.module.css";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import Reveal from "@/components/home/Reveal";
import WorkCard from "@/components/home/WorkCard";
import { WORK } from "@/components/home/data";

export const metadata: Metadata = {
  title: "Work — Software, Mobile Apps & AI Agents We’ve Shipped",
  description:
    "Selected Bright Infonet projects: pharmacovigilance and LIMS platforms, a clinic booking app and an AI operations agent — built for regulated, real-world use.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <div className={styles.root}>
      <a href="#main" className={styles.skip}>
        Skip to content
      </a>
      <Header />
      <main id="main" className={styles.pageTop}>
        <section className={styles.section} aria-labelledby="work-page-title">
          <div className={styles.sectionHeader}>
            <div className={styles.sectionHeaderLead}>
              <Reveal as="span" className={styles.kicker}>
                <span className={styles.kickerDash} />
                Selected work
              </Reveal>
              <Reveal as="h1" id="work-page-title" className={`${styles.h1} ${styles.serif}`}>
                Software we&rsquo;ve <span className={styles.accentItalic}>put live.</span>
              </Reveal>
            </div>
            <Reveal as="p" className={styles.sectionLead} delay={0.2}>
              Platforms for pharma, labs, clinics and ops teams &mdash; software that has to
              survive an audit, not just a demo.
            </Reveal>
          </div>

          <div className={work.list}>
            {WORK.map((item, i) => (
              <WorkCard
                key={item.id}
                item={item}
                total={WORK.length}
                flip={i % 2 === 1}
                headingLevel="h2"
              />
            ))}
          </div>

          <Reveal className={work.ctaBar}>
            <span className={`${work.ctaBarText} ${styles.serif}`}>
              Your product could be <span className={styles.accentItalic}>next.</span>
            </span>
            <Link href="/#contact" className={styles.btnOutline}>
              Start a project <span className={styles.btnArrow}>&rarr;</span>
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
