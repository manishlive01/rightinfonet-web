import Link from "next/link";
import home from "../home/Home.module.css";
import Reveal from "../home/Reveal";
import styles from "./Trust.module.css";
import { proofFor, type Metric, type Quote } from "@/content/trust";

export function Metrics({ metrics }: { metrics: Metric[] }) {
  if (metrics.length === 0) return null;
  return (
    <dl className={styles.metrics}>
      {metrics.map((m) => (
        <div key={m.k} className={styles.metric}>
          <dt className={home.mono}>{m.k}</dt>
          <dd className={home.serif}>{m.v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ProofQuote({ quote }: { quote: Quote }) {
  return (
    <figure className={styles.quoteCard}>
      <blockquote className={`${styles.quoteText} ${home.serif}`}>
        <p style={{ margin: 0 }}>&ldquo;{quote.text}&rdquo;</p>
      </blockquote>
      <figcaption className={styles.quoteBy}>
        <cite className={styles.quoteName}>{quote.name}</cite>
        {[quote.role, quote.company].filter(Boolean).join(", ")}
      </figcaption>
    </figure>
  );
}

/** Real outcomes (metrics, a client quote, case study link) for a landing page, from PROOF. */
export default function ProofSlot({ path }: { path: string }) {
  const proof = proofFor(path);
  if (!proof) return null;

  return (
    <section className={styles.section} aria-labelledby="proof-title">
      <h2 id="proof-title" className={`${styles.label} ${home.mono}`}>
        Proof from delivered work
      </h2>
      <div className={styles.proof}>
        {proof.metrics.length > 0 && (
          <Reveal className={styles.panel}>
            <Metrics metrics={proof.metrics} />
            {proof.caseStudyHref && (
              <Link href={proof.caseStudyHref} className={styles.link}>
                Read the case study <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </Reveal>
        )}
        {proof.quote && (
          <Reveal delay={0.08}>
            <ProofQuote quote={proof.quote} />
          </Reveal>
        )}
      </div>
    </section>
  );
}
