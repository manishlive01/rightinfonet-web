import type { SocialNetwork } from "@/lib/site-config";
import { socialLinks } from "@/lib/site-config";
import styles from "./SocialLinks.module.css";

const ICONS: Record<SocialNetwork, React.ReactNode> = {
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M8 10.5V17M8 7.4v.1M11.8 17v-6.5M11.8 13.2c0-1.6 1-2.7 2.5-2.7s2.4 1 2.4 2.7V17" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8v.1" />
    </>
  ),
  facebook: (
    <path d="M14.2 21v-7.6h2.6l.4-3.1h-3V8.4c0-.9.3-1.5 1.6-1.5h1.6V4.2a21 21 0 0 0-2.4-.1c-2.4 0-4 1.4-4 4.1v2.1H8.4v3.1H11V21" />
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.4 9.4v5.2l4.4-2.6z" fill="currentColor" />
    </>
  ),
};

/** Round icon buttons for the company's social profiles. */
export default function SocialLinks({ className = "" }: { className?: string }) {
  if (!socialLinks.length) return null;
  return (
    <ul className={`${styles.list} ${className}`} aria-label="Bright Infonet on social media">
      {socialLinks.map((s) => (
        <li key={s.network}>
          <a
            href={s.href}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={`${s.label} (opens in a new tab)`}
            title={s.label}
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {ICONS[s.network]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
