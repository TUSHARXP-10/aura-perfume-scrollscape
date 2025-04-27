
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ScrollContextType {
  currentTheme: number;
  scrollDirection: 'up' | 'down' | null;
  scrollProgress: number;
  bottleState: 'closed' | 'open' | 'spraying';
  perspective: number;
  rotation: { x: number; y: number };
}

const ScrollContext = createContext<ScrollContextType>({
  currentTheme: 1,
  scrollDirection: null,
  scrollProgress: 0,
  bottleState: 'closed',
  perspective: 1000,
  rotation: { x: 0, y: 0 },
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
  const [perspective, setPerspective] = useState(1000);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

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
      
      // Calculate 3D effects based on scroll
      const rotationX = (currentScrollTop / window.innerHeight) * 20;
      const rotationY = Math.sin(currentScrollTop / 1000) * 10;
      setRotation({ x: rotationX, y: rotationY });
      
      // Adjust perspective based on scroll position
      const newPerspective = 1000 + (currentScrollTop * 0.5);
      setPerspective(newPerspective);
      
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

  return (
    <ScrollContext.Provider value={{ 
      currentTheme, 
      scrollDirection, 
      scrollProgress, 
      bottleState,
      perspective,
      rotation
    }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
