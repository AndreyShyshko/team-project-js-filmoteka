// import Pagination from 'tui-pagination';

// // import { trendingMovies, getGenres } from './js/apiService';

// // paginationRef: document.getElementById('tui-pagination'),
// // export function  renderPaginationTrendigMovie(totalItems) {

//  const container = document.getElementById('.tui-pagination');
// const options = { // below default value of options
//      totalItems: 10,
//      itemsPerPage: 10,
//      visiblePages: 10,
//      page: 1,
//      centerAlign: false,
//      firstItemClassName: 'tui-first-child',
//      lastItemClassName: 'tui-last-child',
//      template: {
//          page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//          currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//          moveButton:
//              '<a href="#" class="tui-page-btn tui-{{type}}">' +
//                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
//              '</a>',
//          disabledMoveButton:
//              '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
//              '</span>',
//          moreButton:
//              '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//                  '<span class="tui-ico-ellip">...</span>' +
//              '</a>'
//      }
// };

// //   const pagination = new tui.Pagination('pagination', {
// //     totalItems: 500
// // });

// // pagination.on('beforeMove', function(eventData) {
// //     return confirm('Go to page ' + eventData.page + '?');
// // });

// // pagination.on('afterMove', function(eventData) {
// //     alert('The current page is ' + eventData.page);
// // });

// const pagination = new Pagination(container, options);
//   pagination.reset();
//   pagination.on('beforeMove', function (eventData) {
//     dataFetch.page = eventData.page;
//     dataFetch.fetchTopFilms().then(films => {
//       refs.galleryRef.innerHTML = '';
//       renderMovieCardFilms(films);
//     });
//   });


