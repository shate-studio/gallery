#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Для каждой картины генерация отдельной HTML-страницы на основе файла data/gallery.json."""

import argparse
import html
import json
import re
import shutil
import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
SITE_URL = "https://shate-studio.github.io"
ASSETS_URL = "https://shate-studio.github.io/gallery/"

CYR_TO_LAT = {
    "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "yo",
    "ж": "zh", "з": "z", "и": "i", "й": "y", "к": "k", "л": "l", "м": "m",
    "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u",
    "ф": "f", "х": "kh", "ц": "ts", "ч": "ch", "ш": "sh", "щ": "shch",
    "ъ": "", "ы": "y", "ь": "", "э": "e", "ю": "yu", "я": "ya",
}
# Создается таблица один раз на старте
TRANSLIT_TABLE = str.maketrans(CYR_TO_LAT)

SLUG_RE = re.compile(r"[^a-z0-9]+")


def transliterate(text):
    """Преобразование кириллического текста в латиницу."""
    return text.lower().translate(TRANSLIT_TABLE)


def slugify(text):
    """Создание URL-безопасного slug из текста: транслитерация + удаление спецсимволов."""
    slug = transliterate(text)
    slug = SLUG_RE.sub("-", slug)
    return slug.strip("-") or "untitled"


def newline_to_br(text):
    """Заменяет символы переноса строки на HTML-тег <br>."""
    return text.replace("\n", "<br>")


def generate_page_html(item):
    """Генерация полной HTML-страницы для одной картины на основе объекта из gallery.json.

    Возвращает строку с полным HTML-документом, включающим навигацию, изображение,
    описание, детали и OG-теги для соцсетей.
    """
    title = item.get("title", "Без названия")
    long_description = item.get("longDescription", "")
    details = item.get("details", "")
    image = item.get("image", "")
    slug = item.get("slug") or slugify(title)

    description = newline_to_br(item.get("description", ""))

    title_esc = html.escape(title)
    alt_esc = html.escape(item.get("alt", title))

    # OG-image URL (полный, с доменом) для соцсетей — абсолютный URL
    og_image_url = f"{ASSETS_URL.rstrip('/')}/{image.lstrip('/')}"

    # Этот тег отвечает за то, какой текст увидят пользователи в превью ссылки, когда поделились ссылкой на картину
    og_description = html.escape(description.replace("<br>", " ").strip())

    details_block = f'<p class="painting-details">{details}</p><hr class="painting-divider">' if details else ""
    long_desc_block = f'<p class="painting-long-desc">{long_description}</p>' if long_description else ""

    return f"""<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title_esc} | SHATE ART</title>
    <meta property="og:image" content="{og_image_url}">
    <meta property="og:image:type" content="image/webp">
    <meta property="og:image:alt" content="{title_esc}">
    <meta property="og:image:secure_url" content="{og_image_url}">
    <meta property="og:title" content="{title_esc}">
    <meta property="og:description" content="{og_description}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="{SITE_URL}/gallery/{slug}/">
    <link rel="icon" type="image/webp" href="{SITE_URL}/gallery/pictures/favicon1.webp">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
    <noscript><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet"></noscript>
    <!-- CSS — прямые ссылки для параллельной загрузки -->
    <link rel="stylesheet" href="../../css/base/variables.css">
    <link rel="stylesheet" href="../../css/base/theme.css">
    <link rel="stylesheet" href="../../css/layout/header.css">
    <link rel="stylesheet" href="../../css/components/gallery.css">
    <link rel="stylesheet" href="../../css/components/before-after-slider.css">
    <link rel="stylesheet" href="../../css/components/modals.css">
    <link rel="stylesheet" href="../../css/pages/home.css">
    <link rel="stylesheet" href="../../css/pages/painting.css">
    <link rel="stylesheet" href="../../css/base/responsive.css">
    <link rel="preload" as="image" href="../../{image}">
</head>
<body>
<nav>
    <div class="logo"><a href="../../index.html"><img src="../../pictures/favicon1.webp" alt="SHATE ART"></a></div>
    <div class="nav-right">
        <div class="nav-links">
            <a href="../../index.html">Галерея</a>
            <a id="page-base" href="#">На главную</a>
            <a href="../../index.html#about">Обо мне</a>
            <a href="../../index.html#contact">Обратная связь</a>
            <a href="https://vk.ru/studio_sha_te" target="_blank">ВКонтакте</a>
        </div>
        <button class="theme-toggle" onclick="toggleTheme();">Темная</button>
    </div>
</nav>
<div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
</div>
<div class="wrapper">
    <header>
        <h1>{title_esc}</h1>
    </header>
    <div class="painting-page">
        <img src="../../{image}" alt="{alt_esc}" class="painting-main-img" data-original="../../{image}">
        <div class="painting-info">
            <h2>Описание</h2>
            <p class="painting-desc">{description}</p>
            {details_block}
            {long_desc_block}
            <div class="painting-actions">
                <a href="../../index.html" class="btn back-link">← Назад в галерею</a>
            </div>
        </div>
    </div>
</div>
<footer>
    <p>&copy; 2026 SHATE ART. Все права защищены.</p>
</footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js" defer></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js" defer></script>
<script src="../../js/utils/helpers.js" defer></script>
<script src="../../js/components/theme.js" defer></script>
<script src="../../js/components/gallery.js" defer></script>
<script src="../../js/components/modals.js" defer></script>
<script src="../../main.js" defer></script>
<script src="../../js/utils/navigation.js" defer></script>
<script defer>setupHomePageLink();</script>
</body>
</html>"""


def generate_page_for_item(pages_dir, item):
    """Генерация страницы для одной картины. Возвращает slug или None."""
    slug = item.get("slug") or slugify(item.get("title", "Без названия"))
    item["slug"] = slug

    page_dir = pages_dir / slug
    page_dir.mkdir(parents=True, exist_ok=True)

    html_path = page_dir / "index.html"
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(generate_page_html(item))

    print(f"Generated: /{slug}/ -> pages/{slug}/")
    return slug


def main():
    """Точка входа: очистка pages/, чтение gallery.json и генерация индивидуальных страниц."""
    parser = argparse.ArgumentParser(description="Генерация HTML-страниц для картин из gallery.json")
    parser.add_argument(
        "slug",
        nargs="?",
        default=None,
        help="Slug картины для генерации (например, lesnoy-khranitel). Если не указан — генерируются все страницы.",
    )
    args = parser.parse_args()

    pages_dir = BASE_DIR / "pages"
    json_path = BASE_DIR / "data" / "gallery.json"

    # Чтение gallery.json
    with open(json_path, "r", encoding="utf-8") as f:
        gallery = json.load(f)

    if not gallery:
        print("data/gallery.json is empty!")
        return

    # Поиск картины по slug
    if args.slug:
        target = args.slug
        items = [item for item in gallery if (item.get("slug") or slugify(item.get("title", ""))) == target]
        if not items:
            print(f"Error: No painting found with slug '{target}'")
            available = [item.get("slug") or slugify(item.get("title", "")) for item in gallery]
            print(f"Available slugs: {', '.join(available)}")
            sys.exit(1)
        if len(items) > 1:
            titles = ", ".join(item.get("title", "?") for item in items)
            print(f"Error: Multiple paintings found with slug '{target}': {titles}")
            sys.exit(1)
        items_to_generate = items
    else:
        # Генерация всех страниц
        if pages_dir.exists():
            shutil.rmtree(pages_dir)
        pages_dir.mkdir(parents=True, exist_ok=True)
        items_to_generate = gallery

    # Генерация страниц
    generated = 0
    for item in items_to_generate:
        generate_page_for_item(pages_dir, item)
        generated += 1

    # Прямая запись обратно в исходный файл (slug-ы добавляются)
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(gallery, f, ensure_ascii=False, indent=4)

    print(f"Done: {generated} page(s) generated")


if __name__ == "__main__":
    main()
