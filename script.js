const GALLERY_ITEMS = [
    {
        title: 'Лесной хранитель',
        description: 'Холст, масло. 40×50 см. 2026 г.',
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
        alt: 'Парусники',
        image: 'paintings/sailboat/sailboat1.jpg',
        galleryImages: [
            'paintings/sailboat/sailboat1.jpg',
        ],
    },
    {
        title: 'Ириски',
        description: 'Холст, масло. 60×80 см.',
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
        alt: 'Странник',
        image: 'paintings/wanderer/wanderer1.jpg',
        galleryImages: [
            'paintings/wanderer/wanderer1.jpg',
        ],
    },
    {
        title: 'Маки',
        description: 'Холст, масло. 60×80 см.',
        alt: 'Маки',
        image: 'paintings/poppy/poppy1.jpg',
        galleryImages: [
            'paintings/poppy/poppy1.jpg',
        ],
    },
    {
        title: 'Девушка и цветок',
        description: 'Холст, масло. 60×80 см.',
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

    const photoCount = item.galleryImages.length > 1
        ? `<span class="photo-count">${item.galleryImages.length} фото</span>`
        : '';

    const videoButton = item.videoSrc
        ? `<button type="button" class="img-action-btn" data-action="video" data-video="${item.videoSrc}">Видео</button>`
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
                    <button type="button" class="img-action-btn" data-action="gallery">Открыть галерею</button>
                    ${videoButton}
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
