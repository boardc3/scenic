'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  const values = [
    {
      title: 'Emotional Storytelling',
      description: 'We believe homes are bought with hearts, not spreadsheets. Every video tells a story that helps buyers envision their future.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Luxury Standards',
      description: 'Every detail matters in luxury real estate. Our videos maintain the highest production standards to match your premium listings.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: 'Agent Partnership',
      description: 'We\'re not just a service provider—we\'re your creative partner in closing deals faster and commanding higher prices.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <main className="page-layout">
      {/* Page Header */}
      <section className="relative bg-luxury-black text-luxury-white page-header">
        <div className="container-grid">
          <div className="content-grid-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-grid-xl"
            >
              <div className="space-y-grid-lg">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="heading-display text-4xl md:text-5xl lg:text-6xl leading-tight"
                >
                  Staging the{' '}
                  <span className="text-luxury-gold">life</span>{' '}
                  buyers dream of.
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="gold-accent"
                />
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="body-elegant text-xl text-luxury-off-white"
                >
                  Our mission is to help buyers picture themselves in the homes they view. 
                  We blend cutting-edge technology with masterful storytelling to transform 
                  $2M+ listings into emotional experiences.
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-square bg-luxury-gold/10 rounded-2xl overflow-hidden shadow-2xl border border-luxury-gold/20">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 to-luxury-black/60 flex items-center justify-center">
                  <div className="text-center text-luxury-white">
                    <div className="w-20 h-20 bg-luxury-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-lg font-medium">Our Story</p>
                    <p className="text-sm opacity-75">Behind the Scenes</p>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bg-luxury-gold text-luxury-black rounded-xl shadow-xl callout-grid"
                style={{ 
                  bottom: 'calc(-1 * var(--space-6))', 
                  right: 'calc(-1 * var(--space-6))',
                  padding: 'var(--space-4)'
                }}
              >
                <div className="text-center">
                  <div className="text-xl font-serif font-bold">2019</div>
                  <div className="text-xs font-medium">Founded</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative bg-luxury-off-white section-grid">
        <div className="container-grid">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-6"
            >
              Our{' '}
              <span className="text-luxury-gold">values</span>
            </motion.h2>
            
            <div className="gold-accent mx-auto" />
            
            <p className="body-elegant text-xl text-gray-600 max-w-3xl mx-auto">
              Everything we do is guided by these core principles that have made us 
              the trusted partner for luxury real estate professionals.
            </p>
          </div>

          <div className="content-grid-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="callout-grid text-center bg-luxury-white"
              >
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-xl flex items-center justify-center text-luxury-gold mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-luxury-black mb-4">
                  {value.title}
                </h3>
                <p className="body-elegant text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative bg-luxury-white section-grid">
        <div className="container-grid">
          <div className="content-grid-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-grid-lg"
            >
              <h2 className="heading-serif text-3xl md:text-4xl lg:text-5xl">
                Technology meets{' '}
                <span className="text-luxury-gold">storytelling</span>
              </h2>
              
              <div className="space-y-grid">
                <p className="body-elegant text-lg text-gray-600">
                  Founded in 2019 by former Hollywood producers and luxury real estate professionals, 
                  LifeStage AI was born from a simple observation: buyers make emotional decisions, 
                  not logical ones.
                </p>
                
                <p className="body-elegant text-lg text-gray-600">
                  We discovered that traditional real estate photography was falling short in 
                  the luxury market. Static images couldn&apos;t capture the feeling of coming home 
                  after a long day, or the joy of entertaining friends on a sunset terrace.
                </p>
                
                <p className="body-elegant text-lg text-gray-600">
                  Today, we&apos;ve transformed over 2,000 luxury listings and generated more than 
                  $500M in sales for our agent partners. But our mission remains the same: 
                  helping buyers see not just a house, but their future home.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="stats-grid">
                <div className="callout-grid text-center bg-luxury-black text-luxury-white">
                  <div className="text-3xl font-serif font-bold text-luxury-gold mb-2">2,000+</div>
                  <div className="text-sm text-luxury-off-white">Properties Transformed</div>
                </div>
                
                <div className="callout-grid text-center bg-luxury-gold text-luxury-black">
                  <div className="text-3xl font-serif font-bold mb-2">$500M+</div>
                  <div className="text-sm font-medium">Sales Generated</div>
                </div>
                
                <div className="callout-grid text-center bg-luxury-off-white">
                  <div className="text-3xl font-serif font-bold text-luxury-gold mb-2">48hrs</div>
                  <div className="text-sm text-gray-600">Average Delivery</div>
                </div>
                
                <div className="callout-grid text-center bg-luxury-white border border-luxury-gold/20">
                  <div className="text-3xl font-serif font-bold text-luxury-gold mb-2">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
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
              Ready to see the{' '}
              <span className="text-luxury-gold">difference?</span>
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
                Get Started
              </a>
              <a 
                href="/transformations"
                className="btn-grid-lg border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-luxury"
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