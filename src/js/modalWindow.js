import markupContentModal from '../templates/modalWindow.hbs';

const gallery = document.querySelector('#movies-gallery-container');
const body = document.querySelector('body');
const contentModal = document.querySelector('.content-modal');
const modalWindow = document.querySelector('.modal-one-film');
const oneFilmOwerlay = document.querySelector('.modal-one-film__overlay');

gallery.addEventListener('click', openModalWindow);
oneFilmOwerlay.addEventListener('click', closeFilmModal);

function openModalWindow(evt) {
  const moviesArr = JSON.parse(localStorage.getItem('fetched-movies-array'));
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  contentHidden();

  const movie_id = evt.target.attributes['data-action'].nodeValue;
  const movieInfo = moviesArr.find(movie => movie.id === +movie_id);

  const markup = markupContentModal(movieInfo);
  contentModal.insertAdjacentHTML('afterbegin', markup);

  modalWindow.classList.add('open');
}

function closeFilmModal() {
  modalWindow.classList.remove('open');
  contentModal.innerHTML = '';
  body.classList.remove('content-hidden');
}

// запрещает пролистывать контент за модалкой
function contentHidden() {
  body.classList.add('content-hidden');
}
