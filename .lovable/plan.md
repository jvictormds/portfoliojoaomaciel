# Página do case "Mais 60 Saúde" — /cases/mais-60-saude

Nova subpágina de case seguindo o mesmo design, tipografia e ritmo visual da página do case "Onde Ir": narrativa em rolagem, blocos alternando fundo claro e escuro, animações discretas de entrada, tudo em português.

Foco: Conversational Design, Prompt Engineering, IA aplicada à saúde e construção prática de agentes — sem resultado financeiro.

## Estrutura da página

1. **Abertura** — "Mais 60 Saúde", subtítulo do briefing, tags (GenAI, HealthTech, Conversational Design, Prompt Engineering, Cogfy Messenger, WhatsApp, Patient Engagement, Healthcare AI) e quatro cards: acompanhamento periódico, canal familiar ao público idoso, síntese automática para enfermagem, comunicação humanizada. Ao lado, a primeira conversa dentro de uma moldura de celular.
2. **O desafio** — escalar o acompanhamento sem perder o cuidado humano, com o comparativo Antes x Depois.
3. **Objetivos** — "Mais do que um chatbot", seis cards com ícone.
4. **O produto na prática** — carrossel com as quatro conversas em molduras de celular, cada uma com título e descrição: boas-vindas, entrevista guiada, coleta estruturada e, em destaque maior, a síntese automática (o ponto alto da página).
5. **Como o agente funciona** — fluxo do paciente até a equipe de enfermagem (WhatsApp → Cogfy Messenger → prompt principal → IA generativa → coleta → síntese), horizontal no desktop e vertical no celular.
6. **Escopo funcional** — duas colunas (o que faz / o que não faz) e um aviso de IA responsável.
7. **Tecnologias utilizadas** — seis cards da stack.
8. **Conhecimentos aplicados** — grade de seis blocos.
9. **Minha atuação** — seis cards de responsabilidade.
10. **Encerramento** — "IA aplicada ao cuidado contínuo" com os dois parágrafos do briefing e botões: Voltar aos Cases, LinkedIn e Baixar CV (usando os links que já existem no site).

Barra de âncoras fixa no topo: O desafio · A experiência · Arquitetura · Minha atuação.

## Imagens

Uso as quatro conversas que você enviou como elemento visual principal, otimizadas para web e sempre dentro de moldura de celular. Elas já indicam que se trata de uma demonstração com dados fictícios; mantenho essa informação visível para não parecer dado real de paciente.

## Card na home

Novo card em "Cases e estudos": **Mais 60 Saúde**, categoria Product Management & IA — Cogfy / HealthTech, ano 2026, com o botão "Ler case completo" levando para a nova página. Sem botão de teste (o agente não tem link público) — se você tiver um número ou link de demonstração, eu adiciono.

## Paleta

Acento roxo/violeta da marca "mais60" vista nos prints, para diferenciar do verde do case Onde Ir, com o verde só nos elementos de conversa.

## Detalhes técnicos

- Nova rota `/cases/mais-60-saude` em `src/App.tsx` com carregamento sob demanda; página em `src/pages/cases/Mais60Saude.tsx` dividida em blocos.
- Conteúdo em pt-BR num arquivo de dados próprio (`src/data/mais60Case.ts`), pronto para receber EN depois.
- Prints convertidos para WebP em `src/assets/mais-60/` e importados direto (mesma abordagem do case Onde Ir).
- Reaproveitamento de `Reveal`, Card, Badge e Button; tokens de cor novos (`--case-mais60-*`) no `index.css` e no Tailwind, nenhuma cor solta.
- SEO por página: title "Mais 60 Saúde — Agente de IA em saúde | João Maciel", meta description, Open Graph, um único H1, H2 por seção, alt em todas as imagens.
- Componente de moldura de celular reutilizável e carrossel com rolagem por encaixe no celular.
