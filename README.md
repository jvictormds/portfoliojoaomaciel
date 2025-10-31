# Portfólio Profissional - Template Reutilizável

Um portfólio moderno, responsivo e bilíngue (PT/EN) construído com React, TypeScript e Tailwind CSS. Ideal para profissionais de tecnologia que desejam mostrar seus projetos e experiência de forma elegante.

![Portfolio Preview](https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1200&h=600&fit=crop)

## ✨ Características

- 🌍 **Bilíngue**: Suporte completo para Português e Inglês
- 📱 **Responsivo**: Design adaptável para todos os dispositivos
- 🎨 **Moderno**: Interface limpa usando shadcn/ui e Tailwind CSS
- ⚡ **Rápido**: Construído com Vite para performance otimizada
- 🔍 **SEO-friendly**: Otimizado para mecanismos de busca
- ♿ **Acessível**: Seguindo melhores práticas de acessibilidade

## 🚀 Como Usar Este Template

### Opção 1: Remix no Lovable (Mais Fácil)

1. Acesse o projeto original no [Lovable](https://lovable.dev/projects/69a64d45-dcd9-43b8-ba90-3c6fa72d3739)
2. Clique no nome do projeto → Settings → "Remix this project"
3. Edite diretamente no Lovable usando IA

### Opção 2: Clone via GitHub

```sh
# Clone o repositório
git clone <YOUR_GIT_URL>

# Entre na pasta do projeto
cd <YOUR_PROJECT_NAME>

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:8080`

## 📝 Personalizando Seu Portfólio

### 1. Informações Pessoais e Conteúdo

Edite o arquivo `src/i18n/translations.ts` - **Este é o arquivo principal!**

```typescript
export const translations = {
  pt: {
    header: {
      name: "SEU NOME AQUI",
      // ... continue editando
    },
    hero: {
      title: "Seu Título Profissional",
      subtitle: "Sua Descrição",
      // ... adicione seus dados
    }
  }
}
```

**Seções para personalizar:**
- `header`: Nome e navegação
- `hero`: Título, descrição, highlights
- `about`: Sobre você, skills, idiomas
- `experience`: Suas experiências profissionais
- `projects`: Seus projetos (adicione/remova conforme necessário)
- `education`: Sua formação
- `contact`: Informações de contato

### 2. Imagens

Substitua as imagens em `src/assets/`:

- `joao-profile.jpg` → Sua foto de perfil
- Imagens dos projetos → Screenshots dos seus projetos
- Mantenha os mesmos nomes ou atualize as referências no código

### 3. Currículo PDF

Substitua `public/curriculo-joao-maciel.pdf` pelo seu currículo em PDF

### 4. Cores e Tema (Opcional)

Edite `src/index.css` e `tailwind.config.ts` para personalizar:
- Paleta de cores
- Fontes
- Espaçamentos
- Animações

### 5. Links e Redes Sociais

No arquivo `src/i18n/translations.ts`, atualize:
- Link do LinkedIn
- Email de contato
- Telefone
- Localização

### 6. Projetos

Para adicionar/remover projetos, edite `src/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: t.projects.project1.title,
    category: "Categoria",
    period: "2023-2024",
    // ... seus dados
  },
  // Adicione mais projetos aqui
]
```

### 7. Experiências Profissionais

Edite `src/components/Experience.tsx` para adicionar suas experiências:

```typescript
const experiences = [
  {
    title: "Seu Cargo",
    company: "Sua Empresa",
    period: "2023 - Atual",
    // ... seus dados
  }
]
```

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca UI
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Estilos
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones
- **React Router** - Navegação

## 📦 Deploy

### Opção 1: Deploy via Lovable (Recomendado)

1. Abra o projeto no [Lovable](https://lovable.dev/projects/69a64d45-dcd9-43b8-ba90-3c6fa72d3739)
2. Clique em "Publish" no canto superior direito
3. Seu site estará live em `seusite.lovable.app`
4. Conecte um domínio personalizado em Settings → Domains

### Opção 2: Deploy Manual

Este projeto pode ser deployado em qualquer plataforma que suporte sites estáticos:

```sh
# Build para produção
npm run build

# A pasta dist/ conterá os arquivos para deploy
```

**Plataformas sugeridas:**
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📋 Checklist de Personalização

- [ ] Atualizar nome e informações em `src/i18n/translations.ts`
- [ ] Substituir foto de perfil em `src/assets/`
- [ ] Adicionar seus projetos
- [ ] Adicionar suas experiências profissionais
- [ ] Substituir currículo PDF
- [ ] Atualizar links de redes sociais
- [ ] Personalizar cores (opcional)
- [ ] Testar ambos idiomas (PT/EN)
- [ ] Fazer deploy

## 🤝 Contribuindo

Sinta-se livre para usar este template e adaptá-lo às suas necessidades!

## 📄 Licença

MIT License - use livremente para criar seu portfólio profissional.

## 💡 Precisa de Ajuda?

- [Documentação do Lovable](https://docs.lovable.dev/)
- [Comunidade Lovable no Discord](https://discord.com/channels/1119885301872070706/1280461670979993613)
- [Tutoriais em Vídeo](https://www.youtube.com/watch?v=9KHLTZaJcR8&list=PLbVHz4urQBZkJiAWdG8HWoJTdgEysigIO)

---

Feito com ❤️ usando [Lovable](https://lovable.dev)
