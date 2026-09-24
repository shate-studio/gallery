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

// ===== Инициализация AOS с адаптивными эффектами =====

function initAOS() {
    const isMobile = window.innerWidth <= 768;
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.setAttribute('data-aos', isMobile ? 'fade' : 'fade-up');
    });
    
    AOS.init({ once: false });
    
    // Обновляем AOS после динамического добавления карточек
    AOS.refresh();
}

// ===== Инициализация =====

applyTheme();

loadGalleryData().then(() => {
    renderGallery();
    initAOS();
    initGalleryActions();
    initGalleryProtection();
    initContactForm();
    initPaintingPage();
});

// Перезапуск AOS при ресайзе с debounce
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        AOS.refresh();
    }, 250);
});

// ===== Scroll progress bar =====

window.onscroll = function () {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    const progressBar = document.getElementById('myBar');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
};
