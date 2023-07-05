var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  lazyLoad: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    750: {
      items: 2,
      nav: false,
    },
    1200: {
      items: 3,
      nav: false,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
