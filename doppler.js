var dopplerScreen = function(doppler) {
	doppler.source;
	doppler.waves = [];

	doppler.setup = function(){
		doppler.createCanvas(600, 600);
		doppler.source = new Source();
		doppler.waves.push(new Wave());
	}
	doppler.draw = function(){
		doppler.background(30,32,35);
		doppler.handleSource();
		doppler.handleWaves();
	}

	doppler.handleSource = function(){
		doppler.source.draw();
		doppler.source.update();
	}
	doppler.handleWaves = function(){
		for(var i=0; i<doppler.waves.length; i++){
			doppler.waves[i].draw();
			doppler.waves[i].propagate();

			if(doppler.waves[i].offScreen() == true){
				doppler.waves.shift();
			}
		}

		if(doppler.frameCount % 10 == 0) {
 			doppler.waves.push(new Wave());
 		}
	}
	doppler.keyPressed = function(){
		if(doppler.key == ' '){
			if(doppler._loop == false){
				doppler.loop();
			}
			else {
				doppler.noLoop();
			}
 		}
 		if(doppler.key == 'r') {
 			doppler.waves = [];
 		}
	}
}

var doppler = new p5(dopplerScreen, 'doppler');
var controls = new p5(dopplerControls, 'controls');