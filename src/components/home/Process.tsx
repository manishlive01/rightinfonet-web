"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import home from "./Home.module.css";
import styles from "./Process.module.css";
import SectionHeading, { accent } from "./SectionHeading";
import { PROCESS_STEPS } from "./data";

/** `bare` drops the section heading, for pages that have their own H1. */
export default function Process({ bare = false }: { bare?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [reached, setReached] = useState(-1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = track.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the track's top hits 80% of the viewport, 1 when its bottom reaches 55%.
      const p = Math.min(1, Math.max(0, (vh * 0.8 - r.top) / (r.height + vh * 0.25)));
      track.style.setProperty("--p", p.toFixed(4));
      const n = PROCESS_STEPS.length;
      const next = p <= 0 ? -1 : Math.min(n - 1, Math.floor(p * n + 0.15));
      setReached((prev) => (prev === next ? prev : next));
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
    <section id="process" className={home.section} aria-labelledby="process-title">
      {bare && (
        <h2 id="process-title" className={home.srOnly}>
          How a project runs
        </h2>
      )}
      {!bare && (
        <SectionHeading
          kicker="(04) Process"
          id="process-title"
          title={["Sketch to ", accent("live"), " in four moves."]}
          lead="A calm, predictable way to build software: small steps, working demos every week, and no surprises at the end."
        />
      )}

      <div ref={trackRef} className={styles.track}>
        <span className={styles.line} aria-hidden="true">
          <span className={styles.lineFill} />
        </span>
        <ol className={styles.steps}>
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.n}
              className={`${styles.step} ${i <= reached ? styles.stepOn : ""}`}
              style={{ "--i": i } as CSSProperties}
            >
              <span className={styles.node} aria-hidden="true" />
              <span className={`${styles.num} ${home.serif}`} aria-hidden="true">
                {step.n}
              </span>
              <div className={styles.content}>
                <h3 className={styles.title}>{step.t}</h3>
                <p className={styles.desc}>{step.d}</p>
                <ul className={styles.out}>
                  {step.out.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
                <span className={`${styles.time} ${home.mono}`}>{step.time}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
