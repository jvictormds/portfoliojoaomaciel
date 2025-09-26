import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ArrowUp, Linkedin, Mail, Download } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Experiência", href: "#experience" },
    { label: "Projetos", href: "#projects" },
    { label: "Formação", href: "#education" },
    { label: "Contato", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">João Maciel</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Product Owner especializado em produtos digitais bancários, 
              com foco em crescimento, inovação e experiência do usuário.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://www.linkedin.com/in/jvictormds/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="mailto:joaovictormaciel02@hotmail.com"
                  aria-label="E-mail"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="/curriculo-joao-maciel.pdf" 
                  download
                  aria-label="Download currículo"
                >
                  <Download className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navegação</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contato</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>
                <p className="font-medium">E-mail</p>
                <a 
                  href="mailto:joaovictormaciel02@hotmail.com"
                  className="hover:text-primary transition-smooth"
                >
                  joaovictormaciel02@hotmail.com
                </a>
              </div>
              <div>
                <p className="font-medium">Telefone</p>
                <a 
                  href="tel:+5531997857798"
                  className="hover:text-primary transition-smooth"
                >
                  +55 (31) 9 9785-7798
                </a>
              </div>
              <div>
                <p className="font-medium">Localização</p>
                <p>Belo Horizonte, MG</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} João Maciel. Desenvolvido com</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>usando Lovable</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs text-muted-foreground">
              <button 
                onClick={() => scrollToSection('#home')}
                className="hover:text-primary transition-smooth"
              >
                Política de Privacidade
              </button>
              <span className="mx-2">•</span>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="hover:text-primary transition-smooth"
              >
                Termos de Uso
              </button>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;