import './js/pagination';
import { renderPaginationTrendigMovie } from './js/pagination';

import './sass/main.scss';

import { GetTrendingMoviesApi } from './js/filmoteka-api';
import './js/change-genres-id';
import './js/change-date-rendering';
import './js/main-trending-markup';
import './js/search-movie-by-query';
import './js/throw-error';
import './js/headerChangePage';
import './js/header-links';
import './js/modalWindow'

renderPaginationTrendigMovie(10000);
