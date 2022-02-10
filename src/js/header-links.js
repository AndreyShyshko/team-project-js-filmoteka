const homeBtn = document.querySelector('#headerHomeBtn');
export const libraryBtn = document.querySelector('#headerLibraryBtn');
const library = document.querySelector('.library-container');
export const queue = document.querySelector('.queue');
export const queueBtn = document.querySelector('#btn__header-queue');
export const watched = document.querySelector('.watched');
export const watchedBtn = document.querySelector('#btn__header-watched');
const logoRef = document.querySelector('.header__logo');
import { moviesGallery, pagination } from './main-trending-markup';
import { createPagination } from './pagination';
import { renderQueueList } from './queue';
import { showRating } from './show-rating';

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
  pagination.classList.remove('isHide');

  const homeTotalPages = localStorage.getItem('home_total_pages');
  createPagination(+homeTotalPages);
}

function goLibrary() {
  library.classList.remove('isHide');
  moviesGallery.classList.add('isHide');
  queue.classList.remove('isHide');
  queueBtn.classList.add('isActive');
  watchedBtn.classList.remove('isActive');
  watched.classList.add('isHide');

  renderQueueList();
}

export function goQueue() {
  queueBtn.classList.add('isActive');
  watchedBtn.classList.remove('isActive');
  queue.classList.remove('isHide');
  watched.classList.add('isHide');
  const ratingsArray = document.querySelectorAll('.film-rating');
  showRating(ratingsArray);
}

export function goWatched() {
  watchedBtn.classList.add('isActive');
  queueBtn.classList.remove('isActive');
  queue.classList.add('isHide');
  watched.classList.remove('isHide');
  const ratingsArray = document.querySelectorAll('.film-rating');
  showRating(ratingsArray);
}
