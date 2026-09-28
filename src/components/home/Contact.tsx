import styles from "./Home.module.css";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.contactGlow} aria-hidden="true" />
      <Reveal className={styles.contactInner}>
        <span className={styles.kicker}>
          <span className={styles.kickerDash} />
          (06) Start a project
          <span className={styles.kickerDash} />
        </span>
        <h2 className={`${styles.contactHeadline} ${styles.serif}`}>
          Got an idea? <span className={styles.accentItalic}>Let&rsquo;s ship it.</span>
        </h2>
        <p className={styles.contactLead}>
          Tell us what you&rsquo;re building. You&rsquo;ll hear back from an engineer &mdash;
          not a sales rep &mdash; within one working day.
        </p>
        <div className={styles.contactActions}>
          <a href="#contact" className={styles.btnPrimaryLg}>
            Book a 30-min call <span>&rarr;</span>
          </a>
          <a href="mailto:hello@brightinfonet.com" className={styles.emailLink}>
            hello@brightinfonet.com
          </a>
        </div>
      </Reveal>
    </section>
  );
}
