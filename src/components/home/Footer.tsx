import Link from "next/link";
import type { CSSProperties } from "react";
import home from "./Home.module.css";
import styles from "./Footer.module.css";
import InView from "./motion/InView";
import LocalTime from "./LocalTime";
import { SERVICES } from "./data";
import { SERVICE_DETAILS } from "../pages/content";
import { siteConfig, socialLinks } from "@/lib/site-config";

const COMPANY = [
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/#contact", label: "Contact" },
];

const WORDMARK = "bright infonet";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.cta}>
        <p className={`${styles.ctaText} ${home.serif}`}>
          Have a product in mind? <span className={home.accentItalic}>Let&rsquo;s talk.</span>
        </p>
        <Link href="/#contact" className={styles.ctaBtn}>
          Start a project <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className={styles.grid}>
        <nav className={styles.col} aria-label="Services">
          <span className={`${styles.colLabel} ${home.mono}`}>Services</span>
          {SERVICES.map((s, i) => (
            <Link key={s.n} href={`/services#${SERVICE_DETAILS[i].slug}`} className={styles.link}>
              {s.t}
            </Link>
          ))}
        </nav>
        <nav className={styles.col} aria-label="Company">
          <span className={`${styles.colLabel} ${home.mono}`}>Company</span>
          {COMPANY.map((l) => (
            <Link key={l.label} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
        </nav>
        <nav className={styles.col} aria-label="Academy">
          <span className={`${styles.colLabel} ${home.mono}`}>Academy</span>
          <Link href="/academy" className={styles.link}>
            Tracks &amp; syllabus
          </Link>
          <Link href="/#contact" className={styles.link}>
            Apply
          </Link>
          {socialLinks.length > 0 && (
            <>
              <span className={`${styles.colLabel} ${styles.colLabelGap} ${home.mono}`}>Social</span>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} className={styles.link} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              ))}
            </>
          )}
        </nav>
        <div className={styles.col}>
          <span className={`${styles.colLabel} ${home.mono}`}>Contact</span>
          <a href={`mailto:${siteConfig.email}`} className={styles.link}>
            {siteConfig.email}
          </a>
          {siteConfig.phone && (
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className={styles.link}>
              {siteConfig.phone}
            </a>
          )}
          <span className={styles.muted}>India &middot; Working worldwide</span>
          <span className={`${styles.clock} ${home.mono}`}>
            <span className={styles.clockDot} aria-hidden="true" />
            <LocalTime />
          </span>
        </div>
      </div>

      <InView className={styles.wordmark} aria-hidden="true">
        <span className={styles.ring}>
          <span className={styles.dot} />
        </span>
        {WORDMARK.split("").map((ch, i) => (
          <span key={i} className={styles.letter} style={{ "--i": i } as CSSProperties}>
            {ch === " " ? " " : ch}
          </span>
        ))}
      </InView>

      <div className={`${styles.bottom} ${home.mono}`}>
        <span>&copy; {new Date().getFullYear()} Bright Infonet</span>
        <span>Designed &amp; built in-house</span>
        <Link href="/#top" className={styles.toTop}>
          Back to top <span aria-hidden="true">&uarr;</span>
        </Link>
      </div>
    </footer>
  );
}
