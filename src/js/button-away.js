(function() {
    'use strict';
  
    function trackScroll() {
      const scrolled = window.pageYOffset;
      const coords = document.documentElement.clientHeight;
  
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
  
    const goTopBtn = document.querySelector('.header__up-btn');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();