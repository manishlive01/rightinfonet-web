"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import home from "./Home.module.css";
import s from "./ServiceVisuals.module.css";
import { VALIDATION_STEPS } from "./data";

type VisualProps = { on: boolean };

/** Counts 0..count-1 every `ms` while the visual is on; the parent remounts it to restart. */
function useStep(on: boolean, count: number, ms: number) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!on) return;
    const id = setInterval(() => setStep((v) => (v + 1) % count), ms);
    return () => clearInterval(id);
  }, [on, count, ms]);
  return step;
}

/** Entrance wrapper: rises into place with a stagger when its visual becomes active. */
function Pop({ d, className = "", style, children }: { d: number; className?: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <div className={`${s.pop} ${className}`} style={{ ...style, "--d": `${d}s` } as CSSProperties}>
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- 01 design */

const SWATCHES = ["var(--acc)", "#8fb3ff", "var(--ok)", "#f2c14e"];

function DesignVisual({ on }: VisualProps) {
  const pick = useStep(on, SWATCHES.length, 1800);
  return (
    <>
      <Pop d={0.05} className={s.dFrame}>
        <span className={`${s.caption} ${home.mono}`}>Onboarding · 390 × 844</span>
        <div className={s.dScreen}>
          <span className={s.dBar} />
          <span className={`${s.dTitle} ${home.serif}`}>
            Welcome <span className={home.accentItalic}>back.</span>
          </span>
          <span className={s.dLine} style={{ width: "90%" }} />
          <span className={s.dLine} style={{ width: "62%" }} />
          <span className={s.dImage} />
          <span className={s.dButton} style={{ background: SWATCHES[pick] }}>
            Continue
            <span className={`${s.handle} ${s.hTL}`} />
            <span className={`${s.handle} ${s.hTR}`} />
            <span className={`${s.handle} ${s.hBL}`} />
            <span className={`${s.handle} ${s.hBR}`} />
            <span className={`${s.sizeTag} ${home.mono}`}>312 × 52</span>
          </span>
        </div>
      </Pop>

      <Pop d={0.18} className={s.dInspector}>
        <div className={`${s.row} ${home.mono}`}>
          <span className={s.dim}>Button / Primary</span>
          <span className={s.accText}>◆ Component</span>
        </div>
        <div className={s.col}>
          <span className={`${s.label} ${home.mono}`}>Fill</span>
          <div className={s.swatches}>
            {SWATCHES.map((c, i) => (
              <span key={c} className={`${s.swatch} ${i === pick ? s.swatchOn : ""}`} style={{ background: c }} />
            ))}
            <span className={`${s.swatch} ${s.swatchEmpty}`} />
          </div>
        </div>
        <div className={s.typeRow}>
          <span className={`${s.aa} ${home.serif}`}>Aa</span>
          <span className={s.col}>
            <span className={s.strong}>Instrument Serif</span>
            <span className={s.dim}>Display · 48 / 52</span>
          </span>
        </div>
        <div className={`${s.props} ${home.mono}`}>
          <span><span className={s.dim}>W </span>312</span>
          <span><span className={s.dim}>H </span>52</span>
          <span><span className={s.dim}>R </span>999</span>
          <span><span className={s.dim}>Gap </span>16</span>
        </div>
      </Pop>

      <div className={`${s.cursor} ${s.cursorA}`}>
        <svg viewBox="0 0 12 14" className={s.cursorIcon}>
          <path d="M0 0 L12 8 L6.5 8.6 L4 14 Z" />
        </svg>
        <span className={s.cursorName}>Priya</span>
      </div>
      <div className={`${s.cursor} ${s.cursorB}`}>
        <svg viewBox="0 0 12 14" className={s.cursorIcon}>
          <path d="M0 0 L12 8 L6.5 8.6 L4 14 Z" />
        </svg>
        <span className={s.cursorName}>Arjun</span>
      </div>
    </>
  );
}

/* ---------------------------------------------------------------- 02 web */

const ORDERS = [
  { id: "#48211", name: "Meera K.", amt: "₹4,120", paid: true },
  { id: "#48212", name: "Rohit M.", amt: "₹890", paid: false },
  { id: "#48213", name: "Anika S.", amt: "₹2,340", paid: true },
  { id: "#48214", name: "Vikram R.", amt: "₹780", paid: true },
  { id: "#48215", name: "Sara D.", amt: "₹3,240", paid: false },
  { id: "#48216", name: "Karan P.", amt: "₹1,560", paid: true },
];
const LATENCY = [40, 55, 35, 60, 48, 70, 52, 44, 62, 38];

function WebVisual({ on }: VisualProps) {
  // every tick a newer order lands on top of the table
  const tick = useStep(on, ORDERS.length, 2200);
  const newest = (2 + tick) % ORDERS.length;
  const rows = [0, 1, 2].map((j) => ORDERS[(newest - j + ORDERS.length) % ORDERS.length]);

  return (
    <>
      <Pop d={0.05} className={s.wWindow}>
        <div className={s.chrome}>
          <span className={s.chromeDot} />
          <span className={s.chromeDot} />
          <span className={s.chromeDot} />
          <span className={`${s.url} ${home.mono}`}>admin.clientco.in/orders</span>
        </div>
        <div className={s.wBody}>
          <div className={s.wSide}>
            <span className={s.wBrand}>
              <span className={s.wBrandDot} />
              ClientCo
            </span>
            <span>Overview</span>
            <span className={s.wSideOn}>Orders</span>
            <span>Inventory</span>
            <span>Team</span>
          </div>
          <div className={s.wMain}>
            <div className={s.wHead}>
              <span className={s.wTitle}>Orders</span>
              <span className={s.live}>
                <span className={s.liveDot} />
                Live
              </span>
              <span className={s.wExport}>Export</span>
            </div>
            <div className={s.chart}>
              <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                <path className={s.chartFill} d="M0 32 L10 28 L20 30 L30 22 L40 24 L50 16 L60 19 L70 11 L80 13 L90 6 L100 8 L100 40 L0 40 Z" />
                <path
                  className={s.chartLine}
                  d="M0 32 L10 28 L20 30 L30 22 L40 24 L50 16 L60 19 L70 11 L80 13 L90 6 L100 8"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              <span className={s.chartPoint} />
            </div>
            <div className={s.table}>
              {rows.map((r, i) => (
                <div key={r.id} className={`${s.tRow} ${home.mono} ${i === 0 && tick > 0 ? s.tRowNew : ""}`}>
                  <span className={s.dim}>{r.id}</span>
                  <span>{r.name}</span>
                  <span>{r.amt}</span>
                  <span className={r.paid ? s.pillOk : s.pillAcc}>{r.paid ? "Paid" : "Pending"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Pop>

      <Pop d={0.2} className={s.wToast}>
        <span className={s.toastIcon}>
          <span className={s.spinner} />
          <span className={s.check}>✓</span>
        </span>
        <span className={s.col}>
          <span className={s.toastTitle}>
            <span className={s.toastBuilding}>Deploying to production…</span>
            <span className={s.toastDone}>Deployed to production</span>
          </span>
          <span className={`${s.dim} ${home.mono}`}>main · a3f9c1 · 42s</span>
        </span>
      </Pop>

      <Pop d={0.32} className={s.wLatency}>
        <span className={`${s.dim} ${home.mono}`}>p95 latency</span>
        <span className={s.latValue}>
          180<span className={s.latUnit}>ms</span>
        </span>
        <div className={s.latBars}>
          {LATENCY.map((h, i) => (
            <span
              key={i}
              className={`${s.latBar} ${i === 5 ? s.latBarAcc : ""}`}
              style={{ height: `${h}%`, animationDelay: `${-i * 0.37}s` } as CSSProperties}
            />
          ))}
        </div>
      </Pop>
    </>
  );
}

/* ---------------------------------------------------------------- 03 mobile */

const CAL = Array.from({ length: 28 }, (_, i) => i);
const OPEN_DAYS = [9, 10, 12, 16, 23];
const SLOTS = ["10:30", "11:00", "11:30"];

function MobileVisual({ on }: VisualProps) {
  const pick = useStep(on, OPEN_DAYS.length, 1500);
  return (
    <>
      <Pop d={0.05} className={s.mPhoneA}>
        <div className={s.bob}>
          <div className={s.phone} style={{ transform: "rotate(-6deg)" }}>
            <div className={`${s.screen} ${s.screenLight}`}>
              <span className={s.notch} />
              <span className={s.col}>
                <span className={s.mSub}>Good morning,</span>
                <span className={s.mName}>Anika</span>
              </span>
              <div className={s.balance}>
                <span className={s.balLabel}>Balance</span>
                <span className={s.balValue}>₹12,480</span>
                <span className={s.balLabel}>+₹1,200 this week</span>
                <span className={s.shine} />
              </div>
              {[
                ["Groceries", "Today", "−₹640", "#e7e0d3"],
                ["Salary", "Mon", "+₹42k", "#cfdcc0"],
                ["Metro card", "Sun", "−₹200", "#e7e0d3"],
              ].map(([t, d, a, c], i) => (
                <div key={t} className={s.txn} style={{ "--i": i } as CSSProperties}>
                  <span className={s.txnIcon} style={{ background: c }} />
                  <span className={s.txnText}>
                    <span className={s.strong}>{t}</span>
                    <span className={s.mSub}>{d}</span>
                  </span>
                  <span className={s.strong}>{a}</span>
                </div>
              ))}
              <div className={s.tabbar}>
                <span className={s.tabOn} />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </Pop>

      <Pop d={0.18} className={s.mPhoneB}>
        <div className={`${s.bob} ${s.bobLate}`}>
          <div className={s.phone} style={{ transform: "rotate(5deg)" }}>
            <div className={`${s.screen} ${s.screenDark}`}>
              <span className={s.notch} />
              <span className={s.col}>
                <span className={s.mSubDark}>Dr. Sharma · Clinic</span>
                <span className={s.mName}>Book a slot</span>
              </span>
              <div className={s.cal}>
                {CAL.map((i) => (
                  <span
                    key={i}
                    className={`${s.day} ${OPEN_DAYS.includes(i) ? s.dayOpen : ""} ${i === OPEN_DAYS[pick] ? s.dayPick : ""}`}
                  />
                ))}
              </div>
              <div className={s.slots}>
                {SLOTS.map((t, i) => (
                  <span key={t} className={`${s.slot} ${i === pick % SLOTS.length ? s.slotOn : ""}`}>
                    {t}
                  </span>
                ))}
              </div>
              <span className={s.confirm}>Confirm booking</span>
            </div>
          </div>
        </div>
      </Pop>

      <Pop d={0.3} className={s.chips}>
        {["iOS", "Android", "One Flutter codebase"].map((label) => (
          <span key={label} className={`${s.chip} ${home.mono}`}>
            {label}
          </span>
        ))}
      </Pop>
    </>
  );
}

/* ---------------------------------------------------------------- 04 ai */

const TOOLS = [
  { tool: "crm.update", detail: "Deal moved to Friday" },
  { tool: "calendar.book", detail: "Fri 4:00 PM, 3 guests" },
  { tool: "slack.notify", detail: "#sales channel updated" },
];
const FLOWS = ["M25 31 L36 31", "M54 31 C58 31 58 11 62 11", "M54 31 L62 31", "M54 31 C58 31 58 51 62 51"];

function AiVisual({ on }: VisualProps) {
  // 0: reading, 1..3: tools run one by one, 4-5: all done (hold), then repeat
  const step = useStep(on, 6, 900);
  return (
    <>
      <svg className={s.flows} viewBox="0 0 90 75" preserveAspectRatio="none">
        {FLOWS.map((d) => (
          <path key={d} d={d} className={s.flow} vectorEffect="non-scaling-stroke" />
        ))}
        {on &&
          FLOWS.map((d, i) => (
            <circle key={d} r="0.9" className={s.pulse}>
              <animateMotion dur="1.8s" begin={`${i === 0 ? 0 : 0.6 + i * 0.25}s`} repeatCount="indefinite" path={d} />
            </circle>
          ))}
      </svg>

      <Pop d={0.05} className={s.aTrigger}>
        <span className={`${s.dim} ${home.mono}`}>
          <span className={s.incoming} /> Trigger · Gmail
        </span>
        <span className={s.strongLg}>Client wants to move Friday’s demo</span>
      </Pop>

      <Pop d={0.1} className={s.aCore}>
        <span className={s.ripple} />
        <span className={s.ripple} style={{ animationDelay: "1.2s" }} />
        <span className={s.ringDash} />
        <span className={s.ringSoft} />
        <span className={`${s.orb} ${home.mono}`}>AI</span>
        <span className={s.coreLabel}>
          <span className={s.strong}>Ops Agent</span>
          <span className={`${s.dim} ${home.mono}`}>{step === 0 ? "reading email…" : `${Math.min(step, 3)} / 3 tools · 1.4s`}</span>
        </span>
      </Pop>

      {TOOLS.map((t, i) => {
        const done = step > i + 1 || step >= 4;
        const running = step === i + 1;
        return (
          <Pop key={t.tool} d={0.16 + i * 0.07} className={s.aTool} style={{ top: `${4 + i * 20}cqw` }}>
            <span className={`${home.mono} ${s.toolName}`}>
              <span className={`${s.toolState} ${done ? s.toolDone : running ? s.toolRun : ""}`}>{done ? "✓" : ""}</span>
              {t.tool}
            </span>
            <span className={s.dim}>{t.detail}</span>
          </Pop>
        );
      })}

      <Pop d={0.36} className={s.evals}>
        <span className={`${s.dim} ${home.mono}`}>Evals</span>
        <span className={s.evalTrack}>
          <span className={s.evalFill} />
        </span>
        <span className={home.mono}>48 / 50 passed</span>
      </Pop>
    </>
  );
}

/* ---------------------------------------------------------------- 05 regulated */

const LOG = [
  { time: "10:42:07", who: "A. Mehta edited result", note: "Reason: transcription error" },
  { time: "10:44:51", who: "R. Iyer reviewed batch QC-118", note: "Second-person review" },
  { time: "10:46:12", who: "System locked record", note: "Pending e-signature" },
  { time: "10:47:30", who: "R. Iyer signed report", note: "Meaning: Approved" },
];

function RegulatedVisual({ on }: VisualProps) {
  // validation steps complete one by one, then hold before restarting
  const step = useStep(on, VALIDATION_STEPS.length + 3, 700);
  const done = Math.min(step, VALIDATION_STEPS.length);
  return (
    <>
      <Pop d={0.05} className={s.rSteps}>
        <span className={s.rTrack}>
          <span className={s.rTrackFill} style={{ transform: `scaleX(${done / (VALIDATION_STEPS.length - 1)})` }} />
        </span>
        {VALIDATION_STEPS.map((label, i) => {
          const ok = i < done;
          return (
            <span key={label} className={s.rStep}>
              <span className={`${s.rNode} ${ok ? s.rNodeOk : i === done ? s.rNodeNow : ""}`}>{ok ? "✓" : "•"}</span>
              <span className={`${s.dim} ${home.mono}`}>{label}</span>
            </span>
          );
        })}
      </Pop>

      <Pop d={0.14} className={s.rLog}>
        <div className={s.row}>
          <span className={s.strong}>Audit trail</span>
          <span className={`${s.badge} ${home.mono}`}>Immutable · SHA-256</span>
        </div>
        {LOG.map((e, i) => (
          <div key={e.time} className={s.logRow} style={{ "--i": i } as CSSProperties}>
            <span className={`${s.dim} ${home.mono}`}>{e.time}</span>
            <span className={s.col}>
              <span className={s.strong}>{e.who}</span>
              <span className={s.dim}>{e.note}</span>
            </span>
          </div>
        ))}
      </Pop>

      <Pop d={0.26} className={s.rSign}>
        <span className={`${s.signLabel} ${home.mono}`}>Electronic signature</span>
        <span className={s.col}>
          <span className={s.strong}>Dr. R. Iyer</span>
          <span className={s.signSub}>QA Manager</span>
        </span>
        <span className={`${s.signature} ${home.serif}`}>R. Iyer</span>
        <span className={s.row}>
          <span>Meaning: Approved</span>
          <span className={`${s.stamp} ${home.mono}`}>✓ 11.50</span>
        </span>
      </Pop>

      <Pop d={0.34} className={s.rChips}>
        {["ALCOA+", "21 CFR Part 11", "EU Annex 11"].map((label) => (
          <span key={label} className={`${s.chip} ${home.mono}`}>
            {label}
          </span>
        ))}
      </Pop>
    </>
  );
}

const VISUALS = [DesignVisual, WebVisual, MobileVisual, AiVisual, RegulatedVisual];

export default function ServiceVisuals({ active }: { active: number }) {
  return (
    <>
      {VISUALS.map((Visual, i) => {
        const on = active === i;
        return (
          <div
            key={i}
            className={`${home.stageVisual} ${s.vis}`}
            data-on={on}
            style={{
              opacity: on ? 1 : 0,
              transform: on ? "none" : i < active ? "translateY(-5cqw) scale(.97)" : "translateY(5cqw) scale(.97)",
            }}
          >
            {/* remounting on activation restarts each visual's live sequence from the top */}
            <Visual key={on ? "on" : "off"} on={on} />
          </div>
        );
      })}
    </>
  );
}
