import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { siteConfig, socialLinks } from "@/lib/site-config";
import JsonLd from "@/lib/json-ld";
import { areaServedJsonLd, postalAddressJsonLd } from "@/components/pages/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0d0d0c",
};

// Applies the saved theme before first paint so a light-theme visitor never sees a dark flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: siteConfig.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // ProfessionalService is a LocalBusiness subtype, which is what local search reads.
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      logo: {
        "@type": "ImageObject",
        "@id": `${siteConfig.url}/#logo`,
        url: `${siteConfig.url}/brand/logo.png`,
        contentUrl: `${siteConfig.url}/brand/logo.png`,
        width: 1200,
        height: 151,
        caption: siteConfig.name,
      },
      image: { "@id": `${siteConfig.url}/#logo` },
      email: siteConfig.email,
      ...(siteConfig.phone && { telephone: siteConfig.phone }),
      address: postalAddressJsonLd(),
      areaServed: areaServedJsonLd(),
      knowsAbout: [
        "Mobile app development",
        "Flutter",
        "Web application development",
        "AI agents",
        "LIMS",
        "Pharmacovigilance software",
        "GxP computer system validation",
        "Software training",
      ],
      department: { "@id": `${siteConfig.url}/academy#academy` },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: siteConfig.email,
          ...(siteConfig.phone && { telephone: siteConfig.phone }),
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: siteConfig.supportEmail,
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          contactType: "human resources",
          email: siteConfig.hrEmail,
          availableLanguage: ["English", "Hindi"],
        },
      ],
      ...(socialLinks.length > 0 && { sameAs: socialLinks.map((s) => s.href) }),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
      inLanguage: "en-IN",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <JsonLd data={siteJsonLd} />
        {children}
      </body>
    </html>
  );
}
