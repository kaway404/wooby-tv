setTimeout(function(){
	$.post( "/api/browser.php", function( data ) {
	  $( ".browser" ).html( data );
	  $(".splash").css("opacity", "0");
	  $(".splash").css("transform", "scale(0.8)");
	});
}, 100);