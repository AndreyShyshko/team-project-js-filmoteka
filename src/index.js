import { Pagination } from 'tui-pagination';
import './sass/main.scss';
// // import { trendingMovies, getGenres } from './js/apiService';
// import {  renderPaginationTrendigMovie } from './js/pagination';
// import './js/pagination';
// import { render } from 'sass';

// trendingMovies().then((films) => {
//     console.log(films);
//     renderPaginationTrendigMovie(films.total);
// });
//  const pagination = document.getElementById('tui-pagination');
// getGenres().then((genres) => console.log(genres));
const pagination = new tui.Pagination('pagination', {
    totalItems: 500,
    template: {
        page: '<a href="#" class="tui-page-btn">{{page}}p</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}p</strong>',
        moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</a>',
        disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
                '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</span>',
        moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
                '<span class="tui-ico-ellip">...</span>' +
            '</a>'
    }
});

// const instance = new Pagination(container, optins);
// // pagination.on('beforeMove', function(eventData) {
// //     return confirm('Go to page ' + eventData.page + '?');
// // });

// instance.on('afterMove', function(eventData) {
//     alert('The current page is ' + eventData.page);
// });

