'use client';

import { motion } from 'framer-motion';

const WhyItWorks = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Emotional storytelling drives faster offers',
      description: 'Buyers make decisions with their hearts. Our cinematic videos create emotional connections that static photos simply cannot achieve.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Consistent quality for $2M+ listings',
      description: 'Every video maintains the luxury standard your high-end clients expect, with professional cinematography and curated soundtracks.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Delivered in 48 hours from just a few photos',
      description: 'No staging required, no film crews, no scheduling conflicts. Send us 5-10 photos and receive a professional video in 48 hours.'
    }
  ];

  return (
    <section className="relative bg-luxury-off-white section-grid">
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
                className="heading-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-luxury-black"
              >
                We're not staging{' '}
                <span className="text-luxury-gold">furniture.</span>
                <br />
                We're staging a{' '}
                <span className="text-luxury-gold">vision of life</span>{' '}
                in the home.
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="gold-accent"
              />
            </div>

            <div className="space-y-grid-lg">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start"
                  style={{ gap: 'var(--space-4)' }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center text-luxury-gold">
                    {benefit.icon}
                  </div>
                  <div className="space-y-grid">
                    <h3 className="text-xl font-medium text-luxury-black">
                      {benefit.title}
                    </h3>
                    <p className="body-elegant text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="stats-grid"
            >
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-luxury-gold">92%</div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-luxury-gold">45%</div>
                <div className="text-sm text-gray-600">Faster Sales</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-luxury-gold">$12M</div>
                <div className="text-sm text-gray-600">Avg. Sale Price</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[4/3] bg-luxury-black rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 to-luxury-black/60 flex items-center justify-center">
                  <div className="text-center text-luxury-white">
                    <div className="w-20 h-20 bg-luxury-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-lg font-medium">Sample Video Preview</p>
                    <p className="text-sm opacity-75">Beverly Hills Estate</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bg-luxury-white rounded-xl shadow-xl border border-luxury-gold/20 callout-grid"
                style={{ 
                  bottom: 'calc(-1 * var(--space-8))', 
                  right: 'calc(-1 * var(--space-8))',
                  padding: 'var(--space-6)'
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold text-luxury-black">2.3M</div>
                  <div className="text-sm text-gray-600">Views Generated</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute bg-luxury-gold text-luxury-black rounded-xl shadow-xl callout-grid"
                style={{ 
                  top: 'calc(-1 * var(--space-8))', 
                  left: 'calc(-1 * var(--space-8))',
                  padding: 'var(--space-6)'
                }}
              >
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold">18</div>
                  <div className="text-sm font-medium">Days to Sale</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks; 