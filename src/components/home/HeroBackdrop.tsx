"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroBackdrop.module.css";

/* Hero background: a slow aurora of brand colours under a live "neural network" canvas.
   Nodes drift and link up when close, orange/blue hub nodes glow, signals travel along the
   links and hop onward from node to node, and the pointer gently pushes nodes aside and wires
   itself into the nearest ones. Plain 2D canvas, paused while off-screen or in a hidden tab,
   and drawn once (static) for people who prefer reduced motion. */

type Node = { x: number; y: number; vx: number; vy: number; r: number; kind: 0 | 1 | 2 };
type Pulse = { a: number; b: number; t: number; speed: number; hops: number };

const LINK = 150; // max link length, px
const POINTER_RADIUS = 190;

function palette() {
  const light = document.documentElement.dataset.theme === "light";
  return light
    ? { line: "22,21,19", node: "22,21,19", orange: "232,106,40", blue: "43,91,170", lineA: 0.16 }
    : { line: "242,237,228", node: "242,237,228", orange: "240,122,58", blue: "96,145,255", lineA: 0.2 };
}

export default function HeroBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let colors = palette();
    let w = 0;
    let h = 0;
    const nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let neighbours: number[][] = [];
    let raf = 0;
    let visible = true;
    let last = 0;
    let spawnIn = 0;
    const pointer = { x: -9999, y: -9999, on: false };

    const makeNode = (): Node => {
      const roll = Math.random();
      const kind: Node["kind"] = roll < 0.07 ? 1 : roll < 0.12 ? 2 : 0; // 1 orange hub, 2 blue hub
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.14,
        r: kind ? 2.4 + Math.random() * 1.6 : 1 + Math.random() * 1.1,
        kind,
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(1.5, window.devicePixelRatio || 1);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const target = Math.max(28, Math.min(110, Math.round((w * h) / 12500)));
      while (nodes.length < target) nodes.push(makeNode());
      nodes.length = target;
      for (const n of nodes) {
        n.x = Math.min(n.x, w);
        n.y = Math.min(n.y, h);
      }
      pulses = [];
      if (reduce) draw(0);
    };

    const update = (dt: number) => {
      for (const n of nodes) {
        n.x += n.vx * dt;
        n.y += n.vy * dt;
        if (n.x < -20) n.x = w + 20;
        else if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        else if (n.y > h + 20) n.y = -20;
        if (pointer.on) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d = Math.hypot(dx, dy);
          if (d < POINTER_RADIUS && d > 0.01) {
            const f = (1 - d / POINTER_RADIUS) * 0.9;
            n.x += (dx / d) * f;
            n.y += (dy / d) * f;
          }
        }
      }
      for (const p of pulses) p.t += p.speed * dt;
      // a signal that arrives hops on to a neighbour, so it travels through the network
      const next: Pulse[] = [];
      for (const p of pulses) {
        if (p.t < 1) {
          next.push(p);
        } else if (p.hops > 0) {
          const options = neighbours[p.b]?.filter((k) => k !== p.a) ?? [];
          if (options.length) {
            const b = options[(Math.random() * options.length) | 0];
            next.push({ a: p.b, b, t: 0, speed: p.speed, hops: p.hops - 1 });
          }
        }
      }
      pulses = next;
      spawnIn -= dt;
      if (spawnIn <= 0 && pulses.length < 14) {
        spawnIn = 260 + Math.random() * 380;
        const hubs = nodes.map((n, i) => (n.kind ? i : -1)).filter((i) => i >= 0);
        const a = hubs.length ? hubs[(Math.random() * hubs.length) | 0] : (Math.random() * nodes.length) | 0;
        const options = neighbours[a] ?? [];
        if (options.length) {
          pulses.push({
            a,
            b: options[(Math.random() * options.length) | 0],
            t: 0,
            speed: 0.0011 + Math.random() * 0.0009,
            hops: 2 + ((Math.random() * 4) | 0),
          });
        }
      }
    };

    // glow sprites, drawn once per colour and stamped with drawImage (much cheaper than
    // building radial gradients every frame)
    const sprite = (rgb: string) => {
      const size = 64;
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const g = c.getContext("2d")!;
      const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      grad.addColorStop(0, `rgba(${rgb},1)`);
      grad.addColorStop(1, `rgba(${rgb},0)`);
      g.fillStyle = grad;
      g.fillRect(0, 0, size, size);
      return c;
    };
    let glowOrange = sprite(colors.orange);
    let glowBlue = sprite(colors.blue);
    const stamp = (img: HTMLCanvasElement, x: number, y: number, radius: number, alpha: number) => {
      ctx.globalAlpha = alpha;
      ctx.drawImage(img, x - radius, y - radius, radius * 2, radius * 2);
      ctx.globalAlpha = 1;
    };

    // Faint behind the copy, full strength over the visual: left→right on desktop,
    // top→bottom on narrow screens (done here instead of a CSS mask, which is costly to composite).
    const fade = (x: number, y: number) =>
      w >= 1040 ? 0.3 + 0.7 * Math.min(1, x / (w * 0.58)) : 0.35 + 0.65 * Math.min(1, y / (h * 0.75));

    const BUCKETS = 6;
    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      const n = nodes.length;
      neighbours = Array.from({ length: n }, () => []);

      // links, batched into a few alpha buckets so each frame is a handful of strokes
      const base: Path2D[] = Array.from({ length: BUCKETS }, () => new Path2D());
      const hot: Path2D[] = Array.from({ length: BUCKETS }, () => new Path2D());
      for (let i = 0; i < n; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < n; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (Math.abs(dx) > LINK || Math.abs(dy) > LINK) continue;
          const d = Math.hypot(dx, dy);
          if (d > LINK) continue;
          neighbours[i].push(j);
          neighbours[j].push(i);
          const mx = (a.x + b.x) / 2;
          const my = (a.y + b.y) / 2;
          const strength = (1 - d / LINK) * fade(mx, my);
          let target = base;
          let level = strength;
          if (pointer.on) {
            const md = Math.hypot(mx - pointer.x, my - pointer.y);
            if (md < POINTER_RADIUS * 1.2) {
              target = hot;
              level = Math.min(1, strength + (1 - md / (POINTER_RADIUS * 1.2)));
            }
          }
          const k = Math.min(BUCKETS - 1, Math.floor(level * BUCKETS));
          target[k].moveTo(a.x, a.y);
          target[k].lineTo(b.x, b.y);
        }
      }
      ctx.lineWidth = 1;
      for (let k = 0; k < BUCKETS; k++) {
        const level = (k + 0.5) / BUCKETS;
        ctx.strokeStyle = `rgba(${colors.line},${(level * colors.lineA).toFixed(3)})`;
        ctx.stroke(base[k]);
        ctx.strokeStyle = `rgba(${colors.orange},${(level * 0.45).toFixed(3)})`;
        ctx.stroke(hot[k]);
      }

      // the pointer wires itself into nearby nodes
      if (pointer.on) {
        const wires = Array.from({ length: BUCKETS }, () => new Path2D());
        for (const node of nodes) {
          const d = Math.hypot(node.x - pointer.x, node.y - pointer.y);
          if (d < POINTER_RADIUS) {
            const k = Math.min(BUCKETS - 1, Math.floor((1 - d / POINTER_RADIUS) * BUCKETS));
            wires[k].moveTo(pointer.x, pointer.y);
            wires[k].lineTo(node.x, node.y);
          }
        }
        for (let k = 0; k < BUCKETS; k++) {
          ctx.strokeStyle = `rgba(${colors.orange},${(((k + 0.5) / BUCKETS) * 0.55).toFixed(3)})`;
          ctx.stroke(wires[k]);
        }
        stamp(glowOrange, pointer.x, pointer.y, 14, 0.5);
      }

      // plain nodes in one path per brightness bucket; hubs breathe and glow
      const dots: Path2D[] = Array.from({ length: BUCKETS }, () => new Path2D());
      for (const node of nodes) {
        const f = fade(node.x, node.y);
        if (node.kind) {
          const img = node.kind === 1 ? glowOrange : glowBlue;
          const breathe = 1 + Math.sin(time * 0.002 + node.x * 0.01) * 0.25;
          stamp(img, node.x, node.y, node.r * 7 * breathe, 0.32 * f);
          stamp(img, node.x, node.y, node.r * 1.3, 0.95 * f);
        } else {
          const k = Math.min(BUCKETS - 1, Math.floor(f * BUCKETS));
          dots[k].moveTo(node.x + node.r, node.y);
          dots[k].arc(node.x, node.y, node.r, 0, Math.PI * 2);
        }
      }
      for (let k = 0; k < BUCKETS; k++) {
        ctx.fillStyle = `rgba(${colors.node},${(((k + 0.5) / BUCKETS) * 0.4).toFixed(3)})`;
        ctx.fill(dots[k]);
      }

      // signals: a bright head with a short fading tail along the link
      ctx.lineWidth = 1.6;
      for (const p of pulses) {
        const a = nodes[p.a];
        const b = nodes[p.b];
        if (!a || !b) continue;
        const blue = a.kind === 2;
        const rgb = blue ? colors.blue : colors.orange;
        const t = Math.min(1, p.t);
        const x = a.x + (b.x - a.x) * t;
        const y = a.y + (b.y - a.y) * t;
        const f = fade(x, y);
        for (const [from, alpha] of [
          [0.22, 0.25],
          [0.1, 0.7],
        ] as const) {
          const tt = Math.max(0, t - from);
          ctx.strokeStyle = `rgba(${rgb},${(alpha * f).toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(a.x + (b.x - a.x) * tt, a.y + (b.y - a.y) * tt);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
        stamp(blue ? glowBlue : glowOrange, x, y, 9, 0.9 * f);
      }
      ctx.lineWidth = 1;
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

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pointer.on = e.pointerType === "mouse" && x >= 0 && y >= 0 && x <= w && y <= h;
      pointer.x = x;
      pointer.y = y;
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
      glowOrange = sprite(colors.orange);
      glowBlue = sprite(colors.blue);
      if (reduce) draw(0);
    });

    resize();
    io.observe(canvas);
    ro.observe(canvas);
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      themeWatch.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.aurora}>
        <span className={styles.blobOrange} />
        <span className={styles.blobBlue} />
        <span className={styles.blobPeach} />
      </div>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
