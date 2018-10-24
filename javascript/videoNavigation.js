let videoAtual = 0;
let videohtml = "#video" + videoAtual;
let videoMax = 3;
let inicio = "#video" + 1;

document.querySelector('body').addEventListener('keydown', function(event) {
 
	var tecla = event.keyCode;
	
	if(tecla == 39) {
	 
	 videoRight();
		
	} 
 	
});

function videoRight(){
	if(videoAtual == videoMax){
		console.log("maximo");
		videohtml = "#video" + videoAtual;
		$(inicio).css("background", "#fff");
		$(inicio).css("transform", "scale(1.23)");
		$(videohtml).css("transform", "scale(1.2)");
		$(videohtml).css("background", "#151515");
		videoAtual = 0;
	}
	else{
	videoAtual += 1;
	let videoMenos = videoAtual - 1;
	videohtml = "#video" + videoAtual;
	videohtmlmenos = "#video" + videoMenos;
	$(videohtml).css("background", "#fff");
	$(videohtml).css("transform", "scale(1.23)");
	$(videohtmlmenos).css("transform", "scale(1.2)");
	$(videohtmlmenos).css("background", "#151515");
	playToogle();
}
}


function playToogle(){
	toggle.play();
	setTimeout(function(){
	toggle.pause();
	toggle.currentTime = 0;
	}, 100);
}