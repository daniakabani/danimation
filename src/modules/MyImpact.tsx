'use client'

import { motion } from 'framer-motion'
import { metrics } from '@/constants'
import { MetricCard } from '@/modules/MetricCard'

export default function ImpactMetrics() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 120,
        damping: 16,
      },
    },
  }

  return (
    <section
      id='impact'
      className='bg-gradient-to-b from-transparent via-purple-500/5 to-transparent px-6 py-6 sm:py-16 lg:py-24 overflow-hidden'
    >
      <div className='mx-auto max-w-6xl'>
        <div className='mb-16 text-center'>
          <h2 className='bg-gradient-to-r from-cyan-400/90 to-purple-500/90 bg-clip-text text-5xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-transparent'>
            Measurable Impact
          </h2>
          <p className='text-muted-foreground text-lg'>Real results from real engineering</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
          className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 overflow-hidden'
        >
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
            >
              <MetricCard {...metric}  />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
