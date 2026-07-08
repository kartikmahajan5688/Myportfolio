<h1 align="center">Kartik Mahajan — Portfolio</h1>

<p align="center">
  <b>AI Engineer</b> · Generative AI &amp; Multi-Agent Systems
</p>

<p align="center">
  <a href="https://kartikmportfolio.netlify.app/">
    <img src="https://img.shields.io/badge/Live_Demo-kartikmportfolio.netlify.app-6366f1?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/React_Icons-E91E63?logo=react&logoColor=white" alt="React Icons" />
  <img src="https://img.shields.io/badge/Web3Forms-Contact-0ea5e9" alt="Web3Forms" />
  <img src="https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?logo=netlify&logoColor=white" alt="Netlify" />
</p>

---

## 👋 About

A modern, single-page portfolio showcasing my work as an **AI Engineer** — production
conversational AI, RAG pipelines, and multi-agent systems built with AWS Strands,
LangChain, Amazon Bedrock, and OpenAI, alongside full-stack web engineering.

**🔗 Live:** [kartikmportfolio.netlify.app](https://kartikmportfolio.netlify.app/)

<p align="center">
  <img src="https://raw.githubusercontent.com/kartikmahajan5688/Myportfolio/main/public/preview.png" alt="Portfolio preview" width="800" />
</p>

## ✨ Features

- **Dark, modern UI** — hand-written CSS design system with gradients, glassmorphism, and scroll-reveal animations
- **Core Expertise** — headline skills surfaced for recruiters, with a full categorized toolbox below
- **Experience timeline** — detailed roles across AI and full-stack engineering
- **Projects** — featured AI projects (with live demos + source) and web-development work
- **Certifications** — grouped by domain (Generative AI &amp; AWS, Anthropic, Web) with badges
- **Working contact form** — real email delivery via Web3Forms (no backend required)
- **Fully responsive** — desktop, tablet, and mobile

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Framework | React 18 (Create React App) |
| Styling | Hand-written CSS design system (CSS variables) |
| Icons | react-icons (Feather) |
| Contact | Web3Forms |
| Hosting | Netlify (auto-deploy from GitHub) |

## 📁 Structure

```
src/
├── App.js                  # composes all sections
├── index.css               # global design system (tokens, base, utilities)
├── data/portfolio.js       # single source of truth for ALL content
├── hooks/useScrollReveal.js
├── assets/                 # images, resume, certificates, project screenshots
└── components/             # Navbar, Hero, About, Skills, Experience,
                            #  Projects, Certifications, Contact, Footer
```

> All content (profile, skills, experience, projects, certifications) lives in
> [`src/data/portfolio.js`](src/data/portfolio.js) — update that one file to change the site.

## 🚀 Run Locally

Requires [Node.js](https://nodejs.org/) (16+).

```bash
# clone
git clone https://github.com/kartikmahajan5688/Myportfolio.git
cd Myportfolio

# install
npm install

# start dev server → http://localhost:3000
npm start

# production build
npm run build
```

## 🌐 Deploy

Deployed on **Netlify** with continuous deployment — every push to `main`
triggers an automatic build and deploy.

- **Build command:** `npm run build`
- **Publish directory:** `build`

## 📫 Contact

- **Portfolio:** [kartikmportfolio.netlify.app](https://kartikmportfolio.netlify.app/)
- **LinkedIn:** [kartikmahajan08](https://www.linkedin.com/in/kartikmahajan08/)
- **GitHub:** [kartikmahajan5688](https://github.com/kartikmahajan5688)
- **Email:** kartikmahajan5688@gmail.com
