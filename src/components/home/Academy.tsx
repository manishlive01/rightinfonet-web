"use client";

import { useState } from "react";
import styles from "./Home.module.css";
import Reveal from "./Reveal";
import { ACADEMY_PILLARS, TRACKS } from "./data";

export default function Academy() {
  const [trackIndex, setTrackIndex] = useState(0);
  const track = TRACKS[trackIndex];

  return (
    <section id="academy" className={styles.academyOuter}>
      <div className={styles.academyPanel}>
        <div className={styles.academyRingA} aria-hidden="true" />
        <div className={styles.academyRingB} aria-hidden="true" />

        <Reveal className={styles.academyTopRow}>
          <span className={styles.academyBrand}>
            <span className={styles.academyBrandRing}>
              <span className={styles.academyBrandDot} />
            </span>
            bright infonet <span className={styles.academyBadge}>Academy</span>
          </span>
          <span className={`${styles.academyOpenPill} ${styles.mono}`}>
            <span className={styles.academyPulseDot} />
            Applications open
          </span>
        </Reveal>

        <Reveal as="h2" className={`${styles.academyHeadline} ${styles.serif}`}>
          Learn where the <span style={{ fontStyle: "italic", color: "var(--aem)" }}>real work</span> happens.
        </Reveal>

        <Reveal className={styles.academyIntroRow}>
          <p className={styles.academyIntroText}>
            The training arm of our studio. Small cohorts learn from the engineers who ship
            our client work &mdash; and graduate with a portfolio of real, code-reviewed
            projects.
          </p>
          <div className={styles.academyActions}>
            <a href="#" className={styles.btnDark}>
              Apply for next cohort <span>&rarr;</span>
            </a>
            <a href="#" className={styles.linkUnderlineDark}>
              Download syllabus
            </a>
          </div>
        </Reveal>

        <Reveal className={styles.academyGrid}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className={`${styles.trackListLabel} ${styles.mono}`}>Choose a track</span>
            {TRACKS.map((t, i) => {
              const on = trackIndex === i;
              return (
                <button
                  key={t.n}
                  type="button"
                  className={styles.trackBtn}
                  onClick={() => setTrackIndex(i)}
                  onMouseEnter={() => setTrackIndex(i)}
                  style={{ opacity: on ? 1 : 0.5, paddingLeft: on ? 14 : 0 }}
                >
                  <span className={`${styles.trackBtnNum} ${styles.mono}`} style={{ color: on ? "var(--aem)" : "inherit" }}>
                    {t.n}
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                    <span className={styles.trackBtnTitle}>{t.t}</span>
                    <span className={styles.trackBtnStack}>{t.stack}</span>
                  </span>
                  <span className={`${styles.trackBtnWeeks} ${styles.mono}`}>{t.wk} wks</span>
                </button>
              );
            })}
          </div>

          <div className={styles.trackCard}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className={styles.trackPillRow}>
                <span className={`${styles.trackPillDark} ${styles.mono}`}>{track.wk} weeks</span>
                <span className={`${styles.trackPillOutline} ${styles.mono}`}>{track.format}</span>
                <span className={`${styles.trackPillOutline} ${styles.mono}`}>{track.level}</span>
              </div>
              <h3 className={`${styles.trackCardTitle} ${styles.serif}`}>{track.t}</h3>
              <p className={styles.trackCardPitch}>{track.pitch}</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className={`${styles.syllabusHead} ${styles.mono}`}>
                <span>Syllabus</span>
                <span>Wk 1 &rarr; {track.wk}</span>
              </div>
              {track.mods.map((mod) => (
                <div key={mod.t} className={styles.moduleRow}>
                  <span style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 0 }}>
                    <span className={styles.moduleTitle}>{mod.t}</span>
                    <span className={styles.moduleDesc}>{mod.d}</span>
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span className={styles.moduleBarTrack}>
                      <span
                        className={styles.moduleBarFill}
                        style={{
                          left: `${((mod.a - 1) / track.wk) * 100}%`,
                          width: `${((mod.b - mod.a + 1) / track.wk) * 100}%`,
                        }}
                      />
                    </span>
                    <span className={`${styles.moduleWeek} ${styles.mono}`}>
                      {mod.a === mod.b ? `Wk ${mod.a}` : `Wk ${mod.a}–${mod.b}`}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.shipRow}>
              <span style={{ display: "flex", flexDirection: "column", gap: 6, minWidth: 0, flex: "1 1 260px" }}>
                <span className={`${styles.shipLabel} ${styles.mono}`}>You&rsquo;ll ship</span>
                <span style={{ fontSize: 17, lineHeight: 1.45, fontWeight: 500 }}>{track.cap}</span>
              </span>
              <a href="#" className={styles.applyTrackBtn}>
                Apply to this track &rarr;
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.academyPillarsGrid}>
          {ACADEMY_PILLARS.map((pillar) => (
            <div key={pillar.letter} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span className={`${styles.pillarLetter} ${styles.mono}`}>{pillar.letter}</span>
              <span className={styles.pillarTitle}>{pillar.t}</span>
              <span className={styles.pillarDesc}>{pillar.d}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
