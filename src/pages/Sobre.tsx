import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/sections/CTASection';
import { Shield, Award, Users, Clock, CheckCircle } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const values = [
  {
    icon: Shield,
    title: 'Segurança',
    description: 'Todas as estruturas seguem rigorosas normas de segurança e são projetadas para máxima resistência.',
  },
  {
    icon: Award,
    title: 'Qualidade Premium',
    description: 'Utilizamos apenas materiais de primeira linha e técnicas avançadas de fabricação.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Cada projeto é único e recebe atenção especial da nossa equipe técnica.',
  },
  {
    icon: Clock,
    title: 'Pontualidade',
    description: 'Cumprimos prazos e mantemos você informado em cada etapa do processo.',
  },
];

const differentials = [
  'Mais de 10 anos de experiência no mercado',
  'Equipe técnica especializada e certificada',
  'Materiais de alta durabilidade e resistência',
  'Acabamento impecável em cada projeto',
  'Garantia em todos os serviços',
  'Atendimento ágil e transparente',
];

const Sobre = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sobre a FORTECORR | Corrimãos e Estruturas Metálicas em Londrina PR</title>
        <meta 
          name="description" 
          content="Conheça a FORTECORR, especialista em corrimãos, guarda-corpos e estruturas metálicas em Londrina PR. Mais de 10 anos de experiência, 500+ projetos realizados com qualidade e segurança." 
        />
        <meta 
          name="keywords" 
          content="FORTECORR, corrimão Londrina, guarda-corpo PR, estruturas metálicas, escadas metálicas, serralheria, aço inox, ferro, alumínio, empresa metalúrgica Paraná" 
        />
        <link rel="canonical" href="https://fortecorr.com.br/sobre" />
        <meta property="og:title" content="Sobre a FORTECORR | Corrimãos e Estruturas Metálicas" />
        <meta property="og:description" content="Especialistas em corrimãos, guarda-corpos e estruturas metálicas de alto padrão em Londrina PR. Qualidade, segurança e pontualidade em cada projeto." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fortecorr.com.br/sobre" />
      </Helmet>
      {/* Hero */}
      <section className="relative pt-32 pb-20 min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Estrutura metálica" className="w-full h-full object-cover" />
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
              Sobre Nós
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mt-4 mb-6">
              Excelência em <span className="text-gradient-petrol">Estruturas Metálicas</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Há mais de uma década transformando espaços com projetos em aço e metal de alto padrão.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Quem Somos
              </h2>
              <article className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  A <strong>FORTECORR</strong> é uma empresa especializada em <strong>corrimãos, guarda-corpos, 
                  escadas metálicas e estruturas em aço</strong> localizada em <strong>Londrina, Paraná</strong>. 
                  Desde nossa fundação, nos dedicamos a transformar ambientes com soluções que unem 
                  <em>design sofisticado, segurança certificada e durabilidade excepcional</em>.
                </p>
                <p className="text-muted-foreground mb-4">
                  Atuamos em projetos <strong>residenciais, comerciais e industriais</strong>, atendendo 
                  construtoras, arquitetos e clientes particulares em toda a região de Londrina e norte do Paraná. 
                  Nossa equipe técnica é formada por profissionais experientes em <strong>serralheria de precisão</strong>, 
                  trabalhos com <strong>aço inox, ferro, alumínio e vidro temperado</strong>.
                </p>
                <p className="text-muted-foreground mb-4">
                  Cada projeto que desenvolvemos segue rigorosos padrões de qualidade e normas técnicas 
                  de segurança (ABNT NBR 14718), garantindo estruturas resistentes e acabamento impecável. 
                  Oferecemos desde <strong>corrimãos simples até projetos personalizados</strong> de 
                  escadas helicoidais, mezaninos e coberturas metálicas.
                </p>
                <p className="text-muted-foreground">
                  Nosso compromisso vai além da fabricação: acompanhamos cada etapa do processo, 
                  desde o projeto inicial até a instalação final, garantindo a <strong>satisfação total 
                  do cliente</strong> e a valorização do seu imóvel.
                </p>
              </article>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <span className="font-display text-4xl text-gradient-petrol">10+</span>
                <p className="text-muted-foreground text-sm mt-2">Anos de Experiência</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <span className="font-display text-4xl text-gradient-petrol">500+</span>
                <p className="text-muted-foreground text-sm mt-2">Projetos Realizados</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <span className="font-display text-4xl text-gradient-petrol">100%</span>
                <p className="text-muted-foreground text-sm mt-2">Clientes Satisfeitos</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border text-center">
                <span className="font-display text-4xl text-gradient-petrol">5★</span>
                <p className="text-muted-foreground text-sm mt-2">Avaliação Média</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Nossos <span className="text-gradient-petrol">Valores</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os pilares que sustentam cada projeto que desenvolvemos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg border border-border hover:border-secondary/50 transition-colors"
              >
                <value.icon className="w-10 h-10 text-secondary mb-4" />
                <h3 className="font-display text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Por que Escolher a <span className="text-gradient-petrol">FORTECORR</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                Nosso diferencial está na combinação de expertise técnica, materiais de qualidade 
                e compromisso inabalável com a satisfação do cliente.
              </p>
              <ul className="space-y-4">
                {differentials.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-card p-8 rounded-lg border border-border">
                <p className="text-xl text-foreground italic mb-6">
                  "A FORTECORR superou todas as expectativas. O projeto ficou incrível 
                  e a equipe foi extremamente profissional em todas as etapas."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-petrol flex items-center justify-center text-foreground font-bold">
                    RC
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Roberto Costa</p>
                    <p className="text-muted-foreground text-sm">Cliente Residencial</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Sobre;