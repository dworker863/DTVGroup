$(window).on('load', function () {
  $('.hamburger-wrapper').on('click', function (e) {
    console.log('click');
    const self = $(this);
    $(self).toggleClass('active');
    $('.menu-mobile').toggleClass('active');
  });

  $(window).on('click', function (e) {
    if (
      e.target.className !== 'hamburger' &&
      e.target.className !== 'menu-mobile'
    ) {
      $('.hamburger-wrapper').removeClass('active');
      $('.menu-mobile').removeClass('active');
    }
  });

  $('.about-carousel').owlCarousel({
    items: 1,
    margin: 40,
    loop: true,
    dots: true,
  });

  $('.work-process__carousel').owlCarousel({
    items: 1,
    margin: 40,
    loop: true,
    dots: true,
    responsive: {
      768: {
        items: 2,
      },
    },
  });
});
