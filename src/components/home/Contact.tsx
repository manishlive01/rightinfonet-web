"use client";

import { useState, type FormEvent } from "react";
import home from "./Home.module.css";
import styles from "./Contact.module.css";
import Reveal from "./Reveal";
import SplitText from "./motion/SplitText";
import { CONTACT_BUDGETS, CONTACT_INTERESTS, CONTACT_STEPS } from "./data";
import { siteConfig } from "@/lib/site-config";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Field({
  name,
  label,
  error,
  type = "text",
  autoComplete,
  multiline = false,
  required = false,
}: {
  name: string;
  label: string;
  error?: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
  required?: boolean;
}) {
  const id = `contact-${name}`;
  const common = {
    id,
    name,
    placeholder: " ",
    className: styles.input,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
    "aria-required": required || undefined,
  };
  return (
    <div className={`${styles.field} ${multiline ? styles.fieldWide : ""}`}>
      {multiline ? (
        <textarea {...common} rows={4} />
      ) : (
        <input {...common} type={type} autoComplete={autoComplete} />
      )}
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <span className={styles.fieldLine} aria-hidden="true" />
      {error && (
        <span id={`${id}-error`} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();
    const name = get("name");
    const email = get("email");
    const company = get("company");
    const message = get("message");
    const interests = data.getAll("interest").map(String);
    const budget = get("budget");

    const next: Errors = {};
    if (!name) next.name = "Please tell us your name.";
    if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";
    if (message.length < 10) next.message = "A line or two about the project helps us reply properly.";
    setErrors(next);

    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const lines = [`Name: ${name}`, `Email: ${email}`];
    if (company) lines.push(`Company: ${company}`);
    if (interests.length) lines.push(`Interested in: ${interests.join(", ")}`);
    if (budget) lines.push(`Budget: ${budget}`);
    lines.push("", message);
    const subject = `New project enquiry — ${company || name}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    setSent(true);
  };

  const clearError = (target: EventTarget) => {
    const key = (target as HTMLInputElement).name as keyof Errors;
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.head}>
        <Reveal as="span" className={home.kicker}>
          <span className={home.kickerDash} />
          (07) Start a project
        </Reveal>
        <SplitText
          as="h2"
          id="contact-title"
          className={`${styles.headline} ${home.serif}`}
          parts={["Got an idea? ", { text: "Let’s ship it.", className: home.accentItalic }]}
        />
      </div>

      <div className={styles.grid}>
        <Reveal className={styles.info}>
          <p className={styles.lead}>
            Tell us what you&rsquo;re building. You&rsquo;ll hear back from an engineer &mdash;
            not a sales rep &mdash; within one working day.
          </p>
          <a href={`mailto:${siteConfig.email}`} className={`${styles.mail} ${home.serif}`}>
            {siteConfig.email}
          </a>
          {siteConfig.phone && (
            <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className={styles.phone}>
              {siteConfig.phone}
            </a>
          )}
          <ol className={styles.steps}>
            {CONTACT_STEPS.map((step, i) => (
              <li key={step.t} className={styles.step}>
                <span className={`${styles.stepNum} ${home.mono}`}>0{i + 1}</span>
                <span>
                  <span className={styles.stepTitle}>{step.t}</span>
                  <span className={styles.stepDesc}>{step.d}</span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className={styles.card} delay={0.1}>
          {sent && (
            <div className={styles.sent} role="status">
              <span className={styles.sentIcon} aria-hidden="true">
                &#10003;
              </span>
              <h3 className={`${styles.sentTitle} ${home.serif}`}>Almost there.</h3>
              <p className={styles.sentText}>
                Your email app should have opened with your message ready to send. If it
                didn&rsquo;t, write to us at{" "}
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
              </p>
              <button type="button" className={styles.reset} onClick={() => setSent(false)}>
                Edit my message
              </button>
            </div>
          )}
          {/* stays mounted while hidden so "Edit my message" keeps what was typed */}
          <form
            className={styles.form}
            hidden={sent}
            noValidate
            onSubmit={onSubmit}
            onInput={(e) => clearError(e.target)}
          >
              <fieldset className={styles.chips}>
                <legend className={`${styles.legend} ${home.mono}`}>I&rsquo;m interested in</legend>
                {CONTACT_INTERESTS.map((item) => (
                  <label key={item} className={styles.chip}>
                    <input type="checkbox" name="interest" value={item} className={styles.chipInput} />
                    <span className={styles.chipLabel}>{item}</span>
                  </label>
                ))}
              </fieldset>

              <div className={styles.fields}>
                <Field name="name" label="Your name" autoComplete="name" error={errors.name} required />
                <Field
                  name="email"
                  label="Work email"
                  type="email"
                  autoComplete="email"
                  error={errors.email}
                  required
                />
                <Field name="company" label="Company (optional)" autoComplete="organization" />
                <Field
                  name="message"
                  label="Tell us about the project"
                  error={errors.message}
                  multiline
                  required
                />
              </div>

              <fieldset className={styles.chips}>
                <legend className={`${styles.legend} ${home.mono}`}>Budget</legend>
                {CONTACT_BUDGETS.map((item) => (
                  <label key={item} className={styles.chip}>
                    <input type="radio" name="budget" value={item} className={styles.chipInput} />
                    <span className={styles.chipLabel}>{item}</span>
                  </label>
                ))}
              </fieldset>

              <div className={styles.submitRow}>
                <button type="submit" className={styles.submit}>
                  <span>Send enquiry</span>
                  <span className={styles.submitIcon} aria-hidden="true">
                    &rarr;
                  </span>
                </button>
                <span className={styles.hint}>Opens your email app with everything filled in.</span>
              </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
