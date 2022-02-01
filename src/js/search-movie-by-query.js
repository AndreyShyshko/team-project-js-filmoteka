import GetMoviesApi from './filmoteka-api.js';
import { renderMarkup, moviesGallery } from './main-trending-markup';
import { showError, hideError } from './throw-error';

const searchForm = document.querySelector('.header__form');
const GetMoviesByQuery = new GetMoviesApi();

searchForm.addEventListener('submit', searchMoviesByQuery);

function searchMoviesByQuery(e) {
  e.preventDefault();
  GetMoviesByQuery.query = searchForm.elements.searchInput.value;

  GetMoviesByQuery.fetchMoviesByQuery()
    .then(responseData => {
      if (responseData.length === 0) {
        throw new Error();
      }
      return responseData;
    })
    .then(responseData => {
      hideError();
      moviesGallery.innerHTML = '';
      renderMarkup(responseData);
    })
    .catch(showError);
}
