import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

// import currentPage from './filmServiceApi.js';
// instance.getCurrentPage();
// const currentPage = new DataFetch();
const paginationContainer = document.getElementById('tui-pagination-container');

paginationContainer.addEventListener('click', e => {
  e.preventDefault();
});

export function renderPaginationTrendigMovie(totalItems) {
  //   currentPage.page = 0;
  const options = {
    // below default value of options
    totalItems,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const instance = new Pagination(paginationContainer, options);
  // instance.getCurrentPage();
  instance.on('afterMove', event => {
    const currentPage = event.page;
    console.log(currentPage);
  });
}
