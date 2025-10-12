# Biography Website

[**Live Demo**](https://stylekyoku.github.io/biography/)

---

## ✨ Project Overview

**Biography Website** — это персональный одностраничный веб-проект, созданный для практики современных фронтенд-технологий.  
Он демонстрирует работу с React, SCSS-токенами, адаптивными сетками и архитектурой компонентов с чётким разграничением ответственности.

Проект реализует три основные страницы:
- **About Me** — базовая информация и навыки
- **Education** — подробности об обучении и специализации
- **Hobbies** — хобби и интересы (дебаты, путешествия, стратегии)

Навигация между страницами осуществляется через **React Router** с отдельным `RootLayout`, который объединяет общий **Header**, **Footer** и основной контент через `Outlet`.

---

## ⚡ Tech Stack

- **React.js** — компонентная архитектура и управление состоянием
- **React Router DOM** — маршрутизация и структура приложения
- **Vite** — сборщик и dev-сервер с мгновенной перезагрузкой
- **SCSS Modules** — инкапсуляция стилей, исключающая утечку классов
- **SCSS Tokens & Mixins** — единая система переменных и пресетов
- **Git & GitHub** — контроль версий и CI/CD
- **GitHub Pages + Actions** — автоматический деплой из `main` ветки

---

## 💡 Key Features

- 🧩 **Component-based structure:** чёткое разделение компонентов — `Header`, `Footer`, `Modal`, `RootLayout`
- 🎨 **Tokenized SCSS system:** цвета, отступы, радиусы и z-index управляются из токенов (`t-color()`, `t.space()`, `t.rad()`)
- 🧱 **Adaptive grid layouts:** сетки построены на CSS Grid и Flexbox (desktop-first подход)
- 🔄 **Reusable mixins:** `fluid-text()` для адаптации типографики, `button-base()` для единых пресетов кнопок, `elevation()` для теней
- 🪄 **Animated modal window:** модалка появляется плавно и закрывается по клику вне окна или при скролле (через `useRef` + `useEffect`)
- 🚀 **Optimized deployment:** деплой на GitHub Pages через `peaceiris/actions-gh-pages@v3`
- 🧠 **Modern React hooks:** используется `useState`, `useEffect`, `useRef`, `useMemo` и кастомный хук `useAutoClose`
- 🧩 **SCSS Modules isolation:** каждый компонент имеет собственный `.module.scss`, предотвращая утечку стилей между секциями

---

## 🛠️ Implementation Details

### Routing & Layout

Структура маршрутов:
```
/           → About Me  
/education  → Education  
/hobbies    → Hobbies
```

Используется единый `RootLayout`:
- включает `Header` (с активной подсветкой `[aria-current="page"]`)
- рендерит контент через `<Outlet />`
- завершает страницу компонентом `Footer`

### Styling Architecture

- Desktop-first подход с использованием SCSS Modules  
- Токенизированная дизайн-система (`_tokens.scss`)  
- Миксины для типографики, кнопок и теней  
- Цветовая схема: основной цвет — `#1F6B5F`  

### Modal Interaction

Модальное окно реализовано на `useState` и `useRef`, с кастомным хуком `useAutoClose`, который:
- Закрывает окно при клике вне области  
- Закрывает при прокрутке страницы  
- Поддерживает анимацию открытия через `transform: scale()` и плавное исчезновение через `opacity`

---

## 💾 Deployment

Проект деплоится автоматически через GitHub Actions:

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

**Live:** [https://stylekyoku.github.io/biography/](https://stylekyoku.github.io/biography/)

---

## 🧠 What This Project Demonstrates

- Владение **React hooks** и передачей состояния через props  
- Создание **адаптивных макетов** на гридах и флексах  
- Настройку **SCSS-архитектуры** с токенами и миксинами  
- Реализацию **модальных окон с UX-анимацией**  
- Использование **GitHub Actions** для автоматического деплоя  
- Организацию проекта с **чистой структурой и переиспользуемыми компонентами**

---

## 🧩 Getting Started

```bash
git clone https://github.com/StyleKyoku/biography.git
cd biography
npm install
npm run dev
```

Запусти в браузере:
```
http://localhost:5173
```

---

## 🌎 Deployment to GitHub Pages

```bash
npm run build
# Upload the contents of /dist to the gh-pages branch automatically (handled via GitHub Actions)
```

---

## 👨‍💻 About the Author

Created by **Nikita Zhdanov** —  
frontend developer passionate about component architecture, adaptive design, and clean SCSS token systems.  
Currently studying **Computer Science at Dublin City University (DCU)**.

---

*Built with React, SCSS, Vite — and a love for clean front-end architecture.*
