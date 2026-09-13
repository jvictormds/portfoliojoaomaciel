import telaBoasVindas from "@/assets/horizontes-hub/tela-1-boas-vindas.webp";
import telaInstitucional from "@/assets/horizontes-hub/tela-2-institucional.webp";
import telaPortfolio from "@/assets/horizontes-hub/tela-3-portfolio.webp";
import telaOportunidades from "@/assets/horizontes-hub/tela-4-oportunidades.webp";
import telaConexoes from "@/assets/horizontes-hub/tela-5-conexoes.webp";

export const horizontesHubCase = {
  meta: {
    title: "Atendimento Horizontes Hub — Agente de IA no WhatsApp | João Maciel",
    description:
      "Como um agente de IA no WhatsApp atende clientes, startups, parceiros e investidores do Horizontes Hub, reconhecendo a intenção de cada contato e direcionando para o canal correto.",
  },

  anchors: [
    { id: "desafio", label: "O desafio" },
    { id: "experiencia", label: "A experiência" },
    { id: "arquitetura", label: "Arquitetura" },
    { id: "atuacao", label: "Minha atuação" },
  ],

  hero: {
    eyebrow: "Conversational AI · Digital Business · Cogfy Messenger",
    title: "Atendimento Horizontes Hub",
    subtitle:
      "Como um agente de IA foi projetado para atender clientes, parceiros, startups e investidores através do WhatsApp, conectando intenções de negócio aos canais corretos de atendimento.",
    tags: [
      "GenAI",
      "Conversational Design",
      "Business AI",
      "Lead Qualification",
      "Prompt Engineering",
      "Cogfy Messenger",
      "WhatsApp",
      "Customer Experience",
      "Digital Business",
    ],
    highlights: [
      { icon: "rocket", label: "Captação de oportunidades" },
      { icon: "bot", label: "Atendimento institucional inteligente" },
      { icon: "route", label: "Roteamento automático" },
      { icon: "chart", label: "Qualificação de interesses" },
    ],
    demoNote: "Conversas reais de demonstração do agente no WhatsApp.",
  },

  challenge: {
    eyebrow: "O desafio",
    title: "Conectar diferentes públicos a diferentes jornadas",
    paragraphs: [
      "O Horizontes Hub atua com múltiplas frentes de negócio: clientes interessados em produtos, startups buscando conexão e investimentos, parceiros interessados em cocriação, participantes de eventos e instituições interessadas em inovação.",
      "Antes deste projeto, diferentes demandas chegavam pelos mesmos canais, gerando dependência de atendimento manual para identificar o interesse do usuário e direcioná-lo adequadamente.",
      "O desafio era construir uma experiência capaz de compreender a intenção de cada contato e conduzi-lo até o destino correto.",
    ],
    audiencesLabel: "Públicos que chegam pelo mesmo canal",
    audiences: [
      "Clientes",
      "Startups",
      "Parceiros",
      "Investidores",
      "Participantes de eventos",
      "Instituições",
    ],
    before: {
      label: "Antes",
      items: [
        "Contato genérico",
        "Atendimento manual",
        "Triagem humana",
        "Múltiplos encaminhamentos",
      ],
    },
    after: {
      label: "Depois",
      items: [
        "Identificação automática de intenção",
        "Orientação imediata",
        "Direcionamento estruturado",
        "Experiência escalável",
      ],
    },
  },

  goals: {
    eyebrow: "Objetivos",
    title: "Mais que um canal de atendimento",
    items: [
      "Apresentar o Horizontes Hub de forma simples e acessível.",
      "Orientar usuários sobre produtos e soluções disponíveis.",
      "Conectar oportunidades comerciais.",
      "Direcionar startups para programas e iniciativas adequadas.",
      "Apoiar eventos e iniciativas institucionais.",
      "Responder dúvidas com base em conteúdo oficial.",
      "Reduzir dependência de atendimento manual.",
      "Criar uma experiência consistente através do WhatsApp.",
    ],
  },

  product: {
    eyebrow: "A experiência",
    title: "Uma conversa, múltiplos caminhos",
    screens: [
      {
        src: telaBoasVindas,
        title: "Boas-vindas e descoberta",
        description:
          "O agente apresenta o Horizontes Hub e identifica a necessidade do usuário logo no início da conversa.",
      },
      {
        src: telaInstitucional,
        title: "Informações institucionais",
        description:
          "O agente responde dúvidas sobre o posicionamento e a atuação do Horizontes Hub.",
      },
      {
        src: telaPortfolio,
        title: "Exploração do portfólio",
        description:
          "A IA apresenta os produtos disponíveis e ajuda o usuário a encontrar a solução mais adequada.",
      },
      {
        src: telaOportunidades,
        title: "Qualificação de oportunidades",
        description:
          "O agente identifica interesses relacionados a investimentos, startups e novos negócios.",
      },
      {
        src: telaConexoes,
        title: "Conexão com áreas especializadas",
        description:
          "O usuário é encaminhado para o canal correto de relacionamento, vendas ou parcerias.",
        highlight: true,
      },
    ],
    highlightBadge: "O ponto alto do agente",
  },

  flow: {
    eyebrow: "Arquitetura",
    title: "Da intenção ao destino correto",
    steps: [
      "Usuário",
      "WhatsApp",
      "Cogfy Messenger",
      "Motor de IA",
      "Classificação de intenção",
      "Base de conhecimento institucional",
      "Direcionamento inteligente",
    ],
    destinationsLabel: "Canal correto",
    destinations: ["Produto", "Evento", "Investimentos", "Conexões", "Marketplace"],
  },

  capabilities: {
    eyebrow: "Capacidades",
    title: "O que ele consegue fazer",
    items: [
      "Apresentar o Horizontes Hub",
      "Explicar produtos",
      "Divulgar iniciativas",
      "Apresentar eventos",
      "Apoiar startups",
      "Explicar oportunidades de investimento",
      "Conectar parceiros",
      "Direcionar equipes",
      "Encaminhar oportunidades comerciais",
      "Orientar usuários ao canal adequado",
    ],
  },

  business: {
    eyebrow: "Business AI",
    title: "Transformando intenções em jornadas",
    intro:
      "Cada intenção reconhecida abre uma jornada própria, com respostas específicas, conteúdo oficial e um objetivo de negócio diferente.",
    journeys: [
      { intent: "Quero falar com vendas", steps: ["Marketplace", "Contato comercial"] },
      {
        intent: "Tenho uma startup",
        steps: ["Investimentos e novos negócios", "Formulário de conexão"],
      },
      { intent: "Quero saber sobre IA", steps: ["Portfólio de produtos", "Onde Ir", "Cogfy Saúde"] },
      { intent: "Quero participar de eventos", steps: ["Horizontes Talks", "Inscrição"] },
    ],
  },

  stack: {
    eyebrow: "Stack utilizada",
    title: "Tecnologia aplicada ao relacionamento",
    items: [
      {
        name: "Cogfy Messenger",
        description: "Plataforma de construção e orquestração do agente.",
      },
      { name: "WhatsApp", description: "Canal principal de relacionamento." },
      { name: "IA generativa", description: "Interpretação das intenções dos usuários." },
      { name: "Prompt Engineering", description: "Controle de comportamento e roteamento." },
      {
        name: "Intent Recognition",
        description: "Identificação de demandas em linguagem natural.",
      },
      { name: "Business Routing", description: "Direcionamento para jornadas apropriadas." },
      { name: "Knowledge Base", description: "Respostas baseadas em conteúdo institucional." },
      { name: "Conversational UX", description: "Experiência centrada na conversa." },
    ],
  },

  learnings: {
    eyebrow: "Aprendizados",
    title: "Conhecimentos absorvidos e utilizados",
    items: [
      {
        icon: "sparkles",
        name: "Prompt Engineering",
        description: "Construção de respostas consistentes e orientadas a objetivos.",
      },
      {
        icon: "message",
        name: "Conversational Design",
        description: "Criação de jornadas empresariais através de linguagem natural.",
      },
      {
        icon: "scan",
        name: "Intent Recognition",
        description: "Identificação e classificação de interesses diversos.",
      },
      {
        icon: "briefcase",
        name: "IA para negócios",
        description: "Aplicação de IA para vendas, relacionamento e inovação.",
      },
      {
        icon: "library",
        name: "Knowledge Design",
        description: "Estruturação do conhecimento institucional para consulta e navegação.",
      },
      {
        icon: "route",
        name: "Business Routing",
        description: "Transformação de intenções em direcionamentos acionáveis.",
      },
    ],
  },

  role: {
    eyebrow: "Minha atuação",
    title: "Minha atuação neste projeto",
    items: [
      { name: "Product Management", description: "Definição do problema e da experiência." },
      {
        name: "Prompt Engineering",
        description: "Construção e refinamento do comportamento do agente.",
      },
      { name: "Conversational Design", description: "Modelagem das jornadas." },
      { name: "Cogfy Messenger", description: "Configuração e implementação do agente." },
      { name: "Knowledge Base Design", description: "Estruturação do conhecimento institucional." },
      {
        name: "Business Journey Design",
        description: "Mapeamento e construção dos diferentes fluxos de negócio.",
      },
    ],
  },

  closing: {
    title: "IA aplicada à descoberta de oportunidades",
    paragraphs: [
      "Este projeto demonstrou como agentes conversacionais podem atuar além do atendimento tradicional, criando experiências capazes de conectar pessoas, empresas e oportunidades de negócio de forma escalável.",
      "A combinação entre IA generativa, WhatsApp, Cogfy Messenger e design conversacional permitiu transformar intenções em jornadas estruturadas e acionáveis.",
    ],
    backToCases: "Voltar aos cases",
    linkedin: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/jvictormds/",
    cv: "Baixar CV",
    cvUrl: "/curriculo-joao-maciel.pdf",
  },
};
