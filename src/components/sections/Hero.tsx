'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Terminal, Code, Zap, ArrowDown } from 'lucide-react'

export default function Hero() {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  const roles = ['BSIT_STUDENT', 'WEB_DEVELOPER', 'CODE_ENTHUSIAST', 'TECH_INNOVATOR']
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    
    if (currentCharIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText(currentRole.slice(0, currentCharIndex + 1))
        setCurrentCharIndex(currentCharIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setText('')
        setCurrentCharIndex(0)
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [currentCharIndex, currentRoleIndex, roles])

  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glitch Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Terminal Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gray-900 border border-green-500/30 rounded-lg p-4 font-mono"
            >
              <div className="flex items-center gap-2 mb-3 border-b border-green-500/20 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-green-400 text-sm ml-2">terminal@kennely:~$</span>
              </div>
              <div className="text-green-400 text-sm">
                <span className="text-gray-500">$</span> whoami<br/>
                <span className="text-cyan-400">Kennely Ray Bucang</span><br/>
                <span className="text-gray-500">$</span> cat role.txt<br/>
                <span className="text-green-400">{text}<span className="animate-pulse">|</span></span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
                KENNELY RAY
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 font-mono">
                <span className="text-green-400">&lt;</span>
                <span className="text-cyan-400">Full-Stack Developer</span>
                <span className="text-green-400">/&gt;</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              BSIT Student at Saint Louis University, crafting digital experiences 
              with cutting-edge technologies. Passionate about innovation and 
              solving complex problems through code.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { label: 'PROJECTS', value: '4+', icon: Code },
                { label: 'LANGUAGES', value: '8+', icon: Terminal },
                { label: 'COMMITS', value: '100+', icon: Zap }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-green-500/30 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-mono">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 157, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold rounded-lg hover:from-green-400 hover:to-cyan-400 transition-all duration-300"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              >
                VIEW_PROJECTS.exe
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500 hover:text-black transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                CONTACT.sh
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Code Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 border-b border-green-500/20 pb-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-green-400 ml-2">portfolio.js</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="space-y-2"
              >
                <div><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-green-400">=</span> <span className="text-yellow-400">{`{`}</span></div>
                <div className="ml-4"><span className="text-cyan-400">name</span><span className="text-green-400">:</span> <span className="text-green-300">'Kennely Ray'</span><span className="text-green-400">,</span></div>
                <div className="ml-4"><span className="text-cyan-400">skills</span><span className="text-green-400">:</span> <span className="text-yellow-400">[</span></div>
                <div className="ml-8"><span className="text-green-300">'JavaScript'</span><span className="text-green-400">,</span></div>
                <div className="ml-8"><span className="text-green-300">'React'</span><span className="text-green-400">,</span></div>
                <div className="ml-8"><span className="text-green-300">'Node.js'</span><span className="text-green-400">,</span></div>
                <div className="ml-8"><span className="text-green-300">'Python'</span></div>
                <div className="ml-4"><span className="text-yellow-400">]</span><span className="text-green-400">,</span></div>
                <div className="ml-4"><span className="text-cyan-400">passion</span><span className="text-green-400">:</span> <span className="text-green-300">'Innovation'</span></div>
                <div><span className="text-yellow-400">{`}`}</span></div>
                <div className="mt-4"><span className="text-gray-500">// Ready to build the future</span></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-green-400 cursor-pointer"
            onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 