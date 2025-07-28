'use client';

import { useRef, useEffect } from 'react';
import { useSpring, animated, useSpringValue } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Spring value for smooth slider position
  const sliderPosition = useSpringValue(15); // Start with more dramatic reveal
  const isHovered = useSpringValue(0);
  const scale = useSpringValue(1);
  const brightness = useSpringValue(1);

  // Main spring animation for the reveal with dramatic config
  const [springs, api] = useSpring(() => ({
    position: 15,
    config: {
      tension: 180, // Higher tension for snappier movement
      friction: 12, // Lower friction for more dramatic motion
      mass: 0.8    // Lower mass for faster response
    }
  }));

  // Grand auto-animation sequence
  const startAutoAnimation = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      // Dramatic scale and brightness pulse on start
      scale.start({
        to: 1.02,
        config: { tension: 200, friction: 20 }
      });
      brightness.start({
        to: 1.1,
        config: { tension: 200, friction: 20 }
      });
      
      api.start({
        from: { position: 15 },
        to: async (next) => {
          // GRAND REVEAL SEQUENCE - Much faster and more dramatic
          await next({ 
            position: 45, 
            config: { 
              tension: 220, 
              friction: 18,
              mass: 0.6
            } 
          }); // Quick burst to 45%
          
          await next({ 
            position: 75, 
            config: { 
              tension: 160, 
              friction: 14,
              mass: 0.8 
            } 
          }); // Smooth sweep to 75%
          
          await next({ 
            position: 90, 
            config: { 
              tension: 140, 
              friction: 16,
              mass: 1
            } 
          }); // Final dramatic reveal to 90%
          
          // Hold the dramatic reveal for impact
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          // Smooth return with anticipation
          await next({ 
            position: 15, 
            config: { 
              tension: 100, 
              friction: 20,
              mass: 1.2
            } 
          });
          
          // Reset scale and brightness
          scale.start({ to: 1, config: { tension: 150, friction: 25 } });
          brightness.start({ to: 1, config: { tension: 150, friction: 25 } });
          
          // Pause before next cycle
          await new Promise(resolve => setTimeout(resolve, 2500));
          
          // Restart if not hovered
          if (isHovered.get() === 0) {
            startAutoAnimation();
          }
        },
        onChange: (result) => {
          if (isHovered.get() === 0) {
            sliderPosition.set(result.value.position);
          }
        }
      });
    }, 800); // Shorter delay for immediate impact
  };

  // Enhanced gesture handling
  const bind = useDrag(
    ({ active, movement: [mx], memo = sliderPosition.get() }) => {
      if (!containerRef.current) return memo;
      
      const rect = containerRef.current.getBoundingClientRect();
      const deltaPercentage = (mx / rect.width) * 100;
      const newPosition = Math.max(0, Math.min(95, memo + deltaPercentage));
      
      if (active) {
        // Stop auto-animation while dragging
        api.stop();
        scale.stop();
        brightness.stop();
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        sliderPosition.set(newPosition);
      }
      
      return memo;
    },
    {
      filterTaps: true,
      axis: 'x'
    }
  );

  // Enhanced hover events with visual feedback
  const handleMouseEnter = () => {
    isHovered.set(1);
    api.stop();
    scale.stop();
    brightness.stop();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Subtle hover feedback
    scale.start({
      to: 1.01,
      config: { tension: 300, friction: 30 }
    });
  };

  const handleMouseLeave = () => {
    isHovered.set(0);
    
    // Dramatic return to start with anticipation
    sliderPosition.start({
      to: 15,
      config: { 
        tension: 120, 
        friction: 25,
        mass: 1.1
      }
    });
    
    scale.start({
      to: 1,
      config: { tension: 200, friction: 30 }
    });
    
    // Restart auto-animation after brief pause
    setTimeout(() => {
      if (isHovered.get() === 0) {
        startAutoAnimation();
      }
    }, 600);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isHovered.get() === 1 && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
      
      // Very responsive spring for manual control
      sliderPosition.start({
        to: percentage,
        config: { tension: 300, friction: 30 }
      });
    }
  };

  // Initialize dramatic auto-animation
  useEffect(() => {
    startAutoAnimation();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      api.stop();
      scale.stop();
      brightness.stop();
    };
  }, []);

  return (
    <div className={`w-full ${className}`}>
      {(title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          {title && (
            <h3 className="text-3xl lg:text-4xl font-serif text-luxury-black mb-6 leading-tight">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: 0.1
        }}
        className="relative w-full h-96 lg:h-[600px] overflow-hidden bg-luxury-black rounded-2xl shadow-2xl"
      >
        <animated.div
          ref={containerRef}
          className="absolute inset-0 select-none cursor-crosshair touch-none"
          style={{ 
            WebkitUserSelect: 'none', 
            userSelect: 'none',
            transform: scale.to(s => `scale(${s})`),
            filter: brightness.to(b => `brightness(${b})`)
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          {...bind()}
        >
          {/* After Content (Video/Image) - Bottom layer, always visible */}
          <div className="absolute inset-0 pointer-events-none">
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
            <div className="absolute top-6 right-6 bg-luxury-gold text-luxury-black px-4 py-2 text-base font-semibold rounded-lg pointer-events-none shadow-lg">
              After
            </div>
          </div>

          {/* Before Image - Top layer, clipped with dramatic spring animation */}
          <animated.div 
            className="absolute inset-0"
            style={{
              clipPath: sliderPosition.to(pos => `inset(0 ${pos}% 0 0)`)
            }}
          >
            <Image
              src={beforeImage}
              alt={beforeAlt}
              fill
              className="object-cover pointer-events-none"
              priority
            />
            <div className="absolute top-6 left-6 bg-luxury-black/90 text-luxury-white px-4 py-2 text-base font-semibold rounded-lg pointer-events-none shadow-lg">
              Before
            </div>
          </animated.div>

          {/* Dramatic reveal indicator */}
          <animated.div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-luxury-gold/90 text-luxury-black px-6 py-3 text-base font-semibold rounded-full pointer-events-none shadow-xl backdrop-blur-sm"
            style={{
              opacity: sliderPosition.to(pos => pos > 20 ? 1 : 0),
              scale: sliderPosition.to(pos => pos > 20 ? 1 : 0.8)
            }}
          >
            ✨ Cinematic Transformation
          </animated.div>

          {/* Hover hint with enhanced styling */}
          <animated.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-luxury-black/80 text-luxury-white px-8 py-4 text-lg font-medium rounded-full pointer-events-none backdrop-blur-md border border-luxury-gold/30"
            style={{
              opacity: sliderPosition.to(pos => pos < 25 ? 0.9 : 0),
              scale: isHovered.to(h => h === 1 ? 0.9 : 1),
              display: isHovered.to(h => h === 1 ? 'none' : 'block')
            }}
          >
            Hover to explore the transformation
          </animated.div>
        </animated.div>
      </motion.div>
    </div>
  );
};

export default BeforeAfterSlider; 