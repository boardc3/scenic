'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-luxury-white">
      <div className="container-grid footer-grid">
        <div className="footer-content">
          {/* Brand */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-grid-lg"
            >
              <h3 className="text-2xl font-serif font-bold">LifeStage AI</h3>
              <p className="body-elegant text-luxury-off-white max-w-md">
                Transforming real estate listings with cinematic videos that help buyers 
                picture themselves living in the home.
              </p>
            </motion.div>
            
            <div className="flex footer-links" style={{ marginTop: 'var(--space-6)' }}>
              <Link 
                href="#" 
                className="text-luxury-gold hover:text-luxury-gold-light transition-luxury"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </Link>
              <Link 
                href="#" 
                className="text-luxury-gold hover:text-luxury-gold-light transition-luxury"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium text-luxury-gold" style={{ marginBottom: 'var(--space-6)' }}>Services</h4>
            <ul className="footer-links flex flex-col">
              <li>
                <Link 
                  className="text-luxury-off-white hover:text-luxury-gold transition-luxury" 
                  href="/transformations"
                >
                  Transformations
                </Link>
              </li>
              <li>
                <Link 
                  className="text-luxury-off-white hover:text-luxury-gold transition-luxury" 
                  href="/premium"
                >
                  Premium Tier
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium text-luxury-gold" style={{ marginBottom: 'var(--space-6)' }}>Company</h4>
            <ul className="footer-links flex flex-col">
              <li>
                <Link 
                  className="text-luxury-off-white hover:text-luxury-gold transition-luxury" 
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  className="text-luxury-off-white hover:text-luxury-gold transition-luxury" 
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-medium text-luxury-gold" style={{ marginBottom: 'var(--space-6)' }}>Legal</h4>
            <ul className="footer-links flex flex-col">
              <li>
                <Link 
                  className="text-luxury-off-white hover:text-luxury-gold transition-luxury" 
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  className="text-luxury-off-white hover:text-luxury-gold transition-luxury" 
                  href="/terms"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-luxury-off-white"
          >
            © {new Date().getFullYear()} LifeStage AI. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-luxury-off-white"
            style={{ marginTop: 'var(--space-4)' }}
          >
            Staging visions, not just furniture.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 