import {setupModal} from '../utils/modal';

const modals = document.querySelectorAll('.modal');
const modalForm = document.querySelector('.modal--form');
const modalFormBtns = document.querySelectorAll('[data-modal="form"]');
const modalSuccess = document.querySelector('.modal--success');
const modalSuccessBtns = document.querySelectorAll('[data-modal="success"]');

// аргументы setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock)
// возможна инициализация только с первыми аргументом
const initModals = () => {
  // фикс для редких случаев, когда модалка появляется при загрузке страницы
  window.addEventListener('load', () => {
    if (modals.length) {
      modals.forEach((el) => {
        setTimeout(() => {
          el.classList.remove('modal--preload');
        }, 100);
      });
    }
  });

  if (modalForm && modalFormBtns.length) {
    setupModal(modalForm, false, modalFormBtns);
  }
  if (modalSuccess && modalSuccessBtns.length) {
    setupModal(modalSuccess, false, modalSuccessBtns);
  }
};

export {initModals};
