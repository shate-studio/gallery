const GALLERY_ITEMS = [
    {
        title: 'Лесной хранитель',
        description: 'Холст, масло. 40×50 см. 2026 г.',
        longDescription: 'Мощный образ медведя в лесной глуши. Художитель передал первозданную природную силу и спокойную достоинство царя леса. Тёплые коричневые оттенки и детальная проработка шерсти создают ощущение живого присутствия.',
        alt: 'Медведь',
        image: 'paintings/bear/bear1.jpg',
        galleryImages: [
            'paintings/bear/bear1.jpg',
            'paintings/bear/bear1_interior1.jpg',
        ],
    },
    {
        title: 'Взгляд хищника',
        description: 'Холст, масло. 40×50 см. 2026 г.',
        longDescription: 'Драматичное изображение тигра, пойманного в момент напряжённого внимания. Пронзительный взгляд хищника и напряжение мускулов передают предельную сосредоточенность и готовность к прыжку.',
        alt: 'Тигр',
        image: 'paintings/tiger/tiger1.jpg',
        galleryImages: [
            'paintings/tiger/tiger1.jpg',
            'paintings/tiger/tiger1_interior1.jpg',
        ],
    },
    {
        title: 'Свобода и полет',
        description: 'Холст, масло. 40×50 см. 2026 г.',
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
        title: 'Морской ветер',
        description: 'Холст, акрил. 50×50 см.',
        longDescription: 'Романтическое изображение моряка на фоне морского простора. Работа наполнена атмосферой приключений и морской стихии. Голубые и синие тона передают с��ежесть морского воздуха.',
        alt: 'Моряк',
        image: 'paintings/sailor/sailor1.jpg',
        galleryImages: [
            'paintings/sailor/sailor1.jpg',
            'paintings/sailor/sailor2.jpg',
        ],
    },
    {
        title: 'Вольный дух',
        description: 'Холст, масло. 60×80 см.',
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
        description: 'Холст, масло. 60×80 см.',
        longDescription: 'Живописная сцена с парусниками на фоне морского горизонта. Работа передаёт чувство путешествия и приключения. Нежные оттенки неба и воды создают спокойную, медитативную атмосферу.',
        alt: 'Парусники',
        image: 'paintings/sailboat/sailboat1.jpg',
        galleryImages: [
            'paintings/sailboat/sailboat1.jpg',
        ],
    },
    {
        title: 'Ириски',
        description: 'Холст, масло. 60×80 см.',
        longDescription: 'Нежный цветочный пейзаж с изображением ирисов. Тонкие оттенки фиолетового и синего создают ощущение лёгкости и изящества. Работа наполнена весенним настроением и гармонией природы.',
        alt: 'Ирис',
        image: 'paintings/iris/iris1.jpg',
        galleryImages: [
            'paintings/iris/iris1_interior1.jpg',
            'paintings/iris/iris1_interior2.jpg',
        ],
    },
    {
        title: 'Великий слон',
        description: 'Холст, масло. 60×80 см.',
        longDescription: 'Величественное изображение слона — символа мудрости и силы. Масштабная работа демонстрирует мастерство художества в передаче размера и текстуры животного. Природное величие и спокойствие.',
        alt: 'Слон',
        image: 'paintings/elephant/elephant1.jpg',
        galleryImages: [
            'paintings/elephant/elephant1.jpg',
            'paintings/elephant/elephant2.jpg',
            'paintings/elephant/elephant1_interior1.jpg',
        ],
    },
    {
        title: 'Странник',
        description: 'Холст, масло. 60×80 см.',
        longDescription: 'Философское полотно о путешествии и самопознании. Изображение странника символизирует духовный поиск и путь к себе. Работа наполнена глубиной и призывает к размышлению о смысле жизни.',
        alt: 'Странник',
        image: 'paintings/wanderer/wanderer1.jpg',
        galleryImages: [
            'paintings/wanderer/wanderer1.jpg',
        ],
    },
    {
        title: 'Маки',
        description: 'Холст, масло. 60×80 см.',
        longDescription: 'Яркое и эмоциональное полотно с изображением маков. Глубокие красные тона и свободная манера письма создают ощущение страсти и жизненной энергии. работа в стиле импрессионизма.',
        alt: 'Маки',
        image: 'paintings/poppy/poppy1.jpg',
        galleryImages: [
            'paintings/poppy/poppy1.jpg',
        ],
    },
    {
        title: 'Девушка и цветок',
        description: 'Холст, масло. 60×80 см.',
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
        description: 'Холст, масло. 60×80 см.',
        longDescription: 'Роскошное изображение леопарда с детальным изображением окраса. Работа демонстрирует мастерство художника в передаче дикой красоты и грацииBig cat. Тёплые золотистые тона подчеркивают величие животного.',
        alt: 'Леопард',
        image: 'paintings/leopard/leopard1_interior1.jpg',
        galleryImages: [
            'paintings/leopard/leopard1_interior1.jpg',
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
                <p>${item.description}</p>
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
                const shortDescription = GALLERY_ITEMS[cardIndex]?.description || '';
                if (imgSrc) {
                    showDescriptionModal(imgSrc, title, longDescription, shortDescription);
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

function showDescriptionModal(imageSrc, title, longDescription, shortDescription) {
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

    // Разделитель + материалы и размеры
    if (shortDescription) {
        textContent += `<hr class="description-divider">`;
        textContent += `<div class="description-section">`;
        textContent += `<p class="description-paragraph description-meta">${shortDescription}</p>`;
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
