'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './ui/Button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Transformations', href: '/transformations' },
    { name: 'Premium Tier', href: '/premium' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
        isScrolled ? 'bg-luxury-black/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-grid">
        <div className="nav-grid flex items-center justify-between">
          {/* Logo - Center aligned */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-serif font-medium text-luxury-white"
            >
              LifeStage AI
            </motion.div>
          </Link>

          {/* Desktop Navigation - 24px gaps */}
          <div className="hidden md:flex items-center nav-links">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-base font-medium tracking-wide transition-luxury ${
                  pathname === item.href
                    ? 'text-luxury-gold'
                    : 'text-luxury-white hover:text-luxury-gold'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-luxury-gold"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Grid spacing */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="hidden md:inline-block btn-grid"
            >
              Request Demo Video
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-luxury-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Stacked center alignment */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-luxury-black/95 backdrop-blur-md border-t border-luxury-gold/20"
        >
          <div className="container-grid" style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-6)' }}>
            <div className="space-y-grid text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-lg font-medium transition-luxury ${
                    pathname === item.href
                      ? 'text-luxury-gold'
                      : 'text-luxury-white hover:text-luxury-gold'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-luxury-gold/20" style={{ paddingTop: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="w-full btn-grid"
                >
                  Request Demo Video
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation; 