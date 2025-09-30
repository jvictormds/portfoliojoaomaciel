import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Award, ExternalLink } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Business Analytics",
      institution: "Harvard Business School",
      period: "2025 - Atual",
      status: "Em andamento",
      type: "Especialização",
      description: "Análise de dados, Análise estatística, Análise de negócios, Inteligência Artificial (AI), Desenvolvimento de produtos, Estratégia digital e empresarial.",
      skills: ["Business Analytics", "AI", "Estratégia Digital", "KPIs", "Product Development"]
    },
    {
      degree: "Gestão e Desenvolvimento de Produtos Digitais",
      institution: "PUC Minas",
      period: "2022 - 2023",
      status: "Concluído",
      type: "Pós-graduação Lato Sensu",
      description: "Inteligência de negócios (BI), Operações de TI, Gestão de projetos, Gestão de produtos, Metodologias ágeis.",
      skills: ["Product Management", "Business Intelligence", "Metodologias Ágeis", "Gestão de Projetos"]
    },
    {
      degree: "Bacharelado em Letras",
      institution: "Universidade Federal de Minas Gerais (UFMG)",
      period: "2016 - 2021",
      status: "Concluído",
      type: "Graduação",
      description: "Comunicação, inglês avançado, negociação, técnicas de argumentação, técnicas de discurso, retórica e argumentação.",
      skills: ["Comunicação", "Inglês Avançado", "Negociação", "Retórica"]
    }
  ];

  const certifications = [
    {
      name: "Professional Scrum Product Owner™ II (PSPO II)",
      issuer: "Scrum.org",
      date: "Janeiro 2024",
      status: "Ativo",
      description: "Certificação avançada em gestão de produtos sob o framework Scrum, indicando profundo domínio sobre entrega de valor.",
      level: "Avançado"
    },
    {
      name: "Professional Scrum Product Owner™ I (PSPO I)", 
      issuer: "Scrum.org",
      date: "Janeiro 2023",
      status: "Ativo",
      description: "Fundamentação sólida em fundamentos de Scrum e gestão de backlog.",
      level: "Fundamental"
    },
    {
      name: "Cloud Digital Leader Certification",
      issuer: "Google",
      date: "Fevereiro 2025",
      expiry: "Fevereiro 2028",
      status: "Ativo",
      description: "Conhecimento estratégico sobre soluções em nuvem (GCP) e análise digital.",
      level: "Profissional"
    },
    {
      name: "Design de Serviço",
      issuer: "PM3",
      date: "Janeiro 2024",
      status: "Ativo",
      description: "Competências em Design Thinking e abordagem centrada no usuário para produtos e serviços.",
      level: "Especialização"
    },
    {
      name: "Métricas de Negócios Digitais",
      issuer: "PM3", 
      date: "Outubro 2023",
      status: "Ativo",
      description: "Foco em indicadores essenciais para mensuração e otimização de performance digital.",
      level: "Especialização"
    }
  ];

  const additionalCourses = [
    "IMERSÃO DADOS IA: Análises com Inteligência Artificial - Alura (Set/2023)",
    "Product Discovery - Produtos Incríveis (Nov/2023)",
    "Product Led Growth - Produtos Incríveis (Nov/2023)",
    "Metodologias Ágeis - Escola Conquer (Ago/2023)",
    "Big Data Fundamentos - Data Science Academy (Ago/2020)",
    "Microsoft Power BI para Data Science - Data Science Academy (Dez/2019)"
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Formação & Certificações
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Formação acadêmica sólida e certificações reconhecidas internacionalmente 
            em gestão de produtos e análise de negócios.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Formação Acadêmica
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">{edu.degree}</h4>
                      <h5 className="text-lg font-medium">{edu.institution}</h5>
                      <Badge variant={edu.status === "Em andamento" ? "default" : "secondary"} className="mt-2">
                        {edu.status}
                      </Badge>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <Badge variant="outline">{edu.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{edu.description}</p>
                  
                  <div>
                    <h6 className="font-semibold mb-2">Competências Desenvolvidas</h6>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, skillIndex) => (
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

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            Principais Certificações
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary leading-tight">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                    <Badge variant={cert.level === "Avançado" ? "default" : "secondary"} className="text-xs">
                      {cert.level}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </div>
                    {cert.expiry && (
                      <span className="text-xs text-muted-foreground">
                        Expira: {cert.expiry}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  
                  <Badge 
                    variant={cert.status === "Ativo" ? "default" : "secondary"} 
                    className="text-xs"
                  >
                    {cert.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Courses */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Cursos Complementares
          </h3>
          <Card className="shadow-soft">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {additionalCourses.map((course, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;