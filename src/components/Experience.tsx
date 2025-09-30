import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Product Owner",
      company: "Banco Mercantil",
      period: "Abril 2021 - Presente",
      location: "Belo Horizonte, MG",
      type: "CLT",
      description: "Liderança de roadmap e visão estratégica para o aplicativo Mercantil, alinhando requisitos ao plano de negócios do banco.",
      achievements: [
        "+34% na base de clientes ativos no app (2020–2021)",
        "-15% na perda de cadastros iniciados via melhorias na validação de reconhecimento facial",
        "+15 p.p. na penetração de clientes do banco usando o aplicativo",
        "Implementação de práticas ágeis que reduziram ciclos de lançamento de mensal/bimestral para semanal/quinzenal",
        "Liderança de equipe de 20 profissionais",
        "90% de reuso de clientes com penetração ao app",
        "124% de crescimento em valor de contratação de crédito YoY no aplicativo"
      ],
      skills: ["Product Management", "Metodologias Ágeis", "Liderança", "KPIs", "Growth"]
    },
    {
      title: "Analista de Negócios Pleno",
      company: "Banco Mercantil", 
      period: "Janeiro 2021 - Abril 2021",
      location: "Belo Horizonte, MG",
      type: "CLT",
      description: "Gestão e análise de performance de canais digitais. Atuação estratégica em BI, planejamento e gestão de produtos.",
      achievements: [
        "Análise estratégica de performance de canais digitais",
        "Implementação de soluções de Business Intelligence",
        "Planejamento estratégico de produtos digitais"
      ],
      skills: ["Business Intelligence", "Análise de Negócios", "Gestão de Produtos"]
    },
    {
      title: "Analista de Dados",
      company: "Banco Mercantil",
      period: "Janeiro 2020 - Janeiro 2021", 
      location: "Belo Horizonte, MG",
      type: "CLT",
      description: "Desenvolvimento de dashboards e painéis de acompanhamento de performance de canais digitais.",
      achievements: [
        "+31% de utilização de transações no aplicativo (2019-2020)",
        "+18% de utilização de transações no aplicativo (2020-2021)",
        "Implantação da Mel (IA conversacional) no Site e WhatsApp",
        "50% de todas as transações feitas diretamente pelos clientes no app",
        "+59% expansão de atendimento das solicitações dos clientes pela Mel no WhatsApp",
        "+94% de originação de crédito no aplicativo",
        "+75 milhões de originação de crédito no novo canal WhatsApp"
      ],
      skills: ["Power BI", "SQL", "SSIS", "APIs", "Análise de Dados"]
    },
    {
      title: "Jogador e Vendedor",
      company: "Perfect World International",
      period: "Agosto 2019 - Junho 2020",
      location: "Remoto",
      type: "Autônomo",
      description: "Empreendedorismo digital no gaming, comercialização de itens e moedas virtuais com foco no mercado internacional.",
      achievements: [
        "Faturamento de mais de R$ 60.000",
        "Lucro líquido de 33%",
        "Construção de comunidade no Discord para intermediação",
        "Identificação de oportunidades de arbitragem de moedas"
      ],
      skills: ["Empreendedorismo", "Negociação", "Community Building", "E-commerce"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiência Profissional
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Trajetória sólida em produtos digitais e análise de negócios, 
            com foco em resultados mensuráveis e transformação digital.
          </p>
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
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      {exp.location} • {exp.type}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">{exp.description}</p>
                
                {/* Achievements */}
                <div>
                  <h5 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Principais Resultados
                  </h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-sm">
                        <span className="text-primary">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h5 className="font-semibold mb-3">Competências Utilizadas</h5>
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