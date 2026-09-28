"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import { BAR_HEIGHTS, TABS } from "./data";
import SplitText from "./motion/SplitText";
import { prefersReducedMotion } from "./motion/useInView";

function useInterval(callback: () => void, delayMs: number) {
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const id = setInterval(() => savedCallback.current(), delayMs);
    return () => clearInterval(id);
  }, [delayMs]);
}

function useStageTilt() {
  const sectionRef = useRef<HTMLElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const tilt = tiltRef.current;
    if (!section || !tilt) return;
    if (!window.matchMedia("(pointer: fine)").matches || prefersReducedMotion()) return;

    let raf = 0;
    let x = 0;
    let y = 0;
    const apply = () => {
      raf = 0;
      tilt.style.setProperty("--mx", x.toFixed(3));
      tilt.style.setProperty("--my", y.toFixed(3));
    };
    const onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      x = (e.clientX - r.left) / r.width - 0.5;
      y = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      x = 0;
      y = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return { sectionRef, tiltRef };
}

export default function Hero() {
  const [active, setActive] = useState(0);
  const [chatStep, setChatStep] = useState(0);
  const { sectionRef, tiltRef } = useStageTilt();

  useInterval(() => setActive((a) => (a + 1) % 3), 6000);
  useInterval(() => setChatStep((s) => (s + 1) % 8), 1100);

  const typing = chatStep === 1;
  const tools = chatStep >= 2;
  const reply = chatStep >= 3;

  const panelState = (i: number, base: number) => {
    const on = active === i;
    return {
      zIndex: on ? 5 : base,
      opacity: on ? 1 : 0.55,
      transform: on ? "translateY(-1.2cqw)" : "none",
      boxShadow: on
        ? "0 0 0 1px var(--acc), 0 3cqw 7cqw var(--sh1)"
        : "0 2cqw 5cqw var(--sh2)",
    };
  };

  return (
    <section id="top" ref={sectionRef} className={styles.heroSection}>
      <div className={styles.dotGrid} aria-hidden="true" />
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.heroGlowBlue} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className={styles.heroMain}>
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroEyebrow}>
              <span className={styles.kickerDash} />
              AI-first software development company &middot; India
              {/* keeps the H1 readable as one sentence for search engines and screen readers */}
              <span className={styles.srOnly}>: </span>
            </span>
            <SplitText
              trigger="load"
              delay={0.15}
              className={`${styles.h1} ${styles.serif}`}
              parts={["We build software that ", { text: "thinks.", className: styles.accentItalic }]}
            />
          </h1>
          <p className={styles.heroLead}>
            Web platforms, mobile apps and AI agents &mdash; designed, built and shipped by
            one small team, from first sketch to live product.
          </p>
          <div className={styles.heroActions}>
            <a href="#contact" className={styles.btnPrimary}>
              Start a project <span className={styles.btnArrow}>&rarr;</span>
            </a>
            <a href="#work" className={styles.linkUnderline}>
              See our work
            </a>
          </div>

          <div className={styles.tabsRow}>
            {TABS.map((tab, i) => (
              <button
                key={tab.n}
                type="button"
                className={styles.tabBtn}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                <span className={styles.tabBar}>
                  {active === i && (
                    <span className={`${styles.tabBarFill} ${styles.animated}`} key={active} />
                  )}
                </span>
                <span
                  className={`${styles.mono} ${styles.tabNum}`}
                  style={{ color: active === i ? "var(--acc)" : "var(--dim)" }}
                >
                  {tab.n}
                </span>
                <span
                  className={styles.tabTitle}
                  style={{ color: active === i ? "var(--fg)" : "var(--dim)" }}
                >
                  {tab.t}
                </span>
              </button>
            ))}
          </div>
          <p className={styles.heroTabDesc}>{TABS[active].d}</p>
        </div>

        <div className={styles.stage} aria-hidden="true">
          <div ref={tiltRef} className={styles.stageTilt}>
          {/* Web dashboard panel */}
          <div className={`${styles.stagePanel} ${styles.webPanel}`} style={panelState(0, 1)}>
            <div className={styles.chromeBar}>
              <span className={styles.chromeDot} />
              <span className={styles.chromeDot} />
              <span className={styles.chromeDot} />
              <span className={`${styles.chromeUrl} ${styles.mono}`}>
                app.yourbrand.com/overview
              </span>
            </div>
            <div className={styles.webBody}>
              <div className={styles.webSidebar}>
                <span className={styles.webBrand}>
                  <span className={styles.webBrandDot} />
                  Acme
                </span>
                <span style={{ color: "var(--fg)" }}>Overview</span>
                <span>Orders</span>
                <span>Customers</span>
                <span>Reports</span>
                <span>Settings</span>
              </div>
              <div className={styles.webMain}>
                <div className={styles.webMainHead}>
                  <span style={{ fontSize: "2.4cqw", fontWeight: 600, letterSpacing: "-0.02em" }}>
                    Overview
                  </span>
                  <span
                    style={{
                      padding: "0.5cqw 1.2cqw",
                      border: "1px solid color-mix(in srgb,var(--fg) 14%,transparent)",
                      borderRadius: "99px",
                      fontSize: "1.4cqw",
                      color: "var(--mut)",
                    }}
                  >
                    This week
                  </span>
                </div>
                <div className={styles.webStatGrid}>
                  {[
                    { label: "Revenue", value: "₹4.8L", delta: "+12.4%" },
                    { label: "Orders", value: "1,284", delta: "+8.1%" },
                    { label: "Avg. delivery", value: "18 min", delta: "−2 min" },
                  ].map((stat) => (
                    <div className={styles.webStatCard} key={stat.label}>
                      <span style={{ fontSize: "1.35cqw", color: "var(--dim)" }}>
                        {stat.label}
                      </span>
                      <span style={{ fontSize: "2.6cqw", fontWeight: 600, letterSpacing: "-0.02em" }}>
                        {stat.value}
                      </span>
                      <span style={{ fontSize: "1.3cqw", color: "var(--ok)" }}>{stat.delta}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.webChart}>
                  {BAR_HEIGHTS.map((h, i) => (
                    <span
                      key={i}
                      className={styles.webBar}
                      style={{
                        height: `${h}%`,
                        background:
                          i === BAR_HEIGHTS.length - 1
                            ? "var(--acc)"
                            : "color-mix(in srgb,var(--fg) 16%,transparent)",
                        animationDelay: `${0.5 + i * 0.05}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Phone delivery-tracking panel */}
          <div
            className={`${styles.stagePanel} ${styles.phonePanel}`}
            style={panelState(1, 3)}
          >
            <div className={styles.phoneScreen}>
              <span className={styles.phoneNotch} />
              <div className={styles.statusBar}>
                <span>9:41</span>
                <span className={styles.statusIcons}>
                  <span style={{ height: "0.7cqw" }} />
                  <span style={{ height: "1cqw" }} />
                  <span style={{ height: "1.3cqw" }} />
                  <span className={styles.battery}>
                    <span />
                  </span>
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4cqw", marginTop: "0.6cqw" }}>
                <span style={{ fontSize: "1.5cqw", color: "#6f695f" }}>Order #48213</span>
                <span style={{ fontSize: "2.7cqw", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                  On the way to you
                </span>
              </div>
              <div className={styles.mapArea}>
                <span className={styles.road} style={{ top: "30%" }} />
                <span className={styles.road} style={{ top: "57%" }} />
                <span className={styles.road} style={{ top: "83%" }} />
                <span className={styles.roadV} style={{ left: "8%" }} />
                <span className={styles.roadV} style={{ left: "40%" }} />
                <span className={styles.roadV} style={{ left: "78%" }} />
                <span className={styles.park} />
                <svg className={styles.route} viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M8 83 L8 57 L40 57 L40 30 L78 30" pathLength={1} />
                </svg>
                <span className={styles.pinPing} />
                <span className={styles.pin} />
                <span className={styles.riderDot}>
                  <span
                    style={{
                      width: "1.2cqw",
                      height: "1.2cqw",
                      borderRadius: "50%",
                      background: "var(--acc)",
                    }}
                  />
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.2cqw" }}>
                  <span style={{ fontSize: "1.4cqw", color: "#6f695f" }}>Arriving in</span>
                  <span style={{ fontSize: "4cqw", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1 }}>
                    12 min
                  </span>
                </div>
                <span style={{ fontSize: "1.5cqw", color: "#6f695f", paddingBottom: "0.4cqw" }}>
                  by 4:26 PM
                </span>
              </div>
              <div className={styles.progressSegs}>
                <span className={styles.segOn} />
                <span className={styles.segOn} />
                <span className={`${styles.segOn} ${styles.segLive}`} />
                <span />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1.2cqw", padding: "1.2cqw", borderRadius: "2cqw", background: "#fff" }}>
                <span
                  style={{
                    flex: "none",
                    width: "4.2cqw",
                    height: "4.2cqw",
                    borderRadius: "50%",
                    background: "#151412",
                    color: "#f6f2ea",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5cqw",
                    fontWeight: 600,
                  }}
                >
                  RK
                </span>
                <span style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "0.2cqw" }}>
                  <span style={{ fontSize: "1.7cqw", fontWeight: 600 }}>Ravi Kumar</span>
                  <span style={{ fontSize: "1.3cqw", color: "#6f695f" }}>Rider &middot; 4.9 &#9733;</span>
                </span>
                <span className={styles.callBtn}>Call</span>
              </div>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "5cqw",
                  borderRadius: "99px",
                  background: "#151412",
                  color: "#f6f2ea",
                  fontSize: "1.7cqw",
                  fontWeight: 500,
                }}
              >
                Track order
              </span>
            </div>
          </div>

          {/* AI chat panel */}
          <div className={`${styles.stagePanel} ${styles.chatPanel}`} style={panelState(2, 2)}>
            <div className={styles.chatHeadRow}>
              <span className={`${styles.aiAvatar} ${styles.mono}`}>AI</span>
              <span style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.2cqw" }}>
                <span style={{ fontSize: "1.8cqw", fontWeight: 600 }}>Ops Agent</span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.6cqw", fontSize: "1.35cqw", color: "var(--dim)" }}>
                  <span style={{ width: "1cqw", height: "1cqw", borderRadius: "50%", background: "var(--ok)" }} />
                  connected to Calendar, Gmail
                </span>
              </span>
            </div>
            <div className={styles.bubbleUser}>
              Move tomorrow&apos;s 4 PM demo to Friday and tell the client.
            </div>
            {typing && (
              <div className={styles.bubbleTyping}>
                <span className={styles.typingDot} style={{ animationDelay: "0s" }} />
                <span className={styles.typingDot} style={{ animationDelay: "0.2s" }} />
                <span className={styles.typingDot} style={{ animationDelay: "0.4s" }} />
              </div>
            )}
            {tools && (
              <div className={`${styles.toolPills} ${styles.mono}`}>
                <span className={styles.toolPill}>
                  <span style={{ color: "var(--ok)" }}>&#10003;</span> calendar.update
                </span>
                <span className={styles.toolPill}>
                  <span style={{ color: "var(--ok)" }}>&#10003;</span> email.send
                </span>
              </div>
            )}
            {reply && (
              <div className={styles.bubbleReply}>
                Done. Demo moved to <span style={{ color: "var(--acc)" }}>Fri, 4:00 PM</span> and
                the invite is sent to 3 people.
              </div>
            )}
          </div>
          </div>
        </div>
      </div>

      <div className={styles.heroFoot}>
        <a href="#services" className={styles.scrollCue}>
          <span className={styles.scrollCueLine} aria-hidden="true" />
          Scroll to explore
        </a>
        <span className={styles.availability}>
          <span className={styles.availabilityDot} aria-hidden="true" />
          Taking on new projects
        </span>
      </div>
    </section>
  );
}
