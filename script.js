$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true
  });
});

// Second owl carousel video
$('.owl-carousel').owlCarousel({
  items: 1,
  loop: true,
  video: true,
  lazyLoad: true
}); 