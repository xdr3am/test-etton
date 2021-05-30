const initMenu = () => {
  const openMenu = document.querySelector('.header__burger');
  const mainNav = document.querySelector('.main-nav');
  const closeMenu = mainNav.querySelector('.main-nav__btn-close');
  const KeyCode = {
    ESC: 27
  };

  openMenu.addEventListener('click', function () {
    mainNav.classList.add('main-nav--show');
  });

  closeMenu.addEventListener('click', function () {
    if (mainNav.classList.contains('main-nav--show')) {
      mainNav.classList.remove('main-nav--show');
    }
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === KeyCode.ESC) {
      evt.preventDefault();
      if (mainNav.classList.contains('main-nav--show')) {
        mainNav.classList.remove('main-nav--show');
      }
    }
  });
};

export { initMenu };
