// Загрузка данных галереи из JSON
let GALLERY_ITEMS = [];

async function loadGalleryData() {
    try {
        const response = await fetch('data/gallery.json');
        if (!response.ok) throw new Error('Failed to load gallery data');
        GALLERY_ITEMS = await response.json();
        console.log(`✅ Gallery loaded: ${GALLERY_ITEMS.length} items`);
    } catch (error) {
        console.error('Error loading gallery data:', error);
        GALLERY_ITEMS = [];
    }
}

function renderActionCard(item, index) {
    const counts = [];
    if (item.galleryImages && item.galleryImages.length >= 1) {
        counts.push(`${item.galleryImages.length} фото`);
    }
    if (item.videoSrc) {
        const videoCount = item.galleryVideos ? item.galleryVideos.length : 1;
        counts.push(`${videoCount} видео`);
    }
    const photoCount = counts.length > 0
        ? `<span class="photo-count">${counts.join(', ')}</span>`
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

    const siteUrl = 'https://shate-studio.github.io/gallery/';
    const fullImageUrl = siteUrl + item.image;
    const pageUrl = `${siteUrl}#${item.title.replace(/\s+/g, '-')}`;
    const shareButton = `<button type="button" class="img-action-btn img-action-btn--share" data-action="share" data-title="${item.title}" data-url="${pageUrl}" data-image-url="${fullImageUrl}" data-description="${item.description.replace(/\n/g, ' ').substring(0, 200)}" aria-label="Поделиться картиной">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
        </button>`;

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
                <p class="card-description">${item.description.replace(/\n/g, '<br>')}</p>
                <div class="card-actions">
                    ${shareButton}
                    <button class="btn" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'});">Узнать цену</button>
                </div>
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
                if (button.dataset.video.startsWith('http://') || button.dataset.video.startsWith('https://')) {
                    window.open(button.dataset.video, '_blank');
                    return;
                }
                showVideoModal(button.dataset.video);
                return;
            }

            if (button.dataset.action === 'description') {
                const card = button.closest('.card');
                const imgSrc = card?.querySelector('img')?.src;
                const title = card?.querySelector('h3')?.textContent;
                const cardIndex = Array.from(document.querySelectorAll('.card')).indexOf(card);
                const galleryItem = GALLERY_ITEMS[cardIndex] || {};
                const longDescription = galleryItem.longDescription || '';
                const details = galleryItem.details || '';
                if (imgSrc) {
                    showDescriptionModal(imgSrc, title, longDescription, details);
                }
                return;
            }

            if (button.dataset.action === 'share') {
                handleShare(button);
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
        const shareModal = document.querySelector('.share-modal');
        if (shareModal && e.key === 'Escape') {
            shareModal.remove();
            document.body.style.overflow = '';
            return;
        }

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

    // Проверяем, является ли src внешним URL
    const isExternalUrl = src.startsWith('http://') || src.startsWith('https://');

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
        if (video) video.pause();
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

    // Преобразуем \n в <br> для корректного отображения переносов строк
    const formatNewLines = (text) => text.replace(/\n/g, '<br>');

    // Верхний блок - название и художественное описание
    textContent += `<div class="description-section">`;
    textContent += `<h3>${title}</h3>`;
    if (longDescription) {
        textContent += `<p class="description-paragraph">${formatNewLines(longDescription)}</p>`;
    }
    textContent += `</div>`;

    // Разделитель + материалы, техника и размеры
    if (details) {
        textContent += `<hr class="description-divider">`;
        textContent += `<div class="description-section">`;
        textContent += `<p class="description-paragraph description-meta">${formatNewLines(details)}</p>`;
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

function handleShare(button) {
    const title = button.dataset.title;
    const pageUrl = button.dataset.url;
    const imageUrl = button.dataset.imageUrl;
    const description = button.dataset.description;
    const shareText = `${title}\n${description}\n${imageUrl}`;

    // Try native Web Share API first (mobile devices)
    if (navigator.share) {
        navigator.share({
            title: title,
            text: shareText,
            url: pageUrl
        }).catch(() => {
            showShareModal(title, shareText, pageUrl, imageUrl);
        });
    } else {
        showShareModal(title, shareText, pageUrl, imageUrl);
    }
}

function showShareModal(title, shareText, pageUrl, imageUrl) {

    // Share services with their URLs
    const services = [
        {
            name: 'ВКонтакте',
            icon: 'VK',
            url: `https://vk.com/share.php?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(title)}&comment=${encodeURIComponent(title + '\n' + shareText)}`
        },
        {
            name: 'Telegram',
            icon: 'TG',
            url: `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`
        },
        {
            name: 'WhatsApp',
            icon: 'WA',
            url: `https://wa.me/?text=${encodeURIComponent(shareText)}`
        },
        {
            name: 'Twitter (X)',
            icon: 'X',
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`
        },
        {
            name: 'Скопировать ссылку',
            icon: '📋',
            action: 'copy'
        }
    ];

    const modal = document.createElement('div');
    modal.className = 'share-modal';
    modal.innerHTML = `
        <div class="share-modal-content">
            <button class="share-modal-close">&times;</button>
            <h3>Поделиться</h3>
            <div class="share-services">
                ${services.map(service => `
                    <button class="share-service-btn" data-url="${service.url}" data-action="${service.action || 'open'}">
                        <span class="share-service-icon">${service.icon}</span>
                        <span class="share-service-name">${service.name}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Close modal
    const closeBtn = modal.querySelector('.share-modal-close');
    function closeModal() {
        modal.remove();
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Handle service buttons
    modal.querySelectorAll('.share-service-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = btn.dataset.action;

            if (action === 'copy') {
                navigator.clipboard.writeText(shareText).then(() => {
                    btn.classList.add('copied');
                    btn.querySelector('.share-service-name').textContent = 'Скопировано!';
                    setTimeout(() => {
                        closeModal();
                    }, 800);
                }).catch(() => {
                    showToast('Не удалось скопировать');
                });
            } else {
                window.open(btn.dataset.url, '_blank', 'noopener,noreferrer');
                closeModal();
            }
        });
    });
}

function showToast(message) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function initGalleryProtection() {
    document.querySelectorAll('.card img').forEach((img) => {
        img.addEventListener('contextmenu', (e) => e.preventDefault());
    });
}

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

// Инициализация
loadGalleryData().then(() => {
    renderGallery();
    initGalleryActions();
    initGalleryProtection();
    initContactForm();
});
