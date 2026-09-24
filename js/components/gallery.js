/**
 * Определение эффекта AOS в зависимости от ширины экрана
 */
function getAosEffect() {
    return window.innerWidth <= 768 ? 'fade' : 'fade-up';
}

/**
 * Рендеринг карточки элемента галереи с кнопками действий
 */
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

    // Кнопка «Этапы создания» — появляется если есть stages
    const beforeAfterButton = (Array.isArray(item.stages) && item.stages.length >= 2)
        ? `<button type="button" class="img-action-btn img-action-btn--before-after" data-action="before-after" data-stages='${JSON.stringify(item.stages)}' aria-label="Этапы создания">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="12" y1="3" x2="12" y2="21"/>
                    <polyline points="8 8 6 12 8 16"/>
                    <polyline points="16 8 18 12 16 16"/>
                </svg>
            </button>`
        : '';

    const siteUrl = getBaseUrl();
    const fullImageUrl = siteUrl + item.image;
    const pageUrl = `${siteUrl}pages/${item.slug}/`;
    const shareButton = `<button type="button" class="img-action-btn img-action-btn--share" data-action="share" data-title="${item.title}" data-url="${pageUrl}" data-image-url="${fullImageUrl}" data-description="${item.description.replace(/\n/g, ' ').substring(0, 200)}" aria-label="Поделиться картиной">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="18" cy="5" r="3"/>
                <circle cx="6" cy="12" r="3"/>
                <circle cx="18" cy="19" r="3"/>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
        </button>`;

    const aosEffect = getAosEffect();
    return `
        <div class="card" data-aos="${aosEffect}" data-aos-duration="900" data-aos-delay="${index * 100}" style="animation-delay: ${index * 100}ms;">
            <div class="img-container img-container--actions">
                ${photoCount}
                <img src="${item.image}" alt="${item.alt}" loading="lazy">
                <div class="img-actions">
                    ${descriptionButton}
                    ${videoButton}
                    ${beforeAfterButton}
                </div>
            </div>
            <div class="card-info">
                <a href="${pageUrl}" class="card-title-link"><h3>${item.title}</h3></a>
                <p class="card-description">${item.description.replace(/\n/g, '<br>')}</p>
                <div class="card-actions">
                    ${shareButton}
                    <button class="btn" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'});">Узнать цену</button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Рендеринг всей галереи на основе загруженных данных
 */
function renderGallery() {
    const container = document.getElementById('gallery');
    if (!container) return;

    container.innerHTML = GALLERY_ITEMS.map((item, index) => renderActionCard(item, index)).join('');
}

/**
 * Инициализация обработчиков событий для кнопок действий
 */
function initGalleryActions() {
    document.querySelectorAll('.img-action-btn').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();

            // Видео — открываем ссылку или модальное окно
            if (button.dataset.action === 'video') {
                if (button.dataset.video.startsWith('http://') || button.dataset.video.startsWith('https://')) {
                    window.open(button.dataset.video, '_blank');
                    return;
                }
                showVideoModal(button.dataset.video);
                return;
            }

            // Описание картины — модальное окно с текстом
            if (button.dataset.action === 'description') {
                const card = button.closest('.card');
                const cardIndex = Array.from(document.querySelectorAll('.card')).indexOf(card);
                const galleryItem = GALLERY_ITEMS[cardIndex] || {};
                const longDescription = galleryItem.longDescription || '';
                const details = galleryItem.details || '';
                const imgSrc = card?.querySelector('img')?.src;
                const title = card?.querySelector('h3')?.textContent;
                if (imgSrc) {
                    showDescriptionModal(imgSrc, title, longDescription, details);
                }
                return;
            }

            // Поделиться — Web Share API или модалка с сервисами
            if (button.dataset.action === 'share') {
                handleShare(button);
                return;
            }

            // Этапы создания — модальное окно слайдера
            if (button.dataset.action === 'before-after') {
                const card = button.closest('.card');
                const cardIndex = Array.from(document.querySelectorAll('.card')).indexOf(card);
                const galleryItem = GALLERY_ITEMS[cardIndex] || {};
                const stages = galleryItem.stages || [];
                showBeforeAfterSliderModal(button.closest('.card')?.querySelector('h3')?.textContent, stages);
            }
        });
    });

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

/**
 * Инициализация защиты галереи — блокировка контекстного меню на изображениях
 */
function initGalleryProtection() {
    document.addEventListener('contextmenu', (e) => {
        const img = e.target.closest('.card img');
        if (img) e.preventDefault();
    });
}
/**
 * Инициализация страницы отдельной картины — увеличение изображения по клику
 */
function initPaintingPage() {
    const overlay = document.createElement('div');
    overlay.className = 'painting-img-overlay';
    document.body.appendChild(overlay);

    const mainImg = document.querySelector('.painting-main-img');
    if (!mainImg) return;

    const fullImg = mainImg.cloneNode();
    fullImg.id = 'painting-full-img';
    overlay.appendChild(fullImg);

    mainImg.addEventListener('click', () => {
        fullImg.src = mainImg.dataset.original || mainImg.src;
        overlay.classList.add('active');
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlay.classList.remove('active');
        }
    });
}
