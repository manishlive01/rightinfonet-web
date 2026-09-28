"use client";

import { useEffect, useRef } from "react";
import styles from "./LightWave.module.css";
import { prefersReducedMotion } from "./useInView";

/**
 * Per-section pose of the wave: where its fold sits (x/y as a fraction of the viewport),
 * and focus (0 = crisp light strands, 1 = fully defocused aurora). Poses alternate between
 * the far left and the right so the wave sweeps across as you move from section to section.
 * Sections without an element on the current page are skipped.
 */
const STOPS = [
  { id: "top", x: 0.42, y: 0.66, focus: 0, alpha: 1 },
  { id: "services", x: 0.04, y: 0.95, focus: 0.9, alpha: 0.55 },
  { id: "work", x: 0.8, y: 0.5, focus: 0.82, alpha: 0.55 },
  { id: "industries", x: 0.03, y: 0.32, focus: 0.9, alpha: 0.5 },
  { id: "process", x: 0.72, y: 0.9, focus: 0.72, alpha: 0.55 },
  { id: "about", x: 0.06, y: 0.7, focus: 0.88, alpha: 0.55 },
  { id: "academy", x: 0.82, y: 0.35, focus: 0.95, alpha: 0.4 },
  { id: "contact", x: 0.5, y: 0.98, focus: 0.35, alpha: 0.85 },
];

// narrow screens: the hero copy fills the top, so the fold starts low and right, behind the stage
const NARROW_HERO = { x: 0.62, y: 0.94 };

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

/*
 * The wave is modelled as a twisted ribbon of fibres. Every fibre passes through one pinch
 * point; the ribbon's width grows away from it (wide upper branch, tighter lower branch) and
 * the ribbon twists along its length, so fibres swap front/back and cross like the reference.
 * Each fibre's depth drives a depth-of-field blur and its brightness/colour (front = warm and
 * crisp, back = cooler and soft). Particles ride along the fibres. The pointer pushes fibres
 * aside by warping the sample point, and scroll inertia swings the branches (uSway).
 * "uFocus" defocuses the whole ribbon into an aurora for content sections.
 */
const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uApex;
uniform float uFocus;
uniform float uAlpha;
uniform float uCount;
uniform vec2 uMouse;
uniform float uPush;
uniform float uSway;
uniform float uWidth;

const vec3 BG = vec3(0.051, 0.051, 0.047);
const vec3 COL_A = vec3(0.941, 0.478, 0.227);
const vec3 COL_B = vec3(1.0, 0.68, 0.37);
const vec3 HOT = vec3(1.0, 0.9, 0.72);
const vec3 WARM = vec3(1.0, 0.6, 0.36);
const vec3 COL_C = vec3(0.37, 0.82, 0.77);

float hash(float n) { return fract(sin(n * 12.9898) * 43758.5453); }
float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

// x position, depth and slope dx/dy of fibre u (-1..1 across the ribbon) at height dy from the pinch
vec3 ribbon(vec2 a, float dy, float u, float phase) {
  float t = abs(dy);
  float side = smoothstep(-0.05, 0.05, dy);
  float k = mix(1.7, 2.1, side);
  float spread = mix(0.55, 0.85, side) * uWidth;
  float W = 0.006 + spread * pow(t, 1.25);
  float Wd = spread * 1.25 * pow(t + 1e-4, 0.25) * sign(dy);
  float rate = mix(1.2, 2.4, side);
  float th = 0.1 + rate * dy + 0.3 * sin(uTime * 0.23) + phase;
  float c = cos(th);
  float s = sin(th);
  float breathe = 0.012 * sin(uTime * 0.4);
  float x = a.x + k * dy * dy + uSway * dy * t * 0.9 + breathe * dy + u * W * c;
  float slope = 2.0 * k * dy + 1.8 * uSway * t + breathe + u * (Wd * c - W * s * rate);
  return vec3(x, u * W * s, slope);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, 1.0 - uv.y);
  vec2 apex = vec2(uApex.x * aspect, uApex.y);

  // fibres near the pointer are pushed away from it: sample closer to the pointer instead
  vec2 dm = p - uMouse;
  vec2 q = p - normalize(dm + 1e-5) * uPush * exp(-dot(dm, dm) / 0.012);

  float w0 = mix(0.0011, 0.05, uFocus);
  float gain = mix(0.42, 0.09, uFocus);
  vec3 col = vec3(0.0);
  float lines = 0.0;

  for (int i = 0; i < 64; i++) {
    float fi = float(i);
    if (fi >= uCount) break;
    float f = fi / (uCount - 1.0);
    float r1 = hash(fi + 1.0);
    float r2 = hash(fi + 7.0);
    float r3 = hash(fi + 13.0);

    float u = f * 2.0 - 1.0 + 0.04 * (r1 - 0.5);
    float phase = 0.5 * (r2 - 0.5);
    vec2 a = apex + vec2(0.004 * (r3 - 0.5), 0.006 * (r1 - 0.5) + 0.008 * sin(uTime * 0.33 + fi * 1.3));
    float dy = q.y - a.y;
    vec3 fib = ribbon(a, dy, u, phase);
    float wob = 0.005 * sin(dy * 9.0 - uTime * 1.1 + fi * 0.7) * smoothstep(0.02, 0.3, abs(dy));
    float d = abs(q.x - fib.x - wob) / sqrt(1.0 + fib.z * fib.z);

    // depth of field: fibres away from the focal plane (depth 0) blur and dim
    float z = fib.y;
    float dof = clamp(abs(z) / 0.16, 0.0, 1.0);
    float r = length(q - a);
    float w = w0 * (1.0 + 1.8 * exp(-r * 5.0)) * (1.0 + 4.0 * dof * (1.0 - uFocus));
    float g = w / (d + w);
    g *= g;
    lines += g;

    float along = 0.3 + 1.3 * exp(-r * 2.4);
    float depthLight = (1.0 + 0.35 * clamp(z / 0.12, -1.0, 1.0)) * mix(1.0, 0.5, dof);
    float bright = (0.3 + 0.7 * r1) * along * depthLight;

    vec3 c = mix(COL_A, COL_B, r2);
    c = mix(c, HOT, exp(-r * 7.0) * 0.65);
    c = mix(c, COL_C, clamp(-z / 0.12, 0.0, 1.0) * 0.55);
    col += c * g * gain * bright;
  }

  // bloom around the pinch: a hot core and a wide, soft halo
  vec2 ta = q - apex;
  float ra = dot(ta, ta);
  col += HOT * exp(-ra * mix(260.0, 14.0, uFocus)) * mix(0.4, 0.35, uFocus);
  col += COL_A * exp(-ra * mix(9.0, 3.0, uFocus)) * 0.14;

  // sparks flowing along the fibres, from the upper branch through the pinch and out below
  for (int j = 0; j < 40; j++) {
    float fj = float(j);
    float h1 = hash(fj * 1.73 + 5.0);
    float h2 = hash(fj * 2.91 + 9.0);
    float h3 = hash(fj * 4.17 + 3.0);
    float s01 = fract(uTime * (0.025 + 0.05 * h3) + h2);
    float dyP = mix(-0.8, 0.5, s01);
    vec3 fib = ribbon(apex, dyP, h1 * 2.0 - 1.0, 0.5 * (h2 - 0.5));
    vec2 sp = vec2(fib.x, apex.y + dyP);
    vec2 ds = q - sp;
    float lifetime = sin(s01 * 3.14159);
    float nearPinch = 0.4 + 0.6 * exp(-abs(dyP) * 2.0);
    col += HOT * exp(-dot(ds, ds) / 0.000012) * lifetime * nearPinch * 0.9 * (1.0 - uFocus);
  }

  // a few large out-of-focus bokeh discs drifting slowly, kept to the lower-right quarter
  // so they never sit on the headline
  for (int j = 0; j < 6; j++) {
    float fj = float(j);
    vec2 bp = vec2((0.5 + 0.5 * hash(fj * 3.1 + 2.0)) * aspect, 0.5 + 0.5 * hash(fj * 5.7 + 1.0));
    bp += 0.03 * vec2(sin(uTime * 0.13 + fj), cos(uTime * 0.11 + fj * 2.0));
    float br = 0.012 + 0.022 * hash(fj * 9.1);
    float disc = smoothstep(br, br * 0.55, length(p - bp));
    col += mix(COL_C, COL_B, hash(fj * 4.3)) * disc * 0.07;
  }

  // dust: faint everywhere, sparkling more inside the fibres
  vec2 grid = gl_FragCoord.xy / 7.0;
  float h = hash2(floor(grid));
  float dotMask = 1.0 - smoothstep(0.08, 0.22, length(fract(grid) - 0.5));
  float tw = step(0.995, h) * dotMask * (0.5 + 0.5 * sin(uTime * (1.0 + h * 3.0) + h * 40.0));
  col += HOT * tw * (0.12 + 1.4 * min(1.0, lines * 3.0)) * (1.0 - uFocus);

  // overlapping defocused glows drift toward white; pull them back to a warm aurora
  col *= mix(vec3(1.0), WARM, uFocus * 0.55);
  col = 1.0 - exp(-col * 1.3);
  gl_FragColor = vec4(BG + col * uAlpha, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) ?? "shader compile failed");
  }
  return shader;
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const smooth = (t: number) => t * t * (3 - 2 * t);

function readTarget() {
  const vh = window.innerHeight;
  const y = window.scrollY;
  const anchor = y + vh * 0.5;
  const narrow = window.innerWidth < 760;

  const stops = STOPS.flatMap((stop) => {
    if (stop.id === "top") return [{ ...stop, ...(narrow ? NARROW_HERO : {}), top: 0 }];
    const el = document.getElementById(stop.id);
    return el ? [{ ...stop, top: el.getBoundingClientRect().top + y }] : [];
  });

  const last = stops[stops.length - 1];
  const out = { x: last.x, y: last.y, focus: last.focus, alpha: last.alpha };
  for (let i = 0; i < stops.length - 1; i++) {
    const a = stops[i];
    const b = stops[i + 1];
    if (anchor >= b.top) continue;
    // Leaving the hero follows scroll distance so the blur starts as soon as it moves.
    // Other sections hold their pose for the first 40% before sweeping to the next one.
    const t =
      i === 0
        ? clamp01((y - vh * 0.1) / (vh * 0.8))
        : clamp01(((anchor - a.top) / (b.top - a.top) - 0.4) / 0.6);
    const e = smooth(t);
    out.x = a.x + (b.x - a.x) * e;
    out.y = a.y + (b.y - a.y) * e;
    out.focus = a.focus + (b.focus - a.focus) * e;
    out.alpha = a.alpha + (b.alpha - a.alpha) * e;
    break;
  }
  return out;
}

export default function LightWave() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      powerPreference: "low-power",
    });
    if (!gl) {
      canvas.dataset.state = "fallback";
      return;
    }

    let program: WebGLProgram;
    try {
      program = gl.createProgram()!;
      gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT));
      gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAG));
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error("link failed");
    } catch {
      canvas.dataset.state = "fallback";
      return;
    }
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = {
      res: gl.getUniformLocation(program, "uRes"),
      time: gl.getUniformLocation(program, "uTime"),
      apex: gl.getUniformLocation(program, "uApex"),
      focus: gl.getUniformLocation(program, "uFocus"),
      alpha: gl.getUniformLocation(program, "uAlpha"),
      count: gl.getUniformLocation(program, "uCount"),
      mouse: gl.getUniformLocation(program, "uMouse"),
      push: gl.getUniformLocation(program, "uPush"),
      sway: gl.getUniformLocation(program, "uSway"),
    };

    const small = window.matchMedia("(max-width: 760px)").matches;
    const reduce = prefersReducedMotion();
    gl.uniform1f(u.count, small ? 28 : 56);
    // on a narrow screen a full-width ribbon would reach across the headline
    gl.uniform1f(gl.getUniformLocation(program, "uWidth"), small ? 0.5 : 1);

    // Rendered below device resolution: the glow is soft, so the upscale is invisible.
    const resize = () => {
      const scale = Math.min(window.devicePixelRatio, 1.5) * (small ? 0.5 : 0.65);
      canvas.width = Math.round(window.innerWidth * scale);
      canvas.height = Math.round(window.innerHeight * scale);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(u.res, canvas.width, canvas.height);
    };

    let target = readTarget();
    const cur = { ...target };
    const start = performance.now();

    // Pointer: a spring-damper follows the cursor, so the push lags, overshoots and settles.
    const pointer = { x: -10, y: -10, tx: -10, ty: -10, vx: 0, vy: 0, presence: 0, inside: false };
    // Scroll inertia: scroll velocity drives an under-damped spring that swings the branches.
    const sway = { value: 0, vel: 0, lastY: window.scrollY };
    let push = 0;

    const draw = (time: number) => {
      gl.uniform1f(u.time, time);
      gl.uniform2f(u.apex, cur.x, cur.y);
      gl.uniform1f(u.focus, cur.focus);
      gl.uniform1f(u.alpha, cur.alpha);
      gl.uniform2f(u.mouse, pointer.x, pointer.y);
      gl.uniform1f(u.push, push);
      gl.uniform1f(u.sway, sway.value);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const step = (dt: number) => {
      // time-based so the wave settles in the same ~1s on slow and fast devices
      const ease = 1 - Math.exp(-dt * 4);
      cur.x += (target.x - cur.x) * ease;
      cur.y += (target.y - cur.y) * ease;
      cur.focus += (target.focus - cur.focus) * ease;
      cur.alpha += (target.alpha - cur.alpha) * ease;

      const K = 110;
      const C = 13;
      pointer.vx += ((pointer.tx - pointer.x) * K - pointer.vx * C) * dt;
      pointer.vy += ((pointer.ty - pointer.y) * K - pointer.vy * C) * dt;
      pointer.x += pointer.vx * dt;
      pointer.y += pointer.vy * dt;
      pointer.presence += ((pointer.inside ? 1 : 0) - pointer.presence) * (1 - Math.exp(-dt * 3));
      const speed = Math.hypot(pointer.vx, pointer.vy);
      push = pointer.presence * (0.018 + Math.min(0.04, speed * 0.03)) * (1 - cur.focus * 0.8);

      const y = window.scrollY;
      const scrollVel = dt > 0 ? (y - sway.lastY) / dt / window.innerHeight : 0;
      sway.lastY = y;
      const swayTarget = clamp(-scrollVel * 0.06, -0.25, 0.25);
      sway.vel += ((swayTarget - sway.value) * 60 - sway.vel * 7) * dt;
      sway.value += sway.vel * dt;
    };

    let raf = 0;
    let frame = 0;
    let last = start;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      step(dt);
      // defocused strands move slowly enough that 30fps is indistinguishable
      if (cur.focus > 0.6 && ++frame % 2) return;
      draw((now - start) / 1000);
    };

    const onScroll = () => {
      target = readTarget();
      if (reduce) {
        Object.assign(cur, target);
        draw(8);
      }
    };
    const onResize = () => {
      resize();
      onScroll();
      if (reduce) draw(8);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const aspect = window.innerWidth / window.innerHeight;
      pointer.tx = (e.clientX / window.innerWidth) * aspect;
      pointer.ty = e.clientY / window.innerHeight;
      if (!pointer.inside && pointer.presence < 0.01) {
        pointer.x = pointer.tx;
        pointer.y = pointer.ty;
      }
      pointer.inside = true;
    };
    const onPointerLeave = () => {
      pointer.inside = false;
    };

    resize();
    draw(reduce ? 8 : 0);
    canvas.dataset.state = "ready";
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    if (!reduce) {
      raf = requestAnimationFrame(loop);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.documentElement.addEventListener("mouseleave", onPointerLeave);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
    };
  }, []);

  return <canvas ref={ref} className={styles.canvas} aria-hidden="true" />;
}
