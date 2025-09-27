# Desafio Front-end B2Bit: Aplicação de Autenticação

### Uma aplicação React completa com login, gerenciamento de sessão e rotas protegidas, construída como solução para o processo seletivo da B2Bit.

---

### **[🚀 Acessar a Aplicação Online](https://pagina-de-login-davi-b2bit.vercel.app/login)**

### 📋 Índice

-   [Sobre o Projeto](#-sobre-o-projeto)
-   [✨ Funcionalidades Detalhadas](#-funcionalidades-detalhadas)
-   [🛠️ Tecnologias e Justificativas](#️-tecnologias-e-justificativas)
-   [🏗️ Arquitetura do Projeto](#️-arquitetura-do-projeto)
-   [🧠 Aprendizados e Desafios](#-aprendizados-e-desafios)
-   [⚙️ Como Executar](#️-como-executar)
-   [🔑 Credenciais para Teste](#-credenciais-para-teste)

---

### 📖 Sobre o Projeto

Este projeto foi desenvolvido para atender ao desafio técnico para a vaga de Desenvolvedor Front-end Estágio na B2Bit. A proposta era criar uma aplicação de login funcional que consumisse uma API real, com o objetivo de avaliar competências em React, TypeScript, gerenciamento de estado, roteamento e integração com serviços externos.

---

### ✨ Funcionalidades Detalhadas

-   **Fluxo de Autenticação Completo:**
    -   O usuário pode inserir suas credenciais e realizar o login.
    -   A sessão é persistida através de um JSON Web Token (JWT) armazenado no `LocalStorage`, mantendo o usuário conectado ao recarregar a página.

-   **Feedback de Interface:**
    -   A aplicação fornece feedback visual claro para o usuário, com mensagens de erro em caso de credenciais inválidas e um estado de "loading" durante as chamadas à API.

-   **Roteamento e Rotas Protegidas:**
    -   Utilizando `react-router-dom`, a navegação entre as páginas de Login e Perfil é gerenciada de forma eficiente.
    -   A rota `/profile` é protegida: usuários não autenticados são automaticamente redirecionados para a página de login, garantindo a segurança dos dados.

-   **Visualização de Dados do Usuário:**
    -   Após o login, a página de perfil busca e exibe as informações do usuário (avatar, nome e e-mail) obtidas da API.

-   **Logout Seguro:**
    -   O usuário pode encerrar sua sessão a qualquer momento, o que limpa o token de autenticação e o redireciona de volta para a tela de login.

---

### 🛠️ Tecnologias e Justificativas

| Tecnologia | Justificativa |
| :--- | :--- |
| **React** | Biblioteca principal para a construção da interface de forma componentizada e declarativa. |
| **Vite** | Ferramenta de build extremamente rápida, que proporciona uma experiência de desenvolvimento ágil. |
| **TypeScript** | Garante a tipagem estática do código, resultando em uma aplicação mais robusta, com menos bugs e mais fácil de manter. |
| **Tailwind CSS** | Framework CSS utility-first que permitiu estilizar a aplicação de forma rápida e consistente, diretamente no JSX. |
| **shadcn/ui** | Biblioteca de componentes acessíveis e não-opinativos, que serviu de base para a UI e foi customizada para seguir o design proposto. |
| **Axios** | Cliente HTTP robusto para a comunicação com a API. O uso de **interceptors** foi crucial para centralizar a lógica de envio do token de autorização. |
| **React Router Dom** | Biblioteca escolhida para gerenciar o roteamento no lado do cliente, incluindo a implementação de rotas privadas. |

---

### 🏗️ Arquitetura do Projeto

O código foi estruturado de forma a separar as responsabilidades, facilitando a manutenção e escalabilidade:

/src
|-- /assets         # Imagens e outros arquivos estáticos
|-- /components     # Componentes reutilizáveis
|   |-- /ui         # Componentes base do shadcn/ui
|   |-- InfoField/  # Componente para exibir campos de informação
|   -- PrivateRoute/ # Componente de ordem superior para proteger rotas |-- /lib            # Funções utilitárias (ex: cn) |-- /pages          # Componentes que representam as páginas da aplicação |   |-- Login/ |   -- Profile/
|-- /services       # Configuração da comunicação com APIs
|   -- api.tsx     # Instância e interceptors do Axios |-- App.tsx         # Componente raiz com a definição do Outlet do roteador -- main.tsx        # Ponto de entrada da aplicação, onde as rotas são definidas


---

### 🧠 Aprendizados e Desafios

Este projeto solidificou conhecimentos em:
-   **Consumo de APIs REST:** Implementação de requisições `GET` e `POST` e manipulação das respostas.
-   **Gerenciamento de Estado com Hooks:** Uso eficaz de `useState` e `useEffect` para controlar o estado da UI e o ciclo de vida dos componentes.
-   **Autenticação baseada em Token:** Entendimento prático do fluxo de login, armazenamento de token e envio em requisições subsequentes.
-   **Boas Práticas:** Criação de uma arquitetura limpa e componentizada.

O principal desafio foi garantir que o fluxo de autenticação fosse seguro e que a experiência do usuário fosse fluida, com feedbacks claros em cada etapa do processo.

---

### ⚙️ Como Executar

Siga os passos abaixo para rodar o projeto em ambiente de desenvolvimento:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/davihoracio/Projeto-Pagina-de-Login---Desafio-B2Bit
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Execute a aplicação:**
    ```bash
    npm run dev
    ```

---

### 🔑 Credenciais para Teste

-   **Email:** `cliente@youdrive.com`
-   **Senha:** `password`