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
}

const Card = ({ i, name, role, quote, image, logo, progress, range, targetScale }: CardProps) => {
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
          backgroundColor: '#2A2B2E',
          scale, 
          top: `calc(-5vh + ${i * 25}px)`
        }} 
        className={styles.card}
      >
        <h2>{name}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{quote}</p>
            <div className={styles.roleContainer}>
              <p className={styles.role}>{role}</p>
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
