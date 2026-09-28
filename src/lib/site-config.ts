export const siteConfig = {
  name: "Bright Infonet",
  title: "Bright Infonet — Software Development & IT Solutions",
  description:
    "Bright Infonet builds custom software, web applications, and IT solutions for businesses. Explore our services and get in touch to discuss your project.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/og-image.png",
  locale: "en_US",
  twitterHandle: "@brightinfonet",
} as const;
