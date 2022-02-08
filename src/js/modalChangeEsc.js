const modalWindow = document.querySelector('.modal-one-film');
const contentModal = document.querySelector('.content-modal');
const body = document.querySelector('body');
const btn = document.querySelector('[data-modal-close]');

function closeModal() {
  modalWindow.classList.remove('open');
  contentModal.innerHTML = '';
  body.classList.remove('content-hidden');
}

const onKeyPress = event => {
  if (event.code === 'Escape') closeModal();
};

document.addEventListener('keyup', onKeyPress);

const onCloseOnBtn = () => {
  if (modalWindow.classList.contains('open')) closeModal();
};

// modalWindow.addEventListener('click', closeModal);
