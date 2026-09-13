import telaBoasVindas from "@/assets/mais-60/tela-1-boas-vindas.webp";
import telaEntrevista from "@/assets/mais-60/tela-2-entrevista.webp";
import telaColeta from "@/assets/mais-60/tela-3-coleta.webp";
import telaSintese from "@/assets/mais-60/tela-4-sintese.webp";

export const mais60Case = {
  meta: {
    title: "Mais 60 Saúde — Agente de IA em saúde | João Maciel",
    description:
      "Como um agente de IA no WhatsApp faz o acompanhamento periódico de pacientes 60+ e entrega resumos clínicos estruturados para equipes de enfermagem.",
  },

  anchors: [
    { id: "desafio", label: "O desafio" },
    { id: "experiencia", label: "A experiência" },
    { id: "arquitetura", label: "Arquitetura" },
    { id: "atuacao", label: "Minha atuação" },
  ],

  hero: {
    eyebrow: "Health AI · Conversational Design · Cogfy Messenger",
    title: "Mais 60 Saúde",
    subtitle:
      "Como um agente de IA foi projetado para realizar acompanhamentos periódicos de pessoas acima de 60 anos através do WhatsApp, transformando respostas abertas em informações organizadas para equipes assistenciais.",
    tags: [
      "GenAI",
      "HealthTech",
      "Conversational Design",
      "Prompt Engineering",
      "Cogfy Messenger",
      "WhatsApp",
      "Patient Engagement",
      "Healthcare AI",
    ],
    highlights: [
      { icon: "stethoscope", label: "Acompanhamento periódico" },
      { icon: "phone", label: "Canal familiar ao público idoso" },
      { icon: "bot", label: "Síntese automática para enfermagem" },
      { icon: "heart", label: "Comunicação humanizada" },
    ],
    demoNote: "Conversas de demonstração, com dados fictícios.",
  },

  challenge: {
    eyebrow: "O desafio",
    title: "Escalar o acompanhamento sem perder o cuidado humano",
    paragraphs: [
      "Programas de acompanhamento de pacientes idosos dependem tradicionalmente de profissionais para realizar contatos periódicos, coletar informações relevantes e registrar observações sobre a evolução dos pacientes.",
      "O objetivo do projeto era criar uma experiência simples e acolhedora, utilizando o WhatsApp como canal principal, capaz de apoiar as equipes assistenciais sem substituir a atuação profissional.",
    ],
    painsLabel: "Desafios frequentes do processo manual",
    pains: [
      "Alto esforço operacional",
      "Registros heterogêneos",
      "Dificuldade para padronização",
      "Baixa escalabilidade",
      "Consolidação manual dos dados coletados",
    ],
    before: {
      label: "Antes",
      items: ["Contato manual", "Registros dispersos", "Alta dependência operacional"],
    },
    after: {
      label: "Depois",
      items: [
        "Acompanhamento automatizado",
        "Padronização",
        "Resumo automático",
        "Encaminhamento estruturado",
      ],
    },
  },

  goals: {
    eyebrow: "Objetivos",
    title: "Mais do que um chatbot",
    items: [
      { icon: "clipboard", text: "Realizar triagens periódicas de acompanhamento" },
      { icon: "alert", text: "Identificar sinais de atenção de forma antecipada" },
      { icon: "database", text: "Registrar informações relevantes de maneira estruturada" },
      { icon: "notebook", text: "Gerar resumos acionáveis para equipes de enfermagem" },
      { icon: "book", text: "Disponibilizar conteúdos de saúde para educação do paciente" },
      { icon: "message", text: "Utilizar uma linguagem acessível para o público 60+" },
    ],
  },

  product: {
    eyebrow: "A experiência",
    title: "Uma conversa simples para o paciente. Uma informação rica para a equipe.",
    screens: [
      {
        src: telaBoasVindas,
        title: "Boas-vindas e contextualização",
        description:
          "O agente se apresenta, explica seu propósito e oferece as opções disponíveis para o paciente.",
      },
      {
        src: telaEntrevista,
        title: "Entrevista guiada",
        description:
          "As perguntas são realizadas em linguagem simples e acolhedora, respeitando o perfil do público idoso.",
      },
      {
        src: telaColeta,
        title: "Coleta estruturada",
        description:
          "O agente registra hábitos, adesão ao tratamento e condições de saúde relatadas durante a conversa.",
      },
      {
        src: telaSintese,
        title: "Síntese automática",
        description:
          "Ao final da entrevista, a IA consolida as respostas em um resumo estruturado para apoiar a equipe assistencial.",
        highlight: true,
      },
    ],
    highlightBadge: "O ponto alto do agente",
  },

  flow: {
    eyebrow: "Arquitetura",
    title: "Da conversa à tomada de decisão",
    steps: [
      "Paciente",
      "WhatsApp",
      "Cogfy Messenger",
      "Prompt principal",
      "Motor de IA generativa",
      "Coleta e estruturação",
      "Síntese assistencial",
      "Equipe de enfermagem",
    ],
  },

  scope: {
    eyebrow: "Escopo",
    title: "O que o agente faz e o que ele não faz",
    does: {
      label: "O que faz",
      items: [
        "Acompanhamento periódico",
        "Coleta de informações em linguagem natural",
        "Organização das respostas",
        "Síntese automática",
        "Registro de indicadores relevantes",
        "Educação em saúde",
        "Apoio às equipes assistenciais",
      ],
    },
    doesNot: {
      label: "O que não faz",
      items: [
        "Diagnosticar doenças",
        "Prescrever medicamentos",
        "Substituir médicos ou enfermeiros",
        "Emitir parecer clínico",
        "Tomar decisões assistenciais de forma autônoma",
      ],
    },
    responsibleTitle: "IA responsável",
    responsibleText:
      "O agente é um apoio operacional: ele organiza informação e devolve o caso para quem tem competência clínica. Qualquer sinal de atenção é encaminhado para a equipe de enfermagem, com transparência sobre os limites da IA em toda a conversa.",
  },

  stack: {
    eyebrow: "Stack utilizada",
    title: "Tecnologia aplicada ao cuidado",
    items: [
      {
        name: "Cogfy Messenger",
        description: "Plataforma de construção e orquestração do agente.",
      },
      {
        name: "WhatsApp",
        description: "Canal de comunicação amplamente conhecido pelo público-alvo.",
      },
      {
        name: "IA generativa",
        description: "Interpretação das respostas e geração de sínteses contextuais.",
      },
      {
        name: "Prompt Engineering",
        description: "Condução da entrevista, controle do tom de voz e geração estruturada.",
      },
      {
        name: "Conversational Design",
        description: "Transformação de formulários tradicionais em diálogos naturais.",
      },
      {
        name: "Estruturação de dados",
        description: "Transformação de respostas abertas em informações organizadas.",
      },
    ],
  },

  learnings: {
    eyebrow: "Aprendizados",
    title: "Conhecimentos absorvidos e utilizados durante o projeto",
    items: [
      {
        name: "Conversational UX",
        description:
          "Como transformar questionários clínicos em experiências conversacionais mais naturais.",
      },
      {
        name: "Prompt Engineering",
        description:
          "Criação de instruções para coleta, interpretação e organização das respostas.",
      },
      {
        name: "Healthcare AI",
        description: "Aplicação de IA em contextos assistenciais respeitando limites clínicos.",
      },
      {
        name: "Humanização",
        description:
          "Adaptação da linguagem para pessoas idosas utilizando comunicação acolhedora.",
      },
      {
        name: "Estruturação de conhecimento",
        description:
          "Conversão de texto livre em informações úteis para profissionais de saúde.",
      },
      {
        name: "IA responsável",
        description:
          "Definição de limites, transparência e mecanismos para evitar uso inadequado.",
      },
    ],
  },

  role: {
    eyebrow: "Minha contribuição",
    title: "Minha atuação neste projeto",
    items: [
      { name: "Product Management", description: "Definição do problema, objetivos e requisitos." },
      { name: "Conversational Design", description: "Construção da jornada conversacional." },
      { name: "Prompt Engineering", description: "Definição dos comportamentos da IA." },
      { name: "Cogfy Messenger", description: "Modelagem e construção do agente." },
      { name: "Healthcare AI", description: "Definição dos limites e fluxos assistenciais." },
      {
        name: "Experience Design",
        description: "Criação da experiência de acompanhamento para o paciente.",
      },
    ],
  },

  closing: {
    title: "IA aplicada ao cuidado contínuo",
    paragraphs: [
      "Este projeto demonstrou como agentes conversacionais podem ampliar a capacidade operacional das equipes assistenciais, oferecendo acompanhamento digital humanizado sem abrir mão da supervisão profissional.",
      "A combinação entre WhatsApp, IA generativa e design conversacional permitiu criar uma experiência simples para o paciente e rica em informações para a equipe de saúde.",
    ],
    backToCases: "Voltar aos cases",
    linkedin: "LinkedIn",
    linkedinUrl: "https://www.linkedin.com/in/jvictormds/",
    cv: "Baixar CV",
    cvUrl: "/curriculo-joao-maciel.pdf",
  },
};
