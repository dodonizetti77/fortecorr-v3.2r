import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-copper rounded flex items-center justify-center">
                <span className="font-display text-xl text-primary-foreground">M</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl text-foreground">METALFORTE</span>
                <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">
                  Estruturas Premium
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Especialistas em corrimãos, guarda-corpos, escadas metálicas e projetos em aço sob medida com acabamento premium.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-muted-foreground hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Corrimãos em Aço Inox</li>
              <li className="text-muted-foreground">Guarda-corpos Metálicos</li>
              <li className="text-muted-foreground">Escadas Metálicas</li>
              <li className="text-muted-foreground">Estruturas sob Medida</li>
              <li className="text-muted-foreground">Projetos Especiais</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-foreground">(11) 99999-9999</p>
                  <p className="text-muted-foreground text-sm">WhatsApp</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-foreground">contato@metalforte.com.br</p>
                  <p className="text-muted-foreground text-sm">E-mail</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-foreground">São Paulo - SP</p>
                  <p className="text-muted-foreground text-sm">Atendemos toda região</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 MetalForte. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Desenvolvido com excelência em aço e tecnologia.
          </p>
        </div>
      </div>
    </footer>
  );
}
