import type { ElementType } from "react";
import InView, { type InViewProps } from "./motion/InView";
import motion from "./motion/Motion.module.css";

type RevealProps = InViewProps & {
  delay?: number;
  /** "view" (default) fades in when scrolled into view; "load" fades in on first paint with CSS
   * only, for above-the-fold text that must not wait for JavaScript. */
  trigger?: "view" | "load";
};

export default function Reveal({
  className = "",
  delay,
  style,
  trigger = "view",
  ...rest
}: RevealProps) {
  const revealStyle = delay
    ? { ...style, "--reveal-delay": `${delay}s` }
    : style;
  if (trigger === "load") {
    // rootMargin / once only matter for the scroll trigger
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, rootMargin, once, ...props } = rest;
    const Tag = (as ?? "div") as ElementType;
    return (
      <Tag
        className={`${motion.revealLoad} ${className}`}
        style={revealStyle}
        {...props}
      />
    );
  }
  return (
    <InView
      className={`${motion.reveal} ${className}`}
      style={revealStyle}
      {...rest}
    />
  );
}
