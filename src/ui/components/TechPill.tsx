'use client'

import { motion, useSpring, useTransform } from 'framer-motion'
import React from 'react'

interface TechPillProps {
  name: string
}

export function TechPill({ name }: TechPillProps) {
  const x = useSpring(0, { stiffness: 140, damping: 16 })
  const y = useSpring(0, { stiffness: 140, damping: 16 })

  // 3D Tilt Transformation
  const rotateX = useTransform(y, [-0.5, 0.5], ['5deg', '-5deg'])
  const rotateY = useTransform(x, [-0.5, 0.5], ['-5deg', '5deg'])

  // Spotlight Effect Position Transformation (subtle movement)
  const spotlightX = useTransform(x, [-0.5, 0.5], ['-10%', '10%'])
  const spotlightY = useTransform(y, [-0.5, 0.5], ['-10%', '10%'])

  // Calculate spotlight opacity based on mouse distance from center
  const spotlightOpacity = useTransform([x, y], ([vx, vy]: number[]) =>
    Math.min(1, (Math.abs(vx) + Math.abs(vy)) * 0.8)
  )

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const rect = currentTarget.getBoundingClientRect()
    // Normalized x and y coordinates (-0.5 to 0.5)
    const nx = (clientX - rect.left - rect.width / 2) / rect.width
    const ny = (clientY - rect.top - rect.height / 2) / rect.height
    x.set(nx)
    y.set(ny)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d', // Important for 3D effect
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 150, damping: 12 }}
      className='group relative inline-block overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50'
    >
      {/* Spotlight Effect - positioned absolutely inside the pill */}
      <motion.div
        style={{
          x: spotlightX,
          y: spotlightY,
          opacity: spotlightOpacity,
          scale: 1.6,
        }}
        className='pointer-events-none absolute -inset-8 z-0 rounded-full bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-transparent blur-xl transition-opacity duration-200'
      />

      {/* Text Content - positioned above the spotlight */}
      <span className='relative z-10'>{name}</span>
    </motion.div>
  )
}
