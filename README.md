# 🛍️ FullStore - Sistema de E-commerce (Em Desenvolvimento)

![FullStore](https://img.shields.io/badge/FullStore-E--commerce-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.0.0-black)
![React](https://img.shields.io/badge/React-19.2.0-61dafb)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MySQL](https://img.shields.io/badge/MySQL-Database-orange)

> Um sistema de e-commerce moderno, construído com arquitetura separada entre **frontend** e **backend**, oferecendo uma solução completa para gestão de lojas virtuais.

---

## 🚀 Tecnologias Utilizadas

### 🖥️ Frontend
- **Next.js 16.0.0** — Framework React otimizado para produção  
- **React 19.2.0** — Biblioteca para criação de interfaces dinâmicas  
- **React DOM 19.2.0** — Renderização eficiente no navegador  
- **React Hot Toast** — Sistema leve e elegante de notificações  

### ⚙️ Backend
- **Node.js** — Ambiente de execução JavaScript no servidor  
- **Express 5.1.0** — Framework minimalista para APIs REST  
- **MySQL2 3.15.3** — Driver rápido para integração com banco de dados MySQL  
- **JWT 9.0.2** — Autenticação segura via tokens JSON Web Token  
- **Swagger** — Documentação automática e interativa da API  

---

## 🎯 Funcionalidades

### 👨‍💼 Área Administrativa
- 📦 **Gestão de Produtos:** cadastro, edição e listagem  
- 📑 **Gestão de Categorias:** organização e vínculo de produtos  
- 🏷️ **Gestão de Marcas:** controle de fabricantes e fornecedores  
- 👥 **Gestão de Usuários:** cadastro e gerenciamento de perfis  
- 💰 **Gestão de Vendas:** visualização e acompanhamento de pedidos  

### 🛒 Área do Cliente
- 🛍️ **Catálogo de Produtos:** navegação, filtros e busca  
- 🛒 **Carrinho de Compras:** adição, remoção e atualização de itens  
- 👤 **Área Pessoal:** histórico de pedidos e informações do usuário  

---

## 🧠 Arquitetura do Projeto

### 🧩 Organização
- **Frontend:** arquitetura de páginas do Next.js com componentes reutilizáveis e gerenciamento de estado via Context API.  
- **Backend:** arquitetura em camadas com separação entre rotas, controladores, repositórios e entidades.  
- **Banco de Dados:** modelagem relacional MySQL.  
- **Segurança:** autenticação JWT (Não implementado) e CORS configurado.

---

## 🔧 Instalação e Configuração

### 🧱 Pré-requisitos
- Node.js (versão LTS recomendada)  
- MySQL 5.7 ou superior  
- NPM ou Yarn  

### ⚙️ Passos de Instalação

#### 1️⃣ Clone o repositório
```bash
git clone <url-do-repositorio>
cd fullstore
```
#### 2️⃣ Configuração do Backend
```bash
cd src
npm install
```

#### 3️⃣ Configuração do Frontend
```bash
cd ../client/fullstore
npm install
```
## 🚀 Executando o Projeto

### 🧭 Modo Desenvolvimento

#### ⚙️ Backend
```bash
cd src
npm start
```
- ✅ A API estará disponível em: http://localhost:5000

- 📘 Documentação Swagger: http://localhost:5000/docs

#### 💻 Frontend
```bash
cd client/fullstore
npm run dev
```
- 🌐 A aplicação estará disponível em: http://localhost:3000

#### 4️⃣ Inicialização do Banco de Dados

- Execute o script SQL disponível para criar o banco e as tabelas necessárias.

## 🛡️ Segurança (Não implementado.)
- 🔒 **Autenticação JWT:** garante o acesso seguro a recursos protegidos.  
- 🌐 **CORS configurado:** protege a comunicação entre domínios e impede requisições não autorizadas.  
- 🧭 **Separação de Áreas:** clara distinção entre a área **administrativa** e a área **do cliente**, reforçando o controle de acesso.  

---

## 🐛 Status do Projeto
⚠️ **Aviso:** este projeto está em **desenvolvimento ativo** e pode conter:  
- 🧩 Bugs e comportamentos inesperados  
- 🚧 Funcionalidades incompletas  
- 🔄 Mudanças estruturais na API  
- ⚙️ Instabilidades temporárias  

---

## 👨‍💻 Autor
**Guilherme Mazzega**  
💼 Desenvolvedor **Full Stack** • 🎓 Estudante de **Análise e Desenvolvimento de Sistemas** •
[🔗 LinkedIn](https://www.linkedin.com/in/guilherme-mazzega-barchi-b0a24a345/) | [🐙 GitHub](https://github.com/)

