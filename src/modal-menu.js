(() => {
  // === For Menu start ===
  const menuBtn = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-menu]');
  const menuLinks = document.querySelectorAll('.menu__link');
  const body = document.querySelector('body');

  for (const element of menuLinks) {
    element.addEventListener('click', toggleMenu);
  }
  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    mobileMenu.classList.toggle('is-open');
    menuBtn.classList.toggle('is-open');
    body.classList.toggle('scroll-off');
  }
  // --- For Menu end ---
})();
