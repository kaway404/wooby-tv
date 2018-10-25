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
	$.post( "/api/busca.php", function( data ) {
	  $( "#app" ).html( data );
});
});

$("#guide-102").click(function(){
	playToogle();
	closeSearchbar();
	$("#guide-101").css("background", "transparent");
	$("#guide-106").css("background", "transparent");
	$("#guide-103").css("background", "transparent");
	$("#guide-104").css("background", "transparent");
	$("#guide-105").css("background", "transparent");
	$("#guide-102").css("background", "#fff");
	idbutton = "2";
	$.post( "/api/default.php", function( data ) {
	  $( "#app" ).html( data );
});
});

$("#guide-103").click(function(){
	playToogle();
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