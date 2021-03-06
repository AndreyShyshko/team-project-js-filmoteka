import { watchedContainerRef, renderWatchedList } from './watched';
import { queueContainerRef, renderQueueList } from './queue';

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
    const filmAlreadyInList = watchedList.some(film => film.id === +filmId);

    if (!filmAlreadyInList) {
      const fetchList = JSON.parse(window.localStorage.getItem('fetched-movies-array'));
      const onModalFilm = fetchList.find(film => film.id === +filmId);
      watchedList.push(onModalFilm);
      e.currentTarget.classList.add('modal-active-btn');
      e.currentTarget.innerHTML = 'Remove from watched';
      e.currentTarget.classList.add('isActive');
    } else {
      const index = watchedList.findIndex(film => film.id === +filmId);
      watchedList.splice(index, 1);
      e.currentTarget.classList.remove('modal-active-btn');
      e.currentTarget.innerHTML = 'Add to watched';
      e.currentTarget.classList.remove('isActive');
    }
    localStorage.setItem('watched', JSON.stringify(watchedList));

    if (!watchedContainerRef.classList.contains('isHide')) {
      renderWatchedList();
    }
  } catch (e) {
    console.error(e);
  }
}

export function addToQueue(e) {
  try {
    const filmId = e.currentTarget.getAttribute('data-idFilm');
    const queueList = JSON.parse(window.localStorage.getItem('queue'));
    const filmAlreadyInList = queueList.some(film => film.id === +filmId);

    if (!filmAlreadyInList) {
      const fetchList = JSON.parse(window.localStorage.getItem('fetched-movies-array'));
      const onModalFilm = fetchList.find(film => film.id === +filmId);
      queueList.push(onModalFilm);
      e.currentTarget.classList.add('modal-active-btn');
      e.currentTarget.innerHTML = 'Remove from queue';
      e.currentTarget.classList.add('isActive');
    } else {
      const index = queueList.findIndex(film => film.id === +filmId);
      queueList.splice(index, 1);
      e.currentTarget.classList.remove('modal-active-btn');
      e.currentTarget.innerHTML = 'Add to queue';
      e.currentTarget.classList.remove('isActive');
    }
    localStorage.setItem('queue', JSON.stringify(queueList));

    if (!queueContainerRef.classList.contains('isHide')) {
      renderQueueList();
    }
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
