import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.story'), path: '/story' },
    { name: t('nav.menu'), path: '/menu' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.experience'), path: '/experience' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
          isScrolled ? "bg-sargon-black/80 backdrop-blur-[12px] border-b border-white/10 py-6" : "bg-transparent border-b border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="text-3xl lg:text-4xl font-heading text-sargon-white tracking-[0.3em] font-light uppercase">
              AURUM
              <span className="block text-[9px] lg:text-[10px] font-sans tracking-[0.5em] text-sargon-gold mt-1">Downtown Dubai</span>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "text-[11px] tracking-[0.2em] uppercase font-sans font-light transition-colors hover:text-sargon-gold",
                      isActive ? "text-sargon-gold" : "text-sargon-white"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-[12px] font-sans text-sargon-white hover:text-sargon-gold transition-colors uppercase tracking-widest"
              >
                <Globe size={16} />
                {language === 'en' ? 'عربي' : 'EN'}
              </button>
              <NavLink
                to="/contact"
                className="border border-sargon-gold text-sargon-white px-6 py-2 text-[11px] uppercase tracking-widest hover:bg-sargon-gold hover:text-sargon-black transition-all duration-300"
              >
                {t('nav.reserve')}
              </NavLink>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-sargon-white hover:text-sargon-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: dir === 'ltr' ? '100%' : '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir === 'ltr' ? '100%' : '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-sargon-black flex flex-col"
          >
            <div className="flex items-center justify-between p-6">
              <span className="text-2xl font-heading text-sargon-gold tracking-widest uppercase">Sargon</span>
              <button
                className="text-sargon-white hover:text-sargon-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={32} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "text-3xl font-heading tracking-widest uppercase transition-colors",
                        isActive ? "text-sargon-gold" : "text-sargon-white"
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col items-center gap-6 mt-8"
              >
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-lg text-sargon-gray-light uppercase tracking-wider"
                >
                  <Globe size={20} />
                  {language === 'en' ? 'عربي' : 'English'}
                </button>
                <NavLink
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-sargon-gold text-sargon-black px-8 py-3 text-sm uppercase tracking-widest w-full text-center"
                >
                  {t('nav.reserve')}
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
