'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We closed a $12M estate because the buyers saw their life unfolding there. The video didn't just show the property—it told their story.",
      attribution: "Sarah Chen",
      title: "Top Agent, Beverly Hills",
      result: "$12M Sale"
    },
    {
      quote: "Our listing videos from LifeStage AI consistently generate 3x more engagement than traditional photos. It's transformed how we market luxury properties.",
      attribution: "Michael Torres",
      title: "Luxury Specialist, Manhattan",
      result: "300% More Views"
    },
    {
      quote: "The bespoke video for our tech billionaire client was a masterpiece. He saw himself hosting dinner parties in the space and made an offer that same week.",
      attribution: "Jennifer Walsh",
      title: "Principal, Sotheby's International",
      result: "7-Day Close"
    }
  ];

  return (
    <Section background="dark" padding="xl">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="heading-serif text-4xl md:text-5xl lg:text-6xl mb-6"
        >
          They want to{' '}
          <span className="text-luxury-gold">picture themselves there.</span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="gold-accent mx-auto"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            <div className="bg-luxury-white/5 backdrop-blur-sm border border-luxury-gold/20 rounded-2xl p-8 h-full">
              <div className="mb-6">
                <svg className="w-8 h-8 text-luxury-gold mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
                <p className="body-elegant text-lg text-luxury-off-white leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="border-t border-luxury-gold/20 pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-luxury-white">
                      {testimonial.attribution}
                    </div>
                    <div className="text-sm text-luxury-off-white">
                      {testimonial.title}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-serif font-bold text-luxury-gold">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="text-center mt-16"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-luxury-gold mb-2">$127M</div>
              <div className="text-sm text-luxury-off-white">Total Sales Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-luxury-gold mb-2">89%</div>
              <div className="text-sm text-luxury-off-white">Faster Time to Market</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-luxury-gold mb-2">4.9★</div>
              <div className="text-sm text-luxury-off-white">Agent Satisfaction</div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Testimonials; 