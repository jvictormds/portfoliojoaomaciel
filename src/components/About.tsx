import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Brain, Target, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();
  const skills = {
    hard: ["Product Management", "Business Analysis", "Metodologias Ágeis", "Power BI", "SQL", "Google Cloud Platform", "Design Thinking", "Growth Analytics", "KPIs & Métricas", "Inteligência Artificial"],
    soft: ["Liderança", "Comunicação", "Negociação", "Análise Crítica", "Visão Estratégica", "Resolução de Problemas", "Adaptabilidade", "Trabalho em Equipe"]
  };
  const languages = [{
    language: language === 'pt' ? "Português" : "Portuguese",
    level: t.about.languageLevel.native
  }, {
    language: language === 'pt' ? "Inglês" : "English",
    level: t.about.languageLevel.advanced
  }];
  const highlights = [{
    icon: Target,
    title: t.about.highlights.strategic.title,
    description: t.about.highlights.strategic.description
  }, {
    icon: Brain,
    title: t.about.highlights.data.title,
    description: t.about.highlights.data.description
  }, {
    icon: Users,
    title: t.about.highlights.leadership.title,
    description: t.about.highlights.leadership.description
  }];
  return <section id="about" className="bg-muted/30 py-1 -mt-20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.title}</h2>
          <div className="text-muted-foreground text-left whitespace-pre-line leading-relaxed">
            {t.about.intro}
          </div>
        </div>

        {/* Key Highlights - Disabled */}
        {/* <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => <Card key={index} className="border-none shadow-soft">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div> */}

        {/* Skills Section - Disabled */}
        {/* <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{t.about.skills.hard}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.hard.map((skill, index) => <Badge key={index} variant="default" className="text-xs">
                  {skill}
                </Badge>)}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{t.about.skills.soft}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, index) => <Badge key={index} variant="secondary" className="text-xs">
                  {skill}
                </Badge>)}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">{t.about.skills.languages}</h3>
            <div className="space-y-3">
              {languages.map((lang, index) => <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{lang.language}</span>
                  <Badge variant="outline">{lang.level}</Badge>
                </div>)}
            </div>
          </div>
        </div> */}
      </div>
    </section>;
};
export default About;