$(document).ready(function () {

    var $grid = $('.grid').isotope({
        // main isotope options
        itemSelector: '.grid-item',
        // set layoutMode
        layoutMode: 'fitRows',
        // options for cellsByRow layout mode
        percentPosition: true
       
     
        
      })

      // filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  }
 
  };



      $('a.filter-link').on( 'click', function() {
        

        if ($(this).hasClass('is-checked')) {
          $grid.isotope({ filter: '*' });
          setTimeout (function(){
            $('a.filter-link').removeClass('is-checked')
            $('.filter-link').removeClass('non-checked');
           
            ;},100);
          

        }
        else if ($(this).hasClass('active-nav')) {
          $grid.isotope({ filter: '*' });
          setTimeout (function(){
            $('a.filter-link').removeClass('active-nav')
            $('a.filter-link').removeClass('is-checked')
            $('.filter-link').removeClass('non-checked');
           
            ;},100);
          

        }
      
        else{

        var filterValue = '.' + $( this ).attr('data-filter');
        // use filterFn if matches value
        //filterValue = filterFns[ filterValue ] || filterValue;
        $grid.isotope({ filter: filterValue });
       
        
        }

        $('.filter-link').addClass('non-checked');

      });
      

      // change is-checked class on buttons
      $('.list-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
       
        $buttonGroup.on( 'click', 'a', function() {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $('a.filter-link').removeClass('active-nav')
          
          
          $( this ).addClass('is-checked');


          if ($(this).hasClass('non-checked')) {
            $buttonGroup.find('.is-checked').removeClass('non-checked');

        }
        });
      });

      $('.main-nav').each( function( i, buttonMain ) {
        var $buttonMain = $( buttonMain );
       
        $buttonMain.on( 'click', 'a', function() {
          $buttonMain.find('.active-nav').removeClass('active-nav');
          $('a.filter-link').removeClass('is-checked')
          
          
          $( this ).addClass('active-nav');


          if ($(this).hasClass('non-checked')) {
            $buttonMain.find('.active-nav').removeClass('non-checked');

        }
        });
      });

});