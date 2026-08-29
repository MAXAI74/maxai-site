MAXAI — UNIVERSAL STABLE UPDATE

Цель: одинаково стабильная базовая отрисовка на iPhone, Android/OxygenOS,
Android WebView, Windows/macOS/Linux и современных desktop/mobile браузерах.

ЗАМЕНИТЬ/ДОБАВИТЬ ВСЁ ИЗ ЭТОГО АРХИВА С СОХРАНЕНИЕМ ПАПОК.
Медиафайлы, обложки, thumbs и tracks.json не заменяются.

Почему HTML-файлов много:
они изменены только для подключения НОВЫХ имён CSS/JS. Это специально,
чтобы старые Android-браузеры не использовали закэшированные проблемные style.css/site.js.

Новые общие файлы:
  src/maxai-v3-universal.css
  src/maxai-v3-universal.js

Убраны нестабильные/дорогие механики:
- content-visibility и contain-intrinsic-size;
- IntersectionObserver/reveal-анимации;
- fixed noise overlay;
- backdrop-filter и runtime blur;
- фоновый sprite backdrops.webp;
- динамическая смена шапки при scroll;
- анимированное полноэкранное меню;
- touch hover transforms;
- svh/dvh-зависимости.

Сохранены:
- весь дизайн v3, структура, сетки, обложки и тексты;
- тёмная визуальная система и цветовые акценты;
- адаптивная верстка;
- каталог 61 релиза, поиск и фильтры;
- мобильное меню;
- кнопка «Поделиться»;
- desktop hover там, где есть мышь.

Старые src/style.css, src/site.js, src/noise.webp и media/ui/backdrops.webp
можно НЕ удалять: новые HTML их больше не используют.
