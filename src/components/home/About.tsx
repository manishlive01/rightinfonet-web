import styles from "./Home.module.css";
import Reveal from "./Reveal";
import { ABOUT_POINTS } from "./data";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <Reveal as="span" className={styles.kicker} style={{ marginBottom: 32 }}>
        <span className={styles.kickerDash} />
        (05) The studio
      </Reveal>
      <Reveal as="p" className={`${styles.aboutLead} ${styles.serif}`}>
        One small team, end to end. The people who scope your product are the ones who
        design it, write it and put it live{" "}
        <span className={styles.dim}>
          &mdash; no handoffs, no lost context, no junior bait-and-switch.
        </span>
      </Reveal>
      <Reveal className={styles.aboutGrid}>
        {ABOUT_POINTS.map((point) => (
          <div key={point.t} className={styles.aboutItem}>
            <span className={styles.aboutItemTitle}>{point.t}</span>
            <span className={styles.aboutItemDesc}>{point.d}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
