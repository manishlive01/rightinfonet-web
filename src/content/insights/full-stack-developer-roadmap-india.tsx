import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import type { Post } from "./types";

export const fullStackDeveloperRoadmapIndia: Post = {
  slug: "full-stack-developer-roadmap-india",
  title:
    "Full-stack developer roadmap 2026 (India): what to learn, in what order",
  metaTitle: "Full-Stack Developer Roadmap 2026 (India): What to Learn",
  description:
    "A full-stack developer roadmap for 2026 in India: HTML, CSS and JavaScript, React and Next.js, Node and PostgreSQL, auth, testing and deployment — in order.",
  excerpt:
    "What to learn to become a full-stack developer in India in 2026, in the right order — from HTML and JavaScript to React, Next.js, Node, PostgreSQL, auth and deployment.",
  category: "Careers & training",
  cover: "phones",
  published: "2026-09-28",
  readingMinutes: 8,
  keywords: [
    "full stack developer roadmap 2026",
    "full stack developer roadmap India",
    "how to become a full stack developer",
    "MERN vs Next.js full stack",
    "full stack web development course Chandigarh",
    "full stack course Mohali",
    "full stack developer course Panchkula",
    "learn React Node PostgreSQL",
  ],
  takeaways: [
    "Order matters: solid HTML, CSS and JavaScript first, then React and Next.js, then Node and a real database.",
    "TypeScript, Git, SQL and deployment are not extras — they are what employers check for in a full-stack fresher.",
    "Authentication, testing and deployment turn a tutorial project into something you can defend in an interview.",
    "Expect roughly 4–6 months of consistent work to be job-ready from scratch, and less if you already code.",
  ],
  intro: (
    <>
      <p>
        To become a full-stack developer in 2026, learn in this order: HTML, CSS
        and JavaScript; then TypeScript and React with Next.js; then Node.js
        with PostgreSQL; then authentication, testing and deployment. From
        scratch, that’s roughly four to six months of steady work, ending with
        two or three deployed projects you can explain line by line.
      </p>
      <p>
        Most learners in India don’t fail for lack of resources — they fail by
        jumping around. This roadmap keeps the order tight, shows what “good
        enough” looks like at each stage, and points out what recruiters and
        tech leads actually look for.
      </p>
    </>
  ),
  sections: [
    {
      id: "what-full-stack-means",
      title: "What “full-stack” means in 2026",
      body: (
        <>
          <p>
            A full-stack developer can build a feature end to end: the screen a
            user sees, the API behind it, the database that stores it, and the
            deployment that puts it online. You don’t need to be an expert in
            everything. You need to be comfortable across the stack and strong
            in at least one part of it.
          </p>
          <p>A practical, widely used stack to learn today:</p>
          <ul>
            <li>
              <strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript,
              React and Next.js.
            </li>
            <li>
              <strong>Backend:</strong> Node.js with a framework like Express or
              Next.js route handlers.
            </li>
            <li>
              <strong>Database:</strong> PostgreSQL with SQL, plus an ORM or
              query builder.
            </li>
            <li>
              <strong>Around it:</strong> Git, authentication, testing,
              deployment and basic cloud.
            </li>
          </ul>
          <Callout title="MERN or Next.js with PostgreSQL?">
            <p>
              MERN (MongoDB, Express, React, Node) is still common in courses.
              We recommend learning SQL with PostgreSQL as your main database,
              because relational data and SQL appear in almost every company’s
              stack. You can pick up MongoDB later in a week.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "timeline",
      title: "The roadmap and timeline at a glance",
      body: (
        <>
          <DataTable
            caption="Full-stack roadmap for a beginner (indicative, at 15–20 hours a week)"
            head={[
              "Stage",
              "Topics",
              "Indicative time",
              "You’re ready to move on when…",
            ]}
            rows={[
              [
                "1. Web foundations",
                "HTML, CSS, Flexbox, Grid, responsive design, accessibility basics",
                "3–4 weeks",
                "You can build a responsive multi-page site from a design.",
              ],
              [
                "2. JavaScript",
                "DOM, events, fetch, async/await, modules, array methods",
                "4–5 weeks",
                "You can build an interactive app that calls a public API.",
              ],
              [
                "3. Git and TypeScript",
                "Branches, pull requests, types, interfaces, generics basics",
                "1–2 weeks",
                <>
                  You work in branches and your code compiles without leaning on{" "}
                  <code>any</code>.
                </>,
              ],
              [
                "4. React and Next.js",
                "Components, props, state, hooks, routing, server components, forms",
                "4–5 weeks",
                "You can build a multi-page app with data fetching and forms.",
              ],
              [
                "5. Backend and database",
                "Node.js, REST APIs, SQL, PostgreSQL, schema design, an ORM",
                "4–5 weeks",
                "You can design tables and expose a CRUD API with validation.",
              ],
              [
                "6. Auth, testing, deploy",
                "Sessions or JWT, roles, unit and end-to-end tests, CI, hosting",
                "3–4 weeks",
                "A real user can sign up and use your deployed app.",
              ],
              [
                "7. Portfolio and interviews",
                "Capstone project, README, DSA basics, mock interviews",
                "2–4 weeks",
                "You can explain every decision in your projects.",
              ],
            ]}
          />
          <p>
            If you already program in another language, stages 1–3 go faster. If
            you’re a complete beginner, allow more time for JavaScript — it’s
            the foundation for everything else in this roadmap.
          </p>
        </>
      ),
    },
    {
      id: "frontend-foundations",
      title: "Stages 1–3: HTML, CSS, JavaScript, Git and TypeScript",
      body: (
        <>
          <h3>HTML and CSS</h3>
          <p>
            Learn semantic HTML (headings, landmarks, forms, labels), then CSS
            layout with Flexbox and Grid, and responsive design with media
            queries. Build three or four small sites. Accessibility basics — alt
            text, contrast, keyboard navigation — belong here, not at the end.
          </p>
          <h3>JavaScript</h3>
          <p>
            This is the stage not to rush. Get comfortable with variables and
            scope, functions, objects and arrays, <code>map</code>/
            <code>filter</code>/<code>reduce</code>, the DOM, events,{" "}
            <code>fetch</code>, promises and <code>async</code>/
            <code>await</code>. Build a to-do app, a weather app from a public
            API, and a small quiz without any framework.
          </p>
          <h3>Git and TypeScript</h3>
          <p>
            Use Git from day one, but learn it properly here: branches, pull
            requests, resolving merge conflicts. Then add TypeScript. Most
            modern React and Node codebases use it, and it catches a whole class
            of bugs before you run the code.
          </p>
        </>
      ),
    },
    {
      id: "react-nextjs",
      title: "Stage 4: React and Next.js",
      body: (
        <>
          <p>
            Learn React’s core ideas first — components, props, state, effects
            and lifting state up — then move to Next.js, which adds routing,
            server rendering and data fetching on top of React. Focus on:
          </p>
          <ul>
            <li>
              The difference between server and client components, and when each
              is appropriate.
            </li>
            <li>Forms with validation and good error messages.</li>
            <li>Loading and error states for every piece of data you fetch.</li>
            <li>
              Styling with CSS Modules or a utility framework — pick one and be
              consistent.
            </li>
            <li>
              Basic performance: image optimisation, avoiding unnecessary client
              JavaScript.
            </li>
          </ul>
          <p>
            Next.js changes quickly between major versions, so read the current
            official docs rather than older tutorials.
          </p>
        </>
      ),
    },
    {
      id: "backend-database",
      title: "Stage 5: Node.js and PostgreSQL",
      body: (
        <>
          <p>
            Now build the other half. Write a REST API in Node.js with input
            validation, proper status codes and error handling. Then learn SQL
            properly: <code>SELECT</code>, joins, aggregates, indexes and
            transactions. Design a schema for something real — an e-commerce
            store, a clinic booking system — with foreign keys and constraints.
          </p>
          <p>
            An ORM or query builder (such as Prisma or Drizzle) is useful, but
            write raw SQL first so you understand what it generates.
            Interviewers regularly ask freshers to write a join or explain an
            index.
          </p>
        </>
      ),
    },
    {
      id: "auth-testing-deploy",
      title: "Stage 6: authentication, testing and deployment",
      body: (
        <>
          <p>This stage is what separates a tutorial project from a product:</p>
          <ul>
            <li>
              <strong>Authentication:</strong> sign-up, login, password hashing,
              sessions or tokens, and role-based access (a user vs an admin).
            </li>
            <li>
              <strong>Security basics:</strong> parameterised queries, input
              validation, secrets in environment variables — never in Git.
            </li>
            <li>
              <strong>Testing:</strong> unit tests for logic and a few
              end-to-end tests for the main flows.
            </li>
            <li>
              <strong>Deployment:</strong> host the frontend and API, use a
              managed PostgreSQL database, and set up a simple CI pipeline that
              runs tests on every push.
            </li>
          </ul>
          <Checklist
            items={[
              "Your app has a public URL that works on a phone.",
              "A new user can sign up, log in and only see their own data.",
              "Tests run automatically on every push.",
              "No passwords, API keys or database URLs are committed to the repo.",
            ]}
          />
        </>
      ),
    },
    {
      id: "portfolio-and-jobs",
      title: "Stage 7: portfolio, interviews and your next step",
      body: (
        <>
          <p>
            Recruiters in India see many identical clone projects. Stand out
            with one substantial capstone that solves a real problem — a booking
            system for a local gym, an inventory tool for a shop, a fee tracker
            for a coaching centre — plus one or two smaller apps.
          </p>
          <ul>
            <li>
              Write a README for each project: the problem, screenshots, stack,
              architecture and how to run it.
            </li>
            <li>
              Keep practising DSA basics — arrays, strings, hashing, recursion —
              for online assessments.
            </li>
            <li>
              Do mock interviews where you explain your own code and trade-offs.
            </li>
          </ul>
          <p>
            If you want this roadmap with structure and feedback, our{" "}
            <Link href="/academy/full-stack-web-development-course">
              Full-stack Web course
            </Link>{" "}
            is a 16-week hybrid track that takes beginners to job-ready with
            React, Next.js, Node and PostgreSQL. Cohorts are small, projects are
            code-reviewed by working engineers, and you graduate with a
            portfolio. Still choosing a language? See{" "}
            <Link href="/insights/best-programming-language-to-learn-india">
              the best programming language to learn in 2026
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "How long does it take to become a full-stack developer in India?",
      a: "From scratch, roughly four to six months of consistent study at 15–20 hours a week is a realistic target to be job-ready. If you already code, it can be faster.",
    },
    {
      q: "Should I learn MERN or Next.js with PostgreSQL?",
      a: "Both are used, but SQL and PostgreSQL appear in most company stacks, so they are a safer foundation. Once you know React, Node and SQL, picking up MongoDB is quick.",
    },
    {
      q: "Do I need a degree to become a full-stack developer?",
      a: "Many companies still filter by degree for fresher roles, but strong projects, a clean GitHub and good fundamentals matter more in interviews. Startups and agencies are often more flexible.",
    },
    {
      q: "Is DSA required for full-stack developer jobs?",
      a: "For many service and product companies, yes — online assessments usually include basic DSA. You don’t need competitive-programming level, but arrays, strings, hashing and recursion are expected.",
    },
    {
      q: "Should I learn frontend or backend first?",
      a: "Start with frontend foundations — HTML, CSS and JavaScript — because you see results quickly and JavaScript is reused on the backend with Node.js. Move to the backend once you can build interactive pages.",
    },
    {
      q: "Where can I learn full-stack development in Chandigarh, Mohali or Panchkula?",
      a: "Bright Infonet Academy runs a 16-week hybrid Full-stack Web course for the Tricity and online learners, covering React, Next.js, Node and PostgreSQL with code-reviewed projects.",
    },
  ],
};
