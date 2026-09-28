import styles from "./Home.module.css";
import Reveal from "./Reveal";
import { PROCESS_STEPS } from "./data";

export default function Process() {
  return (
    <section id="process" className={styles.section} style={{ paddingBottom: "clamp(96px,12vw,168px)" }}>
      <Reveal style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: "clamp(44px,6vw,80px)" }}>
        <span className={styles.kicker}>
          <span className={styles.kickerDash} />
          (03) Process
        </span>
        <h2 className={`${styles.h2} ${styles.serif}`} style={{ maxWidth: 980 }}>
          Sketch to <span className={styles.accentItalic}>live</span> in four moves.
        </h2>
      </Reveal>

      <Reveal className={styles.processGrid}>
        {PROCESS_STEPS.map((step) => (
          <div key={step.n} className={styles.processCol}>
            <span className={styles.processColLine} />
            <span className={`${styles.processNum} ${styles.serif}`}>{step.n}</span>
            <span className={styles.processTitle}>{step.t}</span>
            <p className={styles.processDesc}>{step.d}</p>
            <span className={`${styles.processTime} ${styles.mono}`}>{step.time}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
