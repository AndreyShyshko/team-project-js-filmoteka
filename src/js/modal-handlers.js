const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

export function createLocalstorageList(type) {
  try {
    if (window.localStorage.getItem(type)) {
      return;
    }
    window.localStorage.setItem(type, JSON.stringify([]));
    return window.localStorage.getItem(type);
  } catch (e) {
    console.error(e);
  }
}

export function addToWatched(e) {
  try {
    const filmId = e.currentTarget.getAttribute('data-idFilm');
    const watchedList = JSON.parse(window.localStorage.getItem('watched'));
    // const filmAlreadyInList = watchedList.includes(filmId);
    const filmAlreadyInList = watchedList.some(film => film.id === +filmId);

    if (!filmAlreadyInList) {
      const fetchList = JSON.parse(window.localStorage.getItem('fetched-movies-array'));
      const onModalFilm = fetchList.find(film => film.id === +filmId);
      watchedList.push(onModalFilm);
      e.currentTarget.innerHTML = 'Remove from watched';
    } else {
      const index = watchedList.findIndex(film => film.id === +filmId);
      watchedList.splice(index, 1);
      e.currentTarget.innerHTML = 'Add to watched';
    }
    localStorage.setItem('watched', JSON.stringify(watchedList));
  } catch (e) {
    console.error(e);
  }
}

export function addToQueue(e) {
  try {
    const filmId = e.currentTarget.getAttribute('data-idFilm');
    const queueList = JSON.parse(window.localStorage.getItem('queue'));
    // const filmAlreadyInList = queueList.includes(filmId);
    const filmAlreadyInList = queueList.some(film => film.id === +filmId);

    if (!filmAlreadyInList) {
      const fetchList = JSON.parse(window.localStorage.getItem('fetched-movies-array'));
      const onModalFilm = fetchList.find(film => film.id === +filmId);
      queueList.push(onModalFilm);
      e.currentTarget.innerHTML = 'Remove from queue';
    } else {
      const index = queueList.findIndex(film => film.id === +filmId);
      queueList.splice(index, 1);
      e.currentTarget.innerHTML = 'Add to queue';
    }
    localStorage.setItem('queue', JSON.stringify(queueList));
  } catch (e) {
    console.error(e);
  }
}

export function initModalHandlers() {
  const watchBtn = document.querySelector('.add-to-watched');
  watchBtn.addEventListener('click', addToWatched);
  const queueBtn = document.querySelector('.add-to-queue');
  queueBtn.addEventListener('click', addToQueue);
}
