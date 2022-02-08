(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled < coords) {
        goTopBtn.classList.add('up-btn-way');
      }
      if (scrolled > coords) {
        goTopBtn.classList.remove('up-btn-way');
      }
    }
  
    function backToTop() {
      window.scrollTo(0, 0);
    }
  
    var goTopBtn = document.querySelector('.header__up-btn');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();