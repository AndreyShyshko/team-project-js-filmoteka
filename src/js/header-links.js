const homeBtn = document.querySelector('#headerHomeBtn');
const libraryBtn = document.querySelector('#headerLibraryBtn');
const library = document.querySelector('.library-container');
const queue = document.querySelector('.queue');
const queueBtn = document.querySelector('#btn__header-queue');
const watched = document.querySelector('.watched');
const watchedBtn = document.querySelector('#btn__header-watched');
import { moviesGallery } from './main-trending-markup.js';

homeBtn.addEventListener('click', goHome);
libraryBtn.addEventListener('click', goLibrary);
queueBtn.addEventListener('click', goQueue);
watchedBtn.addEventListener('click', goWatched);

function goHome() {
  library.classList.add('isHide');
  queue.classList.add('isHide');
  watched.classList.add('isHide');
  moviesGallery.classList.remove('isHide');
  watchedBtn.classList.remove('isActive');
  queueBtn.classList.remove('isActive');
}

function goLibrary() {
  library.classList.remove('isHide');
  moviesGallery.classList.add('isHide');
  queue.classList.remove('isHide');
  queueBtn.classList.add('isActive');
}

function goQueue() {
  queueBtn.classList.add('isActive');
  watchedBtn.classList.remove('isActive');
  queue.classList.remove('isHide');
  watched.classList.add('isHide');
}

function goWatched() {
  watchedBtn.classList.add('isActive');
  queueBtn.classList.remove('isActive');
  queue.classList.add('isHide');
  watched.classList.remove('isHide');
}
