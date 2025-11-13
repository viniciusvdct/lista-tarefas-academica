# Decisões Arquiteturais e Técnicas

## 1. Escolha do Framework Web: React 19

### Justificativa

React foi selecionado como framework principal para este projeto por diversos motivos estratégicos:

**Comunidade e Ecossistema:** React possui uma das maiores comunidades de desenvolvimento web, com abundância de bibliotecas complementares, tutoriais e recursos educacionais. Isso facilita tanto o desenvolvimento quanto a manutenção futura do projeto.

**Curva de Aprendizado:** Para fins acadêmicos, React oferece uma curva de aprendizado equilibrada. Conceitos como componentes, JSX e hooks são relativamente intuitivos e bem documentados.

**Componentes Reutilizáveis:** A arquitetura baseada em componentes do React promove código modular e reutilizável, facilitando a manutenção e extensão da aplicação.

**Compatibilidade com Ferramentas Modernas:** React integra-se perfeitamente com Vite, TypeScript e outras ferramentas modernas de desenvolvimento.

### Alternativas Consideradas

- **Vue.js:** Mais simples e com curva de aprendizado menor, mas com comunidade menor
- **Angular:** Framework mais robusto, mas com complexidade desnecessária para este projeto
- **Svelte:** Abordagem inovadora, mas com comunidade menor e menos recursos educacionais

## 2. Ferramenta de Build: Vite

### Justificativa

Vite foi escolhido em lugar de webpack ou Create React App por:

**Velocidade:** Vite oferece inicialização de servidor de desenvolvimento significativamente mais rápida através de ES modules nativos, melhorando a experiência do desenvolvedor.

**Configuração Mínima:** Vite requer pouca configuração, permitindo focar no desenvolvimento da aplicação em vez de configurações complexas de build.

**HMR (Hot Module Replacement):** O recarregamento instantâneo de módulos oferece feedback imediato durante o desenvolvimento.

**Build Otimizado:** Vite gera bundles otimizados para produção com tree-shaking automático.

## 3. Estilização: Tailwind CSS 4 com shadcn/ui

### Justificativa para Tailwind CSS

**Abordagem Utility-First:** Tailwind permite construir interfaces complexas sem sair do HTML, evitando a necessidade de escrever CSS customizado extensivo.

**Responsividade Integrada:** Breakpoints pré-definidos (sm, md, lg, xl) facilitam a implementação de design responsivo.

**Consistência Visual:** Design tokens e variáveis CSS garantem consistência em toda a aplicação.

**Performance:** Tailwind gera apenas o CSS necessário, resultando em arquivos menores.

### Justificativa para shadcn/ui

**Componentes Acessíveis:** shadcn/ui fornece componentes pré-construídos seguindo padrões de acessibilidade WCAG.

**Customizabilidade:** Componentes são copiados para o projeto, permitindo customização completa sem dependências externas.

**Integração com Tailwind:** shadcn/ui é construído sobre Tailwind, garantindo consistência de estilos.

## 4. Gerenciamento de Estado: React Hooks com localStorage

### Arquitetura de Estado

**Hook Customizado `useTasks`:** Centraliza toda a lógica de gerenciamento de tarefas em um único hook, seguindo o padrão de composição do React.

**Persistência em localStorage:** Dados são automaticamente salvos no localStorage do navegador, permitindo persistência sem necessidade de backend.

**Sincronização Automática:** useEffect garante que dados sejam salvos sempre que o estado muda.

### Justificativa

**Simplicidade:** Para uma aplicação sem autenticação, localStorage é suficiente e evita complexidade de servidor.

**Offline-First:** Usuários podem usar a aplicação mesmo sem conexão com internet.

**Sem Dependências Externas:** Evita adicionar bibliotecas como Redux ou Zustand desnecessariamente.

## 5. Estrutura de Componentes

### Arquitetura em Camadas

```
Página (Home.tsx)
    ↓
Componentes Principais (TaskForm, TaskList)
    ↓
Componentes Secundários (TaskItem)
    ↓
Hooks Customizados (useTasks)
    ↓
Utilitários (dateUtils)
```

### Separação de Responsabilidades

- **TaskForm:** Responsável apenas por capturar entrada do usuário
- **TaskList:** Gerencia filtragem e exibição de tarefas
- **TaskItem:** Renderiza uma tarefa individual
- **useTasks:** Centraliza lógica de estado e persistência

## 6. HTML Semântico e Acessibilidade

### Elementos Semânticos Utilizados

| Elemento | Uso |
|----------|-----|
| `<header>` | Cabeçalho da aplicação com título |
| `<main>` | Conteúdo principal da página |
| `<section>` | Seções lógicas (formulário, lista de tarefas) |
| `<article>` | Cada tarefa individual |
| `<footer>` | Rodapé com informações de copyright |
| `<form>` | Formulário de cadastro de tarefas |
| `<label>` | Rótulos para campos de entrada |

### Atributos de Acessibilidade

**aria-label:** Fornece descrições para elementos sem texto visível
**aria-pressed:** Indica estado de botões toggle
**aria-required:** Marca campos obrigatórios
**aria-live:** Notifica mudanças de conteúdo dinâmico
**role:** Define papéis semânticos quando elementos HTML não são suficientes

## 7. Design Responsivo: Mobile-First

### Abordagem Mobile-First

A aplicação foi desenvolvida começando pelo design mobile, depois expandindo para tablets e desktops. Isso garante:

**Experiência Otimizada:** Usuários mobile recebem interface otimizada para suas necessidades
**Performance:** Menos CSS é carregado em dispositivos móveis
**Progressão Gradual:** Recursos adicionais são adicionados conforme o tamanho da tela aumenta

### Breakpoints Utilizados

- **sm (640px):** Tablets pequenos e celulares grandes
- **md (768px):** Tablets
- **lg (1024px):** Desktops pequenos
- **xl (1280px):** Desktops grandes

## 8. TypeScript para Segurança de Tipos

### Benefícios Implementados

**Detecção de Erros:** TypeScript detecta erros de tipo em tempo de desenvolvimento, não em produção.

**Autocompletar Melhorado:** IDEs oferecem sugestões mais precisas com tipos definidos.

**Documentação Automática:** Tipos servem como documentação do código.

**Refatoração Segura:** Mudanças de tipos alertam sobre todos os locais afetados.

### Tipos Principais

```typescript
interface Task {
  id: string;
  title: string;
  discipline: string;
  dueDate: string;
  completed: boolean;
  createdAt: string;
}

type FilterStatus = 'all' | 'pending' | 'completed';
```

## 9. Validação de Dados

### Validações Implementadas

**Título:** Não pode estar vazio
**Disciplina:** Deve ser selecionada do dropdown
**Data:** Não pode estar vazia e não pode ser no passado
**Feedback:** Mensagens de erro claras em português

## 10. Persistência de Dados: localStorage

### Estratégia de Armazenamento

**Chave:** `academic-tasks` - identificador único no localStorage
**Formato:** JSON stringificado para compatibilidade
**Sincronização:** Automática via useEffect

### Ciclo de Vida

1. **Carregamento:** Dados são carregados do localStorage ao montar o componente
2. **Modificação:** Estado é atualizado na memória
3. **Persistência:** Dados são salvos no localStorage após cada mudança
4. **Recuperação:** Dados persistem entre sessões do navegador

## 11. Roteamento: Wouter

### Justificativa

**Leveza:** Wouter é extremamente leve (1.5KB), ideal para aplicações simples
**Simplicidade:** API simples e intuitiva para roteamento básico
**Performance:** Não adiciona overhead significativo

### Estrutura de Rotas

Atualmente a aplicação possui apenas uma rota principal (`/`), mas a estrutura permite fácil expansão para rotas adicionais no futuro.

## 12. Ícones: Lucide React

### Benefícios

**SVG Nativo:** Ícones são SVG, garantindo escalabilidade perfeita
**Tree-Shakeable:** Apenas ícones utilizados são incluídos no bundle final
**Acessibilidade:** Suporte nativo para ARIA labels
**Customizável:** Ícones podem ser redimensionados e coloridos facilmente

## 13. Tratamento de Erros

### Estratégia Implementada

**Validação de Entrada:** Formulários validam dados antes de enviar
**Mensagens de Erro:** Feedback claro em português
**Try-Catch:** Operações de localStorage são envolvidas em try-catch
**Graceful Degradation:** Aplicação continua funcionando mesmo com erros

## 14. Performance

### Otimizações Implementadas

**useMemo:** Cálculos custosos são memorizados para evitar recálculos desnecessários
**useCallback:** Funções de callback são estabilizadas para evitar re-renders
**Code Splitting:** Vite automaticamente divide o código em chunks
**Lazy Loading:** Componentes podem ser carregados sob demanda

## 15. Testes e Validação

### Abordagem de Qualidade

**Testes Manuais:** Validação em diferentes navegadores e dispositivos
**Validação de Acessibilidade:** Uso de ferramentas como Lighthouse
**Validação de Responsividade:** Testes em breakpoints definidos
**Validação de Funcionalidade:** Todas as operações CRUD testadas

## Conclusão

As decisões arquiteturais foram tomadas considerando:

- **Simplicidade:** Evitar complexidade desnecessária
- **Manutenibilidade:** Código claro e bem organizado
- **Acessibilidade:** Conformidade com WCAG 2.1 Level AA
- **Performance:** Aplicação rápida e responsiva
- **Educacional:** Demonstração de boas práticas modernas

Esta arquitetura fornece uma base sólida para expansão futura, permitindo fácil adição de funcionalidades como autenticação, sincronização com servidor e recursos colaborativos.
