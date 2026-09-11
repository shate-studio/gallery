/**
 * Переключение темы (светлая/темная) с сохранением в localStorage
 */
function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = isDark ? 'Светлая' : 'Темная';
}

/**
 * Применение сохраненной темы при загрузке страницы
 */
function applyTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.body.classList.add('dark');
        const btn = document.querySelector('.theme-toggle');
        if (btn) btn.textContent = 'Светлая';
    }
}
