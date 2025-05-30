'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import NoiseBackground from '../NoiseBackground';

const projects = [
  {
    id: 1,
    image: '/img/projects-section-img.png',
    title: "Gary Neville's",
    description: "Refreshing Gary Neville's digital presence"
  },
  {
    id: 2,
    image: '/img/projects-section-img.png',
    title: "Gary Neville's",
    description: "Spacebook"
  },
  {
    id: 3,
    image: '/img/projects-section-img.png',
    title: "Gary Neville's",
    description: "Spacebook"
  },
  {
    id: 4,
    image: '/img/projects-section-img.png',
    title: "Gary Neville's",
    description: "Spacebook"
  }
];

const ProjectShowcase = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#1A1B1E] relative">
      <NoiseBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {projects.slice(0, 2).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm text-gray-400">{project.title}</h3>
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Clash Display Semibold' }}>
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-gray-400 tracking-wider text-sm uppercase" style={{ fontFamily: 'Clash Display Semibold' }}>OUR WORK</span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white" style={{ fontFamily: 'Clash Display Semibold' }}>
                VIEW OUR PROJECTS
              </h2>
            </motion.div>

            {projects.slice(2, 4).map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm text-gray-400" style={{ fontFamily: 'Clash Display Semibold' }}>{project.title}</h3>
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Clash Display Semibold' }}>
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase; 