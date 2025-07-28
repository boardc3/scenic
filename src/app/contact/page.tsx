'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brokerage: '',
    phone: '',
    message: '',
    service: 'standard'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        brokerage: '',
        phone: '',
        message: '',
        service: 'standard'
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              Let&apos;s{' '}
              <span className="text-luxury-gold">connect</span>
            </h1>
            
            <div className="gold-accent mx-auto" />
            
            <p className="body-elegant text-xl text-luxury-off-white max-w-2xl mx-auto text-center">
              Ready to transform your listings with cinematic videos? 
              We&apos;re here to help you close more deals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative bg-luxury-off-white section-grid">
        <div className="container-grid">
          <div className="content-grid-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-grid-xl"
            >
              <div>
                <h2 className="heading-serif text-3xl lg:text-4xl text-luxury-black">
                  Request a{' '}
                  <span className="text-luxury-gold">demo video</span>
                </h2>
                <p className="body-elegant text-gray-800">
                  Fill out the form below and we&apos;ll get back to you within 24 hours to discuss 
                  your needs and show you what&apos;s possible.
                </p>
              </div>

              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-luxury-gold/10 border border-luxury-gold/20 rounded-lg p-8 text-center"
                >
                  <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-luxury-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">Message sent!</h3>
                  <p className="text-gray-700">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="form-grid">
                  <div className="form-spacing">
                    <div className="content-grid-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="form-field"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="form-field"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="content-grid-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Brokerage
                        </label>
                        <input
                          type="text"
                          name="brokerage"
                          value={formData.brokerage}
                          onChange={handleChange}
                          className="form-field"
                          placeholder="Your brokerage name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-800 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-field"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-field"
                      >
                        <option value="standard">Standard Video Service</option>
                        <option value="subscription">Subscription Plans</option>
                        <option value="premium">Premium Bespoke Videos</option>
                        <option value="enterprise">Enterprise Solutions</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-800 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-field form-textarea"
                        placeholder="Tell us about your needs, upcoming listings, or any questions you have..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="form-button"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-grid-xl"
            >
              <div>
                <h3 className="heading-serif text-2xl lg:text-3xl text-luxury-black">
                  Direct{' '}
                  <span className="text-luxury-gold">contact</span>
                </h3>
                
                <div className="space-y-grid-lg">
                  <div className="callout-grid bg-luxury-white">
                    <div className="flex items-start" style={{ gap: 'var(--space-4)' }}>
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                        <p className="text-gray-700">hello@lifestageai.com</p>
                        <p className="text-sm text-gray-600">Response within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="callout-grid bg-luxury-white">
                    <div className="flex items-start" style={{ gap: 'var(--space-4)' }}>
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                        <p className="text-gray-700">(555) 123-4567</p>
                        <p className="text-sm text-gray-600">Mon-Fri 9AM-6PM PST</p>
                      </div>
                    </div>
                  </div>

                  <div className="callout-grid bg-luxury-white">
                    <div className="flex items-start" style={{ gap: 'var(--space-4)' }}>
                      <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-luxury-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Office</h4>
                        <p className="text-gray-700">Los Angeles, CA</p>
                        <p className="text-sm text-gray-600">Serving luxury markets nationwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="callout-grid bg-luxury-black text-luxury-white">
                <h4 className="text-xl font-medium mb-4">
                  <span className="text-luxury-gold">Premium</span> bespoke services
                </h4>
                <p className="text-luxury-off-white mb-6">
                  For our premium tier and custom enterprise solutions, 
                  schedule a direct consultation with our creative director.
                </p>
                <a 
                  href="mailto:premium@lifestageai.com"
                  className="inline-flex items-center text-luxury-gold hover:text-luxury-gold-light transition-luxury"
                >
                  premium@lifestageai.com
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-luxury-white section-grid">
        <div className="container-grid">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-8"
            >
              Common{' '}
              <span className="text-luxury-gold">questions</span>
            </motion.h2>

            <div className="content-grid-2 text-left">
              <div className="space-y-grid-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="callout-grid"
                >
                  <h3 className="text-lg font-medium text-luxury-black mb-2">
                    How quickly can you deliver?
                  </h3>
                  <p className="text-gray-600">
                    Standard videos are delivered within 48 hours. Premium bespoke videos 
                    typically take 5-7 business days depending on complexity.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="callout-grid"
                >
                  <h3 className="text-lg font-medium text-luxury-black mb-2">
                    What do you need from me?
                  </h3>
                  <p className="text-gray-600">
                    Just 3-5 high-quality photos of the property. We handle the rest, 
                    including music, transitions, and cinematic effects.
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
                  <h3 className="text-lg font-medium text-luxury-black mb-2">
                    Do you offer revisions?
                  </h3>
                  <p className="text-gray-600">
                    Yes, unlimited revisions until you&apos;re completely satisfied. 
                    Your success is our success.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="callout-grid"
                >
                  <h3 className="text-lg font-medium text-luxury-black mb-2">
                    What&apos;s included in pricing?
                  </h3>
                  <p className="text-gray-600">
                    Everything: video creation, music licensing, unlimited revisions, 
                    and multiple format delivery for all platforms.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 