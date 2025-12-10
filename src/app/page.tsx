'use client'

import { useEffect, useRef } from 'react'
import {
  Hero,
  WorkSection,
  ImpactMetrics,
  TechStack,
  CollaborationGateway,
  SummarySection,
  EngineeringJournal,
} from '@/ui/views'
import { Navigation, ArchitecturalCoda } from '@/ui/modules'

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
      <Hero />
      <SummarySection />
      <WorkSection />
      <ImpactMetrics />
      <TechStack />
      <EngineeringJournal />
      <CollaborationGateway />
      <ArchitecturalCoda />
    </div>
  )
}
