


const Pagination1 = {

    code: '',

    // --------------------
    // Utility
    // --------------------

    // converting initialize data
    Extend: function(data) {
        data = data || {};
        Pagination1.size = data.size || 300;
        Pagination1.page = data.page || 1;
        Pagination1.step = data.step || 2;
    },

    // add pages by number (from [s] to [f])
    Add: function(s, f) {
        for (var i = s; i < f; i++) {
            Pagination1.code += '<a>' + i + '</a>';
        }
    },

    // add last page with separator
    Last: function() {
        Pagination1.code += '<i>...</i><a>' + Pagination1.size + '</a>';
    },

    // add first page with separator
    First: function() {
        Pagination1.code += '<a>1</a><i>...</i>';
    },

    // --------------------
    // Handlers
    // --------------------

    // change page
    Click: function() {
        Pagination1.page = +this.innerHTML;
        Pagination1.Start();
    },

    // previous page
    Prev: function() {
        Pagination1.page--;
        if (Pagination1.page < 1) {
            Pagination1.page = 1;
        }
        Pagination1.Start();
    },

    // next page
    Next: function() {
        Pagination1.page++;
        if (Pagination1.page > Pagination1.size) {
            Pagination1.page = Pagination1.size;
        }
        Pagination1.Start();
    },

    // --------------------
    // Script
    // --------------------

    // binding pages
    Bind: function() {
        var a = Pagination1.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination1.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination1.Click, false);
        }
    },

    // write pagination
    Finish: function() {
        Pagination1.e.innerHTML = Pagination1.code;
        Pagination1.code = '';
        Pagination1.Bind();
    },

    // find pagination type
    Start: function() {
        if (Pagination1.size < Pagination1.step * 2 + 6) {
            Pagination1.Add(1, Pagination1.size + 1);
        }
        else if (Pagination1.page < Pagination1.step * 2 + 1) {
            Pagination1.Add(1, Pagination1.step * 2 + 4);
            Pagination1.Last();
        }
        else if (Pagination1.page > Pagination1.size - Pagination1.step * 2) {
            Pagination1.First();
            Pagination1.Add(Pagination1.size - Pagination1.step * 2 - 2, Pagination1.size + 1);
        }
        else {
            Pagination1.First();
            Pagination1.Add(Pagination1.page - Pagination1.step, Pagination1.page + Pagination1.step + 1);
            Pagination1.Last();
        }
        Pagination1.Finish();
    },

    // --------------------
    // Initialization
    // --------------------

    // binding buttons
    Buttons: function(e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination1.Prev, false);
        nav[1].addEventListener('click', Pagination1.Next, false);
    },

    // create skeleton
    Create: function(e) {

        var html = [
            '<a class="pag-btn"></a>', // previous button
            '<span></span>',  // pagination container
            '<a class="pag-btn-next"></a>'  // next button
        ];

        e.innerHTML = html.join('');
        Pagination1.e = e.getElementsByTagName('span')[0];
        Pagination1.Buttons(e);
    },

    // init
    Init: function(e, data) {
        Pagination1.Extend(data);
        Pagination1.Create(e);
        Pagination1.Start();
    }
};

/* * * * * * * * * * * * * * * * *
* Initialization
* * * * * * * * * * * * * * * * */

var init = function() {
    Pagination1.Init(document.getElementById('pagination'), {
        size: 30, // pages size
        page: 1,  // selected page
        step: 2   // pages before and after current
    });
};

document.addEventListener('DOMContentLoaded', init, false);
