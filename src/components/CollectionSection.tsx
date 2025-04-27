
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '@/data/products';

const CollectionSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const featuredProducts = getFeaturedProducts().slice(0, 4);

  return (
    <div className="py-20">
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-4xl md:text-5xl font-serif mb-4 theme2 glow-text">Our Collection</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore our carefully curated selection of fragrances, designed for every occasion and personality.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {['Casual', 'Premium', 'Luxury'].map((category, index) => (
          <motion.div 
            key={category}
            className="relative overflow-hidden rounded-lg aspect-square group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
            <div className="absolute inset-0 bg-theme2/20 group-hover:bg-theme2/40 transition-all duration-500"></div>
            <img 
              src="/placeholder.svg" 
              alt={`${category} Collection`} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-2xl font-serif theme2 glow-text mb-2">{category}</h3>
              <p className="text-gray-200 mb-4">
                {category === 'Casual' && 'Everyday fragrances for every moment'}
                {category === 'Premium' && 'Elevated scents for special occasions'}
                {category === 'Luxury' && 'Exclusive fragrances for the connoisseur'}
              </p>
              <Button className="theme2 bg-theme2/20 hover:bg-theme2/40 border border-theme2">
                Discover <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        {featuredProducts.map((product, index) => (
          <motion.div 
            key={product.id}
            variants={fadeIn}
            transition={{ delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CollectionSection;
