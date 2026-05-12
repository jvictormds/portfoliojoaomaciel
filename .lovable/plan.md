# Adicionar case "Onde Ir Digital"

## Onde entra
Subseção **"Cases e estudos"** (ao lado do Inter Arcade e Zarp Localiza), pois é um piloto/POC do Horizontes Hub — Unimed BH.

## Mudanças

### 1. `src/i18n/translations.ts`
Adicionar item `ondeIrDigital` em `cases.items` (PT e EN), no padrão dos demais:

- **title:** "Onde Ir Digital"
- **subtitle (PT):** "Do 'não sei pra onde ir' ao encaminhamento certo em menos de 1 minuto"
- **description (PT):** Texto curto do card já fornecido pelo usuário
- **category (PT):** "Product Management & IA — Unimed BH / Horizontes Hub"
- **tags:** `["GenAI", "Conversational UX", "Triagem em saúde", "WhatsApp", "Prompt Engineering", "LLM Guardrails", "Discovery"]`

Adicionar também duas novas chaves de UI em `cases`:
- `testCase: "Testar agora"` / `"Try it now"`

### 2. `src/components/Cases.tsx`
- Estender a interface `Case` com campo opcional `testUrl?: string` (e `pdfUrl` opcional, já que este case não terá PDF inicialmente).
- Adicionar `ondeIrDigital` ao array `studies` (ano `2026`, `testUrl: "https://horizonteshub.com/ondeir"`, sem `pdfUrl`).
- Definir cor temática própria: **emerald** (verde Unimed) — borda do card, badge, ícone e botão.
- Atualizar `CaseCard`:
  - Se houver `testUrl` e não houver `pdfUrl`: renderizar **apenas** o botão "Testar agora" como `<a target="_blank">` com ícone `ExternalLink` (sem Dialog/Drawer de PDF).
  - Se ambos existirem: mostrar "Testar agora" + "Ler case completo" (preparado para o futuro).
  - Manter comportamento atual quando só houver `pdfUrl`.

### 3. Mapeamento de cores
Adicionar branch `ondeIrDigital → emerald` nos blocos condicionais de cor (border-l, badge, ícone, botão) — mantendo o padrão atual de classes Tailwind por id.

## Observação
O texto longo da "página do case" não é exibido hoje (os cases longos vivem em PDFs). Quando você gerar/enviar o PDF, eu adiciono `pdfUrl: "/cases/case-onde-ir-digital.pdf"` e o botão "Ler case completo" aparece automaticamente.

## Pergunta antes de implementar
Quer que eu siga com o tema **verde Unimed (emerald)** para esse card e use a categoria exatamente como acima, ou prefere ajustar algo?
