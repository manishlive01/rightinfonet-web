"use client";

import type { PointerEvent } from "react";
import home from "./Home.module.css";
import styles from "./Work.module.css";
import InView from "./motion/InView";
import { LimsVisual, PvVisual } from "./WorkVisuals";
import type { WORK } from "./data";

type WorkItem = (typeof WORK)[number];

function trackPointer(e: PointerEvent<HTMLDivElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export default function WorkCard({ item, total, flip }: { item: WorkItem; total: number; flip: boolean }) {
  return (
    <InView
      as="article"
      className={`${styles.card} ${flip ? styles.flip : ""}`}
      aria-labelledby={`work-${item.id}`}
    >
      {/* PLACEHOLDER visual: swap for a real product screenshot or video when available. */}
      <div className={styles.visual} onPointerMove={trackPointer} aria-hidden="true">
        <div className={styles.visualInner}>{item.id === "pvgenix" ? <PvVisual /> : <LimsVisual />}</div>
        <span className={styles.spot} />
        <span className={`${styles.kind} ${home.mono}`}>{item.kind}</span>
      </div>

      <div className={styles.body}>
        <span className={`${styles.index} ${home.mono}`}>
          {item.n} <span className={styles.indexTotal}>/ 0{total}</span>
        </span>
        <h3 id={`work-${item.id}`} className={`${styles.name} ${home.serif}`}>
          {item.name}
        </h3>
        <p className={styles.headline}>{item.headline}</p>
        <p className={styles.desc}>{item.description}</p>

        <dl className={styles.highlights}>
          {item.highlights.map((h, i) => (
            <div key={h.k} className={styles.highlight} style={{ transitionDelay: `${0.25 + i * 0.08}s` }}>
              <dt className={home.mono}>{h.k}</dt>
              <dd>{h.v}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.footRow}>
          <ul className={home.tagRow} aria-label="Capabilities">
            {item.tags.map((tag) => (
              <li key={tag} className={home.tagPill}>
                {tag}
              </li>
            ))}
          </ul>
          <a href="#contact" className={styles.link}>
            Request a walkthrough
            <span className={styles.linkIcon} aria-hidden="true">
              &#8599;
            </span>
          </a>
        </div>
      </div>
    </InView>
  );
}
