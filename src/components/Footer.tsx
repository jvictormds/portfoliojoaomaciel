import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, ArrowUp, Linkedin, Mail, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t.header.nav.home, href: "#home" },
    { label: t.header.nav.about, href: "#about" },
    { label: t.header.nav.experience, href: "#experience" },
    { label: t.header.nav.projects, href: "#projects" },
    { label: t.header.nav.education, href: "#education" },
    { label: t.header.nav.contact, href: "#contact" }
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
              {t.footer.description}
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
            <h4 className="font-semibold">{t.footer.navigation}</h4>
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
            <h4 className="font-semibold">{t.footer.contactInfo}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>
                <p className="font-medium">{t.contact.labels.email}</p>
                <a 
                  href="mailto:joaovictormaciel02@hotmail.com"
                  className="hover:text-primary transition-smooth"
                >
                  joaovictormaciel02@hotmail.com
                </a>
              </div>
              <div>
                <p className="font-medium">{t.contact.labels.phone}</p>
                <a 
                  href="tel:+5531997857798"
                  className="hover:text-primary transition-smooth"
                >
                  +55 (31) 9 9785-7798
                </a>
              </div>
              <div>
                <p className="font-medium">{t.contact.labels.location}</p>
                <p>{t.footer.location}</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} João Maciel. {t.footer.developedWith}</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>{t.footer.using}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs text-muted-foreground">
              <button 
                onClick={() => scrollToSection('#home')}
                className="hover:text-primary transition-smooth"
              >
                {t.footer.privacy}
              </button>
              <span className="mx-2">•</span>
              <button 
                onClick={() => scrollToSection('#contact')}
                className="hover:text-primary transition-smooth"
              >
                {t.footer.terms}
              </button>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={scrollToTop}
              aria-label={t.footer.backToTop}
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