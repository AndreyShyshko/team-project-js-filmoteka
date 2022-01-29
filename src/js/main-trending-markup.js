import GetTrendingMoviesApi from './filmoteka-api.js';
import filmsTpl from '../templates/film-prewiev-tpl.hbs';

const moviesGallery = document.querySelector('.home-container');
const GetTrendingMovies = new GetTrendingMoviesApi();

GetTrendingMovies.fetchMovies()
  .then(responseData => {
    createMoviesGallery(responseData);
  })
  .catch(error => {
    console.log(error);
  });

function createMoviesGallery(info) {
  const markup = filmsTpl(info);
  moviesGallery.insertAdjacentHTML('beforeend', markup);
}
