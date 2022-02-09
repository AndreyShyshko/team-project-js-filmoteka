import GetMoviesApi from './filmoteka-api.js';
import { renderMarkup, moviesGallery } from './main-trending-markup';
import { showError, hideError } from './throw-error';
import { showRating } from './show-rating';
import { createPagination } from './pagination';

export const searchForm = document.querySelector('.header__form');
const GetMoviesByQuery = new GetMoviesApi();

searchForm.addEventListener('submit', searchMoviesByQuery);

function searchMoviesByQuery(e) {
  e.preventDefault();

  if (GetMoviesByQuery.query !== searchForm.elements.searchInput.value) {
    GetMoviesByQuery.resetPage();
    GetMoviesByQuery.query = searchForm.elements.searchInput.value;
  }

  GetMoviesByQuery.fetchMoviesByQuery()
    .then(responseData => {
      if (!GetMoviesByQuery.query.trim() || !responseData.total_results) {
        searchForm.reset();
        throw new Error();
      }
      return responseData;
    })
    .then(responseData => {
      hideError();

      moviesGallery.innerHTML = '';
      renderMarkup(responseData.results, moviesGallery);
      localStorage.setItem('home_total_pages', `${responseData.total_pages}`);

      document.addEventListener('DOMContentLoaded', createPagination(responseData.total_pages));

      const ratingsArray = document.querySelectorAll('.film-rating');
      return ratingsArray;
    })
    .then(ratingsArray => {
      showRating(ratingsArray);
    })
    .catch(showError);
}
