import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowDown, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/joao-profile-real.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const highlights = [t.hero.highlights.growth, t.hero.highlights.credit, t.hero.highlights.retention];
  return <section id="home" className="min-h-screen flex items-center justify-center py-12 lg:py-0 -mt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 animate-fade-in order-2 lg:order-1">
            <div className="space-y-5">
              <Badge variant="secondary" className="w-fit mb-2">
                {t.hero.role}
              </Badge>
              
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {t.hero.name}
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground mt-3">
                  {t.hero.subtitle}
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.hero.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-col gap-4 pt-2">
                {highlights.map((highlight, index) => <div 
                    key={index} 
                    className="text-center p-5 bg-card rounded-lg shadow-medium border-2 border-border/50 hover:border-primary/30 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="text-base font-semibold text-primary leading-snug">
                      {highlight}
                    </div>
                  </div>)}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg" onClick={() => scrollToSection("projects")}>
                {t.hero.cta.viewProjects}
                <ArrowDown className="w-4 h-4" />
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="/curriculo-joao-maciel.pdf" download="curriculo-joao-maciel.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4" />
                  {t.hero.cta.downloadCV}
                </a>
              </Button>
              
              <Button variant="ghost" size="lg" asChild>
                <a href="https://www.linkedin.com/in/jvictormds/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  {t.hero.cta.linkedin}
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up order-1 lg:order-2">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-strong ring-4 ring-border/20">
                <img src={profileImage} alt="João Maciel - Product Owner e Business Analyst" className="w-full h-full object-cover" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;