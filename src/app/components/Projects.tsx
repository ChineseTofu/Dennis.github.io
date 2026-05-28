import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Een moderne webshop gebouwd met React en Node.js',
    fullDescription: 'Een volledig functionele e-commerce platform met winkelwagen functionaliteit, betaalintegratie en admin dashboard. Gebouwd met moderne technologieën en best practices voor optimale performance en gebruikerservaring.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#'
  },
  {
    title: '3D Game Project',
    description: 'Een interactieve 3D game ontwikkeld in Unity',
    fullDescription: 'Een immersieve 3D game ervaring met complexe gameplay mechanics, AI enemies en prachtige visuals. Ontwikkeld met Unity Engine en C#, met focus op performance optimalisatie en player experience.',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    tags: ['Unity', 'C#', 'Blender', '3D'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Portfolio Dashboard',
    description: 'Een analytics dashboard voor portfolio tracking',
    fullDescription: 'Een geavanceerd dashboard voor het monitoren van portfolio prestaties met real-time data visualisatie, custom metrics en geautomatiseerde rapportages. Gebouwd met moderne frontend frameworks en data visualisatie libraries.',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    tags: ['React', 'TypeScript', 'Chart.js', 'API'],
    github: '#',
    demo: '#'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projecten" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Mijn <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projecten</span>
          </h2>
          <p className="text-white/60 text-lg">Enkele van mijn beste werken</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Card */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                {/* Image container */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all"
                  >
                    Meer informatie
                  </motion.button>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <p className="text-white/80 text-lg mb-6 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-white/60 mr-2">Gebruikte technieken:</span>
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-medium transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={selectedProject.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-medium shadow-lg shadow-cyan-500/30"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
