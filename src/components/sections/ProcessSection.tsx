import { motion } from 'framer-motion';
import { Ruler, PenTool, Factory, Shield } from 'lucide-react';

const steps = [
  {
    icon: Ruler,
    number: '01',
    title: 'Análise e Medição',
    description: 'Visita técnica para avaliação do local e levantamento preciso das medidas.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Projeto Sob Medida',
    description: 'Desenvolvimento do projeto exclusivo com todas as especificações técnicas.',
  },
  {
    icon: Factory,
    number: '03',
    title: 'Fabricação Especializada',
    description: 'Produção em nossa oficina com materiais de primeira linha e controle de qualidade.',
  },
  {
    icon: Shield,
    number: '04',
    title: 'Instalação Segura',
    description: 'Montagem profissional com garantia e acabamento impecável.',
  },
];

export function ProcessSection() {
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
            Processo
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Como <span className="text-gradient-copper">Trabalhamos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Do projeto à instalação, cada etapa é executada com excelência 
            para garantir sua total satisfação.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Icon container */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-copper rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
