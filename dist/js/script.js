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
    spaceBetween: 30,
    centeredSlides: false,
    loopedSlides: 8,
    loop: true,
    navigation: {
      nextEl: '.slider-arrow-left',
      prevEl: '.slider-arrow-right',
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: false,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
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
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
      },

      767: {
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: false,
      },
      980: {
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
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
  tabs('.dropdown__tab-triggers', '.dropdown__tab-trigger', '.tab-item', 'active');

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
  //
  // * Open-Close modals =========
  let popupsToggle = document.querySelectorAll('.open-popup');

  let popupClose = document.querySelectorAll('.close');

  popupsToggle.forEach(function (item) {
    item.addEventListener('click', function () {
      let popupName = item.getAttribute('data-popup');
      document.getElementById(popupName).style.display = 'block';
    });
  });

  popupClose.forEach(function (item) {
    item.addEventListener('click', function () {
      let popup = item.closest('.modal');
      popup.style.display = 'none';
    });
  });

  window.onclick = function (e) {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  };
});
