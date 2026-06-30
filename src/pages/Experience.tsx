import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Heart, Star, Leaf, UtensilsCrossed, Sun, Music, Users, Wind } from 'lucide-react';

export default function Experience() {
  const { t } = useLanguage();
  
  const icons = [Heart, Star, Leaf, UtensilsCrossed, Sun, Music, Users, Wind];

  return (
    <div className="pt-32 pb-24 w-full">
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] font-sans uppercase tracking-[0.4em] text-sargon-gold mb-4 block"
        >
          {t('experience.subtitle')}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-heading font-light leading-[1.1] mb-8"
        >
          {t('experience.title')}
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t('experience.cards').map((card: any, i: number) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#151515] border border-white/5 p-8 text-center group hover:border-sargon-gold/30 transition-colors duration-300 rounded-sm"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sargon-gold/10 flex items-center justify-center text-sargon-gold group-hover:scale-110 transition-transform duration-500">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-heading text-sargon-white mb-3 tracking-wide">{card.title}</h3>
                <p className="text-sargon-white/50 font-sans text-sm font-light leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Immersive Section */}
      <div className="mt-32 relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-sargon-black/70 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" 
            alt="Atmosphere" 
            className="w-full h-full object-cover" 
            style={{ attachment: 'fixed' }}
            loading="lazy"
          />
        </div>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 mx-auto mb-8 border border-sargon-gold rounded-full flex items-center justify-center">
              <span className="text-4xl font-heading text-sargon-gold">S</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading text-white leading-tight">
              A Symphony of Taste & Tradition
            </h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
