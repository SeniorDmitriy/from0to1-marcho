$(function(){
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true
  });

  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });
});