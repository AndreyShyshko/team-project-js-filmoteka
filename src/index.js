import './js/pagination';
import { renderPaginationTrendigMovie } from './js/pagination';

import './sass/main.scss';

import { GetTrendingMoviesApi }  from './js/filmoteka-api';
import './js/change-genres-id';
import './js/main-trending-markup';
import './js/header-links';




    renderPaginationTrendigMovie(10000) ;
    GetTrendingMoviesApi();