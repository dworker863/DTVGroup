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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgJCgnLmhhbWJ1cmdlci13cmFwcGVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKCdjbGljaycpO1xyXG4gICAgY29uc3Qgc2VsZiA9ICQodGhpcyk7XHJcbiAgICAkKHNlbGYpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5tZW51LW1vYmlsZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9KTtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ2hhbWJ1cmdlcicgJiZcclxuICAgICAgZS50YXJnZXQuY2xhc3NOYW1lICE9PSAnbWVudS1tb2JpbGUnXHJcbiAgICApIHtcclxuICAgICAgJCgnLmhhbWJ1cmdlci13cmFwcGVyJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAkKCcubWVudS1tb2JpbGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5hYm91dC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgbWFyZ2luOiA0MCxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gIH0pO1xyXG59KTtcclxuIl19
