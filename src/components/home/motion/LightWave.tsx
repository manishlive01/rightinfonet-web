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

// A bundle of light strands that all pass through one pinch point and fan out from it,
// like the reference: a wide upper branch, a tighter lower branch. Each strand is a
// parabola through the pinch; distance to it is approximated with |F| / |grad F|.
// "focus" widens every strand's glow to defocus the whole bundle into an aurora.
const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uApex;
uniform float uFocus;
uniform float uAlpha;
uniform float uCount;

const vec3 BG = vec3(0.051, 0.051, 0.047);
const vec3 COL_A = vec3(0.941, 0.478, 0.227);
const vec3 COL_B = vec3(1.0, 0.68, 0.37);
const vec3 HOT = vec3(1.0, 0.9, 0.72);
const vec3 WARM = vec3(1.0, 0.6, 0.36);
const vec3 COL_C = vec3(0.37, 0.82, 0.77);

float hash(float n) { return fract(sin(n * 12.9898) * 43758.5453); }
float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, 1.0 - uv.y);
  vec2 apex = vec2(uApex.x * aspect, uApex.y);

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

    // curvature sets how far a strand swings out; the lower branch bends ~2x tighter
    float kUp = mix(0.2, 3.1, f) * (1.0 + 0.18 * (r1 - 0.5));
    // a tiny per-strand offset keeps the pinch tight but not a single hard point
    vec2 a = apex + vec2(
      0.006 * (r2 - 0.5) + 0.006 * sin(uTime * 0.5 + fi * 1.7),
      0.008 * (r3 - 0.5) + 0.01 * sin(uTime * 0.33 + fi * 1.3)
    );
    float dy = p.y - a.y;
    float k = kUp * mix(1.0, 1.9, smoothstep(-0.04, 0.04, dy));
    float wob = 0.014 * sin(dy * 7.0 - uTime * 0.9 + fi * 0.7) * smoothstep(0.02, 0.4, abs(dy));
    float F = (p.x - a.x) - k * dy * dy - wob;
    float d = abs(F) / length(vec2(1.0, 2.0 * k * dy));

    // strands swell near the pinch so they fuse into one glowing band there
    float r = length(p - a);
    float w = w0 * (1.0 + 3.5 * exp(-r * 5.0));
    float g = w / (d + w);
    g *= g;
    lines += g;

    // bright at the pinch, dimmer along the branches; inner strands brighter than the fan's edge
    float along = 0.28 + 1.7 * exp(-r * 2.4);
    float inner = mix(1.0, 0.45, smoothstep(0.35, 1.0, abs(f - 0.3) * 1.6));
    float bright = (0.3 + 0.7 * r1) * along * inner;

    vec3 c = mix(COL_A, COL_B, r2);
    c = mix(c, HOT, exp(-r * 7.0) * 0.65);
    c = mix(c, COL_C, smoothstep(0.55, 1.0, f) * 0.45 * (0.6 + 0.4 * sin(dy * 4.0 + uTime * 0.3)));
    col += c * g * gain * bright;
  }

  // bloom around the pinch: a hot core and a wide, soft halo
  vec2 ta = p - apex;
  float ra = dot(ta, ta);
  col += HOT * exp(-ra * mix(140.0, 14.0, uFocus)) * mix(0.85, 0.35, uFocus);
  col += COL_A * exp(-ra * mix(9.0, 3.0, uFocus)) * 0.14;

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

  // dust: faint everywhere, sparkling more inside the strands
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
    };

    const small = window.matchMedia("(max-width: 760px)").matches;
    const reduce = prefersReducedMotion();
    gl.uniform1f(u.count, small ? 28 : 56);

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

    const draw = (time: number) => {
      gl.uniform1f(u.time, time);
      gl.uniform2f(u.apex, cur.x, cur.y);
      gl.uniform1f(u.focus, cur.focus);
      gl.uniform1f(u.alpha, cur.alpha);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    let raf = 0;
    let frame = 0;
    let last = start;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      // time-based so the wave settles in the same ~1s on slow and fast devices
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      const ease = 1 - Math.exp(-dt * 4);
      cur.x += (target.x - cur.x) * ease;
      cur.y += (target.y - cur.y) * ease;
      cur.focus += (target.focus - cur.focus) * ease;
      cur.alpha += (target.alpha - cur.alpha) * ease;
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

    resize();
    draw(reduce ? 8 : 0);
    canvas.dataset.state = "ready";
    if (!reduce) raf = requestAnimationFrame(loop);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className={styles.canvas} aria-hidden="true" />;
}
