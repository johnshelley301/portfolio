(function () {
  var STORAGE_KEY = "theme";
  var DARK_CLASS = "dark-vertion";
  var LIGHT_CLASS = "white-vertion";
  var BASE_CLASS = "black-bg";

  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
  }

  function applyTheme(theme) {
    var body = document.body;
    body.classList.remove(DARK_CLASS, LIGHT_CLASS);
    body.classList.add(theme === "dark" ? DARK_CLASS : LIGHT_CLASS, BASE_CLASS);
    document.documentElement.setAttribute("data-theme", theme);

    var toggle = document.getElementById("theme-toggle");
    if (!toggle) {
      return;
    }

    var isDark = theme === "dark";
    toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    toggle.setAttribute("title", isDark ? "Light mode" : "Dark mode");

    var sun = toggle.querySelector(".fa-sun");
    var moon = toggle.querySelector(".fa-moon");
    if (sun) {
      sun.style.display = isDark ? "inline-block" : "none";
    }
    if (moon) {
      moon.style.display = isDark ? "none" : "inline-block";
    }
  }

  function initThemeToggle() {
    applyTheme(getStoredTheme());

    var toggle = document.getElementById("theme-toggle");
    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", function () {
      var nextTheme = getStoredTheme() === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, nextTheme);
      applyTheme(nextTheme);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
