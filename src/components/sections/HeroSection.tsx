import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Escada metálica premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative section-container pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/30 border border-accent/50 rounded-full text-foreground text-sm font-medium">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Estruturas Metálicas de Alto Padrão
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground leading-[0.95] mb-6"
          >
            Projetos em Aço e Metal que{' '}
            <span className="text-gradient-petrol">Elevam o Padrão</span> da Sua Obra
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            Corrimãos, guarda-corpos e estruturas metálicas sob medida. 
            Transformamos seu projeto em realidade com acabamento premium e segurança garantida.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="https://wa.me/554341415076?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20de%20contato%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="hero" size="xl" className="w-full">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <Link to="/projetos">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                <Play className="w-5 h-5" />
                Ver Projetos
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-muted-foreground text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-secondary rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
