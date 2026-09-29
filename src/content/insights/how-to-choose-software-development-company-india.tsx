import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import type { Post } from "./types";

export const howToChooseSoftwareDevelopmentCompanyIndia: Post = {
  slug: "how-to-choose-software-development-company-india",
  title:
    "How to choose a software development company in India: a checklist for founders and CTOs",
  metaTitle: "How to Choose a Software Development Company in India",
  description:
    "How to choose a software development company in India: a checklist for founders and CTOs covering due diligence, contracts, IP, pricing models and red flags.",
  excerpt:
    "A practical checklist for choosing a software development partner in India — the criteria that matter, how to check them, what the contract should say, and the red flags to walk away from.",
  category: "Choosing a partner",
  cover: "vmodel",
  published: "2026-09-28",
  readingMinutes: 8,
  keywords: [
    "how to choose a software development company",
    "software development company India",
    "software development company Mohali",
    "software company Chandigarh",
    "IT company Panchkula",
    "custom software development India",
    "software outsourcing checklist",
    "hire software development team India",
  ],
  takeaways: [
    "Judge a partner on evidence — shipped work, a demo of their process, and the actual people who will build your product — not on a sales deck.",
    "Due diligence is quick: a reference call, a code sample, a paid discovery phase and a look at how they report progress.",
    "The contract should give you the IP, the code repository, the cloud accounts and a clean way to leave.",
    "Walk away from vague scope, no written estimates, reluctance to show code, or teams who agree to everything.",
  ],
  intro: (
    <>
      <p>
        To choose a software development company in India, check four things:
        evidence of similar work you can see or use, a clear and visible
        delivery process, the seniority of the people who will actually build
        your product, and a contract that gives you the IP, code and accounts.
        Then start with a small paid phase before the full build.
      </p>
      <p>
        India has a deep pool of software teams, from solo freelancers to large
        firms, which makes choosing harder rather than easier. This checklist is
        written for founders and CTOs who want a partner they can rely on for
        years, not just a quote.
      </p>
    </>
  ),
  sections: [
    {
      id: "criteria",
      title: "The criteria that matter most",
      body: (
        <>
          <h3>Relevant, visible work</h3>
          <p>
            Ask for products you can download, log into or demo — ideally in a
            domain close to yours. Screenshots prove design; working software
            proves delivery.
          </p>
          <h3>Who will actually build it</h3>
          <p>
            Many teams sell with senior people and deliver with juniors. Ask to
            meet the designer, lead engineer and project lead who will be on
            your project, and ask how long they’ve worked together.
          </p>
          <h3>Process you can see</h3>
          <p>
            Look for regular demos of working software, written progress
            updates, code review on every change and automated tests. If you
            can’t see progress every week or two, you won’t see problems early
            either.
          </p>
          <h3>Technical judgement</h3>
          <p>
            A good partner will push back, suggest a smaller first release and
            explain trade-offs in plain language. Agreeing to everything in the
            first meeting is not a strength.
          </p>
          <h3>Fit with your stage</h3>
          <p>
            An early-stage founder needs product thinking and speed; an
            enterprise CTO may need documentation, security reviews and
            integration with existing teams. Choose a partner who already works
            that way.
          </p>
        </>
      ),
    },
    {
      id: "due-diligence",
      title: "Due diligence in a week",
      body: (
        <>
          <p>
            You don’t need a months-long procurement process. This is enough for
            most projects:
          </p>
          <Checklist
            items={[
              <>
                <strong>Reference call</strong> with a past client — ask what
                went wrong and how it was handled.
              </>,
              <>
                <strong>Code sample</strong> or a walkthrough of a real
                repository, with tests and review history.
              </>,
              <>
                <strong>Process demo</strong> — ask to see a real weekly update
                or sprint board (anonymised is fine).
              </>,
              <>
                <strong>Written estimate</strong> with scope, assumptions and
                exclusions, not a single number.
              </>,
              <>
                <strong>Security basics</strong> — how they handle access,
                secrets, backups and your data.
              </>,
              <>
                <strong>Paid discovery</strong> — a short, fixed-price phase to
                define scope before the main build.
              </>,
            ]}
          />
          <p>
            Paid discovery is the most useful step. In a few weeks you get a
            scope, designs and an estimate you own — and a real sense of how the
            team works — before the larger commitment.
          </p>
        </>
      ),
    },
    {
      id: "pricing-models",
      title: "Pricing models compared",
      body: (
        <>
          <DataTable
            caption="Common pricing models for software projects"
            head={["Model", "How it works", "Best for", "Watch out for"]}
            rows={[
              [
                "Fixed price",
                "Agreed scope for an agreed price",
                "Small, well-defined projects or discovery phases",
                "Rigid change process; padding for risk",
              ],
              [
                "Time and materials",
                "Pay for time spent, usually monthly",
                "Evolving products where scope will change",
                "Needs visible progress and a budget cap",
              ],
              [
                "Dedicated team",
                "A set team works only on your product",
                "Long-running products with steady work",
                "You manage priorities; ramp-up time",
              ],
              [
                "Phased fixed price",
                "Fixed price per phase, re-estimated each phase",
                "Most new products",
                "Clear phase exit criteria needed",
              ],
            ]}
          />
          <p>
            Rates vary widely by city, seniority and specialism, so compare what
            you get for the money — seniority, process, included design and
            testing — rather than the hourly rate alone.
          </p>
        </>
      ),
    },
    {
      id: "contracts-ip",
      title: "Contracts, IP and ownership",
      body: (
        <>
          <p>
            Whatever the pricing model, the contract should make these points
            clear:
          </p>
          <ul>
            <li>
              <strong>IP assignment</strong> — you own the code, designs and
              documentation once paid for.
            </li>
            <li>
              <strong>Repository ownership</strong> — code lives in your GitHub
              or GitLab organisation, or is transferred on a schedule.
            </li>
            <li>
              <strong>Cloud and store accounts</strong> — hosting, domains, App
              Store and Play Store accounts are in your name.
            </li>
            <li>
              <strong>Confidentiality</strong> — an NDA covering your data and
              business information.
            </li>
            <li>
              <strong>Open-source use</strong> — a list of licences used, with
              nothing that restricts your commercial use.
            </li>
            <li>
              <strong>Warranty and support</strong> — how long bugs are fixed
              free after delivery.
            </li>
            <li>
              <strong>Exit and handover</strong> — notice period, handover
              documentation and access transfer.
            </li>
          </ul>
          <Callout title="Get a lawyer to read it">
            <p>
              This checklist is a starting point, not legal advice. For larger
              contracts, or where data protection and cross-border work are
              involved, have a lawyer review the terms.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "communication",
      title: "Communication and working rhythm",
      body: (
        <>
          <p>
            Most failed projects fail on communication, not code. Agree up front
            on:
          </p>
          <ul>
            <li>A single point of contact on each side.</li>
            <li>A regular demo of working software — weekly or fortnightly.</li>
            <li>
              A written update covering what shipped, what’s next and any risks.
            </li>
            <li>
              Shared tools: issue tracker, chat channel, design files and a
              staging environment you can use.
            </li>
            <li>How decisions and scope changes are recorded.</li>
            <li>Working-hour overlap, if you’re in another time zone.</li>
          </ul>
          <p>
            If you’re outside India, our guide to{" "}
            <Link href="/insights/outsourcing-app-development-to-india">
              outsourcing app development to India
            </Link>{" "}
            covers time zones and engagement models in more detail.
          </p>
        </>
      ),
    },
    {
      id: "red-flags",
      title: "Red flags to walk away from",
      body: (
        <>
          <Checklist
            items={[
              "A price given before they understand your users and flows.",
              "No written scope, assumptions or exclusions.",
              "Reluctance to show code, tests or a real progress update.",
              "You can’t meet the people who will build your product.",
              "They want to keep the code, hosting or store accounts in their name.",
              "Everything is “easy” and nothing is pushed back on.",
              "No plan for testing, security or upkeep after launch.",
              "Pressure to sign quickly with a large upfront payment.",
            ]}
          />
          <p>
            One red flag may have an innocent explanation. Several together
            usually predict how the project will go.
          </p>
        </>
      ),
    },
    {
      id: "where-we-fit",
      title: "Where we fit",
      body: (
        <>
          <p>
            We’re an AI-first software studio based in the Tricity, working with
            clients across India and worldwide. We’re a small senior team rather
            than a large firm: the people you meet are the people who design and
            build your product. Every Friday you get a live demo, every week a
            written update, and every change is code-reviewed.
          </p>
          <p>
            We build web platforms, Flutter mobile apps, AI agents and regulated
            software for life sciences. If that fits what you need, see{" "}
            <Link href="/process">how we work</Link>, browse{" "}
            <Link href="/work">our work</Link>, or{" "}
            <Link href="/#contact">start with a conversation</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "How do I choose a good software development company in India?",
      a: "Look for relevant work you can see, a visible delivery process, senior people who will actually build your product, and a contract that gives you the IP and accounts. Start with a small paid discovery phase.",
    },
    {
      q: "What questions should I ask a software development company?",
      a: "Ask who will work on your project, how you will see progress each week, how they test and review code, what is excluded from the estimate, and who owns the code and accounts.",
    },
    {
      q: "Is fixed price or time and materials better for software development?",
      a: "Fixed price suits small, well-defined work; time and materials suits products whose scope will evolve. Many teams use a phased fixed price as a middle ground.",
    },
    {
      q: "Who owns the code when I outsource software development?",
      a: "You should, once it is paid for. Make sure the contract assigns IP to you and that the repository, hosting and store accounts are in your name.",
    },
    {
      q: "What are red flags when hiring a software company?",
      a: "Prices given before understanding scope, no written assumptions, reluctance to show code or progress, not meeting the actual team, and keeping accounts in their own name.",
    },
    {
      q: "What is a paid discovery phase?",
      a: "A short, fixed-price phase where the team defines scope, designs key flows and produces an estimate before the main build. It lets you test the partnership with low risk.",
    },
  ],
};
