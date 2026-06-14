# INSHIN LAB — AI Portfolio Operator

Персональный одностраничный лендинг-резюме Алексея Иньшина, переупакованный в бренд
**INSHIN LAB · AI Portfolio Operator**. Премиальная «техно-лаборатория»: тёмный канвас,
дозированный электрический лайм, моно-мотив терминала, анимированная диаграмма
мульти-агентного пайплайна.

Стек: **Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion**. Шрифты
самохостятся через `@fontsource` (Manrope / Inter / JetBrains Mono, латиница + кириллица +
вьетнамский для «Huế», `font-display: swap`).

## Команды

```bash
npm install        # установка зависимостей
npm run dev        # дев-сервер (http://localhost:5173)
npm run build      # типчек (tsc -b) + продакшн-сборка в dist/
npm run preview    # локальный предпросмотр собранного dist/
npm run lint       # ESLint
```

## Деплой

Это полностью статический сайт — собранная папка `dist/` разворачивается куда угодно.

- **Vercel:** импортировать репозиторий → framework preset **Vite** → build `npm run build`,
  output `dist`. SPA на одном маршруте, доп. rewrites не нужны.
- **Netlify:** build command `npm run build`, publish directory `dist`.
- **Свой VPS / nginx (по образцу inshinlab.com):**
  ```bash
  npm run build
  # залить содержимое dist/ в корень сайта, напр.:
  scp -r dist/* user@host:/var/www/html/
  # на сервере выдать права на чтение:
  chmod -R a+rX /var/www/html
  ```
  Если сайт живёт в подпапке (`/inshin/`), собирать с базой:
  `MSYS_NO_PATHCONV=1 npx vite build --base=/inshin/`.

## Структура

```
src/
  lib/content.ts          единый источник правды для всего копирайта (RU)
  lib/motion.ts           общие варианты Framer Motion
  lib/cn.ts               склейка классов
  hooks/                  usePrefersReducedMotion
  components/primitives/  Section, SectionHeading, Card, Button, Tag, MonoLabel, CountUp, Reveal
  components/layout/      Header (sticky + мобильное меню), Footer, Logo
  components/visuals/     HeroBackground, PipelineDiagram (анимированная диаграмма 3 агентов)
  components/sections/    Hero, SocialProof, Metrics, AiThesis, Differentiation,
                          Flagship, Process, AiStack, Projects, Timeline, Contact
```

Весь редактируемый контент (тексты, метрики, проекты, таймлайн, стек) вынесен в
[`src/lib/content.ts`](src/lib/content.ts) — правки копирайта делаются там.

## Заметки

- Главное действие — Telegram [@inshinav](https://t.me/inshinav).
- `og:image` — готовый растровый `public/og.png` (1200×630, кириллица в Manrope),
  его рендерят Telegram и все соцсети. Есть и JSON-LD (Person + WebSite) в `index.html`.
- Анимации уважают `prefers-reduced-motion` (через `<MotionConfig reducedMotion="user">`
  для Framer Motion + CSS-медиазапрос для keyframe-анимаций).
