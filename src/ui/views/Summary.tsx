'use client'

import { motion } from 'framer-motion'
import { FEATURES } from '@/constants'
import { FeatureCard } from '@/ui/modules'

export function SummarySection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id='summary' className='section py-6 sm:py-16 lg:py-24 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent'>
      <div className='mx-auto mb-20 max-w-6xl text-center'>
        {/* Title Refinement: Applying the gradient text effect for 'pop' */}
        <h2 className='mb-4 text-5xl sm:text-5xl lg:text-7xl font-bold tracking-tight'>
          Systems I{' '}
          <span className='from-primary bg-gradient-to-r via-cyan-400 to-purple-400 bg-clip-text text-transparent'>
            Architect
          </span>
        </h2>

        {/* Subtitle Refinement: Using text-muted-foreground for theme compatibility and clarity */}
        <p className='subtext text-muted-foreground text-xl'>
          Engineering platforms optimized for adoption, reliability, and revenue outcomes.
        </p>
      </div>

      <motion.div
        className='mx-auto grid max-w-6xl items-stretch gap-10 md:grid-cols-3'
        variants={containerVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
      >
        {FEATURES.map((feature, index) => (
          <motion.div key={feature.title} custom={index} variants={itemVariants} className='h-full'>
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

