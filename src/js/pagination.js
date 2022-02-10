export const Pagination = {
  code: '',

  // --------------------
  // Utility
  // --------------------

  // converting initialize data
  Extend: function (options) {
    const { size, page, step } = options;
    Pagination.size = size;
    Pagination.page = page;
    Pagination.step = step;
  },

  // add first page with separator
  First: function () {
    Pagination.code += '<a>1</a><span class="dots">...</span>';
  },

  // add last page with separator
  Last: function () {
    Pagination.code += '<span class="dots">...</span><a>' + Pagination.size + '</a>';
  },

  // add pages by number (from [start] to [finish])
  Add: function (start, finish) {
    for (let i = start; i <= finish; i++) {
      Pagination.code += '<a>' + i + '</a>';
    }
  },

  // --------------------
  // Handlers
  // --------------------

  // change page
  Click: function () {
    Pagination.page = +this.textContent;
    Pagination.Start();
  },

  // previous page
  Prev: function () {
    Pagination.page--;
    if (Pagination.page <= 1) {
      Pagination.page = 1;
    }
    Pagination.Start();
  },

  // next page
  Next: function () {
    Pagination.page++;
    if (Pagination.page >= Pagination.size) {
      Pagination.page = Pagination.size;
    }
    Pagination.Start();
  },

  // --------------------
  // Script
  // --------------------

  // binding pages
  Bind: function () {
    const pages = Pagination.domElem.getElementsByTagName('a');
    for (let i = 0; i < pages.length; i++) {
      if (+pages[i].textContent === Pagination.page) pages[i].className = 'pag-current';
      pages[i].addEventListener('click', Pagination.Click);
    }
  },

  // find pagination type
  Start: function () {
    if (Pagination.size < Pagination.step * 2 + 6) {
      Pagination.Add(1, Pagination.size);
    } else if (Pagination.page < Pagination.step * 2 + 1) {
      Pagination.Add(1, Pagination.step * 2 + 3);
      Pagination.Last();
    } else if (Pagination.page > Pagination.size - Pagination.step * 2) {
      Pagination.First();
      Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size);
    } else {
      Pagination.First();
      Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step);
      Pagination.Last();
    }
    Pagination.Finish();
  },

  // write pagination
  Finish: function () {
    Pagination.domElem.innerHTML = Pagination.code;
    Pagination.code = '';
    Pagination.Bind();
  },

  // --------------------
  // Initialization
  // --------------------

  // binding buttons
  Buttons: function (domElem) {
    const arrows = domElem.getElementsByTagName('button');
    arrows[0].addEventListener('click', Pagination.Prev);
    arrows[1].addEventListener('click', Pagination.Next);
  },

  // create skeleton
  Create: function (domElem) {
    const html = [
      '<button type="button" disabled class="pag-btn-prev"></button>',
      '<span class="pages-list"></span>',
      '<button type="button" class="pag-btn-next"></button>',
    ];
    domElem.innerHTML = html.join('');
    Pagination.domElem = domElem.getElementsByTagName('span')[0];
    Pagination.Buttons(domElem);
  },

  // init
  Init: function (domElem, options) {
    Pagination.Extend(options);
    Pagination.Create(domElem);
    Pagination.Start();
  },
};

/* * * * * * * * * * * * * * * * *
 * Initialization
 * * * * * * * * * * * * * * * * */

export function createPagination(total_pages) {
  Pagination.Init(document.getElementById('pagination'), {
    size: total_pages,
    page: 1,
    step: 2,
  });
}
