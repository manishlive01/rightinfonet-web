import styles from "./HeroShapes.module.css";

/* Decorative background for the hero: the logo's node network drawn large and faint, a set of
   thin rings (one slowly turning) and a few small floating shapes in the brand's orange and
   blue. Purely visual, so it is hidden from assistive tech. */

// the logo mark's nodes (same geometry as Logo.tsx), in a 120x120 box
const NODES: [number, number, number][] = [
  [58.2, 56.3, 13.8],
  [22.7, 23.2, 9],
  [100, 14.9, 14.5],
  [19.5, 99.1, 14],
  [65.1, 107.8, 11.7],
  [99.1, 85.8, 9.9],
];

export default function HeroShapes() {
  return (
    <div className={styles.layer} aria-hidden="true">
      <svg className={styles.network} viewBox="-10 -10 140 140">
        <g className={styles.networkLinks}>
          {NODES.slice(1).map(([x, y], i) => (
            <line key={i} x1={NODES[0][0]} y1={NODES[0][1]} x2={x} y2={y} />
          ))}
        </g>
        <g className={styles.networkNodes}>
          {NODES.map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} />
          ))}
        </g>
      </svg>

      <svg className={styles.rings} viewBox="0 0 400 400">
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="140" />
        <circle className={styles.ringDashed} cx="200" cy="200" r="165" />
        <circle className={styles.ringDot} cx="200" cy="35" r="6" />
      </svg>

      <span className={`${styles.shape} ${styles.dotOrange}`} />
      <span className={`${styles.shape} ${styles.dotBlue}`} />
      <span className={`${styles.shape} ${styles.ringSmall}`} />
      <span className={`${styles.shape} ${styles.plus}`} />
      <span className={`${styles.shape} ${styles.square}`} />
    </div>
  );
}
