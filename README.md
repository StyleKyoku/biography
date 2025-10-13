# Biography Website

[**Live Demo**](https://stylekyoku.github.io/biography/)

---

## ✨ Project Overview

**Biography Website** is a personal single-page front-end project built to practice modern web development technologies.  
It demonstrates practical use of React, SCSS token systems, adaptive grid layouts, and clean component-based architecture.

The project includes three main sections:
- **About Me** — personal introduction and core skills  
- **Education** — details about studies and specialization  
- **Hobbies** — interests and activities (debating, traveling, strategy games)

Navigation between pages is handled using **React Router** with a dedicated `RootLayout`, which combines a shared **Header**, **Footer**, and main content via `Outlet`.

---

## ⚡ Tech Stack

- **React.js** — component-based architecture and state management  
- **React Router DOM** — routing and page structure  
- **Vite** — fast build tool and dev server  
- **SCSS Modules** — encapsulated styling to prevent leakage between components  
- **SCSS Tokens & Mixins** — unified system for spacing, colors, and elevation  
- **Git & GitHub** — version control and CI/CD  
- **GitHub Pages + Actions** — automatic deployment from the `main` branch  

---

## 💡 Key Features

- 🧩 **Component-based structure:** clean separation of `Header`, `Footer`, `Modal`, and `RootLayout`  
- 🎨 **Tokenized SCSS system:** all colors, spacing, radius, z-index and other values are controlled via tokens using functions (`t-color()`, `space()`, `rad()`)  
- 🧱 **Adaptive grid layouts:** desktop-first grid and flex layouts for responsive design  
- 🔄 **Reusable mixins:** `fluid-text()` for typography scaling, `button-base()` for consistent buttons, `elevation()` for shadows  
- 🪄 **Animated modal window:** opens smoothly and closes when clicking outside or scrolling (using `useRef` + `useEffect`)  
- 🚀 **Automated deployment:** powered by `peaceiris/actions-gh-pages@v3`  
- 🧠 **Modern React hooks:** utilizes `useState`, `useEffect`, `useRef`, `useMemo`, and custom hook `useAutoClose`  
- 🧩 **Style isolation with SCSS Modules:** each section has its own `.module.scss` to prevent style conflicts  

---

## 🛠️ Implementation Details

### Routing & Layout

Routing structure:
```
/           → About Me  
/education  → Education  
/hobbies    → Hobbies
```

The `RootLayout` component:
- includes a **Header** with active link highlighting via `[aria-current="page"]`  
- renders page content through `<Outlet />`  
- ends with a shared **Footer**

### Styling Architecture

- Desktop-first approach using SCSS Modules  
- Tokenized design system (`/tokens/.scss`)  
- Mixins for typography, buttons, and elevation effects  
- Color palette: main accent — `#1F6B5F`

### Modal Interaction

The modal window is implemented using `useState` and `useRef`, combined with a custom hook `useAutoClose`, which:
- Closes the modal when clicking outside  
- Closes the modal on scroll  
- Plays an opening scale animation and a smooth fade-out transition  

---

## 💾 Deployment

Deployed automatically via GitHub Actions:

```yaml
- uses: actions/checkout@v3
- uses: actions/setup-node@v3
- run: npm ci
- run: npm run build
- uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
```

**Live demo:** [https://stylekyoku.github.io/biography/](https://stylekyoku.github.io/biography/)

---

## 🧠 What This Project Demonstrates

- Confident use of **React hooks** and prop-based data flow  
- Creation of **adaptive layouts** using Grid and Flexbox  
- Building **SCSS architecture** with tokens, mixins, and modules  
- Implementation of **animated modals** with accessibility in mind  
- Setting up **automated CI/CD deployment** via GitHub Actions  
- Clean project organization with **reusable components** and modular styles  

---

## 🧩 Getting Started

```bash
git clone https://github.com/StyleKyoku/biography.git
cd biography
npm install
npm run dev
```

Open in your browser:
```
http://localhost:5173
```

---

## 🌎 Deployment to GitHub Pages

```bash
npm run build
# The /dist directory will be published automatically via GitHub Actions
```

---

## 👨‍💻 About the Author

Created by **Nikita Zhdanov** —  
a frontend developer passionate about clean architecture, adaptive design, and SCSS token systems.  
Currently studying **Computer Science at Dublin City University (DCU)**.

📧 **Email:** nikita.zhdanov.ie@gmail.com  
💬 **Telegram:** [@stylekyoku](https://t.me/stylekyoku)


---

*Built with React, SCSS, Vite — and a love for clean front-end architecture.*
