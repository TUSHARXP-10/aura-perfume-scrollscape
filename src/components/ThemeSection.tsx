
import React from 'react';

interface ThemeSectionProps {
  id: string;
  themeNumber: number;
  children: React.ReactNode;
}

const ThemeSection: React.FC<ThemeSectionProps> = ({ id, themeNumber, children }) => {
  return (
    <section 
      id={id} 
      className={`theme-section theme${themeNumber}`}
    >
      <div className="animated-bg"></div>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default ThemeSection;
