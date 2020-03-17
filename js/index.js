const btn = $('.btn-drop');
const drop = $('.dropdown-content');

  btn.on('click', () => {
    if (drop.css('display') === 'none') {
      drop.css({'display': 'block'});
    } else {
      drop.css({'display': 'none'});
    }
  });




