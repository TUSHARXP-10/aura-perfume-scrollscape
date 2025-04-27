
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ScrollContextType {
  currentTheme: number;
  scrollDirection: 'up' | 'down' | null;
  scrollProgress: number;
  bottleState: 'closed' | 'open' | 'spraying';
  cartItems: number;
}

const ScrollContext = createContext<ScrollContextType>({
  currentTheme: 1,
  scrollDirection: null,
  scrollProgress: 0,
  bottleState: 'closed',
  cartItems: 0,
});

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(1);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [bottleState, setBottleState] = useState<'closed' | 'open' | 'spraying'>('closed');
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = currentScrollTop / scrollHeight;
      setScrollProgress(currentProgress);
      
      // Determine scroll direction
      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('down');
      } else if (currentScrollTop < lastScrollTop) {
        setScrollDirection('up');
      }
      setLastScrollTop(currentScrollTop);
      
      // Determine current theme and bottle state
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const sectionCount = 4;
      
      const section = Math.floor((currentScrollTop / (totalHeight - windowHeight)) * sectionCount) + 1;
      setCurrentTheme(Math.max(1, Math.min(section, sectionCount)));
      
      // Update bottle state based on theme
      if (section === 1) {
        setBottleState('closed');
      } else if (section === 2) {
        setBottleState('open');
      } else if (section >= 3) {
        setBottleState('spraying');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  // Context value with addToCart function
  const contextValue = {
    currentTheme,
    scrollDirection,
    scrollProgress,
    bottleState,
    cartItems,
    addToCart: () => setCartItems(prev => prev + 1),
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within ScrollProvider');
  }
  return context;
};
