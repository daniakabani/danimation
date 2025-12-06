'use client'

import { useEffect, useRef } from 'react'
import HeroSection from '@/modules/Hero'
import WorkSection from '@/modules/MyWork'
import ImpactMetrics from '@/modules/MyImpact'
import TechStack from '@/modules/TechStack'
import { CollaborationGateway } from '@/modules/Contact'
import Navigation from '@/modules/Navigation'
import Summary from '@/modules/Summary'
import EngineeringJournal from '@/modules/MyBlog'
import EngineeringSignature from '@/modules/Footer'

export default function Page() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-animate]')
      elements.forEach(el => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          el.classList.add('animate-fade-in-up')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className='relative min-h-screen bg-black'>
      <Navigation />
      <HeroSection />
      <Summary />
      <WorkSection />
      <ImpactMetrics />
      <TechStack />
      <EngineeringJournal />
      <CollaborationGateway />
      <EngineeringSignature />
    </div>
  )
}
