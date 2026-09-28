import Link from "next/link";
import home from "./Home.module.css";
import styles from "./AcademyTeaser.module.css";
import Reveal from "./Reveal";
import SplitText from "./motion/SplitText";
import { TRACKS } from "./data";

export default function AcademyTeaser() {
  return (
    <section id="academy" className={styles.outer} aria-labelledby="academy-title">
      <div className={styles.panel}>
        <span className={styles.ringA} aria-hidden="true" />
        <span className={styles.ringB} aria-hidden="true" />

        <div className={styles.copy}>
          <Reveal className={styles.topRow}>
            <span className={styles.brand}>
              <span className={styles.brandRing}>
                <span className={styles.brandDot} />
              </span>
              bright infonet <span className={styles.badge}>Academy</span>
            </span>
            <span className={`${styles.openPill} ${home.mono}`}>
              <span className={styles.pulse} aria-hidden="true" />
              Applications open
            </span>
          </Reveal>

          <span className={`${styles.kicker} ${home.mono}`}>(06) Academy</span>
          <SplitText
            as="h2"
            id="academy-title"
            className={`${styles.headline} ${home.serif}`}
            parts={["Learn where the ", { text: "real work", className: styles.em }, " happens."]}
          />
          <Reveal as="p" className={styles.lead} delay={0.15}>
            The training arm of our studio. Small cohorts learn from the engineers who ship our
            client work &mdash; and graduate with a portfolio of real, code-reviewed projects.
          </Reveal>
          <Reveal delay={0.25}>
            <Link href="/academy" className={styles.cta}>
              Explore the Academy <span className={styles.ctaArrow}>&rarr;</span>
            </Link>
          </Reveal>
        </div>

        <ul className={styles.tracks} aria-label="Academy tracks">
          {TRACKS.map((track, i) => (
            <Reveal as="li" key={track.n} delay={0.1 + i * 0.08}>
              <Link href="/academy" className={styles.track}>
                <span className={`${styles.trackNum} ${home.mono}`}>{track.n}</span>
                <span className={styles.trackMain}>
                  <span className={styles.trackTitle}>{track.t}</span>
                  <span className={styles.trackStack}>{track.stack}</span>
                </span>
                <span className={`${styles.trackMeta} ${home.mono}`}>
                  {track.wk} wks &middot; {track.format}
                </span>
                <span className={styles.trackArrow} aria-hidden="true">
                  &#8599;
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
