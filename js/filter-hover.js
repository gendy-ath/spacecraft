$(document).ready(function () {

    /*
    if( $('body').hasClass('home') ){
        homepageModule.adjustActiveFilters();  
      }
      */

      $('.project-link:not(.archives-link)').on('mouseenter', function(){
      
        if( $(this).find('img').hasClass('loaded') ){
          homepageModule.adjustName( $(this) );
        }
      
        var category = $(this).attr('class').replace('project-link ', '');
        $('.filter-link').addClass('highlight');
      


        if( category.split(' ').length > 1 ){
          var categories = category.split(' ');
          for( var i = 0; i<categories.length; i++ ){
            $('.filter-link[data-filter="'+categories[i]+'"]').removeClass('highlight');
          }
        }else{
          $('.filter-link[data-filter="'+category+'"]').removeClass('highlight');
        }

        
      
        if( $('nav .main-nav .filter-main.highlight').length >= 1 ){
          $('.main-right').addClass('filtered-on-hover');
        }else{
          $('.main-right').removeClass('filtered-on-hover');
        }
      
      });
      
        
      $('.project-link').on('mouseleave', function(){
        $('.filter-link.highlight').removeClass('highlight');
        $('.nav-right').removeClass('filtered-on-hover');  
      });

      
      
    
});