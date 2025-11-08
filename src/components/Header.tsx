import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, Linkedin, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
    { label: t.header.nav.home, id: "home" },
    { label: t.header.nav.experience, id: "experience" },
    { label: t.header.nav.projects, id: "projects" },
    { label: t.header.nav.cases, id: "cases" },
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
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
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
                {t.header.cv}
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
                {t.header.linkedin}
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
                  className="text-left text-sm font-medium text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300"
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
                    {t.header.cv}
                  </a>
                </Button>
                <Button variant="default" size="sm" asChild>
                  <a 
                    href="https://www.linkedin.com/in/jvictormds/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4" />
                    {t.header.linkedin}
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