'use client';

import { motion } from 'framer-motion';

export default function PricingPage() {
  const plans = [
    {
      title: 'Per Listing',
      price: '$500',
      period: 'per listing',
      description: 'Perfect for trying our service or occasional high-end listings',
      features: [
        'One cinematic video per listing',
        '48-hour delivery',
        '4K quality production',
        'Curated soundtrack',
        'Unlimited revisions',
        'Multiple format delivery'
      ],
      popular: false
    },
    {
      title: 'Professional Tier',
      price: '$4,500',
      period: 'per month',
      description: 'Ideal for active luxury agents with consistent listings',
      features: [
        'Up to 10 listings per month',
        'Priority 24-hour delivery',
        '4K quality production',
        'Curated soundtrack',
        'Unlimited revisions',
        'Multiple format delivery',
        'Priority customer support',
        'Monthly strategy consultation'
      ],
      popular: true
    },
    {
      title: 'Enterprise',
      price: '$10,000',
      period: 'per month',
      description: 'For high-volume brokerages and luxury teams',
      features: [
        'Up to 25 listings per month',
        'Priority 24-hour delivery',
        '4K quality production',
        'Curated soundtrack',
        'Unlimited revisions',
        'Multiple format delivery',
        'Dedicated account manager',
        'Weekly strategy sessions',
        'Custom branding options',
        'Team training included'
      ],
      popular: false
    }
  ];

  return (
    <main className="page-layout">
      {/* Page Header */}
      <section className="relative bg-luxury-black text-luxury-white page-header">
        <div className="container-grid">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              Simple pricing,{' '}
              <span className="text-luxury-gold">scalable for brokerages.</span>
            </motion.h1>
            
            <div className="gold-accent mx-auto" />
            
            <p className="body-elegant text-xl text-luxury-off-white max-w-3xl mx-auto">
              Choose the plan that fits your business. No hidden fees, no long-term contracts. 
              Just exceptional videos that help you close more deals.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="relative bg-luxury-off-white section-grid">
        <div className="container-grid">
          <div className="content-grid-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`callout-grid text-center relative ${
                  plan.popular 
                    ? 'bg-luxury-black text-luxury-white border-2 border-luxury-gold' 
                    : 'bg-luxury-white border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-luxury-gold text-luxury-black px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="space-y-grid-lg">
                  <div>
                    <h3 className={`text-2xl font-medium mb-2 ${plan.popular ? 'text-luxury-white' : 'text-luxury-black'}`}>
                      {plan.title}
                    </h3>
                    <div className="flex items-baseline justify-center" style={{ gap: 'var(--space-2)' }}>
                      <span className={`text-4xl font-serif font-bold ${plan.popular ? 'text-luxury-gold' : 'text-luxury-black'}`}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ${plan.popular ? 'text-luxury-off-white' : 'text-gray-600'}`}>
                        {plan.period}
                      </span>
                    </div>
                    <p className={`text-sm mt-2 ${plan.popular ? 'text-luxury-off-white' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-grid text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start" style={{ gap: 'var(--space-3)' }}>
                        <svg 
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-luxury-gold' : 'text-luxury-gold'}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className={`text-sm ${plan.popular ? 'text-luxury-off-white' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`btn-grid-lg w-full ${
                      plan.popular 
                        ? 'bg-luxury-gold text-luxury-black hover:bg-luxury-gold-light' 
                        : 'border-2 border-luxury-gold text-luxury-black hover:bg-luxury-gold hover:text-luxury-black'
                    } transition-luxury`}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Tier CTA */}
      <section className="relative bg-luxury-black text-luxury-white section-grid">
        <div className="container-grid">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-6"
            >
              Premium{' '}
              <span className="text-luxury-gold">bespoke tier</span>
            </motion.h2>
            
            <div className="gold-accent mx-auto" />
            
            <p className="body-elegant text-xl text-luxury-off-white mb-8 max-w-2xl mx-auto">
              For the ultimate differentiator, our premium tier creates buyer-specific videos 
              modeled after your client&apos;s lifestyle. Pricing starts at $5,000 per video.
            </p>
            
            <div className="callout-grid bg-luxury-gold/10 border border-luxury-gold/20 mb-8">
              <div className="content-grid-3 text-center">
                <div>
                  <div className="text-2xl font-serif font-bold text-luxury-gold mb-1">98%</div>
                  <div className="text-sm text-luxury-off-white">Close Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-luxury-gold mb-1">$50M+</div>
                  <div className="text-sm text-luxury-off-white">Sales Generated</div>
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-luxury-gold mb-1">5-7</div>
                  <div className="text-sm text-luxury-off-white">Days Delivery</div>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center"
              style={{ gap: 'var(--space-6)' }}
            >
              <a 
                href="/premium"
                className="btn-grid-lg bg-luxury-gold text-luxury-black hover:bg-luxury-gold-light transition-luxury"
              >
                Learn About Premium
              </a>
              <a 
                href="/contact"
                className="btn-grid-lg border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-luxury"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-luxury-white section-grid">
        <div className="container-grid">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-6"
            >
              Frequently asked{' '}
              <span className="text-luxury-gold">questions</span>
            </motion.h2>
            
            <div className="gold-accent mx-auto" />
          </div>

          <div className="content-grid-2 text-left max-w-5xl mx-auto">
            <div className="space-y-grid-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="callout-grid"
              >
                <h3 className="text-lg font-medium text-luxury-black mb-3">
                  What&apos;s included in each plan?
                </h3>
                <p className="text-gray-600">
                  All plans include cinematic video production, 4K quality, curated soundtrack, 
                  unlimited revisions, and delivery in multiple formats suitable for all platforms.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="callout-grid"
              >
                <h3 className="text-lg font-medium text-luxury-black mb-3">
                  How do I upgrade or downgrade my plan?
                </h3>
                <p className="text-gray-600">
                  You can change your plan at any time. Contact our support team and we&apos;ll 
                  handle the transition seamlessly with prorated billing.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="callout-grid"
              >
                <h3 className="text-lg font-medium text-luxury-black mb-3">
                  What if I need more videos than my plan allows?
                </h3>
                <p className="text-gray-600">
                  Additional videos can be purchased at the per-listing rate of $500. 
                  We&apos;ll also help you find the right plan for your volume.
                </p>
              </motion.div>
            </div>

            <div className="space-y-grid-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="callout-grid"
              >
                <h3 className="text-lg font-medium text-luxury-black mb-3">
                  Do you offer contracts or commitments?
                </h3>
                <p className="text-gray-600">
                  No long-term contracts required. Monthly plans can be cancelled anytime 
                  with 30 days notice. Per-listing purchases have no ongoing commitment.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="callout-grid"
              >
                <h3 className="text-lg font-medium text-luxury-black mb-3">
                  How quickly can I get my first video?
                </h3>
                <p className="text-gray-600">
                  Standard delivery is 48 hours. Professional and Enterprise tiers get 
                  priority 24-hour delivery for urgent listings.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="callout-grid"
              >
                <h3 className="text-lg font-medium text-luxury-black mb-3">
                  What photos do you need from me?
                </h3>
                <p className="text-gray-600">
                  Just 5-10 high-quality photos of the property. We handle all the creative 
                  work, music selection, and cinematic effects.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 