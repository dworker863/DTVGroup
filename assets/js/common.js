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
    offset: $('.about .section-desc').height() * 2,
  })
    .setClassToggle('.about-item__desc', 'active')
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#about',
    offset: $('.about .section-desc').height() * 2,
  })
    .setClassToggle('.about-item__photo', 'active')
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#about',
  })
    .setClassToggle('.about .section-desc', 'active')
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#work-process',
    // offset: 200,
  })
    .setClassToggle('.work-process .section-desc', 'active')
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#work-process',
    offset: $('.work-process .section-desc').height() * 1.5,
  })
    .setClassToggle('.work-process__card', 'active')
    .addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '#services',
  })
    .setClassToggle('.bg-hand', 'active')
    .addTo(controller);
});
