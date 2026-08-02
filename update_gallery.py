#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Update data/gallery.json with new/modified gallery items."""

import json
import os

JSON_PATH = os.path.join(os.path.dirname(__file__), "data", "gallery.json")

# Mapping: title -> new data
# Add or update items here
items_update = {
    "Лесной хранитель": {
        "description": "Мощный образ медведя в лесной глуши. Художник передал первозданную природную силу и спокойную достоинство царя леса.",
        "details": "Холст, масло. 40×50 см. 2026 г."
    },
    "Серебряный страж": {
        "description": "Профиль тигра выглядит монументально, спокойно и сосредоточенно. Мозаичная текстура и стальной фон вызывают ассоциации с броней или древним щитом.",
        "details": "Холст, смешанная техника. 90×90 см. 2026 г."
    },
    "Свобода и полет": {
        "description": "Вдохновляющая композиция, передающая величие свободного полёта. Орёл в небе символизирует дух независимости и стремление к высшим целям.",
        "details": "Холст, масло. 40×50 см. 2026 г."
    },
    "Морской волк": {
        "description": "Образ лидера, первопроходца и человека с несгибаемой силой воли. Мужчина, для которого рутина слишком тесна, его стихия — масштабные цели.",
        "details": "Холст, акрил. 50×50 см."
    },
    "Вольный дух": {
        "description": "Энергичное и эмоциональное полотно с изображением лошади. Движение и свобода передаются через динамичные мазки.",
        "details": "Холст, масло. 60×80 см."
    },
    "Паруса на ветру": {
        "description": "Живописная сцена с парусниками на фоне морского горизонта. Чувство путешествия и приключения.",
        "details": "Холст, масло. 60×80 см."
    },
    "Королевский ирис": {
        "description": "Работа выполнена в смешанной технике с ювелирной детализацией. Цветок королей и символ благородства.",
        "details": "Холст, масло. 60×80 см."
    },
    "Ганеша": {
        "description": "Величественная фигура слона воплощает монументальную, спокойную и защищающую силу. Страж и проводник в мир духовности.",
        "details": "Холст, масло. 70×70 см."
    },
    "Лунный странник": {
        "description": "Интерьерная работа в стиле Mixed Media. Дух свободы и внутреннего поиска под лунным светом.",
        "details": "Холст, масло. 42×70 см."
    },
    "Маки": {
        "description": "Яркое и эмоциональное полотно с изображением маков. Глубокие красные тона и свободная манера письма.",
        "details": "Холст, масло. 60×80 см."
    },
    "Девушка и цветок": {
        "description": "Изысканная композиция, сочетающая женственность и природную красоту. Гармония человека и природы.",
        "details": "Холст, масло. 60×80 см."
    },
    "Леопард": {
        "description": "Роскошное изображение леопарда с детальным окрасом. Величие и грация дикого животного.",
        "details": "Холст, масло. 60×80 см."
    },
    'Часы "Цветение мгновения"': {
        "description": "Роскошное изображение с детальным оформлением. Мастерство в передаче декоративной красоты.",
        "details": "Холст, масло. 60×80 см."
    },
}


def main():
    # Load existing JSON
    with open(JSON_PATH, "r", encoding="utf-8") as f:
        gallery = json.load(f)

    replaced = 0

    for item in gallery:
        title = item.get("title", "")
        if title in items_update:
            update = items_update[title]
            old_desc = item.get("description", "")
            old_details = item.get("details", "")

            if old_desc != update["description"] or old_details != update["details"]:
                item["description"] = update["description"]
                item["details"] = update["details"]
                print(f"✅ '{title}':")
                print(f"   description -> {update['description']}")
                print(f"   details     -> {update['details']}")
                replaced += 1

    # Save back
    with open(JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(gallery, f, ensure_ascii=False, indent=4)

    print(f"\n📊 Replaced {replaced} items.")
    print("✅ Done!")


if __name__ == "__main__":
    main()
