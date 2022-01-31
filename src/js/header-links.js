const homeBtn = document.querySelector('#headerHomeBtn'); /* need classes of header-links */
const libraryBtn = document.querySelector('#headerLibraryBtn'); /* need classes of header-links */
const library = document.querySelector('.library-container');
import { moviesGallery } from './main-trending-markup.js';

homeBtn.addEventListener('click', goHome);
libraryBtn.addEventListener('click', goLibrary);

function goHome() {
  library.classList.add('library-isHide');
  moviesGallery.classList.remove('home-isHide');
}

function goLibrary() {
  library.classList.remove('library-isHide');
  moviesGallery.classList.add('home-isHide');
}
