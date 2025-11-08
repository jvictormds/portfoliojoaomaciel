import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Education = () => {
  const { t } = useLanguage();
  const education = [
    {
      degree: "Business Analytics",
      institution: "Harvard Business School",
      period: "2025",
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
    }
  ];


  return (
    <section id="education" className="pt-5 pb-2.5">
      <div className="container mx-auto px-4">

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            {t.education.academic}
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-smooth">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-primary">{edu.degree}</h4>
                      <h5 className="text-lg font-medium">{edu.institution}</h5>
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-primary" />
            {t.education.certifications}
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
                        {t.education.expires}: {cert.expiry}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  
                  <Badge 
                    variant={cert.status === "Ativo" ? "default" : "secondary"} 
                    className="text-xs"
                  >
                    {cert.status === "Ativo" ? t.education.status.active : cert.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;