/* ------------------------------------------------------------------ */
/*  content.ts — единственный источник правды для копирайта сайта.     */
/*  Только реальная фактура из ТЗ. Ничего не выдумано.                 */
/* ------------------------------------------------------------------ */

export const SITE = {
  brand: 'INSHIN LAB',
  role: 'AI PORTFOLIO OPERATOR',
  name: 'Алексей Иньшин',
  telegram: '@inshinav',
  telegramUrl: 'https://t.me/inshinav',
  location: 'Huế, Вьетнам',
} as const

export type NavItem = { id: string; label: string }

export const NAV: NavItem[] = [
  { id: 'flagship', label: 'Кейсы' },
  { id: 'stack', label: 'AI-стек' },
  { id: 'projects', label: 'Проекты' },
  { id: 'timeline', label: 'Опыт' },
  { id: 'contact', label: 'Контакт' },
]

/* ---- статус-панель героя ---- */
export const STATUS: { key: string; value: string }[] = [
  { key: 'status', value: 'building' },
  { key: 'agents', value: 'online' },
  { key: 'stack', value: '2026' },
  { key: 'loc', value: 'Huế, VN' },
]

/* ---- секция 2: где работал ---- */
export const EMPLOYERS = ['Яндекс Go', 'Яндекс', 'Ясно', 'Skyeng'] as const

/* ---- секция 3: метрики ---- */
export type Metric = {
  value: string
  prefix?: string
  suffix?: string
  label: string
  accent?: 'lime' | 'cyan'
}

export const METRICS: Metric[] = [
  { prefix: '×', value: '2.5', suffix: '+', label: 'рост GMV на управляемых направлениях', accent: 'lime' },
  { prefix: 'до −', value: '40', suffix: '%', label: 'снижение CAC', accent: 'lime' },
  { prefix: '×', value: '4', label: 'ускорение цикла экспериментов (2 мес → 2 недели)', accent: 'cyan' },
  { prefix: '', value: '100', suffix: 'М+ ₽/мес', label: 'бюджеты под управлением (Яндекс)', accent: 'lime' },
  { prefix: '', value: '8', suffix: ' стран', label: 'география запусков', accent: 'cyan' },
  { prefix: '+', value: '30–90', suffix: '%', label: 'рост новых пользователей', accent: 'lime' },
]

/* ---- секция 4: три столпа ---- */
export type Pillar = { tag: string; title: string; body: string }

export const PILLARS: Pillar[] = [
  {
    tag: '01',
    title: 'Инженерный бэкграунд',
    body: 'Бакалавр-программист, КузГТУ. Сам проектирую и пишу агентов — не завишу от чужих рук.',
  },
  {
    tag: '02',
    title: '7+ лет в перформансе',
    body: 'Мульти-кантри запуски, бюджеты 100М+ ₽/мес в Яндексе. Отвечаю за P&L, а не за охваты.',
  },
  {
    tag: '03',
    title: 'AI-native операции',
    body: 'Агенты, пайплайны, автоматизация. Ставлю AI на поток ради измеримого результата.',
  },
]

/* ---- секция 5: отстройка ---- */
export type Contrast = { before: string; after: string }

export const CONTRASTS: Contrast[] = [
  {
    before: 'Пробует нейросети под задачу',
    after: 'Строит из них производственные системы, которые работают и без него',
  },
  {
    before: 'Месяцы на цикл гипотез вручную',
    after: 'Цикл гипотеза→инсайт в 4 раза быстрее на мульти-агентной системе',
  },
  {
    before: 'Маркетолог ИЛИ инженер',
    after: 'И маркетолог, и инженер — сам проектирую и пишу агентов',
  },
  {
    before: 'Считает охваты',
    after: 'Отвечает за P&L: CAC, ROI, GMV',
  },
]

/* ---- секция 6: флагман ---- */
export type Agent = { n: string; title: string; body: string }

export const FLAGSHIP_AGENTS: Agent[] = [
  { n: 'Агент 1', title: 'Гипотезы и тексты', body: 'Генерирует и формулирует гипотезы и копирайт' },
  { n: 'Агент 2', title: 'Генерация баннеров', body: 'Превращает гипотезу в готовые креативы' },
  { n: 'Агент 3', title: 'Аналитический оценщик', body: 'Структурно оценивает результат и выдаёт вывод' },
]

/* ---- секция 7: процесс ---- */
export type Step = { n: string; title: string; body: string }

export const PROCESS: Step[] = [
  { n: '01', title: 'Диагностика', body: 'Нахожу узкое место в воронке или процессе, где AI даст измеримый прирост.' },
  { n: '02', title: 'Проектирование', body: 'Собираю архитектуру: агенты, пайплайны, данные, точки контроля.' },
  { n: '03', title: 'Запуск на поток', body: 'Внедряю, автоматизирую, упаковываю в self-service для команды.' },
  { n: '04', title: 'Масштабирование', body: 'Мониторю метрики, дораниваю, тиражирую на смежные направления.' },
]

/* ---- секция 8: AI-стек (июнь 2026) ---- */
export type StackGroup = { group: string; note: string; tools: string[] }

export const STACK: StackGroup[] = [
  {
    group: 'Генерация изображений',
    note: 'фотореалистичные персонажи, консистентность лица, кастомная тренировка стиля под бренд',
    tools: ['Nano Banana Pro', 'FLUX.2 Pro', 'Imagen 4 Ultra', 'Midjourney v8', 'GPT Image 2', 'ComfyUI + LoRA'],
  },
  {
    group: 'Генерация видео',
    note: 'image-to-video, нативное аудио, lip-sync, кинематографичный реализм',
    tools: ['Veo 3.1', 'Seedance 2.0', 'Kling 3.0 / Video O3', 'Runway Gen-4.5'],
  },
  {
    group: 'Голос',
    note: 'синтез голоса и озвучка персонажей',
    tools: ['ElevenLabs'],
  },
  {
    group: 'LLM и агенты',
    note: 'проектирование агентов, vibe-coding, рассуждения',
    tools: ['Claude (+ Claude Code)', 'GPT', 'Gemini', 'Cursor'],
  },
  {
    group: 'Автоматизация и оркестрация',
    note: 'ставлю AI на поток и связываю агентов в системы',
    tools: ['Claude Code', 'n8n', 'MCP (Model Context Protocol)', 'мульти-агентные пайплайны (LangGraph / CrewAI)'],
  },
]

/* ---- секция 9: проекты build-in-public ---- */
export type Project = { title: string; body: string; tags: string[] }

export const PROJECTS: Project[] = [
  {
    title: '«Ясновидец» — AI-дайджест для команды',
    body: 'Внутренний AI-бот, который каждый день собирает и упаковывает отрасль и контекст для маркетинг-команды из 13 человек. Двухслойная архитектура: заголовок в Telegram + интерактивный HTML-журнал.',
    tags: ['Claude Code', 'Telegram', 'автоматизация', 'прод'],
  },
  {
    title: 'Мульти-агентная перформанс-система',
    body: 'Флагманский кейс: 3 агента, цикл экспериментов −75%, CAC −18%.',
    tags: ['multi-agent', 'перформанс', 'self-service'],
  },
  {
    title: 'AI-персоны и синтетические инфлюенсеры',
    body: 'Полный пайплайн создания AI-персонажа: лицо и LoRA → изображения → видео (Veo / Seedance / Kling) → голос. Продакшн коротких видео под TikTok/Reels.',
    tags: ['ComfyUI', 'LoRA', 'Seedance/Veo', 'ElevenLabs'],
  },
  {
    title: '30-дневный AI-челлендж монетизации',
    body: 'Публичный запуск: ежедневный контент и эксперименты на TikTok, Reels, Shorts, Telegram — демонстрация скорости и системного подхода.',
    tags: ['build-in-public', 'контент-система'],
  },
  {
    title: 'Образовательные продукты',
    body: 'Упаковываю экспертизу в продукты: курс по созданию AI-инфлюенсеров (Luma) и обучающие материалы.',
    tags: ['курс', 'инфопродукт'],
  },
  {
    title: 'AI-системы для контента',
    body: 'Набор кастомных Claude Projects для продакшна и адаптации контента под площадки (SEEDANCE FORGE, Контент-завод, Контент-Адаптер).',
    tags: ['Claude Projects', 'prompt-engineering'],
  },
]

/* ---- секция 10: карьерный трек ---- */
export type Role = {
  org: string
  title: string
  period: string
  body: string
  current?: boolean
}

export const TIMELINE: Role[] = [
  {
    org: 'Ясно (yasno.live)',
    title: 'Growth Marketing Lead',
    period: '2026 → н.в.',
    body: 'Онлайн-психотерапия. Строю рост и внутренние AI-инструменты для команды.',
    current: true,
  },
  {
    org: 'Яндекс',
    title: 'Lead Performance Marketer',
    period: '2025–2026',
    body: '4 сервиса шеринга: Драйв, Самокаты, Заряд, Прокат.',
  },
  {
    org: 'Яндекс Go',
    title: 'Senior Marketing Manager',
    period: '2021–2025',
    body: '8 стран, бюджеты 100М+ ₽/мес, GMV ×2.5+, антифрод −10М+ ₽/мес. Здесь же построена флагманская AI-система.',
  },
  {
    org: 'Skyeng',
    title: 'B2B-маркетинг',
    period: '2021',
    body: 'B2B-направление образовательной платформы.',
  },
  {
    org: 'Goodline / Е-Лайт-Телеком',
    title: 'Интернет-маркетинг',
    period: '2018–2020',
    body: 'Региональный интернет-маркетинг.',
  },
  {
    org: 'ИП, товарный бизнес',
    title: 'Основатель',
    period: '2017–2018',
    body: 'Собственный товарный бизнес.',
  },
  {
    org: 'КузГТУ',
    title: 'Бакалавр (программирование)',
    period: '2019',
    body: 'Инженерное образование — фундамент, на котором держится всё остальное.',
  },
]
