/**
 * Загрузка данных галереи из JSON
 */
let GALLERY_ITEMS = [];

/**
 * Асинхронная загрузка данных галереи из файла gallery.json
 */
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

/**
 * Инициализация формы обратной связи с отправкой через EmailJS
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    if (typeof emailjs === 'undefined') {
        console.warn('EmailJS не загружен — форма не будет работать');
        return;
    }

    try {
        emailjs.init("N_2FXreDvZ4FXaUKL");
    } catch {
        console.error('Ошибка инициализации EmailJS');
        return;
    }

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

// ===== Инициализация страницы отдельной картины (увеличение по клику) =====

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

// ===== Инициализация анимации при скролле =====

function initScrollAnimation() {
    const cards = document.querySelectorAll('.card');
    const sections = document.querySelectorAll('.about-section, .contact-section');
    const allElements = [...cards, ...sections];
    
    // CSS анимация через IntersectionObserver (работает везде)
    cards.forEach(card => card.classList.add('scroll-animate'));
    sections.forEach(section => section.classList.add('scroll-animate-up'));
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    allElements.forEach(el => observer.observe(el));
}

// ===== Инициализация =====

applyTheme();

loadGalleryData().then(() => {
    renderGallery();
    initScrollAnimation();
    initGalleryActions();
    initGalleryProtection();
    initContactForm();
    initPaintingPage();
});

// ===== Scroll progress bar =====

function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const progressBar = document.getElementById('myBar');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
