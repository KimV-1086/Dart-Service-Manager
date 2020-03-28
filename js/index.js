$(document).ready(function(){

  $('.slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });


  $('.team-ava1').click(function() {
    $('.team-ava1').animate({
      width: "163px",
      height: "163px",
      opacity: 1
    }, 500);
    $('.team-ava2').animate({
      width: "100px",
      height: "100px",
      opacity: 0.2
    }, 500);
    $('.team-ava3').animate({
      width: "100px",
      height: "100px",
      opacity: 0.2
    }, 500);

    $('.team-title').text('ava1');
    $('.team-text').text('ava1 lorem amsdmada mkamdmasdm kamdkmldm akmdlska');
  });  

  $('.team-ava2').click(function() {
    $('.team-ava2').animate({
      width: "163px",
      height: "163px",
      opacity: 1
    }, 500);
    $('.team-ava1').animate({
      width: "100px",
      height: "100px",
      opacity: 0.2
    }, 500);
    $('.team-ava3').animate({
      width: "100px",
      height: "100px",
      opacity: 0.2
    }, 500);

    $('.team-title').text('ava2');
    $('.team-text').text('ava2 lorem amsdmada mkamdmasdm kamdkmldm akmdlska');
  });  

  $('.team-ava3').click(function() {
    $('.team-ava3').animate({
      width: "163px",
      height: "163px",
      opacity: 1
    }, 500);
    $('.team-ava2').animate({
      width: "100px",
      height: "100px",
      opacity: 0.2
    }, 500);
    $('.team-ava1').animate({
      width: "100px",
      height: "100px",
      opacity: 0.2
    }, 500);

    $('.team-title').text('ava3');
    $('.team-text').text('ava3 lorem amsdmada mkamdmasdm kamdkmldm akmdlska');
  });  

});






