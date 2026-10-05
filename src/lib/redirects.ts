// Old site → new site permanent redirects (301-equivalent 308 in Next).
// Source of truth for next.config.ts AND scripts/check-redirects.mjs.
// Full reasoning per URL: .agents/tasks/old-url-redirects.md
// Keep this file free of path aliases and runtime imports so the check
// script can load it with `node --experimental-strip-types`.
//
// Order matters: specific rules must come before their `:path+` catch-alls.

export type OldUrlRedirect = { source: string; destination: string };

const F = "/academy/flutter-app-development-course";
const W = "/academy/full-stack-web-development-course";
const A = "/academy/ai-agents-course";
const I = "/academy/industrial-training-chandigarh";
const AC = "/academy";

const to = (destination: string, sources: string[]): OldUrlRedirect[] =>
  sources.map((source) => ({ source, destination }));

export const OLD_URL_REDIRECTS: OldUrlRedirect[] = [
  ...to("/", ["/index.html", "/index.htm"]),
  ...to("/about", ["/about-us", "/about-us-1.html", "/choose-us"]),
  ...to("/#contact", ["/contact", "/contact-us", "/contact@brightinfonet.com"]),

  // Blog / tutorials
  ...to("/insights", ["/blog", "/blogs", "/blog/:path+", "/blogs/:path+", "/tutorials"]),
  ...to("/insights/flutter-developer-roadmap", [
    "/tutorials/flutter",
    "/tutorials/dart",
    "/flutter",
    "/dart",
    "/flutter_topics",
  ]),
  ...to("/insights", ["/tutorials/:path+"]),

  // Projects
  ...to("/work", ["/project", "/projects", "/portfolio", "/casestudy"]),

  // Courses (specific first, catch-all last)
  ...to(AC, ["/courses"]),
  ...to(F, ["/courses/flutter", "/courses/flutter-course", "/courses/mobile-app-development-flutter"]),
  ...to(W, ["/courses/reactjs-course", "/courses/web-design-course"]),
  ...to(A, ["/courses/python", "/courses/python-course", "/courses/data-science"]),
  ...to(AC, ["/courses/:path+"]),

  // Academy-era pages
  ...to(AC, [
    "/placements",
    "/students/placed-students",
    "/job-guarentee-program",
    "/event-list.html",
    "/faq",
    "/verify-certificate",
  ]),

  // Flutter / app-dev course landing pages
  ...to(F, [
    "/flutter-course",
    "/flutter-course-in-chandigarh",
    "/flutter-course-in-mohali",
    "/flutter-course-in-muzaffarnagar",
    "/flutter-online-course",
    "/flutter-online-training",
    "/flutter-training",
    "/flutter-training-in-mohali",
    "/flutter-training-in-muzaffarnagar",
    "/online-flutter-course",
    "/online-flutter-course-in-chandigarh",
    "/online-flutter-course-in-mohali",
    "/online-flutter-course-in-muzaffarnagar",
    "/online-flutter-training",
    "/online-flutter-training-in-mohali",
    "/online-flutter-training-in-muzaffarnagar",
    "/best-flutter-institute-in-chandigarh",
    "/best-online-flutter-institute-in-chandigarh",
    "/top-flutter-institute-in-chandigarh",
    "/mobile-app-development-flutter",
    "/online-mobile-app-development-flutter",
    "/mobile-app-development-course-in-chandigarh",
    "/online-mobile-app-development-course-in-chandigarh",
    "/mobile-app-development-muzaffarnagar",
    "/online-mobile-app-development",
  ]),
  ...to(I, [
    "/mobile-app-development-internship",
    "/online-mobile-app-development-internship",
    "/web-development-internship",
  ]),
  ...to("/services/mobile-apps", ["/mobile-app-development"]),
  ...to("/services/web-platforms", ["/web-development"]),
  ...to(A, ["/python-course", "/python-course-in-chandigarh"]),
  ...to(W, [
    "/php-course",
    "/php-course-in-chandigarh",
    "/reactjs-course",
    "/react-js-course-in-chandigarh",
    "/reactjs-course-in-chandigarh",
    "/reactjs-course-in-muzaffarnagar",
    "/reactjs-training",
    "/reactjs-training-in-muzaffarnagar",
    "/web-design-course",
    "/web-design-course-in-chandigarh",
    "/web-design-course-in-muzaffarnagar",
    "/web-designing-course",
    "/web-designing-training",
    "/web-design-training",
    "/web-design-training-in-muzaffarnagar",
    "/web-desinging-course-in-chandigarh",
    "/web-development-course-in-chandigarh",
    "/web-development-training",
    "/website-design-course-in-chandigarh",
    "/website-design-course-in-muzaffarnagar",
    "/website-designing-course",
    "/website-designing-training",
    "/website-design-training",
    "/website-design-training-in-muzaffarnagar",
  ]),

  // Duplicate resource merged into the canonical post (finding 3)
  ...to("/insights/lims-urs-template", ["/resources/lims-urs-template"]),
];
