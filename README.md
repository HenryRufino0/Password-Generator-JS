# 🔐 Password Generator - JS + Vercel

Este é um gerador de senhas moderno, responsivo e funcional, desenvolvido com **HTML, CSS, JavaScript (Frontend)** e **Node.js (Backend)**, com deploy via **Vercel**.

![image](https://github.com/user-attachments/assets/054b76da-f0c1-442b-804a-4133b60b4d28)


## ✅ Funcionalidades

- Definir tamanho da senha (4 a 64 caracteres)
- Selecionar:
  - Letras maiúsculas
  - Letras minúsculas
  - Números
  - Caracteres especiais
- Gerar senha segura com 1 clique
- Salvar senha gerada em arquivo `.txt`
- Interface com design neon responsivo
- Backend rodando via `/api/generate-password`

---

## 🚀 Como rodar localmente

### 1. Clonar o repositório
```bash
git clone https://github.com/HenryRufino0/Password-Generator-JS.git
cd Password-Generator-JS
```

### 2. Instalar dependências (opcional)
```bash
npm install express
```

### 3. Rodar localmente com Express
```bash
node server.js
```

Acesse em: `http://localhost:3000`

---

## 🌐 Deploy com Vercel

### Estrutura esperada:
```
/public/index.html
/public/style.css
/public/script.js
/public/favicon.ico
/public/assets/background.gif
/api/generate-password.js
/vercel.json
```

### `vercel.json` de configuração:
```json
{
  "version": 2,
  "builds": [
    { "src": "api/**/*.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/api/$1.js" },
    { "src": "/", "dest": "/public/index.html" },
    { "src": "/(.*)", "dest": "/public/$1" },
    { "handle": "filesystem" },
    { "src": "/.*", "dest": "/public/index.html" }
  ]
}
```

---

## 🧠 Tecnologias

- HTML5
- CSS3
- JavaScript
- Node.js (Vercel Serverless Functions)
- Vercel (Deploy)

---

## 📄 Licença

Este projeto é open-source e você pode usá-lo, modificar e distribuir livremente 🚀
