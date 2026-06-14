# Деплой — главная страница inshinlab.com (apex)

Статический Vite-сайт в **корне** VPS (apex `/`, не подпапка).
Сервер: VPS inshinlab.com, nginx, `root /var/www/html`, конфиг
`/etc/nginx/sites-available/inshinlab.com`. Серверные команды запускает владелец
(Claude Code не ходит по SSH на прод); агент готовит команды и проверяет curl-ом.

> Сейчас в корне лежит заглушка `index.html` (44 байта, `<title>inshinlab.com</title>`).
> Подприложения (`/yasno/` и т.п.) лежат отдельными папками в `/var/www/html/` и этим
> деплоем **не затрагиваются** — `scp -r dist/*` копирует только файлы apex, ничего не удаляя.

## 1. Сборка (base по умолчанию `/` — для apex флаг не нужен)

```bash
cd /c/Users/Alex/inshin-lab
npm run build
# артефакт: dist/  (index.html, assets/, favicon.svg, og.png — пути root-absolute /assets/...)
```

## 2. Заливка на сервер (snести apex-assets → залить заново)

> ⚠️ ГЛАВНАЯ ГОТЧА: `scp -r dist/assets …` при УЖЕ существующей папке `assets` на
> сервере кладёт её ВНУТРЬ → `/var/www/html/assets/assets/…`, и index.html ловит 404
> на `/assets/…` → белый экран. Поэтому КАЖДЫЙ раз сначала сносим apex-папку `assets`
> (только её — под-сайты `/yasno/` и т.п. лежат отдельными папками и не затрагиваются),
> затем заливаем заново.

```bash
# 1) снести старую apex-папку assets (БЕЗОПАСНО: только apex, не под-сайты)
ssh root@inshinlab.com "rm -rf /var/www/html/assets"

# 2) залить заново (cd + относительный путь — иначе scp примет "C:" за хост)
cd /c/Users/Alex/inshin-lab
scp -r dist/index.html dist/assets dist/favicon.svg dist/og.png root@inshinlab.com:/var/www/html/
```

> Файлы (index.html, favicon.svg, og.png) перезаписываются нормально — вложенность
> бывает только у папок, поэтому достаточно сносить `assets`. Никаких `rm -rf /var/www/html/*`.

## 3. Права (scp кладёт под root → www-data ловит 403)

```bash
ssh root@inshinlab.com "chmod -R a+rX /var/www/html/index.html /var/www/html/assets /var/www/html/favicon.svg /var/www/html/og.png"
```

## 4. nginx — изменений НЕ требуется

`location /` уже отдаёт `/var/www/html` с `index index.html`. Сайт одностраничный
с якорной навигацией (без клиентского роутинга) → SPA-fallback не нужен, reload nginx
не нужен (меняются только статические файлы).

## 5. Проверка (curl — это делает агент после заливки)

```bash
curl -sI https://inshinlab.com/                | head -n1                       # ожидаем 200
curl -s  https://inshinlab.com/ | grep -o '/assets/[^"]*' | head                # ссылки на новые ассеты
JS=$(curl -s https://inshinlab.com/ | grep -oE '/assets/index-[^"]+\.js' | head -n1)
curl -sI "https://inshinlab.com$JS"            | head -n1                       # 200
curl -sI https://inshinlab.com/og.png          | head -n1                       # 200
curl -sI https://inshinlab.com/yasno/          | head -n1                       # 200 — под-сайт цел
```
