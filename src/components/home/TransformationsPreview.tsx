'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';

const TransformationsPreview = () => {
  const transformations = [
    {
      id: 'laguna',
      title: 'Laguna Beach Oceanfront',
      description: 'From daylight MLS photos to cinematic twilight elegance',
      beforeImage: '/images/laguna-before.jpg',
      afterImage: '/images/laguna-after.jpg',
      features: ['48hr delivery', '4K quality', 'Music included']
    },
    {
      id: 'santa-barbara',
      title: 'Santa Barbara Ranch Estate',
      description: 'Transforming 5 static photos into lifestyle-driven storytelling',
      beforeImage: '/images/santa-barbara-before.jpg',
      afterImage: '/images/santa-barbara-after.jpg',
      features: ['48hr delivery', '4K quality', 'Music included']
    },
    {
      id: 'malibu',
      title: 'Malibu Modern Masterpiece',
      description: 'Architectural beauty meets emotional connection',
      beforeImage: '/images/malibu-before.jpg',
      afterImage: '/images/malibu-after.jpg',
      features: ['48hr delivery', '4K quality', 'Music included']
    }
  ];

  return (
    <section id="transformations" className="relative bg-luxury-black text-luxury-white section-grid">
      <div className="container-grid">
        <div className="text-center" style={{ marginBottom: 'var(--space-16)' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-serif text-4xl md:text-5xl lg:text-6xl text-center"
          >
            It only takes a few{' '}
            <span className="text-luxury-gold">static photos.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gold-accent mx-auto"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="body-elegant text-xl text-luxury-off-white max-w-3xl mx-auto text-center"
          >
            Watch how we transform ordinary listing photos into cinematic experiences 
            that help buyers envision their future.
          </motion.p>
        </div>

        <div className="space-y-grid-xl">
          {transformations.map((transformation, index) => (
            <motion.div
              key={transformation.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`content-grid-2 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-grid-lg ${
                index % 2 === 1 ? 'lg:col-start-2' : ''
              }`}>
                <h3 className="heading-serif text-3xl lg:text-4xl text-luxury-white">
                  {transformation.title}
                </h3>
                
                <p className="body-elegant text-lg text-luxury-off-white">
                  {transformation.description}
                </p>
                
                <div className="flex items-center text-sm text-luxury-gold" style={{ gap: 'var(--space-8)' }}>
                  {transformation.features.map((feature) => (
                    <div key={feature} className="flex items-center" style={{ gap: 'var(--space-2)' }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <BeforeAfterSlider
                  beforeImage={transformation.beforeImage}
                  afterImage={transformation.afterImage}
                  beforeAlt={`${transformation.title} before`}
                  afterAlt={`${transformation.title} after`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
          style={{ marginTop: 'var(--space-16)' }}
        >
          <Button href="/transformations" variant="primary" size="lg" className="btn-grid-lg">
            View Full Gallery
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationsPreview; 