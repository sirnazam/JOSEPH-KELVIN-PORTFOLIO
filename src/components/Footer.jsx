import { motion } from 'framer-motion'
import { Code, ExternalLink, Heart, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { icon: Code, url: 'https://github.com', label: 'GitHub' },
    { icon: ExternalLink, url: 'https://www.linkedin.com/in/joseph-kelvin-b8822639a/', label: 'LinkedIn' },
    { icon: ExternalLink, url: 'https://facebook.com', label: 'Facebook' },
    { icon: ExternalLink, url: 'https://instagram.com', label: 'Instagram' },
    { icon: ExternalLink, url: 'https://tiktok.com', label: 'TikTok' },
  ]

  return (
    <footer className="bg-dark-800 border-t border-white/10 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.h3
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold gradient-text mb-2"
              >
                Joseph Chukwunazam Kelvin
              </motion.h3>
              <p className="text-gray-400 text-sm">
                Frontend Developer | Graphic Designer | Tech Enthusiast
              </p>
              <p className="text-gray-500 text-xs mt-2 italic">
                "Built with passion, creativity, and technology."
              </p>
              <motion.a
                href="mailto:kelvinjoseph1440@gmail.com"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 mt-4 text-purple-400 hover:text-purple-300 transition-colors text-sm"
              >
                <Mail size={16} />
                kelvinjoseph1440@gmail.com
              </motion.a>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <motion.a
                      href={`#${link.toLowerCase()}`}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-3 flex-wrap">
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
                      className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-gray-400 hover:text-purple-400 transition-colors"
                      title={social.label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="border-t border-white/10 my-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Bottom */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm flex items-center gap-1 justify-center md:justify-start">
              © {currentYear} Joseph Chukwunazam Kelvin. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="inline-block text-red-500"
              >
                <Heart size={16} className="fill-red-500" />
              </motion.span>
              . All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-4 md:mt-0">
              Designed & Developed by Joseph Chukwunazam Kelvin
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
