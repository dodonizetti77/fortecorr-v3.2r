import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="line-accent mx-auto mb-8" />
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-6">
            Seu Projeto Merece{' '}
            <span className="text-gradient-petrol">Aço de Alto Padrão</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Solicite um orçamento sem compromisso e descubra como podemos 
            transformar seu espaço com estruturas metálicas premium.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <a href="https://wa.me/5543996779289?text=Ol%C3%A1!%20Vim%20pela%20se%C3%A7%C3%A3o%20de%20or%C3%A7amento%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="xl" className="gap-3 text-lg animate-glow-pulse">
                <MessageCircle className="w-6 h-6" />
                Solicitar Orçamento pelo WhatsApp
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>

          <p className="text-muted-foreground text-sm mt-6">
            Resposta rápida • Orçamento gratuito • Atendemos toda a região
          </p>
        </motion.div>
      </div>
    </section>
  );
}