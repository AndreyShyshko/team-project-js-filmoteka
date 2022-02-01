import markupContentModal from '../templates/modalWindow.hbs';

let arrWatchedFilms = [];
let arrQueueFilms = [];
let modalWatchedBtnRefs;
let modalQueueBtnRefs;

const gallery = document.querySelector('.home-container');
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

  window.addEventListener('keydown', closeFilmModalESC); // закрытие модалка по нажатию на ESC
}

function addClassOnBtn(id) {
  // проверяет наличие ID фильма в локал сторедж и добавляет клас активной кнопки
  const arrWatchedFilms = getArrWatchedFilms();
  const arrQueueFilms = getArrQueueFilms();

  if (arrWatchedFilms.includes(id)) {
    modalWatchedBtnRefs.classList.add('modal-active-btn');
  }

  if (arrQueueFilms.includes(id)) {
    modalQueueBtnRefs.classList.add('modal-active-btn');
  }
}

function fetchMoviesForIdByModal(movieId) {
  // ищет фильмы по ID и добавляет розметку в gallery
  const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=219747bddc830c6768a55001e81d80ed`;

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(results => {
      const markup = markupContentModal(results);
      contentModal.insertAdjacentHTML('afterbegin', markup);

      modalWatchedBtnRefs = document.querySelector('.add-to-watched');
      modalQueueBtnRefs = document.querySelector('.add-to-queue');

      addClassOnBtn(movieId);
    });
}

function closeFilmModal() {
  modalWindow.classList.remove('open');
  window.removeEventListener('keydown', closeFilmModalESC);
  contentModal.innerHTML = '';
  body.classList.remove('content-hidden');
}

function closeFilmModalESC(evt) {
  if (evt.code === 'Escape') {
    closeFilmModal();
  }
}

function contentHidden() {
  // запрещает пролистывать контент за модалкой
  body.classList.add('content-hidden');
}

function removeMovieInLocalStorage(arr, id, type) {
  const filterFromId = arr.filter(filmId => filmId !== id);
  const stringArr = JSON.stringify(filterFromId);
  localStorage.setItem(type, stringArr);
}

modalWindow.addEventListener('click', evt => {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const movieId = evt.target.attributes[2].value;

  if (evt.target.attributes[3].value === 'watched') {
    const w = getArrWatchedFilms();
    if (w.includes(movieId)) {
      removeMovieInLocalStorage(w, movieId, 'watched');
      modalWatchedBtnRefs.classList.remove('modal-active-btn');
    } else {
      saveFilmToWatched(movieId);
      addClassOnBtn(movieId);
    }
  }

  if (evt.target.attributes[3].value === 'queue') {
    const q = getArrQueueFilms();
    if (q.includes(movieId)) {
      removeMovieInLocalStorage(q, movieId, 'queue');
      modalQueueBtnRefs.classList.remove('modal-active-btn');
    } else {
      saveFilmToQueue(movieId);
      addClassOnBtn(movieId);
    }
  }
});

function getArrWatchedFilms() {
  // получает масив фильмов добавленных в "Просмотренные" из локал сторедж
  if (localStorage.getItem('watched')) {
    const arrString = localStorage.getItem('watched');
    const arrPars = JSON.parse(arrString);
    return [...arrPars];
  }
  return [];
}

function makeStringWatched(idFilm) {
  //функцыя получает значение idFilm помещает его в масив и возвращает строку для локал сторедж
  arrWatchedFilms = getArrWatchedFilms();
  arrWatchedFilms.push(idFilm);
  return JSON.stringify(arrWatchedFilms);
}

function saveFilmToWatched(id) {
  // записывает id фильма в локал сторедж "Просмотренные"
  const stringId = makeStringWatched(id);
  localStorage.setItem('watched', stringId);
  arrWatchedFilms = [];
}

// // =================== Queue films

function getArrQueueFilms() {
  // получает масив фильмов добавленных в "Добавленных в очередь" из локал сторедж
  if (localStorage.getItem('queue')) {
    const arrString = localStorage.getItem('queue');
    const arrPars = JSON.parse(arrString);
    return [...arrPars];
  }
  return [];
}

function makeStringQueue(idFilm) {
  arrQueueFilms = getArrQueueFilms(); //функцыя получает значение idFilm помещает его в масив и возвращает строку для локал сторедж
  arrQueueFilms.push(idFilm);
  return JSON.stringify(arrQueueFilms);
}

function saveFilmToQueue(id) {
  // записывает id фильма в локал сторедж "Добавленных в очеридь"
  const stringId = makeStringQueue(id);
  localStorage.setItem('queue', stringId);
  arrQueueFilms = [];
}
