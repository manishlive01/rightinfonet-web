import { aiAgentsGuide } from "./ai-agents-business";
import { aiMlJobsForFreshersIndia } from "./ai-ml-jobs-for-freshers-india";
import { appDevelopmentCostIndia } from "./app-development-cost-india";
import { bestItTrainingInstituteChandigarhMohaliPanchkula } from "./best-it-training-institute-chandigarh-mohali-panchkula";
import { bestProgrammingLanguageToLearnIndia } from "./best-programming-language-to-learn-india";
import { csvVsCsa } from "./csv-vs-csa-computer-software-assurance";
import { customSoftwareVsSaas } from "./custom-software-vs-saas";
import { flutterDeveloperHiringModels } from "./flutter-developer-hiring-models";
import { flutterDeveloperRoadmap } from "./flutter-developer-roadmap";
import { flutterVsNative } from "./flutter-vs-native";
import { fullStackDeveloperRoadmapIndia } from "./full-stack-developer-roadmap-india";
import { gamp5Guide } from "./gamp-5-validation-guide";
import { howToChooseAiDevelopmentCompanyIndia } from "./how-to-choose-ai-development-company-india";
import { howToChooseAppDevelopmentCompanyChandigarh } from "./how-to-choose-app-development-company-chandigarh";
import { howToChooseSoftwareDevelopmentCompanyIndia } from "./how-to-choose-software-development-company-india";
import { limsSoftwareDevelopmentCostIndia } from "./lims-software-development-cost-india";
import { mvpDevelopmentCostTimeline } from "./mvp-development-cost-timeline";
import { onlineVsOfflineCodingCourse } from "./online-vs-offline-coding-course";
import { outsourcingAppDevelopmentToIndia } from "./outsourcing-app-development-to-india";
import { part11Checklist } from "./part-11-lims-checklist";
import { pharmacovigilanceSoftwareBuildVsBuy } from "./pharmacovigilance-software-build-vs-buy";
import { sixMonthsIndustrialTrainingChandigarh } from "./six-months-industrial-training-chandigarh";
import { skillsForPlacementBtechBcaMca } from "./skills-for-placement-btech-bca-mca";
import { softwareDeveloperCareerChandigarhTricity } from "./software-developer-career-chandigarh-tricity";
import { websiteDevelopmentCostSmallBusinessIndia } from "./website-development-cost-small-business-india";
import { whyLocalBusinessesNeedAMobileApp } from "./why-local-businesses-need-a-mobile-app";
// Pillar 1 (regulated software), published Jul–Aug 2026 (Tue/Fri)
import { gxpSoftwareValidationGuide } from "./gxp-software-validation-guide";
import { part11AuditTrailRequirements } from "./21-cfr-part-11-audit-trail-requirements";
import { gamp5Category4VsCategory5 } from "./gamp-5-category-4-vs-category-5";
import { euAnnex11ComputerisedSystems } from "./eu-annex-11-computerised-systems";
import { limsUrsTemplate } from "./lims-urs-template";
import { customLimsVsOffTheShelfLims } from "./custom-lims-vs-off-the-shelf-lims";
import { limsImplementationChecklist } from "./lims-implementation-checklist";
import { nablIso15189LabSoftwareRequirements } from "./nabl-iso-15189-lab-software-requirements";
import { pharmacovigilanceE2bR3Explained } from "./pharmacovigilance-e2b-r3-explained";
import { whatIsAValidationPackage } from "./what-is-a-validation-package";
// Pillar 2 (cost, hiring, comparisons), published Sep–Oct 2026
import { appDevelopmentCostChandigarh } from "./app-development-cost-chandigarh";
import { mvpIn8Weeks } from "./mvp-in-8-weeks";
import { howToWriteSoftwareRfp } from "./how-to-write-software-rfp";
import { nextjsVsWordpressBusinessWebsite } from "./nextjs-vs-wordpress-business-website";
import { inHouseVsOutsourcingSoftwareDevelopment } from "./in-house-vs-outsourcing-software-development";
// Pillar 4 (academy) and Pillar 3 (AI agents), published Aug–Sep 2026
import { fresherSoftwareDeveloperSalaryChandigarh } from "./fresher-software-developer-salary-chandigarh";
import { whatToDoAfterBcaMca } from "./what-to-do-after-bca-mca";
import { industrialTrainingCertificateGuide } from "./industrial-training-certificate-guide";
import { aiAgentVsChatbot } from "./ai-agent-vs-chatbot";
import { ragForBusiness } from "./rag-for-business";
import { aiAutomationClinicsLabsRetail } from "./ai-automation-clinics-labs-retail";
import { aiAgentDevelopmentCostIndia } from "./ai-agent-development-cost-india";
import { howToEvaluateAiAgents } from "./how-to-evaluate-ai-agents";
import { isPublished, todayIST } from "./schedule";
import type { Pillar, Post } from "./types";

export type { Faq, Pillar, Post, PostSection, CoverVariant } from "./types";
export { todayIST } from "./schedule";

/**
 * Every post, including scheduled ones (future `published` date). Private on purpose: pages must
 * use the functions below, which only return posts that are live today (IST) and are evaluated
 * per render so ISR picks up newly published posts without a rebuild.
 *
 * Newest first; posts with the same date keep this order (the first one is featured).
 */
const POSTS: Post[] = [
  inHouseVsOutsourcingSoftwareDevelopment,
  nextjsVsWordpressBusinessWebsite,
  howToWriteSoftwareRfp,
  mvpIn8Weeks,
  appDevelopmentCostChandigarh,
  howToEvaluateAiAgents,
  aiAgentDevelopmentCostIndia,
  aiAutomationClinicsLabsRetail,
  ragForBusiness,
  aiAgentVsChatbot,
  industrialTrainingCertificateGuide,
  whatToDoAfterBcaMca,
  fresherSoftwareDeveloperSalaryChandigarh,
  whatIsAValidationPackage,
  pharmacovigilanceE2bR3Explained,
  nablIso15189LabSoftwareRequirements,
  limsImplementationChecklist,
  customLimsVsOffTheShelfLims,
  limsUrsTemplate,
  euAnnex11ComputerisedSystems,
  gamp5Category4VsCategory5,
  part11AuditTrailRequirements,
  gxpSoftwareValidationGuide,
  howToChooseAppDevelopmentCompanyChandigarh,
  bestItTrainingInstituteChandigarhMohaliPanchkula,
  appDevelopmentCostIndia,
  sixMonthsIndustrialTrainingChandigarh,
  howToChooseSoftwareDevelopmentCompanyIndia,
  flutterDeveloperRoadmap,
  fullStackDeveloperRoadmapIndia,
  howToChooseAiDevelopmentCompanyIndia,
  websiteDevelopmentCostSmallBusinessIndia,
  mvpDevelopmentCostTimeline,
  outsourcingAppDevelopmentToIndia,
  flutterDeveloperHiringModels,
  softwareDeveloperCareerChandigarhTricity,
  skillsForPlacementBtechBcaMca,
  aiMlJobsForFreshersIndia,
  bestProgrammingLanguageToLearnIndia,
  onlineVsOfflineCodingCourse,
  whyLocalBusinessesNeedAMobileApp,
  customSoftwareVsSaas,
  csvVsCsa,
  limsSoftwareDevelopmentCostIndia,
  pharmacovigilanceSoftwareBuildVsBuy,
  part11Checklist,
  aiAgentsGuide,
  gamp5Guide,
  flutterVsNative,
].sort((a, b) => b.published.localeCompare(a.published));

export const PILLARS: Record<
  Pillar,
  { name: string; cta: { href: string; label: string } }
> = {
  regulated: {
    name: "Regulated software",
    cta: {
      href: "/services/regulated-software",
      label: "Regulated software service",
    },
  },
  cost: {
    name: "App & software cost and hiring",
    cta: { href: "/services/mobile-apps", label: "Mobile app development" },
  },
  ai: {
    name: "AI agents",
    cta: { href: "/services/ai-agents", label: "AI agent development" },
  },
  academy: {
    name: "Academy & careers",
    cta: { href: "/academy", label: "Bright Infonet Academy" },
  },
};

/** Live posts (published on or before today, IST), newest first. */
export function getPublishedPosts(today = todayIST()) {
  return POSTS.filter((p) => isPublished(p, today));
}

/** A live post by slug; scheduled and unknown slugs return undefined (the page 404s). */
export function getPost(slug: string) {
  const post = POSTS.find((p) => p.slug === slug);
  return post && isPublished(post) ? post : undefined;
}

export function isPostSlugPublished(slug: string) {
  return getPost(slug) !== undefined;
}

/** Same pillar first, then same category, then the newest of the rest. Live posts only. */
export function relatedPosts(post: Post, count = 3) {
  const others = getPublishedPosts().filter((p) => p.slug !== post.slug);
  const pillar = others.filter((p) => p.pillar === post.pillar);
  const category = others.filter(
    (p) => p.pillar !== post.pillar && p.category === post.category,
  );
  const rest = others.filter(
    (p) => p.pillar !== post.pillar && p.category !== post.category,
  );
  return [...pillar, ...category, ...rest].slice(0, count);
}

/** Live posts grouped by pillar, each group newest first. */
export function postsByPillar() {
  const groups: Record<Pillar, Post[]> = {
    regulated: [],
    cost: [],
    ai: [],
    academy: [],
  };
  for (const p of getPublishedPosts()) groups[p.pillar].push(p);
  return groups;
}

/** The pillar's hub article, if it is live. */
export function pillarHub(pillar: Pillar) {
  return getPublishedPosts().find((p) => p.pillar === pillar && p.pillarHub);
}

/** End-of-article service CTA: the post's override, else the pillar default. */
export function postCta(post: Post) {
  return post.cta ?? PILLARS[post.pillar].cta;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
