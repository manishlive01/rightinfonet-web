"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroBackdrop.module.css";

/* Hero background: a quiet dot grid over a slow aurora.
   - At rest the grid barely breathes (a very slow, faint wave).
   - On hover the dots around the cursor are pushed out like a lens, grow a little and
     warm up to brand orange, then spring back when the cursor moves on.
   - A click sends a soft ripple ring through the grid.
   Plain 2D canvas, paused off-screen / in hidden tabs, static for reduced motion. */

type Dot = {
  hx: number;
  hy: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  heat: number;
};
type Ripple = { x: number; y: number; r: number; life: number };

const GAP = 30; // grid spacing, px
const RADIUS = 160; // cursor influence radius, px
const PUSH = 16; // max lens displacement, px
const BUCKETS = 6;

function palette() {
  const light = document.documentElement.dataset.theme === "light";
  return light
    ? { dot: "22,21,19", orange: "232,106,40", baseA: 0.13 }
    : { dot: "242,237,228", orange: "240,122,58", baseA: 0.12 };
}

export default function HeroBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let colors = palette();
    let w = 0;
    let h = 0;
    let dots: Dot[] = [];
    let ripples: Ripple[] = [];
    let raf = 0;
    let visible = true;
    let last = 0;
    // target = real pointer, (x, y) = smoothed follower, strength fades in/out
    const pointer = {
      tx: -9999,
      ty: -9999,
      x: -9999,
      y: -9999,
      on: false,
      strength: 0,
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.ceil(w / GAP) + 1;
      const rows = Math.ceil(h / GAP) + 1;
      const offX = (w - (cols - 1) * GAP) / 2;
      const offY = (h - (rows - 1) * GAP) / 2;
      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({
            hx: offX + c * GAP,
            hy: offY + r * GAP,
            ox: 0,
            oy: 0,
            vx: 0,
            vy: 0,
            heat: 0,
          });
        }
      }
      if (reduce) draw(0);
    };

    // faint behind the headline, fuller over the visual side
    const fade = (x: number, y: number) =>
      w >= 1040
        ? 0.35 + 0.65 * Math.min(1, x / (w * 0.6))
        : 0.4 + 0.6 * Math.min(1, y / (h * 0.8));

    const update = (dt: number) => {
      const k = dt / 16.67;
      // smooth follower gives the lens a soft, slightly lagging feel
      const ease = 1 - Math.pow(1 - 0.14, k);
      pointer.x += (pointer.tx - pointer.x) * ease;
      pointer.y += (pointer.ty - pointer.y) * ease;
      pointer.strength +=
        ((pointer.on ? 1 : 0) - pointer.strength) * (1 - Math.pow(1 - 0.08, k));

      for (const rp of ripples) {
        rp.r += 0.42 * dt;
        rp.life -= dt / 1400;
      }
      ripples = ripples.filter((rp) => rp.life > 0);

      const damp = Math.pow(0.8, k);
      for (const d of dots) {
        let tx = 0;
        let ty = 0;
        let heat = 0;
        if (pointer.strength > 0.01) {
          const dx = d.hx - pointer.x;
          const dy = d.hy - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < RADIUS && dist > 0.01) {
            const f = 1 - dist / RADIUS;
            const e = f * f * (3 - 2 * f) * pointer.strength; // smoothstep
            tx += (dx / dist) * PUSH * e;
            ty += (dy / dist) * PUSH * e;
            heat = e;
          }
        }
        for (const rp of ripples) {
          const dx = d.hx - rp.x;
          const dy = d.hy - rp.y;
          const dist = Math.hypot(dx, dy);
          const band = 1 - Math.abs(dist - rp.r) / 46;
          if (band > 0 && dist > 0.01) {
            const e = band * rp.life;
            tx += (dx / dist) * 9 * e;
            ty += (dy / dist) * 9 * e;
            heat = Math.max(heat, e * 0.8);
          }
        }
        // spring toward the target offset
        d.vx = (d.vx + (tx - d.ox) * 0.12 * k) * damp;
        d.vy = (d.vy + (ty - d.oy) * 0.12 * k) * damp;
        d.ox += d.vx * k;
        d.oy += d.vy * k;
        d.heat += (heat - d.heat) * (1 - Math.pow(1 - 0.15, k));
      }
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);

      // calm dots, batched by brightness
      const calm: Path2D[] = Array.from(
        { length: BUCKETS },
        () => new Path2D(),
      );
      const hot: Dot[] = [];
      for (const d of dots) {
        if (d.heat > 0.04) {
          hot.push(d);
          continue;
        }
        const wave = reduce
          ? 1
          : 0.75 + 0.25 * Math.sin(time * 0.0005 + d.hx * 0.012 + d.hy * 0.009);
        const level = fade(d.hx, d.hy) * wave;
        const b = Math.min(BUCKETS - 1, Math.floor(level * BUCKETS));
        const x = d.hx + d.ox;
        const y = d.hy + d.oy;
        calm[b].moveTo(x + 1, y);
        calm[b].arc(x, y, 1, 0, Math.PI * 2);
      }
      for (let b = 0; b < BUCKETS; b++) {
        ctx.fillStyle = `rgba(${colors.dot},${(((b + 0.5) / BUCKETS) * colors.baseA * 1.4).toFixed(3)})`;
        ctx.fill(calm[b]);
      }

      // dots under the lens: slightly larger and warmed to orange
      for (const d of hot) {
        const x = d.hx + d.ox;
        const y = d.hy + d.oy;
        const f = fade(d.hx, d.hy);
        ctx.fillStyle = `rgba(${colors.orange},${((0.12 + 0.5 * d.heat) * f).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, 1 + d.heat * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // a very soft ring that trails the cursor
      if (pointer.strength > 0.01) {
        ctx.strokeStyle = `rgba(${colors.orange},${(0.14 * pointer.strength).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 22, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const frame = (time: number) => {
      const dt = Math.min(50, last ? time - last : 16);
      last = time;
      update(dt);
      draw(time);
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (reduce || raf || !visible || document.hidden) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const local = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      return { x, y, inside: x >= 0 && y >= 0 && x <= w && y <= h };
    };
    const onPointerMove = (e: PointerEvent) => {
      const p = local(e);
      const wasOn = pointer.on;
      pointer.on = e.pointerType === "mouse" && p.inside;
      pointer.tx = p.x;
      pointer.ty = p.y;
      if (pointer.on && !wasOn) {
        // enter: snap the follower so the lens doesn't fly in from far away
        pointer.x = p.x;
        pointer.y = p.y;
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      const p = local(e);
      if (!p.inside || reduce) return;
      ripples.push({ x: p.x, y: p.y, r: 0, life: 1 });
      if (ripples.length > 3) ripples.shift();
    };
    const onPointerLeave = () => (pointer.on = false);
    const onVisibility = () => (document.hidden ? stop() : start());

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    const ro = new ResizeObserver(resize);
    const themeWatch = new MutationObserver(() => {
      colors = palette();
      if (reduce) draw(0);
    });

    resize();
    io.observe(canvas);
    ro.observe(canvas);
    themeWatch.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      themeWatch.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.aurora}>
        <span className={styles.blobOrange} />
        <span className={styles.blobPeach} />
      </div>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
