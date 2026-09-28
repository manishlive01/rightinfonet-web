import type { CSSProperties, ReactNode } from "react";
import styles from "./Home.module.css";
import Reveal from "./Reveal";
import SplitText, { type SplitPart } from "./motion/SplitText";

type SectionHeadingProps = {
  kicker: string;
  title: SplitPart[];
  id?: string;
  lead?: ReactNode;
  style?: CSSProperties;
};

export default function SectionHeading({ kicker, title, id, lead, style }: SectionHeadingProps) {
  return (
    <div className={styles.sectionHeader} style={style}>
      <div className={styles.sectionHeaderLead}>
        <Reveal as="span" className={styles.kicker}>
          <span className={styles.kickerDash} />
          {kicker}
        </Reveal>
        <SplitText as="h2" id={id} className={`${styles.h2} ${styles.serif}`} parts={title} />
      </div>
      {lead && (
        <Reveal as="p" className={styles.sectionLead} delay={0.2}>
          {lead}
        </Reveal>
      )}
    </div>
  );
}

export const accent = (text: string): SplitPart => ({ text, className: styles.accentItalic });
