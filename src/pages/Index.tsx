
import React from 'react';
import { ScrollProvider } from '@/context/ScrollContext';
import Navbar from '@/components/Navbar';
import ThemeSection from '@/components/ThemeSection';
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
          <div className="flex flex-col md:flex-row min-h-screen items-center">
            <motion.div 
              className="flex-1 text-center md:text-left mb-10 md:mb-0 pt-20 md:pt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
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
          </div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-8 w-8 theme1 glow-text" />
          </motion.div>
        </ThemeSection>

        {/* Theme 2: Collection */}
        <ThemeSection id="theme2" themeNumber={2}>
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
              <motion.div 
                className="relative overflow-hidden rounded-lg aspect-square group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                <div className="absolute inset-0 bg-theme2/20 group-hover:bg-theme2/40 transition-all duration-500"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Casual Collection" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-2xl font-serif theme2 glow-text mb-2">Casual</h3>
                  <p className="text-gray-200 mb-4">Everyday fragrances for every moment</p>
                  <Button className="theme2 bg-theme2/20 hover:bg-theme2/40 border border-theme2">
                    Discover <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>

              <motion.div 
                className="relative overflow-hidden rounded-lg aspect-square group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                <div className="absolute inset-0 bg-theme2/20 group-hover:bg-theme2/40 transition-all duration-500"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Premium Collection" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-2xl font-serif theme2 glow-text mb-2">Premium</h3>
                  <p className="text-gray-200 mb-4">Elevated scents for special occasions</p>
                  <Button className="theme2 bg-theme2/20 hover:bg-theme2/40 border border-theme2">
                    Discover <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>

              <motion.div 
                className="relative overflow-hidden rounded-lg aspect-square group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                <div className="absolute inset-0 bg-theme2/20 group-hover:bg-theme2/40 transition-all duration-500"></div>
                <img 
                  src="/placeholder.svg" 
                  alt="Luxury Collection" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-2xl font-serif theme2 glow-text mb-2">Luxury</h3>
                  <p className="text-gray-200 mb-4">Exclusive fragrances for the connoisseur</p>
                  <Button className="theme2 bg-theme2/20 hover:bg-theme2/40 border border-theme2">
                    Discover <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {featuredProducts.map((product, index) => (
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
