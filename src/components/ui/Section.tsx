'use client';

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'light' | 'dark' | 'white' | 'black';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  containerWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  id?: string;
}

const Section = ({
  children,
  className = '',
  background = 'white',
  padding = 'lg',
  containerWidth = 'xl',
  id
}: SectionProps) => {
  const backgroundClasses = {
    light: 'bg-luxury-off-white text-luxury-black',
    dark: 'bg-luxury-black text-luxury-white',
    white: 'bg-luxury-white text-luxury-black',
    black: 'bg-luxury-black text-luxury-white'
  };

  const paddingClasses = {
    sm: 'luxury-section py-16 md:py-20',
    md: 'luxury-section py-20 md:py-24', 
    lg: 'luxury-section-lg py-24 md:py-32',
    xl: 'luxury-section-lg py-32 md:py-40'
  };

  const containerClasses = {
    sm: 'max-w-4xl mx-auto px-6 lg:px-8',
    md: 'max-w-5xl mx-auto px-6 lg:px-8',
    lg: 'max-w-6xl mx-auto px-6 lg:px-8', 
    xl: 'luxury-container',
    full: 'w-full px-6 lg:px-8'
  };

  return (
    <section id={id} className={`relative ${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      <div className={containerClasses[containerWidth]}>
        {children}
      </div>
    </section>
  );
};

export default Section; 