'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const PremiumTierPreview = () => {
  return (
    <section className="relative bg-luxury-black text-luxury-white section-grid">
      <div className="container-grid">
        <div className="content-grid-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-grid-xl"
          >
            <div className="space-y-grid-lg">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="heading-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
              >
                Bespoke videos for{' '}
                <span className="text-luxury-gold">a single buyer.</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="gold-accent"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="body-elegant text-lg lg:text-xl text-luxury-off-white"
              >
                Our premium tier creates a cinematic film modeled after the buyer&apos;s life, 
                integrating their personal details, lifestyle, and aspirations into the property narrative.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-grid-lg"
            >
              <div className="flex items-start" style={{ gap: 'var(--space-4)' }}>
                <div className="flex-shrink-0 w-2 h-2 bg-luxury-gold rounded-full mt-3"></div>
                <div>
                  <h4 className="text-lg font-medium text-luxury-white mb-2">
                    Tech Founder Scenario
                  </h4>
                  <p className="body-elegant text-luxury-off-white">
                    Includes his yacht, home office setup, and family lifestyle seamlessly 
                    integrated into the property video.
                  </p>
                </div>
              </div>

              <div className="flex items-start" style={{ gap: 'var(--space-4)' }}>
                <div className="flex-shrink-0 w-2 h-2 bg-luxury-gold rounded-full mt-3"></div>
                <div>
                  <h4 className="text-lg font-medium text-luxury-white mb-2">
                    European Family
                  </h4>
                  <p className="body-elegant text-luxury-off-white">
                    Children playing, wine cellar with their favorite labels, 
                    multi-generational living moments throughout the home.
                  </p>
                </div>
              </div>

              <div className="flex items-start" style={{ gap: 'var(--space-4)' }}>
                <div className="flex-shrink-0 w-2 h-2 bg-luxury-gold rounded-full mt-3"></div>
                <div>
                  <h4 className="text-lg font-medium text-luxury-white mb-2">
                    Retired Couple
                  </h4>
                  <p className="body-elegant text-luxury-off-white">
                    Golf lifestyle, pets enjoying the space, sunset moments 
                    on the patio with their grandchildren.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="stats-grid"
            >
              <div>
                <div className="text-2xl font-serif font-bold text-luxury-gold">$50M+</div>
                <div className="text-sm text-luxury-off-white">Sales Generated</div>
              </div>
              <div>
                <div className="text-2xl font-serif font-bold text-luxury-gold">98%</div>
                <div className="text-sm text-luxury-off-white">Close Rate</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <Button href="/premium" variant="primary" size="lg" className="btn-grid-lg">
                Explore Premium Tier
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[9/16] max-w-sm mx-auto bg-luxury-black rounded-3xl overflow-hidden shadow-2xl border border-luxury-gold/20">
                <div className="absolute inset-0 bg-gradient-to-b from-luxury-gold/10 to-luxury-black/80 flex items-end justify-center p-8">
                  <div className="text-center text-luxury-white">
                    <div className="w-16 h-16 bg-luxury-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-lg font-medium mb-2">Bespoke Video</p>
                    <p className="text-sm opacity-75">$25M Penthouse</p>
                    <p className="text-xs opacity-60 mt-1">Tailored for Tech CEO</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bg-luxury-gold text-luxury-black rounded-xl shadow-xl callout-grid"
                style={{ 
                  top: 'calc(-1 * var(--space-4))', 
                  right: 'calc(-1 * var(--space-4))',
                  padding: 'var(--space-4)'
                }}
              >
                <div className="text-center">
                  <div className="text-lg font-serif font-bold">7 Days</div>
                  <div className="text-xs font-medium">To Close</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute bg-luxury-white text-luxury-black rounded-xl shadow-xl callout-grid"
                style={{ 
                  bottom: 'calc(-1 * var(--space-4))', 
                  left: 'calc(-1 * var(--space-4))',
                  padding: 'var(--space-4)'
                }}
              >
                <div className="text-center">
                  <div className="text-lg font-serif font-bold">1.2M</div>
                  <div className="text-xs font-medium">Video Views</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumTierPreview; 