const GALLERY_ITEMS = [
    {
        title: 'Лесной хранитель',
        description: 'Мощный образ медведя в лесной глуши. Художник передал первозданную природную силу и спокойную достоинство царя леса.',
        details: 'Холст, масло. 40×50 см. 2026 г.',
        longDescription: 'Мощный образ медведя в лесной глуши. Художитель передал первозданную природную силу и спокойную достоинство царя леса. Тёплые коричневые оттенки и детальная проработка шерсти создают ощущение живого присутствия.',
        alt: 'Медведь',
        image: 'paintings/bear/bear1.jpg',
        galleryImages: [
            'paintings/bear/bear1.jpg',
            'paintings/bear/bear1_interior1.jpg',
            'paintings/bear/bear1_interior2.jpg',
        ],
    },
    {
        title: 'Серебряный страж',
        description: 'Профиль тигра выглядит монументально, спокойно и сосредоточенно. Мозаичная текстура и стальной фон вызывают ассоциации с броней или древним щитом.',
        details: 'Холст, смешанная техника. 90×90 см. 2026 г.',
        longDescription: 'Арт-объект выполнен в современной смешанной технике (Mixed Media), объединяющей живопись и интерьерный барельеф.\n' +
            'Картина обладает мощной энергетикой, благородным металлическим сиянием и потрясающей скульптурной глубиной.\n' +
            'Профиль тигра выглядит монументально, спокойно и сосредоточенно.\n' +
            'Его взгляд устремлен вперед, выражая непоколебимую уверенность и скрытую силу.\n' +
            'Мозаичная текстура и стальной фон вызывают ассоциации с броней или древним щитом, превращая тотемное животное в величественного защитника и стража пространства, в котором висит картина.',
        alt: 'Серебряный страж',
        image: 'paintings/tiger/tiger1.jpg',
        galleryImages: [
            'paintings/tiger/tiger1.jpg',
            'paintings/tiger/tiger1_interior1.jpg',
        ],
    },
    {
        title: 'Свобода и полет',
        description: 'Вдохновляющая композиция, передающая величие свободного полёта. Орёл в небе символизирует дух независимости и стремление к высшим целям.',
        details: 'Холст, масло. 40×50 см. 2026 г.',
        longDescription: 'Вдохновляющая композиция, передающая величие свободного полёта. Орёл в небе символизирует дух независимости и стремление к высшим целям. Динамичная композиция и светлая палитра создают ощущение свободы.',
        alt: 'Орел',
        image: 'paintings/eagle/eagle1.jpg',
        galleryImages: [
            'paintings/eagle/eagle1.jpg',
            'paintings/eagle/eagle1_interior1.jpg',
            'paintings/eagle/eagle1_interior2.jpg',
        ],
        videoSrc: 'video/eagle/eagle1_video.mp4',
    },
    {
        title: 'Морской волк',
        description: 'Образ лидера, первопроходца и человека с несгибаемой силой воли. Мужчина, для которого рутина сли��ком тесна, его стихия — масштабные цели.',
        details: 'Холст, акрил. 50×50 см.',
        longDescription: 'Эта картина — образец мужественного, харизматичного портрета, который идеально подходит для демонстрации потенциальным клиентам.\n' +
            'Она наглядно показывает, как обычную фотографию заказчика можно превратить в кинематографичный арт-объект с сильным мужским характером.\n' +
            'Это образ лидера, первопроходца и человека с несгибаемой силой воли.\n' +
            'Он не боится жизненных штормов, умеет держать удар и уверенно управляет кораблем своей судьбы.\n' +
            'Морские просторы, мачты и канаты подчеркивают свободолюбивый нрав персонажа. \n' +
            'Это мужчина, для которого рутина слишком тесна, его стихия — масштабные цели, риск и победы.\n' +
            'Такой портрет — это не просто копия фотографии, а художественное заявление.\n' +
            'Он подчеркивает лидерские качества мужчины, его авторитет, силу и харизму, делая картину идеальным украшением для личного кабинета, библиотеки или загородного дома.\n' +
            'Индивидуальная адаптация под хобби: Образ легко адаптировать под увлечения конкретного заказчика: охота, авиация, горы, автоспорт или историческая стилизация.\n' +
            'Техника живописи позволяет органично соединить реалистичное лицо с любым сложным, динамичным фоном.',
        alt: 'Морской волк',
        image: 'paintings/sailor/sailor1.jpg',
        galleryImages: [
            'paintings/sailor/sailor1.jpg',
            'paintings/sailor/sailor2.jpg',
        ],
    },
    {
        title: 'Вольный дух',
        description: 'Энергичное и эмоциональное полотно с изображением лошади. Движение и свобода передаются через динамичные мазки и развевшуюся гриву.',
        details: 'Холст, масло. 60×80 см.',
        longDescription: 'Энергичное и эмоциональное полотно с изображением лошади. Движение и свобода передаются через динамичные мазки и развевается гриву. Работа наполнена жизненной силой и страстью.',
        alt: 'Лошадь',
        image: 'paintings/horse/horse1.jpg',
        galleryImages: [
            'paintings/horse/horse1.jpg',
            'paintings/horse/horse1_2.jpg',
            'paintings/horse/horse1_interior1.jpg',
            'paintings/horse/horse1_interior2.jpg',
        ],
        videoSrc: 'video/horse/horse1_video.mp4',
    },
    {
        title: 'Паруса на ветру',
        description: 'Живописная сцена с парусниками на фоне морского горизонта. Чувство путешествия и приключения. Нежные оттенки неба и воды создают спокойную атмосферу.',
        details: 'Холст, масло. 60×80 см.',
        longDescription: 'Живописная сцена с парусниками на фоне морского горизонта. Работа передаёт чувство путешествия и приключения. Нежные оттенки неба и воды создают спокойную, медитативную атмосферу.',
        alt: 'Парусники',
        image: 'paintings/sailboat/sailboat1.jpg',
        galleryImages: [
            'paintings/sailboat/sailboat1.jpg',
        ],
    },
    {
        title: 'Королевский ирис',
        description: 'Левый нижний угол выложен зеркальной мозаикой. Ирис исторически считается цветком королей и символом благородства.',
        details: 'Холст, смешанная техника. 60×80 см.',
        longDescription: 'Работа выполнена в современной смешанной технике (Mixed Media) с акцентом на ювелирную детализацию.\n' +
            'Левый нижний угол выложен зеркальной  мозаикой. Осколки преломляют свет и придают композиции дополнительный объем и блеск.\n' +
            'Ирис исторически считается цветком королей и символом благородства. \n' +
            'Тончайшая проработка лепестков напоминает драгоценную парчу или шелковые нити, \n' +
            'расшитые золотом. Насыщенный фиолетово-пурпурный цвет бутона в сочетании с золотым \n' +
            'и серебряным фоном подчеркивает величественный, по-настоящему роскошный статус этого цветка.\n' +
            'Мозаичные осколки, металл и рельеф словно «замораживают» мимолетную красоту цветения ириса, превращая его в вечную ювелирную ценность.',
        alt: 'Королевский ирис',
        image: 'paintings/iris/iris1.jpg',
        galleryImages: [
            'paintings/iris/iris1_interior1.jpg',
            'paintings/iris/iris1_interior2.jpg',
        ],
    },
    {
        title: 'Ганеша',
        description: 'Величественная фигура слона воплощает монументальную, спокойную и защищающую силу. Слон — страж и проводник в мир духовности.',
        details: 'Холст, смешанная техника. 70×70 см.',
        longDescription: 'Картина выполнена в современной смешанной технике (Mixed Media) с акцентом на объем и фактуру.\n' +
            'Для создания мощного рельефа кожи слона, морщин вокруг глаз и складок на ушах использовалась текстурная  паста. \n' +
            'Мазки наносились мастихином, создавая грубую, первозданную текстуру, которая имитирует настоящую мощную кожу гиганта.\n' +
            'На выступающие части рельефа наложена листовая поталь (имитация сусального золота). \n' +
            'Из-за неравномерности текстуры золото легло с эффектом благородной патины и старины.\n' +
            'В индуизме Ганеша — это божество с головой слона почитаемое как устранитель препятствий, покровитель мудрости, благополучия и искусства.\n' +
            'Величественная фигура слона на переднем плане воплощает эту монументальную, спокойную и защищающую силу.\n' +
            'В левом нижнем углу картины едва уловимыми силуэтами проступают очертания буддийского храма, ступ, и восседающей фигуры Будды.\n' +
            'Это погружает зрителя в атмосферу древней Азии, превращая портрет животного в сакральный образ.\n' +
            'Слон здесь — не просто обитатель джунглей, а страж и проводник в мир духовности.\n' +
            'Обилие золотых оттенков на коже слона символизирует божественное сияние, чистоту и просветление.\n' +
            'Свет, струящийся по его текстурному уху и бивню, ассоциируется с благословением и богатством, которые традиционно дарует Ганеша.',
        alt: 'Ганеша',
        image: 'paintings/elephant/elephant1.jpg',
        galleryImages: [
            'paintings/elephant/elephant1.jpg',
            'paintings/elephant/elephant2.jpg',
            'paintings/elephant/elephant1_interior1.jpg',
        ],
    },
    {
        title: 'Лунный странник',
        description: 'Серебристо-белая шерсть коня и мерцающие элементы вызывают ассоциацию с холодным лунным светом. Дух свободы и внутреннего поиска.',
        details: 'Холст, масло. 42×70 см.',
        longDescription: 'Картина представляет собой  интерьерную работу в стиле Mixed Media (смешанная техника), \n' +
            'где классическая живопись соединяется с современными скульптурными материалами.\n' +
            'С помощью структурной пасты и мастихина скульптурно проработаны анатомические особенности: \n' +
            'рельефные надбровные дуги, мощные линии морды, скулы, изгиб шеи и чуткие уши.декоративный \n' +
            'акцент сделан на прядях гривы из зеркальных элементов,залитых эпоксидной смолой, \n' +
            'этот прием дает потрясающий оптический эффект: при изменении угла обзора и освещения \n' +
            'грива начинает буквально вспыхивать и искриться, имитируя блеск звезд.\n' +
            'Вся цветовая гамма картины пронизана холодным, мистическим сиянием.\n' +
            'Серебристо-белая шерсть коня, глубокий сине-стальной фон и мерцающие элементы \n' +
            'вызывают прямую ассоциацию с холодным лунным светом, заливающим ночной пейзаж.\n' +
            'Дух свободы и поиска: Лошадь — вечный символ свободы, движения и верности.\n' +
            'Внимательный, глубокий взгляд коня устремлен вдаль, словно он замер на мгновение \n' +
            'во время своего бесконечного путешествия под покровом ночи.\n' +
            'Сверкающая грива выглядит как звездный шлейф, который оставляет за собой этот благородный странник.\n' +
            'Картина исследует тему одиночества, внутреннего поиска и неразрывной связи живого существа с ритмами Вселенной.',
        alt: 'Лунный странник',
        image: 'paintings/wanderer/wanderer1.jpg',
        galleryImages: [
            'paintings/wanderer/wanderer1.jpg',
        ],
    },
    {
        title: 'Маки',
        description: 'Яркое и эмоциональное полотно с изображением маков. Глубокие красные тона и свободная манера письма создают ощущение страсти.',
        details: 'Холст, масло. 60×80 см.',
        longDescription: 'Яркое и эмоциональное полотно с изображением маков. Глубокие красные тона и свободная манера письма создают ощущение страсти и жизненной энергии. работа в стиле импрессионизма.',
        alt: 'Маки',
        image: 'paintings/poppy/poppy1.jpg',
        galleryImages: [
            'paintings/poppy/poppy1.jpg',
        ],
    },
    {
        title: 'Девушка и цветок',
        description: 'Изысканная композиция, сочетающая женственность и природную красоту. Образ девушки с цветком символизирует гармонию человека и природы.',
        details: 'Холст, масло. 60×80 см.',
        longDescription: 'Изысканная композиция, сочетающая женственность и природную красоту. Образ девушки с цветком символизирует гармонию человека и природы. Нежные тона и мягкое освещение создают романтическую атмосферу.',
        alt: 'Девушка',
        image: 'paintings/girl_flower/girl_flower1.jpg',
        galleryImages: [
            'paintings/girl_flower/girl_flower1.jpg',
            'paintings/girl_flower/girl_flower1_interior1.jpg',
        ],
    },
    {
        title: 'Леопард',
        description: 'Роскошное изображение леопарда с детальным изображением окраса. Тёплые золотистые тона подчеркивают величие и грацию дикого животного.',
        details: 'Холст, масло. 60×80 см.',
        longDescription: 'Роскошное изображение леопарда с детальным изображением окраса. Работа демонстрирует мастерство художника в передаче дикой красоты и грацииBig cat. Тёплые золотистые тона подчеркивают величие животного.',
        alt: 'Леопард',
        image: 'paintings/leopard/leopard1.jpg',
        galleryImages: [
            'paintings/leopard/leopard1.jpg',
            'paintings/leopard/leopard1_interior1.jpg',
        ],
    },
    {
        title: 'Часы "Цветение мгновения"',
        description: 'Роскошное изображение с детальным оформлением. Работа демонстрирует мастерство в передаче декоративной красоты.',
        details: 'Холст, масло. 60×80 см.',
        longDescription: 'Роскошное изображение леопарда с детальным изображением окраса. Работа демонстрирует мастерство художника в передаче дикой красоты и грацииBig cat. Тёплые золотистые тона подчеркивают величие животного.',
        alt: 'Часы "Цветение мгновения"',
        image: 'paintings/clock/clock1.jpg',
        galleryImages: [
            'paintings/clock/clock1.jpg',
            'paintings/clock/clock_interior1.jpg',
        ],
    },
];

function renderActionCard(item, index) {
    const photoCount = item.galleryImages.length >= 1
        ? `<span class="photo-count">${item.galleryImages.length} фото</span>`
        : '';

    const descriptionButton = item.longDescription
        ? `<button type="button" class="img-action-btn img-action-btn--description" data-action="description" data-description="${item.longDescription.replace(/"/g, '&quot;')}" aria-label="Описание картины">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
            </button>`
        : '';

    const videoButton = item.videoSrc
        ? `<button type="button" class="img-action-btn img-action-btn--video" data-action="video" data-video="${item.videoSrc}" aria-label="Видео">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5,3 19,12 5,21"/>
                </svg>
            </button>`
        : '';

    return `
        <div class="card" data-aos="fade-up" data-aos-duration="900" data-aos-delay="${index * 100}">
            <div class="img-container img-container--actions">
                ${photoCount}
                <img src="${item.image}" alt="${item.alt}" loading="lazy">
                <div class="img-actions">
                    ${descriptionButton}
                    ${videoButton}
                </div>
            </div>
            <div class="card-info">
                <h3>${item.title}</h3>
                <p class="card-description">${item.description}</p>
                ${item.details ? `<p class="card-details">${item.details}</p>` : ''}
                <a href="https://vk.ru/sha_te" class="btn" target="_blank" rel="noopener noreferrer">Узнать цену</a>
            </div>
        </div>
    `;
}

function renderGallery() {
    const container = document.getElementById('gallery');
    if (!container) return;

    container.innerHTML = GALLERY_ITEMS.map((item, index) => renderActionCard(item, index)).join('');
}

let currentGalleryIndex = 0;
let currentGalleryItems = [];
let currentGalleryTitle = '';

function initGalleryActions() {
    document.querySelectorAll('.img-action-btn').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (button.dataset.action === 'video') {
                showVideoModal(button.dataset.video);
                return;
            }

            if (button.dataset.action === 'description') {
                const card = button.closest('.card');
                const imgSrc = card?.querySelector('img')?.src;
                const title = card?.querySelector('h3')?.textContent;
                const longDescription = card?.querySelector('.img-action-btn--description')?.getAttribute('data-description') || '';
                const cardIndex = Array.from(document.querySelectorAll('.card')).indexOf(card);
                const galleryItem = GALLERY_ITEMS[cardIndex] || {};
                const details = galleryItem.details || '';
                if (imgSrc) {
                    showDescriptionModal(imgSrc, title, longDescription, details);
                }
                return;
            }
        });
    });

    // Click on image opens gallery modal with thumbnails on right
    document.querySelectorAll('.img-container--actions').forEach((container) => {
        container.addEventListener('click', () => {
            const card = container.closest('.card');
            if (card) {
                const cards = Array.from(document.querySelectorAll('.card'));
                const cardIndexNum = cards.indexOf(card);
                const galleryData = GALLERY_ITEMS[cardIndexNum];
                if (galleryData?.galleryImages) {
                    showGalleryModal(galleryData.galleryImages, galleryData.title);
                }
            }
        });
    });

    // Arrow key navigation for gallery modal
    document.addEventListener('keydown', (e) => {
        const galleryModal = document.querySelector('.gallery-modal');
        if (!galleryModal) return;

        if (e.key === 'ArrowLeft') {
            currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
            updateGalleryImage();
        } else if (e.key === 'ArrowRight') {
            currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryItems.length;
            updateGalleryImage();
        }
    });
}

function showGalleryModal(images, title) {
    currentGalleryItems = images;
    currentGalleryIndex = 0;
    currentGalleryTitle = title;

    const modal = document.createElement('div');
    modal.className = 'gallery-modal';
    modal.innerHTML = `
        <div class="gallery-modal-content">
            <button class="gallery-modal-close">&times;</button>
            <button class="gallery-modal-nav gallery-modal-prev">❮</button>
            <button class="gallery-modal-nav gallery-modal-next">❯</button>
            <div class="gallery-modal-body">
                <img src="${images[0]}" alt="${title}" class="gallery-modal-main">
                <div class="gallery-modal-thumbs">
                    ${images.map((img, idx) => `
                        <img src="${img}" alt="Миниатюра ${idx + 1}" class="gallery-modal-thumb ${idx === 0 ? 'active' : ''}" data-index="${idx}">
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Thumbnail click
    modal.querySelectorAll('.gallery-modal-thumb').forEach((thumb) => {
        thumb.addEventListener('click', () => {
            currentGalleryIndex = parseInt(thumb.dataset.index);
            updateGalleryImage();
        });
    });

    // Navigation
    modal.querySelector('.gallery-modal-prev').addEventListener('click', (e) => {
        e.stopPropagation();
        currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
        updateGalleryImage();
    });

    modal.querySelector('.gallery-modal-next').addEventListener('click', (e) => {
        e.stopPropagation();
        currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryItems.length;
        updateGalleryImage();
    });

    const closeBtn = modal.querySelector('.gallery-modal-close');

    function closeModal() {
        modal.remove();
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function updateGalleryImage() {
    const modal = document.querySelector('.gallery-modal');
    if (!modal) return;

    const mainImg = modal.querySelector('.gallery-modal-main');
    const thumbs = modal.querySelectorAll('.gallery-modal-thumb');

    mainImg.src = currentGalleryItems[currentGalleryIndex];
    mainImg.alt = currentGalleryTitle;

    thumbs.forEach((thumb) => {
        thumb.classList.remove('active');
        if (parseInt(thumb.dataset.index) === currentGalleryIndex) {
            thumb.classList.add('active');
        }
    });
}

function showVideoModal(src) {
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    modal.innerHTML = `
        <div class="video-modal-content">
            <button class="video-modal-close">&times;</button>
            <video controls autoplay>
                <source src="${src}" type="video/mp4">
                Ваш браузер не поддерживает видео.
            </video>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    const closeBtn = modal.querySelector('.video-modal-close');
    const video = modal.querySelector('video');

    function closeModal() {
        video.pause();
        modal.remove();
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function showDescriptionModal(imageSrc, title, longDescription, details) {
    const modal = document.createElement('div');
    modal.className = 'description-modal';

    let textContent = '';

    // Верхний блок - название и художественное описание
    textContent += `<div class="description-section">`;
    textContent += `<h3>${title}</h3>`;
    if (longDescription) {
        textContent += `<p class="description-paragraph">${longDescription}</p>`;
    }
    textContent += `</div>`;

    // Разделитель + материалы, техника и размеры
    if (details) {
        textContent += `<hr class="description-divider">`;
        textContent += `<div class="description-section">`;
        textContent += `<p class="description-paragraph description-meta">${details}</p>`;
        textContent += `</div>`;
    }

    modal.innerHTML = `
        <div class="description-modal-content">
            <button class="description-modal-close">&times;</button>
            <button class="description-modal-close-inner">&times;</button>
            <div class="description-modal-body">
                <div class="description-modal-image">
                    <img src="${imageSrc}" alt="${title}">
                </div>
                <div class="description-modal-text">
                    ${textContent}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    const closeBtn = modal.querySelector('.description-modal-close');
    const closeBtnInner = modal.querySelector('.description-modal-close-inner');

    function closeModal() {
        modal.remove();
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    closeBtnInner.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
}

function initGalleryProtection() {
    document.querySelectorAll('.card img').forEach((img) => {
        img.addEventListener('contextmenu', (e) => e.preventDefault());
    });
}

renderGallery();
initGalleryActions();
initGalleryProtection();

AOS.init({ once: true });

window.onscroll = function () {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const progressBar = document.getElementById('myBar');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
};

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    // Инициализация EmailJS
    emailjs.init("N_2FXreDvZ4FXaUKL");

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Отправка...';
        submitBtn.disabled = true;

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const templateParams = {
            from_name: name,
            reply_to: email,
            message_html: `Новое сообщение с сайта SHA_TE ART:<br><br>Имя: ${name}<br>Email: ${email}<br><br>Сообщение:<br>${message}`
        };

        emailjs.send("service_c411ytw", "template_zw37w6m", templateParams)
            .then(function() {
                form.reset();
                alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
            })
            .catch(function(error) {
                console.error('Ошибка:', error);
                alert('Ошибка отправки сообщения. Пожалуйста, попробуйте позже.');
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
    });
}

initContactForm();
