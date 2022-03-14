$(window).on('load', function () {
  $('.hamburger-wrapper').on('click', function (e) {
    console.log('click');
    const t = $(this);
    $(t).toggleClass('active'), $('.menu-mobile').toggleClass('active');
  }),
    $(window).on('click', function (e) {
      'hamburger' !== e.target.className &&
        'menu-mobile' !== e.target.className &&
        ($('.hamburger-wrapper').removeClass('active'),
        $('.menu-mobile').removeClass('active'));
    }),
    $('.about-carousel').owlCarousel({
      items: 1,
      margin: 40,
      loop: !0,
      dots: !0,
    }),
    $('.work-process__carousel').owlCarousel({
      items: 1,
      margin: 40,
      loop: !0,
      dots: !0,
      responsive: {
        768: {
          items: 2,
        },
      },
    }),
    $('.services-carousel').owlCarousel({
      items: 1,
      margin: 40,
      loop: !0,
      dots: !0,
      equalHeight: true,
    });
  const e = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 0.3,
    },
  });
  document.querySelectorAll('a[href^="#"]').forEach((e) => {
    e.addEventListener('click', function (e) {
      e.preventDefault();
      const t =
        document
          .querySelector(this.getAttribute('href'))
          .getBoundingClientRect().top +
        window.pageYOffset +
        -100;
      window.scrollTo({
        top: t,
        behavior: 'smooth',
      });
    });
  }),
    new ScrollMagic.Scene({
      triggerElement: '#about',
      offset: $('.about .section-desc').height(),
    })
      .setClassToggle('.about-item__desc', 'active')
      .addTo(e),
    new ScrollMagic.Scene({
      triggerElement: '#about',
      offset: $('.about .section-desc').height(),
    })
      .setClassToggle('.about-item__photo', 'active')
      .addTo(e),
    new ScrollMagic.Scene({
      triggerElement: '#about',
    })
      .setClassToggle('.about .section-desc', 'active')
      .addTo(e),
    new ScrollMagic.Scene({
      triggerElement: '#work-process',
    })
      .setClassToggle('.work-process .section-desc', 'active')
      .addTo(e),
    new ScrollMagic.Scene({
      triggerElement: '#work-process',
      offset: $('.work-process .section-desc').height(),
    })
      .setClassToggle('.work-process__card', 'active')
      .addTo(e),
    new ScrollMagic.Scene({
      triggerElement: '#services',
    })
      .setClassToggle('.bg-hand', 'active')
      .addTo(e),
    $(window)
      .on('scroll', function () {
        let e = $(window).scrollTop() + 150;
        '/portfolio.html' !== window.location.pathname &&
          '/DTVGroup/portfolio.html' !== window.location.pathname &&
          $('section').each(function (t) {
            $(this).position().top <= e &&
              ($('.nav-item.active').removeClass('active'),
              $('.nav-item').eq(t).addClass('active'),
              $('.nav-item_mobile a.active').removeClass('active'),
              $('.nav-item_mobile a').eq(t).addClass('active')),
              e < $('.header').height() &&
                $('.nav-item.active').removeClass('active');
          });
      })
      .trigger('scroll');
  const t = 100,
    n = {
      min: 1,
      max: 5,
      giant: 9,
    },
    i = {
      min: 5,
      max: 25,
    },
    r = (e, t) => e + Math.random() * (t - e);
  for (let e = 0; e < t; e++) {
    let e = $('<div></div>'),
      t = 0 === Math.round(10 * Math.random()) ? n.giant : r(n.min, n.max);
    e.css({
      width: t + 'px',
      height: t + 'px',
      left: r(0, 100) + '%',
      top: r(0, 100) + '%',
      'animation-duration': r(i.min, i.max) + 's',
    }),
      $('#root').append(e);
  }
  setTimeout(function () {
    let e = document.createElement('script');
    (e.type = 'text/javascript'),
      (e.src =
        'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0c5bdd7c15816a76e1cdeeed28968e138a3559f5fa1c6cf032a0ffefab4f8488&amp;width=750&amp;height=520&amp;lang=ru_RU&amp;scroll=true'),
      document.getElementById('map').appendChild(e);
  }, 4e3);
});
