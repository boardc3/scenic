'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage?: string;
  afterVideo?: string;
  beforeAlt: string;
  afterAlt: string;
  title?: string;
  description?: string;
  className?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  afterVideo,
  beforeAlt,
  afterAlt,
  title,
  description,
  className = ''
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const touch = e.touches[0];
    updateSliderPosition(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    updateSliderPosition(touch.clientX);
  };

  return (
    <div className={`w-full ${className}`}>
      {(title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          {title && (
            <h3 className="text-2xl lg:text-3xl font-serif text-luxury-black mb-4">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
      )}
      
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative w-full h-96 lg:h-[500px] overflow-hidden cursor-ew-resize bg-luxury-black rounded-lg shadow-2xl select-none"
        style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            className="object-cover pointer-events-none"
            priority
          />
          <div className="absolute top-4 left-4 bg-luxury-black/80 text-luxury-white px-3 py-1 text-sm font-medium rounded pointer-events-none">
            Before
          </div>
        </div>

        {/* After Content (Image or Video) */}
        <div 
          className="absolute inset-0 transition-all duration-100 pointer-events-none"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        >
          {afterVideo ? (
            <video
              src={afterVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover pointer-events-none"
            />
          ) : (
            <Image
              src={afterImage!}
              alt={afterAlt}
              fill
              className="object-cover pointer-events-none"
              priority
            />
          )}
          <div className="absolute top-4 right-4 bg-luxury-gold text-luxury-black px-3 py-1 text-sm font-medium rounded pointer-events-none">
            After
          </div>
        </div>

        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-luxury-gold shadow-lg transition-all duration-100 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-luxury-gold rounded-full shadow-lg cursor-ew-resize flex items-center justify-center pointer-events-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-3 h-3 border-l-2 border-r-2 border-luxury-black opacity-70"></div>
          </motion.div>
        </div>

        {/* Hover Instructions */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isDragging ? 0 : 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-luxury-black/80 text-luxury-white px-4 py-2 text-sm rounded-full group-hover:opacity-100 opacity-70 transition-opacity pointer-events-none"
        >
          Drag to compare
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BeforeAfterSlider; 