import type { ReactNode } from "react";
import styles from "./Tone.module.css";

/** Wraps a section in a coloured, rounded panel; see Tone.module.css for the palettes.
    `dots` adds a quiet, non-interactive dot-grid backdrop with slow drifting light. */
export default function Tone({
  kind,
  dots = false,
  children,
}: {
  kind: "raised" | "ember";
  dots?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={styles[kind]}>
      {dots && (
        <div className={styles.dots} aria-hidden="true">
          <span className={styles.dotsGlowA} />
          <span className={styles.dotsGlowB} />
          <span className={styles.dotsGrid} />
          <span className={styles.dotsGridWarm} />
        </div>
      )}
      {children}
    </div>
  );
}
