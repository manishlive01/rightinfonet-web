import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import home from "@/components/home/Home.module.css";
import Reveal from "@/components/home/Reveal";
import PageHero from "@/components/pages/PageHero";
import PageLayout from "@/components/pages/PageLayout";
import styles from "@/components/pages/Pages.module.css";
import landing from "@/components/pages/Landing.module.css";
import { breadcrumbTrailJsonLd, pageMetadata } from "@/components/pages/seo";
import { FOUNDER } from "@/content/authors";
import { siteConfig } from "@/lib/site-config";

const PATH = "/about/founder";

/** The founder profile, only once the owner has filled in a real name (src/content/authors.ts). */
const founder = FOUNDER && FOUNDER.name.trim() ? FOUNDER : null;

export function generateMetadata(): Metadata {
  if (!founder) return { robots: { index: false, follow: true } };
  return pageMetadata({
    path: PATH,
    title: `${founder.name}, ${founder.role}`,
    description: founder.bio,
  });
}

export default function FounderPage() {
  if (!founder) notFound();
  const url = `${siteConfig.url}${PATH}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbTrailJsonLd([
        { name: "About", path: "/about" },
        { name: founder.name, path: PATH },
      ]),
      {
        "@type": "ProfilePage",
        "@id": `${url}#webpage`,
        url,
        name: `${founder.name} — ${siteConfig.name}`,
        mainEntity: { "@id": `${url}#person` },
      },
      {
        "@type": "Person",
        "@id": `${url}#person`,
        name: founder.name,
        jobTitle: founder.role,
        description: founder.bio,
        url,
        ...(founder.photo && { image: `${siteConfig.url}${founder.photo}` }),
        ...(founder.linkedin && { sameAs: [founder.linkedin] }),
        ...(founder.credentials?.length && { knowsAbout: founder.credentials }),
        worksFor: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <PageLayout jsonLd={jsonLd}>
      <PageHero
        crumb={founder.name}
        parent={{ name: "About", path: "/about" }}
        kicker={founder.role}
        title={[`${founder.name}`]}
        lead={founder.bio}
      >
        <div className={styles.heroActions}>
          <Link href="/#contact" className={home.btnPrimary}>
            Start a project <span className={home.btnArrow}>&rarr;</span>
          </Link>
          {founder.linkedin && (
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={home.btnOutline}
            >
              LinkedIn profile
            </a>
          )}
        </div>
      </PageHero>

      <section className={styles.sectionPad} aria-label="Story">
        <div className={landing.answer}>
          {founder.photo && (
            <Image
              src={founder.photo}
              alt={founder.name}
              width={240}
              height={240}
              style={{ borderRadius: 24, height: "auto" }}
            />
          )}
          <Reveal className={landing.answerBody}>
            {founder.story.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            {founder.credentials && founder.credentials.length > 0 && (
              <ul aria-label="Experience">
                {founder.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
            <p>
              Read more <Link href="/about">about the studio</Link>, see{" "}
              <Link href="/work">our work</Link> or explore{" "}
              <Link href="/services/regulated-software">
                regulated software
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
