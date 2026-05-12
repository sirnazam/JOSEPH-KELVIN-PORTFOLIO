import { motion } from 'framer-motion'
import { ExternalLink, Code } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'PLANGO',
      description: 'A modern SaaS productivity and task management platform being developed with Flutter and Supabase.',
      tags: ['Flutter', 'Supabase', 'Mobile'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Business Branding Designs',
      description: 'Professional branding, logo designs, company profiles, and promotional graphics for businesses and organizations.',
      tags: ['Branding', 'Design', 'Photoshop'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Video Editing Projects',
      description: 'Creative video editing, motion graphics, and social media content creation using Adobe Premiere Pro and After Effects.',
      tags: ['Video Editing', 'Motion Graphics', 'Content'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      title: 'Future Creative Platform Vision',
      description: 'A future creative technology platform idea focused on empowering creators and businesses with innovative digital tools.',
      tags: ['SaaS', 'Creative Tools', 'Innovation'],
      color: 'from-indigo-500 to-indigo-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-16">Featured Projects</h2>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.2)' }}
                className="glass-effect rounded-2xl overflow-hidden group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden flex items-center justify-center">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-10`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="relative text-4xl">📱</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white font-semibold`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                    >
                      <Code size={16} />
                      GitHub
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
