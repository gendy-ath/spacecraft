
/*
$(document).ready(function(){
var navBar = $('.navbar').height();

$('#space-craft-nav').css('margin-top',navBar);

});
*/

$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });



    let mql = window.matchMedia('(max-width: 1200px)');

    if (mql.matches)
    {
      console.log('1200px');

    }
    else{
      console.log('malakas')
      $('#filters').collapse('show')
      $('#projectText').collapse('show')
    }

    $('#filters').on('hidden.bs.collapse', function () {
      $('.glyph-collapse').css('transform','rotate(0deg)')
    })

    $('#filters').on('shown.bs.collapse', function () {
      $('.glyph-collapse').css('transform','rotate(180deg)')
    })

    $('#projectText').on('hidden.bs.collapse', function () {
      $('.glyph-collapse').css('transform','rotate(0deg)')
    })

    $('#projectText').on('shown.bs.collapse', function () {
      $('.glyph-collapse').css('transform','rotate(180deg)')
    })

  });

