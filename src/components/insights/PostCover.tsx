import type { CoverVariant } from "@/content/insights";
import home from "../home/Home.module.css";
import styles from "./Insights.module.css";

/* Decorative, on-brand cover art drawn in SVG, so every post has a sharp cover without
   stock images. Colours come from the theme tokens, so covers follow light/dark mode. */

function Audit() {
  const rows = [
    { y: 46, w: 150, t: "10:42  result edited" },
    { y: 86, w: 120, t: "10:44  reviewed" },
    { y: 126, w: 170, t: "10:46  record locked" },
  ];
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true">
      <rect className={styles.cvPanel} x="30" y="20" width="200" height="164" rx="12" />
      {rows.map((r, i) => (
        <g key={r.y} className={styles.cvRow} style={{ transitionDelay: `${i * 0.06}s` }}>
          <circle className={styles.cvOk} cx="52" cy={r.y} r="7" />
          <path className={styles.cvTick} d={`M48.5 ${r.y} l2.5 2.5 l4.5 -5`} />
          <text className={styles.cvText} x="68" y={r.y + 3.5}>
            {r.t}
          </text>
          <line className={styles.cvLine} x1="68" x2={68 + r.w * 0.8} y1={r.y + 16} y2={r.y + 16} />
        </g>
      ))}
      <g className={styles.cvFloat}>
        <rect className={styles.cvSign} x="176" y="112" width="120" height="64" rx="10" />
        <text className={styles.cvSignLabel} x="190" y="132">
          E-SIGNATURE
        </text>
        <path className={styles.cvAccStroke} d="M190 158 q10 -18 18 -2 t18 -4 t20 2 t24 -6" />
      </g>
    </svg>
  );
}

function VModel() {
  const left = [
    { x: 40, y: 40, t: "URS" },
    { x: 80, y: 90, t: "FS" },
    { x: 120, y: 140, t: "DS" },
  ];
  const right = [
    { x: 280, y: 40, t: "PQ" },
    { x: 240, y: 90, t: "OQ" },
    { x: 200, y: 140, t: "IQ" },
  ];
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true">
      <path className={styles.cvLine} d="M40 40 L160 176 L280 40" />
      {left.map((n, i) => (
        <line
          key={n.t}
          className={styles.cvDash}
          x1={n.x + 14}
          x2={right[i].x - 14}
          y1={n.y}
          y2={right[i].y}
        />
      ))}
      {[...left, ...right].map((n) => (
        <g key={n.t}>
          <circle className={styles.cvNode} cx={n.x} cy={n.y} r="14" />
          <text className={styles.cvNodeText} x={n.x} y={n.y + 3.5} textAnchor="middle">
            {n.t}
          </text>
        </g>
      ))}
      <circle className={styles.cvAccFill} cx="160" cy="176" r="9" />
    </svg>
  );
}

function Agent() {
  const tools = [
    { x: 58, y: 44, t: "crm" },
    { x: 262, y: 44, t: "calendar" },
    { x: 58, y: 156, t: "docs" },
    { x: 262, y: 156, t: "email" },
  ];
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true">
      {tools.map((t) => (
        <path key={t.t} className={styles.cvFlow} d={`M160 100 L${t.x} ${t.y}`} />
      ))}
      {tools.map((t) => (
        <g key={t.t}>
          <rect className={styles.cvPanel} x={t.x - 36} y={t.y - 14} width="72" height="28" rx="14" />
          <text className={styles.cvNodeText} x={t.x} y={t.y + 3.5} textAnchor="middle">
            {t.t}
          </text>
        </g>
      ))}
      <circle className={styles.cvHalo} cx="160" cy="100" r="40" />
      <circle className={styles.cvAccFill} cx="160" cy="100" r="26" />
      <text className={styles.cvCore} x="160" y="105" textAnchor="middle">
        AI
      </text>
    </svg>
  );
}

function Phones() {
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true">
      <g className={styles.cvBack}>
        <rect className={styles.cvPanel} x="150" y="22" width="92" height="170" rx="16" />
        <rect className={styles.cvBar} x="164" y="46" width="64" height="8" rx="4" />
        <rect className={styles.cvBar} x="164" y="62" width="40" height="8" rx="4" />
        <rect className={styles.cvAccFill} x="164" y="160" width="64" height="16" rx="8" />
      </g>
      <g className={styles.cvFront}>
        <rect className={styles.cvPanel} x="82" y="36" width="92" height="170" rx="16" />
        <rect className={styles.cvBar} x="96" y="60" width="50" height="8" rx="4" />
        {[0, 1, 2].map((i) => (
          <rect key={i} className={styles.cvCell} x={96 + i * 22} y="82" width="18" height="24" rx="5" />
        ))}
        <rect className={styles.cvAccFill} x="140" y="82" width="18" height="24" rx="5" />
        <rect className={styles.cvBar} x="96" y="118" width="64" height="8" rx="4" />
        <rect className={styles.cvBar} x="96" y="134" width="44" height="8" rx="4" />
      </g>
    </svg>
  );
}

const ART: Record<CoverVariant, () => React.JSX.Element> = {
  audit: Audit,
  vmodel: VModel,
  agent: Agent,
  phones: Phones,
};

export default function PostCover({
  variant,
  label,
  large = false,
}: {
  variant: CoverVariant;
  label: string;
  large?: boolean;
}) {
  const Art = ART[variant];
  return (
    <div className={`${styles.cover} ${large ? styles.coverLarge : ""}`}>
      <span className={styles.coverGrid} aria-hidden="true" />
      <div className={styles.coverArt}>
        <Art />
      </div>
      <span className={`${styles.coverLabel} ${home.mono}`}>{label}</span>
    </div>
  );
}
