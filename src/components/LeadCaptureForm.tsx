"use client";

import { useState, type FormEvent } from "react";
import home from "./home/Home.module.css";
import styles from "./LeadCaptureForm.module.css";
import { trackEvent } from "@/lib/analytics";

// Inlined at build time. Without an https endpoint only the download button renders (no form).
const ENDPOINT = process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT ?? "";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Errors = Partial<Record<"name" | "email", string>>;
type Status = "idle" | "sending" | "sent" | "failed";

/**
 * Lead magnet: a direct download, or — when NEXT_PUBLIC_LEAD_FORM_ENDPOINT is set — a short
 * name/email/company form posted to that endpoint (e.g. a form backend), with the download
 * offered once the form is sent.
 */
export default function LeadCaptureForm({
  downloadHref,
  downloadLabel,
  form,
}: {
  downloadHref: string;
  downloadLabel: string;
  /** GA4 `form` parameter, e.g. "urs_template" */
  form: string;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const download = (
    <a href={downloadHref} download className={home.btnPrimary}>
      {downloadLabel} <span className={home.btnArrow}>&darr;</span>
    </a>
  );

  if (!ENDPOINT.startsWith("https://")) {
    return <div className={styles.wrap}>{download}</div>;
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const el = e.currentTarget;
    const data = new FormData(el);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please tell us your name.";
    if (!EMAIL_RE.test(email))
      next.email = "Please enter a valid email address.";
    setErrors(next);
    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      el.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    data.set("name", name);
    data.set("email", email);
    data.set("form", form);
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      trackEvent("generate_lead", { form });
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  };

  const field = (
    name: "name" | "email",
    label: string,
    opts: { type?: string; autoComplete: string; required?: boolean },
  ) => {
    const id = `lead-${name}`;
    const error = errors[name];
    return (
      <div className={styles.field}>
        <label htmlFor={id} className={styles.label}>
          {label}
          {opts.required && <span aria-hidden="true"> *</span>}
        </label>
        <input
          id={id}
          name={name}
          type={opts.type ?? "text"}
          autoComplete={opts.autoComplete}
          className={styles.input}
          aria-required={opts.required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          onInput={() =>
            error && setErrors((prev) => ({ ...prev, [name]: undefined }))
          }
        />
        {error && (
          <span id={`${id}-error`} className={styles.error}>
            {error}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className={styles.wrap}>
      {status === "sent" ? (
        download
      ) : (
        <form className={styles.form} noValidate onSubmit={onSubmit}>
          {field("name", "Your name", { autoComplete: "name", required: true })}
          {field("email", "Work email", {
            type: "email",
            autoComplete: "email",
            required: true,
          })}
          <div className={`${styles.field} ${styles.fieldWide}`}>
            <label htmlFor="lead-company" className={styles.label}>
              Company (optional)
            </label>
            <input
              id="lead-company"
              name="company"
              autoComplete="organization"
              className={styles.input}
            />
          </div>
          <p className={styles.consent}>
            By sending this form you agree that Bright Infonet may email you
            about this template and related services. We do not sell your
            details, and you can ask us to delete them at any time.
          </p>
          <div className={styles.actions}>
            <button
              type="submit"
              className={`${home.btnPrimary} ${styles.submit}`}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Get the template"}{" "}
              <span className={home.btnArrow}>&rarr;</span>
            </button>
          </div>
        </form>
      )}
      <p
        className={`${styles.status} ${status === "failed" ? styles.statusError : ""}`}
        role="status"
        aria-live="polite"
      >
        {status === "sent" && "Thanks. Your download is ready."}
        {status === "failed" && (
          <>
            We couldn&rsquo;t send the form just now. You can still{" "}
            <a href={downloadHref} download>
              download the template directly
            </a>
            .
          </>
        )}
      </p>
    </div>
  );
}
