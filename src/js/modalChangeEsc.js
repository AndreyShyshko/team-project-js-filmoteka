const modalWindow = document.querySelector('.modal-one-film');
const contentModal = document.querySelector('.content-modal');
const body = document.querySelector('body');
const btn = document.querySelector('[data-modal-close]');
console.log(btn) ;
const wrapper = document.querySelector('.div-wrapper');
console.log(wrapper);
function closeModal() {
  modalWindow.classList.remove('open');
  wrapper.innerHTML = '';
  body.classList.remove('content-hidden');
}

const onKeyPress = event => {
  if (event.code === 'Escape') closeModal();
};

document.addEventListener('keydown', onKeyPress);

const onCloseOnBtn = () => {
   closeModal();
   console.log("tut vse norm")
};

btn.addEventListener('click', onCloseOnBtn);
