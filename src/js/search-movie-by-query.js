import GetMoviesApi from './filmoteka-api.js';
import { renderMarkup, moviesGallery } from './main-trending-markup';
import { showError, hideError } from './throw-error';
import { showRating } from './show-rating';

const searchForm = document.querySelector('.header__form');
const GetMoviesByQuery = new GetMoviesApi();

searchForm.addEventListener('submit', searchMoviesByQuery);

function searchMoviesByQuery(e) {
  e.preventDefault();
  GetMoviesByQuery.query = searchForm.elements.searchInput.value;

  GetMoviesByQuery.fetchMoviesByQuery()
    .then(responseData => {
      if (GetMoviesByQuery.query.trim() == '' || responseData.length == 0) {
        searchForm.reset();
        throw new Error();
      }
      return responseData;
    })
    .then(responseData => {
      hideError();
      moviesGallery.innerHTML = '';
      renderMarkup(responseData);
      const ratingsArray = document.querySelectorAll('.film-rating');
      return ratingsArray;
    })
    .then(ratingsArray => {
      showRating(ratingsArray);
    })
    .catch(showError);
}
