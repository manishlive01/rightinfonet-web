import type { Metadata } from "next";
import Link from "next/link";
import About from "@/components/home/About";
import AcademyTeaser from "@/components/home/AcademyTeaser";
import Tone from "@/components/home/Tone";
import home from "@/components/home/Home.module.css";
import Reveal from "@/components/home/Reveal";
import SectionHeading, { accent } from "@/components/home/SectionHeading";
import PageHero from "@/components/pages/PageHero";
import PageLayout from "@/components/pages/PageLayout";
import styles from "@/components/pages/Pages.module.css";
import { VALUES } from "@/components/pages/content";
import { breadcrumbJsonLd, pageMetadata } from "@/components/pages/seo";
import { siteConfig } from "@/lib/site-config";
import { FOUNDER, getTeam } from "@/content/authors";
import TeamSection, { teamJsonLd } from "@/components/pages/TeamSection";

// Real people only (src/content/authors.ts); empty = no team section and no Person nodes.
const team = getTeam();

const description =
  "Bright Infonet is an AI-first software company in India: one senior team that designs, builds and validates web platforms, mobile apps and AI agents.";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "About — An AI-First Software Studio in India",
  description: description,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd("About", "/about"),
    {
      "@type": "AboutPage",
      "@id": `${siteConfig.url}/about#webpage`,
      url: `${siteConfig.url}/about`,
      name: `About ${siteConfig.name}`,
      description,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#organization` },
      mainEntity: { "@id": `${siteConfig.url}/#organization` },
    },
    ...teamJsonLd(team),
  ],
};

export default function AboutPage() {
  return (
    <PageLayout jsonLd={jsonLd}>
      <PageHero
        crumb="About"
        kicker="About the studio"
        title={[
          "Small team. ",
          { text: "Senior hands.", className: home.accentItalic },
        ]}
        lead="Bright Infonet is an AI-first software development company in India. We design, build and validate web platforms, mobile apps, AI agents and regulated software — end to end, with the same people from the first call to go-live."
      >
        <Reveal className={styles.heroActions} delay={0.4}>
          <Link href="/#contact" className={home.btnPrimary}>
            Start a project <span className={home.btnArrow}>&rarr;</span>
          </Link>
          <Link href="/work" className={home.btnOutline}>
            See our work <span className={home.btnArrow}>&rarr;</span>
          </Link>
          {/* only once the founder profile is filled in (src/content/authors.ts) */}
          {FOUNDER?.name.trim() && (
            <Link href="/about/founder" className={home.btnOutline}>
              Meet the founder <span className={home.btnArrow}>&rarr;</span>
            </Link>
          )}
        </Reveal>
      </PageHero>

      <Tone kind="raised">
        <About bare />
      </Tone>

      <section className={styles.sectionPad} aria-labelledby="values-title">
        <SectionHeading
          kicker="What we believe"
          id="values-title"
          title={["How we ", accent("think.")]}
          lead="Four ideas that shape every product we build — and every engineer we train."
        />
        <div className={styles.cards4}>
          {VALUES.map((v, i) => (
            <Reveal
              key={v.n}
              as="article"
              className={styles.card}
              delay={i * 0.07}
            >
              <span className={`${styles.cardNum} ${home.mono}`}>{v.n}</span>
              <h3 className={`${styles.cardTitle} ${home.serif}`}>{v.t}</h3>
              <p className={styles.cardText}>{v.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <TeamSection team={team} />

      <AcademyTeaser kicker="Academy" />
    </PageLayout>
  );
}
