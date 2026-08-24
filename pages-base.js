(function() {
    var base = document.getElementById('page-base');
    if (!base) return;
    var path = window.location.pathname;
    if (path.includes('/pages/')) {
        var slashIdx = path.indexOf('/pages/');
        var dir = path.substring(0, slashIdx);
        base.href = window.location.origin + (dir || '/') + '/';
    }
})();
