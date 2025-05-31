'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import GradientTransitionSection from './GradientTransitionSection';

const testimonials = [
  {
    id: 1,
    name: 'Adedamola Elujoba',
    role: 'CEO, Zendwallet',
    image: '/img/testimonial.png',
    quote: '7AVENUE played a pivotal role in transforming the Yousicplay brand and digital experience. Their expertise helped us elevate the Yousicplay brand and our digital presence, creating a more engaging and impactful experience. They truly understand what it takes to turn vision into reality.',
    logo: '/img/logos/testimonial-logo.png'
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Founder, TechCorp',
    image: '/img/testimonial.png',
    quote: 'Working with 7AVENUE has been transformative for our business. Their attention to detail and innovative approach helped us achieve remarkable results.',
    logo: '/img/logos/testimonial-logo.png'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Marketing Director, InnovateCo',
    image: '/img/testimonial.png',
    quote: 'The team at 7AVENUE brought our vision to life with exceptional creativity and technical expertise. They exceeded our expectations in every way.',
    logo: '/img/logos/testimonial-logo.png'
  }
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Testimonial 1 transforms
  const rotateX1 = useTransform(scrollYProgress, [0, 0.25], [60, 0]);
  const translateY1 = useTransform(scrollYProgress, [0, 0.25], [1000, 0]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 0.5, 1]);
  const scale1 = useTransform(scrollYProgress, [0, 0.25], [0.8, 1]);

  // Testimonial 2 transforms
  const rotateX2 = useTransform(scrollYProgress, [0.25, 0.5], [60, 0]);
  const translateY2 = useTransform(scrollYProgress, [0.25, 0.5], [1000, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.4, 0.5], [0, 0.5, 1]);
  const scale2 = useTransform(scrollYProgress, [0.25, 0.5], [0.8, 1]);

  // Testimonial 3 transforms
  const rotateX3 = useTransform(scrollYProgress, [0.5, 0.75], [60, 0]);
  const translateY3 = useTransform(scrollYProgress, [0.5, 0.75], [1000, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.65, 0.75], [0, 0.5, 1]);
  const scale3 = useTransform(scrollYProgress, [0.5, 0.75], [0.8, 1]);

  // Group transforms for each testimonial
  const transforms = [
    { rotateX: rotateX1, translateY: translateY1, opacity: opacity1, scale: scale1 },
    { rotateX: rotateX2, translateY: translateY2, opacity: opacity2, scale: scale2 },
    { rotateX: rotateX3, translateY: translateY3, opacity: opacity3, scale: scale3 },
  ];

  return (
    <>
    <section className="bg-[#1A1B1E] overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{ fontFamily: 'Clash Display Semibold' }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-40"
          style={{ fontFamily: 'Clash Display Semibold' }}
        >
          KIND WORDS
        </motion.h2>

        <div className="min-h-[200vh] relative perspective">
          <div className="sticky top-[20vh]">
            {testimonials.map((testimonial, index) => {
              const { rotateX, translateY, opacity, scale } = transforms[index];

              return (
                <motion.div
                  key={testimonial.id}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    x: '-50%',
                    y: translateY,
                    rotateX: rotateX,
                    scale,
                    opacity,
                    transformOrigin: 'bottom',
                    zIndex: testimonials.length - index,
                  }}
                  className="w-full max-w-5xl transform -translate-y-1/2 bg-[#2A2B2E] rounded-3xl p-8 md:p-12 shadow-2xl backface-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-full md:w-1/3">
                      <div className="relative aspect-square rounded-2xl overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-2/3 space-y-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Clash Display Semibold' }}>
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-400">{testimonial.role}</p>
                      <p className="text-lg text-gray-200 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                      <div className="h-8 relative">
                        <Image
                          src={testimonial.logo}
                          alt={`${testimonial.name}&apos;s company logo`}
                          fill
                          className="object-contain object-left brightness-0 invert"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    <GradientTransitionSection />
    </>
  );
};

export default Testimonials; 