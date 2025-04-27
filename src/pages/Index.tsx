import React from 'react';
import { ScrollProvider } from '@/context/ScrollContext';
import Navbar from '@/components/Navbar';
import ThemeSection from '@/components/ThemeSection';
import HeroSection from '@/components/HeroSection';
import CollectionSection from '@/components/CollectionSection';
import PerfumeBottle from '@/components/PerfumeBottle';
import ProductCard from '@/components/ProductCard';
import { 
  products, 
  getProductsByCategory,
  getFeaturedProducts,
  getBestsellerProducts,
  getNewProducts
} from '@/data/products';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Index = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);
  const bestsellerProducts = getBestsellerProducts().slice(0, 4);
  const casualProducts = getProductsByCategory('casual').slice(0, 8);
  const premiumProducts = getProductsByCategory('premium').slice(0, 8);
  const luxuryProducts = getProductsByCategory('luxury').slice(0, 8);

  return (
    <ScrollProvider>
      <div className="min-h-screen bg-dark text-white">
        <Navbar />

        {/* Theme 1: Home / Hero */}
        <ThemeSection id="theme1" themeNumber={1}>
          <HeroSection />
        </ThemeSection>

        {/* Theme 2: Collection */}
        <ThemeSection id="theme2" themeNumber={2}>
          <CollectionSection />
        </ThemeSection>

        {/* Theme 3: Featured */}
        <ThemeSection id="theme3" themeNumber={3}>
          <div className="py-20">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-4 theme3 glow-text">Featured Products</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our most exclusive perfumes, crafted with the finest ingredients for an unforgettable sensory experience.
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 mb-16">
              <motion.div 
                className="flex-1 relative rounded-lg overflow-hidden min-h-[400px]"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Featured Product" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 max-w-md">
                  <span className="theme3 glow-text text-sm uppercase">Limited Edition</span>
                  <h3 className="text-3xl font-serif font-bold mb-4">Celestial Oud</h3>
                  <p className="text-gray-300 mb-6">
                    Our most prestigious creation, featuring rare oud, premium rose, and a hint of precious spices.
                  </p>
                  <Button className="theme3 bg-theme3/20 hover:bg-theme3/40 border border-theme3">
                    Shop Now
                  </Button>
                </div>
              </motion.div>

              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="h-full flex justify-center items-center">
                  <PerfumeBottle className="scale-150" />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {bestsellerProducts.map((product, index) => (
                  <motion.div 
                    key={product.id}
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </ThemeSection>

        {/* Theme 4: Shop */}
        <ThemeSection id="theme4" themeNumber={4}>
          <div className="py-20">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-4 theme4 glow-text">Shop Collection</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore our complete range of exquisite fragrances, from everyday essentials to rare luxury scents.
              </p>
            </motion.div>

            <div className="mb-16">
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <Button className="theme4 bg-theme4/20 hover:bg-theme4/40 border border-theme4">
                  All Products
                </Button>
                <Button variant="outline" className="theme4 border-theme4 hover:bg-theme4/20">
                  Casual
                </Button>
                <Button variant="outline" className="theme4 border-theme4 hover:bg-theme4/20">
                  Premium
                </Button>
                <Button variant="outline" className="theme4 border-theme4 hover:bg-theme4/20">
                  Luxury
                </Button>
                <Button variant="outline" className="theme4 border-theme4 hover:bg-theme4/20">
                  New Arrivals
                </Button>
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {luxuryProducts.slice(0, 8).map((product, index) => (
                    <motion.div 
                      key={product.id}
                      variants={fadeIn}
                      transition={{ delay: index * 0.05 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <div className="text-center mt-10">
                <Button className="theme4 bg-theme4/20 hover:bg-theme4/40 border border-theme4 px-8 py-6">
                  View All Products
                </Button>
              </div>
            </div>
          </div>
        </ThemeSection>

        {/* Footer */}
        <footer className="bg-black text-white border-t border-white/10 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-serif mb-4">AURA</h3>
                <p className="text-gray-400">
                  Experience luxury in every scent. Our perfumes are crafted with the finest ingredients from around the world.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#theme1" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#theme2" className="hover:text-white transition-colors">Collection</a></li>
                  <li><a href="#theme3" className="hover:text-white transition-colors">Featured</a></li>
                  <li><a href="#theme4" className="hover:text-white transition-colors">Shop</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Contact</h4>
                <p className="text-gray-400 mb-4">
                  Sign up for our newsletter to receive exclusive offers and updates.
                </p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white/10 rounded-l px-4 py-2 flex-grow focus:outline-none focus:ring-1 focus:ring-white"
                  />
                  <Button className="rounded-l-none bg-white text-black hover:bg-gray-200">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 text-center text-gray-400">
              <p>© 2025 AURA Perfumes. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ScrollProvider>
  );
};

export default Index;
