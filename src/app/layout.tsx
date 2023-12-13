import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bishopric Agenda',
  description: 'An app to organize the brishopic tasks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className='max-w-2xl mx-auto my-16'>{children}</main>
        
      </body>
    </html>
  )
}
