import styles from "./Home.module.css";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Work from "./Work";
import Industries from "./Industries";
import Process from "./Process";
import About from "./About";
import AcademyTeaser from "./AcademyTeaser";
import InsightsTeaser from "./InsightsTeaser";
import Contact from "./Contact";
import Footer from "./Footer";
import Tone from "./Tone";
import SectionFx from "./SectionFx";
import Testimonials from "../trust/Testimonials";
import ClientLogos from "../trust/ClientLogos";

export default function Home() {
  return (
    <div className={styles.root}>
      <a href="#main" className={styles.skip}>
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Tone kind="raised" dots>
          <Services />
        </Tone>
        <SectionFx kind="lines">
          <Work />
        </SectionFx>
        {/* owner-gated: both render nothing until src/content/trust.ts has real entries */}
        <Testimonials />
        <ClientLogos />
        <SectionFx kind="orbits">
          <Industries />
        </SectionFx>
        <SectionFx kind="flow">
          <Process />
        </SectionFx>
        <Tone kind="raised">
          <SectionFx kind="grid">
            <About />
          </SectionFx>
        </Tone>
        <AcademyTeaser />
        <SectionFx kind="contours">
          <InsightsTeaser />
        </SectionFx>
        <Tone kind="ember">
          <SectionFx kind="embers">
            <Contact />
          </SectionFx>
        </Tone>
      </main>
      <Footer />
    </div>
  );
}
