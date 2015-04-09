$(document).foundation();

$(document).ready( function(){
  $('.page').css('height', $(window).height()+'px');
  $('#rest').css('padding-top', $(window).height()+'px');
});

$(window).resize(function() {
  $('.page').css('height', $(window).height()+'px');
  $('#rest').css('padding-top', $(window).height()+'px');
});

$(document).ready(function () {
	$('.down img').click(function () { 
		$('html,body').animate({
	        scrollTop: $('#head').height()
	    }, 800, 'swing');	
    });
});
