#!/usr/bin/env python3
"""Update GALLERY_ITEMS to add 'details' field for materials/size."""

file_path = "/home/ps/work/shate-studio/script.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Mapping: title -> (short_description, details)
items_update = {
    "Лесной хранитель": {
        "description": "Мощный образ медведя в лесной глуши. Художник передал первозданную природную силу и спокойную достоинство царя леса.",
        "details": "Холст, масло. 40×50 см. 2026 г."
    },
    "Серебряный страж": {
        "description": "Профиль тигра выглядит монументально, спокойно и сосредоточенно. Мозаичная текстура и стальной фон вызывают ассоциации с броней или древним щитом.",
        "details": "Холст, смешанная техника. 90х90 см. 2026 г."
    },
    "Свобода и полет": {
        "description": "Вдохновляющая композиция, передающая величие свободного полёта. Орёл в небе символизирует дух независимости и стремление к высшим целям.",
        "details": "Холст, масло. 40×50 см. 2026 г."
    },
    "Морской волк": {
        "description": "Образ лидера, первопроходца и человека с несгибаемой силой воли. Масштабные цели, риск и победы.",
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
        "details": "Холст, масло. 70х70 см."
    },
    "Лунный странник": {
        "description": "Интерьерная работа в стиле Mixed Media. Дух свободы и внутреннего поиска под лунным светом.",
        "details": "Холст, масло. 42х70 см."
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
    "Часы \"Цветение мгновения\"": {
        "description": "Роскошное изображение с детальным оформлением. Мастерство в передаче декоративной красоты.",
        "details": "Холст, масло. 60×80 см."
    },
}

lines = content.split("\n")
new_lines = []
i = 0
replaced = 0

while i < len(lines):
    line = lines[i]
    
    # Check if this is a title line
    if "title:" in line and "description:" in content[content.find(line):content.find(line)+200]:
        # Extract title
        if "'" in line:
            title = line.split("'")[1]
            
            if title in items_update:
                # Look ahead for description line
                if i + 1 < len(lines) and "description:" in lines[i + 1]:
                    # Extract old description
                    old_desc_line = lines[i + 1].strip()
                    # Extract the text between quotes
                    if "'" in old_desc_line:
                        old_desc = old_desc_line.split("'")[1].split("'")[0] if old_desc_line.count("'") >= 2 else old_desc_line.split("'")[1]
                    
                    # More robust extraction
                    import re
                    desc_match = re.search(r"description:\s*'([^']*)'", lines[i + 1])
                    if desc_match:
                        old_desc = desc_match.group(1)
                        
                        data = items_update[title]
                        
                        # Replace the description line and insert details
                        new_lines.append(line)
                        new_lines.append(f"        description: '{data['description']}',")
                        new_lines.append(f"        details: '{data['details']}',")
                        replaced += 1
                        print(f"✅ '{title}':")
                        print(f"   description -> {data['description']}")
                        print(f"   details     -> {data['details']}")
                    else:
                        new_lines.append(line)
                        new_lines.append(lines[i + 1])
                    i += 2
                    continue
            
            new_lines.append(line)
        else:
            new_lines.append(line)
    else:
        new_lines.append(line)
    i += 1

new_content = "\n".join(new_lines)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"\n📊 Replaced {replaced} items.")
print("✅ Done!")
