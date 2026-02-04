/**
 * Analytics utility for consistent event tracking
 * Implements Google Analytics gtag interface with TypeScript safety
 */

// Analytics event categories
export const AnalyticsCategory = {
  WTP_DISCOVERY: 'wtp_discovery',
  HERO_CTA: 'hero_cta',
  NAVIGATION: 'navigation',
  FAQ: 'faq',
  CONVERSION: 'conversion'
} as const;

export type AnalyticsCategoryType = typeof AnalyticsCategory[keyof typeof AnalyticsCategory];

// Analytics event names
export const AnalyticsEvent = {
  CLICK: 'click',
  FORM_SUBMIT: 'form_submit',
  FAQ_EXPAND: 'faq_expand'
} as const;

// Analytics parameters interface
export interface AnalyticsParams {
  event_category: AnalyticsCategoryType;
  event_label: string;
  value?: number;
  [key: string]: unknown;
}

/**
 * Check if analytics is available and track event
 * @param eventName - Name of the event
 * @param params - Event parameters
 * @returns void
 */
export function trackEvent(eventName: string, params: AnalyticsParams): void {
  // Check if we're in browser environment
  if (typeof window === 'undefined') return;

  // Check if gtag is available
  if (!window.gtag) {
    // In development, log to console
    if (process.env.NODE_ENV === 'development') {
      console.log('[Analytics]', eventName, params);
    }
    return;
  }

  // Track event with gtag
  window.gtag('event', eventName, params);
}

/**
 * Track WTP discovery flow events
 * @param entryPoint - Where user entered WTP flow
 * @param path - Which WTP path they took
 */
export function trackWTPDiscovery(entryPoint: 'hero' | 'problem' | 'faq', path: 'partnership' | 'capacity' | 'assessment'): void {
  trackEvent(AnalyticsEvent.CLICK, {
    event_category: AnalyticsCategory.WTP_DISCOVERY,
    event_label: `${entryPoint}_${path}`,
    path,
    entry_point: entryPoint
  });
}

// No need to declare gtag here - already declared in intelligenceagents.tsx

export default {
  trackEvent,
  trackWTPDiscovery,
  AnalyticsCategory,
  AnalyticsEvent
};
