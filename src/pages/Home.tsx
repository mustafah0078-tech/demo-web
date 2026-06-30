import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { NavLink } from 'react-router-dom';
import { ChevronRight, Star } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Home() {
  const { t, dir } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-sargon-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
            alt="AURUM Restaurant Interior" 
            className="w-full h-full object-cover scale-105 origin-center animate-[kenburns_20s_ease-out_infinite_alternate]"
          />
        </div>

        <div className="relative z-10 text-center px-6 flex flex-col items-center mt-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[11px] font-sans uppercase tracking-[0.4em] text-sargon-gold mb-4 block"
          >
            {t('hero.subtitle')}
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading text-sargon-white font-light leading-[1.1] mb-8"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sargon-white/60 text-sm max-w-sm mx-auto font-light leading-relaxed mb-12 font-sans"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <NavLink 
              to="/menu" 
              className="border-b border-sargon-gold pb-1 uppercase tracking-[0.2em] text-[12px] hover:text-sargon-gold transition-colors duration-300 w-full sm:w-auto"
            >
              {t('hero.explore')}
            </NavLink>
            <NavLink 
              to="/contact" 
              className="border-b border-transparent pb-1 uppercase tracking-[0.2em] text-[12px] hover:border-sargon-gold transition-colors duration-300 w-full sm:w-auto"
            >
              {t('nav.reserve')}
            </NavLink>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-sargon-gold to-transparent relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white/50"
            />
          </div>
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-24 lg:py-32 bg-[#151515] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="aspect-[3/4] rounded-t-full overflow-hidden border border-sargon-gold/20 p-2"
              >
                <div className="w-full h-full rounded-t-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" alt="Cuisine" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-sargon-gold/10 rounded-full blur-3xl -z-10" />
            </div>

            <div className="flex flex-col items-start text-start">
              <span className="text-sargon-gold tracking-[0.2em] uppercase text-sm mb-4">{t('home.story_title')}</span>
              <h2 className="text-4xl lg:text-5xl font-heading mb-8 leading-tight">{t('hero.subtitle')}</h2>
              <p className="text-sargon-gray-light font-light leading-relaxed mb-10 text-lg">
                {t('home.story_text')}
              </p>
              <NavLink 
                to="/story"
                className="group flex items-center gap-3 text-sargon-gold uppercase tracking-widest text-sm hover:text-white transition-colors"
              >
                {t('home.read_story')}
                <ChevronRight size={18} className={cn("transition-transform group-hover:translate-x-1", dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1 group-hover:translate-x-0' : '')} />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Preview */}
      <section className="py-24 lg:py-32 bg-transparent border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sargon-gold tracking-[0.2em] uppercase text-sm mb-4 block">{t('nav.menu')}</span>
            <h2 className="text-4xl lg:text-5xl font-heading mb-6">{t('home.signature_title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1974&auto=format&fit=crop', title: 'Mixed Grill' },
              { img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=2033&auto=format&fit=crop', title: 'Signature Hummus' },
              { img: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?q=80&w=2070&auto=format&fit=crop', title: 'Baklava' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square overflow-hidden relative mb-6">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <h3 className="text-xl font-heading text-center group-hover:text-sargon-gold transition-colors">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <NavLink to="/menu" className="inline-block border-b border-sargon-gold text-sargon-gold pb-1 uppercase tracking-widest text-sm hover:text-white hover:border-white transition-colors">
              {t('hero.explore')}
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-[#0D0D0D] border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sargon-gold tracking-[0.2em] uppercase text-sm mb-4 block">{t('testimonials.subtitle')}</span>
            <h2 className="text-4xl lg:text-5xl font-heading mb-6">{t('testimonials.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t('testimonials.reviews').map((review: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-[#151515] border border-white/10 p-8 rounded-sm hover:border-sargon-gold/30 transition-colors duration-500 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.2 + j * 0.1 }}
                    >
                      <Star size={16} className="text-sargon-gold fill-sargon-gold" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-sargon-white/80 font-sans font-light leading-relaxed mb-8 flex-1 italic text-sm">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-sargon-gold/20 flex items-center justify-center text-sargon-gold font-heading text-xl">
                    {review.author[0]}
                  </div>
                  <span className="text-sargon-gold font-sans text-[11px] uppercase tracking-widest">{review.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-sargon-gold/5 rounded-full z-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] border border-sargon-gold/5 rounded-full" />
        </div>
      </section>
    </div>
  );
}
