$(document).ready(function(){
    var offset = 220;

$('.navbar li a').click(function(event) {
    //window.location.hash = $(this).attr('href')
    event.preventDefault();
   //$($(this).attr('href'))[0].scrollIntoView();
    //scrollBy(0, -offset);
    //alert($(this.hash).offset().top);
     var target = $(this).attr('href');
    //$('html, body').animate({ scrollTop: $(target).offset().top - offset }, 700);
   // window.location.hash = $(this).hash;
    
    return false;

});
    
	// Cache the Window object
	$window = $(window);
                
   
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
        //var height = $(window).height() + ($(window).height() * 0.4);
      //$(this).height(height);
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';
        if (yPos > 0) {
            return;
        }
		// Move the background
		//$bgobj.css({ backgroundPosition: coords });
    //$bgobj.animate({backgroundPosition:coords},{queue:false, duration:500});

}); // window scroll Ends

 });
   // $('.parallax').scrolly({bgParallax: true});
    $('article').each(function() {
        if ($(this).hasClass('content')) {
            return;
        }
        var topheight = (($(window).height() - $(this).children().height())/4.5);
        //alert(topheight);
        $(this).css('top' , topheight);
        
    });
}); 
/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");