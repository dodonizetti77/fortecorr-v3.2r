import { motion } from 'framer-motion';
import { useState } from 'react';
import beforeAfter from '@/assets/before-after.jpg';

export function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);

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
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Transformação
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Antes & <span className="text-gradient-copper">Depois</span>
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
          className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-steel"
        >
          <img
            src={beforeAfter}
            alt="Antes e depois - transformação de corrimão"
            className="w-full h-auto"
          />
          
          {/* Overlay with labels */}
          <div className="absolute inset-0 flex">
            <div className="flex-1 flex items-end p-6">
              <span className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded font-display text-xl">
                ANTES
              </span>
            </div>
            <div className="flex-1 flex items-end justify-end p-6">
              <span className="bg-primary/80 backdrop-blur-sm px-4 py-2 rounded font-display text-xl text-primary-foreground">
                DEPOIS
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-foreground text-xl md:text-2xl font-display">
            "De estrutura comum para <span className="text-gradient-copper">projeto premium</span>"
          </p>
          <p className="text-muted-foreground mt-4">
            Nosso compromisso é entregar excelência em cada detalhe.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
