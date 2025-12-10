'use client'

import { motion } from 'framer-motion'
import { TechPill } from '@/ui/components/TechPill'
import { techStack } from '@/constants'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 14,
    },
  },
}

export function TechStack() {
  return (
    <section
      id='stack'
      className='bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent py-6 sm:py-16 lg:py-24 px-6'
    >
      <div className='mx-auto max-w-6xl'>
        <div className='mb-16 text-center'>
          <h2 className='bg-gradient-to-r from-cyan-400/90 to-purple-500/90 bg-clip-text text-5xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-transparent'>
            The Intentional Stack
          </h2>
          <p className='text-muted-foreground text-lg italic mt-2'>
            My toolkit isn&#39;t a list; it&#39;s a decisive selection based on 8 years of architectural trade-offs.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          className='grid gap-12 md:grid-cols-2'
        >
          {techStack.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className='space-y-6'>
              <div className='border-b border-cyan-400/20 pb-2'>
                <h3 className='text-3xl font-bold text-white mb-1'>{category.name}</h3>
                <p className='text-sm text-gray-400 italic'>{category.attitude}</p>
              </div>

              <div className='flex flex-wrap gap-3'>
                {category.techs.map((tech) => (
                  <TechPill key={tech} name={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
