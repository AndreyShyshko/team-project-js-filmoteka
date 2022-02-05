import markupContentModal from '../templates/modalWindow.hbs';

const gallery = document.querySelector('#movies-gallery-container');
const body = document.querySelector('body');
const contentModal = document.querySelector('.content-modal');
const modalWindow = document.querySelector('.modal-one-film');
const oneFilmOwerlay = document.querySelector('.modal-one-film__overlay');

gallery.addEventListener('click', openModalWindow);
oneFilmOwerlay.addEventListener('click', closeFilmModal);

function openModalWindow(evt) {
  if (evt.target.nodeName !== 'IMG') {
    // проверяет клик по картинке
    return;
  }

  contentHidden();

  const idFilmFromDataAction = evt.target.attributes[3].nodeValue; // ID фильма по клику на плитку фильма

  fetchMoviesForIdByModal(idFilmFromDataAction); // делает запрос на сервер и добавляет розметку в модалку одного фильма

  modalWindow.classList.add('open'); // по добавлению класса открывается модалка
}

function fetchMoviesForIdByModal(movieId) {
  // ищет фильмы по ID и добавляет розметку в gallery
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=219747bddc830c6768a55001e81d80ed`;

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(results => {
      console.log(results);
      const markup = markupContentModal(results);
      contentModal.insertAdjacentHTML('afterbegin', markup);
    });
}

function closeFilmModal() {
  modalWindow.classList.remove('open');
  contentModal.innerHTML = '';
  body.classList.remove('content-hidden');
}

function contentHidden() {
  // запрещает пролистывать контент за модалкой
  body.classList.add('content-hidden');
}
