# Apresentação com Spectacle.js

Template de apresentação criado com [Spectacle](https://formidable.com/open-source/spectacle/), uma biblioteca React para criar slides interativos e modernos.

## 🚀 Começando

### Instalação

```bash
# Instalar dependências
npm install
# ou
pnpm install
```

### Executar em modo desenvolvimento

```bash
npm run dev
# ou
pnpm dev
```

A apresentação estará disponível em `http://localhost:5173`

### Build para produção

```bash
npm run build
# ou
pnpm build
```

## 📖 Estrutura da Apresentação

O template inclui 10 slides com diferentes layouts:

1. **Intro** (`intro.tsx`) - Capa da apresentação
2. **Atomic Design** (`atomic-design.tsx`) - Lista com animações (Appear)
3. **Tokens** (`tokens.tsx`) - Texto com destaque
4. **Semantic** (`semantic.tsx`) - Layout em duas colunas
5. **Token Studio** (`token-studio.tsx`) - Exemplo com syntax highlighting
6. **Style Dictionary** (`style-disctionary.tsx`) - Quote estilizada
7. **SD Formatters** (`sd-formatters.tsx`) - Placeholder para imagens/gráficos
8. **Demonstration** (`demonstration.tsx`) - Passos com animações
9. **Conclusion** (`conclusion.tsx`) - Resumo
10. **Closing Slide** (`closing-slide.tsx`) - Slide final com contatos

### 📁 Estrutura de Pastas

```
src/
├── components/
│   ├── index.ts          # Exporta todos os componentes
│   └── template.tsx      # Template com barra de progresso
├── slides/
│   ├── index.ts          # Exporta todos os slides
│   ├── intro.tsx
│   ├── atomic-design.tsx
│   ├── tokens.tsx
│   ├── semantic.tsx
│   ├── token-studio.tsx
│   ├── style-disctionary.tsx
│   ├── sd-formatters.tsx
│   ├── demonstration.tsx
│   ├── conclusion.tsx
│   └── closing-slide.tsx
├── theme.ts              # Configuração de tema
├── App.tsx               # Componente principal
└── main.tsx
```

## 🎨 Personalização

### Tema

Edite as cores no arquivo `src/theme.ts`:

```tsx
export const theme = {
  colors: {
    primary: '#1e293b', // Cor principal
    secondary: '#3b82f6', // Cor secundária
    tertiary: '#f8fafc', // Cor terciária
    quaternary: '#64748b', // Cor quaternária
  },
  fonts: {
    header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
};
```

### Adicionar Slides

1. Crie um novo arquivo em `src/slides/`, por exemplo `meu-slide.tsx`:

```tsx
import { Slide, Heading, Text, Notes } from 'spectacle';

const MeuSlide = () => {
  return (
    <Slide backgroundColor='tertiary'>
      <Heading>Novo Slide</Heading>
      <Text>Conteúdo do slide</Text>
      <Notes>Notas do apresentador</Notes>
    </Slide>
  );
};

export default MeuSlide;
```

2. Exporte o slide em `src/slides/index.ts`:

```tsx
export { default as MeuSlide } from './meu-slide';
```

3. Importe e use em `src/App.tsx`:

```tsx
import { MeuSlide } from './slides';

// Dentro do Deck:
<MeuSlide />;
```

### Editar Template

O template (barra de progresso e rodapé) está em `src/components/template.tsx`. Edite conforme necessário.

### Componentes Disponíveis

- `<Heading>` - Títulos (h1, h2, h3, etc.)
- `<Text>` - Texto normal
- `<UnorderedList>` / `<OrderedList>` - Listas
- `<ListItem>` - Item de lista
- `<CodePane>` - Blocos de código com syntax highlighting
- `<Quote>` - Citações
- `<Image>` - Imagens
- `<FlexBox>` / `<Box>` - Layout containers
- `<Appear>` - Animações de entrada
- `<Notes>` - Notas do apresentador

## ⌨️ Atalhos de Teclado

- `←` / `→` - Navegar entre slides
- `Option + P` (Mac) / `Alt + P` (Windows/Linux) - Modo apresentador
- `Option + O` (Mac) / `Alt + O` (Windows/Linux) - Visão geral dos slides

## 📝 Notas do Apresentador

Cada slide pode ter notas que aparecem no modo apresentador:

```tsx
<Slide>
  <Heading>Título</Heading>
  <Notes>Suas notas privadas aqui</Notes>
</Slide>
```

## 🎯 Dicas

1. **Animações**: Use `<Appear>` para revelar elementos progressivamente
2. **Layout**: Combine `<FlexBox>` e `<Box>` para layouts flexíveis
3. **Código**: O `<CodePane>` suporta vários temas e linguagens
4. **Imagens**: Use o componente `<Image>` para adicionar imagens
5. **Responsivo**: A apresentação se adapta a diferentes tamanhos de tela

## 📚 Recursos

- [Documentação Spectacle](https://formidable.com/open-source/spectacle/)
- [Exemplos](https://formidable.com/open-source/spectacle/docs/basic-concepts/)
- [GitHub](https://github.com/FormidableLabs/spectacle)

## 🛠️ Tecnologias

- React 19
- Spectacle 10
- TypeScript
- Vite
- ESLint

---

Feito com ❤️ usando Spectacle.js
