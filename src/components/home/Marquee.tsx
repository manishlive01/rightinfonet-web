import styles from "./Home.module.css";
import { MARQUEE_WORDS } from "./data";

export default function Marquee() {
  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS];
  return (
    <section aria-label="Capabilities" className={styles.marqueeSection}>
      <div className={styles.marqueeTrack}>
        {items.map((word, i) => (
          <span
            key={i}
            className={`${styles.marqueeItem} ${styles.serif}`}
            style={{
              fontStyle: i % 2 ? "italic" : "normal",
              color: i % 2 ? "var(--acc)" : "var(--fg)",
            }}
          >
            {word}
            <span className={styles.marqueeDot} />
          </span>
        ))}
      </div>
    </section>
  );
}
