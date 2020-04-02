$(document).ready(function(){

  $('.slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });

  const teamAva = $( ".team-ava" );
  const cardTeam = $('.team-our-title-links');


  const avaAnimate = (target) => {
    
    teamAva.animate({
      width: "100px",
      height: "100px",
      opacity: 0.2
    })
    
    target.animate({
      width: "163px",
      height: "163px",
      opacity: 1,
      }, 500);

    cardTeam.collapse('hide').animate(600);

  }

  
  teamAva.on('click', (e) => {
    
    const target = $(e.target);
    avaAnimate(target);
    
  });

  

});






