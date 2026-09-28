"use client";

import { useEffect, useState, type RefObject } from "react";

type Options = {
  rootMargin?: string;
  once?: boolean;
};

export function useInView(
  ref: RefObject<Element | null>,
  { rootMargin = "0px 0px -10% 0px", once = true }: Options = {},
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // threshold 0 so elements taller than the viewport still trigger.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin, once]);

  return inView;
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
