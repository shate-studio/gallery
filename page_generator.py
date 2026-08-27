#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate individual HTML pages for each painting from gallery.json."""

import json
import os
import re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PAGES_DIR = os.path.join(BASE_DIR, "pages")
JSON_PATH = os.path.join(BASE_DIR, "data", "gallery.json")
SITE_URL = "https://shate-studio.github.io"
GALLERY_URL = "https://shate-studio.github.io/gallery/"
ASSETS_URL = "https://shate-studio.github.io/gallery/"

CYR_TO_LAT = {
    "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "yo",
    "ж": "zh", "з": "z", "и": "i", "й": "y", "к": "k", "л": "l", "м": "m",
    "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u",
    "ф": "f", "х": "kh", "ц": "ts", "ч": "ch", "ш": "sh", "щ": "shch",
    "ъ": "", "ы": "y", "ь": "", "э": "e", "ю": "yu", "я": "ya",
}


def transliterate(text):
    return "".join(CYR_TO_LAT.get(c, c) for c in text.lower())


def slugify(text):
    slug = transliterate(text)
    slug = re.sub(r"[^a-z0-9]+", "-", slug)
    slug = slug.strip("-")
    slug = re.sub(r"-+", "-", slug)
    return slug or "untitled"


def generate_page_html(item):
    title = item.get("title", "Без названия")
    description = item.get("description", "").replace("\n", "<br>")
    details = item.get("details", "")
    long_description = item.get("longDescription", "")
    alt = item.get("alt", title)
    image = item.get("image", "")

    slug = slugify(title)
    page_url = f"{SITE_URL}/gallery/{slug}/"
    full_image_url = f"{ASSETS_URL}{image}"
    back_href = "../../index.html"

    og_description = description.replace("<br>", " ").strip()

    # OG-image URL (полный, с доменом) для соцсетей — абсолютный URL
    og_image_url = ASSETS_URL.rstrip("/") + "/" + image.lstrip("/")

    details_block = ""
    if details:
        details_block = f'<p class="painting-details">{details.replace(chr(10), "<br>")}</p><hr class="painting-divider">'

    long_desc_block = ""
    if long_description:
        long_desc_block = f'<p class="painting-long-desc">{long_description.replace(chr(10), "<br>")}</p>'

    html = f"""<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} | SHATE ART</title>
    <meta property="og:image" content="{og_image_url}">
    <meta property="og:image:type" content="image/jpeg">
    <meta property="og:image:alt" content="{title}">
    <meta property="og:image:secure_url" content="{og_image_url}">
    <meta property="og:title" content="{title}">
    <meta property="og:description" content="{og_description}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="{page_url}">
    <link rel="icon" type="image/jpeg" href="{SITE_URL}/gallery/pictures/favicon1.jpeg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../../style.css">
</head>
<body>
<nav>
    <div class="logo"><a href="../../index.html"><img src="../../pictures/favicon1.jpeg" alt="SHATE ART"></a></div>
    <div class="nav-right">
        <div class="nav-links">
            <a href="../../index.html">Галерея</a>
            <a href="../../index.html#about">Обо мне</a>
            <a href="../../index.html#contact">Обратная связь</a>
            <a href="https://vk.ru/studio_sha_te" target="_blank">ВКонтакте</a>
        </div>
        <button class="theme-toggle" onclick="document.body.classList.toggle('dark'); this.textContent = document.body.classList.contains('dark') ? 'Светлая' : 'Темная';">Темная</button>
    </div>
</nav>
<div class="progress-container">
    <div class="progress-bar" id="myBar"></div>
</div>
<div class="wrapper">
    <header>
        <h1>{title}</h1>
    </header>
    <div class="painting-page">
        <img src="../../{image}" alt="{alt}" class="painting-main-img">
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="../../script.js"></script>
</body>
</html>"""
    return html


def main():
    # Clean existing pages
    if os.path.exists(PAGES_DIR):
        for item in os.listdir(PAGES_DIR):
            path = os.path.join(PAGES_DIR, item)
            if os.path.isdir(path):
                for f in os.listdir(path):
                    os.remove(os.path.join(path, f))
                os.rmdir(path)

    with open(JSON_PATH, "r", encoding="utf-8") as f:
        gallery = json.load(f)
    if not gallery:
        print("Gallery is empty!")
        return

    generated = 0
    for item in gallery:
        title = item.get("title", "Без названия")
        slug = slugify(title)
        page_dir = os.path.join(PAGES_DIR, slug)
        html_path = os.path.join(page_dir, "index.html")
        os.makedirs(page_dir, exist_ok=True)
        with open(html_path, "w", encoding="utf-8") as f:
            f.write(generate_page_html(item))
        print(f"Generated: /{slug}/ -> pages/{slug}/")
        generated += 1

    print(f"Done: {generated} pages")


if __name__ == "__main__":
    main()
