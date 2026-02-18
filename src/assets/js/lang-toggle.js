/**
 * Language Toggle
 * Navigates between /en/, /fr/, /de/ locale paths.
 * Detects the current locale from the URL and builds equivalent paths.
 */

(function () {
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var target = this.getAttribute("href");
      if (target) {
        window.location.href = target;
      }
    });
  });
})();
