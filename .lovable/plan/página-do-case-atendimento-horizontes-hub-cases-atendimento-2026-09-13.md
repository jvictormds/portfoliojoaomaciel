# Página do case "Atendimento Horizontes Hub" — /cases/atendimento-horizontes-hub

Nova subpágina de case com o mesmo design, tipografia e ritmo visual das páginas "Onde Ir" e "Mais 60 Saúde": narrativa em rolagem, blocos alternando fundo claro e escuro, animações discretas, tudo em português.

Foco: agente de IA institucional no WhatsApp que entende a intenção do contato e o leva ao canal correto — produtos, eventos, investimentos, conexões ou marketplace.

## Estrutura da página

1. **Abertura** — "Atendimento Horizontes Hub", subtítulo do briefing, tags (GenAI, Conversational Design, Business AI, Lead Qualification, Prompt Engineering, Cogfy Messenger, WhatsApp, Customer Experience, Digital Business) e quatro cards: captação de oportunidades, atendimento institucional inteligente, roteamento automático, qualificação de interesses. Ao lado, a conversa de boas-vindas em moldura de celular.
2. **O desafio** — "Conectar diferentes públicos a diferentes jornadas", com o comparativo Antes x Depois.
3. **Objetivos** — "Mais que um canal de atendimento", grade com os oito objetivos numerados.
4. **O produto na prática** — carrossel com cinco conversas em molduras de celular: boas-vindas e descoberta, informações institucionais, exploração do portfólio, qualificação de oportunidades e, em destaque maior, conexão com áreas especializadas.
5. **Como o agente funciona** — fluxo do usuário até o destino (WhatsApp → Cogfy Messenger → motor de IA → classificação de intenção → base de conhecimento → direcionamento), abrindo nos cinco destinos possíveis; horizontal no desktop, vertical no celular.
6. **Capacidades do agente** — grade com os dez itens.
7. **Inteligência de negócio** — quatro trilhas mostrando frase do usuário → jornada → destino, com uma linha explicando que cada jornada tem resposta e objetivo próprios.
8. **Tecnologias utilizadas** — oito cards da stack.
9. **Conhecimentos aplicados** — grade de seis blocos com ícone.
10. **Minha atuação** — seis cards de responsabilidade.
11. **Encerramento** — "IA aplicada à descoberta de oportunidades" com os dois parágrafos do briefing e botões: Voltar aos Cases, LinkedIn e Baixar CV (links já existentes no site).

Barra de âncoras fixa no topo: O desafio · A experiência · Arquitetura · Minha atuação.

## Imagens

Uso os prints enviados como elemento visual principal, otimizados para web e sempre dentro de moldura de celular. Seleciono uma imagem por tela do carrossel (as sequências repetidas ficam de fora para não duplicar conteúdo): abertura, "o que o Horizontes Hub faz", agentes de IA, startup/investimento e time de conexões/vendas.

## Card na home

Novo card em "Cases e estudos": **Atendimento Horizontes Hub**, categoria Product Management & IA — Unimed BH / Horizontes Hub, ano 2026, com "Ler case completo" levando para a nova página. Sem botão de teste — se você quiser expor o número de WhatsApp do agente, eu adiciono.

## Paleta

Acento azul-petróleo/ciano ligado à identidade do Horizontes Hub, para diferenciar do verde do Onde Ir e do violeta do Mais 60.

## Detalhes técnicos

- Nova rota `/cases/atendimento-horizontes-hub` em `src/App.tsx` com carregamento sob demanda; página em `src/pages/cases/AtendimentoHorizontesHub.tsx`.
- Conteúdo em pt-BR em `src/data/horizontesHubCase.ts`, pronto para receber EN depois.
- Prints convertidos para WebP em `src/assets/horizontes-hub/` com nomes semânticos e importados direto.
- Reaproveitamento de `Reveal`, `PhoneFrame`, Card, Badge e Button; novos tokens `--case-hub-*` no `index.css` e no Tailwind, nenhuma cor solta.
- SEO por página: title "Atendimento Horizontes Hub — Agente de IA no WhatsApp | João Maciel", meta description, Open Graph, canonical, um único H1, H2 por seção, alt em todas as imagens.
- Carrossel com rolagem por encaixe no celular, igual ao case Mais 60.
