import type { CSSProperties } from "react";
import home from "./Home.module.css";
import styles from "./StudioBoard.module.css";

/* A live "project room" that illustrates the three About points: who you work with,
   what a week looks like, and the audit trail behind every change. Panels light up
   in turn (driven by `active`), and each replays its animation when it comes on. */

// PLACEHOLDER team: roles, not real people — swap in real names/photos when ready.
const TEAM = [
  { ini: "TL", role: "Tech lead", h: 40 },
  { ini: "PD", role: "Product designer", h: 330 },
  { ini: "ME", role: "Mobile engineer", h: 200 },
  { ini: "QA", role: "QA & validation", h: 150 },
];

const DAYS = [
  { d: "Mon", n: 3 },
  { d: "Tue", n: 5 },
  { d: "Wed", n: 4 },
  { d: "Thu", n: 6 },
  { d: "Fri", n: 4 },
];

const LOG = [
  { t: "16:02", ini: "TL", h: 40, what: "Merged PR #214 · reviewed by ME" },
  { t: "16:10", ini: "QA", h: 150, what: "Test run 128 / 128 passed" },
  { t: "16:25", ini: "TL", h: 40, what: "Release 0.8 signed · Approval" },
];

function Avatar({ ini, h, small = false }: { ini: string; h: number; small?: boolean }) {
  return (
    <span
      className={`${styles.avatar} ${small ? styles.avatarSm : ""}`}
      style={{ "--h": h } as CSSProperties}
    >
      {ini}
    </span>
  );
}

export default function StudioBoard({ active }: { active: number }) {
  const on = (i: number) => (active === i ? "true" : "false");
  return (
    <div className={styles.board}>
      <div className={styles.boardHead}>
        <span className={`${styles.boardTitle} ${home.mono}`}>
          <span className={styles.liveDot} />
          Project room
        </span>
        <span className={`${styles.boardMeta} ${home.mono}`}>Sprint 6 &middot; week 2</span>
      </div>

      {/* 01 — senior hands */}
      <div className={styles.zone} data-on={on(0)}>
        <div className={`${styles.zoneHead} ${home.mono}`}>
          <span>Your team</span>
          <span className={styles.tag}>Same people, start to finish</span>
        </div>
        <div className={styles.team}>
          {TEAM.map((m, i) => (
            <div key={m.ini} className={styles.member} style={{ "--i": i } as CSSProperties}>
              <Avatar ini={m.ini} h={m.h} />
              <span className={styles.role}>{m.role}</span>
            </div>
          ))}
          <div className={`${styles.member} ${styles.you}`} style={{ "--i": 4 } as CSSProperties}>
            <span className={`${styles.avatar} ${styles.avatarYou}`}>You</span>
            <span className={styles.role}>Direct line</span>
          </div>
        </div>
        <div className={styles.bubble}>
          <Avatar ini="TL" h={40} small />
          <span>
            I&rsquo;ll pair with ME on the booking API today &mdash; demo stays on for Friday.
          </span>
        </div>
      </div>

      {/* 02 — working software every Friday */}
      <div className={styles.zone} data-on={on(1)}>
        <div className={`${styles.zoneHead} ${home.mono}`}>
          <span>This week</span>
          <span className={styles.tag}>Demo &middot; Fri 4 PM</span>
        </div>
        <div className={styles.week}>
          {DAYS.map((day, i) => (
            <div
              key={day.d}
              className={`${styles.day} ${i === 4 ? styles.friday : ""}`}
              style={{ "--i": i } as CSSProperties}
            >
              <div className={styles.commits}>
                {Array.from({ length: day.n }, (_, j) => (
                  <span key={j} style={{ "--j": j } as CSSProperties} />
                ))}
              </div>
              <span className={`${styles.dayLabel} ${home.mono}`}>{day.d}</span>
            </div>
          ))}
        </div>
        <div className={styles.demo}>
          <span className={styles.play} />
          <span className={home.mono}>demo.yourproduct.in</span>
          <span className={styles.livePill}>Live</span>
        </div>
      </div>

      {/* 03 — built to be audited */}
      <div className={styles.zone} data-on={on(2)}>
        <div className={`${styles.zoneHead} ${home.mono}`}>
          <span>Audit trail</span>
          <span className={styles.tag}>
            <svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true">
              <path
                d="M4.5 7V5a3.5 3.5 0 0 1 7 0v2M3.5 7h9v6.5h-9z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            Tamper-evident
          </span>
        </div>
        <div className={styles.log}>
          {LOG.map((row, i) => (
            <div key={row.t} className={styles.logRow} style={{ "--i": i } as CSSProperties}>
              <span className={`${styles.logTime} ${home.mono}`}>{row.t}</span>
              <Avatar ini={row.ini} h={row.h} small />
              <span className={styles.logWhat}>{row.what}</span>
              <span className={styles.logOk}>&#10003;</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
