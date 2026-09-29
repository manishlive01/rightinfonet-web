import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import type { Post } from "./types";

export const flutterDeveloperRoadmap: Post = {
  slug: "flutter-developer-roadmap",
  title: "How to become a Flutter developer in 2026: a 3-month roadmap",
  metaTitle: "Flutter Developer Roadmap 2026: A 3-Month Plan",
  description:
    "A week-by-week 3-month Flutter roadmap for 2026: Dart, widgets, Riverpod, APIs, Firebase, testing, a Play Store release and a portfolio that gets interviews.",
  excerpt:
    "A realistic 12-week plan to go from Dart basics to a published Play Store app — widgets, Riverpod, APIs, Firebase, testing and a portfolio employers actually open.",
  category: "Careers & training",
  cover: "phones",
  published: "2026-09-28",
  readingMinutes: 8,
  keywords: [
    "Flutter developer roadmap 2026",
    "how to become a Flutter developer",
    "learn Flutter in 3 months",
    "Flutter course India",
    "Flutter course Chandigarh",
    "Flutter training Mohali",
    "Flutter app development course Panchkula",
    "Dart and Flutter for beginners",
  ],
  takeaways: [
    "Learn Dart properly for two weeks before touching complex widgets — it makes everything after it faster.",
    "Pick one state management approach (Riverpod is a solid default) and learn it deeply instead of sampling five.",
    "Real APIs, Firebase, tests and an actual Play Store release are what separate a learner from a hireable developer.",
    "Two or three polished, published apps on GitHub beat a long list of tutorial clones and certificates.",
  ],
  intro: (
    <>
      <p>
        To become a Flutter developer in 2026, spend about three months on a structured plan: learn
        Dart first, then widgets and layouts, state management with Riverpod, REST APIs and
        Firebase, testing, and finally a real Play Store release. Finish with two or three polished
        apps on GitHub — that portfolio matters more than any certificate.
      </p>
      <p>
        Below is the week-by-week plan we’d give a motivated beginner who already knows a little
        programming and can put in 15–20 focused hours a week. If you’re starting from zero,
        stretch each phase by a few weeks — the order stays the same.
      </p>
    </>
  ),
  sections: [
    {
      id: "before-you-start",
      title: "Before you start: setup and expectations",
      body: (
        <>
          <p>
            You don’t need a Mac or an expensive phone to learn Flutter. A laptop with 8 GB of RAM
            (16 GB is more comfortable), the Flutter SDK, VS Code or Android Studio, and an Android
            phone or emulator are enough for the whole roadmap. You’ll only need a Mac later if you
            want to build and publish for iOS.
          </p>
          <ul>
            <li><strong>Install and verify:</strong> run <code>flutter doctor</code> until it’s clean, and get the default counter app running on a device.</li>
            <li><strong>Set up Git and GitHub</strong> on day one. Commit every day — your commit history becomes part of your portfolio.</li>
            <li><strong>Pick one main resource</strong> (the official Flutter and Dart docs are excellent) and supplement it, rather than hopping between ten video series.</li>
          </ul>
          <Callout title="Some prior programming helps">
            <p>
              If you’ve written loops, functions and basic classes in any language — C, Java,
              Python, JavaScript — you’ll move through month one quickly. If not, add two weeks of
              general programming basics before week one.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "plan-at-a-glance",
      title: "The 12-week plan at a glance",
      body: (
        <>
          <DataTable
            caption="A 3-month Flutter roadmap, week by week"
            head={["Weeks", "Focus", "What you should be able to do"]}
            rows={[
              ["1–2", "Dart fundamentals", "Write classes, use null safety, collections, async/await and Futures without looking things up."],
              ["3–4", "Widgets and layout", "Rebuild any simple screen from a design: rows, columns, lists, forms, navigation, theming."],
              ["5–6", "State with Riverpod", "Structure an app into UI, state and data layers; manage loading and error states cleanly."],
              ["7", "REST APIs and JSON", "Call real APIs, parse JSON into models, handle errors, timeouts and pagination."],
              ["8", "Firebase", "Add sign-in, Firestore data, storage for images and push notifications."],
              ["9", "Local storage and polish", "Cache data offline, add animations, handle permissions and different screen sizes."],
              ["10", "Testing", "Write unit, widget and a few integration tests; catch regressions before release."],
              ["11", "Play Store release", "Sign, build and publish an app, with store listing, privacy policy and crash reporting."],
              ["12", "Portfolio and job prep", "Clean up repos, write READMEs, record demos and practise explaining your decisions."],
            ]}
          />
          <p>
            Treat the weeks as a guide, not a deadline. If Riverpod takes three weeks to click,
            give it three weeks — rushing state management is the most common reason learners
            stall later.
          </p>
        </>
      ),
    },
    {
      id: "month-one",
      title: "Month 1: Dart and widgets",
      body: (
        <>
          <h3>Weeks 1–2: Dart, properly</h3>
          <p>
            Flutter is only as easy as your Dart is solid. Spend these two weeks writing small
            command-line Dart programs, not apps. Cover:
          </p>
          <ul>
            <li>Variables, types, functions, classes, constructors and <code>final</code> vs <code>const</code>.</li>
            <li>Sound null safety — <code>?</code>, <code>!</code>, <code>late</code> and why you should rarely need <code>!</code>.</li>
            <li>Lists, maps and sets with <code>map</code>, <code>where</code> and <code>fold</code>.</li>
            <li>Futures, <code>async</code>/<code>await</code> and Streams — the foundation for every API call later.</li>
            <li>Records, pattern matching and sealed classes, which modern Flutter code uses more and more.</li>
          </ul>
          <h3>Weeks 3–4: widgets, layout and navigation</h3>
          <p>
            Now build screens. Learn the difference between stateless and stateful widgets, then
            practise layout until it’s boring: <code>Row</code>, <code>Column</code>,{" "}
            <code>Stack</code>, <code>Expanded</code>, <code>ListView</code> and forms with
            validation. Add navigation between screens (the <code>go_router</code> package is a
            common choice) and a proper app theme with Material 3.
          </p>
          <p>
            A good end-of-month exercise: pick two screens from an app you use daily and rebuild
            them pixel-close. It teaches layout faster than any tutorial.
          </p>
        </>
      ),
    },
    {
      id: "month-two",
      title: "Month 2: state, APIs and Firebase",
      body: (
        <>
          <h3>Weeks 5–6: state management with Riverpod</h3>
          <p>
            <code>setState</code> works for a single screen, but real apps share data across many
            screens. Riverpod is a widely used, well-documented option that scales from small apps
            to large ones. Focus on:
          </p>
          <ul>
            <li>Providers and notifiers, and how widgets watch and read them.</li>
            <li>Async state — showing loading, data and error states without spaghetti code.</li>
            <li>Separating layers: UI widgets, state/notifiers, and repositories that fetch data.</li>
          </ul>
          <p>
            Other approaches like Bloc are also common in industry. The concepts transfer; what
            matters is learning one of them well enough to explain your architecture in an
            interview.
          </p>
          <h3>Week 7: REST APIs and JSON</h3>
          <p>
            Use the <code>http</code> or <code>dio</code> package against a real public API. Parse
            JSON into typed model classes, handle network errors and timeouts, and implement
            pull-to-refresh and pagination. This is what most client apps spend their time doing.
          </p>
          <h3>Week 8: Firebase</h3>
          <p>
            Firebase gets you a backend without writing one: Authentication for sign-in, Cloud
            Firestore for data, Storage for images and Cloud Messaging for push notifications.
            Learn to write basic security rules — an open Firestore database is a classic beginner
            mistake.
          </p>
        </>
      ),
    },
    {
      id: "month-three",
      title: "Month 3: polish, testing and a real release",
      body: (
        <>
          <h3>Week 9: offline, permissions and polish</h3>
          <p>
            Cache data locally so the app opens without a network, request camera or location
            permissions properly, and test on a small phone and a tablet. Add a few purposeful
            animations. These details are what make a portfolio app feel like a product.
          </p>
          <h3>Week 10: testing</h3>
          <p>
            Write unit tests for your models and notifiers, widget tests for key screens, and one
            or two integration tests for the main flow. Employers notice a <code>test/</code>{" "}
            folder with real tests in it — most beginner repos don’t have one.
          </p>
          <h3>Week 11: publish to the Play Store</h3>
          <p>
            Shipping is a skill of its own. You’ll need a Google Play developer account, a signed
            release build, app icons and screenshots, a store listing, a privacy policy and the
            data safety form. Add crash reporting (for example Firebase Crashlytics) so you see
            real-world errors. Expect review steps and testing-track requirements for new
            accounts, so start this week early.
          </p>
          <Callout title="Why the release matters">
            <p>
              “I published this app and fixed the crashes users hit” is a far stronger interview
              story than “I finished a course.” It proves you can handle the unglamorous last 20%
              of a project.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "portfolio",
      title: "Building a portfolio that gets interviews",
      body: (
        <>
          <p>
            By week 12 you should have two or three apps you’re proud of, rather than ten half-done
            clones. Good portfolio apps solve a small real problem — a society maintenance tracker,
            a clinic appointment app, an expense splitter for your hostel.
          </p>
          <Checklist
            items={[
              "At least one app live on the Play Store, with a link in your resume.",
              "Clean GitHub repos with a README: what it does, screenshots, architecture and how to run it.",
              "Riverpod (or another consistent approach) with clear folder structure — no 800-line widgets.",
              "Real API or Firebase integration, with loading and error states handled.",
              "A handful of meaningful tests, and a short screen recording of the app in use.",
              "Commit history that shows steady work, not one giant upload the night before.",
            ]}
          />
          <p>
            In interviews, expect to walk through your code: why you structured state the way you
            did, how you handled errors, and what you’d improve. Practise saying it out loud.
          </p>
        </>
      ),
    },
    {
      id: "mistakes-and-next-steps",
      title: "Common mistakes and your next step",
      body: (
        <>
          <ul>
            <li><strong>Tutorial loops:</strong> watching without building. For every hour of video, spend two writing your own code.</li>
            <li><strong>Skipping Dart:</strong> it feels slow, but weak Dart makes every later topic harder.</li>
            <li><strong>Collecting state libraries:</strong> learn one deeply before comparing others.</li>
            <li><strong>Never shipping:</strong> an unpublished app hides the hardest lessons — signing, store review, real crashes.</li>
            <li><strong>Learning alone with no review:</strong> code review from an experienced developer catches habits you can’t see yourself.</li>
          </ul>
          <p>
            If you’d rather follow this roadmap with structure, our{" "}
            <Link href="/academy/flutter-app-development-course">Mobile with Flutter course</Link>{" "}
            is a 12-week hybrid track for learners in Panchkula, Mohali, Chandigarh and online. It
            covers Dart, Flutter and Firebase, with code-reviewed projects taught by working
            engineers, and you publish an app to the Play Store before you finish. Curious how
            Flutter compares with native in real projects? Read{" "}
            <Link href="/insights/flutter-vs-native-app-development">Flutter vs native app development</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "Can I learn Flutter in 3 months?",
      a: "Yes, if you already know basic programming and can give it 15–20 focused hours a week. Three months is enough to learn Dart, build and publish an app, and have a starter portfolio; true fluency keeps growing on the job.",
    },
    {
      q: "Do I need to learn Dart before Flutter?",
      a: "You need the Dart basics first — types, classes, null safety and async/await. Two weeks on Dart alone makes widgets, state management and APIs much easier to follow.",
    },
    {
      q: "Is Riverpod or Bloc better for beginners?",
      a: "Both are used in industry. Riverpod is a solid default with less boilerplate for most apps; what matters most is learning one approach deeply and being able to explain it.",
    },
    {
      q: "Do I need a Mac to become a Flutter developer?",
      a: "No. You can learn Flutter and publish Android apps on Windows or Linux. A Mac is only required to build and release the iOS version of an app.",
    },
    {
      q: "Is Flutter a good career choice in India in 2026?",
      a: "Flutter is widely used by startups, agencies and product companies for cross-platform apps, so there is steady demand. Your chances depend on a strong portfolio and solid fundamentals rather than the framework alone.",
    },
    {
      q: "Where can I learn Flutter in Chandigarh, Mohali or Panchkula?",
      a: "Bright Infonet Academy runs a 12-week hybrid Mobile with Flutter course for the Tricity and online learners, with code-reviewed projects and a Play Store release.",
    },
  ],
};
