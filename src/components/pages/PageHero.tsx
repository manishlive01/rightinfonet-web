import Link from "next/link";
import type { ReactNode } from "react";
import home from "../home/Home.module.css";
import Reveal from "../home/Reveal";
import SplitText, { type SplitPart } from "../home/motion/SplitText";
import styles from "./Pages.module.css";

export type HeroIndexItem = { href: string; n: string; label: string };

/** Inner-page hero: breadcrumb, kicker, animated H1, lead and an optional jump list. */
export default function PageHero({
  crumb,
  kicker,
  title,
  lead,
  index,
  children,
}: {
  crumb: string;
  kicker: string;
  title: SplitPart[];
  lead: ReactNode;
  index?: HeroIndexItem[];
  children?: ReactNode;
}) {
  return (
    <header className={styles.hero}>
      <div className={home.dotGrid} aria-hidden="true" />
      <div className={styles.heroGlow} aria-hidden="true" />

      <nav className={styles.crumbs} aria-label="Breadcrumb">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li aria-current="page">{crumb}</li>
        </ol>
      </nav>

      <div className={styles.heroGrid}>
        <div className={styles.heroMain}>
          <Reveal as="span" className={home.kicker}>
            <span className={home.kickerDash} />
            {kicker}
          </Reveal>
          <SplitText
            as="h1"
            trigger="load"
            className={`${styles.heroTitle} ${home.serif}`}
            parts={title}
          />
          <Reveal as="p" className={styles.heroLead} delay={0.25}>
            {lead}
          </Reveal>
          {children}
        </div>

        {index && (
          <Reveal as="nav" className={styles.heroIndex} aria-label="On this page" delay={0.35}>
            <span className={`${styles.heroIndexLabel} ${home.mono}`}>On this page</span>
            <ol>
              {index.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.heroIndexLink}>
                    <span className={`${styles.heroIndexNum} ${home.mono}`}>{item.n}</span>
                    <span>{item.label}</span>
                    <span className={styles.heroIndexArrow} aria-hidden="true">
                      &darr;
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        )}
      </div>
    </header>
  );
}
