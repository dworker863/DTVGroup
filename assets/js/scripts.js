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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICQoJy5oYW1idXJnZXItd3JhcHBlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcclxuICAgIGNvbnN0IHNlbGYgPSAkKHRoaXMpO1xyXG4gICAgJChzZWxmKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcubWVudS1tb2JpbGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG4gICQod2luZG93KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBlLnRhcmdldC5jbGFzc05hbWUgIT09ICdoYW1idXJnZXInICYmXHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ21lbnUtbW9iaWxlJ1xyXG4gICAgKSB7XHJcbiAgICAgICQoJy5oYW1idXJnZXItd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLm1lbnUtbW9iaWxlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59KTtcclxuIl19
