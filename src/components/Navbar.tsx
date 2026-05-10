import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, HeartPulse } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Specialities', href: '#specialities' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Appointment', href: '#appointment' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'glass py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <HeartPulse size={24} />
          </div>
          <div>
            <span className="text-xl font-display font-bold block leading-tight text-primary">SAINIK</span>
            <span className="text-xs font-medium tracking-widest uppercase text-secondary">Multispeciality</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+918214242424"
            className="flex items-center gap-2 bg-emergency text-white px-6 py-2.5 rounded-full font-bold hover:bg-emergency/90 transition-all shadow-md shadow-emergency/10 hover:scale-105"
          >
            <span className="animate-pulse w-2 h-2 bg-white rounded-full"></span>
            EMERGENCY CALL
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-600 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+918214242424"
                className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold"
              >
                <Phone size={20} />
                Call Emergency
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
