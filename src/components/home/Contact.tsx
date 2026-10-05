"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
} from "react";
import home from "./Home.module.css";
import styles from "./Contact.module.css";
import Reveal from "./Reveal";
import SplitText from "./motion/SplitText";
import { CONTACT_BUDGETS, CONTACT_INTERESTS, CONTACT_STEPS } from "./data";
import { napAddressLine, siteConfig } from "@/lib/site-config";
import SocialLinks from "./SocialLinks";
import CalendlyButton from "../CalendlyButton";
import { trackEvent } from "@/lib/analytics";

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

/** idle → sending → sent (via the API or the mail app) | failed */
type Status = "idle" | "sending" | "sent" | "failed";

const WHATSAPP_HREF = siteConfig.whatsapp
  ? `https://wa.me/${siteConfig.whatsapp}`
  : "";

/**
 * `formEndpoint`: a form backend is configured on the server (decided at build time), so the
 * form posts to /api/contact. Without one it opens the visitor's mail app (mailto) as before.
 */
export default function Contact({
  formEndpoint = false,
}: {
  formEndpoint?: boolean;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [via, setVia] = useState<"api" | "mailto">(
    formEndpoint ? "api" : "mailto",
  );
  const sent = status === "sent";
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const statusHeadingRef = useRef<HTMLHeadingElement>(null);
  const addressLine = napAddressLine();

  // move focus to the result heading so keyboard and screen-reader users land on it
  useEffect(() => {
    if (status === "sent" || status === "failed") {
      statusHeadingRef.current?.focus();
    }
  }, [status]);

  const openForm = (interest?: string) => {
    if (interest) {
      const box = formRef.current?.querySelector<HTMLInputElement>(
        `input[name="interest"][value="${CSS.escape(interest)}"]`,
      );
      if (box) box.checked = true;
    }
    setOpen(true);
    // move focus into the form once it has started to unfold, without jumping the page
    setTimeout(
      () =>
        formRef.current
          ?.querySelector<HTMLElement>("input")
          ?.focus({ preventScroll: true }),
      450,
    );
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
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
    if (!EMAIL_RE.test(email))
      next.email = "Please enter a valid email address.";
    if (message.length < 10)
      next.message = "A line or two about the project helps us reply properly.";
    setErrors(next);

    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const openMailApp = () => {
      const lines = [`Name: ${name}`, `Email: ${email}`];
      if (company) lines.push(`Company: ${company}`);
      if (interests.length)
        lines.push(`Interested in: ${interests.join(", ")}`);
      if (budget) lines.push(`Budget: ${budget}`);
      lines.push("", message);
      const subject = `New project enquiry — ${company || name}`;
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(lines.join("\n"))}`;
      // a mailto hand-off is counted as a lead, as before
      trackEvent("generate_lead", { form: "contact" });
      setVia("mailto");
      setStatus("sent");
    };

    if (!formEndpoint) {
      openMailApp();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          message,
          interests,
          budget,
          website: get("website"),
        }),
      });
      if (res.ok) {
        trackEvent("generate_lead", { form: "contact" });
        setVia("api");
        setStatus("sent");
        return;
      }
      const result = (await res.json().catch(() => ({}))) as {
        fallback?: boolean;
      };
      // the server has no form backend after all: hand off to the mail app
      if (res.status === 503 && result.fallback) {
        openMailApp();
        return;
      }
      setStatus("failed");
    } catch {
      setStatus("failed");
    }
  };

  const clearError = (target: EventTarget) => {
    const key = (target as HTMLInputElement).name as keyof Errors;
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-title"
    >
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.head}>
        <Reveal as="span" className={home.kicker}>
          <span className={home.kickerDash} />
          (08) Start a project
        </Reveal>
        <SplitText
          as="h2"
          id="contact-title"
          className={`${styles.headline} ${home.serif}`}
          parts={[
            "Got an idea? ",
            { text: "Let’s ship it.", className: home.accentItalic },
          ]}
        />
      </div>

      <div className={styles.grid}>
        <Reveal className={styles.info}>
          <p className={styles.lead}>
            Tell us what you&rsquo;re building. You&rsquo;ll hear back from an
            engineer &mdash; not a sales rep &mdash; within one working day.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className={`${styles.mail} ${home.serif}`}
          >
            {siteConfig.email}
          </a>
          <p className={styles.support}>
            Careers or internships? Write to{" "}
            <a href={`mailto:${siteConfig.hrEmail}`}>{siteConfig.hrEmail}</a>
          </p>
          {/* same NAP address line as the footer, schema and llms.txt (site-config) */}
          <address className={styles.support} style={{ fontStyle: "normal" }}>
            {siteConfig.name} &middot; {addressLine}
          </address>
          <SocialLinks />
          {siteConfig.phone && (
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
              className={styles.phone}
            >
              {siteConfig.phone}
            </a>
          )}
          {siteConfig.whatsapp && (
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.phone}
            >
              WhatsApp &rarr;
            </a>
          )}
          <CalendlyButton className={styles.phone} />
          <ol className={styles.steps}>
            {CONTACT_STEPS.map((step, i) => (
              <li key={step.t} className={styles.step}>
                <span className={`${styles.stepNum} ${home.mono}`}>
                  0{i + 1}
                </span>
                <span>
                  <span className={styles.stepTitle}>{step.t}</span>
                  <span className={styles.stepDesc}>{step.d}</span>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal
          className={`${styles.card} ${open ? styles.cardOpen : ""}`}
          delay={0.1}
        >
          <div className={styles.intro} inert={open}>
            <div className={styles.collapse}>
              <div className={styles.introInner}>
                <span className={`${styles.introPill} ${home.mono}`}>
                  <span className={styles.introDot} aria-hidden="true" />
                  Takes about two minutes
                </span>
                <p className={`${styles.introTitle} ${home.serif}`}>
                  Have something in mind?{" "}
                  <span className={home.accentItalic}>Tell us about it.</span>
                </p>
                <p className={styles.introText}>
                  Pick what you need, add a line about the project, and an
                  engineer gets back to you. No long forms, no sales pitch.
                </p>
                <ul
                  className={styles.ghostChips}
                  aria-label="Start with a topic"
                >
                  {CONTACT_INTERESTS.map((item, i) => (
                    <li key={item} style={{ "--k": i } as CSSProperties}>
                      <button
                        type="button"
                        className={styles.ghostChip}
                        onClick={() => openForm(item)}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={styles.submit}
                  onClick={() => openForm()}
                  aria-expanded={open}
                  aria-controls="contact-panel"
                >
                  <span>Start your brief</span>
                  <span className={styles.submitIcon} aria-hidden="true">
                    &rarr;
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div id="contact-panel" className={styles.panel} inert={!open}>
            <div className={styles.collapse}>
              {/* always mounted so screen readers announce the result */}
              <div role="status" aria-live="polite">
                {sent && (
                  <div className={styles.sent}>
                    <span className={styles.sentIcon} aria-hidden="true">
                      &#10003;
                    </span>
                    <h3
                      ref={statusHeadingRef}
                      tabIndex={-1}
                      className={`${styles.sentTitle} ${home.serif}`}
                    >
                      {via === "api" ? "Thanks, we got it." : "Almost there."}
                    </h3>
                    {via === "api" ? (
                      <p className={styles.sentText}>
                        An engineer replies within one working day.
                      </p>
                    ) : (
                      <p className={styles.sentText}>
                        Your email app should have opened with your message
                        ready to send. If it didn&rsquo;t, write to us at{" "}
                        <a href={`mailto:${siteConfig.email}`}>
                          {siteConfig.email}
                        </a>
                        {WHATSAPP_HREF && (
                          <>
                            {" "}
                            or{" "}
                            <a
                              href={WHATSAPP_HREF}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              message us on WhatsApp
                            </a>
                          </>
                        )}
                        .
                      </p>
                    )}
                    {via === "mailto" && (
                      <button
                        type="button"
                        className={styles.reset}
                        onClick={() => setStatus("idle")}
                      >
                        Edit my message
                      </button>
                    )}
                  </div>
                )}
                {status === "failed" && (
                  <div className={styles.sentText}>
                    <h3
                      ref={statusHeadingRef}
                      tabIndex={-1}
                      className={home.mono}
                    >
                      We couldn&rsquo;t send your message.
                    </h3>
                    <p>
                      Please try again, or write to us at{" "}
                      <a href={`mailto:${siteConfig.email}`}>
                        {siteConfig.email}
                      </a>
                      {WHATSAPP_HREF && (
                        <>
                          {" "}
                          or{" "}
                          <a
                            href={WHATSAPP_HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            message us on WhatsApp
                          </a>
                        </>
                      )}
                      . What you typed is still in the form.
                    </p>
                  </div>
                )}
              </div>
              {/* stays mounted while hidden so "Edit my message" keeps what was typed */}
              <form
                ref={formRef}
                className={styles.form}
                hidden={sent}
                noValidate
                onSubmit={onSubmit}
                onInput={(e) => clearError(e.target)}
              >
                <fieldset className={styles.chips}>
                  <legend className={`${styles.legend} ${home.mono}`}>
                    I&rsquo;m interested in
                  </legend>
                  {CONTACT_INTERESTS.map((item) => (
                    <label key={item} className={styles.chip}>
                      <input
                        type="checkbox"
                        name="interest"
                        value={item}
                        className={styles.chipInput}
                      />
                      <span className={styles.chipLabel}>{item}</span>
                    </label>
                  ))}
                </fieldset>

                <div className={styles.fields}>
                  <Field
                    name="name"
                    label="Your name"
                    autoComplete="name"
                    error={errors.name}
                    required
                  />
                  <Field
                    name="email"
                    label="Work email"
                    type="email"
                    autoComplete="email"
                    error={errors.email}
                    required
                  />
                  <Field
                    name="company"
                    label="Company (optional)"
                    autoComplete="organization"
                  />
                  <Field
                    name="message"
                    label="Tell us about the project"
                    error={errors.message}
                    multiline
                    required
                  />
                </div>

                <fieldset className={styles.chips}>
                  <legend className={`${styles.legend} ${home.mono}`}>
                    Budget
                  </legend>
                  {CONTACT_BUDGETS.map((item) => (
                    <label key={item} className={styles.chip}>
                      <input
                        type="radio"
                        name="budget"
                        value={item}
                        className={styles.chipInput}
                      />
                      <span className={styles.chipLabel}>{item}</span>
                    </label>
                  ))}
                </fieldset>

                {/* honeypot for bots: off-screen (not display:none), skipped by keyboard and AT */}
                <div className={styles.honeypot} aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className={styles.submitRow}>
                  <button
                    type="submit"
                    className={styles.submit}
                    disabled={status === "sending"}
                  >
                    <span>
                      {status === "sending" ? "Sending…" : "Send enquiry"}
                    </span>
                    <span className={styles.submitIcon} aria-hidden="true">
                      &rarr;
                    </span>
                  </button>
                  <span className={styles.hint}>
                    {formEndpoint
                      ? "Sent straight to our team. An engineer replies within one working day."
                      : "Opens your email app with everything filled in."}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
