'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Globe, Zap, Brain, Terminal } from 'lucide-react'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      icon: Code,
      title: "FRONTEND_DEVELOPMENT",
      description: "Crafting immersive user interfaces with modern frameworks",
      skills: [
        { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-orange-500' },
        { name: 'React', level: 80, color: 'from-blue-400 to-cyan-500' },
        { name: 'HTML/CSS', level: 90, color: 'from-green-400 to-emerald-500' },
        { name: 'TypeScript', level: 50, color: 'from-blue-500 to-indigo-600' },
      ]
    },
    {
      icon: Database,
      title: "BACKEND_SYSTEMS",
      description: "Building robust server architectures and databases",
      skills: [
        { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-600' },
        { name: 'Python', level: 60, color: 'from-blue-400 to-blue-600' },
        { name: 'MySQL', level: 70, color: 'from-orange-400 to-red-500' },
        { name: 'Git', level: 60, color: 'from-gray-400 to-gray-600' },
      ]
    },
    {
      icon: Brain,
      title: "CORE_ABILITIES",
      description: "Essential skills for effective development",
      skills: [
        { name: 'Problem Solving', level: 85, color: 'from-purple-400 to-pink-500' },
        { name: 'Critical Thinking', level: 80, color: 'from-cyan-400 to-blue-500' },
        { name: 'Team Collaboration', level: 75, color: 'from-green-400 to-teal-500' },
        { name: 'Adaptability', level: 90, color: 'from-yellow-400 to-orange-500' },
      ]
    }
  ]

  const techStack = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'Language' },
    { name: 'MySQL', category: 'Database' },
    { name: 'Git', category: 'Tools' },
    { name: 'VS Code', category: 'IDE' },
    { name: 'Figma', category: 'Design' },
  ]

  return (
    <section id="expertise" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-cyan-900/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 255, 157, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <Terminal className="w-8 h-8 text-green-400" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SKILL_MATRIX.exe
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto font-mono"
          >
            <span className="text-green-400">//</span> Analyzing technical capabilities and proficiency levels...
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.2 }}
              className="bg-gray-900/50 backdrop-blur border border-green-500/30 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-lg">
                  <category.icon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">{category.title}</h3>
                  <p className="text-sm text-gray-400">{category.description}</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + categoryIndex * 0.2 + skillIndex * 0.1 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-green-400 font-mono text-sm">{skill.name}</span>
                      <span className="text-cyan-400 font-mono text-xs">{skill.level}%</span>
                    </div>
                    
                    {/* Skill Bar */}
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1.5, 
                          delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${skill.color} relative`}
                      >
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} blur-sm opacity-50`} />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gray-900 border border-green-500/30 rounded-lg p-6 font-mono"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-4 border-b border-green-500/20 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-green-400 ml-2">tech-stack@portfolio:~$</span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-2 text-sm">
            <div className="text-gray-500">$ cat technologies.json</div>
            <div className="text-green-400">{`{`}</div>
            <div className="ml-4 text-cyan-400">"current_stack": [</div>
            
            <div className="ml-8 grid grid-cols-2 md:grid-cols-4 gap-2">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                  className="group"
                >
                  <div className="text-green-300 hover:text-green-200 transition-colors duration-200 cursor-default">
                    "{tech.name}"
                    <span className="text-gray-500 text-xs ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      {tech.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="ml-4 text-cyan-400">]</div>
            <div className="text-green-400">{`}`}</div>
            <div className="mt-4 text-gray-500">// Continuously expanding arsenal...</div>
          </div>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-mono text-sm">STATUS: READY_FOR_DEPLOYMENT</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 