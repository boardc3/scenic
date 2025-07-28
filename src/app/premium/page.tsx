'use client';

import { motion } from 'framer-motion';

export default function PremiumPage() {
  const scenarios = [
    {
      title: 'Tech Founder',
      description: 'Includes his yacht, home office, and family lifestyle integrated into the property video.',
      details: 'We worked with this client to showcase how the home office overlooked the water, perfect for virtual meetings, while the yacht slip made entertaining effortless.',
      image: '/images/tech-founder.jpg'
    },
    {
      title: 'European Family',
      description: 'Children playing, wine cellar with their favorite labels, multi-generational living moments.',
      details: 'The narrative focused on family traditions, with scenes of children in the playroom while grandparents enjoyed the terrace, all connected by the home\'s flowing layout.',
      image: '/images/european-family.jpg'
    },
    {
      title: 'Retired Couple',
      description: 'Golf, pets, sunset moments on the patio.',
      details: 'We created a story around their daily rituals: morning coffee on the veranda, their dog running in the yard, and evening wine as the sun set over the golf course.',
      image: '/images/retired-couple.jpg'
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
            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
              The ultimate differentiator:{' '}
              <span className="text-luxury-gold">bespoke buyer-specific videos.</span>
            </h1>
            
            <div className="gold-accent mx-auto" />
            
            <p className="body-elegant text-xl text-luxury-off-white max-w-3xl mx-auto">
              Modeled after the buyer's life, these videos help close life-changing deals. 
              When standard luxury isn't enough, premium tier delivers the impossible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Video Example */}
      <section className="relative bg-luxury-off-white section-grid">
        <div className="container-grid">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative bg-luxury-black rounded-lg overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto">
              <img 
                src="/images/premium-hero.jpg" 
                alt="Premium bespoke video example"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-luxury-gold/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-luxury-gold transition-luxury">
                  <svg className="w-8 h-8 text-luxury-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-serif text-luxury-white mb-2">$45M Malibu Estate</h3>
                <p className="text-luxury-off-white">Bespoke video for tech entrepreneur with private helicopter pad</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="relative bg-luxury-white section-grid">
        <div className="container-grid">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-6"
            >
              Three{' '}
              <span className="text-luxury-gold">scenarios</span>
            </motion.h2>
            
            <div className="gold-accent mx-auto" />
            
            <p className="body-elegant text-xl text-gray-600 max-w-3xl mx-auto">
              Each premium video is uniquely crafted around the specific buyer's lifestyle, 
              creating an emotional connection that standard marketing cannot achieve.
            </p>
          </div>

          <div className="space-y-grid-xl">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={scenario.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`content-grid-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={`space-y-grid-lg ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-grid">
                    <h3 className="heading-serif text-3xl lg:text-4xl text-luxury-black">
                      {scenario.title}
                    </h3>
                    
                    <p className="body-elegant text-lg text-gray-600">
                      {scenario.description}
                    </p>
                    
                    <p className="text-base text-gray-500 italic">
                      {scenario.details}
                    </p>
                  </div>

                  <div className="callout-grid bg-luxury-gold/5">
                    <h4 className="text-lg font-medium text-luxury-black mb-3">
                      What makes this different?
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start" style={{ gap: 'var(--space-2)' }}>
                        <svg className="w-4 h-4 text-luxury-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Deep buyer consultation and lifestyle analysis</span>
                      </li>
                      <li className="flex items-start" style={{ gap: 'var(--space-2)' }}>
                        <svg className="w-4 h-4 text-luxury-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Custom narrative development and storyboarding</span>
                      </li>
                      <li className="flex items-start" style={{ gap: 'var(--space-2)' }}>
                        <svg className="w-4 h-4 text-luxury-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Personalized visual elements and lifestyle integration</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="aspect-video bg-luxury-black/5 rounded-lg overflow-hidden">
                    <img 
                      src={scenario.image} 
                      alt={`${scenario.title} lifestyle`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-luxury-black text-luxury-white section-grid">
        <div className="container-grid">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-6"
            >
              Our{' '}
              <span className="text-luxury-gold">process</span>
            </motion.h2>
            
            <div className="gold-accent mx-auto" />
            
            <p className="body-elegant text-xl text-luxury-off-white max-w-2xl mx-auto">
              Creating bespoke videos requires deep collaboration and understanding. 
              Here's how we bring your buyer's vision to life.
            </p>
          </div>

          <div className="content-grid-4">
            {[
              {
                step: '01',
                title: 'Buyer Discovery',
                description: 'Deep dive consultation to understand lifestyle, preferences, and emotional triggers'
              },
              {
                step: '02', 
                title: 'Story Development',
                description: 'Custom narrative creation that weaves the buyer\'s life into the property\'s story'
              },
              {
                step: '03',
                title: 'Cinematic Production',
                description: 'Advanced filming techniques with personalized visual elements and staging'
              },
              {
                step: '04',
                title: 'Delivery & Refinement',
                description: 'Collaborative review process with unlimited revisions until perfect'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="callout-grid text-center"
              >
                <div className="text-4xl font-serif font-bold text-luxury-gold mb-4">{step.step}</div>
                <h3 className="text-xl font-medium text-luxury-white mb-3">{step.title}</h3>
                <p className="text-luxury-off-white">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-luxury-off-white section-grid">
        <div className="container-grid">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-6"
            >
              Contact us for{' '}
              <span className="text-luxury-gold">premium tier details</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="body-elegant text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Bespoke videos require a detailed consultation to understand your buyer and create 
              the perfect narrative. Pricing starts at $5,000 per video.
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
                Inquire Now
              </a>
              <a 
                href="/transformations"
                className="btn-grid-lg border-2 border-luxury-gold text-luxury-black hover:bg-luxury-gold hover:text-luxury-black transition-luxury"
              >
                View Sample Work
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 