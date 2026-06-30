import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function OurStory() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 w-full">
      <div className="max-w-4xl mx-auto px-6 text-center mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sargon-gold tracking-[0.2em] uppercase text-sm mb-4 block"
        >
          {t('story.subtitle')}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-heading luxury-gradient mb-8"
        >
          {t('story.title')}
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop" alt="Restaurant Story" className="w-full h-auto rounded-sm" loading="lazy" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 space-y-6 text-sargon-white/70 font-sans font-light leading-relaxed text-sm"
        >
          <p>{t('story.content1')}</p>
          <p>{t('story.content2')}</p>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-sargon-white/70 font-sans font-light leading-relaxed text-sm"
        >
          <p>{t('story.content3')}</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://images.unsplash.com/photo-1542314831-c6a4d27d66f6?q=80&w=2070&auto=format&fit=crop" alt="Spices" className="w-full h-[500px] object-cover rounded-sm" loading="lazy" />
        </motion.div>
      </div>
    </div>
  );
}
