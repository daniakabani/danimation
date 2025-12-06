'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { featuredArticles } from '@/constants'
import { ArticleCard } from '@/ui/components/BlogCard'
import Link from 'next/link'

export default function EngineeringJournal() {
  const { scrollYProgress } = useScroll()

  // Parallax effect: moves the featured card up slightly as the user scrolls past it
  const y = useTransform(scrollYProgress, [0.3, 0.8], [0, -40])

  return (
    <section id='journal' className='px-6 py-24'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-16 text-center'>
          <h2 className='mb-4 text-5xl sm:text-5xl lg:text-7xl font-bold tracking-tight'>
            Engineering{' '}
            <span className='from-primary bg-gradient-to-r via-cyan-400 to-purple-400 bg-clip-text text-transparent'>
            Journal
          </span>
          </h2>
          <p className='text-muted-foreground mt-2 text-lg italic'>
            Architectural insights, trade-off analysis, and scalable solutions published on Medium.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-4'>
          {featuredArticles.map((article, index) => (
            <div key={index} className='md:col-span-2'>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>

        {/* Link to the full Medium profile */}
        <div className='mt-16 text-center'>
          <Link
            href='https://medium.com/@daniakabani'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-lg font-medium text-white shadow-lg ring-2 ring-purple-400/50 transition-all duration-300 hover:bg-purple-400 hover:text-black hover:ring-white'
          >
            View All Articles on Medium.com &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
