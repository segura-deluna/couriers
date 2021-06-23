document.addEventListener('DOMContentLoaded', () => {
  //* Header-navbar ============
  // window.onscroll = () => {
  //   const header = document.getElementById('bottomHeader');
  //   const sticky = header.offsetTop;
  //
  //   const myFunction = () => {
  //     if (window.pageYOffset >= sticky + 150 || window.innerWidth <= 1025) {
  //       header.classList.remove('hidden');
  //       header.classList.add('sticky');
  //     } else {
  //       header.classList.remove('sticky');
  //       header.classList.add('hidden');
  //     }
  //   };
  //   myFunction();
  // };

  // * Open-Close modals =========
  // let popupsToggle = document.querySelectorAll('.open-popup');
  // let popupClose = document.querySelectorAll('.close');
  //
  // popupsToggle.forEach(function (item) {
  //   item.addEventListener('click', function () {
  //     let popupName = item.getAttribute('data-popup');
  //     document.getElementById(popupName).style.display = 'block';
  //   });
  // });
  //
  // popupClose.forEach(function (item) {
  //   item.addEventListener('click', function () {
  //     let popup = item.closest('.modal');
  //     popup.style.display = 'none';
  //   });
  // });
  //
  // window.onclick = function (e) {
  //   if (e.target.classList.contains('modal')) {
  //     e.target.style.display = 'none';
  //   }
  // };

  // * Sliders ================
  // const brandCar = new Swiper('#brandCar', {
  //   watchSlidesProgress: true,
  //   watchSlidesVisibility: true,
  //   slidesPerView: 1,
  //   loop: true,
  //   navigation: {
  //     nextEl: '.slider-arrow-right',
  //     prevEl: '.slider-arrow-left',
  //   },
  //   breakpoints: {
  //     1200: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //   },
  // });
  //
  // const shops = new Swiper('#shops', {
  //   watchSlidesProgress: true,
  //   watchSlidesVisibility: true,
  //   slidesPerView: 1,
  //   loop: true,
  //   navigation: {
  //     nextEl: '.slider-arrow-right',
  //     prevEl: '.slider-arrow-left',
  //   },
  //   breakpoints: {
  //     1200: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //   },
  // });

  // const hotForum = new Swiper('#hotForum', {
  //   watchSlidesProgress: true,
  //   watchSlidesVisibility: true,
  //   slidesPerView: 1,
  //   loop: true,
  //   navigation: {
  //     nextEl: '.slider-arrow-right',
  //     prevEl: '.slider-arrow-left',
  //   },
  //   breakpoints: {
  //     1200: {
  //       slidesPerView: 1,
  //       spaceBetween: 20,
  //     },
  //   },
  // });
  //
  // const hints = new Swiper('#hints', {
  //   watchSlidesProgress: true,
  //   watchSlidesVisibility: true,
  //   slidesPerView: 1,
  //   loop: true,
  //   navigation: {
  //     nextEl: '.slider-arrow-right',
  //     prevEl: '.slider-arrow-left',
  //   },
  // });

  // * TABS ===========================
  // const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  //   const header = document.querySelector(headerSelector),
  //     tab = document.querySelectorAll(tabSelector),
  //     content = document.querySelectorAll(contentSelector);
  //
  //   function hideTabContent() {
  //     content.forEach((item) => {
  //       item.style.display = 'none';
  //     });
  //
  //     tab.forEach((item) => {
  //       item.classList.remove(activeClass);
  //     });
  //   }
  //
  //   function showTabContent(i = 0) {
  //     content[i].style.display = 'block';
  //     tab[i].classList.add(activeClass);
  //   }
  //
  //   hideTabContent();
  //   showTabContent();

  //   header.addEventListener('click', (e) => {
  //     const target = e.target;
  //     if (
  //       target &&
  //       (target.classList.contains(tabSelector.replace(/\./, '')) ||
  //         target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
  //     ) {
  //       tab.forEach((item, i) => {
  //         if (target == item || target.parentNode == item) {
  //           hideTabContent();
  //           showTabContent(i);
  //         }
  //       });
  //     }
  //   });
  // };
  //
  // tabs('.registration__tab-triggers', '.registration__tab-trigger', '.registration__tab-item', 'active');
  // tabs('.comment__tabs', '.comment__tabs-item', '.comment__content-item', 'active');

  // * Rating Star ======================
  // const rating = document.querySelector('.rating'),
  //   ratingItem = document.querySelectorAll('.rating-item');
  //
  // rating.onclick = function (e) {
  //   let target = e.target;
  //   if (target.classList.contains('rating-item')) {
  //     removeClass(ratingItem, 'active');
  //     target.classList.add('active');
  //   }
  // };
  //
  // function removeClass(elements, className) {
  //   for (let i = 0; i < elements.length; i++) {
  //     elements[i].classList.remove(className);
  //   }
  // }

  // * Dropdown =================================================================
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
