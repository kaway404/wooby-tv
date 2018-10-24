setTimeout(function(){
	$.post( "/api/browser.php", function( data ) {
	  $( ".browser" ).html( data );
	  $(".splash").hide();
	  $(".splash").css("transform", "scale(0.8)");
	});
}, 100);