import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();

  const images = [
    { src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2', alt: 'Indoor Seating' },
    { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', alt: 'Restaurant Atmosphere' },
    { src: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2033&auto=format&fit=crop', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', alt: 'Mixed Grills' },
    { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-2', alt: 'Outdoor Seating' },
    { src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1974&auto=format&fit=crop', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1', alt: 'Desserts' },
    { src: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1974&auto=format&fit=crop', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1', alt: 'Live Music' },
  ];

  return (
    <div className="pt-32 pb-24 w-full">
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sargon-gold tracking-[0.2em] uppercase text-sm mb-4 block"
        >
          {t('gallery.subtitle')}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-heading luxury-gradient mb-8"
        >
          {t('gallery.title')}
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer rounded-sm ${img.colSpan} ${img.rowSpan}`}
            >
              <div className="absolute inset-0 bg-sargon-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
