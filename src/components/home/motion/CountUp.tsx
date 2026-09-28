"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion, useInView } from "./useInView";

type CountUpProps = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function CountUp({ value, suffix = "", duration = 1600, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { rootMargin: "0px" });
  // Server HTML carries the final number so crawlers and no-JS visitors see the real figure.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || prefersReducedMotion()) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(2, -10 * t);
      setDisplay(Math.round(value * (t === 1 ? 1 : eased)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {display}
      {suffix}
    </span>
  );
}
