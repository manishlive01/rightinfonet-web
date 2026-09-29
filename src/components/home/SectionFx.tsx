import type { ReactNode } from "react";
import styles from "./SectionFx.module.css";

/* Quiet, CSS-only ambient backgrounds, one flavour per section. They sit behind the
   section content, never react to the pointer, and stop for prefers-reduced-motion. */

export type FxKind =
  | "lines"
  | "orbits"
  | "flow"
  | "grid"
  | "stars"
  | "contours"
  | "embers";

// ember particles: [left %, size px, rise duration s, delay s]
const EMBERS: [number, number, number, number][] = [
  [8, 3, 22, 0],
  [17, 2, 28, 9],
  [26, 4, 25, 16],
  [35, 2, 30, 4],
  [44, 3, 24, 12],
  [53, 2, 27, 20],
  [62, 4, 23, 7],
  [71, 2, 29, 14],
  [80, 3, 26, 2],
  [89, 2, 31, 18],
  [95, 3, 24, 10],
];

// fixed star positions (percent) so server and client render the same markup
const STARS: [number, number, number][] = [
  [6, 18, 0],
  [14, 62, 2.4],
  [22, 34, 4.1],
  [31, 80, 1.2],
  [39, 12, 3.3],
  [47, 56, 5.2],
  [55, 26, 0.8],
  [63, 72, 2.9],
  [71, 40, 4.6],
  [79, 14, 1.7],
  [86, 66, 3.8],
  [93, 30, 0.4],
  [10, 88, 5.6],
  [68, 90, 2.1],
  [50, 6, 4.9],
  [96, 84, 1.4],
];

export default function SectionFx({
  kind,
  children,
}: {
  kind: FxKind;
  children: ReactNode;
}) {
  return (
    <div className={styles.wrap}>
      <FxLayer kind={kind} />
      {children}
    </div>
  );
}

/** Just the effect layer, for placing inside a panel that has its own background.
    `inline` keeps it in normal stacking order (drawn above the panel background). */
export function FxLayer({
  kind,
  inline = false,
}: {
  kind: FxKind;
  inline?: boolean;
}) {
  return (
    <div
      className={`${styles.layer} ${inline ? styles.inline : ""} ${styles[kind]}`}
      aria-hidden="true"
    >
      {kind === "lines" && (
        <>
          <span
            className={styles.beam}
            style={{ left: 240, animationDelay: "0s" }}
          />
          <span
            className={styles.beam}
            style={{ left: 720, animationDelay: "-5s" }}
          />
          <span
            className={styles.beam}
            style={{ left: 1200, animationDelay: "-10s" }}
          />
          <span
            className={styles.beam}
            style={{ left: 1560, animationDelay: "-2.5s" }}
          />
        </>
      )}
      {kind === "orbits" && (
        <>
          <span
            className={styles.orbit}
            style={{ ["--s" as string]: "34vw", animationDuration: "70s" }}
          />
          <span
            className={styles.orbit}
            style={{
              ["--s" as string]: "52vw",
              animationDuration: "110s",
              animationDirection: "reverse",
            }}
          />
          <span
            className={styles.orbit}
            style={{ ["--s" as string]: "72vw", animationDuration: "150s" }}
          />
        </>
      )}
      {kind === "flow" && (
        <>
          <span
            className={styles.streak}
            style={{ top: 180, animationDelay: "0s" }}
          />
          <span
            className={styles.streak}
            style={{ top: 450, animationDelay: "-6s" }}
          />
          <span
            className={styles.streak}
            style={{ top: 720, animationDelay: "-12s" }}
          />
          <span
            className={styles.streak}
            style={{ top: 990, animationDelay: "-3s" }}
          />
          <span
            className={styles.streak}
            style={{ top: 1260, animationDelay: "-9s" }}
          />
        </>
      )}
      {kind === "grid" && <span className={styles.gridWarm} />}
      {kind === "stars" &&
        STARS.map(([x, y, d], i) => (
          <span
            key={i}
            className={styles.star}
            style={{ left: `${x}%`, top: `${y}%`, animationDelay: `-${d}s` }}
          />
        ))}
      {kind === "contours" && <span className={styles.rings} />}
      {kind === "embers" &&
        EMBERS.map(([x, size, dur, d], i) => (
          <span
            key={i}
            className={styles.ember}
            style={{
              left: `${x}%`,
              width: size,
              height: size,
              animationDuration: `${dur}s`,
              animationDelay: `-${d}s`,
            }}
          />
        ))}
    </div>
  );
}
