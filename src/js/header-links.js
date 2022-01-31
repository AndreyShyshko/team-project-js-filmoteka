// const homeBtn = document.querySelector('.'); /* need classes of header-links */
// const libraryBtn = document.querySelector('.'); /* need classes of header-links */
const library = document.querySelector('.library-container');
const queue = document.querySelector('.queue');
const watched = document.querySelector('.watched');
import { moviesGallery } from './main-trending-markup.js';

// homeBtn.addEventListener('click', goHome);
// libraryBtn.addEventListener('click', goLibrary);

function goHome() {
  library.classList.add('isHide');
  queue.classList.add('isHide');
  moviesGallery.classList.remove('isHide');
}

function goLibrary() {
  library.classList.remove('isHide');
  queue.classList.remove('isHide');
  moviesGallery.classList.add('isHide');
}