export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

type AnalyticsParams = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
    return;
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...params });
  }
}
