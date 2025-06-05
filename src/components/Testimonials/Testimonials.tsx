'use client';

import React from 'react';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Card from './Card';
import GradientTransitionSection from './GradientTransitionSection';
import NoiseBackground from '../NoiseBackground';

const testimonials = [
  {
    id: 1,
    name: 'Adedamola Elujoba',
    role: 'CEO, Zendwallet',
    image: '/img/testimonial.png',
    quote: '7AVENUE played a key role in transforming the Yousicplay brand and digital experience, helping us elevate our presence and create a more engaging, impactful platform. They truly know how to turn vision into reality.',
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
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <>
      <section ref={container} className="bg-[#1A1B1E] relative">
        <NoiseBackground />
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-white text-center pt-12 text-[57px] md:text-[101px]"
          style={{ 
            fontFamily: 'Clash Display Semibold',
            lineHeight: '100%', 
            letterSpacing: '-1px' 
          }}
          >
            KIND WORDS
          </motion.h2>

          {testimonials.map((testimonial, i) => {
            const targetScale = 1 - (testimonials.length - i) * 0.05;
            return (
              <Card
                key={testimonial.id}
                i={i}
                {...testimonial}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </section>
      <GradientTransitionSection />
    </>
  );
};

export default Testimonials; 