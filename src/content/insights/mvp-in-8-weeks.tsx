import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import type { Post } from "./types";

export const mvpIn8Weeks: Post = {
  slug: "mvp-in-8-weeks",
  title: "MVP in 8 weeks: a week-by-week plan that actually ships",
  metaTitle: "MVP in 8 Weeks: A Week-by-Week Plan",
  description:
    "How to ship an MVP in 8 weeks: what has to be true before you start, a week-by-week plan from discovery to launch, what fits in two months and what to leave out.",
  excerpt:
    "A practical 8-week MVP plan: the conditions that make it possible, what happens each week, the decisions you make along the way, and the scope that will not fit.",
  category: "Choosing a partner",
  pillar: "cost",
  cover: "phones",
  published: "2026-12-11",
  readingMinutes: 8,
  keywords: [
    "MVP in 8 weeks",
    "8 week MVP plan",
    "MVP development timeline",
    "how to build an MVP fast",
    "MVP week by week",
    "startup MVP India",
    "MVP development company India",
  ],
  takeaways: [
    "Eight weeks is realistic for a focused MVP: one core flow, one main user role, a simple admin and standard design.",
    "It only works if the problem, the first users and a decision-maker are ready on day one, and scope is fixed by the end of week one.",
    "Each week ends with a working demo and a decision, so cutting scope is a weekly habit, not a crisis in week seven.",
    "Payments plus several roles, heavy integrations, compliance work or two native apps usually push an MVP past eight weeks.",
  ],
  intro: (
    <>
      <p>
        You can ship an MVP in 8 weeks if it does one job well: one core flow,
        one main user role, a simple admin panel and standard design. Spend week
        1 fixing scope, weeks 2–6 building and demoing every Friday, week 7
        hardening, and week 8 launching to pilot users.
      </p>
      <p>
        Our{" "}
        <Link href="/insights/mvp-development-cost-timeline">
          MVP cost and timeline guide
        </Link>{" "}
        gives the wider picture: most MVPs take around 8–14 weeks, and what
        drives the budget. This article is the tight version, a week-by-week
        plan for the teams that want to launch at the short end of that range,
        and an honest list of what makes that possible.
      </p>
    </>
  ),
  sections: [
    {
      id: "preconditions",
      title: "What has to be true before week 1",
      body: (
        <>
          <p>
            Eight-week MVPs rarely fail on code. They fail because something the
            team needed was missing when the clock started. Check these first:
          </p>
          <Checklist
            items={[
              <>
                <strong>A clear problem and first users.</strong> You can name
                who the pilot users are and how you will reach them.
              </>,
              <>
                <strong>One decision-maker.</strong> Someone who can approve
                scope and designs within a day, every week.
              </>,
              <>
                <strong>Content and data ready.</strong> Copy, sample data,
                logos and any rules the app must follow, ready early, not in
                week six.
              </>,
              <>
                <strong>Accounts in your name.</strong> Domain, cloud, Apple and
                Google developer accounts set up or being set up, since
                approvals can take days.
              </>,
              <>
                <strong>A fixed launch date</strong> that everyone treats as
                real, with scope flexing to meet it.
              </>,
            ]}
          />
          <p>
            If two or more of these are missing, plan for a longer timeline or
            spend a short paid discovery sorting them out before the 8 weeks
            start.
          </p>
        </>
      ),
    },
    {
      id: "plan",
      title: "The 8-week plan at a glance",
      body: (
        <>
          <DataTable
            caption="An 8-week MVP plan (one core flow, one main role, simple admin)"
            head={["Week", "Focus", "Output", "Decision you make"]}
            rows={[
              [
                "1",
                "Discovery and scope",
                "Core flow mapped, riskiest assumption named, written scope and backlog",
                "What is in, what waits",
              ],
              [
                "2",
                "Design and foundations",
                "Clickable prototype of the core flow; project, auth, database and staging set up",
                "Approve the prototype",
              ],
              [
                "3",
                "Core flow, part 1",
                "First half of the core flow working end to end on staging",
                "Confirm data and rules",
              ],
              [
                "4",
                "Core flow, part 2",
                "Core flow complete, first installable or shareable build",
                "Cut or keep the next items",
              ],
              [
                "5",
                "Admin and essentials",
                "Simple admin view, notifications, analytics events",
                "Lock the launch scope",
              ],
              [
                "6",
                "Integrations and polish",
                "The one or two integrations you need, empty and error states",
                "Approve copy and content",
              ],
              [
                "7",
                "Hardening",
                "Device and browser testing, fixes, performance, crash reporting, backups",
                "Go or no-go for launch",
              ],
              [
                "8",
                "Launch",
                "Store submission or web release, pilot users invited, monitoring live",
                "What to measure first",
              ],
            ]}
          />
          <p>
            Design and testing do not stop at the end of their weeks; they run
            alongside the build. What the table shows is when each one is the
            main job.
          </p>
        </>
      ),
    },
    {
      id: "weeks-1-2",
      title: "Weeks 1–2: decide, then design",
      body: (
        <>
          <p>
            Week 1 is the most valuable week of the project. Write the core
            promise in one sentence, name the riskiest assumption, and map the
            single flow that tests it, from first open to value delivered.
            Everything else goes on a “later” list in priority order.
          </p>
          <p>
            By the end of week 1 you should have a written scope that fits on a
            page or two, a backlog in priority order, and an agreement that new
            ideas go to the later list unless something of equal size comes out.
          </p>
          <p>
            Week 2 turns that into a clickable prototype of the core flow,
            tested with two or three target users if you can reach them. In
            parallel, the engineers set up the project, sign-in, the database,
            automated builds and a staging environment, so the first real
            feature in week 3 lands on solid ground. Our{" "}
            <Link href="/services/product-design">product design service</Link>{" "}
            follows the same pattern: test on a phone before writing production
            code.
          </p>
        </>
      ),
    },
    {
      id: "weeks-3-6",
      title: "Weeks 3–6: build in weekly slices",
      body: (
        <>
          <p>
            The build weeks work best as four short cycles. Each one starts with
            a small, agreed slice of the backlog and ends on Friday with a demo
            of working software, not slides.
          </p>
          <ul>
            <li>
              <strong>Weeks 3–4</strong> deliver the core flow end to end. By
              the end of week 4 you can use the main feature on a real phone or
              browser, even if it is rough.
            </li>
            <li>
              <strong>Week 5</strong> adds what you need to run the product: a
              simple admin view, notifications, and the analytics events that
              will tell you if the MVP works.
            </li>
            <li>
              <strong>Week 6</strong> adds the one or two integrations the core
              flow depends on, such as a payment gateway or messaging, and
              finishes the empty, loading and error states.
            </li>
          </ul>
          <p>
            Every Friday demo ends with a decision: keep the plan, swap an item
            for something more important, or cut. That weekly habit is what
            keeps an 8-week MVP at 8 weeks. It is also how we run projects; see{" "}
            <Link href="/process">how we work, week by week</Link>.
          </p>
          <Callout title="Lock scope at the end of week 5">
            <p>
              After week 5, new features wait for the first post-launch release.
              Weeks 6–8 are for finishing and hardening what is already there.
              Teams that keep adding in week six are the ones that launch in
              week twelve.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "weeks-7-8",
      title: "Weeks 7–8: harden and launch",
      body: (
        <>
          <p>
            Week 7 is for quality. Test on a range of real Android phones and
            iPhones or browsers, fix what breaks, check performance on a slow
            connection, and switch on crash reporting and backups. End the week
            with an honest go or no-go for launch.
          </p>
          <p>
            Week 8 is launch. For a mobile app that means store submission and
            review fixes, so submit early in the week. For a web MVP it means
            the production release. Invite pilot users in a planned order, watch
            the numbers you chose in week 1, and keep a short daily check-in for
            the first days to catch problems quickly.
          </p>
          <p>
            Launch is not the end of the plan; it is the start of learning. Book
            the first post-launch release for two weeks later, and decide what
            goes in it from what pilot users actually do.
          </p>
        </>
      ),
    },
    {
      id: "what-fits",
      title: "What fits in 8 weeks, and what doesn’t",
      body: (
        <>
          <DataTable
            caption="Usually fits vs usually pushes an MVP past 8 weeks"
            head={["Area", "Usually fits in 8 weeks", "Usually takes longer"]}
            rows={[
              [
                "Users",
                "One main role plus a simple admin view",
                "Several roles, each with its own app or portal",
              ],
              [
                "Platforms",
                "A web app, or one cross-platform mobile app",
                "Two separate native apps, or mobile plus a full web portal",
              ],
              [
                "Integrations",
                "One or two well-documented services",
                "ERP, CRM or older in-house systems with little documentation",
              ],
              [
                "Payments",
                "A standard gateway checkout",
                "Marketplace payouts, subscriptions with many plans, invoicing rules",
              ],
              [
                "Data",
                "Starting fresh with simple records",
                "Migrating data from an old system",
              ],
              [
                "Compliance",
                "Security basics, privacy notice, consent",
                "Regulated data, audit trails, formal validation",
              ],
              [
                "AI",
                "None, or one narrow, well-tested feature",
                "Assistants or agents that need evaluation and guardrails",
              ],
            ]}
          />
          <p>
            If your list sits mostly in the right-hand column, an 8-week plan
            will hurt more than it helps. Plan the first release for 10–14
            weeks, or split the product so the first 8 weeks ship the part from
            the left-hand column.
          </p>
        </>
      ),
    },
    {
      id: "cost",
      title: "What an 8-week MVP costs",
      body: (
        <>
          <p>
            An 8-week MVP sits at the lean end of the ranges in our MVP guide.
            Indicatively, in India, a lean web MVP costs around ₹5–8 lakh and a
            mobile MVP for iOS and Android ₹6–15 lakh, depending on integrations
            and design depth. These are indicative figures; get a written quote.
            The{" "}
            <Link href="/tools/app-development-cost-calculator">
              cost calculator
            </Link>{" "}
            shows which range fits your answers.
          </p>
          <p>
            Budget separately for hosting, third-party services, store accounts
            and a few months of post-launch changes. The MVP is the start of the
            product, not the whole of it.
          </p>
        </>
      ),
    },
    {
      id: "mistakes",
      title: "Mistakes that turn 8 weeks into 16",
      body: (
        <>
          <ul>
            <li>
              <strong>Slow decisions.</strong> A day’s wait for approval, every
              week, costs more than any technical problem.
            </li>
            <li>
              <strong>Late content.</strong> Copy, prices, rules and test data
              arriving in week six.
            </li>
            <li>
              <strong>Scope that only grows.</strong> New ideas added without
              anything of equal size coming out.
            </li>
            <li>
              <strong>Polishing the wrong thing.</strong> Weeks spent on a
              settings screen nobody needs at pilot scale.
            </li>
            <li>
              <strong>Skipping hardening.</strong> Launching untested and
              spending the first month firefighting instead of learning.
            </li>
            <li>
              <strong>Late store accounts.</strong> Developer account and app
              review delays landing in the launch week.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "how-we-build",
      title: "How we run 8-week MVPs",
      body: (
        <>
          <p>
            We are an AI-first software studio working with founders across the
            Tricity, India and worldwide. One small senior team handles product
            design, build and launch, with a live demo every Friday so you see
            the MVP take shape and can cut or add scope with real information.
            We build web MVPs in Next.js and mobile MVPs in Flutter, and we will
            tell you in week 1 if your scope will not fit in eight weeks.
          </p>
          <p>
            Choosing between a web app and a mobile app, or between Flutter and
            React Native? Our{" "}
            <Link href="/insights/flutter-vs-native-app-development">
              Flutter vs React Native vs native guide
            </Link>{" "}
            walks through the trade-offs.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "Can you really build an MVP in 8 weeks?",
      a: "Yes, if it is focused: one core flow, one main user role, a simple admin and standard design, with a decision-maker available every week and scope fixed in week one.",
    },
    {
      q: "What should an 8-week MVP include?",
      a: "The core flow end to end, sign-in, a simple admin view, basic notifications, analytics and crash reporting. Everything else goes on a list for later releases.",
    },
    {
      q: "What makes an MVP take longer than 8 weeks?",
      a: "Several user roles, two native apps, ERP or legacy integrations, data migration, complex payments, regulated data or AI assistants that need evaluation all add time.",
    },
    {
      q: "How much does an 8-week MVP cost in India?",
      a: "Indicatively, around ₹5–8 lakh for a lean web MVP and ₹6–15 lakh for a mobile MVP for iOS and Android, depending on integrations and design depth. Get a written quote.",
    },
    {
      q: "Should my 8-week MVP be a web app or a mobile app?",
      a: "Start where your users are. A web app is often quickest for business users; if customers need a phone app on iOS and Android, one Flutter codebase keeps the plan realistic.",
    },
    {
      q: "What happens after the 8 weeks?",
      a: "You watch the numbers you chose in week one, talk to pilot users and ship a first improvement release about two weeks after launch, then keep releasing in small steps.",
    },
  ],
};
