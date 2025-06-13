'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Linkedin, MessageCircle, Send, Shield, Wifi, Database } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      text: "Kennely consistently demonstrates exceptional problem-solving abilities and technical aptitude in our collaborative projects. His dedication to learning and applying new technologies is impressive.",
      author: "Academic_Collaborator",
      role: "Project Partner @ SLU",
      status: "VERIFIED",
      glowColor: "green"
    },
    {
      text: "Working with Kennely on the AgLugan project was fantastic! His attention to detail and commitment to delivering quality code made our collaboration successful.",
      author: "Team_Member",
      role: "Development Partner",
      status: "ACTIVE",
      glowColor: "cyan"
    },
    {
      text: "Kennely's approach to learning and implementing new technologies is remarkable. He brings fresh perspectives and innovative solutions to every project.",
      author: "Project_Lead",
      role: "Academic Mentor",
      status: "ONLINE",
      glowColor: "purple"
    }
  ]

  const contactMethods = [
    {
      icon: Mail,
      protocol: 'SMTP',
      address: 'krbucang@gmail.com',
      type: 'PRIMARY',
      href: 'mailto:krbucang@gmail.com',
      glowColor: 'green'
    },
    {
      icon: Github,
      protocol: 'GIT',
      address: 'github.com/KennelyRay',
      type: 'REPOSITORY',
      href: 'https://github.com/KennelyRay',
      glowColor: 'cyan'
    },
    {
      icon: Linkedin,
      protocol: 'HTTPS',
      address: 'linkedin.com/in/kennely',
      type: 'PROFESSIONAL',
      href: '#',
      glowColor: 'blue'
    },
    {
      icon: MessageCircle,
      protocol: 'DIRECT',
      address: 'contact.form',
      type: 'INSTANT',
      href: 'mailto:krbucang@gmail.com',
      glowColor: 'purple'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Data Stream Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400/20 font-mono text-xs"
            style={{
              left: `${10 + i * 15}%`,
              top: '0%',
            }}
            animate={{
              y: [0, typeof window !== 'undefined' ? window.innerHeight : 800],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random(),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          >
            {Array.from({length: 20}, () => Math.random() > 0.5 ? '1' : '0').join('')}
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
            <Send className="w-8 h-8 text-green-400" />
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              CONTACT_PROTOCOL.init()
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto font-mono"
          >
            <span className="text-green-400">//</span> Establishing secure communication channels...
          </motion.p>
        </motion.div>

        {/* Network Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gray-900 border border-green-500/30 rounded-lg p-6 font-mono mb-16"
        >
          <div className="flex items-center gap-2 mb-4 border-b border-green-500/20 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-green-400 ml-2">network@contact:~$</span>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            {[
              { icon: Wifi, label: 'CONNECTION', value: 'SECURE', color: 'green' },
              { icon: Shield, label: 'ENCRYPTION', value: 'AES-256', color: 'cyan' },
              { icon: Database, label: 'LATENCY', value: '<50ms', color: 'blue' },
              { icon: Send, label: 'STATUS', value: 'ONLINE', color: 'purple' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                className="flex items-center gap-2 text-gray-400"
              >
                <stat.icon className={`w-4 h-4 text-${stat.color}-400`} />
                <span>{stat.label}:</span>
                <span className={`text-${stat.color}-400`}>{stat.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className={`bg-gray-900/80 backdrop-blur border border-${testimonial.glowColor}-500/30 rounded-lg p-6 hover:border-${testimonial.glowColor}-500/50 transition-all duration-300 group relative`}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${testimonial.glowColor}-500/5 via-transparent to-${testimonial.glowColor}-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg`} />
                
                <div className="relative z-10">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`inline-flex items-center gap-2 px-2 py-1 bg-${testimonial.glowColor}-500/20 border border-${testimonial.glowColor}-500/30 rounded text-xs`}>
                      <div className={`w-2 h-2 bg-${testimonial.glowColor}-400 rounded-full animate-pulse`}></div>
                      <span className={`text-${testimonial.glowColor}-400 font-mono`}>{testimonial.status}</span>
                    </div>
                  </div>

                  <blockquote className="text-gray-400 leading-relaxed mb-6 font-light">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="border-t border-gray-800 pt-4">
                    <div className="font-medium text-white mb-1 font-mono">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500 font-mono">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              AVAILABLE_PROTOCOLS
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto font-mono">
              Multiple communication channels active. Select preferred protocol for contact initiation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.protocol}
                href={method.href}
                target={method.href.startsWith('http') ? "_blank" : undefined}
                rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: `0 0 20px rgba(${method.glowColor === 'green' ? '0, 255, 157' : method.glowColor === 'cyan' ? '0, 255, 255' : method.glowColor === 'blue' ? '0, 157, 255' : '157, 0, 255'}, 0.5)` 
                }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gray-900/80 backdrop-blur border border-${method.glowColor}-500/30 rounded-lg p-6 hover:border-${method.glowColor}-500/50 transition-all duration-300 group block`}
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-${method.glowColor}-500/20 border border-${method.glowColor}-500/30 rounded-lg flex items-center justify-center group-hover:bg-${method.glowColor}-500/30 transition-colors duration-300`}>
                    <method.icon className={`w-8 h-8 text-${method.glowColor}-400`} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-white font-mono font-bold">
                      {method.protocol}
                    </div>
                    <div className={`text-${method.glowColor}-400 text-sm font-mono`}>
                      {method.type}
                    </div>
                    <div className="text-gray-400 text-xs font-mono break-all">
                      {method.address}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Primary Contact Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="bg-gray-900 border border-green-500/30 rounded-lg p-8 font-mono text-center"
        >
          <div className="flex items-center gap-2 justify-center mb-6 border-b border-green-500/20 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-green-400 ml-2">primary@contact:~$</span>
          </div>

          <div className="space-y-4">
            <div className="text-gray-500 text-sm">$ ./initiate_contact.sh --priority=high</div>
            <div className="text-green-400 text-xl md:text-2xl font-bold">
              READY_FOR_COLLABORATION
            </div>
            <div className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Available for internship opportunities, project collaborations, and technical discussions.
              Response time: &lt;24 hours
            </div>
            
            <motion.a
              href="mailto:krbucang@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 157, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-bold rounded-lg hover:from-green-400 hover:to-cyan-400 transition-all duration-300 mt-6"
            >
              <Send className="w-5 h-5" />
              EXECUTE_CONTACT.exe
            </motion.a>
          </div>
        </motion.div>

        {/* System Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-mono text-sm">SYSTEM_STATUS: OPERATIONAL</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 