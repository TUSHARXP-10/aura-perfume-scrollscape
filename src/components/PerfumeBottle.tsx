
import React from 'react';
import { useScroll } from '@/context/ScrollContext';
import { motion } from 'framer-motion';

interface PerfumeBottleProps {
  className?: string;
}

const PerfumeBottle: React.FC<PerfumeBottleProps> = ({ className }) => {
  const { bottleState, currentTheme } = useScroll();
  
  // Define animation variants based on bottle state
  const bottleVariants = {
    closed: {
      scale: 1,
      rotateY: 0
    },
    open: {
      scale: 1.1,
      rotateY: 180
    },
    spraying: {
      scale: 1.2,
      rotateY: 360
    }
  };

  const sprayVariants = {
    closed: {
      opacity: 0,
      scale: 0
    },
    open: {
      opacity: 0.3,
      scale: 0.5
    },
    spraying: {
      opacity: 0.8,
      scale: 1.5
    }
  };

  const themeClass = `theme${currentTheme}`;

  return (
    <div className={`relative ${className}`}>
      <motion.div 
        className={`${themeClass} relative w-32 h-64 mx-auto`}
        animate={bottleState}
        variants={bottleVariants}
        transition={{ duration: 0.8, type: "spring" }}
      >
        {/* Bottle body */}
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-40 rounded-lg bg-black border-2 border-white/30 overflow-hidden glow-border`}>
          {/* Bottle liquid */}
          <div 
            className="absolute bottom-0 left-0 w-full h-3/4 rounded-b-lg transition-all duration-1000"
            style={{ 
              background: `linear-gradient(to bottom, var(--glow-color), rgba(0,0,0,0.5))`,
              boxShadow: `0 0 20px var(--glow-color)`,
              opacity: bottleState === 'closed' ? 0.7 : 1
            }}
          ></div>
        </div>

        {/* Bottle neck */}
        <div className={`absolute bottom-40 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-black rounded-t-lg border-2 border-white/30 glow-border`}></div>

        {/* Bottle cap */}
        <div 
          className={`absolute bottom-52 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-black border-2 border-white/30 glow-border transition-all duration-700`}
          style={{ 
            transform: `translateX(-50%) translateY(${bottleState === 'closed' ? '0' : '10px'})`,
            opacity: bottleState === 'closed' ? 1 : 0.5
          }}
        ></div>
      </motion.div>

      {/* Spray effect */}
      <motion.div
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={bottleState}
        variants={sprayVariants}
        transition={{ duration: 0.5 }}
      >
        <div 
          className={`w-40 h-40 rounded-full blur-xl ${themeClass}`}
          style={{ 
            background: `radial-gradient(circle, var(--glow-color) 0%, transparent 70%)`,
            animation: bottleState === 'spraying' ? 'pulse 2s infinite' : 'none'
          }}
        ></div>
      </motion.div>
    </div>
  );
};

export default PerfumeBottle;
