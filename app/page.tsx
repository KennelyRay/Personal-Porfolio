'use client'


import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
} 