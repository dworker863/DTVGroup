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

  const controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0.3,
    },
  });

  new ScrollMagic.Scene({
    triggerElement: '#about',
    offset: $('.about .section-desc').height() * 2.5,
  })
    .setClassToggle('.about-item__desc', 'active')
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#about',
    offset: $('.about .section-desc').height() * 2.5,
  })
    .setClassToggle('.about-item__photo', 'active')
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#about',
  })
    .setClassToggle('.about .section-desc', 'active')
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#work-process',
    offset: 200,
  })
    .setClassToggle('.work-process .section-desc', 'active')
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#work-process',
    offset: $('.work-process .section-desc').height() * 2.5,
  })
    .setClassToggle('.work-process__card', 'active')
    .addIndicators()
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#services',
    // offset: $('.work-process .section-desc').height() * 2.5,
  })
    .setClassToggle('.bg-hand', 'active')
    .addIndicators()
    .addTo(controller);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICQoJy5oYW1idXJnZXItd3JhcHBlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2snKTtcclxuICAgIGNvbnN0IHNlbGYgPSAkKHRoaXMpO1xyXG4gICAgJChzZWxmKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcubWVudS1tb2JpbGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG4gICQod2luZG93KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBlLnRhcmdldC5jbGFzc05hbWUgIT09ICdoYW1idXJnZXInICYmXHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSAhPT0gJ21lbnUtbW9iaWxlJ1xyXG4gICAgKSB7XHJcbiAgICAgICQoJy5oYW1idXJnZXItd3JhcHBlcicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgJCgnLm1lbnUtbW9iaWxlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcuYWJvdXQtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBpdGVtczogMSxcclxuICAgIG1hcmdpbjogNDAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgJCgnLndvcmstcHJvY2Vzc19fY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBpdGVtczogMSxcclxuICAgIG1hcmdpbjogNDAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIHJlc3BvbnNpdmU6IHtcclxuICAgICAgNzY4OiB7XHJcbiAgICAgICAgaXRlbXM6IDIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAkKCcuc2VydmljZXMtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XHJcbiAgICBpdGVtczogMSxcclxuICAgIG1hcmdpbjogNDAsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKHtcclxuICAgIGdsb2JhbFNjZW5lT3B0aW9uczoge1xyXG4gICAgICB0cmlnZ2VySG9vazogMC4zLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcclxuICAgIHRyaWdnZXJFbGVtZW50OiAnI2Fib3V0JyxcclxuICAgIG9mZnNldDogJCgnLmFib3V0IC5zZWN0aW9uLWRlc2MnKS5oZWlnaHQoKSAqIDIuNSxcclxuICB9KVxyXG4gICAgLnNldENsYXNzVG9nZ2xlKCcuYWJvdXQtaXRlbV9fZGVzYycsICdhY3RpdmUnKVxyXG4gICAgLmFkZEluZGljYXRvcnMoKVxyXG4gICAgLmFkZFRvKGNvbnRyb2xsZXIpO1xyXG5cclxuICBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG4gICAgdHJpZ2dlckVsZW1lbnQ6ICcjYWJvdXQnLFxyXG4gICAgb2Zmc2V0OiAkKCcuYWJvdXQgLnNlY3Rpb24tZGVzYycpLmhlaWdodCgpICogMi41LFxyXG4gIH0pXHJcbiAgICAuc2V0Q2xhc3NUb2dnbGUoJy5hYm91dC1pdGVtX19waG90bycsICdhY3RpdmUnKVxyXG4gICAgLmFkZFRvKGNvbnRyb2xsZXIpO1xyXG5cclxuICBuZXcgU2Nyb2xsTWFnaWMuU2NlbmUoe1xyXG4gICAgdHJpZ2dlckVsZW1lbnQ6ICcjYWJvdXQnLFxyXG4gIH0pXHJcbiAgICAuc2V0Q2xhc3NUb2dnbGUoJy5hYm91dCAuc2VjdGlvbi1kZXNjJywgJ2FjdGl2ZScpXHJcbiAgICAuYWRkSW5kaWNhdG9ycygpXHJcbiAgICAuYWRkVG8oY29udHJvbGxlcik7XHJcblxyXG4gIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XHJcbiAgICB0cmlnZ2VyRWxlbWVudDogJyN3b3JrLXByb2Nlc3MnLFxyXG4gICAgb2Zmc2V0OiAyMDAsXHJcbiAgfSlcclxuICAgIC5zZXRDbGFzc1RvZ2dsZSgnLndvcmstcHJvY2VzcyAuc2VjdGlvbi1kZXNjJywgJ2FjdGl2ZScpXHJcbiAgICAuYWRkSW5kaWNhdG9ycygpXHJcbiAgICAuYWRkVG8oY29udHJvbGxlcik7XHJcblxyXG4gIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XHJcbiAgICB0cmlnZ2VyRWxlbWVudDogJyN3b3JrLXByb2Nlc3MnLFxyXG4gICAgb2Zmc2V0OiAkKCcud29yay1wcm9jZXNzIC5zZWN0aW9uLWRlc2MnKS5oZWlnaHQoKSAqIDIuNSxcclxuICB9KVxyXG4gICAgLnNldENsYXNzVG9nZ2xlKCcud29yay1wcm9jZXNzX19jYXJkJywgJ2FjdGl2ZScpXHJcbiAgICAuYWRkSW5kaWNhdG9ycygpXHJcbiAgICAuYWRkVG8oY29udHJvbGxlcik7XHJcblxyXG4gIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XHJcbiAgICB0cmlnZ2VyRWxlbWVudDogJyNzZXJ2aWNlcycsXHJcbiAgICAvLyBvZmZzZXQ6ICQoJy53b3JrLXByb2Nlc3MgLnNlY3Rpb24tZGVzYycpLmhlaWdodCgpICogMi41LFxyXG4gIH0pXHJcbiAgICAuc2V0Q2xhc3NUb2dnbGUoJy5iZy1oYW5kJywgJ2FjdGl2ZScpXHJcbiAgICAuYWRkSW5kaWNhdG9ycygpXHJcbiAgICAuYWRkVG8oY29udHJvbGxlcik7XHJcbn0pO1xyXG4iXX0=
