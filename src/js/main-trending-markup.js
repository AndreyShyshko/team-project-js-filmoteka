import GetMoviesApi from './filmoteka-api.js';
import filmsTpl from '../templates/film-prewiev-tpl.hbs';
import { changeGenreIdToName } from './change-genres-id.js';
import { changeDateRendering } from './change-date-rendering.js';
// import { renderPagination } from './pagination.js';
import { createPagination } from './pagination1';
import { largeSpinnerOff } from './spinner';

export const moviesGallery = document.querySelector('.home-container');
const GetTrendingMovies = new GetMoviesApi();

GetTrendingMovies.fetchTrendingMovies()
  .then(responseData => {
    renderMarkup(responseData.results, moviesGallery);
    // renderPagination(responseData.total_results);
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
