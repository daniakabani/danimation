import { LucideIcon } from 'lucide-react'
import { type MouseEvent, useRef } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Stable motion values
  const x = useSpring(0, { stiffness: 140, damping: 16 })
  const y = useSpring(0, { stiffness: 140, damping: 16 })

  // Card tilt
  const rotateX = useTransform(y, [-0.5, 0.5], ['6deg', '-6deg'])
  const rotateY = useTransform(x, [-0.5, 0.5], ['-6deg', '6deg'])

  // Spotlight transforms
  const spotlightX = useTransform(x, [-0.5, 0.5], ['-25%', '25%'])
  const spotlightY = useTransform(y, [-0.5, 0.5], ['-25%', '25%'])

  // Smooth spotlight opacity falloff
  const spotlightOpacity = useTransform([x, y], ([vx, vy]: number[]) =>
    Math.min(1, (Math.abs(vx) + Math.abs(vy)) * 0.8)
  )

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    // Note: The null check on currentTarget is good practice, but not strictly necessary here
    // since the handler is attached to the motion.div with a ref.
    const rect = currentTarget?.getBoundingClientRect()
    if (!rect) return // Safety check

    // Normalized coordinates (-0.5 to 0.5)
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
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      className='group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 text-center shadow-2xl transition-all duration-300 md:p-10'
    >

      <motion.div
        style={{
          x: spotlightX,
          y: spotlightY,
          opacity: spotlightOpacity,
          scale: 1.8,
        }}
        className='pointer-events-none absolute -inset-10 z-0 rounded-2xl bg-gradient-to-r from-cyan-400/15 via-purple-500/15 to-transparent blur-3xl'
      />

      <div className='relative z-10'>
        <div className='mb-4 flex justify-center'>
          <Icon className='group-hover:text-primary/90 h-8 w-8 text-cyan-400 transition-colors duration-300 md:h-10 md:w-10' />
        </div>

        <h3 className='heading-md text-foreground group-hover:text-primary/90 mb-3 transition-colors duration-300'>
          {title}
        </h3>

        <p className='text-muted-foreground text-lg'>{description}</p>
      </div>
    </motion.div>
  )
}
