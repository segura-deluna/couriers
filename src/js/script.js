document.addEventListener('DOMContentLoaded', () => {
  //
  //* Header-navbar ============
  window.onscroll = () => {
    const header = document.getElementById('topHeader');
    const sticky = header.offsetTop;

    const myFunction = () => {
      if (window.pageYOffset >= sticky + 150 || window.innerWidth <= 319) {
        header.classList.remove('hidden');
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
        header.classList.add('hidden');
      }
    };
    myFunction();
  };
  //
  // * Smooth-scroll ================
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300,
    offset: 90,
  });
  //

  // * Sliders ================
  const clientsSlider = new Swiper('.clients__slider-items', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 4,
    loop: true,
    navigation: {
      nextEl: '.slider-arrow-left',
      prevEl: '.slider-arrow-right',
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  //
  const reviewSlider = new Swiper('.review__slider', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: '.slider-arrow-left',
      prevEl: '.slider-arrow-right',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  //
  // * TABS ===========================
  const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
      tab = document.querySelectorAll(tabSelector),
      content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
      content.forEach((item) => {
        item.style.display = 'none';
      });

      tab.forEach((item) => {
        item.classList.remove(activeClass);
      });
    }

    function showTabContent(i = 0) {
      content[i].style.display = 'block';
      tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
      const target = e.target;
      if (
        target &&
        (target.classList.contains(tabSelector.replace(/\./, '')) ||
          target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
      ) {
        tab.forEach((item, i) => {
          if (target == item || target.parentNode == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  };
  tabs('.tab-triggers', '.tab-trigger', '.tab-item', 'active');

  // * Dropdown ===========================
  const accordions = document.querySelectorAll('.dropdown');

  for (item of accordions) {
    item.addEventListener('click', function () {
      if (this.classList.contains('active')) {
        this.classList.remove('active');
      } else {
        for (el of accordions) {
          el.classList.remove('active');
        }
        this.classList.add('active');
      }
    });
  }
});
