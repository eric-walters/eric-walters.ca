(function () {
  var btn = document.getElementById('menuBtn');
  var menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    menu.classList.toggle('active');
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menu.classList.remove('active');
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') menu.classList.remove('active');
  });
})();
