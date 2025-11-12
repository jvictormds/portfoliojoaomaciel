import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  const experiences = [
    {
      title: "Product owner",
      company: "Banco Mercantil",
      period: "Abril 2021 - Presente",
      description: "Liderança de roadmap e visão estratégica para o aplicativo Mercantil, alinhando requisitos ao plano de negócios do banco.",
      achievements: [
        "+34% na base de clientes ativos no app (2020–2021)",
        "+15 p.p. na penetração de clientes do banco usando o aplicativo",
        "90% de reuso de clientes com penetração ao app",
        "124% de crescimento em valor de contratação de crédito YoY no aplicativo"
      ],
      skills: ["Product Management", "Metodologias Ágeis", "Liderança", "KPIs", "Growth"]
    },
    {
      title: "Analista de negócios",
      company: "Banco Mercantil", 
      period: "Janeiro 2021 - Abril 2021",
      description: "Gestão e análise de performance de canais digitais. Atuação estratégica em BI, planejamento e gestão de produtos.",
      achievements: [
        "Implantação da Mel (IA conversacional) no Site e WhatsApp",
        "+31% de utilização de transações no aplicativo (2019-2020)",
        "+18% de utilização de transações no aplicativo (2020-2021)",
        "+94% de originação de crédito no aplicativo"
      ],
      skills: ["Business Intelligence", "Análise de Negócios", "Gestão de Produtos"]
    },
    {
      title: "Analista de dados",
      company: "Banco Mercantil",
      period: "Março 2019 - Janeiro 2021", 
      description: "Desenvolvimento de dashboards e painéis de acompanhamento de performance de canais digitais.",
      achievements: [
        "50% de todas as transações feitas diretamente pelos clientes no app",
        "+59% expansão de atendimento das solicitações dos clientes pela Mel no WhatsApp",
        "+75 milhões de originação de crédito no novo canal WhatsApp"
      ],
      skills: ["Power BI", "SQL", "SSIS", "APIs", "Análise de Dados"]
    },
  ];

  return (
    <section id="experience" className="pt-16 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {t.experience.title}
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                    <h4 className="text-lg font-medium">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{exp.description}</p>
                
                {/* Achievements */}
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-2 text-sm">
                        <span className="text-primary">•</span>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;