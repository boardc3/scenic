'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

const PricingPreview = () => {
  return (
    <Section background="light" padding="lg">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-serif text-4xl md:text-5xl mb-6"
        >
          Simple pricing,{' '}
          <span className="text-luxury-gold">scalable for brokerages</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="gold-accent mx-auto mb-8"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="body-elegant text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          From individual listings to enterprise solutions, we scale with your business needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-8 border border-luxury-gold/20 rounded-xl hover:shadow-lg transition-luxury"
          >
            <div className="mb-6">
              <div className="text-4xl font-serif font-bold text-luxury-gold mb-2">$500</div>
              <div className="text-sm text-gray-600">per listing</div>
            </div>
            <h3 className="text-xl font-medium mb-4">Individual Listing</h3>
            <p className="body-elegant text-gray-600">
              Perfect for trying our service or occasional high-end listings
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center p-8 border-2 border-luxury-gold rounded-xl bg-luxury-gold/5 hover:shadow-lg transition-luxury"
          >
            <div className="mb-6">
              <div className="text-4xl font-serif font-bold text-luxury-gold mb-2">$4,500</div>
              <div className="text-sm text-gray-600">per month</div>
            </div>
            <h3 className="text-xl font-medium mb-4">Professional Tier</h3>
            <p className="body-elegant text-gray-600">
              Up to 10 listings per month with priority support
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center p-8 border border-luxury-gold/20 rounded-xl hover:shadow-lg transition-luxury"
          >
            <div className="mb-6">
              <div className="text-4xl font-serif font-bold text-luxury-gold mb-2">$10,000</div>
              <div className="text-sm text-gray-600">per month</div>
            </div>
            <h3 className="text-xl font-medium mb-4">Enterprise</h3>
            <p className="body-elegant text-gray-600">
              Up to 25 listings per month with dedicated account management
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <Button href="/pricing" variant="primary" size="lg">
            See Full Pricing Details
          </Button>
          
          <p className="text-sm text-gray-500">
            All plans include 48-hour delivery, 4K quality, and unlimited revisions
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default PricingPreview; 