# Página do case "Onde Ir" — /cases/onde-ir

Criar uma subpágina dedicada ao case, com narrativa em dois atos (o produto dentro da Unimed-BH e a virada para produto de mercado), seguindo o design e a tipografia já usados no site.

## Estrutura da página

1. **Abertura** — título "Do 'não sei pra onde ir' ao encaminhamento certo em menos de 1 minuto", com 4 números de destaque (+80% adesão, +85% satisfação, +99% assertividade, +100 mil acessos) e dois botões: conhecer o produto e assistir à apresentação.
2. **O desafio** — números assistenciais de 2025 e por que a decisão de "onde ir" é caríssima.
3. **Ato 1 — dentro da Unimed-BH**
   - A solução em 3 passos (conversa, interpretação, coordenação do cuidado)
   - O produto na prática: carrossel com as telas do app
   - Segurança clínica: protocolos, comitê médico, guardrails, contingência
   - Ciclo de vida: linha do tempo de Ago 2024 a Ago 2026
   - Bastidores e campanha de lançamento
   - Resultados: bloco de tela cheia com o **18,4%** em destaque máximo
   - Vídeo do AWS Summit (carrega só ao clicar)
4. **Ato 2 — produto de mercado** (troca de paleta)
   - A virada de chave
   - Antes x Agora: arquitetura monolítica vs. multiagente + requisitos de produto (multi-tenant, LLM-agnóstico, escala)
   - Tecnologia AWS (bloco compacto)
   - Eficiência e retorno: ~29% de redução de custo, ROI 5,29% atual e 111,15% projetado
   - O produto no mercado, com botão para ondeirdigital.horizonteshub.com.br
5. **Fechamento** — "O que eu fiz neste case" (escrevo um rascunho em primeira pessoa para você revisar) + botões de contato/voltar aos cases.

## Imagens

Extraio as telas do app e a imagem do site do produto direto do PDF do AWS Summit que você enviou, recorto e otimizo para a web. Se alguma sair com qualidade baixa, eu aviso e você pode enviar a versão original.

## Card na home

O card "Onde Ir Digital" passa a ter dois botões: **Ler case completo** (leva para a nova página) e **Testar agora** (link externo). O link externo é atualizado para ondeirdigital.horizonteshub.com.br.

## Ritmo visual

Alternância de fundo claro/escuro a cada dois blocos, barra de âncoras fixa no topo ("O desafio · Unimed-BH · Resultados · Produto de mercado"), animações discretas de entrada, números grandes nos blocos de métrica. No celular: linha do tempo vertical e carrossel de telas com rolagem por encaixe.

## Detalhes técnicos

- Nova rota `/cases/onde-ir` em `src/App.tsx`, com carregamento sob demanda, e nova página em `src/pages/cases/OndeIr.tsx` dividida em componentes de bloco.
- Conteúdo em pt-BR estruturado num arquivo de dados próprio do case, pronto para receber a versão EN depois (o toggle atual continua funcionando; a página abre em pt).
- Extração de imagens do PDF com `pdfimages`, conversão para WebP e publicação via Lovable Assets.
- YouTube com facade (thumbnail + iframe só no clique).
- SEO por página: title "Onde Ir — Case de Product Management e IA | João Maciel", meta description do plano, Open Graph, um único H1, H2 por seção, alt em todas as imagens, contraste AA.
- Reaproveitamento de Card, Badge e Button já existentes; nenhuma cor fora dos tokens do tema, com o verde Unimed como acento do case.

## Pendência

Ainda preciso do **link do vídeo no YouTube**. Sem ele, deixo o bloco do vídeo pronto e oculto, e ativo assim que você mandar o link.
