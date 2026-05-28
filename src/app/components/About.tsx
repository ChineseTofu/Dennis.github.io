import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { User, GraduationCap, Heart, Briefcase } from 'lucide-react';

const aboutCards = [
  {
    icon: User,
    title: 'Wie ben ik',
    content: 'Ik ben een gepassioneerde software development student die graag innovatieve oplossingen creëert. Met een sterke focus op web development en game development streef ik ernaar om impactvolle digitale ervaringen te bouwen.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: GraduationCap,
    title: 'Mijn opleiding',
    content: 'Ik volg momenteel de opleiding Software Development waar ik leer over moderne technologieën, design patterns en best practices. Elke dag breid ik mijn kennis uit met nieuwe frameworks en programmeertalen.',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: Heart,
    title: 'Mijn interesses',
    content: 'Naast coderen ben ik geïnteresseerd in game development, UI/UX design en emerging technologies zoals AI en VR. Ik hou ervan om nieuwe tools te verkennen en mijn vaardigheden constant te verbeteren.',
    color: 'from-purple-500 to-pink-600'
  },
  {
    icon: Briefcase,
    title: 'Mijn stage zoektocht',
    content: 'Ik ben momenteel op zoek naar een uitdagende stage waar ik mijn kennis kan toepassen en kan leren van ervaren developers. Een omgeving waar innovatie en persoonlijke groei centraal staan is ideaal.',
    color: 'from-pink-500 to-red-600'
  }
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const pathProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const strokeDashoffset = useTransform(
    pathProgress,
    [0, 1],
    [pathLength, 0]
  );

  return (
    <section id="over-mij" className="relative py-32 px-6 overflow-hidden">
      <div ref={containerRef} className="relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Over <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">mij</span>
          </h2>
          <p className="text-white/60 text-lg">Mijn reis als developer</p>
        </motion.div>

        <div className="relative">
          {/* SVG Path */}
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full pointer-events-none hidden lg:block"
            style={{ zIndex: 0 }}
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <motion.path
              ref={pathRef}
              d="M 300 0 Q 400 200 300 400 Q 200 600 300 800 Q 400 1000 300 1200 Q 200 1400 300 1600"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="3"
              strokeDasharray={pathLength}
              style={{ strokeDashoffset }}
            />
          </svg>

          {/* Cards */}
          <div className="space-y-32 relative z-10">
            {aboutCards.map((card, index) => {
              const Icon = card.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex ${isEven ? 'lg:justify-start' : 'lg:justify-end'} justify-center`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="relative group max-w-md lg:max-w-lg w-full"
                  >
                    {/* Glassmorphism Card */}
                    <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden">
                      {/* Glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                      {/* Icon */}
                      <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${card.color} mb-6 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                      <p className="text-white/70 leading-relaxed">{card.content}</p>

                      {/* Decorative corner */}
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-10 blur-3xl`} />
                    </div>

                    {/* Dot indicator */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50"
                      style={{ [isEven ? 'right' : 'left']: '-15%' }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
