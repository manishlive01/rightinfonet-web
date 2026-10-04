import Link from "next/link";
import home from "../home/Home.module.css";
import Reveal from "../home/Reveal";
import styles from "./Trust.module.css";
import { pricingFor } from "@/content/trust";

/** "Starts from" price for a landing page, from PRICING. Renders nothing until the owner sets one. */
export default function PricingBlock({ path }: { path: string }) {
  const price = pricingFor(path);
  if (!price) return null;

  return (
    <section className={styles.section} aria-labelledby="pricing-title">
      <Reveal className={styles.panel}>
        <h2 id="pricing-title" className={`${styles.label} ${home.mono}`}>
          Pricing
        </h2>
        <p className={`${styles.priceFrom} ${home.serif}`}>Starts from {price.from}</p>
        {price.note && <p className={styles.priceNote}>{price.note}</p>}
        <Link href="/#contact" className={styles.link}>
          Get a written quote <span aria-hidden="true">&rarr;</span>
        </Link>
      </Reveal>
    </section>
  );
}
