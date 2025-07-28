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
            <div className="relative">
              <BeforeAfterSlider
                beforeImage="/image.webp"
                afterVideo="/movie.mp4"
                beforeAlt="Daytime MLS listing photo"
                afterAlt="Evening cinematic video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 