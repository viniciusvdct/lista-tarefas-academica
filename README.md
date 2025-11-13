# Sistema Web de Lista de Tarefas Acadêmicas

**Autor:** Vinícius da Conceição Teixeira  
**Disciplina:** Projeto Integrador de Tecnologia da Informação II  
**Instituição:** UFMS Digital  
**Período:** 2025.2

---

## 📖 Sobre o Projeto

Uma aplicação web dinâmica e responsiva desenvolvida para auxiliar estudantes na organização e gerenciamento de suas atividades acadêmicas. O sistema permite o cadastro, visualização, filtragem e marcação de tarefas com interface moderna e intuitiva.

**Versão:** 1.0.0  
**Licença:** MIT

---

## ✨ Funcionalidades Principais

### Gerenciamento de Tarefas
- ✅ **Cadastro de Tarefas** - Adicione novas tarefas com título, disciplina e data de entrega
- 📋 **Visualização em Lista** - Visualize todas as tarefas organizadas de forma clara
- ✔️ **Marcar como Concluída** - Marque tarefas finalizadas com um clique
- 🗑️ **Remover Tarefas** - Delete tarefas desnecessárias

### Filtros e Organização
- 🔍 **Filtros Avançados** - Filtre por status (todas/pendentes/concluídas) e por disciplina
- 📅 **Ordenação Automática** - Tarefas ordenadas por data de entrega
- 📊 **Estatísticas em Tempo Real** - Visualize total, pendentes e concluídas

### Recursos Técnicos
- 💾 **Persistência Local** - Dados salvos automaticamente no localStorage
- 📱 **Design Responsivo** - Adaptação perfeita para mobile, tablet e desktop
- 🌙 **Modo Escuro** - Suporte para tema escuro

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Finalidade |
|------------|--------|-----------|
| **React** | 19 | Framework UI |
| **TypeScript** | Última | Tipagem estática |
| **Vite** | Última | Build tool |
| **Tailwind CSS** | 4 | Framework CSS |
| **shadcn/ui** | Última | Componentes UI |
| **Wouter** | Última | Roteamento |
| **Lucide React** | Última | Biblioteca de ícones |

---

## 📦 Instalação e Configuração

### Pré-requisitos

```bash
Node.js >= 18.0.0
npm ou pnpm
```

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/lista-tarefas-academica.git
cd lista-tarefas-academica
```

2. **Instale as dependências**
```bash
pnpm install
# ou
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
pnpm dev
# ou
npm run dev
```

4. **Acesse a aplicação**
```
http://localhost:5173
```

---

## 🚀 Guia de Uso

### Adicionar Nova Tarefa

1. Preencha o formulário com:
   - **Título da Tarefa** - Descrição da atividade
   - **Disciplina** - Matéria relacionada
   - **Data de Entrega** - Prazo limite

2. Clique em **"Adicionar Tarefa"**

### Gerenciar Tarefas

- **Concluir** - Clique no ícone de círculo ⭕
- **Remover** - Clique no ícone de lixeira 🗑️
- **Filtrar por Status** - Use os botões: Todas | Pendentes | Concluídas
- **Filtrar por Disciplina** - Selecione no dropdown

### Painel de Estatísticas

Visualize em tempo real:
- **Total** - Todas as tarefas cadastradas
- **Pendentes** - Tarefas não concluídas
- **Concluídas** - Tarefas finalizadas

---

## 📱 Responsividade

Desenvolvimento com abordagem **mobile-first**:

- **📱 Mobile** - Até 640px (otimizado para smartphones)
- **📱 Tablet** - 640px a 1024px (layout adaptado)
- **💻 Desktop** - Acima de 1024px (layout completo)

---

## ♿ Acessibilidade

Conformidade com **WCAG 2.1 Level AA**:

- ✅ HTML semântico (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`)
- ✅ Atributos ARIA descritivos
- ✅ Contraste de cores adequado
- ✅ Navegação completa por teclado
- ✅ Feedback visual claro

---

## 📁 Estrutura do Projeto

```
lista-tarefas-academica/
├── client/
│   ├── public/                    # Arquivos estáticos
│   ├── src/
│   │   ├── components/            # Componentes React
│   │   │   ├── TaskForm.tsx       # Formulário de cadastro
│   │   │   ├── TaskList.tsx       # Lista com filtros
│   │   │   └── TaskItem.tsx       # Item individual
│   │   ├── hooks/                 # Custom hooks
│   │   │   └── useTasks.ts        # Gerenciamento de tarefas
│   │   ├── lib/                   # Utilitários
│   │   │   └── dateUtils.ts       # Funções de data
│   │   ├── pages/                 # Páginas
│   │   │   └── Home.tsx           # Página principal
│   │   ├── contexts/              # Context API
│   │   ├── App.tsx                # Componente raiz
│   │   ├── main.tsx               # Entry point
│   │   └── index.css              # Estilos globais
│   └── index.html                 # HTML principal
├── package.json                   # Dependências
├── tsconfig.json                  # Config TypeScript
├── vite.config.ts                 # Config Vite
└── README.md                      # Documentação
```

---

## 🏗️ Decisões Arquiteturais

### 1. React + Vite
Escolhidos pela performance, comunidade ativa e experiência de desenvolvimento superior.

### 2. Tailwind CSS
Framework utilitário para estilização rápida, consistente e responsiva.

### 3. localStorage
Persistência local para simplicidade, sem necessidade de autenticação ou backend.

### 4. Componentes Funcionais + Hooks
Seguindo as melhores práticas modernas do React, com hook customizado `useTasks` para centralizar a lógica.

### 5. TypeScript
Tipagem estática para maior segurança, qualidade de código e prevenção de erros.

### 6. Acessibilidade First
HTML semântico e ARIA labels desde o início do desenvolvimento.

---

## 🧪 Testes e Validação

### Responsividade
Use o DevTools do navegador para simular diferentes dispositivos:
- iPhone SE, iPhone 12 Pro, Pixel 5
- iPad, iPad Pro
- Desktop (1920x1080, 2560x1440)

### Acessibilidade
Ferramentas recomendadas:
- Lighthouse (Chrome DevTools)
- axe DevTools
- WAVE Extension

### Funcionalidade
Teste todas as operações:
- ✅ Adicionar tarefas
- ✅ Marcar como concluída
- ✅ Remover tarefas
- ✅ Filtrar por status e disciplina
- ✅ Persistência após reload

---

## 🚢 Build para Produção

```bash
# Gerar build otimizado
pnpm build

# Preview do build
pnpm preview
```

Arquivos compilados em: `dist/`

---

## 📋 Validações Implementadas

O sistema valida:
- ✅ Título não pode estar vazio
- ✅ Disciplina deve ser selecionada
- ✅ Data de entrega é obrigatória
- ✅ Data não pode ser no passado

**Formatação:** Datas exibidas no formato brasileiro (DD/MM/YYYY)  
**Destaque:** Tarefas atrasadas aparecem em vermelho

---

## 🔮 Roadmap e Melhorias Futuras

### Fase 2
- 🔐 Sistema de autenticação de usuários
- ☁️ Sincronização com banco de dados remoto
- 🔔 Notificações push de prazos próximos

### Fase 3
- 🏷️ Sistema de tags e categorização avançada
- 📅 Integração com Google Calendar e Outlook
- 👥 Funcionalidades colaborativas (compartilhamento)

### Fase 4
- 📄 Exportação (PDF, CSV, Excel)
- 📴 Modo offline com sincronização posterior
- 📊 Relatórios e analytics de produtividade

---

## 💾 Gerenciamento de Dados

### Persistência
Dados salvos automaticamente no `localStorage` a cada:
- Adição de tarefa
- Modificação de status
- Remoção de tarefa

### Limpeza de Dados
Para limpar os dados salvos:
1. Abra DevTools (F12)
2. Vá para Application/Storage
3. Limpe localStorage

---

## 📞 Suporte e Contribuição

### Reportar Bugs
Abra uma issue no repositório descrevendo:
- Comportamento esperado
- Comportamento atual
- Passos para reproduzir
- Screenshots (se aplicável)

### Sugerir Melhorias
Pull requests são bem-vindos! Para mudanças maiores:
1. Abra uma issue para discussão
2. Fork o projeto
3. Crie sua feature branch
4. Commit suas mudanças
5. Push para a branch
6. Abra um Pull Request

---

## 📚 Referências e Documentação

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.

```
MIT License

Copyright (c) 2024 Vinícius da Conceição Teixeira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👨‍💻 Sobre o Autor

**Vinícius da Conceição Teixeira**  
Estudante de Tecnologia da Informação  
UFMS Digital - Universidade Federal de Mato Grosso do Sul

Projeto desenvolvido como atividade avaliativa da disciplina **Projeto Integrador de Tecnologia da Informação II** no período 2025.2, demonstrando boas práticas em desenvolvimento web com frameworks modernos e foco em acessibilidade e experiência do usuário.

---

**📅 Última atualização:** Novembro de 2025  
**🔖 Versão:** 1.0.0  
**⭐ Status:** Concluído
