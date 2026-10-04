import Image from "next/image";
import home from "../home/Home.module.css";
import styles from "./Trust.module.css";
import { Metrics, ProofQuote } from "./ProofSlot";
import { caseStudyProofFor } from "@/content/trust";

/** Real numbers, screenshots and a client quote for one /work case study, from CASE_STUDY_PROOF. */
export default function CaseStudyProof({ id }: { id: string }) {
  const proof = caseStudyProofFor(id);
  if (!proof) return null;

  return (
    <div className={styles.caseProof}>
      {proof.metrics.length > 0 && (
        <div>
          <span className={`${styles.label} ${home.mono}`}>Outcomes</span>
          <Metrics metrics={proof.metrics} />
        </div>
      )}
      {proof.screenshots.length > 0 && (
        <ul className={styles.shots} aria-label="Screenshots">
          {proof.screenshots.map((s) => (
            <li key={s.src}>
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                sizes="(min-width: 1040px) 25vw, 100vw"
                className={styles.shot}
              />
            </li>
          ))}
        </ul>
      )}
      {proof.quote && <ProofQuote quote={proof.quote} />}
    </div>
  );
}
