(() => {
  // === For Header animation start ===
  const headerSection = document.querySelector('.header');
  const heroSection = document.querySelector('.hero');

  let previousPosition = 0;

  const mediaDesktop = window.matchMedia('(min-width: 1200px)');
  mediaDesktop.addEventListener('change', setMenuBehaviour);

  if (window.screen.width >= 1200) {
    window.addEventListener('scroll', scrollHandlerDesktop);
  } else {
    window.addEventListener('scroll', scrollHandlerMobile);
  }

  function setMenuBehaviour(event) {
    if (event.matches === true) {
      window.removeEventListener('scroll', scrollHandlerMobile);
      window.addEventListener('scroll', scrollHandlerDesktop);
    } else {
      window.removeEventListener('scroll', scrollHandlerDesktop);
      window.addEventListener('scroll', scrollHandlerMobile);
    }
  }

  // === Mobile ===
  function scrollHandlerMobile() {
    const heroHeight = heroSection.offsetHeight;
    const headerHeight = headerSection.offsetHeight;
    const scrollPosition = window.scrollY;
    const scrollOffset = scrollPosition - previousPosition;
    let headerOffset = headerSection.offsetTop - scrollOffset;

    if (scrollPosition > headerHeight && scrollPosition <= heroHeight) {
      headerSection.classList.add('header--hidden');
    } else {
      headerSection.classList.remove('header--hidden');
    }

    if (scrollPosition > heroHeight) {
      headerSection.classList.add('header--background');
    } else {
      headerSection.classList.remove('header--background');
    }

    if (scrollPosition > previousPosition) {
      if (headerOffset < -headerHeight) {
        headerOffset = -headerHeight;
      }
    } else {
      if (headerOffset > 0) {
        headerOffset = 0;
      }
    }
    if (scrollPosition <= 0) {
      headerOffset = 0;
    }
    headerSection.style.top = headerOffset + 'px';

    previousPosition = scrollPosition;
  }

  // === Desktop ===
  function scrollHandlerDesktop() {
    const scrollPosition = scrollY;
    const headerHeight = headerSection.offsetHeight;
    const heroHeight = heroSection.offsetHeight;

    if (scrollPosition <= heroHeight && scrollPosition > headerHeight) {
      headerSection.classList.add('header--hidden');
      headerSection.style.top = 0;
    } else {
      headerSection.classList.remove('header--hidden');
    }

    if (scrollPosition > heroHeight) {
      headerSection.classList.add('header--background');
    } else {
      headerSection.classList.remove('header--background');
    }
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

  // === Modal window Start ===
  const buyBtns = document.querySelectorAll('[data-buy-now]');
  const modalWindow = document.querySelector('[data-franchise]');

  for (const element of buyBtns) {
    element.addEventListener('click', closeMenu);
    element.addEventListener('click', toggleFranchise);
  }

  function toggleFranchise() {
    modalWindow.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
  // --- Modal window End ---
})();
