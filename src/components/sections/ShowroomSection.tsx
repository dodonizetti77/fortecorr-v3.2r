import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import detailHandrail from '@/assets/detail-handrail.jpg';
import guardrailGlass from '@/assets/guardrail-glass.jpg';
import spiralStaircase from '@/assets/spiral-staircase.jpg';
import metalStructure from '@/assets/metal-structure.jpg';

const projects = [
  {
    title: 'Corrimãos Modernos',
    description: 'Aço inox e ferro com acabamento premium',
    image: detailHandrail,
    link: '/servicos#corrimaos',
  },
  {
    title: 'Guarda-corpos em Aço e Vidro',
    description: 'Design elegante com máxima segurança',
    image: guardrailGlass,
    link: '/servicos#guarda-corpos',
  },
  {
    title: 'Escadas Metálicas',
    description: 'Projetos personalizados e exclusivos',
    image: spiralStaircase,
    link: '/servicos#escadas',
  },
  {
    title: 'Estruturas Especiais',
    description: 'Soluções sob medida em aço',
    image: metalStructure,
    link: '/servicos#estruturas',
  },
];

export function ShowroomSection() {
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
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            Showroom Digital
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
            Conheça Nossa <span className="text-gradient-copper">Especialidade</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada projeto é único. Desenvolvemos soluções em aço e metal que combinam 
            estética, funcionalidade e durabilidade excepcional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={project.link}
                className="group relative block h-80 md:h-96 rounded-lg overflow-hidden metal-shine"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-2 text-primary opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-medium">Ver mais</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-lg transition-colors duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
