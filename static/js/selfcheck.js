// Self-check widget: counts checked boxes and shows a general,
// non-diagnostic message. This never replaces a professional assessment.
document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("selfCheckBtn");
  var result = document.getElementById("selfCheckResult");
  var form = document.getElementById("selfCheckForm");
  if (!btn || !result || !form) return;

  btn.addEventListener("click", function () {
    var checked = form.querySelectorAll("input[type=checkbox]:checked").length;

    var level, message;
    if (checked <= 2) {
      level = "level-ok";
      message = "Танд одоогоор цөөн шинж илэрч байна. Гэсэн хэдий ч өөрчлөлтөө анзаарсаар байвал энэ хуудасны бусад хэсгийг үзэж, шаардлагатай бол мэргэжлийн зөвлөгөө аваарай.";
    } else if (checked <= 5) {
      level = "level-warn";
      message = "Танд хэд хэдэн шинж тэмдэг илэрч байна. Эдгээрийг цаг алдалгүй анзаарч, сэтгэл зүйч эсвэл эмчид хандахыг зөвлөж байна.";
    } else {
      level = "level-alert";
      message = "Танд олон шинж тэмдэг зэрэг илэрч байна. Эрт үед нь мэргэжлийн тусламж авах нь эдгэрэлтийг мэдэгдэхүйц хөнгөвчилдөг тул доорх дугаараар холбогдохыг зөвлөж байна.";
    }

    result.className = "selfcheck-result " + level;
    result.innerHTML =
      "<strong>Сонгосон шинж тэмдэг: " + checked + " / 9</strong><br>" + message;
    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
