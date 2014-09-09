(function(){
	'use strict';
/*
*******************************************************************************
=							 Full Screen Slideshow
*******************************************************************************
*/
	$.vegas('slideshow', {
		delay: 10000,
		backgrounds:[
			{ src: 'images/slider/1.jpg', fade:1000 },
			{ src: 'images/slider/2.jpg', fade:1000 },
			{ src: 'images/slider/3.jpg', fade:1000 }
		]
	});
/*
*******************************************************************************
=							 Owl Carousel
*******************************************************************************
*/
	$("#owl").owlCarousel({
	 
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
  	});
})();