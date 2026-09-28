"use client";

import { useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { useInView } from "./useInView";

export type InViewProps = {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  rootMargin?: string;
  once?: boolean;
  [key: string]: unknown;
};

/** Sets data-in="true" once the element scrolls into view so CSS can drive the animation. */
export default function InView({
  as: Tag = "div",
  children,
  rootMargin,
  once,
  ...rest
}: InViewProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { rootMargin, once });
  return (
    <Tag ref={ref} data-in={inView ? "true" : "false"} {...rest}>
      {children}
    </Tag>
  );
}
