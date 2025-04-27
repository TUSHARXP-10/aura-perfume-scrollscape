
import React, { useState, useEffect } from 'react';
import { useScroll } from '@/context/ScrollContext';
import { Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartDrawer from './CartDrawer';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

const Navbar = () => {
  const { currentTheme } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const themeClass = `theme${currentTheme}`;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'py-4 bg-transparent'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className={`text-2xl font-serif font-bold ${themeClass}`}>
            <span className="glow-text">RAZA-PERFUME</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#theme1" className={`nav-link ${themeClass}`}>Home</a>
          <a href="#theme2" className={`nav-link ${themeClass}`}>Collection</a>
          <a href="#theme3" className={`nav-link ${themeClass}`}>Featured</a>
          
          <HoverCard>
            <HoverCardTrigger>
              <a href="#theme4" className={`nav-link ${themeClass}`}>Shop</a>
            </HoverCardTrigger>
            <HoverCardContent className="w-56 bg-black/90 border-white/10 text-white">
              <div className="space-y-2">
                <h3 className="font-medium">Shop Categories</h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="#theme4" className="hover:text-theme4">All Products</a></li>
                  <li><a href="#theme4" className="hover:text-theme4">Casual</a></li>
                  <li><a href="#theme4" className="hover:text-theme4">Premium</a></li>
                  <li><a href="#theme4" className="hover:text-theme4">Luxury</a></li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className={`${themeClass} hover:bg-white/10`}>
            <Search className="h-5 w-5" />
          </Button>
          
          <CartDrawer />
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className={`md:hidden ${themeClass} hover:bg-white/10`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10 py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#theme1" className={`nav-link ${themeClass}`} onClick={() => setIsOpen(false)}>Home</a>
            <a href="#theme2" className={`nav-link ${themeClass}`} onClick={() => setIsOpen(false)}>Collection</a>
            <a href="#theme3" className={`nav-link ${themeClass}`} onClick={() => setIsOpen(false)}>Featured</a>
            <a href="#theme4" className={`nav-link ${themeClass}`} onClick={() => setIsOpen(false)}>Shop</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
