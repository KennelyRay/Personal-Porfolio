'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'home', href: '#home', command: './home.sh' },
    { name: 'expertise', href: '#expertise', command: './skills.exe' },
    { name: 'work', href: '#work', command: './projects.db' },
    { name: 'experience', href: '#experience', command: './exp.log' },
    { name: 'contact', href: '#contact', command: './contact.init()' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 20)
      }
    }

    const handleSectionChange = () => {
      if (typeof window !== 'undefined') {
        const sections = navItems.map(item => item.name)
        const scrollPosition = window.scrollY + 100

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i])
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('scroll', handleSectionChange)
      handleScroll()
      handleSectionChange()

      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('scroll', handleSectionChange)
      }
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-green-500/30' 
          : 'bg-black/50 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#home')
            }}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <Terminal className="w-8 h-8 text-green-400" />
              <motion.div
                className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-0 group-hover:opacity-30"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="font-mono">
              <span className="text-green-400 text-lg md:text-xl font-bold">KENNELY</span>
              <span className="text-cyan-400 text-lg md:text-xl font-bold">_RAY</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center bg-gray-900/50 backdrop-blur border border-green-500/20 rounded-lg px-2 py-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className={`relative px-4 py-2 text-sm font-mono transition-all duration-300 rounded-md ${
                  activeSection === item.name
                    ? 'text-black bg-green-400'
                    : 'text-gray-400 hover:text-green-400 hover:bg-green-500/10'
                }`}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.command}
                
                {/* Active indicator */}
                {activeSection === item.name && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-green-400 rounded-md -z-10"
                    initial={false}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                )}
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-green-400/20 rounded-md opacity-0"
                  whileHover={{ opacity: activeSection === item.name ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Network Status (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">ONLINE</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-green-400 border border-green-500/30 rounded-lg hover:border-green-500/50 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-green-500/30"
          >
            <div className="px-6 py-6 space-y-4">
              {/* Mobile Terminal Header */}
              <div className="flex items-center gap-2 mb-4 border-b border-green-500/20 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-green-400 text-sm font-mono ml-2">mobile@nav:~$</span>
              </div>

              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={`block p-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                    activeSection === item.name
                      ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                      : 'border border-gray-700 text-gray-400 hover:border-green-500/30 hover:text-green-400'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.command}</span>
                    {activeSection === item.name && (
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                </motion.a>
              ))}

              {/* Mobile Status */}
              <div className="flex items-center justify-center gap-2 pt-4 border-t border-green-500/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-mono text-xs">SYSTEM_STATUS: ONLINE</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scanning Line Effect */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
        animate={{ 
          x: ['-100%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "linear",
          delay: 2
        }}
        style={{ width: '50%' }}
      />
    </motion.nav>
  )
} 