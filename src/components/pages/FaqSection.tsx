import home from "../home/Home.module.css";
import Reveal from "../home/Reveal";
import SectionHeading, { accent } from "../home/SectionHeading";
import styles from "./Pages.module.css";

/** Visible FAQ block; pair it with faqJsonLd() so the structured data matches the page. */
export default function FaqSection({
  faqs,
  id = "faq",
  kicker = "FAQ",
  lead,
}: {
  faqs: readonly { q: string; a: string }[];
  id?: string;
  kicker?: string;
  lead?: string;
}) {
  return (
    <section id={id} className={styles.sectionPad} aria-labelledby={`${id}-title`}>
      <SectionHeading
        kicker={kicker}
        id={`${id}-title`}
        title={["Common ", accent("questions.")]}
        lead={lead}
      />
      <div className={styles.qa}>
        {faqs.map((item, i) => (
          <Reveal key={item.q} as="article" className={styles.qaItem} delay={(i % 2) * 0.08}>
            <h3 className={`${styles.qaQ} ${home.serif}`}>{item.q}</h3>
            <p className={styles.qaA}>{item.a}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
