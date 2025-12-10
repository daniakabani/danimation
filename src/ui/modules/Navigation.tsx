'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn, trackGAEvent } from '@/helpers'
import { Button } from '@/ui/components'
import { Menu, X, Coffee, FileText, ArrowRight, Globe2 } from 'lucide-react'
import { navItems } from '@/constants'

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    const isScrolled = latest > 20
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled)
    }
  })

  function handleResumeDownload() {
    trackGAEvent('download', 'conversion', 'resume_download_nav')
  }

  function handleCoffeeBook() {
    trackGAEvent('click', 'conversion', 'book_coffee_calendly_nav')
  }

  // Prevent scrolling when mobile menu is open (kept for UX)
  React.useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Function to close menu and handle focus/scroll
  const closeMenu = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent default link behavior first
    const targetId = e.currentTarget.getAttribute('href')
    setMobileMenuOpen(false)
    // Smooth scroll to the section
    if (targetId && targetId.startsWith('#')) {
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        // FIX 1: Removed horizontal padding from the outermost fixed element
        className={cn(
          'fixed top-0 right-0 left-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out',
          scrolled ? 'py-4' : 'py-6'
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={cn(
            'relative flex w-full items-center justify-between transition-all duration-300 ease-in-out',
            scrolled
              ? 'max-w-6xl rounded-full border border-cyan-400/30 bg-black/80 px-6 py-3 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl'
              : 'mx-auto max-w-6xl bg-transparent px-6 py-2'
          )}
        >
          {/* Logo Area */}
          <Link
            href='/'
            className='group relative z-10 flex items-center gap-2 text-xl font-extrabold tracking-tighter text-white'
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className='relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 p-0.5 transition-transform duration-300 group-hover:scale-105'>
              <Globe2 className='h-4 w-4 text-white' />
            </div>
            <span className='hidden sm:inline-block'>
              Danimation
              <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                .
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 md:flex'>
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className='relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white'
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className='relative z-10'>{item.name}</span>
                {hoveredIndex === index && (
                  <motion.div
                    className='absolute inset-0 z-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 shadow-inner shadow-cyan-500/10'
                    layoutId='navbar-hover'
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className='z-10 flex items-center gap-2'>
            <Button
              variant='ghost'
              size='icon'
              className='hidden text-gray-400 hover:text-cyan-400 sm:flex'
              title='Download Resume'
              asChild
              onClick={handleResumeDownload}
            >
              <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
                <FileText className='h-5 w-5' />
                <span className='sr-only'>Resume</span>
              </a>
            </Button>

            <Button
              size='sm'
              className='hidden gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-xl shadow-cyan-500/30 transition-all hover:shadow-purple-500/40 md:flex'
              asChild
              onClick={handleCoffeeBook}
            >
              <a href='https://calendly.com/' target='_blank' rel='noopener noreferrer'>
                <Coffee className='h-4 w-4' />
                <span>Book a Call</span>
              </a>
            </Button>

            {/* Mobile Toggle */}
            <Button
              variant='ghost'
              size='icon'
              className='text-gray-300 hover:text-white md:hidden'
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className='h-6 w-6' />
              <span className='sr-only'>Open menu</span>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay (Refined) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className='fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-2xl md:hidden'
          >
            <div className='flex items-center justify-between border-b border-white/10 px-6 py-6'>
              <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-xl font-bold tracking-tighter text-transparent'>
                Navigation
              </span>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setMobileMenuOpen(false)}
                className='text-white hover:text-cyan-400'
              >
                <X className='h-7 w-7' />
              </Button>
            </div>

            <div className='flex flex-1 flex-col justify-center px-8 pb-20'>
              <nav className='flex flex-col gap-8'>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <Link
                      href={item.href}
                      // Increased size and applied gradient text for impact
                      className='flex items-center gap-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent transition-colors hover:from-cyan-300 hover:to-purple-400'
                      onClick={closeMenu}
                    >
                      <ArrowRight className='h-7 w-7 opacity-70' />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.15 + 0.1 }}
                className='mt-16 flex flex-col gap-4'
              >
                <Button
                  size='lg'
                  className='w-full gap-2 bg-gradient-to-r from-cyan-500 to-purple-600'
                  asChild
                >
                  <a href='https://calendly.com/' target='_blank' rel='noopener noreferrer'>
                    <Coffee className='h-5 w-5' />
                    Grab a Coffee
                  </a>
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className='w-full gap-2 border-white/20 bg-white/5 text-white hover:border-cyan-400 hover:bg-white/10'
                  asChild
                >
                  <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
                    <FileText className='h-5 w-5' />
                    View Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
