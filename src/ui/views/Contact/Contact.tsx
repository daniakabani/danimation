'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { contactLinks } from './Labels'

// Variant for staggered link reveal
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 14 },
  },
}

// --- Main Contact Component ---
export function CollaborationGateway() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Fades in the whole section as it scrolls into view
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const blur = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [5, 0, 0, 5])
  const filter = useTransform(blur, v => `blur(${v}px)`)

  return (
    <motion.section id='contact' ref={ref} style={{ opacity, filter }} className='px-6 py-6 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-6xl'>
        <div className='mb-16 text-center'>
          <h2 className='bg-gradient-to-r from-cyan-400/90 to-purple-500/90 bg-clip-text text-5xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-transparent'>
            A Staff Conversation
          </h2>
          <p className='text-muted-foreground mt-2 text-lg'>
            Ready for high-impact projects. Let’s talk architecture, scaling, or roles.
          </p>
        </div>

        <div className='grid gap-12 lg:grid-cols-2'>
          {/* 1. Direct Links (Grid Layout) */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2'
          >
            {contactLinks.map(link => (
              <motion.a
                key={link.name}
                variants={itemVariants}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='glass group h-full rounded-2xl border border-white/10 p-6 transition-all hover:border-purple-400/50 hover:bg-white/5'
              >
                <div className='flex items-center gap-4'>
                  <div className='text-purple-400 transition-colors group-hover:text-cyan-400'>
                    {link.icon}
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold transition-colors group-hover:text-white'>
                      {link.name}
                    </h3>
                    <p className='mt-1 text-sm text-gray-400'>{link.description}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
