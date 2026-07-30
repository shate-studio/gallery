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
    const galleryLinks = item.galleryImages.map((src, imageIndex) =>
        `<a href="${src}" data-lightbox="album-${index}" data-title="${item.title}" class="gallery-lightbox-trigger gallery-lightbox-trigger--gallery${imageIndex === 0 ? ' gallery-lightbox-trigger--gallery-first' : ''}" tabindex="-1" aria-hidden="true"></a>`
    ).join('');

    const photoCount = item.galleryImages.length >= 1
        ? `<span class="photo-count">${item.galleryImages.length} фото</span>`
        : '';

    const videoButton = item.videoSrc
        ? `<button type="button" class="img-action-btn img-action-btn--video" data-action="video" data-video="${item.videoSrc}" aria-label="Видео">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5,3 19,12 5,21"/>
                </svg>
            </button>`
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

    return `
        <div class="card" data-aos="fade-up" data-aos-duration="900" data-aos-delay="${index * 100}">
            <div class="img-container img-container--actions">
                ${photoCount}
                <img src="${item.image}" alt="${item.alt}" loading="lazy">
                <div class="img-actions">
                    <button type="button" class="img-action-btn img-action-btn--zoom" data-action="zoom" aria-label="Увеличить">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="7"/>
                            <line x1="16.5" y1="16.5" x2="21" y2="21"/>
                            <line x1="8" y1="11" x2="14" y2="11"/>
                            <line x1="11" y1="8" x2="11" y2="14"/>
                        </svg>
                    </button>
                    <button type="button" class="img-action-btn img-action-btn--gallery" data-action="gallery" aria-label="Галерея">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="7" height="7"/>
                            <rect x="14" y="3" width="7" height="7"/>
                            <rect x="14" y="14" width="7" height="7"/>
                            <rect x="3" y="14" width="7" height="7"/>
                        </svg>
                    </button>
                    ${videoButton}
                    ${descriptionButton}
                </div>
                <a href="${item.image}" data-lightbox="zoom-${index}" data-title="${item.title}" class="gallery-lightbox-trigger gallery-lightbox-trigger--zoom" tabindex="-1" aria-hidden="true"></a>
                ${galleryLinks}
            </div>
            <div class="card-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="https://vk.ru/sha_te" class="btn" target="_blank" rel="noopener noreferrer">Узнать цену</a>
            </div>
        </div>
    `;
}

function renderDefaultCard(item, index) {
    const lightboxGroup = `work-${index}`;
    const [mainImage, ...extraImages] = item.images;
    const extraLinks = extraImages.map((src) =>
        `<a href="${src}" data-lightbox="${lightboxGroup}" data-title="${item.title}" class="gallery-extra" tabindex="-1" aria-hidden="true"></a>`
    ).join('');

    return `
        <div class="card" data-aos="fade-up" data-aos-duration="900" data-aos-delay="${index * 100}">
            <div class="img-container">
                <a href="${mainImage}" data-lightbox="${lightboxGroup}" data-title="${item.title}">
                    <img src="${mainImage}" alt="${item.alt}" loading="lazy">
                </a>
                ${extraLinks}
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

    container.innerHTML = GALLERY_ITEMS.map((item, index) =>
        item.galleryImages ? renderActionCard(item, index) : renderDefaultCard(item, index)
    ).join('');
}

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
                const description = card?.querySelector('.img-action-btn--description')?.getAttribute('data-description') || '';
                if (imgSrc && description) {
                    showDescriptionModal(imgSrc, title, description);
                }
                return;
            }

            const container = button.closest('.img-container');
            const selector = button.dataset.action === 'zoom'
                ? '.gallery-lightbox-trigger--zoom'
                : '.gallery-lightbox-trigger--gallery-first';

            container?.querySelector(selector)?.click();
        });
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

function showDescriptionModal(imageSrc, title, description) {
    const modal = document.createElement('div');
    modal.className = 'description-modal';
    modal.innerHTML = `
        <div class="description-modal-content">
            <button class="description-modal-close">&times;</button>
            <div class="description-modal-body">
                <div class="description-modal-image">
                    <img src="${imageSrc}" alt="${title}">
                </div>
                <div class="description-modal-text">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    const closeBtn = modal.querySelector('.description-modal-close');

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
