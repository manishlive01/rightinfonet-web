import type { ReactNode } from "react";
import styles from "./Tone.module.css";

/** Wraps a section in a coloured, rounded panel; see Tone.module.css for the palettes. */
export default function Tone({
  kind,
  children,
}: {
  kind: "raised" | "ember";
  children: ReactNode;
}) {
  return <div className={styles[kind]}>{children}</div>;
}
