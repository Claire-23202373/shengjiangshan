// ============================================
// 漢堡選單開合功能（手機版導覽列）
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mainNav = document.getElementById("mainNav");

  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener("click", function () {
      mainNav.classList.toggle("open");
    });

    // 點擊選單裡的任一連結後，自動關閉選單
    const navLinks = mainNav.querySelectorAll("a");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
      });
    });
  }
});
