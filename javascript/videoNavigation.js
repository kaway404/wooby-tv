let videoAtual = 1;
let xandeco = 1;
let maxscroll = 1;
let videohtml = scroll + " " + "#video" + videoAtual;
let videoMax = 13;
let inicio = scroll + " " + "#video" + 1;

clear();

document.querySelector('body').addEventListener('keydown', function(event) {
 
	var tecla = event.keyCode;
	
	if(tecla == 39) {
	 videoRight();
	}
	else if(tecla == 37){
		atualvlol();
		videoLeft();
	}
	else if(tecla == 13){
		enter();
	}
	else if(tecla == 27){
		exitvideo();
	}
	// else if(tecla == 40) {
	// 	passou();
	// 	videoBottom();
	// }
	// else if(tecla == 38) {
	// 	menos();
	// 	videoTop();
	// }
 	
});

function videoBottom(){
	if(xandeco <= maxscroll){
		xandeco += 1;
		let scroll = "#genen" + xandeco;
		let scrollantes = xandeco - 1;
		let scrollvideo = "#genen" + scrollantes;
		let proximoscroll = scroll + " " + "#video" + videoAtual;
		let incioxande = scrollvideo + " " + "#video" + videoAtual;
		$(incioxande).css("opacity", "0.4");
		$(incioxande).css("transform", "scale(1)");
		$(incioxande).css("height", "15em");
		$(incioxande).css("z-index", "100");
		$(incioxande).css("transform", "scale(1)");
		$(incioxande).css("margin-left", "0em");
		$(incioxande).css("margin-right", "0em");
		$(incioxande).css("box-shadow", "2px 3px 4px transparent");
		$(proximoscroll).css("transform", "scale(1.45)");
		$(proximoscroll).css("z-index", "1000");
		$(proximoscroll).css("height", "15em");
		$(proximoscroll).css("margin-left", "5.5em");
		$(proximoscroll).css("margin-right", "5.5em");
		$(proximoscroll).css("box-shadow", "2px 3px 4px rgba(0,0,0,.50)");
		$(proximoscroll).css("opacity", "1");
		videoAtual = 1;
	}
}

function passou(){
	if(xandeco > maxscroll ){
		xandeco = 1;
		alert("passou");
	}
}

function menos(){
	if(xandeco < maxscroll ){
		xandeco = 1;
		alert("menos");
	}
}

function videoTop(){
	if(xandeco <= maxscroll){
		xandeco = 1;
		let scroll = "#genen" + xandeco;
		let scrollantes = xandeco + 1;
		let scrollvideo = "#genen" + scrollantes;
		let proximoscroll = scroll + " " + "#video" + videoAtual;
		let incioxande = scrollvideo + " " + "#video" + videoAtual;
		$(incioxande).css("opacity", "0.4");
		$(incioxande).css("transform", "scale(1)");
		$(incioxande).css("height", "15em");
		$(incioxande).css("z-index", "100");
		$(incioxande).css("transform", "scale(1)");
		$(incioxande).css("margin-left", "0em");
		$(incioxande).css("margin-right", "0em");
		$(incioxande).css("box-shadow", "2px 3px 4px transparent");
		$(proximoscroll).css("transform", "scale(1.45)");
		$(proximoscroll).css("z-index", "1000");
		$(proximoscroll).css("height", "15em");
		$(proximoscroll).css("margin-left", "5.5em");
		$(proximoscroll).css("margin-right", "5.5em");
		$(proximoscroll).css("box-shadow", "2px 3px 4px rgba(0,0,0,.50)");
		$(proximoscroll).css("opacity", "1");
		videoAtual = 1;
		}
		else if(xandeco < maxscroll ){
		xandeco = 1;
		}
}



function videoRight(){
	if(on_leftbar == "0"){
	if(videoAtual == videoMax){
		console.log("maximo");
		let videoMenos = videoAtual - 1;
		let scroll = "#genen" + xandeco;
		videohtml = scroll + " " +  "#video" + videoAtual;
		videohtmlmenos = scroll + " " + "#video" + videoMenos;
		let inicio = scroll + " " + "#video" + 1;
		$(inicio).css("transform", "scale(1.45)");
		$(inicio).css("z-index", "1000");
		$(inicio).css("height", "15em");
		$(inicio).css("margin-left", "5.5em");
		$(inicio).css("margin-right", "5.5em");
		$(inicio).css("box-shadow", "2px 3px 4px rgba(0,0,0,.50)");
		$(inicio).css("opacity", "1");
		$(videohtml).css("opacity", "0.4");
		$(videohtml).css("transform", "scale(1)");
		$(videohtml).css("height", "15em");
		$(videohtml).css("z-index", "100");
		$(videohtml).css("transform", "scale(1)");
		$(videohtml).css("margin-left", "0em");
		$(videohtml).css("margin-right", "0em");
		$(videohtml).css("box-shadow", "2px 3px 4px transparent");
		videoAtual = 0;
		scrollPrev();
		console.log(videoAtual);
		playToogle();
	}
	else{
	videoAtual += 1;
	let videoMenos = videoAtual - 1;
	let scroll = "#genen" + xandeco;
	videohtml = scroll + " " +  "#video" + videoAtual;
	videohtmlmenos = scroll + " " + "#video" + videoMenos;
	$(videohtml).css("transform", "scale(1.45)");
	$(videohtml).css("z-index", "1000");
	$(videohtml).css("height", "15em");
	$(videohtml).css("margin-left", "5.5em");
	$(videohtml).css("margin-right", "5.5em");
	$(videohtml).css("box-shadow", "2px 3px 4px rgba(0,0,0,.50)");
	$(videohtml).css("opacity", "1");
	$(videohtmlmenos).css("transform", "scale(1)");
	$(videohtmlmenos).css("height", "15em");
	$(videohtmlmenos).css("z-index", "100");
	$(videohtmlmenos).css("transform", "scale(1)");
	$(videohtmlmenos).css("margin-left", "0em");
	$(videohtmlmenos).css("margin-right", "0em");
	$(videohtmlmenos).css("box-shadow", "2px 3px 4px transparent");
	$(videohtmlmenos).css("opacity", "0.4");
	playToogle();
	console.log(videoAtual);
	if(videoAtual == 1){
		console.log("1");
	}
	else{
		scrollNext();
	}
}
}
}



function videoLeft(){
	if(on_leftbar == "0"){
	if(videoAtual > 0){
		videoAtual -= 1;
		let videoMenos = videoAtual + 1;
		let scroll = "#genen" + xandeco;
		videohtml = scroll + " " +  "#video" + videoAtual;
		videohtmlmenos = scroll + " " + "#video" + videoMenos;
		$(videohtml).css("transform", "scale(1.45)");
		$(videohtml).css("z-index", "1000");
		$(videohtml).css("height", "15em");
		$(videohtml).css("margin-left", "5.5em");
		$(videohtml).css("margin-right", "5.5em");
		$(videohtml).css("box-shadow", "2px 3px 4px rgba(0,0,0,.50)");
		$(videohtml).css("opacity", "1");
		$(videohtmlmenos).css("transform", "scale(1)");
		$(videohtmlmenos).css("height", "15em");
		$(videohtmlmenos).css("z-index", "100");
		$(videohtmlmenos).css("transform", "scale(1)");
		$(videohtmlmenos).css("margin-left", "0em");
		$(videohtmlmenos).css("margin-right", "0em");
		$(videohtmlmenos).css("box-shadow", "2px 3px 4px transparent");
		$(videohtmlmenos).css("opacity", "0.4");
		playToogle();
		console.log(videoAtual);
		scrollPrev2();
	}
	else if(videoAtual == 0){
	atualv = 0;
	playToogle();
	console.log(videoAtual);
	}
}
}

function atualvlol(){
	if(atualv == 0){
		if(videoAtual > 0){
			atualv = 1;
		}
		else{
			atualv = 0;
		}
	}
}

function enter(){
	if ($('.watch').is(":visible")){
		console.log("watch visible");
	}
	else{
	$(".watch").css("display", "block");
	setTimeout(function(){
		$(".watch").css("transform", "scale(1)");
	}, 300);
}
}

function scrollNext(){
let scrolledy = "#genen" + xandeco + " " + "#list" + xandeco;
	event.preventDefault();
	$(scrolledy).animate({
     scrollLeft: "+=270px"
   }, "fast");
}

function scrollPrev(){
let scrollede = "#genen" + xandeco + " " + "#list" + xandeco;
	event.preventDefault();
	$(scrollede).animate({
     scrollLeft: "-=2070000px"
   }, "fast");
}

function scrollPrev2(){
let scrollede = "#genen" + xandeco + " " + "#list" + xandeco;
	event.preventDefault();
	$(scrollede).animate({
     scrollLeft: "-=270"
   }, "fast");
}



function playToogle(){
	toggle.play();
	setTimeout(function(){
	toggle.pause();
	toggle.currentTime = 0;
	}, 100);
}

function clear(){
	videoAtual = 0;
}

function exitvideo(){
	if ($('.watch').is(":visible")){
		$(".watch").css("transform", "scale(0)");
		setTimeout(function(){
		$(".watch").css("display", "none");
	}, 300);
	}
}