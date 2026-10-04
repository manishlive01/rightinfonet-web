import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import PostLink from "@/components/insights/PostLink";
import type { Post } from "./types";

export const aiAgentDevelopmentCostIndia: Post = {
  slug: "ai-agent-development-cost-india",
  title:
    "AI agent development cost in India: what drives the price and how to budget",
  metaTitle: "AI Agent Development Cost in India: What Drives It",
  description:
    "AI agent development cost in India: indicative ranges, what drives build and running costs, a simple way to estimate model usage, and how to get a quote.",
  excerpt:
    "What it costs to build and run an AI agent in India: indicative ranges from our published cost guides, the scope items behind them, how to estimate running costs, and how to brief a team for a written quote.",
  category: "AI agents",
  pillar: "ai",
  cover: "agent",
  published: "2026-12-01",
  readingMinutes: 7,
  keywords: [
    "AI agent development cost India",
    "cost to build an AI agent",
    "AI chatbot development cost India",
    "LLM app development cost",
    "AI automation cost for business",
    "AI agent running cost",
    "AI development company India pricing",
  ],
  takeaways: [
    "Indicatively, a focused first product with AI features costs around ₹10–25 lakh+ in India; larger multi-system platforms sit higher. Get a written quote for your scope.",
    "Build cost is driven by integrations, the number of tasks, evaluation work, approval screens and compliance needs, more than by the model itself.",
    "Running cost depends on tasks per month, text per task, steps per task and model choice; you can estimate it before you build.",
    "A small paid pilot on real data is the most reliable way to turn an indicative range into a firm number.",
  ],
  intro: (
    <>
      <p>
        Indicatively, a focused first product with AI features, such as an
        assistant or document reading with evaluation and guardrails, costs
        around ₹10–25 lakh+ (about $12k–30k+) in India. Larger platforms with
        several apps and integrations cost more. Running costs come on top.
        These are indicative figures; get a written quote.
      </p>
      <p>
        That range comes from our{" "}
        <Link href="/insights/mvp-development-cost-timeline">
          MVP cost and timeline guide
        </Link>
        , and the larger band from our{" "}
        <Link href="/insights/app-development-cost-india">
          app development cost guide
        </Link>
        . This article explains what sits behind those numbers for AI agents
        specifically: the build items that move the price, how running costs
        work and how to estimate them, and how to brief a team so the quote is
        one you can plan around.
      </p>
    </>
  ),
  sections: [
    {
      id: "indicative-ranges",
      title: "Indicative ranges",
      body: (
        <>
          <DataTable
            caption="Indicative build costs for AI products in India (scope-dependent; get a written quote)"
            head={["Scope", "What it usually includes", "Indicative range"]}
            rows={[
              [
                "First product with AI features",
                "One main workflow, an assistant, document reading or recommendations, with evaluation and guardrails",
                "₹10–25 lakh+ (about $12k–30k+)",
              ],
              [
                "Complex platform with AI as one part",
                "Multiple apps or portals, ERP/CRM integrations, real-time features, compliance or audit needs",
                "₹25 lakh–₹1 crore+ (about $30k–120k+)",
              ],
            ]}
          />
          <Callout title="How to read these numbers">
            <p>
              They are indicative bands from our published cost guides, not a
              price list. A narrow agent on one inbox with one integration can
              sit at the low end; an agent spanning several systems with
              approval screens and audit needs sits much higher. A written,
              itemised quote for your scope is the only number to plan with.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "build-drivers",
      title: "What drives the build cost",
      body: (
        <>
          <p>
            The language model is rarely the expensive part of building an
            agent. The work around it is:
          </p>
          <DataTable
            caption="Build cost drivers for an AI agent"
            head={["Driver", "Why it costs", "How to keep it down"]}
            rows={[
              [
                "Integrations",
                "Each system the agent reads or updates needs secure access, error handling and tests",
                "Start with the one or two systems that save the most time",
              ],
              [
                "Number of tasks",
                "Each task type needs its own instructions, tools and test cases",
                "Launch with one task, add others after it proves itself",
              ],
              [
                "Retrieval (RAG)",
                "Documents must be cleaned, split, indexed and kept current",
                "Begin with one well-owned document set",
              ],
              [
                "Evaluation",
                "Building a test set from real cases and scoring it on every change",
                "Collect and label past examples early, before the build",
              ],
              [
                "Approval and review screens",
                "People need a clear way to check and approve actions",
                "Reuse existing tools where possible, such as the helpdesk",
              ],
              [
                "Security and compliance",
                "Access control, logging, data protection and, in regulated work, validation",
                "Scope it from day one rather than adding it late",
              ],
            ]}
          />
          <p>
            Many problems are cheaper to solve with a fixed workflow and one AI
            step than with a free-roaming agent. If the steps are always the
            same, ask for a quote for both and compare.
          </p>
        </>
      ),
    },
    {
      id: "running-costs",
      title: "Running costs and how to estimate them",
      body: (
        <>
          <p>Once live, an agent has ongoing costs. The main ones:</p>
          <ul>
            <li>
              <strong>Model usage</strong>, usually charged by the amount of
              text (tokens) sent to and returned by the model.
            </li>
            <li>
              <strong>Hosting</strong> for the agent, its database and the
              search index.
            </li>
            <li>
              <strong>Messaging charges</strong> where the agent or chatbot uses
              WhatsApp or SMS.
            </li>
            <li>
              <strong>Monitoring and upkeep</strong>: reviewing failures,
              updating documents, adding test cases and adjusting prompts.
            </li>
          </ul>
          <p>
            You can estimate model usage before you build, using your own
            numbers and the provider’s current price list:
          </p>
          <ol>
            <li>Count tasks per month, for example emails handled.</li>
            <li>
              Estimate text per step: instructions, retrieved passages, the
              input and the output.
            </li>
            <li>Multiply by the number of steps the agent takes per task.</li>
            <li>
              Apply the model’s current price per unit of text, separately for
              input and output.
            </li>
          </ol>
          <p>
            Model prices change often, so recheck them before you commit, and
            measure real usage during the pilot. Using smaller models for simple
            steps such as routing, trimming context and caching repeated content
            all reduce the bill.
          </p>
        </>
      ),
    },
    {
      id: "pilot",
      title: "Why a pilot is the best way to price an agent",
      body: (
        <>
          <p>
            AI work has more unknowns than ordinary software: how messy the
            documents are, how often edge cases appear, how accurate the agent
            can get. A short pilot on real data turns those unknowns into facts:
          </p>
          <Checklist
            items={[
              "Accuracy on a test set built from your real past cases.",
              "The share of cases handled without edits, and which ones escalate.",
              "Measured cost per task, from actual model usage.",
              "Integration problems discovered early, not in month three.",
              "A firm scope and quote for the production build.",
            ]}
          />
          <p>
            Our <Link href="/services/ai-agents">AI agent development</Link>{" "}
            service runs pilots on real data, usually in weeks rather than
            months, with an eval suite from your own cases.
          </p>
        </>
      ),
    },
    {
      id: "chatbot-vs-agent-cost",
      title: "Chatbot or agent: how cost differs",
      body: (
        <>
          <p>
            A customer-facing chatbot that answers from your content is usually
            a smaller build than an agent that updates several systems, but its
            running costs scale with conversation volume and messaging charges.
            An agent’s running cost scales with tasks and steps. If you are
            unsure which you need, read{" "}
            <PostLink slug="ai-agent-vs-chatbot">AI agent vs chatbot</PostLink>{" "}
            first.
          </p>
        </>
      ),
    },
    {
      id: "forgotten-costs",
      title: "Costs people forget to budget",
      body: (
        <>
          <p>
            Beyond the build and the model bill, these items regularly catch
            teams out:
          </p>
          <ul>
            <li>
              <strong>Preparing data and documents</strong>: collecting,
              cleaning and labelling past cases and source documents.
            </li>
            <li>
              <strong>Your team’s time</strong> to define correct outcomes,
              review the pilot and approve actions in the early weeks.
            </li>
            <li>
              <strong>Integration access</strong>: API plans, licences or vendor
              fees for the systems the agent connects to.
            </li>
            <li>
              <strong>Ongoing evaluation</strong> when prompts, documents or
              models change.
            </li>
            <li>
              <strong>Security and data protection reviews</strong>, especially
              where personal or health data is involved.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "reduce-cost",
      title: "Ways to reduce cost without cutting quality",
      body: (
        <>
          <Checklist
            items={[
              "Start with one task and one or two integrations; add more after the first proves itself.",
              "Use a fixed workflow with one AI step where the steps never change.",
              "Route simple steps, such as classification, to smaller, cheaper models.",
              "Keep prompts and retrieved passages short and relevant; cache repeated content.",
              "Reuse existing tools, such as your helpdesk, for approval screens.",
              "Collect real examples early so evaluation doesn’t become a separate project.",
            ]}
          />
          <p>
            Cutting evaluation or approval steps to save money is a false
            saving: they are what make the agent safe to run.
          </p>
        </>
      ),
    },
    {
      id: "pricing-models",
      title: "Fixed price or time and materials?",
      body: (
        <>
          <p>
            AI projects are often priced in two parts. A pilot or discovery
            phase with a fixed scope and price, where the unknowns are explored
            on real data. Then a production build, priced as a fixed scope once
            the pilot has answered the open questions, or as a monthly team when
            the roadmap will keep changing.
          </p>
          <p>
            Be cautious with a single fixed price for a large agent quoted
            before anyone has seen your data. Either the quote carries a large
            buffer for risk, or the scope will be renegotiated later. A phased
            plan with a decision point after the pilot protects both sides.
          </p>
        </>
      ),
    },
    {
      id: "brief",
      title: "How to brief a team for an accurate quote",
      body: (
        <>
          <Checklist
            items={[
              "The task in one paragraph, and how a person does it today.",
              "Volume: how many times a day or month it happens.",
              "The systems involved, and whether they have APIs.",
              "A sample of real past cases with the correct outcome, anonymised if needed.",
              "What the agent may do alone, and what needs approval.",
              "Data rules: personal data, where it may be processed, retention.",
              "How you will measure success: time saved, accuracy, response time.",
            ]}
          />
          <p>
            A team that quotes without asking for examples or success measures
            is guessing. Ask how they will evaluate the agent; our guide on{" "}
            <PostLink slug="how-to-evaluate-ai-agents">
              how to evaluate AI agents
            </PostLink>{" "}
            shows what a good answer looks like.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "How much does it cost to build an AI agent in India?",
      a: "Indicatively, a focused first product with AI features costs around ₹10–25 lakh+ in India, and larger multi-system platforms sit in a higher band. It depends on integrations, tasks, evaluation and compliance; get a written quote.",
    },
    {
      q: "What are the running costs of an AI agent?",
      a: "Model usage, hosting, messaging charges where WhatsApp or SMS is used, and upkeep such as reviewing failures and updating documents. Model usage depends on tasks per month, text per task, steps and the model’s current price.",
    },
    {
      q: "Is a chatbot cheaper than an AI agent?",
      a: "A chatbot that answers from your content is usually a smaller build than an agent that updates several systems. Running costs depend on conversation or task volume in both cases.",
    },
    {
      q: "Why do AI agent quotes vary so much?",
      a: "Because scope varies: the number of integrations and tasks, the state of your documents, evaluation and approval work, and compliance needs. Compare quotes on the same written scope.",
    },
    {
      q: "Can we start small?",
      a: "Yes. A pilot on one task with real data is the most reliable way to measure accuracy and cost per task before committing to a full build.",
    },
    {
      q: "Does the model provider’s price decide most of the cost?",
      a: "Rarely for the build. Integrations, retrieval, evaluation and review screens usually cost more than model usage. Running costs depend more on model choice and volume.",
    },
  ],
};
