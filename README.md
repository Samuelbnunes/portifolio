# Samuel Barquel Nunes - Portfólio Profissional

Bem-vindo ao repositório do meu portfólio pessoal! Este projeto foi desenvolvido para apresentar minha trajetória, experiências, cursos e habilidades na área de tecnologia e desenvolvimento de software.

## 🚀 Tecnologias Utilizadas

Este projeto foi reescrito recentemente, migrando de uma estrutura estática padrão (HTML e CSS) para um ecossistema moderno e componentizado, utilizando as melhores ferramentas do mercado:

- **[React](https://react.dev/):** Biblioteca principal para criação de interfaces de usuário componentizadas.
- **[TypeScript](https://www.typescriptlang.org/):** Superconjunto de JavaScript que adiciona tipagem estática, garantindo menos bugs e maior confiabilidade no código.
- **[Vite](https://vitejs.dev/):** Ferramenta de build de front-end ultrarrápida.
- **CSS Modules (Vanilla CSS):** Para garantir que a estilização seja global para o *Design System* (variáveis de cores e fontes) e totalmente isolada para cada componente.
- **[Lucide React](https://lucide.dev/):** Biblioteca de ícones modernos e minimalistas.

## 🎨 Design System e UI/UX

O layout foi concebido sob o conceito **"Mobile-First"** e conta com:
- **Dark Mode Elegante:** Fundo em tons de azul profundo ("slate") e detalhes com azul vibrante para contraste perfeito, passando um visual muito profissional.
- **Glassmorphism:** Efeito de "vidro fosco" na barra de navegação e menu mobile.
- **Microinterações:** Efeitos de hover nos botões, rolagens super suaves (`scroll-behavior: smooth`) pela tela.
- **Efeito Customizado:** Uma animação em gradiente que segue o movimento do cursor na tela, criada via manipulação direta de `ref` no React (para máxima performance).

## 🛠️ Passo a Passo para Instalação e Execução

Caso você queira clonar este projeto e rodar na sua própria máquina (ambiente de desenvolvimento), siga os passos abaixo:

### Pré-requisitos
- Você precisa ter o **[Node.js](https://nodejs.org/)** instalado na sua máquina.

### 1. Clonar o Repositório
Abra o seu terminal e execute:
```bash
git clone https://github.com/Samuelbnunes/portifolio.git
cd portifolio
```

### 2. Instalar as Dependências
Com o Node instalado, você precisará baixar os pacotes que o React e o Vite utilizam (a pasta `node_modules` será criada):
```bash
npm install
```

### 3. Rodar o Servidor Local
Para inicializar o site em ambiente de desenvolvimento:
```bash
npm run dev
```

### 4. Visualizar no Navegador
Após rodar o comando acima, o Vite mostrará um endereço local (geralmente `http://localhost:5173/`). Basta clicar no link ou copiar para o seu navegador!

## 📄 Estrutura Principal do Código
- `src/components/`: Contém cada seção do site dividida em pastas. Cada pasta tem seu arquivo `.tsx` (o código visual) e `.module.css` (estilo restrito àquele componente).
- `src/App.module.css`: Contém as variáveis CSS globais de cores e fontes.
- `src/App.tsx`: A tela principal onde todos os componentes são montados.

---
Código bom é código limpo!
