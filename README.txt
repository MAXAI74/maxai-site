MAXAI — performance/compatibility update

Назначение: ускорение Android/Chrome/WebView без изменения дизайна сайта.

Заменить существующие файлы:
- index.html
- хроники.html
- src/style.css
- src/site.js

Добавить новые файлы/папки:
- src/noise.webp
- media/ui/backdrops.webp
- media/thumbs/*.webp

Что изменено:
- realtime SVG feTurbulence заменён статичной лёгкой текстурой;
- realtime blur больших фоновых обложек заменён заранее размытым атласом;
- backdrop-filter убран из мобильной шапки/меню;
- каталог использует 640px thumbnails вместо полных 1200px обложек;
- невидимые карточки получают content-visibility:auto;
- основная обложка релиза остаётся полноразмерной.

Тексты, ссылки, страницы треков и структура сайта не меняются.
