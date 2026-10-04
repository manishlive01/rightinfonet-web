import home from "../home/Home.module.css";
import Reveal from "../home/Reveal";
import SectionHeading, { accent } from "../home/SectionHeading";
import styles from "./Trust.module.css";
import { testimonialsFor } from "@/content/trust";

/**
 * Real, permissioned client quotes from src/content/trust.ts. With `path`, only the quotes
 * tagged for that landing page. Renders nothing while there are none.
 */
export default function Testimonials({
  path,
  className = styles.section,
}: {
  path?: string;
  className?: string;
}) {
  const items = testimonialsFor(path);
  if (items.length === 0) return null;
  const id = path ? "testimonials-title-page" : "testimonials-title";

  return (
    <section className={className} aria-labelledby={id}>
      <SectionHeading
        kicker="Client words"
        id={id}
        title={["What clients ", accent("say.")]}
      />
      <ul className={styles.quotes}>
        {items.map((t, i) => (
          <li key={`${t.name}-${i}`}>
            <Reveal as="figure" className={styles.quoteCard} delay={(i % 3) * 0.06}>
              <blockquote className={`${styles.quoteText} ${home.serif}`}>
                <p style={{ margin: 0 }}>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className={styles.quoteBy}>
                <cite className={styles.quoteName}>{t.name}</cite>
                {[t.role, t.company].filter(Boolean).join(", ")}
                {t.source && (
                  <span className={`${styles.quoteSource} ${home.mono}`}>
                    via {t.source}
                  </span>
                )}
              </figcaption>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
