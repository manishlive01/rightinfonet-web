import Link from "next/link";
import { Callout, Checklist, DataTable } from "@/components/insights/Prose";
import type { Post } from "./types";

export const websiteDevelopmentCostSmallBusinessIndia: Post = {
  slug: "website-development-cost-small-business-india",
  title: "Website development cost for small businesses in India",
  metaTitle: "Website Development Cost for Small Business in India",
  description:
    "Website development cost for small businesses in India: indicative ranges for brochure, CMS, e-commerce and web app sites, plus domain, hosting and upkeep.",
  excerpt:
    "What a small-business website costs in India — brochure, CMS, e-commerce or web app — with indicative ranges, yearly running costs, and the SEO basics every site should launch with.",
  category: "Web development",
  pillar: "cost",
  cta: { href: "/services/web-platforms", label: "Web platform development" },
  cover: "phones",
  published: "2026-09-28",
  updated: "2026-10-04",
  readingMinutes: 7,
  keywords: [
    "website development cost India",
    "website cost for small business",
    "ecommerce website cost India",
    "web development company Chandigarh",
    "website design Panchkula",
    "website development Mohali",
    "Next.js website development",
    "website maintenance cost India",
  ],
  takeaways: [
    "Indicatively, a brochure site costs around ₹25,000–1.5 lakh, a CMS site ₹1–4 lakh, an e-commerce store ₹2–10 lakh and a custom web app ₹5 lakh and up.",
    "The type of site matters more than page count: payments, logins, catalogues and integrations are what raise the price.",
    "Running costs are small but real — domain, hosting, email, security updates and backups every year.",
    "Launch with SEO basics built in: fast pages, clear titles and descriptions, a Google Business Profile and a sitemap.",
  ],
  intro: (
    <>
      <p>
        For a small business in India, a website typically costs around{" "}
        <strong>₹25,000–1.5 lakh</strong> for a simple brochure site,{" "}
        <strong>₹1–4 lakh</strong> for a CMS site you can edit yourself,{" "}
        <strong>₹2–10 lakh</strong> for an e-commerce store, and{" "}
        <strong>₹5 lakh or more</strong> for a custom web app. These are
        indicative ranges; scope decides the real figure.
      </p>
      <p>
        This guide explains the four common types of website, what each suits,
        what you’ll pay every year to keep it running, and the SEO basics that
        help customers actually find it.
      </p>
    </>
  ),
  sections: [
    {
      id: "types-of-website",
      title: "The four types of small-business website",
      body: (
        <>
          <h3>Brochure site</h3>
          <p>
            A handful of pages — home, about, services, contact — that explain
            what you do and how to reach you. Good for clinics, consultants,
            local shops and service businesses that mainly need to be found and
            contacted.
          </p>
          <h3>CMS site</h3>
          <p>
            A site built on a content management system so your team can add
            pages, blog posts, team members or listings without a developer.
            Suits businesses that publish regularly or want content to help with
            search.
          </p>
          <h3>E-commerce store</h3>
          <p>
            A catalogue, cart, checkout and payments, plus order management,
            shipping and GST invoices. Can be built on a hosted platform or
            custom, depending on catalogue size and how unusual your process is.
          </p>
          <h3>Web app</h3>
          <p>
            Anything with logins and business logic — customer portals, booking
            systems, dashboards, quoting tools, internal software. This is
            software development more than website design, and is priced
            accordingly.
          </p>
        </>
      ),
    },
    {
      id: "indicative-ranges",
      title: "Indicative cost ranges",
      body: (
        <>
          <DataTable
            caption="Indicative website development cost in India, 2026 (varies by scope; get a written quote)"
            head={[
              "Type",
              "Typical scope",
              "Indicative cost",
              "Typical timeline",
            ]}
            rows={[
              [
                "Brochure",
                "4–8 pages, contact form, maps, WhatsApp button, basic SEO",
                "₹25,000–1.5 lakh",
                "2–4 weeks",
              ],
              [
                "CMS",
                "10–30 pages, blog or listings, editable content, custom design",
                "₹1–4 lakh",
                "4–8 weeks",
              ],
              [
                "E-commerce",
                "Catalogue, cart, payments, orders, shipping, GST invoices",
                "₹2–10 lakh",
                "6–12 weeks",
              ],
              [
                "Web app",
                "Logins, roles, dashboards, workflows, integrations",
                "₹5–30 lakh+",
                "2–6 months",
              ],
            ]}
          />
          <p>
            The lower end of each range usually means a template or standard
            theme and content you supply. The upper end means custom design,
            more pages or features, integrations and content help. Where you
            land depends on those choices more than on page count. Our{" "}
            <Link href="/tools/app-development-cost-calculator">
              cost calculator
            </Link>{" "}
            shows which of these ranges fits what your site needs to do.
          </p>
          <Callout title="Beware the very cheap website">
            <p>
              Very low quotes often mean a reused template, no ownership of the
              code or hosting account, slow pages and no support after launch.
              Ask who owns the domain, hosting login and source files before you
              sign.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "what-moves-the-price",
      title: "What moves the price up or down",
      body: (
        <>
          <ul>
            <li>
              <strong>Custom design vs template</strong> — a unique design takes
              longer but helps you stand apart from competitors using the same
              theme.
            </li>
            <li>
              <strong>Content</strong> — writing copy, product descriptions and
              taking photos is real work; if you supply it, cost goes down.
            </li>
            <li>
              <strong>Payments and logins</strong> — any time money or user
              accounts are involved, security and testing increase.
            </li>
            <li>
              <strong>Integrations</strong> — CRM, accounting, inventory,
              booking tools, WhatsApp or SMS.
            </li>
            <li>
              <strong>Languages</strong> — a Hindi or Punjabi version alongside
              English adds content and testing.
            </li>
            <li>
              <strong>Performance and accessibility</strong> — fast, accessible
              sites take care; they also rank and convert better.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "running-costs",
      title: "Domains, hosting and yearly upkeep",
      body: (
        <>
          <p>
            Once the site is live, expect a modest yearly bill. Indicative
            figures, which vary by provider and traffic:
          </p>
          <DataTable
            caption="Typical yearly running costs for a small-business website (indicative)"
            head={["Item", "Indicative cost per year", "Notes"]}
            rows={[
              [
                "Domain (.in or .com)",
                "₹800–1,500",
                "Register it in your own name and account",
              ],
              [
                "Hosting",
                "₹3,000–30,000",
                "Higher for e-commerce or web apps with more traffic",
              ],
              [
                "Business email",
                "Per user, per month",
                "Often via Google Workspace or Microsoft 365",
              ],
              [
                "SSL certificate",
                "Often free",
                "Included by most modern hosts",
              ],
              [
                "Maintenance and updates",
                "₹10,000–1 lakh+",
                "Security patches, backups, small changes; depends on site type",
              ],
            ]}
          />
          <p>
            E-commerce stores also pay payment gateway fees per transaction, and
            web apps may pay for databases, file storage and third-party APIs.
            Ask for these to be listed in your quote.
          </p>
        </>
      ),
    },
    {
      id: "seo-basics",
      title: "SEO basics every site should launch with",
      body: (
        <>
          <p>
            A website only earns its cost if people find it. These basics are
            cheap to include at build time and expensive to retrofit:
          </p>
          <Checklist
            items={[
              <>
                <strong>Fast pages on mobile</strong> — most local searches
                happen on phones.
              </>,
              <>
                <strong>A unique title and meta description</strong> for every
                page.
              </>,
              <>
                <strong>One clear page per service</strong>, rather than
                everything on one page.
              </>,
              <>
                <strong>Your name, address and phone</strong> consistent across
                the site and listings.
              </>,
              <>
                <strong>A Google Business Profile</strong>, linked to the site,
                with photos and reviews.
              </>,
              <>
                <strong>A sitemap and structured data</strong> so search engines
                understand your pages.
              </>,
              <>
                <strong>Analytics and Search Console</strong> set up from day
                one.
              </>,
            ]}
          />
          <p>
            For local businesses in the Tricity, pages that mention the areas
            you serve — Panchkula, Mohali, Chandigarh — help you show up for
            “near me” searches.
          </p>
        </>
      ),
    },
    {
      id: "choosing-a-type",
      title: "Which type of site do you need?",
      body: (
        <>
          <ul>
            <li>
              <strong>You mainly need calls and enquiries</strong> — a brochure
              site, done well, is enough.
            </li>
            <li>
              <strong>You want to publish content or listings often</strong> —
              choose a CMS.
            </li>
            <li>
              <strong>You sell products online</strong> — e-commerce, hosted or
              custom depending on scale.
            </li>
            <li>
              <strong>Customers or staff need to log in and do things</strong> —
              that’s a web app.
            </li>
          </ul>
          <p>
            Many businesses start with a brochure or CMS site and add a portal
            or store later. A clean foundation makes that step cheaper.
          </p>
        </>
      ),
    },
    {
      id: "how-we-help",
      title: "How we build business websites",
      body: (
        <>
          <p>
            We build fast, accessible websites and web platforms on Next.js,
            Node and PostgreSQL for businesses across Panchkula, Mohali and
            Chandigarh and clients worldwide. One small senior team handles
            design, build and launch, with SEO basics built in and code review
            on every change. You own the domain, hosting and code.
          </p>
          <p>
            See our{" "}
            <Link href="/services/web-platforms">web platforms service</Link>,
            our{" "}
            <Link href="/web-development-company-chandigarh">
              Chandigarh web development page
            </Link>
            , or <Link href="/#contact">tell us about your business</Link> for a
            written, scoped quote.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "How much does a website cost for a small business in India?",
      a: "Indicatively, a brochure site costs around ₹25,000–1.5 lakh, a CMS site ₹1–4 lakh, an e-commerce store ₹2–10 lakh and a custom web app ₹5 lakh or more, depending on scope.",
    },
    {
      q: "How much does website hosting cost per year in India?",
      a: "For a small business site, hosting is indicatively ₹3,000–30,000 a year, with a .in or .com domain around ₹800–1,500. E-commerce and web apps usually cost more to host.",
    },
    {
      q: "How much does an e-commerce website cost in India?",
      a: "Indicatively ₹2–10 lakh, depending on catalogue size, custom design, payment and shipping integrations, and whether it is built on a hosted platform or custom.",
    },
    {
      q: "Do I need to pay for website maintenance?",
      a: "Yes, any live site needs security updates, backups and small changes. Budget a yearly amount based on the type of site, and agree what it covers in writing.",
    },
    {
      q: "How long does it take to build a small business website?",
      a: "A brochure site often takes 2–4 weeks, a CMS site 4–8 weeks and an e-commerce store 6–12 weeks. Content being ready on time is the most common delay.",
    },
    {
      q: "Should I own my website domain and hosting?",
      a: "Yes. Register the domain and hosting in your own business account and make sure you receive the source files, so you can change providers later.",
    },
  ],
};
