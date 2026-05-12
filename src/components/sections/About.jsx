import { motion } from 'framer-motion'
import { User, Palette, Code, Briefcase } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const strengths = [
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting visually stunning designs and branding solutions that captivate audiences.',
    },
    {
      icon: Briefcase,
      title: 'Virtual Assistance',
      description: 'Providing efficient administrative support and project management expertise.',
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Building modern web applications and digital solutions with cutting-edge technologies.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <User className="w-8 h-8 text-purple-400" />
                <h3 className="text-3xl font-bold text-white">Joseph Kelvin</h3>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed"
              >
                I'm a passionate creative and technical professional who thrives at the intersection of design,
                technology, and innovation. With expertise in graphic design, virtual assistance, and software
                development, I help businesses and individuals bring their digital visions to life.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed"
              >
                My journey combines artistic creativity with technical proficiency, allowing me to deliver
                comprehensive solutions that not only look great but also function seamlessly. Whether it's
                crafting compelling brand identities, streamlining operations through virtual assistance, or
                developing robust web applications, I'm committed to excellence in every project.
              </motion.p>
            </motion.div>

            {/* Strengths Grid */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-2xl font-semibold text-white mb-6">Key Strengths</h4>
              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <strength.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-white mb-1">{strength.title}</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">{strength.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}