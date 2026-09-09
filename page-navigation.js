/**
 * Устанавливает базовый URL для ссылки «На главную» на страницах отдельных картин.
 * Находит ссылку с id="page-base" и устанавливает href на корень сайта.
 *
 * Пример: /gallery/pages/lesnoy-khranitel/ → href="/gallery/"
 */
function GenBaseUrl() {
    var baseLink = document.getElementById('page-base');
    if (!baseLink) return;

    var path = window.location.pathname;
    var slashIdx = path.indexOf('/pages/');
    if (slashIdx === -1) return;

    var dir = path.substring(0, slashIdx);
    baseLink.href = window.location.origin + (dir || '/') + '/';
}
