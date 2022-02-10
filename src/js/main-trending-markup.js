import GetMoviesApi from './filmoteka-api.js';
import filmsTpl from '../templates/film-prewiev-tpl.hbs';
import { changeGenreIdToName } from './change-genres-id';
import { changeDateRendering } from './change-date-rendering';
import { createPagination } from './pagination';
import { largeSpinnerOff } from './spinner';
import { createLocalstorageList } from './modal-handlers';

const WATCHED_KEY = 'watched';
const QUEUE_KEY = 'queue';

export const moviesGallery = document.querySelector('.home-container');
const GetTrendingMovies = new GetMoviesApi();
export const pagination = document.querySelector('#pagination');

GetTrendingMovies.fetchTrendingMovies()
  .then(responseData => {
    changeDateRendering(responseData.results);
    renderMarkup(responseData.results, moviesGallery);

    localStorage.setItem('home_total_pages', `${responseData.total_pages}`);
    localStorage.setItem('fetched-movies-array', JSON.stringify(responseData.results));

    createLocalstorageList(WATCHED_KEY);
    createLocalstorageList(QUEUE_KEY);

    document.addEventListener('DOMContentLoaded', createPagination(responseData.total_pages));
    pagination.classList.remove('isHide');
  })
  .catch(error => {
    console.log(error);
  });

function createMoviesGallery(moviesArray, domElementRef) {
  const markup = filmsTpl(moviesArray);
  domElementRef.innerHTML = markup;
}

export function renderMarkup(moviesArray, domElementRef) {
  changeGenreIdToName(moviesArray);
  createMoviesGallery(moviesArray, domElementRef);
  largeSpinnerOff();
}
