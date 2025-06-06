'use client'
import Image from 'next/image';
import styles from './Card.module.css';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';

import { MotionValue } from 'framer-motion';

interface CardProps {
  i: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  logo: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  totalCards: number;
}

const Card = ({ i, name, role, quote, image, logo, progress, range, targetScale, totalCards }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div 
        style={{ 
          backgroundColor: '#3D3D3D',
          scale, 
          top: `calc(${i * 8}vh)`,
          zIndex: totalCards - i
        }} 
        className={styles.card}
      >
        <div className={styles.body}>
          <div className={styles.description}>
          <h2 className='text-[24px] md:text-[43px]'
          style={{ 
            fontFamily: 'Clash Display Semibold',
            lineHeight: '100%', 
            letterSpacing: '-1px' }}>{name}</h2>
          <p className={styles.role} style={{fontFamily: 'Space Grotesk'}}>{role}</p>
            <p style={{fontFamily: 'Space Grotesk'}}>{quote}</p>
            <div className={styles.roleContainer}>
              <div className={styles.logo}>
                <Image
                  src={logo}
                  alt={`${name}'s company logo`}
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <motion.div
              className={styles.inner}
              style={{scale: imageScale}}
            >
              <Image
                fill
                src={image}
                alt={name} 
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card
