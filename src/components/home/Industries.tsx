"use client";

import { useState, type PointerEvent } from "react";
import home from "./Home.module.css";
import styles from "./Industries.module.css";
import Reveal from "./Reveal";
import SectionHeading, { accent } from "./SectionHeading";
import { INDUSTRIES } from "./data";

/** `bare` drops the section heading, for pages that have their own H1. */
export default function Industries({ bare = false }: { bare?: boolean }) {
  const [active, setActive] = useState(0);

  const hoverOpen = (i: number) => (e: PointerEvent) => {
    if (e.pointerType === "mouse" && window.matchMedia("(min-width: 960px)").matches) setActive(i);
  };

  return (
    <section id="industries" className={home.section} aria-labelledby="industries-title">
      {bare && (
        <h2 id="industries-title" className={home.srOnly}>
          Industries we serve
        </h2>
      )}
      {!bare && (
        <SectionHeading
          kicker="(03) Industries"
          id="industries-title"
          title={["Built for teams where ", accent("errors cost.")]}
          lead="Deep experience where software meets regulation and real-world operations — and the same rigour for every other product we build."
        />
      )}

      <Reveal className={styles.panels}>
        {INDUSTRIES.map((ind, i) => {
          const on = active === i;
          return (
            <div
              key={ind.n}
              className={`${styles.panel} ${on ? styles.panelOn : ""}`}
              onPointerEnter={hoverOpen(i)}
            >
              <span className={`${styles.bigNum} ${home.serif}`} aria-hidden="true">
                {ind.n}
              </span>
              <h3 className={styles.heading}>
                <button
                  type="button"
                  id={`industry-${ind.n}`}
                  className={styles.head}
                  aria-expanded={on}
                  aria-controls={`industry-panel-${ind.n}`}
                  onClick={() => setActive(i)}
                >
                  <span className={`${styles.num} ${home.mono}`}>{ind.n}</span>
                  <span className={styles.name}>{ind.t}</span>
                  <span className={styles.plus} aria-hidden="true" />
                </button>
              </h3>
              <div
                id={`industry-panel-${ind.n}`}
                role="region"
                aria-labelledby={`industry-${ind.n}`}
                className={styles.bodyWrap}
                inert={!on}
              >
                <div className={styles.body}>
                  <p className={`${styles.desc} ${home.serif}`}>{ind.d}</p>
                  <div className={styles.builds}>
                    <span className={`${styles.buildsLabel} ${home.mono}`}>What we build</span>
                    <ul className={styles.buildList}>
                      {ind.builds.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <ul className={home.tagRow} aria-label="Standards and stack">
                    {ind.tags.map((tag) => (
                      <li key={tag} className={`${home.tagPill} ${home.mono}`}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
