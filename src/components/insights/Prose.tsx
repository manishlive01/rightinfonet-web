import type { ReactNode } from "react";
import styles from "./Insights.module.css";

/** Building blocks for article bodies; plain elements (p, ul, h3…) are styled by .prose. */

/**
 * Link to an official external source (regulator, standards body). Same tab, followed (no
 * nofollow): citing primary sources is part of the article's evidence.
 */
export function Source({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} rel="noopener">
      {children}
    </a>
  );
}

export function Callout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className={styles.callout}>
      <p className={styles.calloutTitle}>{title}</p>
      {children}
    </aside>
  );
}

export function DataTable({
  caption,
  head,
  rows,
}: {
  caption: string;
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div
      className={styles.tableWrap}
      role="region"
      aria-label={caption}
      tabIndex={0}
    >
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={j} data-label={head[j]}>
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Checklist({ items }: { items: ReactNode[] }) {
  return (
    <ul className={styles.checklist}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
