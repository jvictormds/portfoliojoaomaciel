import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowDown, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/joao-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const highlights = [
    "+34% base de clientes ativos",
    "124% crescimento em crédito",
    "90% reuso de clientes"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Product Owner & Business Analyst
              </Badge>
              
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  João Maciel
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground mt-4">
                  Gestor de produtos digitais com foco em resultados
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Especialista em gestão de produtos digitais no setor bancário, 
                com experiência comprovada em transformação digital e crescimento de base de usuários.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="text-center p-4 bg-card rounded-lg shadow-soft border"
                  >
                    <div className="text-sm font-semibold text-primary">
                      {highlight}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection("projects")}
              >
                Ver Projetos
                <ArrowDown className="w-4 h-4" />
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="/curriculo-joao-maciel.pdf" download>
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </Button>
              
              <Button variant="ghost" size="lg" asChild>
                <a 
                  href="https://linkedin.com/in/joaovictormaciel" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-strong">
                <img 
                  src={profileImage} 
                  alt="João Maciel - Product Owner e Business Analyst"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-medium">
                <span className="text-sm font-semibold">Disponível para novos desafios</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;