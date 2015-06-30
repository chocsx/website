$(document).ready(function(){
    var pull        = $('.menu-icon');
        menu        = $('.menu');
        menuHeight  = menu.height();
 
    $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
    });
});
