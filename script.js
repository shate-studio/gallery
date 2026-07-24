const GALLERY_ITEMS = [
    {
        title: 'Лесной хранитель',
        description: 'Холст, масло. 40×50 см. 2026 г.',
        alt: 'Медведь',
        image: 'paintings/bear1.jpg',
        galleryImages: [
            'paintings/bear1.jpg',
            'paintings/bear/bear1_interior1.jpg',
        ],
    },
    {
        title: 'Взгляд хищника',
        description: 'Холст, масло. 40×50 см. 2026 г.',
        alt: 'Тигр',
        image: 'paintings/tiger1.jpg',
        galleryImages: [
            'paintings/tiger1.jpg',
            'tiger/tiger1_interior1.jpg',
        ],
    },
    {
        title: 'Морской ветер',
        description: 'Холст, акрил. 50×50 см.',
        alt: 'Моряк',
        images: ['paintings/sailor1.jpg'],
    },
    {
        title: 'Вольный дух',
        description: 'Холст, масло. 60×80 см.',
        alt: 'Лошадь',
        images: ['paintings/horse1.jpg'],
    },
];

function renderActionCard(item, index) {
    const galleryLinks = item.galleryImages.map((src, imageIndex) =>
        `<a href="${src}" data-lightbox="album-${index}" data-title="${item.title}" class="gallery-lightbox-trigger gallery-lightbox-trigger--gallery${imageIndex === 0 ? ' gallery-lightbox-trigger--gallery-first' : ''}" tabindex="-1" aria-hidden="true"></a>`
    ).join('');

    const photoCount = item.galleryImages.length > 1
        ? `<span class="photo-count">${item.galleryImages.length} фото</span>`
        : '';

    return `
        <div class="card" data-aos="fade-up" data-aos-duration="900" data-aos-delay="${index * 100}">
            <div class="img-container img-container--actions">
                ${photoCount}
                <img src="${item.image}" alt="${item.alt}" loading="lazy">
                <div class="img-actions">
                    <button type="button" class="img-action-btn" data-action="zoom">Увеличить</button>
                    <button type="button" class="img-action-btn" data-action="gallery">Открыть галерею</button>
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

            const container = button.closest('.img-container');
            const selector = button.dataset.action === 'zoom'
                ? '.gallery-lightbox-trigger--zoom'
                : '.gallery-lightbox-trigger--gallery-first';

            container?.querySelector(selector)?.click();
        });
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
