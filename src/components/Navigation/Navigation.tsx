import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { ThemeToggle } from '../ui/ThemeToggle';
import './Navigation.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="nav-container container">
          <a href="#home" className="nav-logo mono" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>
            <span className="nav-logo-bracket">&lt;</span>
            MF
            <span className="nav-logo-bracket">/&gt;</span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <ThemeToggle />
            <button
              className="nav-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className="mobile-menu-content">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="mobile-menu-link"
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="mono text-primary">0{index + 1}.</span>
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
