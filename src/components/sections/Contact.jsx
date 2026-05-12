import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, Code, ExternalLink, Music } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const socials = [
    { icon: Code, url: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-300' },
    { icon: ExternalLink, url: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: ExternalLink, url: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: ExternalLink, url: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Music, url: 'https://tiktok.com', label: 'TikTok', color: 'hover:text-black dark:hover:text-white' },
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
    <section id="contact" className="py-20 px-4 md:px-8 bg-dark-800/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center mb-12">Contact Me</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  I'm always interested in hearing about new opportunities and projects. Feel free to reach out using any of the methods below.
                </p>
              </motion.div>

              {/* Contact Methods */}
              <motion.div variants={itemVariants} className="space-y-4 mb-8">
                {/* Email */}
                <motion.a
                  href="mailto:kelvinjoseph1440@gmail.com"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:border-purple-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-semibold">kelvinjoseph1440@gmail.com</p>
                  </div>
                </motion.a>

                {/* Phone */}
                <motion.a
                  href="https://wa.me/2348157983691"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass-effect rounded-lg hover:border-green-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="text-white font-semibold">+234 815 798 3691</p>
                  </div>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <p className="text-gray-400 text-sm mb-4">Follow Me On</p>
                <div className="flex gap-4 flex-wrap">
                  {socials.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 rounded-lg glass-effect flex items-center justify-center text-gray-400 ${social.color} transition-colors`}
                        title={social.label}
                      >
                        <Icon size={20} />
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8"
            >
              {/* Name Input */}
              <motion.div variants={itemVariants} className="mb-6">
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="Your Name"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div variants={itemVariants} className="mb-6">
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="kelvinjoseph1440@gmail.com"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div variants={itemVariants} className="mb-6">
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 gradient-button text-white rounded-lg font-semibold flex items-center justify-center gap-2 group"
              >
                <Send size={18} />
                Send Message
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="group-hover:opacity-100"
                >
                  →
                </motion.span>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
