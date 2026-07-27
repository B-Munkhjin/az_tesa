// Symptom accordion: click a header to expand/collapse its list.
// Multiple items may stay open at once.
document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll("#symptomAccordion .acc-item");

  items.forEach(function (item) {
    var head = item.querySelector(".acc-head");
    if (!head) return;

    head.addEventListener("click", function () {
      item.classList.toggle("is-open");
    });
  });
});
