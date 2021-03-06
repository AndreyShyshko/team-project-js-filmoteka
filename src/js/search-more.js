import { searchForm } from './search-movie-by-query';
import { renderMarkup, moviesGallery } from './main-trending-markup';
import { changeDateRendering } from './change-date-rendering';
import { showRating } from './show-rating';
import GetMoviesApi from './filmoteka-api';
import { Pagination } from './pagination';

const GetMoreMovies = new GetMoviesApi();
const paginationContainer = document.querySelector('#pagination');

paginationContainer.addEventListener('click', loadMoreMovies);

function loadMoreMovies(e) {
  window.scrollTo(0, 0);
  GetMoreMovies.query = searchForm.elements.searchInput.value;
  getPage(e);
  try {
    if (!GetMoreMovies.query) {
      GetMoreMovies.fetchTrendingMovies().then(responseData => {
        moviesGallery.innerHTML = '';
        changeDateRendering(responseData.results);
        renderMarkup(responseData.results, moviesGallery);
        localStorage.setItem('fetched-movies-array', JSON.stringify(responseData.results));
      });
    } else if (GetMoreMovies.query !== searchForm.elements.searchInput.value) {
      GetMoreMovies.resetPage();
    } else if (GetMoreMovies.query.trim() === searchForm.elements.searchInput.value.trim()) {
      GetMoreMovies.fetchMoviesByQuery()
        .then(responseData => {
          moviesGallery.innerHTML = '';
          changeDateRendering(responseData.results);
          renderMarkup(responseData.results, moviesGallery);
          localStorage.setItem('fetched-movies-array', JSON.stringify(responseData.results));

          const ratingsArray = document.querySelectorAll('.film-rating');
          return ratingsArray;
        })
        .then(ratingsArray => {
          showRating(ratingsArray);
        });
    }
  } catch (error) {
    console.log(error);
  }
}

function getPage() {
  const prevBtn = document.querySelector('.pag-btn-prev');
  const nextBtn = document.querySelector('.pag-btn-next');
  const currentPage = document.querySelector('.pag-current');
  GetMoreMovies.changePage(+currentPage.textContent);

  if (+currentPage.textContent > 1) {
    prevBtn.disabled = false;
  } else if (+currentPage.textContent <= 1) {
    prevBtn.disabled = true;
  }

  if (+currentPage.textContent < Pagination.size) {
    nextBtn.disabled = false;
  } else if (+currentPage.textContent >= Pagination.size) {
    nextBtn.disabled = true;
  }
}
