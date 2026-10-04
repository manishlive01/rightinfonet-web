import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import type { Post } from "./types";

export const mvpDevelopmentCostTimeline: Post = {
  slug: "mvp-development-cost-timeline",
  title: "MVP development: cost, timeline and what to build first",
  metaTitle: "MVP Development: Cost, Timeline and What to Build First",
  description:
    "MVP development cost and timeline: how to scope a first release, a week-by-week plan, indicative budget ranges in India and what to cut to launch sooner.",
  excerpt:
    "How to scope a minimum viable product, what a realistic 10–12 week build looks like week by week, indicative MVP budgets in India, and the features to cut so you launch sooner.",
  category: "Choosing a partner",
  pillar: "cost",
  cover: "phones",
  published: "2026-09-28",
  readingMinutes: 8,
  keywords: [
    "MVP development cost",
    "MVP development timeline",
    "how to build an MVP",
    "MVP development company India",
    "startup app development India",
    "MVP development Chandigarh",
    "minimum viable product scope",
    "Flutter MVP development",
  ],
  takeaways: [
    "An MVP tests one core promise with real users; it is the smallest product that can prove or disprove your idea.",
    "Most MVPs take around 8–14 weeks from scoping to launch, and indicatively cost ₹5–20 lakh in India depending on scope.",
    "Build the one core flow end to end, plus the minimum admin you need to run it; cut everything else to a later phase.",
    "Plan what you’ll measure before you build, so launch tells you what to do next.",
  ],
  intro: (
    <>
      <p>
        A typical MVP takes around <strong>8–14 weeks</strong> from scoping to
        launch and, in India, indicatively costs <strong>₹5–20 lakh</strong>{" "}
        (about $6k–25k), depending on platforms, integrations and design depth.
        Build first the one flow that delivers your core promise, end to end,
        plus just enough admin to run it. Everything else waits.
      </p>
      <p>
        The hard part of an MVP isn’t building it — it’s deciding what to leave
        out. This guide covers how to scope, a week-by-week timeline, what
        drives the budget, and a practical list of features to cut.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-an-mvp-is",
      title: "What an MVP is, and isn’t",
      body: (
        <>
          <p>
            A minimum viable product is the smallest version of your product
            that real users can use to get real value — enough to test whether
            your core idea works.
          </p>
          <ul>
            <li>
              <strong>It is</strong> a working product, used by real people,
              focused on one job.
            </li>
            <li>
              <strong>It isn’t</strong> a clickable prototype, a half-built
              version of the full vision, or a demo that only works on the
              founder’s phone.
            </li>
          </ul>
          <p>
            “Minimum” is about scope, not quality. The few things an MVP does
            should work reliably, look trustworthy and be easy to change.
          </p>
        </>
      ),
    },
    {
      id: "scoping",
      title: "How to scope an MVP",
      body: (
        <>
          <ol>
            <li>
              <strong>Write the core promise in one sentence.</strong> “Clinics
              can accept online bookings without phone calls.”
            </li>
            <li>
              <strong>Name the riskiest assumption.</strong> Will clinics use
              it? Will patients book? Will anyone pay?
            </li>
            <li>
              <strong>Map the one flow</strong> that tests it, from first open
              to value delivered.
            </li>
            <li>
              <strong>List the minimum around it</strong> — sign-in,
              notifications, a simple admin view.
            </li>
            <li>
              <strong>Decide how you’ll measure success</strong> — sign-ups,
              completed bookings, repeat use, payments.
            </li>
            <li>
              <strong>Move everything else</strong> into a “later” list, in
              priority order.
            </li>
          </ol>
          <Callout title="One platform or two?">
            <p>
              If your users are mostly on one platform, or a web app would do,
              start there. If you need both iOS and Android, one Flutter
              codebase keeps the MVP affordable. Our{" "}
              <Link href="/insights/flutter-vs-native-app-development">
                Flutter vs native guide
              </Link>{" "}
              explains the trade-offs.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "timeline",
      title: "A week-by-week MVP timeline",
      body: (
        <>
          <p>
            A realistic plan for a focused MVP with one app and a simple admin
            panel:
          </p>
          <DataTable
            caption="Typical MVP timeline (varies by scope)"
            head={["Weeks", "Phase", "What happens", "You get"]}
            rows={[
              [
                "1–2",
                "Discovery",
                "Users, core flow, riskiest assumption, scope and estimate",
                "Written scope and plan",
              ],
              [
                "2–3",
                "Design",
                "Wireframes, clickable prototype, simple design system",
                "Tested prototype",
              ],
              [
                "3–4",
                "Foundations",
                "Project setup, auth, database, CI, staging environment",
                "First installable build",
              ],
              [
                "4–8",
                "Core build",
                "The main flow end to end, admin essentials, integrations",
                "Weekly demos of working features",
              ],
              [
                "8–10",
                "Hardening",
                "Device testing, fixes, performance, analytics, crash reporting",
                "Release candidate",
              ],
              [
                "10–12",
                "Launch",
                "Store submission, pilot users, monitoring, feedback loop",
                "Live product and first data",
              ],
            ]}
          />
          <p>
            Phases overlap: design continues during the build, and testing runs
            throughout. A very small MVP can launch in 6–8 weeks; one with
            payments, several roles or compliance needs often takes 14 weeks or
            more.
          </p>
        </>
      ),
    },
    {
      id: "cost",
      title: "Indicative MVP costs in India",
      body: (
        <>
          <DataTable
            caption="Indicative MVP budgets in India, 2026 (varies by scope; get a written quote)"
            head={["MVP type", "Typical scope", "Indicative cost"]}
            rows={[
              [
                "Lean web MVP",
                "One web app, one role, simple admin, standard design",
                "₹5–8 lakh (about $6k–10k)",
              ],
              [
                "Mobile MVP",
                "Flutter app for iOS and Android, backend, admin, push notifications",
                "₹6–15 lakh (about $7k–18k)",
              ],
              [
                "MVP with integrations",
                "Payments, maps, messaging or an existing system, two or three roles",
                "₹10–20 lakh (about $12k–25k)",
              ],
              [
                "MVP with AI features",
                "Assistant, document reading or recommendations, with evaluation and guardrails",
                "₹10–25 lakh+ (about $12k–30k+)",
              ],
            ]}
          />
          <p>
            Also budget for hosting, third-party services, store accounts and a
            few months of post-launch changes. For a broader view of app
            pricing, see{" "}
            <Link href="/insights/app-development-cost-india">
              how much app development costs in India
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      id: "what-to-cut",
      title: "What to cut from your MVP",
      body: (
        <>
          <p>These are the features founders most often build too early:</p>
          <Checklist
            items={[
              <>
                <strong>Multiple user roles</strong> — start with one; handle
                others manually or in the admin panel.
              </>,
              <>
                <strong>Custom admin dashboards</strong> — a simple table view
                and CSV export go a long way.
              </>,
              <>
                <strong>Social login for every provider</strong> — one sign-in
                method is enough.
              </>,
              <>
                <strong>In-app chat</strong> — link to WhatsApp or email until
                usage proves the need.
              </>,
              <>
                <strong>Complex settings and preferences</strong> — pick
                sensible defaults.
              </>,
              <>
                <strong>Multiple languages</strong> — launch in the language
                most of your pilot users need.
              </>,
              <>
                <strong>Automations you can do by hand</strong> — manual steps
                are fine at pilot scale.
              </>,
              <>
                <strong>Edge-case features</strong> — anything that serves fewer
                than one in ten users.
              </>,
            ]}
          />
          <p>
            What not to cut: security basics, reliable data storage and backups,
            analytics, crash reporting and a clean codebase. These are what let
            you grow the MVP instead of rewriting it.
          </p>
        </>
      ),
    },
    {
      id: "after-launch",
      title: "After launch: learn, then build",
      body: (
        <>
          <ul>
            <li>
              <strong>Watch the numbers you chose</strong> — are people
              completing the core flow and coming back?
            </li>
            <li>
              <strong>Talk to users</strong> — short calls with early users
              explain what the data can’t.
            </li>
            <li>
              <strong>Ship small releases</strong> every week or two, fixing
              friction before adding features.
            </li>
            <li>
              <strong>Revisit the “later” list</strong> with real evidence, and
              re-order it.
            </li>
          </ul>
          <p>
            An MVP that proves your idea wrong is still a success if it saves
            you building the full product. One that proves it right gives you
            evidence for investors, customers and your next phase.
          </p>
        </>
      ),
    },
    {
      id: "how-we-build-mvps",
      title: "How we build MVPs",
      body: (
        <>
          <p>
            We’re an AI-first software studio working with founders across the
            Tricity, India and worldwide. One small senior team handles product
            design, build and launch, with a live demo every Friday so you see
            the MVP take shape and can cut or add scope with real information.
            We build web platforms in Next.js and mobile apps in Flutter, with
            AI features where they genuinely help.
          </p>
          <p>
            See <Link href="/process">how we work</Link>, our{" "}
            <Link href="/services/product-design">product design service</Link>,
            or <Link href="/#contact">tell us about your idea</Link> for a
            scoped MVP plan.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "How much does it cost to build an MVP in India?",
      a: "Indicatively, a focused MVP costs around ₹5–20 lakh in India, depending on platforms, integrations, design depth and AI features. Get a written, scoped quote.",
    },
    {
      q: "How long does it take to build an MVP?",
      a: "Most MVPs take around 8–14 weeks from scoping to launch. Very small MVPs can launch in 6–8 weeks; ones with payments, several roles or compliance needs take longer.",
    },
    {
      q: "What features should an MVP include?",
      a: "The one core flow that delivers your main promise end to end, sign-in, basic notifications, a simple admin view, analytics and crash reporting.",
    },
    {
      q: "Should my MVP be a mobile app or a web app?",
      a: "Start where your users are. A web app is often cheapest for business users; if customers need a phone app on both iOS and Android, a single Flutter codebase keeps costs down.",
    },
    {
      q: "What is the difference between a prototype and an MVP?",
      a: "A prototype is a clickable design used to test ideas without code. An MVP is working software real users rely on, built to test whether the product creates value.",
    },
    {
      q: "What should I do after launching an MVP?",
      a: "Track the success measures you set, talk to early users, ship small improvements every week or two, and re-prioritise your roadmap based on evidence.",
    },
  ],
};
