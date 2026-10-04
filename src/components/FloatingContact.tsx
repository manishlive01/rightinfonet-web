import { siteConfig } from "@/lib/site-config";
import styles from "./FloatingContact.module.css";

const WA_TEXT = "Hi Bright Infonet, I’d like to know more about your services.";

/** Fixed Call and WhatsApp buttons, bottom-right on every page. Hidden if the numbers are empty. */
export default function FloatingContact() {
  const { phone, whatsapp } = siteConfig;
  if (!phone && !whatsapp) return null;

  return (
    <div className={styles.wrap}>
      {phone && (
        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className={`${styles.btn} ${styles.call}`}
          aria-label={`Call us on ${phone}`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
          </svg>
          <span className={styles.label}>Call {phone}</span>
        </a>
      )}
      {whatsapp && (
        <a
          href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(WA_TEXT)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.btn} ${styles.whatsapp}`}
          aria-label="Chat with us on WhatsApp (opens in a new tab)"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.21 4.25-9.46 9.48-9.46a9.4 9.4 0 0 1 6.7 2.78 9.4 9.4 0 0 1 2.77 6.7c0 5.22-4.25 9.46-9.47 9.46Zm8.06-17.52A11.32 11.32 0 0 0 12.05.64C5.77.64.66 5.75.66 12.03c0 2 .52 3.96 1.52 5.69L.57 23.6l6.03-1.58a11.37 11.37 0 0 0 5.44 1.39h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.33-8.05Z" />
          </svg>
          <span className={styles.label}>Chat on WhatsApp</span>
        </a>
      )}
    </div>
  );
}
