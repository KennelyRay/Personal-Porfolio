'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building, Code, GraduationCap, User } from 'lucide-react'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'BSIT_Student',
      company: 'Saint Louis University',
      period: '2021 - 2026',
      location: 'Baguio City, Philippines',
      type: 'EDUCATION',
      status: 'ACTIVE',
      icon: GraduationCap,
      description: 'Pursuing Bachelor of Science in Information Technology with focus on software development, web technologies, and database management. Engaging in collaborative projects and research in emerging technologies.',
      achievements: [
        'Developed multiple full-stack web applications',
        'Collaborated on AI/ML thesis project (Navibot)',
        'Active contributor to team projects',
        'Strong academic performance in core subjects'
      ],
      technologies: ['JavaScript', 'Python', 'React', 'Node.js', 'MySQL'],
      glowColor: 'green'
    },
    {
      title: 'Project_Collaborator',
      company: 'Academic_Teams',
      period: '2022 - Present',
      location: 'Remote/Campus',
      type: 'COLLABORATION',
      status: 'ONGOING',
      icon: Code,
      description: 'Collaborated on various academic and personal projects including web applications, chatbot development, and API integrations. Focused on learning modern development practices and frameworks.',
      achievements: [
        'Led AgLugan webapp development team',
        'Contributed to 0day SDG awareness platform',
        'Developed anime/manga API integration system',
        'Mentored junior team members'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'API'],
      glowColor: 'cyan'
    },
    {
      title: 'Self_Directed_Learning',
      company: 'Personal_Development',
      period: '2021 - Present',
      location: 'Remote',
      type: 'DEVELOPMENT',
      status: 'CONTINUOUS',
      icon: User,
      description: 'Continuously learning new technologies through online courses, documentation, and hands-on projects. Building portfolio projects to demonstrate skills in full-stack development.',
      achievements: [
        'Mastered modern web development frameworks',
        'Built multiple personal projects',
        'Contributed to open-source initiatives',
        'Stayed current with tech trends and best practices'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Git'],
      glowColor: 'purple'
    }
  ]

  return (
    <section id="experience" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-green-900/10" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/20 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -60],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['console.log()', 'function()', '{ code }', 'return true', 'npm install'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
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
            <Building className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-green-400 bg-clip-text text-transparent">
              EXPERIENCE_LOG.json
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto font-mono"
          >
            <span className="text-purple-400">//</span> Academic journey and collaborative development experiences
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="relative"
            >
              {/* Experience Card */}
              <div className={`bg-gray-900/80 backdrop-blur border border-${exp.glowColor}-500/30 rounded-lg p-8 hover:border-${exp.glowColor}-500/50 transition-all duration-300 group`}>
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${exp.glowColor}-500/5 via-transparent to-${exp.glowColor}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                      <div className={`p-3 bg-${exp.glowColor}-500/20 border border-${exp.glowColor}-500/30 rounded-lg`}>
                        <exp.icon className={`w-6 h-6 text-${exp.glowColor}-400`} />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-mono">
                          {exp.title}
                        </h3>
                        <div className="text-lg text-gray-300 mb-2">
                          @ {exp.company}
                        </div>
                        
                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Status Badges */}
                    <div className="flex flex-col gap-2">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-${exp.glowColor}-500/20 border border-${exp.glowColor}-500/30 rounded-full`}>
                        <div className={`w-2 h-2 bg-${exp.glowColor}-400 rounded-full animate-pulse`}></div>
                        <span className={`text-${exp.glowColor}-400 font-mono text-xs`}>
                          {exp.status}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 font-mono text-center">
                        {exp.type}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-mono text-sm mb-3 flex items-center gap-2">
                      <span className="text-green-400">&gt;</span> Key Achievements:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + index * 0.2 + achIndex * 0.1, duration: 0.5 }}
                          className="flex items-start gap-2 text-gray-400 text-sm"
                        >
                          <span className={`text-${exp.glowColor}-400 mt-1`}>▸</span>
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-mono text-sm mb-3 flex items-center gap-2">
                      <span className="text-cyan-400">$</span> tech_stack --list:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8 + index * 0.2 + techIndex * 0.05, duration: 0.3 }}
                          className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 rounded font-mono text-xs hover:border-gray-600 transition-colors duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 bg-gray-900 border border-green-500/30 rounded-lg p-8 font-mono"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 mb-6 border-b border-green-500/20 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-green-400 ml-2">opportunities@kennely:~$</span>
          </div>

          <div className="text-center space-y-4">
            <div className="text-gray-500 text-sm">$ ./check_availability.sh</div>
            <div className="text-green-400 text-xl md:text-2xl font-bold">
              STATUS: AVAILABLE_FOR_INTERNSHIP
            </div>
            <div className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Seeking opportunities to apply technical skills in professional environment. 
              Ready to contribute to innovative projects while continuing to learn and grow.
            </div>
            
            {/* Contact Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <motion.a
                href="mailto:krbucang@gmail.com"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 157, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold rounded-lg hover:from-green-400 hover:to-cyan-400 transition-all duration-300"
              >
                SEND_EMAIL.sh
              </motion.a>
              
              <div className="flex gap-4 text-sm">
                <a
                  href="https://github.com/KennelyRay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors duration-300 font-mono"
                >
                  github.com/KennelyRay
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-400 font-mono text-sm">EXPERIENCE_ENTRIES: {experiences.length}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 