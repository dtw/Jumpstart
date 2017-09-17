$(document).ready(function () {
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var scrollDistanceFromTop = 0;
  $(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    if ((scrollTop - scrollDistanceFromTop) >= 50) {
      var navbarHeight = $('.navbar').height();
      $('.navbar').animate({
        top: 0 - navbarHeight
      }, 150, function() {
        // Animation complete.
      });
      scrollDistanceFromTop = scrollTop;
    } else if ((scrollDistanceFromTop - scrollTop) >= 50){
      $('.navbar').animate({
        top: '0px'
      }, 150, function() {
        // Animation complete.
      });
      scrollDistanceFromTop = scrollTop;
    };
  })
})
