
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import PerfumeBottle from './PerfumeBottle';

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center">
      <motion.div 
        className="flex-1 text-center md:text-left mb-10 md:mb-0 pt-20 md:pt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 theme1 glow-text">
          Experience the Essence of <span className="block">Luxury</span>
        </h1>
        <p className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
          Discover our exclusive collection of premium fragrances that capture the essence of elegance and sophistication.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button className="theme1 bg-theme1/20 hover:bg-theme1/40 border border-theme1 text-white px-8 py-6">
            Explore Collection
          </Button>
          <Button variant="outline" className="theme1 border-theme1 text-white hover:bg-theme1/20 px-8 py-6">
            Learn More
          </Button>
        </div>
      </motion.div>
      
      <motion.div 
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <PerfumeBottle className="scale-150 mb-10" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-8 w-8 theme1 glow-text" />
      </motion.div>
    </div>
  );
};

export default HeroSection;
