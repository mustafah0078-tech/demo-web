import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, Clock, MessageSquare, Map, Mail } from 'lucide-react';

export default function Contact() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-32 pb-24 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sargon-gold tracking-[0.2em] uppercase text-sm mb-4 block"
          >
            {t('contact.subtitle')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-heading luxury-gradient mb-8"
          >
            {t('contact.title')}
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 shrink-0 rounded-full border border-sargon-gold/30 flex items-center justify-center text-sargon-gold">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading text-sargon-white mb-2 uppercase tracking-widest">Address</h3>
                <p className="text-sargon-white/60 font-sans text-sm font-light leading-relaxed max-w-sm">{t('contact.address')}</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-[11px] text-sargon-gold hover:text-white uppercase tracking-[0.2em] transition-colors font-sans">
                  <Map size={16} /> {t('contact.get_directions')}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 shrink-0 rounded-full border border-sargon-gold/30 flex items-center justify-center text-sargon-gold">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading text-sargon-white mb-2 uppercase tracking-widest">Reservations</h3>
                <p className="text-sargon-white/60 font-sans text-sm font-light leading-relaxed">{t('contact.phone')}</p>
                <div className="flex gap-6 mt-4">
                  <a href={`tel:${t('contact.phone').replace(/\s/g, '')}`} className="inline-flex items-center gap-2 text-[11px] text-sargon-gold hover:text-white uppercase tracking-[0.2em] transition-colors font-sans">
                    <Phone size={16} /> {t('contact.call')}
                  </a>
                  <a href={`https://wa.me/${t('contact.phone').replace(/\+| /g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[11px] text-sargon-gold hover:text-white uppercase tracking-[0.2em] transition-colors font-sans">
                    <MessageSquare size={16} /> {t('contact.whatsapp')}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 shrink-0 rounded-full border border-sargon-gold/30 flex items-center justify-center text-sargon-gold">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading text-sargon-white mb-2 uppercase tracking-widest">{language === 'en' ? 'Email' : 'البريد الإلكتروني'}</h3>
                <p className="text-sargon-white/60 font-sans text-sm font-light leading-relaxed">{t('contact.email')}</p>
                <a href={`mailto:${t('contact.email')}`} className="inline-flex items-center gap-2 mt-4 text-[11px] text-sargon-gold hover:text-white uppercase tracking-[0.2em] transition-colors font-sans">
                  <Mail size={16} /> {language === 'en' ? 'Send Email' : 'إرسال بريد إلكتروني'}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 shrink-0 rounded-full border border-sargon-gold/30 flex items-center justify-center text-sargon-gold">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-heading text-sargon-white mb-2 uppercase tracking-widest">Opening Hours</h3>
                <p className="text-sargon-white/60 font-sans text-sm font-light leading-relaxed">{t('contact.hours')}</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#080808] border border-white/5 p-8 md:p-12"
          >
            <h3 className="text-2xl font-heading text-white mb-8 uppercase tracking-widest">Send an Inquiry</h3>
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-sargon-white/50 mb-2">{t('contact.form.name')}</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-sans text-sm focus:outline-none focus:border-sargon-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-sargon-white/50 mb-2">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-sans text-sm focus:outline-none focus:border-sargon-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-sargon-white/50 mb-2">{t('contact.form.message')}</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-2 text-white font-sans text-sm focus:outline-none focus:border-sargon-gold transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="mt-4 border border-sargon-gold text-sargon-gold py-4 uppercase tracking-[0.2em] text-[11px] font-sans hover:bg-sargon-gold hover:text-sargon-black transition-colors duration-300"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Maps Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 h-[400px] bg-[#151515] border border-white/10 relative flex items-center justify-center overflow-hidden rounded-sm"
        >
          <div className="absolute inset-0 bg-sargon-black/80 z-10 flex items-center justify-center backdrop-blur-sm">
            <p className="text-sargon-gold uppercase tracking-widest flex items-center gap-2 font-sans text-xs">
              <MapPin size={16} />
              Interactive Map Placeholder
            </p>
          </div>
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 grayscale" alt="Map Preview" loading="lazy" />
        </motion.div>
      </div>
    </div>
  );
}
