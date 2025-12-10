'use client'

import { useState, useEffect } from 'react'
import { Check, Cookie } from 'lucide-react'

const CONSENT_KEY = 'user_cookie_consent'

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  // 1. Check for prior consent on mount
  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent !== 'granted') {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  // 2. Grant consent and hide the banner
  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'granted')
    setShowBanner(false)

    if (typeof window !== 'undefined') {
      const event = new Event('ga_consent_granted')
      window.dispatchEvent(event)
    }
  }

  if (!showBanner) return null

  return (
    <div className='fixed right-0 bottom-0 left-0 z-50 p-4'>
      <div className='container mx-auto max-w-lg rounded-xl border border-white/10 bg-black/80 p-5 shadow-2xl backdrop-blur-md'>
        <div className='flex items-center gap-4'>
          <Cookie className='h-6 w-6 text-cyan-400' />
          <p className='text-sm text-gray-300'>
            This site uses cookies (Google Analytics) to improve user experience and analyze
            traffic. By accepting, you consent to their use.
          </p>
        </div>
        <div className='mt-4 flex justify-end'>
          <button
            onClick={handleAccept}
            className='inline-flex items-center gap-1 rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-cyan-400'
          >
            <Check className='h-4 w-4' />
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
