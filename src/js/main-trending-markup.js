import GetMoviesApi from './filmoteka-api.js';
import filmsTpl from '../templates/film-prewiev-tpl.hbs';
import { changeGenreIdToName } from './change-genres-id.js';
import { changeDateRendering } from './change-date-rendering.js';

export const moviesGallery = document.querySelector('.home-container');
const GetTrendingMovies = new GetMoviesApi();

GetTrendingMovies.fetchTrendingMovies()
  .then(responseData => {
    renderMarkup(responseData);
  })
  .catch(error => {
    console.log(error);
  });

function createMoviesGallery(moviesArray) {
  const markup = filmsTpl(moviesArray);
  moviesGallery.insertAdjacentHTML('beforeend', markup);
}

export function renderMarkup(moviesArray) {
  changeGenreIdToName(moviesArray);
  changeDateRendering(moviesArray);
  createMoviesGallery(moviesArray);
}
