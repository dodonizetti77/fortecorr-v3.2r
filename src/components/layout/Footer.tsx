import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/logo-fortecorr-fp.png';

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="FORTECORR Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Especialistas em corrimãos, guarda-corpos, escadas metálicas e projetos em aço sob medida com acabamento premium.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-foreground transition-colors">
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
                <Phone size={18} className="text-secondary mt-1 shrink-0" />
                <div>
                  <p className="text-foreground">WhatsApp</p>
                  <p className="text-muted-foreground text-sm">Clique para conversar</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-secondary mt-1 shrink-0" />
                <div>
                  <p className="text-foreground">contato@fortecorr.com.br</p>
                  <p className="text-muted-foreground text-sm">E-mail</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-1 shrink-0" />
                <div>
                  <p className="text-foreground">Londrina - PR</p>
                  <p className="text-muted-foreground text-sm">Atendemos toda região</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 FORTECORR. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Desenvolvido com excelência em aço e tecnologia.
          </p>
        </div>
      </div>
    </footer>
  );
}