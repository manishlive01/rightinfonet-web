import type { CSSProperties } from "react";
import home from "./Home.module.css";
import styles from "./Work.module.css";

const PV_FIELDS = [
  { k: "Suspect product", v: "Product X 50 mg tablet", c: 98 },
  { k: "Adverse event", v: "Hepatic enzyme increased", c: 94 },
  { k: "Reporter", v: "Healthcare professional", c: 99 },
];

export function PvVisual() {
  return (
    <div className={styles.mock}>
      <div className={styles.window}>
        <div className={styles.winHead}>
          <span className={home.mono}>Case PV-24-0183</span>
          <span className={styles.pillAcc}>Serious</span>
        </div>
        <span className={styles.winSub}>Received 09:14 &middot; Email intake &middot; 3 attachments</span>
        {PV_FIELDS.map((f, i) => (
          <div key={f.k} className={styles.field} style={{ "--i": i } as CSSProperties}>
            <span className={styles.fieldKey}>{f.k}</span>
            <span className={styles.fieldVal}>
              {f.v}
              <span className={styles.aiChip}>AI</span>
            </span>
            <span className={styles.conf}>
              <span className={styles.confFill} style={{ "--w": `${f.c}%` } as CSSProperties} />
            </span>
            <span className={`${styles.confNum} ${home.mono}`}>{f.c}%</span>
          </div>
        ))}
        <div className={styles.winFoot}>
          <span>3 fields pre-filled</span>
          <span className={styles.btnMini}>Send to review &rarr;</span>
        </div>
      </div>
      <span className={`${styles.float} ${styles.floatA} ${home.mono}`}>
        <span className={styles.ok}>&#10003;</span> Audit trail &middot; 12 entries
      </span>
      <span className={`${styles.float} ${styles.floatB} ${home.mono}`}>E-signature ready</span>
    </div>
  );
}

const LIMS_STAGES = ["Registered", "Testing", "Review", "Signed"];
const LIMS_ROWS = [
  { id: "S-10421", test: "Complete blood count", status: "Signed", ok: true },
  { id: "S-10422", test: "HbA1c", status: "In review", ok: false },
  { id: "S-10423", test: "Assay · QC-118", status: "Testing", ok: false },
];

export function LimsVisual() {
  return (
    <div className={styles.mock}>
      <div className={styles.window}>
        <div className={styles.winHead}>
          <span className={home.mono}>Batch QC-118</span>
          <span className={styles.pillOk}>On track</span>
        </div>
        <div className={styles.pipeline}>
          <span className={styles.pipeTrack}>
            <span className={styles.pipeFill} />
          </span>
          {LIMS_STAGES.map((s, i) => (
            <span key={s} className={styles.stageNode} style={{ "--i": i } as CSSProperties}>
              <span className={styles.stageDot} />
              <span className={styles.stageLabel}>{s}</span>
            </span>
          ))}
        </div>
        {LIMS_ROWS.map((r, i) => (
          <div key={r.id} className={styles.sample} style={{ "--i": i } as CSSProperties}>
            <span className={styles.barcode} />
            <span className={`${styles.sampleId} ${home.mono}`}>{r.id}</span>
            <span className={styles.sampleTest}>{r.test}</span>
            <span className={r.ok ? styles.pillOk : styles.pillMuted}>{r.status}</span>
          </div>
        ))}
      </div>
      <span className={`${styles.float} ${styles.floatA} ${home.mono}`}>
        <span className={styles.ok}>&#10003;</span> Instrument data &middot; auto-captured
      </span>
      <span className={`${styles.float} ${styles.floatB} ${styles.sign}`}>
        <span className={home.mono}>Signed &middot; 11:50</span>
        <span className={`${styles.signName} ${home.serif}`}>R. Iyer</span>
      </span>
    </div>
  );
}
