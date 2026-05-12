import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function ElevatorPitch() {
  return (
    <section id="pitch" className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-12">Elevator Pitch</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Pitch Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed mb-6">
                I help <span className="gradient-text">businesses, brands, and individuals</span> build modern digital experiences through design, branding, and web development.
              </p>

              <p className="text-gray-400 text-lg leading-relaxed">
                Whether you need a stunning website, professional branding solutions, or a modern web application, I combine creativity and technical expertise to deliver exceptional results that exceed expectations.
              </p>
            </motion.div>

            {/* Video Placeholder */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="glass-effect rounded-2xl p-8 flex items-center justify-center aspect-video relative group cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
              />
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="relative"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                  <Play size={40} className="text-white fill-white" />
                </div>
              </motion.div>
              <p className="absolute bottom-4 left-4 text-sm text-gray-400">
                Coming Soon: Elevator Pitch Video
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
