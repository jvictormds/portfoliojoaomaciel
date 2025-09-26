import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Brain, Target, Users } from "lucide-react";

const About = () => {
  const skills = {
    hard: [
      "Product Management",
      "Business Analysis", 
      "Metodologias Ágeis",
      "Power BI",
      "SQL",
      "Google Cloud Platform",
      "Design Thinking",
      "Growth Analytics",
      "KPIs & Métricas",
      "Inteligência Artificial"
    ],
    soft: [
      "Liderança",
      "Comunicação",
      "Negociação",
      "Análise Crítica",
      "Visão Estratégica",
      "Resolução de Problemas",
      "Adaptabilidade",
      "Trabalho em Equipe"
    ]
  };

  const languages = [
    { language: "Português", level: "Nativo" },
    { language: "Inglês", level: "Avançado" },
  ];

  const highlights = [
    {
      icon: Target,
      title: "Visão Estratégica",
      description: "Alinhamento de roadmap de produtos com objetivos de negócio e crescimento sustentável."
    },
    {
      icon: Brain,
      title: "Análise de Dados",
      description: "Uso de métricas e análise de dados para tomada de decisão e melhoria contínua."
    },
    {
      icon: Users,
      title: "Liderança de Time",
      description: "Experiência liderando equipes multidisciplinares de até 20 profissionais."
    },
    {
      icon: Globe,
      title: "Transformação Digital",
      description: "Especialista em digitalização de processos e modernização de canais bancários."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Product Owner com mais de 4 anos de experiência no setor bancário, 
            especializado em produtos digitais e transformação de jornadas do cliente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Professional Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Perfil Profissional</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Atualmente lidero o roadmap e visão estratégica para o aplicativo Banco Mercantil, 
                alinhando requisitos ao plano de negócios e impulsionando o crescimento da base de usuários ativos.
              </p>
              <p>
                Com formação acadêmica em Letras pela UFMG e especializações em Gestão de Produtos Digitais 
                pela PUC Minas e Business Analytics pela Harvard Business School, combino habilidades técnicas 
                e visão de negócios para entregar soluções inovadoras.
              </p>
              <p>
                Minha experiência inclui implementação de práticas ágeis que reduziram ciclos de lançamento 
                de produtos de mensal/bimestral para semanal/quinzenal, resultando em melhor time-to-market 
                e maior satisfação do cliente.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-none shadow-soft">
                <CardContent className="p-6">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Hard Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Competências Técnicas</h3>
            <div className="flex flex-wrap gap-2">
              {skills.hard.map((skill, index) => (
                <Badge key={index} variant="default" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Competências Comportamentais</h3>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Idiomas</h3>
            <div className="space-y-3">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{lang.language}</span>
                  <Badge variant="outline">{lang.level}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;