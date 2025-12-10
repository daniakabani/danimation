import { motion, useSpring, useTransform } from 'framer-motion'

interface MetricCardProps {
  label: string
  value: string
  subtext: string
}

export function MetricCard({ label, value, subtext }: MetricCardProps) {
  const x = useSpring(0, { stiffness: 140, damping: 16 })
  const y = useSpring(0, { stiffness: 140, damping: 16 })

  const rotateX = useTransform(y, [-0.5, 0.5], ['6deg', '-6deg'])
  const rotateY = useTransform(x, [-0.5, 0.5], ['-6deg', '6deg'])

  const spotlightX = useTransform(x, [-0.5, 0.5], ['-20%', '20%'])
  const spotlightY = useTransform(y, [-0.5, 0.5], ['-20%', '20%'])
  const spotlightOpacity = useTransform([x, y], ([vx, vy]: number[]) =>
    Math.min(1, (Math.abs(vx) + Math.abs(vy)) * 0.6)
  )

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const rect = currentTarget.getBoundingClientRect()
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
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.06 }}
      transition={{ type: 'spring', stiffness: 130, damping: 14 }}
      className='group relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30'
    >
      {/* Spotlight */}
      <motion.div
        style={{
          x: spotlightX,
          y: spotlightY,
          opacity: spotlightOpacity,
          scale: 1.6,
        }}
        className='pointer-events-none absolute -inset-16 z-0 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-transparent blur-3xl'
      />

      <div className='relative z-10 space-y-2 text-center'>
        <div className='text-sm font-medium text-gray-500'>{label}</div>
        <div className='bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-5xl font-extrabold text-transparent'>
          {value}
        </div>
        <div className='text-xs text-gray-400'>{subtext}</div>
      </div>
    </motion.div>
  )
}
