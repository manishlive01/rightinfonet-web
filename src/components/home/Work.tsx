import home from "./Home.module.css";
import styles from "./Work.module.css";
import Reveal from "./Reveal";
import SectionHeading, { accent } from "./SectionHeading";
import WorkCard from "./WorkCard";
import { WORK } from "./data";

export default function Work() {
  return (
    <section id="work" className={home.section} aria-labelledby="work-title">
      <SectionHeading
        kicker="(02) Selected work"
        id="work-title"
        title={["Software we’ve ", accent("put live.")]}
        lead="Platforms for pharma and labs — where software has to survive an audit, not just a demo."
      />

      <div className={styles.list}>
        {WORK.map((item, i) => (
          <WorkCard key={item.id} item={item} total={WORK.length} flip={i % 2 === 1} />
        ))}
      </div>

      <Reveal className={styles.ctaBar}>
        <span className={`${styles.ctaBarText} ${home.serif}`}>
          Your product could be <span className={home.accentItalic}>next.</span>
        </span>
        <a href="#contact" className={home.btnOutline}>
          Start a project <span className={home.btnArrow}>&rarr;</span>
        </a>
      </Reveal>
    </section>
  );
}
