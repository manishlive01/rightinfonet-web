"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import styles from "./Home.module.css";

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.revealIn : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
