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

1. Создать папку `paintings/<название>/`
2. Положить основную картинку как `<название>1.jpg` и дополнительные как `<название>_interior1.jpg` и т.д.
3. Конвертировать изображения в WebP (см. ниже, или сразу на шаге 2 положить webp)
4. Указать пути к `.webp` файлам в `data/gallery.json`
5. Сгенерировать индивидуальную страницу: `python3 page_generator.py`
6. Закоммитить и отправить в репозиторий

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