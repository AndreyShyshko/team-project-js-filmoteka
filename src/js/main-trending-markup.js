import GetTrendingMoviesApi from './filmoteka-api.js';
import filmsTpl from '../templates/film-prewiev-tpl.hbs';
import { changeGenreIdToName } from './change-genres-id.js';
import { changeDateRendering } from './change-date-rendering.js';

export const moviesGallery = document.querySelector('.home-container');
const GetTrendingMovies = new GetTrendingMoviesApi();

GetTrendingMovies.fetchMovies()
  .then(responseData => {
    changeGenreIdToName(responseData);
    changeDateRendering(responseData);
    createMoviesGallery(responseData);
  })
  .catch(error => {
    console.log(error);
  });

function createMoviesGallery(moviesArray) {
  const markup = filmsTpl(moviesArray);
  moviesGallery.insertAdjacentHTML('beforeend', markup);
}
