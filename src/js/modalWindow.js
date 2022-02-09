import markupContentModal from '../templates/modalWindow.hbs';
const gallery = document.querySelector('#movies-gallery-container');
const body = document.querySelector('body');
const contentModal = document.querySelector('.content-modal');
const modalWindow = document.querySelector('.modal-one-film');
const oneFilmOwerlay = document.querySelector('.modal-one-film__overlay');
import { initModalHandlers } from './modal-handlers';

const wrapper = document.querySelector('.div-wrapper');
// console.log(wrapper)

gallery.addEventListener('click', openModalWindow);
oneFilmOwerlay.addEventListener('click', closeFilmModal);

function openModalWindow(evt) {
  const moviesArr = JSON.parse(localStorage.getItem('fetched-movies-array'));
  const watchedMoviesList = JSON.parse(localStorage.getItem('watched'));
  const queueMoviesList = JSON.parse(localStorage.getItem('queue'));
  const movie_id = evt.target.attributes['data-action'].nodeValue;
  const movieInfo = moviesArr.find(movie => movie.id === +movie_id);
  const movieExistsInWatched = watchedMoviesList.find(movie => movie.id === +movie_id);
  const movieExistsInQueue = queueMoviesList.find(movie => movie.id === +movie_id);

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  contentHidden();

  const markup = markupContentModal(movieInfo);
  contentModal.insertAdjacentHTML('afterbegin', markup);
  initModalHandlers();

  const addToWatchedBtn = document.querySelector('.add-to-watched');
  const addToQueueBtn = document.querySelector('.add-to-queue');

  if (movieExistsInWatched) {
    addToWatchedBtn.innerHTML = 'Remove from watched';
  }

  if (movieExistsInQueue) {
    addToQueueBtn.innerHTML = 'Remove from queue';
  }

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
