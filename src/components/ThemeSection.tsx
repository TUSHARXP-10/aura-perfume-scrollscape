
import React from 'react';
import { useScroll } from '@/context/ScrollContext';
import { motion } from 'framer-motion';

interface ThemeSectionProps {
  id: string;
  themeNumber: number;
  children: React.ReactNode;
}

const ThemeSection: React.FC<ThemeSectionProps> = ({ id, themeNumber, children }) => {
  const { perspective, rotation } = useScroll();

  return (
    <motion.section 
      id={id} 
      className={`theme-section theme${themeNumber}`}
      style={{
        perspective: `${perspective}px`,
        transform: `rotateX(${rotation.x * 0.15}deg) rotateY(${rotation.y * 0.15}deg)`,
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="animated-bg"></div>
      <motion.div 
        className="container mx-auto px-4"
        style={{
          transformStyle: 'preserve-3d',
        }}
        whileInView={{ 
          z: [0, 100, 0],
          rotateX: [0, rotation.x * 0.1, 0],
          rotateY: [0, rotation.y * 0.1, 0],
        }}
        transition={{ 
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default ThemeSection;
