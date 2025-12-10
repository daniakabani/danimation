'use client'

import { motion, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

interface Props {
  title: string
  description: string
  problem: string
  solution: string
  tags: string[]
  metrics: string[]
  image: string
  index: number
}

export function ProjectShowcaseCard({
  title,
  description,
  problem,
  solution,
  tags,
  metrics,
  image,
  index,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  // Motion values
  const x = useSpring(0, { stiffness: 120, damping: 18 })
  const y = useSpring(0, { stiffness: 120, damping: 18 })

  // Subtle tilt
  const rotateX = useTransform(y, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(x, [-0.5, 0.5], ['-5deg', '5deg'])

  // Spotlight movement
  const spotlightX = useTransform(x, [-0.5, 0.5], ['-20%', '20%'])
  const spotlightY = useTransform(y, [-0.5, 0.5], ['-20%', '20%'])
  const spotlightOpacity = useTransform([x, y], ([xv, yv]: number[]) => {
    return Math.min(0.5, (Math.abs(xv) + Math.abs(yv)) * 0.8)
  })

  const variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 110,
        damping: 16,
        delay: index * 0.12,
      },
    },
  }

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    const nx = (e.clientX - rect.left - rect.width / 2) / rect.width
    const ny = (e.clientY - rect.top - rect.height / 2) / rect.height

    x.set(nx)
    y.set(ny)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.4 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className='group relative h-full row-span-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 sm:p-10'
    >
      {/* MOVING spotlight */}
      <motion.div
        style={{
          x: spotlightX,
          y: spotlightY,
          opacity: spotlightOpacity,
        }}
        className='pointer-events-none absolute inset-0 z-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-purple-500/15 to-transparent blur-xl'
      />

      {/* Blueprint grid on hover */}
      <div className='pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20'>
        <div className='h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:20px_20px]' />
      </div>

      <div className='relative z-10 flex flex-col h-full'>
        {/* Logo */}
        <div className='sm:flex-direction-column mb-6 flex items-center gap-4'>
          <Image src={image} alt={title} width={50} height={50} className='h-12 w-12 opacity-90' />
          <h3 className='text-3xl font-extrabold text-white'>{title}</h3>
        </div>

        <p className='mb-6 text-gray-300'>{description}</p>

        {/* Problem */}
        <div className='mb-6'>
          <div className='text-sm font-semibold tracking-wider text-red-300 uppercase'>Problem</div>
          <p className='mt-1 leading-relaxed text-gray-400'>{problem}</p>
        </div>

        {/* Solution */}
        <div className='mb-8 grow'>
          <div className='text-sm font-semibold tracking-wider text-green-300 uppercase'>
            Solution
          </div>
          <p className='mt-1 leading-relaxed text-gray-300'>{solution}</p>
        </div>

        {/* Metrics with subtle pop animation */}
        <motion.div
          className='mb-8 grid grid-cols-2 gap-3'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.2 }}
        >
          {metrics.map(metric => (
            <motion.div
              key={metric}
              whileHover={{ scale: 1.05 }}
              className='rounded-xl bg-white/10 p-4 text-center text-sm text-gray-200'
            >
              {metric}
            </motion.div>
          ))}
        </motion.div>

        {/* Tags */}
        <div className='flex flex-wrap gap-3'>
          {tags.map(tag => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1 }}
              className='rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300'
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
