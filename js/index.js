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
    }, 0)
    
    target.animate({
      width: "163px",
      height: "163px",
      opacity: 1,
      }, 500);
     
  }

  
  teamAva.on('click', (e) => {
    
    const target = $(e.target);
    cardTeam.collapse('hide');  
    avaAnimate(target);

  });

  

});






