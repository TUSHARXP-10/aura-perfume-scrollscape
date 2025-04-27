
import React from 'react';
import { useScroll } from '@/context/ScrollContext';
import { motion } from 'framer-motion';

interface ThemeSectionProps {
  id: string;
  themeNumber: number;
  children: React.ReactNode;
}

const ThemeSection: React.FC<ThemeSectionProps> = ({ id, themeNumber, children }) => {
  const { currentTheme } = useScroll();

  return (
    <motion.section 
      id={id} 
      className={`theme-section theme${themeNumber}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="animated-bg"></div>
      <motion.div 
        className="container mx-auto px-4"
        whileInView={{ 
          opacity: [0.9, 1],
        }}
        transition={{ 
          duration: 1,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default ThemeSection;
