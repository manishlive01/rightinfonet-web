import styles from "./Proof.module.css";
import CountUp from "./motion/CountUp";
import Reveal from "./Reveal";
import { CLIENT_LOGOS, STATS } from "./data";

export default function Proof() {
  const logos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <section className={styles.proof} aria-labelledby="proof-title">
      <Reveal className={styles.head}>
        <h2 id="proof-title" className={styles.title}>
          Trusted by teams in pharma, diagnostics and fast-growing businesses
        </h2>
        <span className={styles.rule} aria-hidden="true" />
      </Reveal>

      <div className={styles.logoViewport}>
        <ul className={styles.logoTrack}>
          {logos.map((name, i) => (
            <li
              key={i}
              className={styles.logo}
              aria-hidden={i >= CLIENT_LOGOS.length ? "true" : undefined}
            >
              <span className={styles.logoMark} aria-hidden="true" />
              {name}
            </li>
          ))}
        </ul>
      </div>

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
