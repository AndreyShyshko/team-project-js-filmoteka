const homeBtn = document.querySelector('#headerHomeBtn');
const libraryBtn = document.querySelector('#headerLibraryBtn');
const library = document.querySelector('.library-container');
const queue = document.querySelector('.queue');
const queueBtn = document.querySelector('#btn__header-queue');
const watched = document.querySelector('.watched');
const watchedBtn = document.querySelector('#btn__header-watched');
const logoRef = document.querySelector('.header__logo');
import { moviesGallery } from './main-trending-markup';
import { createPagination } from './pagination';
import { renderQueueList } from './queue'

homeBtn.addEventListener('click', goHome);
libraryBtn.addEventListener('click', goLibrary);
queueBtn.addEventListener('click', goQueue);
watchedBtn.addEventListener('click', goWatched);
logoRef.addEventListener('click', goHome);

function goHome() {
  library.classList.add('isHide');
  queue.classList.add('isHide');
  watched.classList.add('isHide');
  moviesGallery.classList.remove('isHide');
  watchedBtn.classList.remove('isActive');
  queueBtn.classList.remove('isActive');

  const homeTotalPages = localStorage.getItem('home_total_pages');
  createPagination(+homeTotalPages);
}

function goLibrary() {
  library.classList.remove('isHide');
  moviesGallery.classList.add('isHide');
  queue.classList.remove('isHide');
  queueBtn.classList.add('isActive');

  renderQueueList();

  createPagination(10); // test quantity
}

export function goQueue() {
  queueBtn.classList.add('isActive');
  watchedBtn.classList.remove('isActive');
  queue.classList.remove('isHide');
  watched.classList.add('isHide');
}

export function goWatched() {
  watchedBtn.classList.add('isActive');
  queueBtn.classList.remove('isActive');
  queue.classList.add('isHide');
  watched.classList.remove('isHide');
}
