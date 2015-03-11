$(function(){
  var background = $('#parallaxHeader').data('img');
  $('#parallaxHeader').parallax({imageSrc: background, speed: 0.4, position: '-50', bleed: 30});
});
