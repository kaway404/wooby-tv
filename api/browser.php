<link rel="stylesheet" href="/css/browser_4012.css">
<link rel="stylesheet" href="/css/browser_4014.css">

<div class="browserWeb">
<!-- Left Menu Browser -->
<div class="left-menu-browser-bro">
	<li id="guide-logo"></li>
	<li id="guide-101"><i class="material-icons md-48" data-id="1">search</i></li>
	<li id="guide-102"><i class="material-icons md-48" data-id="2">home</i></li>
	<li id="guide-103"><i class="material-icons md-48" data-id="3">thumb_up</i></li>
	<li id="guide-104"><i class="material-icons md-48" data-id="4">timeline</i></li>
	<li id="guide-105"><i class="material-icons md-48" data-id="5">account_circle</i></li>
	<div class="bottom" style="display: none;">
		<li id="guide-106"><i class="material-icons md-48" data-id="6">settings</i></li>
	</div>
</div>

<!-- Tuturial -->
<div class="tuturial">
	<div class="navegar search">
		<p>Busca</p>
	</div>
	<div class="navegar sair">
		<p>Voltar</p>
	</div>
</div>

<div class="center-browser-bro">
	<div id="app">

	</div>
</div>


</div>

<script type="text/javascript">
	$.post( "/api/default.php", function( data ) {
	  $( "#app" ).html( data );
	});

let hoverhome = 0;

$( ".center-browser-bro" ).mouseover(function() {
	if(home == 1){
		if(hoverhome == 0){
		let xandecao = 1;
		let videoA = 1;
		let scrollhome = "#genen" + xandecao;
		let mamamia = scrollhome + " " + "#video" + videoA;
		console.log(mamamia);
		$(mamamia).css("transform", "scale(1.45)");
		$(mamamia).css("z-index", "1000");
		$(mamamia).css("height", "15em");
		$(mamamia).css("margin-left", "5.5em");
		$(mamamia).css("margin-right", "5.5em");
		$(mamamia).css("box-shadow", "2px 3px 4px rgba(0,0,0,.50)");
		$(mamamia).css("opacity", "1");
		hoverhome = 1;
	}
}
});


$( ".left-menu-browser-bro" ).mouseover(function() {
	if(home == 1){
		home = 1;
		hoverhome = 0;
		$('.wath-app-list').css("opacity", "0.4");
		$('.wath-app-list').css("transform", "scale(1)");
		$('.wath-app-list').css("height", "15em");
		$('.wath-app-list').css("z-index", "100");
		$('.wath-app-list').css("transform", "scale(1)");
		$('.wath-app-list').css("margin-left", "0em");
		$('.wath-app-list').css("margin-right", "0em");
		$('.wath-app-list').css("box-shadow", "2px 3px 4px transparent");
		hoverhome = 0;
	}
});

ClickFunctioNavigation();

function ClickFunctioNavigation(){

$("#guide-101").click(function(){
	playToogle();
	acessleftbar();
	$("#guide-102").css("background", "transparent");
	$("#guide-103").css("background", "transparent");
	$("#guide-104").css("background", "transparent");
	$("#guide-105").css("background", "transparent");
	$("#guide-106").css("background", "transparent");
	$("#guide-101").css("background", "#fff");
	idbutton = "1";
	searchbar = 1;
	$.post( "/api/busca.php", function( data ) {
	  $( "#app" ).html( data );
});
});

$("#guide-102").click(function(){
	playToogle();
	searchbar = 0;
	closeSearchbar();
	$("#guide-101").css("background", "transparent");
	$("#guide-106").css("background", "transparent");
	$("#guide-103").css("background", "transparent");
	$("#guide-104").css("background", "transparent");
	$("#guide-105").css("background", "transparent");
	$("#guide-102").css("background", "#fff");
	idbutton = "2";
	home = 1;
	$.post( "/api/default.php", function( data ) {
	  $( "#app" ).html( data );
});
});

$("#guide-103").click(function(){
	playToogle();
	searchbar = 0;
	closeSearchbar();
	$("#guide-102").css("background", "transparent");
	$("#guide-104").css("background", "transparent");
	$("#guide-105").css("background", "transparent");
	$("#guide-106").css("background", "transparent");
	$("#guide-101").css("background", "transparent");
	$("#guide-103").css("background", "#fff");
	idbutton = "3";
	$.post( "/api/gostei.php", function( data ) {
				  $( "#app" ).html( data );
	});
});

$("#guide-104").click(function(){
	playToogle();
	searchbar = 0;
	closeSearchbar();
	$("#guide-101").css("background", "transparent");
	$("#guide-102").css("background", "transparent");
	$("#guide-103").css("background", "transparent");
	$("#guide-105").css("background", "transparent");
	$("#guide-106").css("background", "transparent");
	$("#guide-104").css("background", "#fff");
	idbutton = "4";
	$.post( "/api/news.php", function( data ) {
				  $( "#app" ).html( data );
	});
});

$("#guide-105").click(function(){
	playToogle();
	closeSearchbar();
	searchbar = 0;
	$("#guide-101").css("background", "transparent");
	$("#guide-102").css("background", "transparent");
	$("#guide-103").css("background", "transparent");
	$("#guide-104").css("background", "transparent");
	$("#guide-106").css("background", "transparent");
	$("#guide-105").css("background", "#fff");
	idbutton = "5";
	$.post( "/api/account.php", function( data ) {
				  $( "#app" ).html( data );
	});
});

$("#guide-106").click(function(){
	playToogle();
	closeSearchbar();
	searchbar = 0;
	$("#guide-101").css("background", "transparent");
	$("#guide-102").css("background", "transparent");
	$("#guide-103").css("background", "transparent");
	$("#guide-104").css("background", "transparent");
	$("#guide-105").css("background", "transparent");
	$("#guide-106").css("background", "#fff");
	idbutton = "6";
	$.post( "/api/settings.php", function( data ) {
				  $( "#app" ).html( data );
	});
});
}
</script>