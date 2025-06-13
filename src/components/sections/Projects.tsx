'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Folder, Star, Zap } from 'lucide-react'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'AgLugan_Webapp',
      category: 'Web_Development',
      description: 'Advanced ride-hailing system for SLU Bakakeng jeepney services with real-time tracking and comprehensive booking management.',
      technologies: ['JavaScript', 'Node.js', 'MySQL', 'API'],
      github: 'https://github.com/rabinoo/AgLugan',
      status: 'DEPLOYED',
      featured: true,
      glowColor: 'green'
    },
    {
      title: 'Navibot_AI',
      category: 'AI_ML',
      description: 'Intelligent chatbot powered by BART model for enrollment FAQ automation with natural language processing capabilities.',
      technologies: ['Python', 'NLP', 'Machine_Learning', 'BART'],
      github: 'https://github.com/JohnAzurin/Tektitans-Navibot/tree/MODEL_Bart',
      status: 'ACTIVE',
      featured: false,
      glowColor: 'cyan'
    },
    {
      title: '0day_SDG_Platform',
      category: 'Web_Development',
      description: 'Poverty awareness web application addressing Sustainable Development Goals with interactive resources and data visualization.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Data_Viz'],
      github: 'https://github.com/rabinoo/0day',
      status: 'COMPLETED',
      featured: false,
      glowColor: 'blue'
    },
    {
      title: 'Anime_API_Hub',
      category: 'Web_Development',
      description: 'Dynamic multimedia application integrating multiple anime/manga APIs for comprehensive entertainment information system.',
      technologies: ['JavaScript', 'API_Integration', 'CSS', 'JSON'],
      github: 'https://github.com/JoefreyToriano/it312-9474-mt-teamburnersly/tree/main/activity_2_dom',
      status: 'COMPLETED',
      featured: false,
      glowColor: 'purple'
    }
  ]

  const categories = [
    { name: 'All_Projects', count: 4, filter: 'all' },
    { name: 'Web_Development', count: 3, filter: 'Web_Development' },
    { name: 'AI_ML', count: 1, filter: 'AI_ML' }
  ]

  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const featuredProject = projects.find(p => p.featured)

  return (
    <section id="work" className="py-24 bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 157, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 157, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Animated Scanlines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
          animate={{ y: [0, typeof window !== 'undefined' ? window.innerHeight : 800] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
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
            <Folder className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 bg-clip-text text-transparent">
              PROJECT_ARCHIVE.db
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto font-mono"
          >
            <span className="text-cyan-400">//</span> Showcase of academic projects and collaborative development work
          </motion.p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gray-900/80 backdrop-blur border border-green-500/50 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300 relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="p-8 md:p-12 relative z-10">
                {/* Featured Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full mb-6">
                  <Star className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-mono text-sm">FEATURED_PROJECT</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
                      {featuredProject.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                      {featuredProject.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 border border-green-500/30 text-green-400 rounded font-mono text-sm hover:border-green-500/50 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-mono text-sm">STATUS: {featuredProject.status}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-4">
                    <motion.a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 157, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold rounded-lg hover:from-green-400 hover:to-cyan-400 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                      VIEW_SOURCE.git
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gray-900 border border-cyan-500/30 rounded-lg p-6 font-mono mb-12"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-cyan-500/20 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-cyan-400 ml-2">filter@projects:~$</span>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <span className="text-gray-500">$ ls --category</span>
            {categories.map((category) => (
              <motion.button
                key={category.filter}
                onClick={() => setActiveFilter(category.filter)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 border rounded transition-all duration-300 ${
                  activeFilter === category.filter
                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-400'
                    : 'border-gray-600 text-gray-400 hover:border-gray-500'
                }`}
              >
                {category.name} [{category.count.toString().padStart(2, '0')}]
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Zap className={`w-5 h-5 text-${project.glowColor}-400`} />
                    <h3 className="text-xl font-bold text-white font-mono">{project.title}</h3>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                
                <span className="text-xs text-cyan-400 font-mono uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Status and Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 bg-${project.glowColor}-400 rounded-full animate-pulse`}></div>
                    <span className={`text-${project.glowColor}-400 font-mono text-xs`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-cyan-400 transition-colors duration-200 font-mono text-sm"
                  >
                    view_code() →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Terminal Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-400 font-mono text-sm">PROJECTS_LOADED: {filteredProjects.length}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 