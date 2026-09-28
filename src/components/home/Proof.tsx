import styles from "./Proof.module.css";
import CountUp from "./motion/CountUp";
import Reveal from "./Reveal";
import { STATS } from "./data";

export default function Proof() {
  return (
    <section className={styles.proof} aria-labelledby="proof-title">
      <Reveal className={styles.head}>
        <h2 id="proof-title" className={styles.title}>
          Bright Infonet in numbers
        </h2>
      </Reveal>

      <dl className={styles.stats}>
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} className={styles.stat} delay={i * 0.08}>
            <dt className={styles.statLabel}>{stat.label}</dt>
            <dd className={styles.statValue}>
              <CountUp value={stat.value} suffix={stat.suffix} />
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
