"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import home from "./Home.module.css";
import styles from "./About.module.css";
import Reveal from "./Reveal";
import SectionHeading, { accent } from "./SectionHeading";
import { ABOUT_POINTS, ABOUT_STATEMENT } from "./data";

const WORDS = ABOUT_STATEMENT.split(" ");

export default function About() {
  const textRef = useRef<HTMLParagraphElement>(null);

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

      <div className={styles.grid}>
        {/* PLACEHOLDER: replace with a real team or studio photo (next/image). */}
        <Reveal className={styles.photo} aria-hidden="true">
          <span className={styles.photoGrain} />
          <span className={`${styles.photoLabel} ${home.mono}`}>Studio photo</span>
          <span className={`${styles.photoCaption} ${home.mono}`}>Bright Infonet &middot; India</span>
        </Reveal>

        <ol className={styles.points}>
          {ABOUT_POINTS.map((point, i) => (
            <Reveal as="li" key={point.t} className={styles.point} delay={i * 0.1}>
              <span className={`${styles.pointNum} ${home.mono}`}>0{i + 1}</span>
              <div>
                <h3 className={styles.pointTitle}>{point.t}</h3>
                <p className={styles.pointDesc}>{point.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
