type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", name: string, params?: GtagParams) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Sends a lead/click event to GA4 (gtag, when NEXT_PUBLIC_GA_ID is set) and to the GTM
 * dataLayer as `{ event: name, ...params }`, so GTM Custom Event triggers can use it.
 */
export function trackEvent(name: string, params: GtagParams = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") window.gtag("event", name, params);
  // gtag() also writes into dataLayer, but as an arguments object GTM can't trigger on.
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}
