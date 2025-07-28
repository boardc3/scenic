'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';

const Hero = () => {
  return (
    <section className="relative bg-luxury-black text-luxury-white overflow-hidden" style={{ minHeight: '85vh' }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-black/80 via-luxury-black/60 to-luxury-black/90">
        <div className="absolute inset-0 opacity-20"></div>
      </div>

      <div className="relative z-10 hero-grid">
        <div className="container-grid">
          <div className="content-grid-2 hero-content">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-grid-lg"
            >
              <div className="space-y-grid">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="heading-display hero-heading leading-tight"
                >
                  Buyers see the property{' '}
                  <span className="text-luxury-gold">in the day,</span>
                  <br />
                  but they decide{' '}
                  <span className="text-luxury-gold">at night.</span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="gold-accent"
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg text-luxury-off-white leading-relaxed max-w-lg"
                >
                  It's 9 PM. The kids are finally asleep. Your buyer is scrolling through listings 
                  on their laptop, wine in hand, dreaming of their next chapter. This is when they 
                  fall in love with a home—when they can imagine their life unfolding there.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-base text-luxury-gold font-medium"
                >
                  We create cinematic videos that capture that emotional moment—transforming 
                  a few daytime photos into the twilight vision they're craving.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex flex-col sm:flex-row hero-buttons"
              >
                <Button href="#transformations" variant="primary" size="lg" className="btn-grid-lg">
                  See the Magic
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="btn-grid-lg">
                  Request Demo Video
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Before/After Slider */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative group">
                <div style={{ height: '400px' }}>
                  <BeforeAfterSlider
                    beforeImage="/image.webp"
                    afterVideo="/movie.mp4"
                    beforeAlt="Daytime MLS listing photo"
                    afterAlt="Evening cinematic video"
                  />
                </div>
                
                {/* Floating Stats - Repositioned for smaller size */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="absolute bg-luxury-gold text-luxury-black rounded-lg shadow-xl px-3 py-2"
                  style={{ 
                    bottom: '-12px', 
                    left: '-12px'
                  }}
                >
                  <div className="text-lg font-serif font-bold">73%</div>
                  <div className="text-xs font-medium">Faster Sales</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="absolute bg-luxury-white text-luxury-black rounded-lg shadow-xl px-3 py-2"
                  style={{ 
                    top: '-12px', 
                    right: '-12px'
                  }}
                >
                  <div className="text-lg font-serif font-bold">+24%</div>
                  <div className="text-xs font-medium">Higher Offers</div>
                </motion.div>
              </div>

              {/* Evening Context Visual */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="mt-6 flex items-center text-luxury-off-white text-sm"
              >
                <div className="flex items-center mr-4">
                  <svg className="w-4 h-4 text-luxury-gold mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span>Evening browsing hours</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-luxury-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Peak decision-making time</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 