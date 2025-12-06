'use client'

import { motion } from 'framer-motion'

import { projects } from '@/constants'
import ProjectShowcaseCard from '@/modules/ProjectCard'

export default function WorkSection() {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section id='work' className='section py-6 sm:py-16 lg:py-24 px-6 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent'>
      <div className='mx-auto mb-20 max-w-6xl text-center'>
        <h2 className='bg-gradient-to-r from-cyan-400/90 to-purple-500/90 bg-clip-text text-5xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-transparent'>
          Selected Projects
        </h2>

        <p className='subtext mx-auto mt-4 max-w-2xl text-lg text-gray-400'>
          Systems built with intention, ownership, and measurable business impact.
        </p>
      </div>

      <motion.div
        className='mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2'
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <ProjectShowcaseCard key={project.title} {...project} index={index} />
        ))}
      </motion.div>
    </section>
  )
}
