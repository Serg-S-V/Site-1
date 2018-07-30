(function ($) {
  'use strict';

  $(document).ready(function () {

  	$('.trigger-menu').click(function() {
  		$('nav li').slideToggle(500);
  	});
  	$(window).resize(function() {
  		if ($(window).width() > 768){
  			$('nav li').removeAttr('style');
  		}
  	});




  }); //end ready

}(jQuery));