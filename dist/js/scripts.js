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

  $('.services-carousel').owlCarousel({
    items: 1,
    margin: 40,
    loop: true,
    dots: true,
  });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcuaGFtYnVyZ2VyLXdyYXBwZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrJyk7XHJcbiAgICBjb25zdCBzZWxmID0gJCh0aGlzKTtcclxuICAgICQoc2VsZikudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLm1lbnUtbW9iaWxlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG5cclxuICAkKHdpbmRvdykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGlmIChcclxuICAgICAgZS50YXJnZXQuY2xhc3NOYW1lICE9PSAnaGFtYnVyZ2VyJyAmJlxyXG4gICAgICBlLnRhcmdldC5jbGFzc05hbWUgIT09ICdtZW51LW1vYmlsZSdcclxuICAgICkge1xyXG4gICAgICAkKCcuaGFtYnVyZ2VyLXdyYXBwZXInKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICQoJy5tZW51LW1vYmlsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnLmFib3V0LWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBtYXJnaW46IDQwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgfSk7XHJcblxyXG4gICQoJy53b3JrLXByb2Nlc3NfX2Nhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBtYXJnaW46IDQwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgJCgnLnNlcnZpY2VzLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBtYXJnaW46IDQwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgfSk7XHJcbn0pO1xyXG4iXX0=
