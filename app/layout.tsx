import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kennely Ray Bucang - BSIT Student Portfolio',
  description: 'BSIT Student at Saint Louis University showcasing projects, skills, and professional journey in Information Technology',
  keywords: 'BSIT, Information Technology, Web Developer, Student Portfolio, Saint Louis University',
  authors: [{ name: 'Kennely Ray Bucang' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 