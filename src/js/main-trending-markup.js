import GetTrendingMoviesApi from './filmoteka-api.js';
import filmsTpl from '../templates/film-prewiev-tpl.hbs';
import { changeGenreIdToName } from './change-genres-id.js';

export const moviesGallery = document.querySelector('.home-container');
const GetTrendingMovies = new GetTrendingMoviesApi();

GetTrendingMovies.fetchMovies()
  .then(responseData => {
    changeGenreIdToName(responseData);
    createMoviesGallery(responseData);
  })
  .catch(error => {
    console.log(error);
  });

function createMoviesGallery(moviesArray) {
  const markup = filmsTpl(moviesArray);
  moviesGallery.insertAdjacentHTML('beforeend', markup);
}
