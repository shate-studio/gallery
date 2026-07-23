// Запуск анимаций AOS при загрузке страницы
AOS.init({ once: true });

// Защита от копирования картинок (блокировка правого клика)
document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('contextmenu', e => e.preventDefault());
});

// Работа индикатора скролла страницы
window.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;

    // Проверяем, существует ли индикатор на странице, чтобы не вызвать ошибку
    const progressBar = document.getElementById("myBar");
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
}
