import { motion } from 'motion/react';

const skills = [
  { name: 'Unity', color: 'from-gray-700 to-black', icon: '🎮' },
  { name: 'C#', color: 'from-purple-600 to-purple-800', icon: '⚡' },
  { name: 'HTML', color: 'from-orange-500 to-orange-700', icon: '🌐' },
  { name: 'CSS', color: 'from-blue-500 to-blue-700', icon: '🎨' },
  { name: 'Python', color: 'from-yellow-400 to-blue-500', icon: '🐍' },
  { name: 'WordPress', color: 'from-blue-400 to-blue-600', icon: '📝' },
  { name: 'Git', color: 'from-orange-600 to-red-600', icon: '📦' }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Mijn <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-white/60 text-lg">Technologieën waar ik mee werk</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                scale: 1.05,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Floating animation */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: 'easeInOut'
                }}
                className="relative"
              >
                {/* Glassmorphism card */}
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl overflow-hidden">
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                  {/* Animated border glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-50 blur-xl`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <motion.div
                      className="text-5xl"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                  </div>

                  {/* Corner decoration */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${skill.color} opacity-20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-500`} />
                </div>

                {/* Outer glow ring */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color}`}
                  style={{ padding: '2px', zIndex: -1 }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional decorative elements */}
        <div className="mt-20 flex justify-center gap-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-cyan-400 rounded-full"
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
    </section>
  );
}
