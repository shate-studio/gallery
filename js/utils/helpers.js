/**
 * Получение базового URL текущей страницы
 */
function getBaseUrl() {
    var url = new URL(window.location.href);
    var dir = url.pathname.replace(/\/[^/]*$/, '').replace(/\/$/, '/') || '/';
    return url.origin + dir + '/';
}
