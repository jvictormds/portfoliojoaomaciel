import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Linkedin, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { label: "Início", id: "home" },
    { label: "Sobre", id: "about" },
    { label: "Experiência", id: "experience" },
    { label: "Projetos", id: "projects" },
    { label: "Formação", id: "education" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="text-xl font-bold text-primary">
            João Maciel
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium hover:text-primary transition-smooth"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleLanguage}
              aria-label={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
            >
              <Languages className="w-4 h-4" />
              {language === 'pt' ? 'EN' : 'PT'}
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="/curriculo-joao-maciel.pdf" download aria-label="Download currículo">
                <Download className="w-4 h-4" />
                CV
              </a>
            </Button>
            <Button variant="default" size="sm" asChild>
              <a 
                href="https://www.linkedin.com/in/jvictormds/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium hover:text-primary transition-smooth"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={toggleLanguage}
                >
                  <Languages className="w-4 h-4" />
                  {language === 'pt' ? 'English' : 'Português'}
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="/curriculo-joao-maciel.pdf" download>
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <a 
                    href="https://www.linkedin.com/in/jvictormds/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;