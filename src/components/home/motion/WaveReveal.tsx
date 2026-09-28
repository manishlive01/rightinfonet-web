"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./WaveReveal.module.css";
import { prefersReducedMotion } from "./useInView";

/**
 * Covers its section with a curtain whose leading edge is a wave, then sweeps it
 * left → right when the section scrolls into view. The curtain is only armed after
 * hydration and only for off-screen sections, so no-JS visitors and crawlers always
 * see the content.
 */
export default function WaveReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    const offscreen = r.top > window.innerHeight * 0.9 || r.bottom < 0;
    if (!offscreen) return;

    el.dataset.wave = "armed";
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        el.dataset.wave = "play";
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onDone = () => {
    if (ref.current?.dataset.wave === "play") ref.current.dataset.wave = "done";
  };

  return (
    <div ref={ref} className={styles.wrap}>
      {children}
      <div className={styles.curtain} aria-hidden="true" onTransitionEnd={onDone}>
        <span className={`${styles.strip} ${styles.stripAcc}`} />
        <span className={`${styles.strip} ${styles.stripMid}`} />
        <span className={`${styles.strip} ${styles.stripBg}`} />
        <span className={styles.fill} />
      </div>
    </div>
  );
}
