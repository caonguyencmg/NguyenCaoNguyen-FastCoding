const links = document.querySelectorAll("[data-page]");

links.forEach((link) => {
  link.addEventListener("click", () => {
    const page = link.dataset.page;

    // Xóa active toàn bộ menu
    document.querySelectorAll("[data-page]").forEach((item) => {
      item.classList.remove("active");
    });

    // Active tất cả item cùng page
    document.querySelectorAll(`[data-page="${page}"]`).forEach((item) => {
      item.classList.add("active");
    });

    // Đóng menu mobile nếu đang mở
    if (typeof hideMenu === "function") {
      hideMenu();
    }
  });
});

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  mobileOverlay.classList.add("active");
});

function hideMenu() {
  mobileMenu.classList.remove("active");
  mobileOverlay.classList.remove("active");
}

closeMenu.addEventListener("click", hideMenu);
mobileOverlay.addEventListener("click", hideMenu);

document.querySelectorAll(".mobile-menu a").forEach((item) => {
  item.addEventListener("click", hideMenu);
});
