import { createPagination } from './pagination';
import { libraryBtn, queueBtn, watchedBtn } from './header-links';

const libraryPagination = document.querySelector('#pagination');

const getTotalMovies = moviesQty => {
  let totalMovies = moviesQty;
  return totalMovies;
};

const getMoviesPerPage = () => {
  let qty = 0;

  if (window.innerWidth < 768) {
    qty = 4;
    return qty;
  } else if (window.innerWidth > 767 && window.innerWidth < 1024) {
    qty = 8;
    return qty;
  } else if (window.innerWidth >= 1024) {
    qty = 9;
    return qty;
  }
};

function createLibraryPagination() {
  const moviesPerPage = getMoviesPerPage();

  if (queueBtn.classList.contains('isActive')) {
    const moviesQty = JSON.parse(localStorage.getItem('queue')).length;
    const totalMovies = getTotalMovies(moviesQty);
    const pages = Math.ceil(totalMovies / moviesPerPage);
    deleteLibraryPagination(pages);
  } else if (watchedBtn.classList.contains('isActive')) {
    const moviesQty = JSON.parse(localStorage.getItem('watched')).length;
    const totalMovies = getTotalMovies(moviesQty);
    const pages = Math.ceil(totalMovies / moviesPerPage);
    deleteLibraryPagination(pages);
  }
}

function deleteLibraryPagination(pages) {
  if (pages < 2) {
    libraryPagination.classList.add('isHide');
  } else if (pages >= 2) {
    libraryPagination.classList.remove('isHide');
    createPagination(pages);
  }
}

libraryBtn.addEventListener('click', createLibraryPagination);
queueBtn.addEventListener('click', createLibraryPagination);
watchedBtn.addEventListener('click', createLibraryPagination);
window.addEventListener(`resize`, createLibraryPagination);
