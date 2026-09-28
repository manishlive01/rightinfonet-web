import type { CSSProperties, JSX } from "react";
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

const BOOK_DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const BOOK_SLOTS = ["9:30", "10:15", "11:00", "12:30", "4:00", "5:15"];

export function BookingVisual() {
  return (
    <div className={styles.mock}>
      <div className={styles.phone}>
        <div className={styles.phoneHead}>
          <span className={styles.avatar}>DS</span>
          <span className={styles.phoneWho}>
            <strong>Dr. Sharma</strong>
            <span>General physician &middot; City Clinic</span>
          </span>
        </div>
        <span className={styles.phoneLabel}>Book a slot &middot; May</span>
        <div className={styles.days}>
          {BOOK_DAYS.map((d, i) => (
            <span
              key={i}
              className={`${styles.day} ${i === 3 ? styles.dayOn : ""} ${i > 4 ? styles.dayOff : ""}`}
              style={{ "--i": i } as CSSProperties}
            >
              <span>{d}</span>
              <b>{12 + i}</b>
            </span>
          ))}
        </div>
        <div className={styles.slots}>
          {BOOK_SLOTS.map((t, i) => (
            <span
              key={t}
              className={`${styles.slot} ${i === 2 ? styles.slotOn : ""}`}
              style={{ "--i": i } as CSSProperties}
            >
              {t}
            </span>
          ))}
        </div>
        <span className={styles.phoneBtn}>Confirm booking</span>
      </div>
      <span className={`${styles.float} ${styles.floatA} ${home.mono}`}>
        <span className={styles.ok}>&#10003;</span> Reminder sent &middot; WhatsApp
      </span>
      <span className={`${styles.float} ${styles.floatB} ${home.mono}`}>iOS &middot; Android</span>
    </div>
  );
}

const AGENT_TOOLS = ["calendar.update", "crm.update", "email.send"];

export function AgentVisual() {
  return (
    <div className={styles.mock}>
      <div className={styles.window}>
        <div className={styles.winHead}>
          <span className={home.mono}>Ops agent</span>
          <span className={styles.pillOk}>Connected</span>
        </div>
        <div className={`${styles.msg} ${styles.msgUser}`} style={{ "--i": 0 } as CSSProperties}>
          Client asked to move Tuesday&rsquo;s demo to Friday afternoon.
        </div>
        <div className={styles.tools} style={{ "--i": 1 } as CSSProperties}>
          {AGENT_TOOLS.map((t, i) => (
            <span key={t} className={`${styles.tool} ${home.mono}`} style={{ "--j": i } as CSSProperties}>
              <span className={styles.ok}>&#10003;</span> {t}
            </span>
          ))}
        </div>
        <div className={`${styles.msg} ${styles.msgAgent}`} style={{ "--i": 2 } as CSSProperties}>
          Done. Demo moved to <strong>Fri, 4:00 PM</strong>, CRM updated and the client has the new invite.
        </div>
      </div>
      <span className={`${styles.float} ${styles.floatA} ${home.mono}`}>
        <span className={styles.ok}>&#10003;</span> Evals &middot; 48 / 50 passed
      </span>
      <span className={`${styles.float} ${styles.floatB} ${home.mono}`}>3 tools &middot; 1.4s</span>
    </div>
  );
}

export const WORK_VISUALS: Record<string, () => JSX.Element> = {
  pvgenix: PvVisual,
  lims: LimsVisual,
  clinic: BookingVisual,
  "ops-agent": AgentVisual,
};
