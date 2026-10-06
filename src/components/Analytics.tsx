"use client";

import Script from "next/script";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// Inlined at build time; empty = no GA script and no listeners at all.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "";
const VALID_ID = /^G-[A-Z0-9]+$/i.test(GA_ID);
// GTM is always on (hardcoded in components/GoogleTagManager.tsx), so click tracking always runs.
const TRACKING_ON = true;

/** Which lead action a clicked link is, if any. */
function leadEvent(el: Element): string | undefined {
  const link = el.closest<HTMLElement>("a[href], [data-track]");
  if (!link) return undefined;
  const href = link.getAttribute("href") ?? "";
  if (link.dataset.track === "calendly" || href.includes("calendly.com"))
    return "calendly_click";
  if (href.startsWith("tel:")) return "phone_click";
  if (href.includes("wa.me")) return "whatsapp_click";
  return undefined;
}

/** GA4 (gtag.js) plus click tracking for phone, WhatsApp and Calendly links. */
export default function Analytics() {
  useEffect(() => {
    if (!TRACKING_ON) return;
    // one delegated listener catches every tel:, wa.me and Calendly link, now and later
    const onClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      const name = leadEvent(e.target);
      if (!name) return;
      const link = e.target.closest("a[href], [data-track]");
      trackEvent(name, {
        page_path: window.location.pathname,
        link_url: link?.getAttribute("href") ?? undefined,
      });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!VALID_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config',${JSON.stringify(GA_ID)});`}
      </Script>
    </>
  );
}
