(() => {
  // === For Header animation ===
  const headerSection = document.querySelector('.header');
  let currentPosition;

  window.addEventListener('scroll', function () {
    currentPosition = scrollY;
    console.log(currentPosition);
    if (currentPosition < 100) {
      headerSection.classList.remove('is-fixed');
      headerSection.classList.remove('show');
      headerSection.classList.remove('hide');
    } else if (currentPosition >= 100 && currentPosition < 300) {
      headerSection.classList.add('is-fixed');
      headerSection.classList.remove('show');
      headerSection.classList.remove('hide');
    } else if (currentPosition >= 300 && currentPosition < 500) {
      headerSection.classList.add('is-fixed');
      headerSection.classList.remove('show');
      headerSection.classList.add('hide');
    } else if (currentPosition >= 500) {
      headerSection.classList.add('is-fixed');
      headerSection.classList.add('show');
      headerSection.classList.remove('hide');
    }
  });

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
