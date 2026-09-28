import type { Metadata } from "next";
import Link from "next/link";
import home from "@/components/home/Home.module.css";
import Reveal from "@/components/home/Reveal";
import SectionHeading, { accent } from "@/components/home/SectionHeading";
import Services from "@/components/home/Services";
import Tone from "@/components/home/Tone";
import { SERVICES } from "@/components/home/data";
import PageHero from "@/components/pages/PageHero";
import PageLayout from "@/components/pages/PageLayout";
import styles from "@/components/pages/Pages.module.css";
import { ENGAGEMENTS, SERVICE_DETAILS } from "@/components/pages/content";
import { breadcrumbJsonLd, pageMetadata } from "@/components/pages/seo";
import { siteConfig } from "@/lib/site-config";

const description =
  "Product & UX design, web platforms, Flutter mobile apps, AI agents and GxP-ready regulated software — built end to end by one senior team in India.";

export const metadata: Metadata = pageMetadata({
  path: "/services",
  title: "Services — Web, Mobile, AI & Regulated Software",
  description: description,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd("Services", "/services"),
    {
      "@type": "ItemList",
      name: `${siteConfig.name} services`,
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: s.t,
          description: s.d,
          url: `${siteConfig.url}/services#${SERVICE_DETAILS[i].slug}`,
          provider: { "@id": `${siteConfig.url}/#organization` },
          areaServed: "IN",
        },
      })),
    },
  ],
};

export default function ServicesPage() {
  return (
    <PageLayout jsonLd={jsonLd}>
      <PageHero
        crumb="Services"
        kicker="Services"
        title={["Software, ", { text: "end to end.", className: home.accentItalic }]}
        lead="Product design, web platforms, mobile apps, AI agents and regulated software — five disciplines, one senior team, from the first sketch to production and beyond."
        index={SERVICES.map((s, i) => ({
          href: `#${SERVICE_DETAILS[i].slug}`,
          n: s.n,
          label: s.t,
        }))}
      />

      <Tone kind="raised">
        <Services bare />
      </Tone>

      <section className={styles.sectionPad} aria-labelledby="services-detail-title">
        <SectionHeading
          kicker="In detail"
          id="services-detail-title"
          title={["What each one ", accent("includes.")]}
          lead="Who it’s for, what you get and the tools we use — so you know what you’re buying before the first call."
        />
        <div className={styles.details}>
          {SERVICES.map((service, i) => {
            const detail = SERVICE_DETAILS[i];
            return (
              <article
                key={service.n}
                id={detail.slug}
                className={styles.detail}
                aria-labelledby={`${detail.slug}-title`}
              >
                <Reveal className={styles.detailIntro}>
                  <span className={`${styles.detailNum} ${home.mono}`}>
                    {service.n} / 0{SERVICES.length}
                  </span>
                  <h3 id={`${detail.slug}-title`} className={`${styles.detailTitle} ${home.serif}`}>
                    {service.t}
                  </h3>
                  <p className={styles.detailDesc}>{service.d}</p>
                  <span className={`${styles.chip} ${home.mono}`}>
                    <span className={styles.chipDot} />
                    {detail.timeline}
                  </span>
                  {detail.related && (
                    <Link href={detail.related.href} className={styles.related}>
                      Read: {detail.related.label} <span aria-hidden="true">&rarr;</span>
                    </Link>
                  )}
                </Reveal>

                <div className={styles.detailCards}>
                  <Reveal className={styles.panel} delay={0.05}>
                    <span className={`${styles.monoLabel} ${home.mono}`}>A good fit if</span>
                    <ul className={styles.checks}>
                      {detail.fit.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal className={styles.panel} delay={0.12}>
                    <span className={`${styles.monoLabel} ${home.mono}`}>What you get</span>
                    <ul className={styles.dots}>
                      {service.get.map((g) => (
                        <li key={g}>{g}</li>
                      ))}
                    </ul>
                  </Reveal>
                  <Reveal className={`${styles.panel} ${styles.panelWide}`} delay={0.18}>
                    <span className={`${styles.monoLabel} ${home.mono}`}>
                      Tools &amp; standards
                    </span>
                    <ul className={home.tagRow}>
                      {[...new Set([...service.tags, ...detail.stack])].map((tag) => (
                        <li key={tag} className={home.tagPill}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.sectionPad} aria-labelledby="engage-title">
        <SectionHeading
          kicker="Working together"
          id="engage-title"
          title={["Three ways to ", accent("work with us.")]}
          lead="Pick the shape that fits where your product is today. Every option includes Friday demos and a tech lead you can call."
        />
        <div className={styles.cards3}>
          {ENGAGEMENTS.map((e, i) => (
            <Reveal key={e.n} as="article" className={styles.card} delay={i * 0.08}>
              <span className={`${styles.cardNum} ${home.mono}`}>{e.n}</span>
              <h3 className={`${styles.cardTitle} ${home.serif}`}>{e.t}</h3>
              <p className={styles.cardText}>{e.d}</p>
              <p className={styles.cardFoot}>
                Best for <strong>{e.best}</strong>
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
