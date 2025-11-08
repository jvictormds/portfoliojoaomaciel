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
  return <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                {t.hero.role}
              </Badge>
              
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {t.hero.name}
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground mt-4">
                  {t.hero.subtitle}
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                {t.hero.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {highlights.map((highlight, index) => <div key={index} className="text-center p-4 bg-card rounded-lg shadow-soft border">
                    <div className="text-sm font-semibold text-primary">
                      {highlight}
                    </div>
                  </div>)}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
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
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-strong">
                <img src={profileImage} alt="João Maciel - Product Owner e Business Analyst" className="w-full h-full object-cover" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;