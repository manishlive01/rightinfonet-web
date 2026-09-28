"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./Header.module.css";
import { NAV_LINKS } from "./data";
import { siteConfig } from "@/lib/site-config";
import ThemeToggle from "./ThemeToggle";

function RollText({ text }: { text: string }) {
  return (
    <span className={styles.roll} data-text={text}>
      <span className={styles.rollInner}>{text}</span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [sectionId, setSectionId] = useState<string | null>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 400);
        lastY = y;
      }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setSectionId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = pathname === "/academy" ? "academy" : sectionId;
  const close = () => setOpen(false);

  return (
    <header
      className={`${styles.header} ${scrolled || open ? styles.scrolled : ""} ${
        hidden && !open ? styles.hidden : ""
      }`}
    >
      <span ref={progressRef} className={styles.progress} aria-hidden="true" />
      <div className={styles.bar}>
        <Link href="/#top" className={styles.brand} aria-label={`${siteConfig.name} — home`} onClick={close}>
          <span className={styles.brandRing}>
            <span className={styles.brandDot} />
          </span>
          <span>bright infonet</span>
        </Link>

        <nav aria-label="Primary" className={styles.nav}>
          {NAV_LINKS.map((link) => {
            const isActive = current === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`${styles.link} ${isActive ? styles.linkActive : ""}`}
                aria-current={isActive ? "location" : undefined}
              >
                <RollText text={link.label} />
                {"badge" in link && <span className={styles.badge}>{link.badge}</span>}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <Link href="/#contact" className={styles.cta}>
            <RollText text="Start a project" />
            <span className={styles.ctaIcon} aria-hidden="true">
              &rarr;
            </span>
          </Link>

          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={styles.srOnly}>{open ? "Close menu" : "Open menu"}</span>
            <span className={`${styles.burger} ${open ? styles.burgerOpen : ""}`} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div id="site-menu" className={`${styles.sheet} ${open ? styles.sheetOpen : ""}`} inert={!open}>
        <nav aria-label="Mobile" className={styles.sheetNav}>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.id}
              href={link.href}
              className={styles.sheetLink}
              style={{ "--i": i } as CSSProperties}
              onClick={close}
            >
              <span className={styles.sheetNum}>0{i + 1}</span>
              <span className={styles.sheetLabel}>{link.label}</span>
              {"badge" in link && <span className={styles.badge}>{link.badge}</span>}
            </Link>
          ))}
        </nav>
        <div className={styles.sheetFoot}>
          <Link href="/#contact" className={styles.sheetCta} onClick={close}>
            Start a project <span aria-hidden="true">&rarr;</span>
          </Link>
          <a href={`mailto:${siteConfig.email}`} className={styles.sheetMail}>
            {siteConfig.email}
          </a>
        </div>
      </div>
    </header>
  );
}
