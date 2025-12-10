'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

// Key for local storage (Keep it consistent)
const CONSENT_KEY = 'user_cookie_consent'

export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  // State to control if the GA script and config should be loaded/run
  const [hasConsent, setHasConsent] = useState(false)

  useEffect(() => {
    // 1. Check for existing consent on initial load
    const currentConsent = localStorage.getItem(CONSENT_KEY)
    if (currentConsent === 'granted') {
      setHasConsent(true)
    }

    // 2. Set up listener for the custom consent event
    const handleConsentGranted = () => {
      setHasConsent(true)
    }

    // Attach listener to the window object
    window.addEventListener('ga_consent_granted', handleConsentGranted)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('ga_consent_granted', handleConsentGranted)
    }
  }, [])

  // Do not render the script or config if consent has not been granted
  if (!hasConsent) {
    return null
  }

  // --- Only loads and runs if hasConsent is true ---
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id='google-analytics-config'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Initial configuration call with consent status
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
