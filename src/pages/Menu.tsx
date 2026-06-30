import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Search, Star } from 'lucide-react';
import { useState, useMemo, useEffect, useRef } from 'react';
import { categories, menuItems, filters } from '../data/menuData';

export default function Menu() {
  const { t, language, dir } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryScroll, setActiveCategoryScroll] = useState('');
  
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch = 
        item.name[language].toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description[language].toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesFilter = activeFilter === 'all' || item.tags.includes(activeFilter);
      
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter, language]);

  const categoriesWithItems = useMemo(() => {
    return categories.map(cat => ({
      ...cat,
      items: filteredItems.filter(item => item.categoryId === cat.id)
    })).filter(cat => cat.items.length > 0);
  }, [filteredItems]);

  useEffect(() => {
    if (categoriesWithItems.length > 0 && !activeCategoryScroll) {
      setActiveCategoryScroll(categoriesWithItems[0].id);
    }
  }, [categoriesWithItems]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset for sticky header

      let currentActive = '';
      for (const cat of categoriesWithItems) {
        const element = categoryRefs.current[cat.id];
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentActive = cat.id;
            break;
          }
        }
      }
      
      if (currentActive && currentActive !== activeCategoryScroll) {
        setActiveCategoryScroll(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [categoriesWithItems, activeCategoryScroll]);

  const scrollToCategory = (categoryId: string) => {
    const element = categoryRefs.current[categoryId];
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen w-full flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-6 text-center mb-16 w-full">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] font-sans uppercase tracking-[0.4em] text-sargon-gold mb-4 block"
        >
          {t('menu.subtitle')}
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-heading font-light leading-[1.1] mb-12"
        >
          {t('menu.title')}
        </motion.h1>

        {/* Search & Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-8 w-full"
        >
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-sargon-white/40 w-5 h-5" />
            <input 
              type="text" 
              placeholder={t('menu.search')} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#151515] border border-white/10 rounded-full py-3 pl-12 pr-4 text-sargon-white focus:outline-none focus:border-sargon-gold transition-colors font-sans text-sm placeholder:text-sargon-white/30"
              dir="auto"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-[11px] font-sans tracking-[0.1em] uppercase transition-all duration-300 ${
                  activeFilter === filter.id 
                    ? 'bg-sargon-gold text-sargon-black border-sargon-gold' 
                    : 'bg-transparent text-sargon-white border border-white/10 hover:border-sargon-gold hover:text-sargon-gold'
                }`}
              >
                {filter.name[language]}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
        {/* Sticky Category Navigation */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-32 flex flex-col gap-2">
            {categoriesWithItems.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`text-left px-4 py-3 border-l-2 transition-all duration-300 font-heading text-xl tracking-wide ${
                  activeCategoryScroll === cat.id 
                    ? 'border-sargon-gold text-sargon-gold' 
                    : 'border-white/10 text-sargon-gray hover:text-sargon-white hover:border-white/30'
                }`}
                dir={dir}
              >
                {cat.name[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Category Navigation (Horizontal scroll) */}
        <div className="lg:hidden w-full overflow-x-auto scrollbar-hide sticky top-20 z-40 bg-sargon-black/90 backdrop-blur-md py-4 border-b border-white/10 -mx-6 px-6 mb-8">
          <div className="flex gap-6">
            {categoriesWithItems.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`whitespace-nowrap transition-colors font-heading text-lg tracking-wide ${
                  activeCategoryScroll === cat.id 
                    ? 'text-sargon-gold' 
                    : 'text-sargon-gray hover:text-sargon-white'
                }`}
              >
                {cat.name[language]}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="lg:col-span-3 flex flex-col gap-16">
          {categoriesWithItems.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-8 border border-sargon-gold/30 rounded-full flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-dashed border-sargon-gold/50 flex items-center justify-center text-sargon-gold text-2xl font-heading font-light">
                  S
                </div>
              </div>
              <p className="text-sargon-white/60 font-sans font-light text-sm leading-relaxed">
                {t('menu.empty')}
              </p>
            </motion.div>
          ) : (
            categoriesWithItems.map((cat, catIndex) => (
              <motion.div 
                key={cat.id}
                ref={(el) => (categoryRefs.current[cat.id] = el)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-heading text-sargon-white">{cat.name[language]}</h2>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-sargon-gold/50 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <AnimatePresence mode="popLayout">
                    {cat.items.map((item, index) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        key={item.id}
                        className={`group relative bg-[#151515] rounded-xl overflow-hidden border border-white/5 hover:border-sargon-gold/30 transition-all duration-500 hover:shadow-2xl hover:shadow-sargon-gold/5 ${
                          item.isSignature ? 'md:col-span-2 flex flex-col md:flex-row' : 'flex flex-col'
                        }`}
                      >
                        <div className={`relative overflow-hidden ${item.isSignature ? 'md:w-2/5 h-64 md:h-auto' : 'h-56'}`}>
                          <div className="absolute inset-0 bg-sargon-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                          <img 
                            src={item.image} 
                            alt={item.name[language]} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          {item.isSignature && (
                            <div className="absolute top-4 left-4 z-20 bg-sargon-gold/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                              <Star size={12} className="text-sargon-black fill-sargon-black" />
                              <span className="text-[9px] uppercase tracking-widest text-sargon-black font-semibold font-sans">{t('menu.chef_recommendation')}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className={`p-6 md:p-8 flex flex-col justify-center flex-1 ${item.isSignature ? 'md:w-3/5' : ''}`}>
                          <div className="flex justify-between items-start gap-4 mb-3">
                            <h3 className={`font-heading text-sargon-gold transition-colors ${item.isSignature ? 'text-3xl' : 'text-xl md:text-2xl'}`}>
                              {item.name[language]}
                            </h3>
                            <span className="font-sans text-sargon-white font-medium whitespace-nowrap pt-1">
                              {item.price} <span className="text-[10px] text-sargon-gray-light">{t('menu.aed')}</span>
                            </span>
                          </div>
                          <p className="text-sargon-white/60 font-sans text-sm font-light leading-relaxed mb-6">
                            {item.description[language]}
                          </p>
                          <div className="mt-auto">
                            <div className="h-[1px] w-full bg-gradient-to-r from-sargon-gold/20 via-sargon-gold/5 to-transparent group-hover:from-sargon-gold/50 transition-colors duration-500"></div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
