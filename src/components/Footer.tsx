import { useLanguage } from '../context/LanguageContext';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Clock } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-sargon-black pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-heading text-sargon-white tracking-widest uppercase">
              AURUM
              <span className="block text-xs tracking-[0.3em] text-sargon-gold mt-2">Restaurant</span>
            </h2>
            <p className="text-sargon-gray text-sm leading-relaxed max-w-sm">
              {t('hero.description')}
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-sargon-gold/30 flex items-center justify-center text-sargon-gold hover:bg-sargon-gold hover:text-sargon-black transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-sargon-gold/30 flex items-center justify-center text-sargon-gold hover:bg-sargon-gold hover:text-sargon-black transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-heading text-sargon-gold tracking-widest uppercase mb-2">Explore</h3>
            <nav className="flex flex-col gap-4">
              <NavLink to="/story" className="text-sargon-gray hover:text-sargon-white transition-colors text-sm">{t('nav.story')}</NavLink>
              <NavLink to="/menu" className="text-sargon-gray hover:text-sargon-white transition-colors text-sm">{t('nav.menu')}</NavLink>
              <NavLink to="/gallery" className="text-sargon-gray hover:text-sargon-white transition-colors text-sm">{t('nav.gallery')}</NavLink>
              <NavLink to="/experience" className="text-sargon-gray hover:text-sargon-white transition-colors text-sm">{t('nav.experience')}</NavLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-heading text-sargon-gold tracking-widest uppercase mb-2">Visit Us</h3>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-sargon-gold shrink-0 mt-1" />
              <p className="text-sargon-gray text-sm leading-relaxed">{t('contact.address')}</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-sargon-gold shrink-0" />
              <p className="text-sargon-gray text-sm">{t('contact.phone')}</p>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-heading text-sargon-gold tracking-widest uppercase mb-2">Hours</h3>
            <div className="flex items-start gap-3">
              <Clock size={18} className="text-sargon-gold shrink-0 mt-1" />
              <p className="text-sargon-gray text-sm leading-relaxed">{t('contact.hours')}</p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sargon-gray/60 text-xs">
            &copy; {new Date().getFullYear()} AURUM Restaurant. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sargon-gray/60 hover:text-sargon-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-sargon-gray/60 hover:text-sargon-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
