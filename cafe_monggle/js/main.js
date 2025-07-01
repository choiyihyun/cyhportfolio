$(function () {
  /* 네비게이션 */
  $('header nav ul.gnb>li').hover(function () {
    $(this).find('ul.sub').stop().slideDown();
  }, function () {
    $(this).find('ul.sub').stop().slideUp();
  });

  let mainSlide = new Swiper(".main_visual", {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 0,
    centeredSlides: true,
    initialSlide: 2,
    pagination: {
      el: ".main_visual .swiper-pagination",
      clickable: true,
    },
  });

  let contents2 = new Swiper(".contents2", {
    // loop:true,
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".contents2 .swiper-pagination",
      clickable: true,
    },
  });


  let season_menu = new Swiper(".season_menu .swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween : 50,
    coverflowEffect: {
       scale : 0.9,
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".season_menu .swiper-pagination",
    },
  });

});



