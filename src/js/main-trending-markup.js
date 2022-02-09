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

GetTrendingMovies.fetchTrendingMovies()
  .then(responseData => {
    renderMarkup(responseData.results, moviesGallery);
    localStorage.setItem('home_total_pages', `${responseData.total_pages}`);
    createLocalstorageList(WATCHED_KEY);
    createLocalstorageList(QUEUE_KEY);
    document.addEventListener('DOMContentLoaded', createPagination(responseData.total_pages));
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
  changeDateRendering(moviesArray);
  createMoviesGallery(moviesArray, domElementRef);
  largeSpinnerOff();
}
