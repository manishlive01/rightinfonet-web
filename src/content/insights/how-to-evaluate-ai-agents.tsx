import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import PostLink from "@/components/insights/PostLink";
import type { Post } from "./types";

export const howToEvaluateAiAgents: Post = {
  slug: "how-to-evaluate-ai-agents",
  title: "How to evaluate AI agents: test sets, metrics and monitoring",
  metaTitle: "How to Evaluate AI Agents: Evals, Metrics, Monitoring",
  description:
    "How to evaluate AI agents before and after launch: a test set from real cases, what to measure, automatic and model-based grading, safety and monitoring.",
  excerpt:
    "A practical guide to AI agent evals: how to build a test set from real past cases, which metrics matter, when to use exact checks or a model as grader, safety tests and what to monitor in production.",
  category: "AI agents",
  pillar: "ai",
  cover: "agent",
  published: "2026-12-04",
  readingMinutes: 7,
  keywords: [
    "how to evaluate AI agents",
    "AI agent evals",
    "LLM evaluation",
    "LLM as a judge",
    "AI agent testing",
    "RAG evaluation",
    "AI agent monitoring",
  ],
  takeaways: [
    "Evaluate an agent the way you test software: a fixed set of real cases with known correct outcomes, run on every change.",
    "Measure the final outcome, the steps and tool calls, safety behaviour, and cost and speed, not just whether the reply sounds good.",
    "Use exact checks wherever outputs are structured; use a model as grader only for fuzzy qualities, and spot-check it.",
    "After launch, monitor real usage and turn every mistake into a new test case.",
  ],
  intro: (
    <>
      <p>
        To evaluate an AI agent, build a test set from real past cases with
        known correct outcomes, define pass criteria for the result, the tool
        calls and safety, score automatically on every change, and keep
        monitoring after launch. Every mistake found in real use becomes a new
        test case.
      </p>
      <p>
        Evals are what turn an impressive demo into a system you can rely on,
        and what let you change a prompt or switch models without guessing. This
        guide explains how to build them step by step, what to measure, how to
        grade, and what to watch once the agent is live.
      </p>
    </>
  ),
  sections: [
    {
      id: "why-evals",
      title: "Why agents need evals",
      body: (
        <>
          <p>
            Language models are not deterministic in the way ordinary code is.
            The same input can give slightly different outputs, and a small
            change in a prompt can fix one case and break three others. Without
            a fixed test set you can’t tell whether a change made things better
            or worse.
          </p>
          <p>Evals answer three practical questions:</p>
          <ul>
            <li>Is the agent good enough to launch, and for which cases?</li>
            <li>Did the last change improve it or quietly break something?</li>
            <li>
              Can we switch to a cheaper or faster model without losing quality?
            </li>
          </ul>
          <p>
            Evals also make conversations with the business easier. Instead of
            “it seems to work”, you can say which cases pass, which fail and
            what the agent does when it is unsure. That is what lets a team
            decide, with evidence, which tasks the agent may handle on its own.
          </p>
        </>
      ),
    },
    {
      id: "test-set",
      title: "Step 1: build a test set from real cases",
      body: (
        <>
          <p>
            Start with real past examples: emails, tickets, documents or
            conversations, each with the correct outcome written down. Our guide
            to{" "}
            <Link href="/insights/ai-agents-for-business-operations">
              AI agents for business operations
            </Link>{" "}
            suggests 50 to 200 to begin with. Make sure the set includes:
          </p>
          <Checklist
            items={[
              "Common, everyday cases in roughly the proportion they really occur.",
              "Hard cases: missing information, unusual wording, mixed languages.",
              "Cases the agent must refuse or escalate to a person.",
              "Cases with tricky inputs, such as text that tries to instruct the agent.",
              "Cases where the right answer is “I don’t know”.",
            ]}
          />
          <p>
            Keep the test set under version control, remove personal data you
            don’t need, and agree the correct outcomes with the people who do
            the work today.
          </p>
        </>
      ),
    },
    {
      id: "what-to-measure",
      title: "Step 2: decide what to measure",
      body: (
        <>
          <DataTable
            caption="What to measure when evaluating an AI agent"
            head={["Dimension", "Example checks", "How to score"]}
            rows={[
              [
                "Outcome",
                "Right category, right fields extracted, right final record",
                "Exact comparison with the expected result",
              ],
              [
                "Steps and tool calls",
                "Called the right tool with the right values; no unnecessary steps",
                "Compare the logged trace with expectations",
              ],
              [
                "Answer quality",
                "Correct, complete, cites its source, no unsupported claims",
                "Model-based grading with spot checks, or human review",
              ],
              [
                "Safety",
                "Asked for approval when required; refused out-of-scope requests; ignored injected instructions",
                "Pass/fail per case; any failure blocks release",
              ],
              [
                "Escalation",
                "Handed hard cases to a person instead of guessing",
                "Share of must-escalate cases escalated",
              ],
              [
                "Cost and speed",
                "Text used per task, steps per task, time to finish",
                "Measured from logs on every run",
              ],
            ]}
          />
          <Callout title="Pick a few numbers that matter">
            <p>
              Agree in advance on two or three headline numbers, such as outcome
              accuracy and safety pass rate, and the level each must reach
              before launch. Everything else is diagnostic.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "grading",
      title: "Step 3: grade automatically, carefully",
      body: (
        <>
          <p>
            There are three ways to grade, and good eval suites use all of them:
          </p>
          <ol>
            <li>
              <strong>Exact checks</strong> for structured outputs: categories,
              extracted fields, tool names and arguments. Fast, cheap and
              reliable. Use them wherever you can.
            </li>
            <li>
              <strong>A model as grader</strong> for fuzzy qualities such as
              whether an answer is complete or polite. Give the grader a clear
              rubric and the reference answer, and check a sample of its
              judgements by hand, because graders make mistakes too.
            </li>
            <li>
              <strong>Human review</strong> for a sample of cases, especially
              early on and for high-risk tasks. It also catches problems the
              rubric missed.
            </li>
          </ol>
          <p>
            For RAG systems, grade retrieval separately from the answer: was the
            right passage found at all? Our guide to{" "}
            <PostLink slug="rag-for-business">RAG for business</PostLink>{" "}
            explains why most answer errors start there.
          </p>
        </>
      ),
    },
    {
      id: "every-change",
      title: "Step 4: run evals on every change",
      body: (
        <>
          <p>
            Treat the eval suite like automated tests in ordinary software. Run
            it before any change ships:
          </p>
          <ul>
            <li>A new or edited prompt.</li>
            <li>A new tool, or a change to an existing one.</li>
            <li>A different model or model version.</li>
            <li>Changes to documents, splitting or search settings.</li>
          </ul>
          <p>
            Compare before-and-after scores case by case, not only the average.
            A change that improves the average but breaks a safety case should
            not ship. Because model outputs vary, run important cases more than
            once and look at consistency.
          </p>
        </>
      ),
    },
    {
      id: "rollout",
      title: "Step 5: evaluate during rollout",
      body: (
        <>
          <DataTable
            caption="What to evaluate at each rollout stage"
            head={["Stage", "What happens", "What you learn"]}
            rows={[
              [
                "Shadow mode",
                "The agent proposes actions; people keep doing the work",
                "Real accuracy on live cases, and new test cases",
              ],
              [
                "Human approval",
                "The agent prepares actions; a person approves each one",
                "Share approved without edits; where people correct it",
              ],
              [
                "Limited autonomy",
                "Proven low-risk categories run alone; others still go to people",
                "Error rate on autonomous cases; escalation rate",
              ],
            ]}
          />
        </>
      ),
    },
    {
      id: "monitoring",
      title: "Step 6: monitor in production",
      body: (
        <>
          <p>Once live, keep watching:</p>
          <Checklist
            items={[
              "Edit and rejection rates on approved actions.",
              "Escalations, and cases where the agent should have escalated but didn’t.",
              "Unanswered or “I don’t know” questions, which show content gaps.",
              "Cost per task and time per task, against the pilot figures.",
              "Complaints or corrections from users, linked to the logged trace.",
            ]}
          />
          <p>
            Review a sample of conversations or tasks every week. Each real
            mistake becomes a test case, so the eval suite grows with the agent.
          </p>
        </>
      ),
    },
    {
      id: "mistakes",
      title: "Common eval mistakes",
      body: (
        <>
          <ul>
            <li>
              <strong>Testing only easy cases.</strong> A suite of typical
              examples hides the failures that matter. Include hard, refusal and
              escalation cases on purpose.
            </li>
            <li>
              <strong>Writing test cases from imagination.</strong> Invented
              examples miss the messiness of real emails, scans and mixed
              languages. Use real past cases.
            </li>
            <li>
              <strong>Trusting a model grader blindly.</strong> Graders have
              their own biases and errors. Check a sample by hand, and prefer
              exact checks wherever possible.
            </li>
            <li>
              <strong>Looking only at the average.</strong> An overall score can
              rise while one important category gets worse. Read results by case
              and category.
            </li>
            <li>
              <strong>Letting the test set go stale.</strong> If production
              mistakes never become new cases, the suite stops reflecting
              reality.
            </li>
            <li>
              <strong>Ignoring cost and speed.</strong> A change that improves
              accuracy slightly but doubles the cost per task may not be worth
              shipping.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "minimal-setup",
      title: "A minimal eval setup for a first pilot",
      body: (
        <>
          <p>
            You don’t need a special platform to start. A first pilot can run on
            a simple setup:
          </p>
          <Checklist
            items={[
              "A spreadsheet or file of real cases with the expected outcome for each.",
              "A script that runs the agent on every case and saves the full trace.",
              "Exact checks for structured outputs, plus a short rubric for anything fuzzy.",
              "A results table by case, with pass or fail and a note on why.",
              "A rule that nothing ships if a safety case fails.",
            ]}
          />
          <p>
            Grow it as the agent grows: more cases, automatic runs before every
            release and dashboards for production monitoring.
          </p>
        </>
      ),
    },
    {
      id: "ask-your-vendor",
      title: "Questions to ask any AI vendor",
      body: (
        <>
          <ul>
            <li>How big is the test set, and where do the cases come from?</li>
            <li>What are the pass criteria, and who agreed them?</li>
            <li>Which checks are exact, and which use a model as grader?</li>
            <li>Do evals run automatically before every release?</li>
            <li>
              What do you monitor after launch, and how often do you review it?
            </li>
          </ul>
          <p>
            Every agent we build through our{" "}
            <Link href="/services/ai-agents">AI agent development</Link> service
            ships with an eval suite built from the client’s real cases and
            monitoring for cost, accuracy and failures. Developers can learn the
            same practice in our{" "}
            <Link href="/academy/ai-agents-course">
              Applied AI &amp; Agents course
            </Link>
            .
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "What are AI agent evals?",
      a: "Evals are an automated test suite for an AI system: a fixed set of real cases with known correct outcomes, scored on every change, so you can see whether the agent got better or worse.",
    },
    {
      q: "How many test cases does an AI agent need?",
      a: "A practical start is 50 to 200 real past cases, covering common, hard, refusal and escalation cases. The set should grow as real mistakes are found.",
    },
    {
      q: "What is LLM-as-a-judge?",
      a: "Using a language model to grade outputs against a rubric and reference answer. It suits fuzzy qualities such as completeness, but its judgements should be spot-checked by people.",
    },
    {
      q: "What should I measure when evaluating an AI agent?",
      a: "The final outcome, the steps and tool calls, answer quality, safety behaviour, escalation, and cost and speed per task. Agree two or three headline numbers and launch thresholds in advance.",
    },
    {
      q: "How do you test an AI agent for safety?",
      a: "Include cases where the agent must ask for approval, refuse, escalate or ignore instructions hidden in inputs, and treat any failure in these cases as a release blocker.",
    },
    {
      q: "Do evals stop after launch?",
      a: "No. Monitor edit rates, escalations, unanswered questions and cost in production, review samples regularly and add every real mistake to the test set.",
    },
  ],
};
