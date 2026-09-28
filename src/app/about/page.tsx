import type { Metadata } from "next";
import Link from "next/link";
import About from "@/components/home/About";
import AcademyTeaser from "@/components/home/AcademyTeaser";
import home from "@/components/home/Home.module.css";
import Proof from "@/components/home/Proof";
import Reveal from "@/components/home/Reveal";
import SectionHeading, { accent } from "@/components/home/SectionHeading";
import PageHero from "@/components/pages/PageHero";
import PageLayout from "@/components/pages/PageLayout";
import styles from "@/components/pages/Pages.module.css";
import { VALUES } from "@/components/pages/content";
import { breadcrumbJsonLd } from "@/components/pages/seo";
import { siteConfig } from "@/lib/site-config";

const description =
  "Bright Infonet is an AI-first software development company in India: one senior team that designs, builds and validates web platforms, mobile apps, AI agents and regulated software.";

export const metadata: Metadata = {
  title: "About — An AI-First Software Studio in India",
  description,
  alternates: { canonical: "/about" },
  openGraph: { url: `${siteConfig.url}/about`, title: `About | ${siteConfig.name}`, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd("About", "/about"),
    {
      "@type": "AboutPage",
      url: `${siteConfig.url}/about`,
      name: `About ${siteConfig.name}`,
      description,
      about: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function AboutPage() {
  return (
    <PageLayout jsonLd={jsonLd}>
      <PageHero
        crumb="About"
        kicker="About the studio"
        title={["Small team. ", { text: "Senior hands.", className: home.accentItalic }]}
        lead="Bright Infonet is an AI-first software development company in India. We design, build and validate web platforms, mobile apps, AI agents and regulated software — end to end, with the same people from the first call to go-live."
      >
        <Reveal className={styles.heroActions} delay={0.4}>
          <Link href="/#contact" className={home.btnPrimary}>
            Start a project <span className={home.btnArrow}>&rarr;</span>
          </Link>
          <Link href="/work" className={home.btnOutline}>
            See our work <span className={home.btnArrow}>&rarr;</span>
          </Link>
        </Reveal>
      </PageHero>

      <About bare />

      <Proof />

      <section className={styles.sectionPad} aria-labelledby="values-title">
        <SectionHeading
          kicker="What we believe"
          id="values-title"
          title={["How we ", accent("think.")]}
          lead="Four ideas that shape every product we build — and every engineer we train."
        />
        <div className={styles.cards4}>
          {VALUES.map((v, i) => (
            <Reveal key={v.n} as="article" className={styles.card} delay={i * 0.07}>
              <span className={`${styles.cardNum} ${home.mono}`}>{v.n}</span>
              <h3 className={`${styles.cardTitle} ${home.serif}`}>{v.t}</h3>
              <p className={styles.cardText}>{v.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <AcademyTeaser kicker="Academy" />
    </PageLayout>
  );
}
