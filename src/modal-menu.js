(() => {
  // === For Header animation start ===
  const headerSection = document.querySelector('.header');
  const heroSection = document.querySelector('.hero');
  let previousPosition = 0;

  window.addEventListener('scroll', scrollHandlerMobile);

  function scrollHandler() {
    const currentPosition = scrollY;
    const headerSectionHeight = headerSection.offsetHeight;
    const heroSectionHeight = heroSection.offsetHeight;

    if (currentPosition < headerSectionHeight) {
      headerSection.classList.remove('is-fixed');
      headerSection.classList.remove('show');
      headerSection.classList.remove('hide');
    } else if (
      currentPosition >= headerSectionHeight &&
      currentPosition < heroSectionHeight - headerSectionHeight
    ) {
      headerSection.classList.add('is-fixed');
      headerSection.classList.remove('show');
      headerSection.classList.remove('hide');
    } else if (
      currentPosition >= heroSectionHeight - headerSectionHeight &&
      currentPosition < heroSectionHeight
    ) {
      headerSection.classList.add('is-fixed');
      headerSection.classList.remove('show');
      headerSection.classList.add('hide');
    } else if (currentPosition >= heroSectionHeight) {
      headerSection.classList.add('is-fixed');
      headerSection.classList.add('show');
      headerSection.classList.remove('hide');
    }
  }

  function scrollHandlerMobile() {
    const currentPosition = scrollY;
    const headerSectionHeight = headerSection.offsetHeight;
    const heroSectionHeight = heroSection.offsetHeight;

    if (currentPosition < headerSectionHeight) {
      headerSection.classList.remove('is-fixed');
      headerSection.classList.remove('show');
      headerSection.classList.remove('hide');
    } else if (
      currentPosition >= headerSectionHeight &&
      currentPosition < heroSectionHeight - headerSectionHeight
    ) {
      headerSection.classList.add('is-fixed');
      headerSection.classList.remove('show');
      headerSection.classList.remove('hide');
    } else if (
      currentPosition >= heroSectionHeight - headerSectionHeight &&
      currentPosition < heroSectionHeight
    ) {
      headerSection.classList.add('is-fixed');
      headerSection.classList.remove('show');
      headerSection.classList.add('hide');
    } else if (currentPosition >= heroSectionHeight) {
      if (currentPosition < previousPosition) {
        headerSection.classList.add('is-fixed');
        headerSection.classList.add('show');
        headerSection.classList.remove('hide');
      } else {
        headerSection.classList.add('is-fixed');
        headerSection.classList.remove('show');
        headerSection.classList.add('hide');
      }
    }
    previousPosition = currentPosition;
  }
  // --- For Header animation end ---

  // === For Menu start ===
  const menuBtnBurger = document.querySelector('[data-burger-button]');
  const menuBtnClose = document.querySelector('[data-close-button]');

  const mobileMenu = document.querySelector('[data-menu]');
  const menuLinks = document.querySelectorAll('.menu__link');
  const body = document.querySelector('body');

  for (const element of menuLinks) {
    element.addEventListener('click', closeMenu);
  }
  menuBtnBurger.addEventListener('click', openMenu);
  menuBtnClose.addEventListener('click', closeMenu);

  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    body.classList.remove('scroll-off');
  }

  function openMenu() {
    mobileMenu.classList.add('is-open');
    body.classList.add('scroll-off');
  }

  // --- For Menu end ---
})();
