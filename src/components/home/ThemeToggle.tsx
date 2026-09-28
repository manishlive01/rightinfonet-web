"use client";

import type { MouseEvent } from "react";
import styles from "./Header.module.css";
import { prefersReducedMotion } from "./motion/useInView";

// The icon shown follows <html data-theme> purely in CSS, so server and client render the same markup.
export default function ThemeToggle() {
  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    const apply = () => {
      root.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        // storage can be unavailable (private mode); the switch still applies for this visit
      }
    };

    const r = e.currentTarget.getBoundingClientRect();
    root.style.setProperty("--vt-x", `${r.left + r.width / 2}px`);
    root.style.setProperty("--vt-y", `${r.top + r.height / 2}px`);
    if (!("startViewTransition" in document) || prefersReducedMotion()) {
      apply();
      return;
    }
    document.startViewTransition(apply);
  };

  return (
    <button
      type="button"
      className={styles.themeBtn}
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Switch theme"
    >
      <svg className={styles.sun} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
      </svg>
      <svg className={styles.moon} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.2 14.6A8.5 8.5 0 0 1 9.4 3.8a8.5 8.5 0 1 0 10.8 10.8Z" />
      </svg>
    </button>
  );
}
