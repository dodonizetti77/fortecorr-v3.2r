import { motion } from 'framer-motion';
import detailWelding from '@/assets/detail-welding.jpg';
import detailPolish from '@/assets/detail-polish.jpg';
import detailFixing from '@/assets/detail-fixing.jpg';
import detailHandrail from '@/assets/detail-handrail.jpg';

const details = [
  {
    title: 'Solda TIG Profissional',
    description: 'Soldagem de precisão que garante resistência e acabamento impecável.',
    image: detailWelding,
  },
  {
    title: 'Polimento Espelhado',
    description: 'Acabamento brilhante ou escovado conforme preferência do projeto.',
    image: detailPolish,
  },
  {
    title: 'Fixação Estrutural',
    description: 'Ancoragem reforçada com parafusos e chumbadores de alta resistência.',
    image: detailFixing,
  },
  {
    title: 'Acabamento Premium',
    description: 'Detalhes refinados que elevam a qualidade visual do projeto.',
    image: detailHandrail,
  },
];

export function DetailsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary text-sm uppercase tracking-widest font-medium">
            Qualidade
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Detalhes que Fazem a <span className="text-gradient-petrol">Diferença</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada etapa do nosso processo é executada com precisão e cuidado, 
            garantindo um resultado final de altíssima qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-secondary transition-colors">
                {detail.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}