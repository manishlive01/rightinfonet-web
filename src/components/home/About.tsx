"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import home from "./Home.module.css";
import styles from "./About.module.css";
import Reveal from "./Reveal";
import SectionHeading, { accent } from "./SectionHeading";
import StudioBoard from "./StudioBoard";
import { prefersReducedMotion, useInView } from "./motion/useInView";
import { ABOUT_POINTS, ABOUT_STATEMENT } from "./data";

const WORDS = ABOUT_STATEMENT.split(" ");

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: false, rootMargin: "0px" });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // the progress bar under the active point drives the cycle: when it fills, move on
  const next = () => {
    if (!prefersReducedMotion()) setActive((a) => (a + 1) % ABOUT_POINTS.length);
  };

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Overshoots past 1 so the final words reach full opacity before the text leaves view.
      const p = ((vh * 0.85 - r.top) / (vh * 0.55 + r.height * 0.6)) * 1.15;
      el.style.setProperty("--p", Math.min(1.2, Math.max(0, p)).toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="about" className={home.section} aria-labelledby="about-title">
      <SectionHeading
        kicker="(05) The studio"
        id="about-title"
        title={["Why teams ", accent("choose us.")]}
      />

      <p ref={textRef} className={`${styles.statement} ${home.serif}`}>
        {WORDS.map((word, i) => (
          <span key={i} className={styles.word} style={{ "--w": i / WORDS.length } as CSSProperties}>
            {word}{" "}
          </span>
        ))}
      </p>

      <div ref={gridRef} className={styles.grid}>
        <Reveal
          className={styles.boardWrap}
          aria-hidden="true"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <StudioBoard active={active} />
        </Reveal>

        <ol className={styles.points}>
          {ABOUT_POINTS.map((point, i) => (
            <Reveal
              as="li"
              key={point.t}
              className={`${styles.point} ${active === i ? styles.pointActive : ""}`}
              delay={i * 0.1}
              onMouseEnter={() => {
                setActive(i);
                setPaused(true);
              }}
              onMouseLeave={() => setPaused(false)}
            >
              <span className={`${styles.pointNum} ${home.mono}`}>0{i + 1}</span>
              <div>
                <h3 className={styles.pointTitle}>{point.t}</h3>
                <p className={styles.pointDesc}>{point.d}</p>
              </div>
              {active === i && (
                <span
                  className={styles.pointBar}
                  data-running={gridInView && !paused ? "true" : "false"}
                  onAnimationEnd={next}
                  aria-hidden="true"
                />
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
