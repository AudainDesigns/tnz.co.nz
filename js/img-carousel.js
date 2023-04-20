$(document).ready(function() {
	
  $(".img-carousel-item").hover(
    function(){
      
      $(".img-carousel-item").each(function(){
        $(this).removeClass('current');
      });
      
      $(this).addClass('current');
    },
    function(){
      $(this).removeClass('current');
      
      $(".img-carousel-item:nth-child(2)").addClass('current');
    },    
  );
  
});