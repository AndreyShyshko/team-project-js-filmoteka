import { searchForm } from './search-movie-by-query';
import { paginationContainer } from './pagination.js';
import { renderMarkup, moviesGallery } from './main-trending-markup';
import { showRating } from './show-rating';

import GetMoviesApi from './filmoteka-api.js';

const GetMoreMovies = new GetMoviesApi();

paginationContainer.addEventListener('click', loadMoreMovies);

function loadMoreMovies(e) {
  getPage(e);
  GetMoreMovies.query = searchForm.elements.searchInput.value;

  if (!GetMoreMovies.query) {
    GetMoreMovies.fetchTrendingMovies()
      .then(responseData => {
        moviesGallery.innerHTML = '';
        renderMarkup(responseData.results, moviesGallery);
      })
      .catch(error => {
        console.log(error);
      });
  } else if (GetMoreMovies.query.trim() === searchForm.elements.searchInput.value.trim()) {
    GetMoreMovies.fetchMoviesByQuery()
      .then(responseData => {
        moviesGallery.innerHTML = '';
        renderMarkup(responseData.results, moviesGallery);

        const ratingsArray = document.querySelectorAll('.film-rating');
        return ratingsArray;
      })
      .then(ratingsArray => {
        showRating(ratingsArray);
      })
      .catch(error => {
        console.log(error);
      });
  }
}

function getPage(e) {
  if (e.target.textContent === 'next') {
    GetMoreMovies.incrementPage();
    return;
  } else if (e.target.textContent === 'prev') {
    if (GetMoreMovies.page === 1) {
      return;
    }
    GetMoreMovies.decrementPage();
    return;
  }
  GetMoreMovies.changePage(e.target.textContent);
  return;
}
