"use client";

import { useEffect, useState } from "react";
import home from "../home/Home.module.css";
import styles from "./Insights.module.css";

/** "On this page" list that highlights the section being read. */
export default function Toc({ items }: { items: { id: string; title: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    let raf = 0;
    // the current section is the last one whose heading has passed the upper third of the screen
    const update = () => {
      const line = window.innerHeight * 0.34;
      let current = headings[0]?.id;
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= line) current = h.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <nav className={styles.toc} aria-label="On this page">
      <span className={`${styles.tocLabel} ${home.mono}`}>On this page</span>
      <ol className={styles.tocList}>
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`${styles.tocLink} ${active === item.id ? styles.tocActive : ""}`}
              aria-current={active === item.id ? "location" : undefined}
            >
              <span className={`${styles.tocNum} ${home.mono}`}>{String(i + 1).padStart(2, "0")}</span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
