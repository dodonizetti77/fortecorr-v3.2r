import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import heroBg from '@/assets/hero-bg.jpg';

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*Solicitação de Orçamento - FortecorR*

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
*Serviço:* ${formData.service}
*Mensagem:* ${formData.message || 'Não informada'}`;

    const whatsappUrl = `https://wa.me/55434141-5076?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: 'Redirecionando para o WhatsApp!',
      description: 'Complete o envio da mensagem no WhatsApp.',
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Contato" className="w-full h-full object-cover" />
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
              Contato
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mt-4 mb-6">
              Fale <span className="text-gradient-petrol">Conosco</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Estamos prontos para transformar seu projeto em realidade. 
              Entre em contato e solicite um orçamento sem compromisso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl text-foreground mb-6">
                Solicite um Orçamento
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors text-foreground"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors text-foreground"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors text-foreground"
                      placeholder="(43) 99999-9999"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Serviço de interesse
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors text-foreground"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Corrimão em Aço Inox">Corrimão em Aço Inox</option>
                    <option value="Guarda-corpo">Guarda-corpo</option>
                    <option value="Escada Metálica">Escada Metálica</option>
                    <option value="Estrutura Metálica">Estrutura Metálica</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors text-foreground resize-none"
                    placeholder="Descreva seu projeto ou dúvida..."
                  />
                </div>
                <Button type="submit" variant="default" size="lg" className="w-full gap-2">
                  <Send className="w-5 h-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl text-foreground mb-6">
                  Informações de Contato
                </h2>
                <p className="text-muted-foreground">
                  Prefere falar diretamente conosco? Entre em contato pelos canais abaixo.
                </p>
              </div>

              <div className="space-y-6">
                <a 
                  href="https://wa.me/554341415076?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20de%20contato%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-[#25D366]/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      WhatsApp
                    </h3>
                    <p className="text-muted-foreground">(43) 4141-5076</p>
                  </div>
                </a>


                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Endereço</h3>
                    <p className="text-muted-foreground">Rua Marechal Deodoro da Fonseca, 511</p>
                    <p className="text-muted-foreground">Londrina - PR</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Horário de Atendimento</h3>
                    <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                    <p className="text-muted-foreground">Sábado: 8h às 12h</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map / Service Area */}
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
              Área de <span className="text-gradient-petrol">Atendimento</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Atendemos toda a região de Londrina e cidades próximas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-lg border border-border p-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-8 h-8 text-secondary shrink-0" />
              <div>
                <h3 className="font-display text-2xl text-foreground mb-4">
                  Londrina - PR e Região
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Londrina</h4>
                    <p className="text-muted-foreground text-sm">
                      Todos os bairros
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Região Metropolitana</h4>
                    <p className="text-muted-foreground text-sm">
                      Cambé, Ibiporã, Rolândia e região
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Outras Cidades</h4>
                    <p className="text-muted-foreground text-sm">
                      Consulte disponibilidade
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
