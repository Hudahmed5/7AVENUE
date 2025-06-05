'use client';

import React from 'react';
import GlitchImage from '../GlitchImage/GlitchImage';
import { motion } from 'framer-motion';
import NoiseBackground from '../NoiseBackground';

const projects = [
  {
    id: 1,
    image: '/img/projects-section-img.png',
    title: "Gary Neville's",
    description: "Spacebook"
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
    <section className="py-4 md:py-12 lg:py-12 bg-[#1A1B1E] relative">
      <NoiseBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-12">
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
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  {project.id === 1 ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/projects_video.mp4" type="video/mp4" />
                    </video>
                  ) : (
                    <GlitchImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full"
                    />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm text-gray-400">{project.title}</h3>
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>
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
              <span className="text-gray-400 tracking-wider text-sm uppercase" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>OUR WORK</span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>
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
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  {project.id === 1 ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/projects_video.mp4" type="video/mp4" />
                    </video>
                  ) : (
                    <GlitchImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full"
                    />
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm text-gray-400" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>{project.title}</h3>
                  <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Clash Display', fontWeight: 600 }}>
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