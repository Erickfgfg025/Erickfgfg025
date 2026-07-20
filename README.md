# Portfólio — Erick Sergio

Portfólio pessoal de Erick Sergio, Desenvolvedor Full Stack, construído com **React (Vite)** no front-end e uma **API Flask simulada** no back-end (estrutura pronta para receber lógica real de contato/projetos no futuro).

Design: tema escuro, identidade "terminal/código" (cores preto/cinza/azul), tipografia Space Grotesk + Inter + JetBrains Mono, mobile-first.

```
erick-portfolio/
├── frontend/                  # Aplicação React (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx     # Navegação fixa com scroll suave
│   │   │   ├── Hero.jsx       # Nome, título e "terminal" animado
│   │   │   ├── About.jsx      # Seção "Sobre mim"
│   │   │   ├── Skills.jsx     # Tecnologias por categoria
│   │   │   ├── Projects.jsx   # Grid de projetos
│   │   │   ├── Contact.jsx    # Contato (email, GitHub, formulário)
│   │   │   └── Footer.jsx
│   │   ├── data/
│   │   │   └── projects.js    # Dados dos projetos (fácil de editar)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css          # Design system (variáveis, grid, animações)
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/                   # Estrutura Flask (apenas esqueleto, não obrigatório rodar)
│   ├── app.py
│   └── requirements.txt
└── README.md
```

## Como rodar o front-end (React)

Pré-requisito: [Node.js](https://nodejs.org/) 18+ instalado.

```bash
cd frontend
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Como rodar o back-end (Flask — opcional/simulado)

O back-end é apenas uma estrutura de referência (rotas de exemplo para `/api/projects` e `/api/contact`). Não é necessário para o site funcionar, já que os dados dos projetos já estão no front-end.

Pré-requisito: Python 3.10+.

```bash
cd backend
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

A API sobe em `http://localhost:5000`.

## Personalização rápida

- Textos e dados de "Sobre mim": `frontend/src/components/About.jsx`
- Lista de projetos: `frontend/src/data/projects.js`
- Tecnologias: `frontend/src/components/Skills.jsx`
- Cores e tipografia: variáveis no topo de `frontend/src/index.css`
- E-mail / GitHub: `frontend/src/components/Contact.jsx` e `Footer.jsx`

## Preview estático

O arquivo `preview.html` (na raiz) é uma versão estática (HTML/CSS/JS puro) do mesmo design, útil apenas para visualizar rapidamente no navegador sem instalar nada — abra o arquivo direto. A versão "oficial" e editável do projeto é a pasta `frontend/`.

---
© 2026 Erick Sergio. Todos os direitos reservados.
