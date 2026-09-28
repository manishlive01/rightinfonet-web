"use client";

import styles from "./Home.module.css";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Work from "./Work";
import Services from "./Services";
import Process from "./Process";
import Academy from "./Academy";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className={styles.root}>
      <Hero />
      <Marquee />
      <Work />
      <Services />
      <Process />
      <Academy />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
