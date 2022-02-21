$(window).on('load', function () {
  $('.hamburger-wrapper').on('click', function (e) {
    console.log('click');
    const self = $(this);
    $(self).toggleClass('active');
    // $('.menu-mobile').slideToggle();
  });
});
