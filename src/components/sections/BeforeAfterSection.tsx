import { motion } from 'framer-motion';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import beforeHandrail from '@/assets/before-handrail.jpg';
import afterHandrail from '@/assets/after-handrail.jpg';

export function BeforeAfterSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary text-sm uppercase tracking-widest font-medium">
            Transformação
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Antes & <span className="text-gradient-petrol">Depois</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transformamos estruturas comuns em projetos de alto padrão. 
            Veja a diferença que o acabamento premium faz.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <BeforeAfterSlider 
            beforeImage={beforeHandrail}
            afterImage={afterHandrail}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-foreground text-xl md:text-2xl font-display">
            "De estrutura comum para <span className="text-gradient-petrol">projeto premium</span>"
          </p>
          <p className="text-muted-foreground mt-4">
            Nosso compromisso é entregar excelência em cada detalhe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}