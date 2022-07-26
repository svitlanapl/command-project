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
    let headerPosition = headerSection.offsetTop;

    if (scrollPosition > previousPosition) {
      if (headerSection.classList.contains('header--fixed')) {
        headerSection.classList.remove('header--fixed');
        headerSection.style.top = scrollPosition + 'px';
      }
      if (scrollPosition > headerSection.offsetTop + headerHeight) {
        headerSection.style.top = scrollPosition - headerHeight + 'px';
      }
    } else {
      console.log('back');
      if (scrollPosition <= headerPosition) {
        headerSection.classList.add('header--fixed');
        headerSection.style.top = 0;
      }
    }
    previousPosition = scrollPosition;

    if (scrollPosition <= heroHeight && scrollPosition > headerHeight) {
      headerSection.classList.add('header--hidden');
    } else {
      headerSection.classList.remove('header--hidden');
    }

    if (scrollPosition > heroHeight) {
      headerSection.classList.add('header--background');
    } else {
      headerSection.classList.remove('header--background');
    }
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

  // === Mobile ===
  function scrollHandlerMobileAlt() {
    const currentPosition = scrollY;
    const headerSectionHeight = headerSection.offsetHeight;
    const heroSectionHeight = heroSection.offsetHeight;

    if (currentPosition < headerSectionHeight) {
      makeAbsoluteHeader();
    } else if (
      currentPosition >= headerSectionHeight &&
      currentPosition < heroSectionHeight - headerSectionHeight
    ) {
      fixHeader();
    } else if (
      currentPosition >= heroSectionHeight - headerSectionHeight &&
      currentPosition < heroSectionHeight
    ) {
      hideHeader();
    } else if (currentPosition >= heroSectionHeight) {
      if (currentPosition < previousPosition) {
        showHeader();
      } else {
        hideHeader();
      }
    }
    previousPosition = currentPosition;
  }

  function makeAbsoluteHeader() {
    headerSection.classList.remove('is-fixed');
    headerSection.classList.remove('show');
    headerSection.classList.remove('hide');
  }

  function fixHeader() {
    headerSection.classList.add('is-fixed');
    headerSection.classList.remove('show');
    headerSection.classList.remove('hide');
  }

  function hideHeader() {
    headerSection.classList.remove('show');
    headerSection.classList.add('hide');
  }

  function showHeader() {
    headerSection.classList.add('show');
    headerSection.classList.remove('hide');
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
