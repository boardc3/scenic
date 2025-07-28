'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

const FinalCTA = () => {
  return (
    <section className="relative bg-luxury-white text-luxury-black section-grid">
      <div className="container-grid">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            Ready to transform{' '}
            <span className="text-luxury-gold">your listings?</span>
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
            className="body-elegant text-xl text-gray-600 max-w-3xl mx-auto text-center"
          >
            Join the luxury agents who are closing deals faster with cinematic storytelling. 
            Get your first demo video and see the difference.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center"
            style={{ gap: 'var(--space-6)', marginBottom: 'var(--space-16)' }}
          >
            <Button href="/contact" variant="primary" size="lg" className="btn-grid-lg">
              Request a Demo Video
            </Button>
            <Button href="/transformations" variant="outline" size="lg" className="btn-grid-lg">
              View Sample Work
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-t border-luxury-gold/20"
            style={{ paddingTop: 'var(--space-12)' }}
          >
            <div className="content-grid-4" style={{ marginBottom: 'var(--space-12)' }}>
              <div className="callout-grid text-center">
                <div className="callout-icon">
                  <svg className="w-8 h-8 text-luxury-gold mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="callout-text text-lg font-medium text-luxury-black">48-Hour Delivery</div>
                <div className="text-sm text-gray-600">From photos to video</div>
              </div>
              
              <div className="callout-grid text-center">
                <div className="callout-icon">
                  <svg className="w-8 h-8 text-luxury-gold mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="callout-text text-lg font-medium text-luxury-black">Unlimited Revisions</div>
                <div className="text-sm text-gray-600">Until you&apos;re satisfied</div>
              </div>
              
              <div className="callout-grid text-center">
                <div className="callout-icon">
                  <svg className="w-8 h-8 text-luxury-gold mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="callout-text text-lg font-medium text-luxury-black">4K Quality</div>
                <div className="text-sm text-gray-600">Professional grade</div>
              </div>
              
              <div className="callout-grid text-center">
                <div className="callout-icon">
                  <svg className="w-8 h-8 text-luxury-gold mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l6-2v13M9 19l-6 2V8l6-2m0 13l6-2M9 6V4a2 2 0 012-2h2a2 2 0 012 2v2M9 6l6-2" />
                  </svg>
                </div>
                <div className="callout-text text-lg font-medium text-luxury-black">Curated Soundtrack</div>
                <div className="text-sm text-gray-600">Mood & atmosphere</div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-lg text-gray-500 italic">
                &ldquo;We&apos;re not staging furniture, we&apos;re staging a vision of their life.&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA; 