//Slider initilization

$(".home-slider").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  nav: true,
  autoplayHoverPause: true,
  autoplayTimeout: 15000,
  autoplaySpeed: 5000,
  items: 1,
  navText: [
    "<span class='fa fa-chevron-left'></span>",
    "<span class='fa fa-chevron-right'></span>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },

    600: {
      items: 1,
      nav: false,
    },

    1000: {
      items: 1,
      nav: true,
    },
  },
});
