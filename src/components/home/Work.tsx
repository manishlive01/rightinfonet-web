"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from "react";
import home from "./Home.module.css";
import styles from "./Work.module.css";
import Reveal from "./Reveal";
import SectionHeading, { accent } from "./SectionHeading";
import WorkCard from "./WorkCard";
import { prefersReducedMotion } from "./motion/useInView";
import { WORK } from "./data";

const pad2 = (n: number) => String(n).padStart(2, "0");
const easeOut = (t: number) => 1 - Math.pow(1 - t, 4);

function Arrow({ flip }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" style={flip ? { rotate: "180deg" } : undefined}>
      <path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Work() {
  const total = WORK.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  // snap positions (scrollLeft for each slide) and the distance between two slides
  const layout = useRef({ pos: [] as number[], raw: [] as number[], unit: 1, max: 0 });
  const anim = useRef(0);
  const drag = useRef({ id: -1, x: 0, left: 0, moved: false, lastX: 0, lastT: 0, v: 0, suppress: false });
  const [index, setIndex] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { pos, raw, unit, max } = layout.current;
    const x = el.scrollLeft;
    let best = 0;
    const slides = el.children;
    for (let i = 0; i < pos.length; i++) {
      if (Math.abs(pos[i] - x) < Math.abs(pos[best] - x)) best = i;
      // --f: how focused a slide is (1 = in front), --o: signed offset for the parallax,
      // --a: opacity
      const f = 1 - Math.min(1, Math.abs(pos[i] - x) / unit);
      const o = Math.max(-1, Math.min(1, (raw[i] - x) / unit));
      const s = (slides[i] as HTMLElement).style;
      s.setProperty("--f", f.toFixed(3));
      s.setProperty("--o", o.toFixed(3));
      // slides that have scrolled past fade out fully so they don't linger in the left margin
      s.setProperty("--a", (raw[i] < x ? f * f : 0.3 + f * 0.7).toFixed(3));
    }
    if (barRef.current) {
      const n = pos.length;
      const p = max > 0 ? x / max : 0;
      barRef.current.style.transform = `scaleX(${(1 / n + p * (1 - 1 / n)).toFixed(4)})`;
    }
    setIndex(best);
    setEdges((e) => {
      const start = x < 4;
      const end = x > max - 4;
      return e.start === start && e.end === end ? e : { start, end };
    });
  }, []);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    // Snap points are measured from the first slide (which sits at scrollLeft 0). Reading
    // scroll-padding instead fails: it computes to a max()/calc() string, not pixels.
    const first = (el.children[0] as HTMLElement | undefined)?.offsetLeft ?? 0;
    const max = el.scrollWidth - el.clientWidth;
    const raw = Array.from(el.children, (c) => (c as HTMLElement).offsetLeft - first);
    layout.current = {
      raw,
      pos: raw.map((p) => Math.max(0, Math.min(max, p))),
      unit: raw.length > 1 ? raw[1] - raw[0] : el.clientWidth,
      max,
    };
    update();
  }, [update]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    el.addEventListener("scroll", onScroll, { passive: true });
    measure();
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(anim.current);
    };
  }, [measure, update]);

  const release = () => {
    trackRef.current?.classList.remove(styles.free, styles.dragging);
  };

  const stop = () => {
    if (!anim.current) return;
    cancelAnimationFrame(anim.current);
    anim.current = 0;
    release();
  };

  // Our own eased scroll: native smooth scrolling is short and linear-feeling.
  // Snapping is switched off while it runs so the browser doesn't fight it.
  const scrollToX = (target: number, ease = easeOut) => {
    const el = trackRef.current;
    if (!el) return;
    cancelAnimationFrame(anim.current);
    const from = el.scrollLeft;
    const dist = target - from;
    if (prefersReducedMotion() || Math.abs(dist) < 1) {
      el.scrollLeft = target;
      anim.current = 0;
      release();
      return;
    }
    const dur = Math.min(1100, 650 + Math.abs(dist) * 0.2);
    el.classList.add(styles.free);
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / dur);
      el.scrollLeft = from + dist * ease(t);
      if (t < 1) {
        anim.current = requestAnimationFrame(step);
      } else {
        anim.current = 0;
        release();
      }
    };
    anim.current = requestAnimationFrame(step);
  };

  const go = (i: number) => {
    const { pos } = layout.current;
    if (!pos.length) return;
    scrollToX(pos[Math.max(0, Math.min(pos.length - 1, i))]);
  };

  // ----- mouse drag (touch and trackpads scroll natively) -----
  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    stop();
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = e.currentTarget;
    drag.current = {
      id: e.pointerId,
      x: e.clientX,
      left: el.scrollLeft,
      moved: false,
      lastX: e.clientX,
      lastT: e.timeStamp,
      v: 0,
      suppress: false,
    };
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (d.id !== e.pointerId) return;
    const el = e.currentTarget;
    const dx = e.clientX - d.x;
    if (!d.moved) {
      if (Math.abs(dx) < 6) return;
      d.moved = true;
      // capture only once it is really a drag, so plain clicks still reach links
      el.setPointerCapture(e.pointerId);
      el.classList.add(styles.dragging);
    }
    el.scrollLeft = d.left - dx;
    const dt = Math.max(1, e.timeStamp - d.lastT);
    d.v = 0.8 * ((e.clientX - d.lastX) / dt) + 0.2 * d.v;
    d.lastX = e.clientX;
    d.lastT = e.timeStamp;
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (d.id !== e.pointerId) return;
    d.id = -1;
    if (!d.moved) return;
    d.suppress = true;
    setTimeout(() => (d.suppress = false), 0);
    const el = e.currentTarget;
    // throw: project the release velocity forward, then settle on the nearest slide
    const v = e.timeStamp - d.lastT > 90 ? 0 : d.v;
    const projected = el.scrollLeft - v * 260;
    const { pos } = layout.current;
    let best = 0;
    pos.forEach((p, i) => {
      if (Math.abs(p - projected) < Math.abs(pos[best] - projected)) best = i;
    });
    scrollToX(pos[best] ?? 0, easeOut);
  };

  const onClickCapture = (e: MouseEvent<HTMLDivElement>) => {
    if (drag.current.suppress) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.suppress = false;
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    const map: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: layout.current.pos.length - 1,
    };
    if (!(e.key in map)) return;
    e.preventDefault();
    go(map[e.key]);
  };

  const shown = Math.min(index, total - 1) + 1;

  return (
    <section id="work" className={`${home.section} ${styles.section}`} aria-labelledby="work-title">
      <div className={styles.inner}>
        <SectionHeading
          kicker="(02) Selected work"
          id="work-title"
          title={["Software we’ve ", accent("put live.")]}
          lead="Platforms for pharma, labs, clinics and ops teams — software that has to survive an audit, not just a demo."
          style={{ marginBottom: "clamp(36px, 4vw, 56px)" }}
        />

        <Reveal className={styles.controls}>
          <div className={styles.counter} aria-hidden="true">
            <span className={styles.countWindow}>
              <span key={shown} className={`${styles.countNum} ${home.serif}`}>
                {pad2(shown)}
              </span>
            </span>
            <span className={`${styles.countTotal} ${home.mono}`}>/ {pad2(total)}</span>
          </div>
          <span className={styles.progress} aria-hidden="true">
            <span ref={barRef} className={styles.progressFill} />
          </span>
          <div className={styles.controlsEnd}>
            <Link href="/work" className={`${home.btnOutline} ${styles.viewAll}`}>
              View all projects <span className={home.btnArrow}>&rarr;</span>
            </Link>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => go(index - 1)}
              disabled={edges.start}
              aria-controls="work-track"
              aria-label="Previous project"
            >
              <Arrow flip />
            </button>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => go(index + 1)}
              disabled={edges.end}
              aria-controls="work-track"
              aria-label="Next project"
            >
              <Arrow />
            </button>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        id="work-track"
        className={styles.track}
        role="region"
        aria-roledescription="carousel"
        aria-label="Selected projects"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClickCapture={onClickCapture}
        onDragStart={(e) => e.preventDefault()}
        onWheel={(e) => Math.abs(e.deltaX) > Math.abs(e.deltaY) && stop()}
        onTouchStart={stop}
      >
        {WORK.map((item, i) => (
          <div
            key={item.id}
            className={styles.slide}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${total}`}
            style={{ "--f": i === 0 ? 1 : 0, "--o": i === 0 ? 0 : 1, "--a": i === 0 ? 1 : 0.3 } as CSSProperties}
          >
            <WorkCard item={item} total={total} flip={false} />
          </div>
        ))}
        <div
          className={`${styles.slide} ${styles.slideEnd}`}
          style={{ "--f": 0, "--o": 1, "--a": 0.3 } as CSSProperties}
        >
          <Link href="/work" className={styles.endCard}>
            <span className={`${styles.endKicker} ${home.mono}`}>
              {pad2(total)} projects &middot; more on the way
            </span>
            <span className={`${styles.endTitle} ${home.serif}`}>
              See all <span className={home.accentItalic}>work</span>
            </span>
            <span className={styles.endIcon} aria-hidden="true">
              <Arrow />
            </span>
          </Link>
        </div>
      </div>

      <div className={styles.inner}>
        <Reveal className={styles.ctaBar}>
          <span className={`${styles.ctaBarText} ${home.serif}`}>
            Your product could be <span className={home.accentItalic}>next.</span>
          </span>
          <a href="#contact" className={home.btnOutline}>
            Start a project <span className={home.btnArrow}>&rarr;</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
