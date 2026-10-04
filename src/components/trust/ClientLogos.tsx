import Image from "next/image";
import home from "../home/Home.module.css";
import styles from "./Trust.module.css";
import { clientLogos } from "@/content/trust";

/** Logos of real clients who agreed to be shown. Renders nothing while the list is empty. */
export default function ClientLogos({ className = styles.section }: { className?: string }) {
  const logos = clientLogos();
  if (logos.length === 0) return null;

  return (
    <section className={className} aria-labelledby="clients-title">
      <h2 id="clients-title" className={`${styles.label} ${home.mono}`}>
        Teams we have built for
      </h2>
      <ul className={styles.logos}>
        {logos.map((l) => {
          const img = (
            <Image
              src={l.src}
              alt={l.name}
              width={l.width}
              height={l.height}
              className={styles.logo}
            />
          );
          return (
            <li key={l.name}>
              {l.href ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.logoLink}
                >
                  {img}
                </a>
              ) : (
                img
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
