let navigation_leftbar = "0";
let on_leftbar = "0";
let idbutton = "0";
let iddefault = "0";
let atualv = 1;

document.querySelector('body').addEventListener('keydown', function(event) {
 
	var tecla = event.keyCode;
	
	if(tecla == 13) {
	 
	 // tecla ENTER
		
	} else if(tecla == 27) {
	 
	 closeleftbar();
		
	} else if(tecla == 83) {
	 
	acessleftbar();
		
	}
	else if(tecla == 37) {
	 
	acessleftbar();
		
	} 
	else if(tecla == 38) {
	 
	 navigationBarTop();
		
	} else if(tecla == 40) {
	 
	 navigationBarBottom();
		
	}
	else if(tecla == 39) {
	 
	  homets();
		
	}
 
});

function homets(){
	if(navigation_leftbar == "1"){
	navigation_leftbar = "0";
	on_leftbar = "0";
	idbutton = "0";
		playAcess();
		$("#guide-101").css("background", "transparent");
		$("#guide-102").css("background", "transparent");
		$("#guide-103").css("background", "transparent");
		$("#guide-104").css("background", "transparent");
		$("#guide-105").css("background", "transparent");
		$("#guide-106").css("background", "transparent");
		$(".tuturial .search").show();
		$(".tuturial .sair").hide();
		$.post( "/api/default.php", function( data ) {
				  $( "#app" ).html( data );
		});
}
}

function acessleftbar(){
	//Set navigation bar
	if(atualv == 0){
	if(navigation_leftbar == "0"){
		navigation_leftbar = "1";
		on_leftbar = "1";
		idbutton = "2";
		playToogle();
		$("#guide-101").css("background", "transparent");
		$("#guide-102").css("background", "#fff");
		$("#guide-103").css("background", "transparent");
		$("#guide-104").css("background", "transparent");
		$("#guide-105").css("background", "transparent");
		$("#guide-106").css("background", "transparent");
		$(".tuturial .search").hide();
		$(".tuturial .sair").hide();
		$.post( "/api/default.php", function( data ) {
				  $( "#app" ).html( data );
		});
	}
}
}

function closeleftbar(){
	if(navigation_leftbar == "1"){
	navigation_leftbar = "0";
	on_leftbar = "0";
	idbutton = "0";
		playAcess();
		$("#guide-101").css("background", "transparent");
		$("#guide-102").css("background", "transparent");
		$("#guide-103").css("background", "transparent");
		$("#guide-104").css("background", "transparent");
		$("#guide-105").css("background", "transparent");
		$("#guide-106").css("background", "transparent");
		$(".tuturial .search").show();
		$(".tuturial .sair").hide();
		$.post( "/api/default.php", function( data ) {
				  $( "#app" ).html( data );
			});
}
}

function navigationBarBottom(){
	if(on_leftbar == "1"){
	toggle.play();
	setTimeout(function(){
	toggle.pause();
	toggle.currentTime = 0
	}, 100);
		if(idbutton == "1"){
			acessleftbar();
			$("#guide-101").css("background", "transparent");
			$("#guide-102").css("background", "#fff");
			$.post( "/api/default.php", function( data ) {
				  $( "#app" ).html( data );
			});
			idbutton = "2";
		}
		else if(idbutton == "2"){
			closeSearchbar();
			$("#guide-102").css("background", "transparent");
			$("#guide-103").css("background", "#fff");
			$.post( "/api/gostei.php", function( data ) {
				  $( "#app" ).html( data );
			});
			idbutton = "3";
		}
		else if(idbutton == "3"){
			closeSearchbar();
			$("#guide-103").css("background", "transparent");
			$("#guide-104").css("background", "#fff");
			$.post( "/api/news.php", function( data ) {
				  $( "#app" ).html( data );
			});
			idbutton = "4";
		}
		else if(idbutton == "4"){
			closeSearchbar();
			$("#guide-104").css("background", "transparent");
			$("#guide-105").css("background", "#fff");
			$.post( "/api/account.php", function( data ) {
				  $( "#app" ).html( data );
			});
			idbutton = "5";

		}
		else if(idbutton == "5"){
			if ($('.left-menu-browser-bro .bottom').is(":visible")){
			closeSearchbar();
			$("#guide-105").css("background", "transparent");
			$("#guide-106").css("background", "#fff");
			$.post( "/api/settings.php", function( data ) {
				  $( "#app" ).html( data );
			});
			idbutton = "6";
		}
		}
	}
}

function navigationBarTop(){
	if(on_leftbar == "1"){
		if(idbutton == "1"){
			block.play();
			setTimeout(function(){
			block.pause();
			block.currentTime = 0;
			}, 100);
			$.post( "/api/busca.php", function( data ) {
				  $( "#app" ).html( data );
			});
		}
		else if(idbutton == "6"){
			if ($('.left-menu-browser-bro .bottom').is(":visible")){
			playToogle();
			closeSearchbar();
			$("#guide-106").css("background", "transparent");
			$("#guide-105").css("background", "#fff");
			idbutton = "5";
			$.post( "/api/account.php", function( data ) {
				  $( "#app" ).html( data );
			});
		}
		}
		else if(idbutton == "5"){
			playToogle();
			closeSearchbar();
			$("#guide-105").css("background", "transparent");
			$("#guide-104").css("background", "#fff");
			idbutton = "4";
			$.post( "/api/news.php", function( data ) {
				  $( "#app" ).html( data );
			});
		}
		else if(idbutton == "4"){
			playToogle();
			closeSearchbar();
			$("#guide-104").css("background", "transparent");
			$("#guide-103").css("background", "#fff");
			idbutton = "3";
			$.post( "/api/gostei.php", function( data ) {
				  $( "#app" ).html( data );
			});
		}
		else if(idbutton == "3"){
			playToogle();
			closeSearchbar();
			$("#guide-103").css("background", "transparent");
			$("#guide-102").css("background", "#fff");
			idbutton = "2";
			$.post( "/api/default.php", function( data ) {
				  $( "#app" ).html( data );
			});
		}
		else if(idbutton == "2"){
			playToogle();
			closeSearchbar();
			$("#guide-102").css("background", "transparent");
			$("#guide-101").css("background", "#fff");
			idbutton = "1";
			$.post( "/api/busca.php", function( data ) {
				  $( "#app" ).html( data );
			});
		}
	}
}


function playToogle(){
	toggle.play();
	setTimeout(function(){
	toggle.pause();
	toggle.currentTime = 0;
	}, 100);
}

function playAcess(){
	enter.play();
	setTimeout(function(){
	enter.pause();
	enter.currentTime = 0;
	}, 100);
}

function closeSearchbar(){
	//Set navigation bar
	navigation_leftbar = "1";
	on_leftbar = "1";
		$("#guide-101").css("background", "transparent");
		$(".tuturial .search").show();
		$(".tuturial .sair").hide();
}