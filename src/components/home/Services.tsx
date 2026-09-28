"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import ServiceVisuals from "./ServiceVisuals";
import SectionHeading, { accent } from "./SectionHeading";
import { SERVICES } from "./data";

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      const sec = sectionRef.current;
      if (!sec) return;
      const mid = window.innerHeight * (window.innerWidth >= 1040 ? 0.5 : 0.78);
      let a = 0;
      blockRefs.current.forEach((block, i) => {
        if (block && block.getBoundingClientRect().top < mid) a = i;
      });
      setActive((prev) => (prev === a ? prev : a));

      const rect = sec.getBoundingClientRect();
      const p = Math.min(
        1,
        Math.max(0, -rect.top / Math.max(1, rect.height - window.innerHeight)),
      );
      if (barRef.current) barRef.current.style.transform = `scaleX(${p.toFixed(4)})`;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        measure();
      });
    };
    measure();
    document.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const activeService = SERVICES[active];

  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <SectionHeading
        kicker="(01) Services"
        id="services-title"
        title={["Software, ", accent("end to end.")]}
        style={{ marginBottom: "clamp(20px,3vw,40px)" }}
        lead={
          <>
            Product design, web platforms, mobile apps, AI agents and regulated software &mdash;
            five disciplines, one team. Scroll to see what each one looks like when it ships.
          </>
        }
      />

      <div ref={sectionRef} className={styles.servicesGrid}>
        <div className={styles.stageSticky} aria-hidden="true">
          <div className={styles.stageCard}>
            <div className={styles.stageGridBg} aria-hidden="true" />
            <div className={styles.stageGlow} aria-hidden="true" />
            <span className={`${styles.stageBigNum} ${styles.serif}`}>{activeService.n}</span>

            <ServiceVisuals active={active} />

            <div className={`${styles.stageTopBar} ${styles.mono}`}>
              <span className={styles.stageTopLeft}>
                <span style={{ color: "var(--acc)" }}>{activeService.n}</span>
                <span>/ 05</span>
                <span className={styles.stageTopDash} />
                <span style={{ color: "var(--fg)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {activeService.t}
                </span>
              </span>
              <span className={styles.stageSegs}>
                {SERVICES.map((_, i) => (
                  <span
                    key={i}
                    className={styles.stageSeg}
                    style={{
                      background:
                        i <= active ? "var(--acc)" : "color-mix(in srgb,var(--fg) 16%,transparent)",
                    }}
                  />
                ))}
              </span>
            </div>

            <div className={`${styles.stageBottomBar} ${styles.mono}`}>
              <span>Scroll</span>
              <span className={styles.stageProgressTrack}>
                <span ref={barRef} className={styles.stageProgressFill} />
              </span>
              <span>bright infonet / services</span>
            </div>
          </div>
        </div>

        <div className={styles.serviceList}>
          {SERVICES.map((service, i) => (
            <div
              key={service.n}
              ref={(el) => {
                blockRefs.current[i] = el;
              }}
              className={styles.serviceBlock}
              style={{
                opacity: active === i ? 1 : 0.22,
                filter: active === i ? "none" : "blur(4px)",
                transform: active === i ? "none" : "translateY(12px)",
              }}
            >
              <span className={`${styles.serviceEyebrow} ${styles.mono}`}>
                {service.n}
                <span className={styles.serviceEyebrowLine} />
                <span className={styles.serviceEyebrowLabel}>Service</span>
              </span>
              <h3 className={`${styles.serviceTitle} ${styles.serif}`}>{service.t}</h3>
              <p className={styles.serviceDesc}>{service.d}</p>
              <div className={styles.serviceGetList}>
                {service.get.map((line) => (
                  <span key={line} className={styles.serviceGetItem}>
                    <span className={styles.serviceGetDot} />
                    {line}
                  </span>
                ))}
              </div>
              <div className={styles.tagRow}>
                {service.tags.map((tag) => (
                  <span key={tag} className={`${styles.tagPill} ${styles.mono}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
