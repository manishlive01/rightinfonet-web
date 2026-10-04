import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import PostLink from "@/components/insights/PostLink";
import type { Post } from "./types";

export const ragForBusiness: Post = {
  slug: "rag-for-business",
  title:
    "RAG for business: how retrieval-augmented generation works and when to use it",
  metaTitle: "RAG for Business: How It Works and When to Use It",
  description:
    "What RAG (retrieval-augmented generation) means for a business: how it works, when to use it over fine-tuning, data preparation, access control and evals.",
  excerpt:
    "Retrieval-augmented generation in plain words: how an AI system looks up your documents before it answers, when RAG beats fine-tuning, and what it takes to make answers accurate, permitted and cited.",
  category: "AI agents",
  pillar: "ai",
  cover: "agent",
  published: "2026-09-04",
  readingMinutes: 7,
  keywords: [
    "RAG for business",
    "retrieval augmented generation",
    "what is RAG in AI",
    "RAG vs fine-tuning",
    "AI search over company documents",
    "RAG chatbot",
    "RAG development India",
  ],
  takeaways: [
    "RAG makes a language model look up relevant passages from your own documents before it answers, so answers can be current, specific and cited.",
    "Use RAG when the knowledge lives in documents that change; fine-tuning is better for style and format than for facts.",
    "Most RAG quality problems come from the documents and the retrieval step, not from the model.",
    "Access control, citations and an evaluation set built from real questions are what make RAG safe to put in front of staff or customers.",
  ],
  intro: (
    <>
      <p>
        RAG, or retrieval-augmented generation, means an AI system first
        searches your own documents for the passages that match a question, then
        gives those passages to a language model to write the answer. Businesses
        use it so answers come from current, approved content and can cite their
        source.
      </p>
      <p>
        RAG sits behind most useful company chatbots and many AI agents. This
        guide explains how it works without the jargon, when to use it rather
        than fine-tuning, what decides whether answers are accurate, and how to
        keep private documents private.
      </p>
    </>
  ),
  sections: [
    {
      id: "how-it-works",
      title: "How RAG works, step by step",
      body: (
        <>
          <p>
            A RAG system has two halves: preparing documents, and answering.
          </p>
          <h3>Preparing your documents</h3>
          <ol>
            <li>
              <strong>Collect</strong> the sources: policies, SOPs, manuals,
              product sheets, past tickets, web pages.
            </li>
            <li>
              <strong>Clean and split</strong> them into passages (chunks) of a
              sensible size, keeping titles, headings and dates attached.
            </li>
            <li>
              <strong>Index</strong> each passage, usually as an embedding (a
              list of numbers capturing its meaning) in a vector store, often
              alongside a keyword index.
            </li>
          </ol>
          <h3>Answering a question</h3>
          <ol>
            <li>
              <strong>Search</strong> the index for the passages most relevant
              to the question, filtered by what this user is allowed to see.
            </li>
            <li>
              <strong>Generate</strong>: the model receives the question and
              those passages, with instructions to answer only from them.
            </li>
            <li>
              <strong>Cite and check</strong>: the answer links to its sources,
              and says “I don’t know” when the passages don’t contain the
              answer.
            </li>
          </ol>
          <Callout title="Why not just paste everything into the model?">
            <p>
              Models can read long inputs, but sending every document with every
              question is slow and costly, and answers get worse when the
              relevant line is buried. Retrieval keeps the input small and
              focused.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "rag-vs-alternatives",
      title: "RAG vs fine-tuning vs long context",
      body: (
        <>
          <DataTable
            caption="Ways to give a language model your business knowledge"
            head={["Approach", "What it does", "Best for", "Weak at"]}
            rows={[
              [
                "RAG",
                "Looks up passages from your documents at question time",
                "Facts that change; large document sets; answers with citations",
                "Questions that need reasoning across many documents at once",
              ],
              [
                "Fine-tuning",
                "Further trains a model on your examples",
                "A consistent style, format or narrow classification task",
                "Keeping facts current; showing where an answer came from",
              ],
              [
                "Long context",
                "Sends whole documents with the question",
                "A few documents at a time, such as one contract",
                "Large or growing collections; cost per question",
              ],
              [
                "Plain prompt",
                "Relies on what the model already knows",
                "General knowledge and drafting",
                "Anything specific to your business",
              ],
            ]}
          />
          <p>
            These approaches combine. A support assistant might use RAG for
            facts, a few examples in the prompt for tone, and no fine-tuning at
            all. Start with RAG when the question is “answer from our
            documents”.
          </p>
        </>
      ),
    },
    {
      id: "use-cases",
      title: "Where RAG helps a business",
      body: (
        <>
          <ul>
            <li>
              <strong>Customer chat</strong> that answers from your website,
              price lists and policies. See our{" "}
              <Link href="/services/ai-chatbot-development-india">
                AI chatbot development
              </Link>{" "}
              service.
            </li>
            <li>
              <strong>Internal knowledge search</strong> over SOPs, HR policies
              and manuals, with links to the exact page.
            </li>
            <li>
              <strong>Support teams</strong> getting a drafted reply grounded in
              past tickets and product documentation.
            </li>
            <li>
              <strong>Agents</strong> that look something up before they act,
              such as checking a policy before approving a request.
            </li>
            <li>
              <strong>Regulated teams</strong> finding the right clause in a
              procedure, where a citation matters as much as the answer.
            </li>
          </ul>
          <p>
            If you are still deciding between a customer-facing assistant and a
            task-doing system, read{" "}
            <PostLink slug="ai-agent-vs-chatbot">AI agent vs chatbot</PostLink>{" "}
            first.
          </p>
        </>
      ),
    },
    {
      id: "what-decides-quality",
      title: "What decides answer quality",
      body: (
        <>
          <p>
            When a RAG system gives a wrong answer, the cause is usually one of
            these, roughly in order of how often we see them:
          </p>
          <DataTable
            caption="Common causes of poor RAG answers and their fixes"
            head={["Cause", "What it looks like", "Typical fix"]}
            rows={[
              [
                "Outdated or conflicting documents",
                "Confident answers from an old policy",
                "One owner per source, version dates, retire old files",
              ],
              [
                "Poor splitting",
                "Answers missing the condition in the next paragraph",
                "Split by headings, keep context with each chunk",
              ],
              [
                "Weak retrieval",
                "The right passage exists but isn’t found",
                "Combine keyword and semantic search; add re-ranking",
              ],
              [
                "Loose instructions",
                "The model fills gaps from general knowledge",
                "Answer only from sources; say “I don’t know” otherwise",
              ],
              [
                "Tables and scans",
                "Numbers read wrongly from PDFs or images",
                "Extract tables properly; check scanned documents",
              ],
            ]}
          />
          <p>
            Notice that only one row is about the model. Clean, owned content
            does more for accuracy than switching to a bigger model.
          </p>
        </>
      ),
    },
    {
      id: "access-and-privacy",
      title: "Access control and data protection",
      body: (
        <>
          <p>
            A RAG system must never show someone a document they could not open
            themselves. Build this in from the start:
          </p>
          <Checklist
            items={[
              "Store each passage with the permissions of its source document.",
              "Filter search results by the user’s permissions before the model sees them.",
              "Mask or leave out personal data that the use case doesn’t need.",
              "Decide which data may be sent to an external model provider, and where it is processed.",
              "Log questions, retrieved passages and answers, with a retention period.",
            ]}
          />
          <p>
            In India, the Digital Personal Data Protection Act, 2023 applies to
            personal data in AI systems like any other software. Take advice on
            what it means for your use case.
          </p>
        </>
      ),
    },
    {
      id: "evaluate",
      title: "How to evaluate a RAG system",
      body: (
        <>
          <p>Measure it before anyone relies on it:</p>
          <ol>
            <li>
              <strong>Build a question set</strong> from real questions, with
              the correct answer and source document for each, including some
              that should be refused.
            </li>
            <li>
              <strong>Check retrieval</strong>: is the right passage among the
              results?
            </li>
            <li>
              <strong>Check answers</strong>: correct, complete, cited and free
              of claims not found in the sources?
            </li>
            <li>
              <strong>Re-run on every change</strong> to documents, splitting,
              prompts or models.
            </li>
          </ol>
          <p>
            Our guide on{" "}
            <PostLink slug="how-to-evaluate-ai-agents">
              how to evaluate AI agents
            </PostLink>{" "}
            covers test sets, graders and production monitoring in detail.
          </p>
        </>
      ),
    },
    {
      id: "myths",
      title: "Three common misunderstandings",
      body: (
        <ul>
          <li>
            <strong>“RAG trains the model on our data.”</strong> It doesn’t. The
            model is unchanged; it only reads the passages retrieved for each
            question. Remove a document from the index and it stops appearing in
            answers.
          </li>
          <li>
            <strong>“A vector database is the whole system.”</strong> The store
            is one part. Cleaning and splitting documents, permissions,
            instructions, citations and evaluation decide most of the quality.
          </li>
          <li>
            <strong>“More documents means better answers.”</strong> Adding
            outdated or duplicate files makes retrieval worse. A smaller,
            well-owned set usually beats a dump of every shared drive.
          </li>
        </ul>
      ),
    },
    {
      id: "keep-current",
      title: "Keeping a RAG system current",
      body: (
        <>
          <p>
            A RAG system is only as current as its index. Launch day is the easy
            part; the work is keeping answers right as documents change. Plan
            for:
          </p>
          <ul>
            <li>
              <strong>An owner for each source.</strong> Someone who decides
              when a policy or manual is replaced, and retires the old version.
            </li>
            <li>
              <strong>Automatic re-indexing</strong> when a document is added,
              changed or deleted, so retired content stops appearing in answers.
            </li>
            <li>
              <strong>Dates on everything.</strong> Passages carry their
              document’s version and date, so the model can prefer the newest
              and the user can see it.
            </li>
            <li>
              <strong>A review of unanswered questions.</strong> Questions the
              system couldn’t answer show where content is missing.
            </li>
            <li>
              <strong>Re-running the question set</strong> after big content
              changes, not only after code changes.
            </li>
          </ul>
          <Callout title="Ready for a RAG project?">
            <p>
              You are ready when you can name the audience, point to the
              documents that hold the answers, name who owns them, and list some
              real questions people ask each week.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "start",
      title: "Getting started",
      body: (
        <>
          <p>
            A good first RAG project has one clear audience, one well-owned
            document set and questions people already ask every week. Start
            there, measure it, then widen the sources. Internal assistants for
            staff are often a safer first audience than customers, because
            people can spot a wrong answer and report it while the system
            learns, and the documents involved are usually already owned by one
            team.
          </p>
          <p>
            We build RAG into chatbots and agents with access control, citations
            and eval suites from real questions; see{" "}
            <Link href="/services/ai-agents">AI agent development</Link>.
            Developers who want to learn to build it can join our{" "}
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
      q: "What is RAG in simple words?",
      a: "RAG, or retrieval-augmented generation, means an AI system first finds the passages in your documents that match a question, then gives them to a language model to write an answer that cites those sources.",
    },
    {
      q: "Is RAG better than fine-tuning?",
      a: "For answering from business documents that change, usually yes, because you update the documents rather than retrain a model and answers can cite sources. Fine-tuning is better suited to style, format or narrow classification tasks.",
    },
    {
      q: "Does RAG stop AI from making things up?",
      a: "It reduces it a lot, but doesn’t remove it on its own. Clear instructions to answer only from sources, citations, refusals when nothing is found and regular evaluation keep it under control.",
    },
    {
      q: "What documents can be used for RAG?",
      a: "Most text sources: web pages, PDFs, Word files, policies, manuals, tickets and database records. Scanned documents and complex tables need extra care to extract correctly.",
    },
    {
      q: "Can RAG respect who is allowed to see which document?",
      a: "Yes, if it is designed to. Each passage keeps the permissions of its source, and search results are filtered by the user’s access before the model sees them.",
    },
    {
      q: "How long does a first RAG project take?",
      a: "It depends on the documents and integrations. A focused pilot on one well-owned document set is far quicker than indexing everything; we scope it after looking at your sources.",
    },
  ],
};
