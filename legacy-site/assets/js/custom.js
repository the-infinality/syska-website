$(document).ready(function () {

    $('.main-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      fade: true,
      cssEase:'linear',
      autoplay: true,
    });
  

    AOS.init();
});