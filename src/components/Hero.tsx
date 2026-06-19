import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroBg from '../assets/images/luxury_aesthetics_background_1781797851731.jpg';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Premium Ambient Background with Warm Gold Cinematic Overlay */}
      <div className="absolute inset-0 z-0 bg-brand-offwhite">
        <img 
          src={heroBg} 
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-100 scale-100 transition-transform duration-[4000ms] ease-out object-center"
        />
        {/* Soft, glowing luxury filters for maximum premium mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-offwhite/55 via-brand-offwhite/35 to-brand-offwhite/15 mix-blend-normal" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-offwhite/60 via-transparent to-brand-offwhite/20" />
        {/* Ambient gold-colored radial glow in the center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.15)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/75 backdrop-blur-sm border border-brand-gold/20 rounded-full mb-8 shadow-sm"
        >
          <Sparkles size={12} className="text-brand-gold animate-pulse" />
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-brand-black/80 font-medium">
            Clínica de Estética Integrativa e Injetáveis
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-brand-black mb-8 leading-[1.05] tracking-tight"
        >
          Beleza Natural <br />
          <span className="italic font-light text-brand-gold font-serif">de alto padrão.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="max-w-2xl mx-auto font-light text-brand-black/70 text-sm sm:text-base md:text-lg mb-12 leading-relaxed"
        >
          Aqui, a ciência estética une-se ao visagismo facial. Sinta o rejuvenescimento sofisticado com protocolos individualizados para exprimir a sua melhor versão.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#servicos"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group inline-flex items-center gap-4 bg-brand-black text-white px-12 py-5 rounded-full text-xs uppercase tracking-[0.2em] hover:bg-brand-gold hover:shadow-brand-gold/20 transition-all duration-500 shadow-xl font-semibold"
          >
            Conhecer Procedimentos
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
