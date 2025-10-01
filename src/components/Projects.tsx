import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Target, Users, TrendingUp, Calendar } from "lucide-react";
import bancoMercantilApp from "@/assets/banco-mercantil-cartoes-visa.jpg";
import melChatbot from "@/assets/mel-chatbot-whatsapp.png";
import ticketzShowcase from "@/assets/ticketz-showcase.png";
import migracaoApp from "@/assets/migracao-xamarin-kotlin.png";
import appXamarin2017 from "@/assets/app-xamarin-2017.png";
import appKotlinSwift2022 from "@/assets/app-kotlin-swift-2022.png";
import appAreaInicialAntes from "@/assets/app-area-inicial-antes-final.jpg";
import appAreaInicialDepois from "@/assets/app-area-inicial-depois-nova.jpg";
import modernizacaoAreaInicialCompleta from "@/assets/modernizacao-area-inicial-completa.jpg";
import acessoAppAntes from "@/assets/acesso-app-antes.png";
import acessoAppDepois from "@/assets/acesso-app-depois.png";
import acessoCpfPreview from "@/assets/acesso-cpf-preview.png";
import modernizacaoAreaPreview from "@/assets/modernizacao-area-preview.png";
import melChatbotPreview from "@/assets/mel-chatbot-preview.png";
import migracaoPreview from "@/assets/migracao-preview.png";
import novaMarcaAntes from "@/assets/nova-marca-antes.png";
import novaMarcaDepois from "@/assets/nova-marca-depois.png";
import novaMarcaPreview from "@/assets/nova-marca-preview.png";
import novaMarcaComparacao from "@/assets/nova-marca-comparacao.png";

const Projects = () => {
  const projects = [
    {
      title: "Implantação abertura de conta via aplicativo",
      category: "Product Management",
      period: "2020 - Presente",
      summary: "Gestão do desenvolvimento da nova funcionalidade de abertura de conta para beneficiário INSS pelo aplicativo, coliderando desde a descoberta do produto até a entrega e acompanhamento de resultados, já trabalhando em melhorias e incentivos para o ciclo de vida do produto.",
      image: "/placeholder-app.jpg",
      challenge: "Modernizar a experiência digital do banco e aumentar a penetração de clientes no aplicativo móvel.",
      role: "Product Owner e líder estratégico",
      solution: [
        "Implementação de metodologias ágeis",
        "Redesign completo da UX/UI",
        "Integração com sistemas de CRM",
        "Desenvolvimento de funcionalidades de autoatendimento",
        "Otimização das jornadas de cadastro e autenticação"
      ],
      results: [
        "+34% base de clientes ativos no app",
        "124% crescimento em contratação de crédito",
        "90% taxa de reuso de clientes",
        "64% de todas as transações feitas no aplicativo",
        "Redução de ciclos de lançamento de mensal para semanal"
      ],
      technologies: ["Product Management", "Metodologias Ágeis", "UX/UI", "CRM Integration"],
      metrics: {
        users: "+34% usuários ativos",
        revenue: "124% crescimento",
        retention: "90% reuso"
      }
    },
    {
      title: "Facilitação da forma de acesso",
      category: "Product Management",
      period: "2023",
      summary: "Implementação do acesso por CPF para eliminar barreiras de entrada no aplicativo, reduzindo custos operacionais e melhorando a experiência do usuário.",
      image: acessoCpfPreview,
      challenge: "O acesso ao aplicativo era feito por agência e conta, e muitos clientes não tinham essa informação, o que além de impedir que acessassem, gerava ligações e atendimentos via chat para obter a informação. Com cerca de 4 mil atendimentos mensais por esse motivo, tínhamos um custo de cerca de 25 mil reais mensais para atender essa demanda.",
      role: "Idealizador e Product Manager",
      solution: [
        "Análise de viabilidade técnica e de negócio",
        "Estudo analítico dos dados de atendimento",
        "Proposta estratégica para simplificação do acesso",
        "Desenvolvimento da funcionalidade de acesso por CPF",
        "Lançamento gradual com monitoramento de adoção",
        "Otimização contínua da experiência de login"
      ],
      results: [
        "Economia de 25 mil reais mensais com atendimento",
        "Crescimento da base de clientes utilizando o app",
        "Redução de 4 mil atendimentos mensais",
        "Melhoria significativa na experiência de onboarding",
        "Maior acessibilidade para novos usuários",
        "Redução de abandono na tela de login"
      ],
      technologies: ["Análise de Negócios", "Análise de Dados", "Product Discovery", "Product Development"],
      metrics: {
        savings: "25k/mês economia",
        support: "-4k atendimentos",
        access: "CPF simplificado"
      }
    },
    {
      title: "Modernização da área inicial do aplicativo",
      category: "Product Management",
      period: "2023",
      summary: "Após a migração de linguagem, redesenho da área inicial para atender melhor as necessidades dos usuários e ofertar produtos e serviços de forma mais intuitiva.",
      image: modernizacaoAreaPreview,
      challenge: "Após a migração de linguagem, o aplicativo precisava atender melhor as principais necessidades do usuário e ofertar produtos e serviços enquanto deixava o app mais fácil de usar.",
      role: "Idealizador e Product Manager",
      solution: [
        "Pesquisas com usuários para identificar pontos de dor",
        "Testes A/B para validar soluções propostas",
        "Redesign da interface da área inicial",
        "Implementação de novos fluxos de navegação",
        "Desenvolvimento iterativo com feedback contínuo",
        "Lançamento gradual com monitoramento de métricas"
      ],
      results: [
        "Crescimento da base de clientes utilizando o app",
        "Melhoria na experiência do usuário na área inicial",
        "Aumento na contratação de produtos e serviços",
        "Redução do tempo para encontrar funcionalidades principais",
        "Maior engajamento dos usuários com o aplicativo"
      ],
      technologies: ["Pesquisa", "Product Discovery", "Product Development", "UX/UI Design", "Testes A/B"],
      metrics: {
        users: "Crescimento ativo",
        engagement: "Maior engajamento", 
        usability: "UX melhorada"
      }
    },
    {
      title: "Nova marca Banco Mercantil",
      category: "Product Management",
      period: "2023",
      summary: "Refatoramento da marca e identidade visual do aplicativo, posicionando a instituição como um banco 'figital' e ampliando a presença no mercado.",
      image: novaMarcaPreview,
      challenge: "Em 2023 mudamos a marca de Mercantil do Brasil para Banco Mercantil, posicionando a instituição como um banco 'figital' e ampliando a presença no mercado. Uma dessas ampliações foi o refatoramento da marca e da identidade visual do aplicativo.",
      role: "Product Manager",
      solution: [
        "Acompanhamento do desenvolvimento",
        "Priorização e fatiamento das entregas",
        "Negociação de expectativas com todo o time de marketing, atendimento e compliance",
        "Coordenação entre equipes multidisciplinares",
        "Gestão de roadmap para implementação gradual",
        "Monitoramento de impacto nas métricas de produto"
      ],
      results: [
        "Atualização da marca e identidade visual",
        "Padronização de experiência do cliente em todos os canais digitais",
        "Crescimento da base de clientes utilizando o app",
        "Fortalecimento do posicionamento 'figital' no mercado"
      ],
      technologies: ["Priorização de Roadmap", "Azure DevOps", "MoSCoW", "Testes de Interface", "DoD and DoR"],
      metrics: {
        brand: "Nova identidade",
        standardization: "Canais unificados",
        growth: "Base crescente"
      }
    },
    {
      title: "Migração de Linguagem de Desenvolvimento - Aplicativo Mercantil",
      category: "Product Operations",
      period: "2017 - 2022",
      summary: "Liderança da migração tecnológica completa do aplicativo bancário de Xamarin para tecnologias nativas, garantindo sustentação de projetos e gestão ágil.",
      image: migracaoPreview,
      challenge: "Migrar a arquitetura tecnológica do aplicativo de Xamarin para linguagens nativas (Kotlin/Swift) sem interromper o desenvolvimento de novas funcionalidades.",
      role: "Product Owner e líder de Product Operations",
      solution: [
        "Coordenação das equipes de desenvolvimento durante a migração",
        "Sustentação de projetos novos em paralelo à migração",
        "Implementação de metodologias ágeis (Scrum) para gestão de processo",
        "Gestão de Product Operations para otimizar fluxos de desenvolvimento",
        "Acompanhamento técnico da evolução das linguagens (Xamarin → Kotlin/Swift)",
        "Garantia da continuidade de entrega de valor durante a transição"
      ],
      results: [
        "Migração completa bem-sucedida de Xamarin para linguagens nativas",
        "Manutenção da velocidade de entrega durante toda a transição",
        "Modernização da arquitetura tecnológica do aplicativo",
        "Melhoria na performance e experiência do usuário",
        "Redução de dependências externas de framework",
        "Time preparado para tecnologias nativas modernas"
      ],
      technologies: ["Product Operations", "Scrum", "Xamarin", "Kotlin", "Swift", "Migração Tecnológica"],
      metrics: {
        migration: "100% migrado",
        performance: "Arquitetura moderna",
        delivery: "Sem interrupções"
      }
    },
    {
      title: "Implementação da Mel (Chatbot & IA Conversacional) no Banco Mercantil",
      category: "Innovation",
      period: "2020 - 2021",
      summary: "Desenvolvimento e implementação de chatbot inteligente para atendimento multicanal.",
      image: melChatbotPreview, 
      challenge: "Automatizar o atendimento ao cliente e reduzir custos operacionais mantendo a qualidade do serviço.",
      role: "Analista de Negócios e Product Owner",
      solution: [
        "Análise de necessidades dos clientes",
        "Definição de fluxos conversacionais",
        "Integração com sistemas bancários",
        "Implementação em múltiplos canais (Web, Mobile, WhatsApp)",
        "Monitoramento e otimização contínua"
      ],
      results: [
        "+59% expansão de atendimento via WhatsApp",
        "50% das transações automatizadas",
        "+75 milhões em originação de crédito via WhatsApp",
        "Redução significativa no tempo de atendimento"
      ],
      technologies: ["Chatbot", "IA Conversacional", "WhatsApp API", "Integração de Sistemas"],
      metrics: {
        automation: "50% transações",
        expansion: "+59% WhatsApp",
        credit: "75M originação"
      }
    },
    {
      title: "POC Ticketz.io para pós em Gestão e desenvolvimento de produtos digitais",
      category: "Product Discovery",
      period: "2024",
      summary: "Facilitação do acesso a eventos relevantes no Brasil através de plataforma digital inovadora.",
      image: "/placeholder-events.jpg",
      challenge: "Democratizar o acesso a eventos de qualidade e criar uma experiência única para organizadores e participantes.",
      role: "Product Manager e Discovery Lead", 
      solution: [
        "Pesquisa de mercado e análise competitiva",
        "Definição de personas e jornadas do usuário", 
        "Prototipagem e testes de usabilidade",
        "Estratégia de go-to-market",
        "Framework de métricas e KPIs"
      ],
      results: [
        "DADO A VALIDAR: Modelo de negócio validado",
        "DADO A VALIDAR: MVP definido",
        "DADO A VALIDAR: Primeiros testes com usuários",
        "Framework de descoberta de produtos implementado"
      ],
      technologies: ["Product Discovery", "Prototipagem", "Research", "Design Thinking"],
      metrics: {
        research: "Market fit",
        prototype: "MVP ready",
        validation: "User tested"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos & Cases
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Principais projetos desenvolvidos com foco em inovação, 
            crescimento e transformação digital.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-strong transition-smooth overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Image Section - Left Side */}
                <div className="overflow-hidden bg-muted/30 flex items-center justify-center p-4">
                  {index === 0 ? (
                    <img 
                      src={bancoMercantilApp} 
                      alt="Tela do aplicativo Banco Mercantil mostrando cartões Visa Diamante e ofertas para beneficiários do INSS"
                      className="w-full h-full object-contain max-h-[400px]"
                    />
                  ) : index === 1 ? (
                    <img 
                      src={acessoCpfPreview} 
                      alt="Tela de acesso do aplicativo Mercantil com login por CPF - versão simplificada"
                      className="w-full h-full object-contain max-h-[400px]"
                    />
                  ) : index === 2 ? (
                    <img 
                      src={modernizacaoAreaPreview} 
                      alt="Modernização da área inicial do aplicativo Mercantil - antes e depois"
                      className="w-full h-full object-contain max-h-[400px]"
                    />
                  ) : index === 3 ? (
                    <img 
                      src={novaMarcaPreview} 
                      alt="Comparação antes e depois da nova identidade visual do Banco Mercantil"
                      className="w-full h-full object-contain max-h-[400px]"
                    />
                  ) : index === 4 ? (
                    <img 
                      src={migracaoPreview} 
                      alt="Aplicativo Mercantil antes e depois da migração de Xamarin para linguagens nativas"
                      className="w-full h-full object-contain max-h-[400px]"
                    />
                  ) : index === 5 ? (
                    <img 
                      src={melChatbotPreview} 
                      alt="Conversa no WhatsApp com a Mel, chatbot do Banco Mercantil"
                      className="w-full h-full object-contain max-h-[400px]"
                    />
                  ) : index === 6 ? (
                    <img 
                      src={ticketzShowcase} 
                      alt="Ticketz.io - Plataforma de eventos mostrando múltiplos contextos de uso"
                      className="w-full h-full object-contain max-h-[400px]"
                    />
                  ) : (
                    <div className="bg-gradient-primary flex items-center justify-center h-full w-full min-h-[300px]">
                      <div className="text-center text-primary-foreground p-6">
                        <h4 className="font-semibold mb-2">{project.title}</h4>
                        <p className="text-sm opacity-90">Imagem do projeto a ser inserida</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section - Right Side */}
                <div className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{project.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 flex-1">
                    <p className="text-sm text-muted-foreground">
                      {project.summary}
                    </p>
                    
                    {/* Quick Metrics */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.values(project.metrics).map((metric, metricIndex) => (
                        <div key={metricIndex} className="p-2 bg-muted rounded-md">
                          <div className="text-xs font-semibold text-primary">{metric}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* View Case Button */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full group-hover:border-primary transition-smooth">
                          Ver Case Completo
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                        </DialogHeader>
                        
                        <div className="space-y-8">
                          {/* Project Overview */}
                          <div className="grid md:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Target className="w-4 h-4 text-primary" />
                                Contexto
                              </h4>
                              <p className="text-sm text-muted-foreground">{project.challenge}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary" />
                                Meu Papel
                              </h4>
                              <p className="text-sm text-muted-foreground">{project.role}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" />
                                Período
                              </h4>
                              <p className="text-sm text-muted-foreground">{project.period}</p>
                            </div>
                          </div>

                          {/* Solution */}
                          <div>
                            <h4 className="font-semibold mb-4">Solução Implementada</h4>
                            <ul className="space-y-2">
                              {project.solution.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start gap-2 text-sm">
                                  <span className="text-primary">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Results */}
                          <div>
                            <h4 className="font-semibold mb-4 flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-primary" />
                              Resultados Alcançados
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                              {project.results.map((result, resultIndex) => (
                                <div key={resultIndex} className="flex items-start gap-2 text-sm p-3 bg-muted rounded-md">
                                  <span className="text-primary font-semibold">✓</span>
                                  <span>{result}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Technologies */}
                          <div>
                            <h4 className="font-semibold mb-4">Tecnologias e Metodologias</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="default">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* App Development Visual - Only for main app case */}
                          {index === 0 && (
                            <div>
                              <h4 className="font-semibold mb-4">Resultado Visual do Aplicativo</h4>
                              <div className="space-y-4">
                                <img 
                                  src={bancoMercantilApp} 
                                  alt="Aplicativo Banco Mercantil - Tela mostrando cartões Visa Diamante e ofertas para beneficiários do INSS"
                                  className="w-full max-w-md mx-auto rounded-lg border shadow-sm"
                                />
                                <p className="text-sm text-muted-foreground text-center">
                                  Interface moderna do aplicativo com foco em produtos bancários e experiência personalizada para diferentes perfis de clientes
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Access Facilitation Visual - Only for access facilitation case */}
                          {index === 1 && (
                            <div>
                              <h4 className="font-semibold mb-4">Comparação Visual: Antes vs Depois</h4>
                              <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                  <h5 className="text-sm font-medium text-muted-foreground">Versão Anterior - Acesso por Agência/Conta</h5>
                                  <img 
                                    src={acessoAppDepois} 
                                    alt="Tela de acesso anterior do aplicativo Mercantil com campos de agência e conta"
                                    className="w-full rounded-lg border shadow-sm"
                                  />
                                  <p className="text-xs text-muted-foreground">Interface anterior que exigia agência e conta, gerando 4 mil atendimentos mensais</p>
                                </div>
                                <div className="space-y-2">
                                  <h5 className="text-sm font-medium text-muted-foreground">Versão Simplificada - Acesso por CPF</h5>
                                  <img 
                                    src={acessoAppAntes} 
                                    alt="Tela de acesso nova do aplicativo Mercantil com login por CPF"
                                    className="w-full rounded-lg border shadow-sm"
                                  />
                                  <p className="text-xs text-muted-foreground">Nova interface simplificada com acesso por CPF, eliminando barreiras e custos</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Nova Marca Visual - Only for nova marca case */}
                          {index === 3 && (
                            <div>
                              <h4 className="font-semibold mb-4">Comparação Visual: Antes vs Depois</h4>
                              <div className="space-y-4">
                                <img 
                                  src={novaMarcaComparacao} 
                                  alt="Comparação completa antes e depois da nova identidade visual do Banco Mercantil"
                                  className="w-full rounded-lg border shadow-sm"
                                />
                                <p className="text-sm text-muted-foreground text-center">
                                  Evolução completa da identidade visual do aplicativo: de Mercantil do Brasil para Banco Mercantil, 
                                  com modernização de cores, tipografia e posicionamento 'figital'
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Migration Visual - Only for migration case */}
                          {index === 4 && (
                            <div>
                              <h4 className="font-semibold mb-4">Evolução Visual da Migração</h4>
                              <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                  <h5 className="text-sm font-medium text-muted-foreground">2017-2020: Xamarin</h5>
                                  <img 
                                    src={appXamarin2017} 
                                    alt="Aplicativo Mercantil em Xamarin (2017-2020)"
                                    className="w-full rounded-lg border shadow-sm"
                                  />
                                  <p className="text-xs text-muted-foreground">Interface em Xamarin com limitações de performance e customização</p>
                                </div>
                                <div className="space-y-2">
                                  <h5 className="text-sm font-medium text-muted-foreground">2021-2022: Kotlin/Swift</h5>
                                  <img 
                                    src={appKotlinSwift2022} 
                                    alt="Aplicativo Mercantil em Kotlin/Swift (2021-2022)"
                                    className="w-full rounded-lg border shadow-sm"
                                  />
                                  <p className="text-xs text-muted-foreground">Interface nativa moderna com melhor performance e experiência do usuário</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Modernization Visual - Only for modernization case */}
                          {index === 2 && (
                            <div>
                              <h4 className="font-semibold mb-4">Comparação Visual: Antes vs Depois</h4>
                              <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                  <h5 className="text-sm font-medium text-muted-foreground">Versão Anterior</h5>
                                  <img 
                                    src={appAreaInicialAntes} 
                                    alt="Área inicial do aplicativo Mercantil - versão anterior"
                                    className="w-full rounded-lg border shadow-sm"
                                  />
                                  <p className="text-xs text-muted-foreground">Interface anterior com limitações na apresentação de produtos e navegação</p>
                                </div>
                                <div className="space-y-2">
                                  <h5 className="text-sm font-medium text-muted-foreground">Versão Modernizada</h5>
                                  <img 
                                    src={appAreaInicialDepois} 
                                    alt="Área inicial do aplicativo Mercantil - versão modernizada"
                                    className="w-full rounded-lg border shadow-sm"
                                  />
                                  <p className="text-xs text-muted-foreground">Nova interface com melhor organização, ofertas personalizadas e navegação intuitiva</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Mel Chatbot Visual - Only for Mel case */}
                          {index === 5 && (
                            <div>
                              <h4 className="font-semibold mb-4">1° versão da Mel no aplicativo e no whatsapp</h4>
                              <div className="space-y-4">
                                <img 
                                  src={melChatbot} 
                                  alt="Primeira versão da Mel, chatbot do Banco Mercantil, funcionando no aplicativo e WhatsApp"
                                  className="w-full rounded-lg border shadow-sm"
                                />
                                <p className="text-sm text-muted-foreground text-center">
                                  Interface da Mel em diferentes canais: aplicativo móvel e WhatsApp, mostrando a experiência conversacional integrada
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
