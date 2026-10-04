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
import CalendlyButton from "../CalendlyButton";
import MapEmbed from "../trust/MapEmbed";

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
  {
    href: "/app-development-company-zirakpur",
    label: "App development, Zirakpur",
  },
  {
    href: "/software-development-company-kharar",
    label: "Software company, Kharar",
  },
  {
    href: "/software-development-company-ambala",
    label: "Software company, Ambala",
  },
  { href: "/web-development-company-shimla", label: "Web development, Shimla" },
];

// Regulated software leads the footer (positioning).
const REGULATED = [
  { href: "/services/regulated-software", label: "Regulated software" },
  { href: "/services/lims-software-development", label: "LIMS development" },
  {
    href: "/services/pharmacovigilance-software",
    label: "Pharmacovigilance software",
  },
  {
    href: "/services/computer-system-validation",
    label: "Computer system validation",
  },
  { href: "/industries/pharma-software", label: "Pharma software" },
  {
    href: "/industries/diagnostic-lab-software",
    label: "Diagnostic lab software",
  },
  { href: "/gxp-software-development-india", label: "GxP software, India" },
  {
    href: "/academy/software-validation-gamp5-course",
    label: "GAMP 5 validation course",
  },
];

// Specialist service pages listed under the five core services.
const MORE_SERVICES = [
  {
    href: "/services/saas-development-company-india",
    label: "SaaS development",
  },
  { href: "/services/ai-chatbot-development-india", label: "AI chatbots" },
  {
    href: "/services/hire-dedicated-developers-india",
    label: "Dedicated developers",
  },
  {
    href: "/services/ecommerce-development-chandigarh",
    label: "E-commerce, Chandigarh",
  },
  {
    href: "/industries/healthcare-app-development",
    label: "Healthcare apps",
  },
];

const { street, locality, region, postalCode } = siteConfig.address;
// NAP line: only the address parts that are filled in, so there are no empty separators.
const addressLine = [
  street,
  [locality, region].filter(Boolean).join(", "),
  postalCode,
  "India",
]
  .filter(Boolean)
  .join(" · ");

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
        <nav className={styles.col} aria-label="Regulated software">
          <span className={`${styles.colLabel} ${home.mono}`}>
            Regulated software
          </span>
          {REGULATED.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
            </Link>
          ))}
        </nav>
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
          {MORE_SERVICES.map((l) => (
            <Link key={l.href} href={l.href} className={styles.link}>
              {l.label}
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
          {/* full NAP (name, address, phone), kept identical to Google Business Profile */}
          <address className={styles.nap}>
            <span className={styles.napName}>{siteConfig.name}</span>
            <span className={styles.muted}>{addressLine}</span>
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
            <a href={`mailto:${siteConfig.email}`} className={styles.link}>
              {siteConfig.email}
            </a>
          </address>
          <a href={`mailto:${siteConfig.hrEmail}`} className={styles.link}>
            {siteConfig.hrEmail} <span className={styles.muted}>(careers)</span>
          </a>
          <CalendlyButton className={styles.calendly} />
          <span className={styles.muted}>
            Serving Panchkula, Mohali &amp; Chandigarh &middot; Working
            worldwide
          </span>
          <MapEmbed />
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
