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
import type { Post } from "./types";

export type { Faq, Post, PostSection, CoverVariant } from "./types";

/** Newest first; posts with the same date keep this order (the first one is featured). */
export const POSTS: Post[] = [
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

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

/** Same-category posts first, then the newest of the rest. */
export function relatedPosts(post: Post, count = 3) {
  const others = POSTS.filter((p) => p.slug !== post.slug);
  return [
    ...others.filter((p) => p.category === post.category),
    ...others.filter((p) => p.category !== post.category),
  ].slice(0, count);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
