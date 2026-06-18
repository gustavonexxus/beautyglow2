import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Section } from './Layout';
import { BRUNA_SERVICES, PHONE_NUMBER } from '../constants';
import { Service } from '../types';
import { formatAmpersand } from '../utils';

export const CatalogSelection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', ...Object.keys(BRUNA_SERVICES)];

  // Message prefix for WhatsApp booking
  const messagePrefix = "Olá, gostaria de agendar meu atendimento personalizado na Beauty Glow!";

  // Get active services
  const getRenderedServices = () => {
    if (activeCategory === 'Todos') {
      return Object.entries(BRUNA_SERVICES);
    }
    return [[activeCategory, BRUNA_SERVICES[activeCategory]]] as [string, Service[]][];
  };

  return (
    <Section id="servicos" className="bg-brand-offwhite">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-gold mb-4 block font-semibold font-sans">Experiências Beauty Glow</span>
        <h2 className="font-serif text-4xl md:text-6xl text-brand-black mb-6 leading-tight">Procedimentos Estéticos</h2>
        <p className="font-light text-brand-black/60 text-base md:text-lg leading-relaxed">
          Protocolos avançados e personalizados focados na harmonia facial e na exaltação da sua beleza natural.
        </p>
      </div>

      {/* Elegant Tab Selector with Smooth Styling in a single row */}
      <div className="w-full max-w-5xl mx-auto mb-16 overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex items-center justify-start md:justify-center gap-2 px-4 pb-2 whitespace-nowrap min-w-max md:min-w-0">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 md:px-7 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer focus:outline-none shrink-0 ${
                  isActive 
                    ? 'text-white' 
                    : 'text-brand-black/70 hover:text-brand-black hover:bg-brand-beige/20'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-brand-gold rounded-full shadow-lg shadow-brand-gold/25"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{formatAmpersand(category)}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Grid & Layout */}
      <div className="space-y-24 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="space-y-20"
          >
            {getRenderedServices().map(([categoryName, items]) => (
              <div key={categoryName} className="space-y-10">
                {activeCategory === 'Todos' && (
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="font-serif text-2xl md:text-3xl text-brand-black font-medium">
                      {formatAmpersand(categoryName)}
                    </h3>
                    <div className="h-px bg-brand-beige flex-grow" />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {items.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group bg-white border border-brand-beige flex flex-col justify-between overflow-hidden hover:border-brand-gold hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-500 rounded-xl"
                    >
                      <div>
                        {service.image && (
                          <div className={`w-full overflow-hidden relative ${service.imageAspect || 'aspect-[4/3]'}`}>
                            <img 
                              src={service.image} 
                              alt={service.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                              style={{ objectPosition: service.imagePosition || 'center' }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                        )}
                        <div className="p-6 md:p-8">
                          <h4 className="font-serif text-lg md:text-xl text-brand-black mb-3 group-hover:text-brand-gold transition-colors duration-300">
                            {service.name}
                          </h4>
                          <p className="text-xs font-light leading-relaxed text-brand-black/60 mb-6">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                        <a
                          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(`${messagePrefix}\n\nGostaria de saber mais ou agendar o seguinte procedimento:\n👉 ${service.name}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 text-center text-xs uppercase tracking-widest bg-brand-black text-white hover:bg-brand-gold py-3.5 px-4 rounded-lg transition-all duration-300 group"
                        >
                          <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.461h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Agendar no WhatsApp
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
};
