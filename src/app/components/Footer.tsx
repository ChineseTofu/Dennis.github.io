import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email', color: 'hover:text-cyan-400' }
  ];

  return (
    <footer id="contact" className="relative py-20 px-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4"
          >
            Software Developer Portfolio
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/60 text-lg mb-12 max-w-2xl mx-auto"
          >
            Gepassioneerd door code, gedreven door innovatie. Laten we samen iets geweldigs bouwen.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-6 mb-12"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative group`}
                >
                  {/* Icon */}
                  <div className="relative p-4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl transition-colors hover:bg-white/10">
                    <Icon className={`w-6 h-6 text-white/70 transition-colors ${social.color}`} />

                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    />
                  </div>

                  {/* Label on hover */}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-white/60 whitespace-nowrap"
                  >
                    {social.label}
                  </motion.span>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"
          />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/40 text-sm"
          >
            © {new Date().getFullYear()} Software Developer Portfolio. Alle rechten voorbehouden.
          </motion.p>

          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 bg-cyan-400/50 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
