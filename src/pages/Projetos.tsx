import { motion } from 'framer-motion';
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/sections/CTASection';
import detailHandrail from '@/assets/detail-handrail.jpg';
import guardrailGlass from '@/assets/guardrail-glass.jpg';
import spiralStaircase from '@/assets/spiral-staircase.jpg';
import metalStructure from '@/assets/metal-structure.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import beforeAfter from '@/assets/before-after.jpg';

const categories = ['Todos', 'Residencial', 'Comercial', 'Antes e Depois'];

const projects = [
  {
    id: 1,
    title: 'Escada Moderna Residencial',
    category: 'Residencial',
    image: spiralStaircase,
    description: 'Escada caracol em aço carbono com degraus de madeira maciça.',
  },
  {
    id: 2,
    title: 'Guarda-corpo Corporativo',
    category: 'Comercial',
    image: guardrailGlass,
    description: 'Guarda-corpo em vidro e aço inox para edifício comercial.',
  },
  {
    id: 3,
    title: 'Corrimão Premium',
    category: 'Residencial',
    image: detailHandrail,
    description: 'Corrimão em aço inox escovado com acabamento premium.',
  },
  {
    id: 4,
    title: 'Estrutura Gourmet',
    category: 'Residencial',
    image: metalStructure,
    description: 'Pergolado metálico para área de lazer residencial.',
  },
  {
    id: 5,
    title: 'Escada Elegante',
    category: 'Comercial',
    image: heroBg,
    description: 'Escada reta com guarda-corpo em vidro para ambiente corporativo.',
  },
  {
    id: 6,
    title: 'Renovação Completa',
    category: 'Antes e Depois',
    image: beforeAfter,
    description: 'Transformação de corrimão antigo para aço inox moderno.',
  },
];

const Projetos = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              Portfólio
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mt-4 mb-6">
              Nossos <span className="text-gradient-copper">Projetos</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Conheça alguns dos projetos que realizamos. Cada trabalho é uma demonstração 
              do nosso compromisso com a excelência.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="section-container">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-72 rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before After Highlight */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Antes & <span className="text-gradient-copper">Depois</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Veja a transformação que nossos projetos proporcionam.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto rounded-lg overflow-hidden"
          >
            <img
              src={beforeAfter}
              alt="Antes e depois"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Projetos;
