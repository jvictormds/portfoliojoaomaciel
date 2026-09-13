import telaApp from "@/assets/onde-ir/tela-1-app.webp";
import telaChat from "@/assets/onde-ir/tela-2-chat.webp";
import telaConversa from "@/assets/onde-ir/tela-3-conversa.webp";
import telaAgendamento from "@/assets/onde-ir/tela-4-agendamento.webp";
import hubFoto from "@/assets/onde-ir/horizontes-hub.webp";

export const PRODUCT_URL = "https://ondeirdigital.horizonteshub.com.br";

/** Link do vídeo do AWS Summit. Enquanto vazio, o bloco do vídeo fica oculto. */
export const YOUTUBE_URL = "";

export const ondeIrCase = {
  meta: {
    title: "Onde Ir — Case de Product Management e IA | João Maciel",
    description:
      "Como um agente de IA generativa virou a porta de entrada assistencial de 1,6 milhão de clientes na Unimed-BH e evoluiu para produto de mercado.",
  },

  anchors: [
    { id: "desafio", label: "O desafio" },
    { id: "unimed", label: "Unimed-BH" },
    { id: "resultados", label: "Resultados" },
    { id: "mercado", label: "Produto de mercado" },
  ],

  hero: {
    eyebrow: "Product Management & IA — Unimed BH / Horizontes Hub · 2026",
    title: 'Do "não sei pra onde ir" ao encaminhamento certo em menos de 1 minuto',
    subtitle:
      "Como um agente de IA generativa virou a nova porta de entrada assistencial de 1,6 milhão de clientes — e depois virou produto para o mercado de saúde.",
    metrics: [
      { value: "+80%", label: "Adesão ao percurso indicado" },
      { value: "+85%", label: "Satisfação do cliente" },
      { value: "+99%", label: "Assertividade do modelo (auditoria médica)" },
      { value: "+100 mil", label: "Acessos" },
    ],
    tags: [
      "GenAI",
      "Conversational UX",
      "Triagem em saúde",
      "Arquitetura multiagente",
      "LLM Guardrails",
      "AWS",
      "Product-Market Fit",
    ],
  },

  challenge: {
    eyebrow: "O desafio",
    title: "A decisão do paciente de onde ir define o cuidado que vem depois",
    support: "Ter uma rede ampla não basta — o cliente precisa de orientação.",
    metricsLabel: "Números assistenciais da Unimed-BH em 2025",
    metrics: [
      { value: "1,6 milhão", label: "clientes Unimed-BH" },
      { value: "~7 milhões", label: "consultas eletivas" },
      { value: "~2 milhões", label: "atendimentos presenciais em PA" },
      { value: "~500 mil", label: "teleconsultas" },
    ],
    points: [
      "A decisão sobre onde buscar atendimento ocorre em momento de dúvida e insegurança.",
      "Sem orientação clara, o pronto atendimento tende a ser percebido como o caminho mais resolutivo.",
      "O uso inadequado pressiona rede, tempo de espera, experiência e custo assistencial.",
      "Campanhas educativas ajudam, mas não atuam sozinhas no ponto exato da decisão.",
    ],
  },

  act1Divider: "Ato 1 — O produto dentro da Unimed-BH",

  solution: {
    eyebrow: "A solução",
    title: "O Onde Ir orienta e viabiliza o cuidado adequado",
    support: "Um chat que conecta sintoma, recomendação e acesso ao cuidado.",
    steps: [
      {
        title: "Conversa com a IA e conta os sintomas",
        description: "O cliente inicia a conversa no app e descreve o que está sentindo.",
      },
      {
        title: "Interpreta o contexto",
        description: "A IA atua dentro dos protocolos assistenciais definidos pela Unimed-BH.",
      },
      {
        title: "Coordena o cuidado",
        description:
          "Sugere consulta, teleconsulta, PA ou avaliação médica — e viabiliza o agendamento.",
      },
    ],
    highlight: "Orientação + execução — não para na recomendação, leva até o agendamento.",
  },

  product: {
    eyebrow: "O produto",
    title: "A nova porta de entrada do cliente Unimed-BH",
    screens: [
      { src: telaApp.url, caption: "Início da jornada no app" },
      { src: telaChat.url, caption: "O cliente inicia o chat com a IA" },
      { src: telaConversa.url, caption: "Conversa e investigação dos sintomas" },
      { src: telaAgendamento.url, caption: "Recomendação assistencial e agendamento" },
    ],
  },

  safety: {
    eyebrow: "Segurança clínica",
    title: "IA em saúde: medicina, governança e limites claros",
    cards: [
      {
        title: "Protocolos clínicos",
        description: "Critérios assistenciais que estruturam as recomendações.",
      },
      {
        title: "Comitê Médico",
        description: "Supervisão e evolução contínua de fluxos e regras.",
      },
      {
        title: "Filtros e mecanismos de segurança (Guardrails)",
        description: "Limites de escopo e bloqueio de respostas inadequadas.",
      },
      {
        title: "Contingência",
        description: "Escalonamento quando há incerteza ou maior complexidade.",
      },
    ],
    note: "Definir o que o produto não faz foi tão decisivo quanto definir o que ele faz.",
  },

  lifecycle: {
    eyebrow: "Ciclo de vida do produto",
    title: "De piloto interno a produto escalável",
    milestones: [
      { date: "Ago 2024", label: "Início do desenvolvimento" },
      { date: "Abr 2025", label: "Piloto interno com colaboradores" },
      { date: "Jul 2025", label: "Expansão para a carteira Unifácil" },
      { date: "Set 2025", label: "Campanha de marketing" },
      { date: "Jan 2026", label: "Versão com triagem de arboviroses" },
      { date: "Mar 2026", label: "Arquitetura multiagentes" },
      { date: "Jul 2026", label: "Agente especialista em renovação de receitas" },
      { date: "Ago 2026", label: "Expansão para todos os clientes Unimed-BH", highlight: true },
    ],
  },

  backstage: {
    eyebrow: "Bastidores",
    title: "Desenvolvida, testada e escalada com os próprios colaboradores",
    points: [
      "Squad multidisciplinar: médicos, saúde digital, dados, IA, operação assistencial, tecnologia e design.",
      "A cooperativa como campo de teste das próprias inovações, com piloto entre colaboradores e dependentes.",
    ],
    campaignEyebrow: "Campanha de lançamento",
    campaignClaim: "Entrou no app, conversou, o cuidado começou",
    channels: ["App", "Redes sociais", "TV e rádio", "Streaming", "Outdoor", "Cinema e aeroporto"],
  },

  results: {
    eyebrow: "Resultados alcançados",
    bigNumber: "18,4%",
    bigCaption:
      "dos percursos concluídos resultaram em direcionamento para pronto atendimento presencial.",
    metrics: [
      "+80% adesão ao percurso indicado",
      "+85% satisfação do cliente",
      "+99% assertividade do modelo (auditoria médica)",
      "+100 mil acessos",
      "+47 mil percursos completos",
    ],
    footer: "Case premiado e chancelado em nível nacional e internacional.",
  },

  video: {
    eyebrow: "No palco",
    title: "O case apresentado no AWS Summit",
  },

  act2Divider: "Ato 2 — De case interno a produto de mercado",

  turningPoint: {
    title: "O case evoluiu para ser compartilhado com todo o mercado de saúde",
    text: "Funcionar para uma operadora é uma coisa. Ser instalável em qualquer operadora é outro produto — com outras exigências de arquitetura, isolamento de dados e integração.",
    cards: [
      {
        title: "Nova versão na Unimed-BH",
        description: "Arquitetura multiagentes e novas saídas assistenciais.",
      },
      {
        title: "Produto no marketplace do Horizontes Hub",
        description: "Que comercializa diversos Agentes de IA para o mercado de saúde.",
      },
    ],
  },

  architecture: {
    eyebrow: "Arquitetura multiagente",
    title: "De LLM generalista para arquitetura eficiente",
    support: "Mais inteligência clínica, menos custo computacional.",
    before: {
      label: "Antes",
      title: "Onde Ir 1.3 — Arquitetura monolítica",
      points: [
        "Um único LLM central interpreta, decide, conversa e raciocina em cada chamada.",
        "Um prompt gigante e genérico para toda a jornada do paciente.",
        "Alto acoplamento: conversa, segurança, investigação e logística no mesmo contexto.",
        "Contexto longo e reprocessamento constante — custo alto e imprevisível.",
      ],
    },
    after: {
      label: "Agora",
      title: "Onde Ir 1.4 — Arquitetura multiagente",
      points: [
        "Front / Composer — conversacional, com contexto curto e objetivo.",
        "Safety Gate — regra fixa, zero tokens de LLM.",
        "Router de Especialistas — encaminha apenas o necessário ao agente certo.",
        "Agente Especialista — prompt pequeno, específico, sob demanda, com output JSON estruturado.",
        "Menos chamadas e contexto curto — custo previsível e escalável.",
      ],
    },
    highlight: "Mesma jornada, menos chamadas de LLM — contexto curto e custo previsível.",
    requirements: [
      {
        title: "Multi-tenant isolado",
        description: "Isolamento por cliente, auditoria por sessão e LGPD by design.",
      },
      {
        title: "LLM-agnóstico",
        description: "Troca de modelo sem redesenho da solução.",
      },
      {
        title: "Escala",
        description: "De piloto interno a produto para todo o sistema Unimed.",
      },
    ],
  },

  stack: {
    eyebrow: "Tecnologia & parceria AWS",
    title: "Construído na AWS: do primeiro protótipo à escala nacional",
    rows: [
      {
        title: "IA & núcleo clínico",
        description:
          "Amazon Bedrock: motor de IA generativa dos agentes especialistas, LLM-agnóstico.",
      },
      {
        title: "Orquestração & aplicação",
        description:
          "AWS Lambda, API Gateway, Step Functions e Amazon EKS: arquitetura multiagente serverless e elástica.",
      },
      {
        title: "Dados & analytics",
        description:
          "Amazon DynamoDB, Aurora PostgreSQL, S3 e Athena: contexto conversacional, auditoria por sessão e isolamento multi-tenant.",
      },
      {
        title: "Segurança & observabilidade",
        description:
          "AWS KMS, Secrets Manager, CloudWatch, IAM e ACM: criptografia, LGPD, rastreabilidade e monitoramento.",
      },
    ],
    pills: ["Escalável", "Segura e em conformidade", "Sustentável (~29% menos custo computacional)"],
  },

  roi: {
    eyebrow: "Custos e reinvestimentos",
    title: "Eficiência técnica que virou resultado de negócio",
    metrics: [
      { value: "~29%", label: "Redução do custo computacional com a arquitetura multiagente" },
      { value: "5,29%", label: "ROI atual, após reinvestimentos" },
      { value: "111,15%", label: "ROI projetado em 18 meses" },
    ],
    caption:
      "O retorno já é positivo hoje, mesmo absorvendo o investimento contínuo em evoluções.",
  },

  market: {
    eyebrow: "Disponível no mercado",
    title: "Onde Ir Digital",
    text: "O produto que nasceu como solução interna hoje é ofertado para operadoras e cooperativas de todo o país, no marketplace de agentes de IA do Horizontes Hub.",
    cta: "Conhecer o Onde Ir Digital",
    image: hubFoto.url,
    imageAlt: "Escritório do Horizontes Hub, onde o Onde Ir Digital é desenvolvido",
  },

  closing: {
    eyebrow: "Meu papel",
    title: "O que eu fiz neste case",
    paragraphs: [
      "Liderei o produto de ponta a ponta: conduzi o discovery com as áreas assistenciais, transformei a dúvida do beneficiário em hipóteses testáveis e desenhei o percurso que vai da conversa até o agendamento efetivo.",
      "Defini escopo, protocolos e guardrails junto do time clínico e do Comitê Médico — o que a IA responde, o que ela nunca responde e quando ela escala para um humano.",
      "Decidi a virada para a arquitetura multiagente, priorizando previsibilidade de custo e segurança clínica, e conduzi a evolução da versão 1.3 para a 1.4 com o time de engenharia e dados.",
      "Depois conduzi a produtização: multi-tenant, LLM-agnóstico e pronto para outras operadoras, levando o Onde Ir do piloto interno ao marketplace do Horizontes Hub.",
    ],
    backToCases: "Voltar aos cases",
  },
} as const;
