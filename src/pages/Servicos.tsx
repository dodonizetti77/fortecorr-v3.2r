import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/sections/CTASection';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import detailHandrail from '@/assets/detail-handrail.jpg';
import guardrailGlass from '@/assets/guardrail-glass.jpg';
import spiralStaircase from '@/assets/spiral-staircase.jpg';
import metalStructure from '@/assets/metal-structure.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const services = [
  {
    id: 'corrimaos',
    title: 'Corrimãos em Aço Inox e Ferro',
    description: 'Corrimãos que combinam segurança, durabilidade e elegância. Trabalhamos com aço inox polido, escovado e ferro com pintura eletrostática.',
    image: detailHandrail,
    features: [
      'Aço inox 304 e 316 (alta resistência)',
      'Acabamento polido ou escovado',
      'Ferro com pintura eletrostática',
      'Projetos sob medida',
      'Instalação profissional',
    ],
  },
  {
    id: 'guarda-corpos',
    title: 'Guarda-corpos Metálicos e Vidro',
    description: 'Guarda-corpos que aliam proteção máxima a um visual moderno e sofisticado. Combinamos metal e vidro temperado para resultados impressionantes.',
    image: guardrailGlass,
    features: [
      'Vidro temperado 10mm ou laminado',
      'Estrutura em aço inox ou alumínio',
      'Fixação segura e durável',
      'Design contemporâneo',
      'Normas ABNT atendidas',
    ],
  },
  {
    id: 'escadas',
    title: 'Escadas Metálicas Personalizadas',
    description: 'Escadas que são verdadeiras obras de arte funcional. Do projeto à instalação, criamos escadas únicas que transformam ambientes.',
    image: spiralStaircase,
    features: [
      'Escadas retas e caracol',
      'Degraus em madeira, vidro ou metal',
      'Estrutura reforçada',
      'Design exclusivo',
      'Cálculo estrutural incluso',
    ],
  },
  {
    id: 'estruturas',
    title: 'Estruturas Metálicas Sob Medida',
    description: 'Pergolados, coberturas, mezaninos e estruturas especiais. Transformamos seu projeto em realidade com precisão e qualidade.',
    image: metalStructure,
    features: [
      'Pergolados e coberturas',
      'Mezaninos e plataformas',
      'Portões e grades',
      'Estruturas decorativas',
      'Projetos industriais',
    ],
  },
];

const Servicos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Serviços" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        <div className="section-container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-secondary text-sm uppercase tracking-widest font-medium">
              Serviços
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mt-4 mb-6">
              Soluções em <span className="text-gradient-petrol">Aço e Metal</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Oferecemos uma linha completa de serviços em metalurgia de precisão, 
              do projeto à instalação com acabamento premium.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-background' : 'bg-muted'}`}
        >
          <div className="section-container">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="default" size="lg">
                  Solicitar Orçamento
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </Layout>
  );
};

export default Servicos;