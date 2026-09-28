"use client";

import { useRef, type CSSProperties, type ElementType } from "react";
import { useInView } from "./useInView";
import motion from "./Motion.module.css";

export type SplitPart = string | { text: string; className?: string };

type SplitTextProps = {
  parts: SplitPart[];
  as?: ElementType;
  className?: string;
  /** "load" animates on first paint (no JS needed); "view" waits until scrolled into view. */
  trigger?: "load" | "view";
  delay?: number;
  stagger?: number;
  id?: string;
};

/** Masked word-by-word rise. Words stay real text, so it is fully readable by search engines. */
export default function SplitText({
  parts,
  as: Tag = "span",
  className = "",
  trigger = "view",
  delay = 0,
  stagger = 0.055,
  id,
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref);

  let index = 0;
  const words = parts.flatMap((part, pi) => {
    const text = typeof part === "string" ? part : part.text;
    const partClass = typeof part === "string" ? "" : (part.className ?? "");
    return text
      .split(/(\s+)/)
      .filter(Boolean)
      .map((token, ti) => {
        if (/^\s+$/.test(token)) return " ";
        const i = index++;
        return (
          <span key={`${pi}-${ti}`} className={motion.word}>
            <span
              className={`${motion.wordInner} ${partClass}`}
              style={{ "--i": i } as CSSProperties}
            >
              {token}
            </span>
          </span>
        );
      });
  });

  const state = trigger === "load" ? motion.splitLoad : inView ? motion.splitIn : "";

  return (
    <Tag
      ref={ref}
      id={id}
      className={`${motion.split} ${state} ${className}`}
      style={{ "--split-delay": `${delay}s`, "--split-stagger": `${stagger}s` } as CSSProperties}
    >
      {words}
    </Tag>
  );
}
