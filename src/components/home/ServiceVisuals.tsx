import styles from "./Home.module.css";
import { VALIDATION_STEPS } from "./data";

function DesignVisual() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "10%",
          top: 0,
          width: "38cqw",
          height: "68cqw",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: 0,
            top: "-3.4cqw",
            fontSize: "1.45cqw",
            color: "var(--dim)",
          }}
          className={styles.mono}
        >
          Onboarding &middot; 390 &times; 844
        </span>
        <div
          style={{
            height: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "2.2cqw",
            padding: "5cqw 3.4cqw 4.4cqw",
            borderRadius: "5cqw",
            background: "var(--bg)",
            border: "1px solid color-mix(in srgb,var(--fg) 16%,transparent)",
          }}
        >
          <span
            style={{
              width: "30%",
              height: "1.2cqw",
              borderRadius: "1cqw",
              background: "color-mix(in srgb,var(--fg) 16%,transparent)",
            }}
          />
          <span
            className={styles.serif}
            style={{ fontSize: "5.6cqw", lineHeight: 0.95, letterSpacing: "-0.02em" }}
          >
            Welcome <span className={styles.accentItalic}>back.</span>
          </span>
          <span
            style={{
              width: "90%",
              height: "1.1cqw",
              borderRadius: "1cqw",
              background: "color-mix(in srgb,var(--fg) 10%,transparent)",
            }}
          />
          <span
            style={{
              width: "62%",
              height: "1.1cqw",
              borderRadius: "1cqw",
              background: "color-mix(in srgb,var(--fg) 10%,transparent)",
            }}
          />
          <span
            style={{
              flex: 1,
              borderRadius: "3cqw",
              border: "1px dashed color-mix(in srgb,var(--fg) 18%,transparent)",
            }}
          />
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "6.4cqw",
              borderRadius: "99px",
              background: "var(--acc)",
              color: "#0d0d0c",
              fontSize: "1.9cqw",
              fontWeight: 600,
            }}
          >
            Continue
          </span>
        </div>
      </div>
      <div
        className={styles.svGlass}
        style={{
          position: "absolute",
          right: 0,
          top: "6cqw",
          width: "42cqw",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.45cqw", color: "var(--dim)" }} className={styles.mono}>
          <span>Button / Primary</span>
          <span style={{ color: "var(--acc)" }}>&#9670; Component</span>
        </div>
        <div style={{ display: "flex", gap: "1.2cqw" }}>
          {["var(--acc)", "var(--fg)", "var(--ok)", "var(--dot)"].map((bg, i) => (
            <span
              key={i}
              style={{
                width: "4.4cqw",
                height: "4.4cqw",
                borderRadius: "50%",
                background: bg,
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1.8cqw", paddingTop: "1.6cqw", borderTop: "1px solid color-mix(in srgb,var(--fg) 12%,transparent)" }}>
          <span className={styles.serif} style={{ fontSize: "7cqw", lineHeight: 1 }}>
            Aa
          </span>
          <span style={{ display: "flex", flexDirection: "column", gap: "0.3cqw", fontSize: "1.5cqw" }}>
            <span style={{ fontWeight: 600 }}>Instrument Serif</span>
            <span style={{ color: "var(--dim)" }}>Display &middot; 48 / 52</span>
          </span>
        </div>
      </div>
    </>
  );
}

function WebVisual() {
  const rows = [
    { id: "#48213", name: "Anika S.", amount: "₹2,340", status: "Paid", ok: true },
    { id: "#48212", name: "Rohit M.", amount: "₹890", status: "Pending", ok: false },
    { id: "#48211", name: "Meera K.", amount: "₹4,120", status: "Paid", ok: true },
  ];
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "90cqw",
          height: "58cqw",
          display: "flex",
          flexDirection: "column",
          borderRadius: "2.4cqw",
          overflow: "hidden",
          background: "var(--bg)",
          border: "1px solid color-mix(in srgb,var(--fg) 12%,transparent)",
        }}
      >
        <div style={{ flex: "none", display: "flex", alignItems: "center", gap: "1cqw", padding: "1.4cqw 1.8cqw", borderBottom: "1px solid color-mix(in srgb,var(--fg) 12%,transparent)" }}>
          <span className={styles.chromeDot} />
          <span className={styles.chromeDot} />
          <span className={styles.chromeDot} />
          <span className={styles.mono} style={{ marginLeft: "2cqw", padding: "0.6cqw 1.4cqw", borderRadius: "1cqw", background: "var(--url)", fontSize: "1.4cqw", color: "var(--dim)" }}>
            admin.clientco.in/orders
          </span>
        </div>
        <div style={{ flex: 1, padding: "2.4cqw 2.6cqw", display: "flex", flexDirection: "column", gap: "1.2cqw", minHeight: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.4cqw" }}>
            <span style={{ fontSize: "2.6cqw", fontWeight: 600, letterSpacing: "-0.02em" }}>Orders</span>
            <span style={{ marginLeft: "auto", padding: "0.7cqw 1.6cqw", borderRadius: "99px", background: "var(--acc)", color: "#0d0d0c", fontSize: "1.4cqw", fontWeight: 600 }}>
              Export
            </span>
          </div>
          {rows.map((row) => (
            <div
              key={row.id}
              className={styles.mono}
              style={{
                display: "grid",
                gridTemplateColumns: "1.1fr 1.4fr 1fr auto",
                alignItems: "center",
                gap: "1.4cqw",
                padding: "1.3cqw 0",
                borderTop: "1px solid color-mix(in srgb,var(--fg) 12%,transparent)",
                fontSize: "1.4cqw",
              }}
            >
              <span style={{ color: "var(--dim)" }}>{row.id}</span>
              <span>{row.name}</span>
              <span>{row.amount}</span>
              <span
                style={{
                  padding: "0.3cqw 1cqw",
                  borderRadius: "99px",
                  fontSize: "1.25cqw",
                  background: row.ok
                    ? "color-mix(in srgb,var(--ok) 18%,transparent)"
                    : "color-mix(in srgb,var(--acc) 18%,transparent)",
                  color: row.ok ? "var(--ok)" : "var(--acc)",
                }}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${styles.svGlass} ${styles.mono}`}
        style={{
          position: "absolute",
          left: "4cqw",
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
          gap: "1.6cqw",
          width: "auto",
        }}
      >
        <span style={{ width: "3.6cqw", height: "3.6cqw", borderRadius: "50%", background: "var(--ok)", color: "#0d0d0c", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8cqw", fontWeight: 700 }}>
          &#10003;
        </span>
        <span style={{ display: "flex", flexDirection: "column", gap: "0.3cqw" }}>
          <span style={{ fontSize: "1.8cqw", fontWeight: 600, fontFamily: "var(--font-geist-sans)" }}>Deployed to production</span>
          <span style={{ fontSize: "1.35cqw", color: "var(--dim)" }}>main &middot; a3f9c1 &middot; 42s</span>
        </span>
      </div>
    </>
  );
}

function MobileVisual() {
  const slots = Array.from({ length: 28 }, (_, i) => i);
  const highlight = new Set([9, 10, 16, 23]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "8cqw",
          top: 0,
          width: "34cqw",
          height: "66cqw",
          boxSizing: "border-box",
          padding: "1cqw",
          borderRadius: "6cqw",
          background: "#050505",
          border: "1px solid color-mix(in srgb,var(--fg) 16%,transparent)",
          transform: "rotate(-4deg)",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "100%",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "2cqw",
            padding: "5.4cqw 2.8cqw 2.8cqw",
            borderRadius: "5cqw",
            background: "#f6f2ea",
            color: "#151412",
            overflow: "hidden",
          }}
        >
          <span style={{ position: "absolute", left: "50%", top: "1.2cqw", transform: "translateX(-50%)", width: "9cqw", height: "2.4cqw", borderRadius: "99px", background: "#050505" }} />
          <span style={{ fontSize: "1.5cqw", color: "#6f695f" }}>Dr. Sharma &middot; Clinic</span>
          <span style={{ fontSize: "3.4cqw", fontWeight: 600, letterSpacing: "-0.03em" }}>Book a slot</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "0.8cqw" }}>
            {slots.map((i) => (
              <span
                key={i}
                style={{
                  aspectRatio: "1",
                  borderRadius: "0.8cqw",
                  background: highlight.has(i) ? "var(--acc)" : "color-mix(in srgb,#f6f2ea 10%,transparent)",
                }}
              />
            ))}
          </div>
          <span
            style={{
              marginTop: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "5cqw",
              borderRadius: "99px",
              background: "#151412",
              color: "#f6f2ea",
              fontSize: "1.6cqw",
              fontWeight: 600,
            }}
          >
            Confirm booking
          </span>
        </div>
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: "-3cqw", display: "flex", justifyContent: "center", gap: "1.2cqw" }}>
        {["iOS", "Android", "One Flutter codebase"].map((label) => (
          <span key={label} className={`${styles.svGlass} ${styles.mono}`} style={{ padding: "0.8cqw 1.6cqw", width: "auto", flexDirection: "row" }}>
            {label}
          </span>
        ))}
      </div>
    </>
  );
}

function AiVisual() {
  const results = [
    { tool: "crm.update", detail: "Deal moved to Friday" },
    { tool: "calendar.book", detail: "Fri 4:00 PM, 3 guests" },
    { tool: "slack.notify", detail: "#sales channel updated" },
  ];
  return (
    <>
      <div
        className={styles.svGlass}
        style={{ position: "absolute", left: 0, top: "22cqw", width: "25cqw" }}
      >
        <span className={styles.mono} style={{ fontSize: "1.3cqw", color: "var(--dim)" }}>
          Trigger &middot; Gmail
        </span>
        <span style={{ fontSize: "1.7cqw", fontWeight: 500, lineHeight: 1.3 }}>
          Client wants to move Friday&rsquo;s demo
        </span>
      </div>
      <div style={{ position: "absolute", left: "38cqw", top: "22cqw", width: "18cqw", height: "18cqw" }}>
        <span style={{ position: "absolute", inset: "-2cqw", borderRadius: "50%", border: "1px dashed var(--acc)", animation: "spin 14s linear infinite" }} />
        <span
          className={styles.mono}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "var(--acc)",
            color: "#0d0d0c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.8cqw",
            fontWeight: 500,
          }}
        >
          AI
        </span>
        <span style={{ position: "absolute", left: "50%", top: "calc(100% + 6cqw)", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3cqw", whiteSpace: "nowrap" }}>
          <span style={{ fontSize: "1.7cqw", fontWeight: 600 }}>Ops Agent</span>
          <span className={styles.mono} style={{ fontSize: "1.3cqw", color: "var(--dim)" }}>
            3 tools &middot; 1.4s
          </span>
        </span>
      </div>
      <div style={{ position: "absolute", left: "62cqw", top: "4cqw", width: "28cqw", display: "flex", flexDirection: "column", gap: "1.4cqw" }}>
        {results.map((r) => (
          <div
            key={r.tool}
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              gap: "0.6cqw",
              padding: "1.8cqw 2cqw",
              borderRadius: "2cqw",
              background: "var(--bg)",
              border: "1px solid color-mix(in srgb,var(--fg) 12%,transparent)",
            }}
          >
            <span className={styles.mono} style={{ fontSize: "1.45cqw" }}>
              <span style={{ color: "var(--ok)" }}>&#10003;</span> {r.tool}
            </span>
            <span style={{ fontSize: "1.45cqw", color: "var(--mut)" }}>{r.detail}</span>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          gap: "2cqw",
          padding: "2cqw 2.4cqw",
          borderRadius: "2cqw",
          background: "var(--stat)",
        }}
      >
        <span className={styles.mono} style={{ fontSize: "1.4cqw", color: "var(--dim)" }}>
          Evals
        </span>
        <span style={{ flex: 1, height: "1cqw", borderRadius: "99px", background: "color-mix(in srgb,var(--fg) 10%,transparent)", overflow: "hidden" }}>
          <span style={{ display: "block", width: "96%", height: "100%", borderRadius: "99px", background: "var(--ok)" }} />
        </span>
        <span className={styles.mono} style={{ fontSize: "1.4cqw" }}>
          48 / 50 passed
        </span>
      </div>
    </>
  );
}

function RegulatedVisual() {
  const log = [
    { time: "10:42:07", who: "A. Mehta edited result", note: "Reason: transcription error" },
    { time: "10:44:51", who: "R. Iyer reviewed batch QC-118", note: "Second-person review" },
    { time: "10:47:30", who: "R. Iyer signed report", note: "Meaning: Approved" },
  ];
  return (
    <>
      <div style={{ position: "absolute", left: 0, right: 0, top: 0 }}>
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(6,minmax(0,1fr))" }}>
          {VALIDATION_STEPS.map((step, i) => {
            const done = i < 5;
            return (
              <span key={step} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.2cqw" }}>
                <span
                  style={{
                    width: "5cqw",
                    height: "5cqw",
                    boxSizing: "border-box",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2cqw",
                    fontWeight: 700,
                    background: done ? "var(--ok)" : "var(--card)",
                    color: done ? "#0d0d0c" : "var(--acc)",
                    border: `1px solid ${done ? "transparent" : "var(--acc)"}`,
                  }}
                >
                  {done ? "✓" : "•"}
                </span>
                <span className={styles.mono} style={{ fontSize: "1.4cqw", color: "var(--mut)" }}>
                  {step}
                </span>
              </span>
            );
          })}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "15cqw",
          width: "58cqw",
          boxSizing: "border-box",
          padding: "2.4cqw 2.6cqw 1.2cqw",
          borderRadius: "2.4cqw",
          background: "var(--bg)",
          border: "1px solid color-mix(in srgb,var(--fg) 12%,transparent)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "1.2cqw" }}>
          <span style={{ fontSize: "1.9cqw", fontWeight: 600 }}>Audit trail</span>
          <span className={styles.mono} style={{ padding: "0.4cqw 1cqw", borderRadius: "99px", border: "1px solid color-mix(in srgb,var(--fg) 12%,transparent)", fontSize: "1.25cqw", color: "var(--mut)" }}>
            Immutable &middot; SHA-256
          </span>
        </div>
        {log.map((entry) => (
          <div
            key={entry.time}
            style={{
              display: "grid",
              gridTemplateColumns: "11cqw minmax(0,1fr)",
              gap: "1.4cqw",
              padding: "1.3cqw 0",
              borderTop: "1px solid color-mix(in srgb,var(--fg) 12%,transparent)",
            }}
          >
            <span className={styles.mono} style={{ fontSize: "1.35cqw", color: "var(--dim)" }}>
              {entry.time}
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "0.3cqw" }}>
              <span style={{ fontSize: "1.55cqw", fontWeight: 500 }}>{entry.who}</span>
              <span style={{ fontSize: "1.35cqw", color: "var(--dim)" }}>{entry.note}</span>
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "34cqw",
          width: "36cqw",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "1.4cqw",
          padding: "2.6cqw",
          borderRadius: "2.4cqw",
          background: "#f6f2ea",
          color: "#151412",
          boxShadow: "0 4cqw 8cqw var(--sh1)",
        }}
      >
        <span className={styles.mono} style={{ fontSize: "1.3cqw", letterSpacing: "0.04em", textTransform: "uppercase", color: "#6f695f" }}>
          Electronic signature
        </span>
        <span style={{ fontSize: "2cqw", fontWeight: 600 }}>Dr. R. Iyer</span>
        <span
          className={styles.serif}
          style={{ paddingBottom: "0.8cqw", borderBottom: "1px solid #151412", fontStyle: "italic", fontSize: "6cqw", lineHeight: 1 }}
        >
          R. Iyer
        </span>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "1.4cqw" }}>
          <span>Meaning: Approved</span>
          <span className={styles.mono} style={{ padding: "0.4cqw 1cqw", borderRadius: "99px", background: "var(--acc)", color: "#0d0d0c", fontSize: "1.25cqw" }}>
            &#10003; 11.50
          </span>
        </span>
      </div>
      <div style={{ position: "absolute", left: 0, bottom: "-2cqw", display: "flex", gap: "1.2cqw" }}>
        {["ALCOA+", "21 CFR Part 11", "EU Annex 11"].map((label) => (
          <span key={label} className={`${styles.svGlass} ${styles.mono}`} style={{ padding: "0.8cqw 1.6cqw", width: "auto", flexDirection: "row" }}>
            {label}
          </span>
        ))}
      </div>
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
            className={styles.stageVisual}
            style={{
              opacity: on ? 1 : 0,
              transform: on ? "none" : i < active ? "translateY(-5cqw) scale(.97)" : "translateY(5cqw) scale(.97)",
            }}
          >
            <Visual />
          </div>
        );
      })}
    </>
  );
}
