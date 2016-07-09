(function($){ 

    $('#datetimepicker1').datetimepicker();

    $("#slideshow > div:gt(0)").hide();

	setInterval(function() { 
	  $('#slideshow > div:first')
	    .hide()
	    .next()
	    .show() 	    
	    .end()
	    .appendTo('#slideshow');
	},  2000);
	     

})(jQuery);
 



 