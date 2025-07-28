'use client';

import { motion } from 'framer-motion';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';

export default function TransformationsPage() {
  const transformations = [
    {
      id: 1,
      title: 'Laguna Beach Oceanfront',
      location: 'Laguna Beach, CA',
      price: '$18.5M',
      beforeImage: '/images/laguna-before.jpg',
      afterImage: '/images/laguna-after.jpg',
      description: 'From static MLS photos to cinematic twilight elegance that captured the romance of oceanfront living and the sophisticated coastal lifestyle buyers dream of.',
      stats: {
        views: '2.8M',
        inquiries: '+340%',
        timeToSale: '12 days'
      }
    },
    {
      id: 2,
      title: 'Santa Barbara Ranch Estate',
      location: 'Santa Barbara, CA',
      price: '$32.0M',
      beforeImage: '/images/santa-barbara-before.jpg',
      afterImage: '/images/santa-barbara-after.jpg',
      description: 'Transforming 5 static photos into lifestyle-driven storytelling that showcased equestrian elegance and multi-generational family gatherings.',
      stats: {
        views: '3.1M',
        inquiries: '+275%',
        timeToSale: '8 days'
      }
    },
    {
      id: 3,
      title: 'Malibu Modern Masterpiece',
      location: 'Malibu, CA',
      price: '$45.0M',
      beforeImage: '/images/malibu-before.jpg',
      afterImage: '/images/malibu-after.jpg',
      description: 'Architectural beauty meets emotional connection in this cinematic journey through modern luxury living with breathtaking Pacific views.',
      stats: {
        views: '5.2M',
        inquiries: '+420%',
        timeToSale: '4 days'
      }
    },
    {
      id: 4,
      title: 'Beverly Hills Penthouse',
      location: 'Beverly Hills, CA',
      price: '$25.0M',
      beforeImage: '/images/laguna-before.jpg', // Reusing for demo
      afterImage: '/images/laguna-after.jpg', // Reusing for demo
      description: 'Sky-high luxury redefined through cinematic storytelling that captured the essence of Beverly Hills sophistication and panoramic city views.',
      stats: {
        views: '4.2M',
        inquiries: '+500%',
        timeToSale: '6 days'
      }
    }
  ];

  return (
    <main className="page-layout">
      {/* Page Header */}
      <section className="relative bg-luxury-black text-luxury-white page-header">
        <div className="container-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6 text-center">
              It only takes{' '}
              <span className="text-luxury-gold">a few photos.</span>
            </h1>
            
            <div className="gold-accent mx-auto" />
            
            <p className="body-elegant text-xl text-luxury-off-white max-w-3xl mx-auto text-center">
              Watch how we transform ordinary listing photos into cinematic experiences 
              that help buyers envision their future. Each video tells a story that goes 
              beyond square footage and features.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="relative bg-luxury-off-white section-grid">
        <div className="container-grid">
          <div className="content-grid-3 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="callout-grid"
            >
              <div className="text-3xl font-serif font-bold text-luxury-gold mb-2">15.3M</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Total Views</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="callout-grid"
            >
              <div className="text-3xl font-serif font-bold text-luxury-gold mb-2">384%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Avg. Inquiry Increase</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="callout-grid"
            >
              <div className="text-3xl font-serif font-bold text-luxury-gold mb-2">7.5</div>
              <div className="text-sm text-gray-600 uppercase tracking-wider">Days Avg. Sale</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Transformations Gallery */}
      <section className="relative bg-luxury-white section-grid">
        <div className="container-grid">
          <div className="space-y-grid-xl">
            {transformations.map((transformation, index) => (
              <motion.div
                key={transformation.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`content-grid-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`space-y-grid-lg ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-grid">
                    <div className="flex items-center text-sm text-luxury-gold" style={{ gap: 'var(--space-4)' }}>
                      <span>{transformation.location}</span>
                      <span>•</span>
                      <span>{transformation.price}</span>
                    </div>
                    
                    <h2 className="heading-serif text-3xl lg:text-4xl text-luxury-black">
                      {transformation.title}
                    </h2>
                    
                    <p className="body-elegant text-lg text-gray-600">
                      {transformation.description}
                    </p>
                  </div>

                  {/* Performance Stats */}
                  <div className="content-grid-3">
                    <div className="callout-grid text-center">
                      <div className="text-2xl font-serif font-bold text-luxury-gold">{transformation.stats.views}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Views</div>
                    </div>
                    <div className="callout-grid text-center">
                      <div className="text-2xl font-serif font-bold text-luxury-gold">{transformation.stats.inquiries}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Inquiries</div>
                    </div>
                    <div className="callout-grid text-center">
                      <div className="text-2xl font-serif font-bold text-luxury-gold">{transformation.stats.timeToSale}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Sale Time</div>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-luxury-gold" style={{ gap: 'var(--space-6)' }}>
                    <div className="flex items-center" style={{ gap: 'var(--space-2)' }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">48hr delivery</span>
                    </div>
                    <div className="flex items-center" style={{ gap: 'var(--space-2)' }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">4K quality</span>
                    </div>
                    <div className="flex items-center" style={{ gap: 'var(--space-2)' }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">Music included</span>
                    </div>
                  </div>
                </div>

                {/* Before/After Slider */}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-luxury-black text-luxury-white section-grid">
        <div className="container-grid">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-6"
            >
              Ready to transform{' '}
              <span className="text-luxury-gold">your listings?</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="body-elegant text-xl text-luxury-off-white mb-8 max-w-2xl mx-auto text-center"
            >
              Join the luxury agents who are closing deals faster with cinematic storytelling.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center"
              style={{ gap: 'var(--space-6)' }}
            >
              <a 
                href="/contact"
                className="btn-grid-lg bg-luxury-gold text-luxury-black hover:bg-luxury-gold-light transition-luxury"
              >
                Request Demo Video
              </a>
              <a 
                href="/pricing"
                className="btn-grid-lg border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-luxury"
              >
                View Pricing
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 