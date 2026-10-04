"use client";

import Link from "next/link";
import { useId, useState } from "react";
import home from "../home/Home.module.css";
import styles from "./CostCalculator.module.css";
import {
  COST_PRODUCTS,
  costBandIndex,
  defaultCostAnswers,
} from "@/content/cost-calculator";

/**
 * Indicative cost calculator. Every answer points at one of the published bands in
 * src/content/cost-calculator.ts and the result is the largest one, so the output is always a
 * range that already appears in our cost articles. Server-rendered with the defaults selected.
 */
export default function CostCalculator() {
  const uid = useId();
  const [productId, setProductId] = useState(COST_PRODUCTS[0].id);
  const product =
    COST_PRODUCTS.find((p) => p.id === productId) ?? COST_PRODUCTS[0];
  const [answers, setAnswers] = useState(() =>
    Object.fromEntries(COST_PRODUCTS.map((p) => [p.id, defaultCostAnswers(p)])),
  );
  const current = answers[product.id];
  const band = product.bands[costBandIndex(product, current)];
  const notes = product.questions.flatMap((q) =>
    q.options
      .filter((o) => o.note && current[q.id]?.includes(o.id))
      .map((o) => o.note as string),
  );

  const choose = (questionId: string, optionId: string, multi: boolean) =>
    setAnswers((prev) => {
      const selected = prev[product.id][questionId] ?? [];
      const next = multi
        ? selected.includes(optionId)
          ? selected.filter((id) => id !== optionId)
          : [...selected, optionId]
        : [optionId];
      return {
        ...prev,
        [product.id]: { ...prev[product.id], [questionId]: next },
      };
    });

  return (
    <div className={styles.calc}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>What are you building?</legend>
          <div className={styles.options}>
            {COST_PRODUCTS.map((p) => (
              <label key={p.id} className={styles.option}>
                <input
                  type="radio"
                  name={`${uid}-product`}
                  value={p.id}
                  checked={p.id === product.id}
                  onChange={() => setProductId(p.id)}
                />
                <span>{p.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {product.questions.map((q) => (
          <fieldset key={`${product.id}-${q.id}`} className={styles.fieldset}>
            <legend className={styles.legend}>{q.legend}</legend>
            <div className={styles.options}>
              {q.options.map((o) => (
                <label key={o.id} className={styles.option}>
                  <input
                    type={q.type}
                    name={`${uid}-${product.id}-${q.id}`}
                    value={o.id}
                    checked={current[q.id]?.includes(o.id) ?? false}
                    onChange={() => choose(q.id, o.id, q.type === "checkbox")}
                  />
                  <span>{o.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </form>

      <div className={styles.result}>
        <p className={`${styles.resultLabel} ${home.mono}`}>
          Indicative estimate
        </p>
        {/* announced to screen readers whenever an answer changes the band */}
        <div aria-live="polite" aria-atomic="true">
          <p className={styles.band}>{band.label}</p>
          <p className={`${styles.range} ${home.serif}`}>
            {band.range}
            {band.usd && <span className={styles.usd}> ({band.usd})</span>}
          </p>
          {band.timeline && (
            <p className={styles.meta}>Typical timeline: {band.timeline}</p>
          )}
          <p className={styles.meta}>Typical scope: {band.scope}.</p>
          {notes.map((n) => (
            <p key={n} className={styles.note}>
              {n}
            </p>
          ))}
        </div>
        <p className={styles.meta}>{product.upkeep}</p>
        <p className={styles.disclaimer}>
          This is an indicative range for India in 2026, not a quote. It varies
          with scope, integrations, design depth and who builds it. Get a
          written quote for your project.
        </p>
        <div className={styles.actions}>
          <Link href="/#contact" className={home.btnPrimary}>
            Get a written quote <span className={home.btnArrow}>&rarr;</span>
          </Link>
          <Link
            href={`/insights/${product.source.slug}`}
            className={styles.source}
          >
            How these ranges work: {product.source.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
