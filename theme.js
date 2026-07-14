(function () {
  var stored = localStorage.getItem('theme');
  var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;

    function sync() {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      btn.textContent = isDark ? '☀️' : '🌙';
    }

    sync();

    btn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      sync();
    });
  });
})();
