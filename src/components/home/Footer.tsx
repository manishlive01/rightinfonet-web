import styles from "./Home.module.css";

const COLUMNS = [
  {
    label: "Studio",
    links: [
      { href: "#work", label: "Work" },
      { href: "#services", label: "Services" },
      { href: "#process", label: "Process" },
      { href: "#about", label: "About" },
    ],
  },
  {
    label: "Academy",
    links: [
      { href: "#academy", label: "Tracks" },
      { href: "#academy", label: "Apply" },
      { href: "#academy", label: "Syllabus" },
    ],
  },
  {
    label: "Social",
    links: [
      { href: "#", label: "LinkedIn" },
      { href: "#", label: "Instagram" },
      { href: "#", label: "GitHub" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerGrid}>
        {COLUMNS.map((col) => (
          <div key={col.label} className={styles.footerCol}>
            <span className={`${styles.footerColLabel} ${styles.mono}`}>{col.label}</span>
            {col.links.map((link, i) => (
              <a key={i} href={link.href} className={styles.footerLink}>
                {link.label}
              </a>
            ))}
          </div>
        ))}
        <div className={styles.footerCol}>
          <span className={`${styles.footerColLabel} ${styles.mono}`}>Contact</span>
          <a href="mailto:hello@brightinfonet.com" className={styles.footerLink}>
            hello@brightinfonet.com
          </a>
          <span className={styles.footerMuted}>India &middot; Working worldwide</span>
        </div>
      </div>

      <div className={styles.footerWordmarkRow} aria-hidden="true">
        <span className={styles.footerWordmarkRing}>
          <span className={styles.footerWordmarkDot} />
        </span>
        bright infonet
      </div>

      <div className={`${styles.footerBottomRow} ${styles.mono}`}>
        <span>&copy; 2026 Bright Infonet</span>
        <span>Designed &amp; built in-house</span>
        <a href="#top" className={styles.footerBottomLink}>
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
}
