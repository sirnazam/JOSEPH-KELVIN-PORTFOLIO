import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-12">Resume</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Resume Preview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 h-full flex flex-col"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Professional Summary</h3>

              <div className="space-y-4 flex-1">
                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">Frontend Developer</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Experienced in building modern, responsive web applications using HTML, CSS, JavaScript, and React. Focused on creating intuitive user experiences and clean, maintainable code.
                  </p>
                </div>

                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">Graphic Designer & Branding Specialist</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Proficient in Adobe Creative Suite (Photoshop, Premiere Pro, After Effects) with expertise in logo design, brand identity, and visual content creation.
                  </p>
                </div>

                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">Digital Creator</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Creating engaging digital content, from video production to social media graphics, combining creativity with modern design principles.
                  </p>
                </div>

                <div>
                  <h4 className="text-purple-400 font-semibold mb-2">Current Focus</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Learning backend development, exploring AI/ML fundamentals, and diving into 3D animation as areas for professional growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Download CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-2xl p-8 text-center flex flex-col items-center justify-center h-48 mb-6 group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                />
                <div className="relative text-6xl mb-4">📄</div>
                <p className="text-gray-300 font-semibold">CV Document</p>
              </motion.div>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-4 gradient-button text-white rounded-xl font-semibold flex items-center justify-center gap-3 group mb-4"
              >
                <Download size={20} />
                Download CV
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="group-hover:opacity-100"
                >
                  →
                </motion.span>
              </motion.a>

              <div className="glass-effect rounded-xl p-4 text-center">
                <p className="text-sm text-gray-400">
                  For detailed information about my experience, education, and certifications, please download my CV.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
