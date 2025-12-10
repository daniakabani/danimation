export function trackGAEvent(action: string, category: string, label: string, value?: number) {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  } else {
    // Console log for local debugging
    console.log(`GA Event Fired: ${action} | ${category} | ${label}`)
  }
}
