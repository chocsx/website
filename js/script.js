$(document).ready(function(){
	
    var pull        = $('.menu-icon');
        menu        = $('.menu');
        menuHeight  = menu.height();
 
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });

		  $("#owl-example").owlCarousel({
			  navigation : true, // Show next and prev buttons
		      slideSpeed : 300,
		      paginationSpeed : 400,
		      singleItem:true
		  });   
});
