'use client'

import { motion } from 'framer-motion'
import { featuredArticles } from '@/constants'
import Link from 'next/link'

// Article Card Component for smaller/standard articles
interface ArticleCardProps {
  article: (typeof featuredArticles)[0]
  isFeatured?: boolean
}

export function ArticleCard({ article, isFeatured = false }: ArticleCardProps) {
  const baseClasses = 'relative h-full p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 backdrop-blur-md cursor-pointer group hover:border-purple-400/50'
  const featuredClasses = 'md:col-span-2 row-span-2 flex flex-col justify-between bg-purple-500/5 hover:shadow-purple-500/30'
  const standardClasses = 'bg-cyan-500/5 hover:shadow-cyan-500/30'

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className={`${baseClasses} ${isFeatured ? featuredClasses : standardClasses}`}
    >
      <Link href={article.link} target='_blank' rel='noopener noreferrer' className='focus:outline-none'>
        <div className='space-y-4'>
          <p className='text-sm text-gray-400 font-mono flex justify-between'>
            <span>{article.date}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${isFeatured ? 'bg-purple-600/50 text-white' : 'bg-cyan-600/50 text-white'}`}>
              {article.readTime}
            </span>
          </p>

          <h3 className='text-2xl font-extrabold leading-snug group-hover:text-cyan-300 transition-colors'>
            {article.title}
          </h3>

          <p className='text-gray-300 mt-2'>{article.summary}</p>
        </div>

        {/* Call to action element */}
        <div className='mt-6 text-sm font-semibold flex items-center text-cyan-400 group-hover:text-purple-400 transition-colors'>
          Read the Full Article &rarr;
        </div>
      </Link>
    </motion.div>
  )
}
