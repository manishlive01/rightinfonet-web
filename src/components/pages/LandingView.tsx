import Link from "next/link";
import home from "../home/Home.module.css";
import work from "../home/Work.module.css";
import Reveal from "../home/Reveal";
import SectionHeading, { accent } from "../home/SectionHeading";
import { TRACKS } from "../home/data";
import FaqSection from "./FaqSection";
import PageHero from "./PageHero";
import PageLayout from "./PageLayout";
import styles from "./Pages.module.css";
import landing from "./Landing.module.css";
import { landingJsonLd } from "./landing-seo";
import ClientLogos from "../trust/ClientLogos";
import PricingBlock from "../trust/PricingBlock";
import ProofSlot from "../trust/ProofSlot";
import Testimonials from "../trust/Testimonials";
import { isPostSlugPublished } from "@/content/insights";
import type { Landing } from "@/content/landing/types";

/** Renders any keyword landing page (service, local, course or city training page). */
export default function LandingView({ page }: { page: Landing }) {
  const track =
    page.trackIndex !== undefined ? TRACKS[page.trackIndex] : undefined;
  const isAcademy = page.kind === "course" || page.kind === "training";
  const cta =
    page.cta ?? (isAcademy ? "Apply or ask a question" : "Start a project");
  // Links to blog posts that are still scheduled are dropped until the post goes live.
  const related = page.related.filter((r) => {
    const slug = r.href.match(/^\/insights\/([^/?#]+)/)?.[1];
    return !slug || isPostSlugPublished(slug);
  });

  return (
    <PageLayout jsonLd={landingJsonLd(page)}>
      <PageHero
        crumb={page.crumb}
        parent={page.parent}
        kicker={page.kicker}
        title={[
          `${page.title} `,
          { text: page.titleAccent, className: home.accentItalic },
        ]}
        lead={page.lead}
      >
        <div className={styles.heroActions}>
          <Link href="/#contact" className={home.btnPrimary}>
            {cta} <span className={home.btnArrow}>&rarr;</span>
          </Link>
          <Link
            href={isAcademy ? "/academy" : "/work"}
            className={home.btnOutline}
          >
            {isAcademy ? "All Academy tracks" : "See our work"}
          </Link>
        </div>
        {page.facts && (
          <ul className={landing.facts} aria-label="At a glance">
            {page.facts.map((f) => (
              <li key={f.k} className={landing.fact}>
                <span className={`${landing.factKey} ${home.mono}`}>{f.k}</span>
                <span className={landing.factVal}>{f.v}</span>
              </li>
            ))}
          </ul>
        )}
      </PageHero>

      <section className={styles.sectionPad} aria-label="Overview">
        <div className={landing.answer}>
          <Reveal as="p" className={`${landing.answerLead} ${home.serif}`}>
            {page.answer}
          </Reveal>
          <Reveal className={landing.answerBody} delay={0.1}>
            {page.about.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* owner-gated: render nothing until src/content/trust.ts has entries for this path */}
      <ProofSlot path={page.path} />
      <PricingBlock path={page.path} />

      {track && (
        <section
          id="syllabus"
          className={styles.sectionPad}
          aria-labelledby="syllabus-title"
        >
          <SectionHeading
            kicker={`${track.wk} weeks · ${track.format} · ${track.level}`}
            id="syllabus-title"
            title={["The ", accent("syllabus.")]}
            lead={track.pitch}
          />
          <ol className={landing.syllabus}>
            {track.mods.map((m) => (
              <li key={m.t} className={landing.module}>
                <span className={`${landing.moduleWeeks} ${home.mono}`}>
                  {m.a === m.b ? `Week ${m.a}` : `Weeks ${m.a}–${m.b}`}
                </span>
                <h3 className={`${landing.moduleTitle} ${home.serif}`}>
                  {m.t}
                </h3>
                <p className={landing.moduleDesc}>{m.d}</p>
              </li>
            ))}
          </ol>
          <p className={landing.capstone}>
            <strong>You&rsquo;ll ship:</strong> {track.cap}
          </p>
        </section>
      )}

      {page.sections.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className={styles.sectionPad}
          aria-labelledby={`${s.id}-title`}
        >
          <SectionHeading
            kicker={s.kicker}
            id={`${s.id}-title`}
            title={[`${s.title} `, accent(s.accent)]}
            lead={s.lead}
          />
          <div className={styles.cards3}>
            {s.cards.map((c, i) => (
              <Reveal
                key={c.t}
                as="article"
                className={`${styles.card} ${landing.cardSmall}`}
                delay={(i % 3) * 0.06}
              >
                <span className={`${styles.cardNum} ${home.mono}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={`${styles.cardTitle} ${home.serif}`}>{c.t}</h3>
                <p className={styles.cardText}>{c.d}</p>
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      {page.fit && (
        <section className={styles.sectionPad} aria-labelledby="fit-title">
          <SectionHeading
            kicker="Is this for you?"
            id="fit-title"
            title={["A good ", accent("fit if…")]}
          />
          <Reveal className={styles.panel}>
            <ul className={styles.checks}>
              {page.fit.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
        </section>
      )}

      <Testimonials path={page.path} className={styles.sectionPad} />
      <ClientLogos className={styles.sectionPad} />

      <FaqSection faqs={page.faqs} />

      {related.length > 0 && (
        <section className={styles.sectionPad} aria-labelledby="related-title">
          <SectionHeading
            kicker="Keep reading"
            id="related-title"
            title={["Related ", accent("pages.")]}
          />
          <ul className={landing.relatedList}>
            {related.map((r) => (
              <li key={r.href}>
                <Link href={r.href}>
                  <span>{r.label}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className={landing.ctaWrap}>
        <Reveal className={work.ctaBar}>
          <span className={`${work.ctaBarText} ${home.serif}`}>
            {isAcademy ? "Ready to start " : "Have a project in "}
            <span className={home.accentItalic}>
              {isAcademy ? "learning?" : "mind?"}
            </span>
          </span>
          <Link href="/#contact" className={home.btnOutline}>
            {isAcademy ? "Talk to a mentor" : "Talk to an engineer"}{" "}
            <span className={home.btnArrow}>&rarr;</span>
          </Link>
        </Reveal>
      </div>
    </PageLayout>
  );
}
