import { motion } from 'framer-motion'

export default function Skills() {
  const skillsData = [
    {
      category: 'Development',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Frontend Development', level: 88 },
        { name: 'Flutter', level: 75 },
        { name: 'Backend Development (Learning)', level: 40 },
      ],
    },
    {
      category: 'Design & Media',
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Graphic Design', level: 85 },
        { name: 'Branding', level: 80 },
        { name: 'Adobe Photoshop', level: 85 },
        { name: 'Adobe Premiere Pro', level: 80 },
        { name: 'Adobe After Effects', level: 75 },
        { name: 'Microsoft Office Suite', level: 90 },
      ],
    },
    {
      category: 'Emerging Technologies',
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'AI/ML Fundamentals', level: 45 },
        { name: '3D Animation Fundamentals', level: 50 },
        { name: 'Blender', level: 40 },
        { name: 'SaaS Product Development', level: 60 },
      ],
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
    <section id="skills" className="py-20 px-4 md:px-8 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-16">Skills & Expertise</h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillsData.map((skillGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                variants={itemVariants}
                className="glass-effect rounded-2xl p-8"
              >
                <h3 className={`text-2xl font-bold mb-8 bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}>
                  {skillGroup.category}
                </h3>

                <div className="space-y-6">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-xs text-purple-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${skillGroup.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
