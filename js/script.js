$(document).ready(function (params) {
  $(".sf-with-ul").hover(function (params) {
    $(this).siblings("ul").fadeToggle();
  });

  $(".sf-with-ul").siblings("ul").hover(function () {
    $(this).fadeToggle();
});

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
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
        nav: false,
      },
    },
  });
});
