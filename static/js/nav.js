// Mobile navigation toggle and dark mode
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  var themeToggle = document.getElementById("themeToggle");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  if (themeToggle) {
    var themeInput = document.getElementById("themeToggleInput");
    var storedTheme = localStorage.getItem("aztesa-theme");
    if (storedTheme === "dark") {
      document.body.classList.add("theme-dark");
    }

    var updateThemeButton = function () {
      var isDark = document.body.classList.contains("theme-dark");
      if (themeInput) {
        themeInput.checked = isDark;
      }
      themeToggle.setAttribute("aria-checked", isDark ? "true" : "false");
      themeToggle.setAttribute(
        "aria-label",
        isDark ? "Light mode" : "Dark mode",
      );
      themeToggle.title = isDark ? "Light mode" : "Dark mode";
    };

    var updateLogo = function () {
      var isDark = document.body.classList.contains("theme-dark");
      document.querySelectorAll(".brand-logo").forEach(function (logo) {
        logo.style.display = "none";
      });
      var activeLogo = isDark
        ? document.querySelector(".brand-logo--dark")
        : document.querySelector(".brand-logo--light");
      if (activeLogo) {
        activeLogo.style.display = "block";
      }
    };

    updateThemeButton();
    updateLogo();

    if (themeInput) {
      themeInput.addEventListener("change", function () {
        document.body.classList.toggle("theme-dark", themeInput.checked);
        var isDark = document.body.classList.contains("theme-dark");
        localStorage.setItem("aztesa-theme", isDark ? "dark" : "light");
        updateThemeButton();
        updateLogo();
      });
    }
  }
});
