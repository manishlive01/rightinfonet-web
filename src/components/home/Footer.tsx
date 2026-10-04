import Link from "next/link";
import home from "./Home.module.css";
import styles from "./Footer.module.css";
import InView from "./motion/InView";
import LocalTime from "./LocalTime";
import { SERVICES } from "./data";
import { SERVICE_DETAILS } from "../pages/content";
import { siteConfig } from "@/lib/site-config";
import SocialLinks from "./SocialLinks";
import Logo from "./Logo";

const COMPANY = [
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/#contact", label: "Contact" },
];

const AREAS = [
  {
    href: "/mobile-app-development-panchkula",
    label: "App development, Panchkula",
  },
  {
    href: "/mobile-app-development-chandigarh",
    label: "App development, Chandigarh",
  },
  { href: "/mobile-app-development-mohali", label: "App development, Mohali" },
  {
    href: "/web-development-company-panchkula",
    label: "Web development, Panchkula",
  },
  {
    href: "/web-development-company-chandigarh",
    label: "Web development, Chandigarh",
  },
  {
    href: "/software-development-company-mohali",
    label: "Software company, Mohali",
  },
  {
    href: "/ai-development-company-chandigarh",
    label: "AI development, Chandigarh",
  },
  { href: "/hire-flutter-developers-india", label: "Hire Flutter developers" },
  { href: "/gxp-software-development-india", label: "GxP software, India" },
];

const { street, locality, region, postalCode } = siteConfig.address;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.cta}>
        <p className={`${styles.ctaText} ${home.serif}`}>
          Have a product in mind?{" "}
          <span className={home.accentItalic}>Let&rsquo;s talk.</span>
        </p>
        <Link href="/#contact" className={styles.ctaBtn}>
          Start a project <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className={styles.grid}>
        <nav className={styles.col} aria-label="Services">
          <span className={`${styles.colLabel} ${home.mono}`}>Services</span>
          {SERVICES.map((s, i) => (
            <Link
              key={s.n}
              href={`/services/${SERVICE_DETAILS[i].slug}`}
              className={styles.link}
            >
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
          <Link
            href="/academy/full-stack-web-development-course"
            className={styles.link}
          >
            Full-stack course
          </Link>
          <Link
            href="/academy/flutter-app-development-course"
            className={styles.link}
          >
            Flutter course
          </Link>
          <Link href="/academy/ai-agents-course" className={styles.link}>
            AI agents course
          </Link>
          <Link
            href="/academy/industrial-training-chandigarh"
            className={styles.link}
          >
            Industrial training
          </Link>
          <Link href="/#contact" className={styles.link}>
            Apply
          </Link>
        </nav>
        <nav className={styles.col} aria-label="Areas we serve">
          <span className={`${styles.colLabel} ${home.mono}`}>
            Areas we serve
          </span>
          {AREAS.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className={styles.col}>
          <span className={`${styles.colLabel} ${home.mono}`}>Contact</span>
          <a href={`mailto:${siteConfig.supportEmail}`} className={styles.link}>
            {siteConfig.supportEmail}
          </a>
          <a href={`mailto:${siteConfig.hrEmail}`} className={styles.link}>
            {siteConfig.hrEmail} <span className={styles.muted}>(careers)</span>
          </a>
          {siteConfig.phone && (
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className={styles.link}
            >
              {siteConfig.phone}
            </a>
          )}
          {siteConfig.whatsapp && (
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              WhatsApp us
            </a>
          )}
          <address className={styles.muted} style={{ fontStyle: "normal" }}>
            {[
              street,
              [locality, region].filter(Boolean).join(", "),
              postalCode,
              "India",
            ]
              .filter(Boolean)
              .join(" · ")}
            <br />
            Serving Panchkula, Mohali &amp; Chandigarh &middot; Working
            worldwide
          </address>
          <SocialLinks className={styles.social} />
          <span className={`${styles.clock} ${home.mono}`}>
            <span className={styles.clockDot} aria-hidden="true" />
            <LocalTime />
          </span>
        </div>
      </div>

      {/* faint brand watermark behind the columns and the bottom bar */}
      <InView className={styles.watermark} rootMargin="0px" aria-hidden="true">
        <Logo wordOnly className={styles.watermarkSvg} />
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
