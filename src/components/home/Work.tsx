import styles from "./Home.module.css";
import Reveal from "./Reveal";
import { WORK } from "./data";

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <Reveal className={styles.sectionHeader}>
        <div className={styles.sectionHeaderLead}>
          <span className={styles.kicker}>
            <span className={styles.kickerDash} />
            (01) Selected work
          </span>
          <h2 className={`${styles.h2} ${styles.serif}`}>
            Products we&rsquo;ve <span className={styles.accentItalic}>put live.</span>
          </h2>
        </div>
        <p className={styles.sectionLead}>
          Platforms for pharma and labs &mdash; where software has to survive an audit, not
          just a demo.
        </p>
      </Reveal>

      <div className={styles.workGrid}>
        {WORK.map((item) => (
          <Reveal as="a" href="#" key={item.id} className={styles.workCard}>
            <div className={styles.workImage}>
              <span className={styles.workImagePlaceholder}>{item.name} screenshot</span>
              <span className={`${styles.workBadge} ${styles.mono}`}>{item.tag}</span>
            </div>
            <div className={styles.workCardRow}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
                <h3 className={`${styles.h3} ${styles.serif}`}>{item.name}</h3>
                <p className={styles.workDesc}>{item.description}</p>
              </div>
              <span className={styles.arrowCircle}>&#8599;</span>
            </div>
            <div className={styles.tagRow}>
              {item.tags.map((tag) => (
                <span key={tag} className={styles.tagPill}>
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className={styles.ctaBar}>
        <span className={`${styles.ctaBarText} ${styles.serif}`}>
          Your product could be <span className={styles.accentItalic}>next.</span>
        </span>
        <a href="#contact" className={styles.btnOutline}>
          Start a project <span>&rarr;</span>
        </a>
      </Reveal>
    </section>
  );
}
