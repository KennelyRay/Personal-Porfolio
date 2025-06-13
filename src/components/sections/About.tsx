'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-20 items-start"
        >
          {/* Left Column - Title */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-light text-black dark:text-white mb-8 leading-tight"
            >
              About Me
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-16 h-px bg-black dark:bg-white mb-8"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-light"
            >
              <p>
                As a Bachelor of Science in Information Technology student at Saint Louis University, 
                I bring fresh perspectives, cutting-edge knowledge, and an unwavering passion for technology.
              </p>
              
              <p>
                Throughout my academic journey, I've developed a solid foundation in programming, 
                web development, database management, and system analysis. My education has equipped 
                me with both theoretical knowledge and practical skills through various academic projects 
                and hands-on learning experiences.
              </p>

              <p>
                I'm particularly drawn to full-stack web development and modern web technologies, 
                where I can combine creativity with technical expertise to create meaningful solutions 
                that make a positive impact.
              </p>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              <div>
                <div className="text-3xl font-light text-black dark:text-white mb-2">2026</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Expected Graduate</div>
              </div>
              <div>
                <div className="text-3xl font-light text-black dark:text-white mb-2">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">Projects Completed</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 