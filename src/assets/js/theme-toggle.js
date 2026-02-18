/**
 * Theme Toggle
 * Persists preference to localStorage.
 * Default: light mode.
 */

(function () {
  const STORAGE_KEY = "theme";
  const btn = document.getElementById("themeBtn");

  // Load saved preference or default to light
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    document.documentElement.dataset.theme = saved;
  }
  updateIcon();

  btn.addEventListener("click", function () {
    const current = document.documentElement.dataset.theme;
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem(STORAGE_KEY, next);
    updateIcon();
  });

  function updateIcon() {
    const theme = document.documentElement.dataset.theme;
    btn.textContent = theme === "dark" ? "☀" : "☾";
  }
})();
