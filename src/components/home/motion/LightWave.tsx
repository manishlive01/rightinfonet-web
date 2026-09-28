"use client";

import { useEffect, useRef } from "react";
import styles from "./LightWave.module.css";
import { prefersReducedMotion } from "./useInView";

/**
 * Per-section look of the wave. focus 0 = crisp light strands, 1 = fully defocused aurora.
 * Sections without an element on the current page are skipped.
 */
const STOPS = [
  { id: "top", focus: 0, alpha: 1 },
  { id: "services", focus: 0.92, alpha: 0.5 },
  { id: "work", focus: 0.82, alpha: 0.55 },
  { id: "industries", focus: 0.92, alpha: 0.45 },
  { id: "process", focus: 0.72, alpha: 0.55 },
  { id: "about", focus: 0.88, alpha: 0.5 },
  { id: "academy", focus: 0.95, alpha: 0.4 },
  { id: "contact", focus: 0.35, alpha: 0.85 },
];

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

// A family of parabolic light strands folding around an apex point. Distance to each
// curve is approximated with |F| / |grad F|, and "focus" widens the glow to defocus it.
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
const vec3 WARM = vec3(1.0, 0.6, 0.36);
const vec3 COL_C = vec3(0.37, 0.82, 0.77);

float hash(float n) { return fract(sin(n * 12.9898) * 43758.5453); }
float hash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, 1.0 - uv.y);
  vec2 apex = vec2(uApex.x * aspect, uApex.y);

  float w = mix(0.0016, 0.055, uFocus);
  float gain = mix(0.5, 0.13, uFocus);
  vec3 col = vec3(0.0);

  for (int i = 0; i < 32; i++) {
    float fi = float(i);
    if (fi >= uCount) break;
    float f = fi / (uCount - 1.0);
    float s = f - 0.5;

    float k = 2.3 * (1.0 + s * 0.9);
    vec2 a = apex + vec2(
      abs(s) * 0.12 + 0.018 * sin(uTime * 0.55 + fi * 1.7),
      s * 0.05 + 0.025 * sin(uTime * 0.37 + fi * 2.3)
    );
    float dy = p.y - a.y;
    float wob = 0.022 * sin(dy * 5.5 - uTime * 0.8 + fi * 0.9) * smoothstep(0.0, 0.45, abs(dy));
    float F = (p.x - a.x) - k * dy * dy - wob;
    float d = abs(F) / length(vec2(1.0, 2.0 * k * dy));

    float g = w / (d + w);
    g *= g;

    vec2 toApex = p - a;
    float glow = exp(-dot(toApex, toApex) * mix(38.0, 7.0, uFocus));
    float bright = (0.35 + 0.65 * hash(fi + 3.0)) * (1.0 + 2.4 * glow);

    vec3 c = mix(COL_A, COL_B, f);
    c = mix(c, COL_C, (0.5 + 0.5 * sin(dy * 3.0 + uTime * 0.3 + fi)) * 0.3);
    col += c * g * gain * bright;
  }

  // faint round dust that twinkles only while the strands are in focus
  vec2 grid = gl_FragCoord.xy / 9.0;
  float h = hash2(floor(grid));
  float dotMask = 1.0 - smoothstep(0.08, 0.2, length(fract(grid) - 0.5));
  float tw = step(0.9975, h) * dotMask * (0.5 + 0.5 * sin(uTime * (1.0 + h * 3.0) + h * 40.0));
  col += vec3(1.0, 0.85, 0.7) * tw * 0.4 * (1.0 - uFocus);

  // overlapping defocused glows drift toward white; pull them back to a warm aurora
  col *= mix(vec3(1.0), WARM, uFocus * 0.55);
  col = 1.0 - exp(-col * 1.35);
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
  const maxScroll = document.documentElement.scrollHeight - vh;
  const progress = maxScroll > 0 ? clamp01(y / maxScroll) : 0;

  const stops = STOPS.flatMap((stop) => {
    if (stop.id === "top") return [{ ...stop, top: 0 }];
    const el = document.getElementById(stop.id);
    return el ? [{ ...stop, top: el.getBoundingClientRect().top + y }] : [];
  });

  let focus = stops[stops.length - 1].focus;
  let alpha = stops[stops.length - 1].alpha;
  for (let i = 0; i < stops.length - 1; i++) {
    const a = stops[i];
    const b = stops[i + 1];
    if (anchor < b.top) {
      // leaving the hero is driven by scroll distance so the blur starts as soon as it moves
      const t = i === 0 ? clamp01((y - vh * 0.1) / (vh * 0.8)) : clamp01((anchor - a.top) / (b.top - a.top));
      const e = smooth(t);
      focus = a.focus + (b.focus - a.focus) * e;
      alpha = a.alpha + (b.alpha - a.alpha) * e;
      break;
    }
  }

  // The fold travels left → right across the page as you scroll. On narrow screens the hero
  // copy fills the top, so the fold starts low and to the right, behind the product stage.
  const narrow = window.innerWidth < 760;
  return {
    x: narrow ? 0.55 + 0.3 * progress : 0.42 + 0.44 * progress,
    y: (narrow ? 0.72 : 0.56) + 0.2 * Math.cos(progress * Math.PI * 3),
    focus,
    alpha,
  };
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
    gl.uniform1f(u.count, small ? 20 : 30);

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
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      const ease = 0.07;
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
