// Services tabs: click a tab button to show its matching panel.
document.addEventListener("DOMContentLoaded", function () {
  var wrap = document.getElementById("serviceTabs");
  if (!wrap) return;

  var buttons = wrap.querySelectorAll(".tab-btn");
  var panels = wrap.querySelectorAll(".tab-panel");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = btn.getAttribute("data-tab");

      buttons.forEach(function (b) { b.classList.remove("is-active"); });
      panels.forEach(function (p) { p.classList.remove("is-active"); });

      btn.classList.add("is-active");
      var panel = document.getElementById(target);
      if (panel) panel.classList.add("is-active");
    });
  });
});
