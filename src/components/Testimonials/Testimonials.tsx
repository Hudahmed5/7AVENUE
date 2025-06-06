'use client';

import React from 'react';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Card from './Card';
import GradientTransitionSection from './GradientTransitionSection';

const testimonials = [
  {
    id: 1,
    name: 'Adedamola Elujoba',
    role: 'CEO, Zendwallet',
    image: '/svg/cards_img.svg',
    quote: '7AVENUE played a key role in transforming the Yousicplay brand and digital experience, helping us elevate our presence and create a more engaging, impactful platform. They truly know how to turn vision into reality.',
    logo: '/svg/cards_logo.svg'
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Founder, TechCorp',
    image: '/svg/cards_img.svg',
    quote: 'Working with 7AVENUE has been transformative for our business. Their attention to detail and innovative approach helped us achieve remarkable results.',
    logo: '/svg/cards_logo.svg'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Marketing Director, InnovateCo',
    image: '/svg/cards_img.svg',
    quote: 'The team at 7AVENUE brought our vision to life with exceptional creativity and technical expertise. They exceeded our expectations in every way.',
    logo: '/svg/cards_logo.svg'
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
      <section ref={container} className="bg-dark-section relative">
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold text-white text-center pt-[20px]  text-[57px] md:text-[101px]"
          style={{ 
            fontFamily: 'Clash Display Semibold',
            lineHeight: '100%', 
            letterSpacing: '-1px' 
          }}
          >
            KIND WORDS
          </motion.h2>

          {testimonials.map((testimonial, i) => {
            const reversedIndex = testimonials.length - 1 - i;
            const targetScale = 0.9 + (i * 0.05);
            return (
              <Card
                key={testimonial.id}
                i={reversedIndex}
                {...testimonial}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                totalCards={testimonials.length}
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