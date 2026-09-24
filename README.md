# shate_gallery

Публичный сайт-галерея картин художника Татьяны Шмакова (SHATE ART). Статичный фронтенд, данные галереи хранятся в JSON, деплой через git.

## Структура

| Файл / Папка                           | Назначение                                                                                                     |
|----------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `index.html`                           | Главная страница: навигация, галерея, блок «Обо мне», форма обратной связи                                     |
| `js/utils/helpers.js`                  | Утилиты: `getBaseUrl()`                                                                                        |
| `js/utils/navigation.js`               | Навигация: `setupHomePageLink()`                                                                               |
| `js/components/theme.js`               | Тема: `toggleTheme()`, `applyTheme()`                                                                          |
| `js/components/gallery.js`             | Галерея: рендер карточек, модальные окна, защита изображений                                                   |
| `js/components/modals.js`              | Модальные окна: галерея, видео, описание, шаринг, слайдер этапов                                               |
| `main.js`                              | Точка входа: `loadGalleryData()`, `initContactForm()`, инициализация модулей                                   |
| `css/base/variables.css`               | Базовые стили: body, шрифты, скролл                                                                            |
| `css/base/theme.css`                   | Тёмная тема: переопределения для `body.dark`                                                                   |
| `css/base/responsive.css`              | Адаптивность: `@media` запросы                                                                                 |
| `css/layout/header.css`                | Навигация: nav, logo, nav-links, theme-toggle                                                                  |
| `css/components/gallery.css`           | Галерея: сетка, карточки, hover-эффекты, action-кнопки                                                         |
| `css/components/modals.css`            | Модальные окна: share, video, description, gallery                                                             |
| `css/components/before-after-slider.css`| Слайдер этапов создания (до/после)                                                                            |
| `css/pages/painting.css`               | Стили индивидуальной страницы картины                                                                          |
| `css/pages/home.css`                   | Секции: about, contact, форма, footer                                                                          |
| `js/components/before-after-slider.js` | Слайдер этапов создания (до/после)                                                                             |
| `page_generator.py`                    | Генерация индивидуальных HTML-страниц из `gallery.json`                                                        |
| `pages/`                               | Сгенерированные страницы для каждой картины                                                                    |
| `data/gallery.json`                    | Источник данных галереи                                                                                        |
| `pictures/`                            | Фавикон, логотип, фото художника                                                                               |
| `paintings/`                           | Изображения картин (WebP)                                                                                      |
| `video/`                               | Видео-презентации картин                                                                                       |
| `LICENSE`                              | Лицензия CC0 1.0 Universal — произведение доступно для свободного использования, модификации и распространения |

## Как добавить картину

### 1. Подготовить изображения

Создать папку `paintings/<slug>/` и положить изображения:
- Основная картинка: `<slug>1.webp`
- Дополнительные (интерьер, детали): `<slug1>_interior1.webp`, `<slug1>_interior2.webp` и т.д.
- Этапы создания (если есть): `elephant_init1.webp`, `elephant_init2.webp` и т.д.

> Если исходники в JPG, конвертировать в WebP (см. раздел «Конвертация изображений в WebP» ниже).

### 2. Добавить запись в `data/gallery.json`

Добавить объект с полями: `title`, `description`, `details`, `longDescription`, `alt`, `image`, `galleryImages`, `stages` (массив или пустая строка), `videoSrc` (опционально), `slug`.

### 3. Сгенерировать HTML-страницу

**Сгенерировать все страницы** (перезаписать `pages/`):
```bash
python3 page_generator.py
```

**Сгенерировать только одну страницу** для картины с указанным `slug`:
```bash
python3 page_generator.py --slug grani-svobody
```

> При генерации конкретного `slug` папка `pages/` не удаляется — создаётся/перезаписывается только страница нужной картины.

### 4. Закоммитить и отправить в репозиторий

## Конвертация изображений в WebP

Требуется установленный `webp` (Ubuntu/Debian: `sudo apt install webp`).

Конвертировать все JPG/JPEG в текущей директории:
```bash
find paintings -type f \( -name "*.jpg" -o -name "*.jpeg" \) -exec sh -c 'cwebp -q 80 "$1" -o "${1%.*}.webp"' _ {} \;
```

Конвертировать одно изображение:
```bash
cwebp -q 80 paintings/name/name1.jpg -o paintings/name/name1.webp
```

Пример объекта в `data/gallery.json`:
```json
{
    "title": "Название",
    "description": "Краткое описание для карточки",
    "details": "Холст, масло. 60×80 см.",
    "longDescription": "Полное художественное описание",
    "alt": "Альт-текст",
    "image": "paintings/name/name1.webp",
    "galleryImages": [
        "paintings/name/name1.webp",
        "paintings/name/name1_interior1.webp"
    ],
    "stages": [
        "paintings/name/stage1.webp",
        "paintings/name/stage2.webp",
        "paintings/name/stage3.webp"
    ],
    "videoSrc": "video/name/video.mp4"
}
```