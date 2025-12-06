import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dani Akabani | Staff Frontend Engineer',
  description: 'Building scalable frontend systems and driving measurable financial impact',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '',
    siteName: 'Zapp Technology — UI Platform Engineering',
    title: 'Dani Akabani | Staff Frontend Engineer',
    description: 'Design Systems • Frontend Platform Architecture • Payments Engineering at Scale',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className={`${inter.className} overflow-x-hidden bg-black text-white`}>{children}</body>
    </html>
  )
}
