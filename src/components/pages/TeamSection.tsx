import Image from "next/image";
import Link from "next/link";
import home from "@/components/home/Home.module.css";
import Reveal from "@/components/home/Reveal";
import SectionHeading, { accent } from "@/components/home/SectionHeading";
import styles from "@/components/pages/Pages.module.css";
import { isFounder, type Author } from "@/content/authors";
import { siteConfig } from "@/lib/site-config";

/** Person nodes for the team, matching what TeamSection shows. */
export function teamJsonLd(team: Author[]) {
  return team.map((p) => ({
    "@type": "Person",
    "@id": isFounder(p)
      ? `${siteConfig.url}/about/founder#person`
      : `${siteConfig.url}/about#person-${p.id}`,
    name: p.name,
    ...(p.role && { jobTitle: p.role }),
    ...(p.bio && { description: p.bio }),
    ...(p.photo && { image: `${siteConfig.url}${p.photo}` }),
    ...(p.linkedin && { sameAs: [p.linkedin] }),
    ...(p.credentials?.length && { knowsAbout: p.credentials }),
    ...(isFounder(p) && { url: `${siteConfig.url}/about/founder` }),
    worksFor: { "@id": `${siteConfig.url}/#organization` },
  }));
}

/**
 * The people behind the studio. Renders nothing until real people are added in
 * src/content/authors.ts (FOUNDER / AUTHORS).
 */
export default function TeamSection({ team }: { team: Author[] }) {
  if (team.length === 0) return null;
  return (
    <section className={styles.sectionPad} aria-labelledby="team-title">
      <SectionHeading
        kicker="The team"
        id="team-title"
        title={["The people ", accent("you work with.")]}
      />
      <div className={styles.cards4}>
        {team.map((p, i) => (
          <Reveal
            key={p.id}
            as="article"
            className={styles.card}
            delay={i * 0.07}
          >
            {p.photo && (
              <Image
                src={p.photo}
                alt={p.name}
                width={96}
                height={96}
                style={{ borderRadius: 999 }}
              />
            )}
            <h3 className={`${styles.cardTitle} ${home.serif}`}>{p.name}</h3>
            {p.role && (
              <p className={`${styles.cardText} ${home.mono}`}>{p.role}</p>
            )}
            {p.bio && <p className={styles.cardText}>{p.bio}</p>}
            {p.credentials && p.credentials.length > 0 && (
              <ul className={styles.cardText} aria-label={`${p.name}: experience`}>
                {p.credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
            <p className={styles.cardText}>
              {isFounder(p) && (
                <Link href="/about/founder">Founder profile</Link>
              )}
              {isFounder(p) && p.linkedin && " · "}
              {p.linkedin && (
                <a href={p.linkedin} rel="noopener">
                  LinkedIn
                </a>
              )}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
