var dopplerControls = function(controls) {
	var joyStick;
	var speedConstant = 3;

	controls.setup = function(){
		controls.createCanvas(300, 300);
		joyStick = new JoyStick();
	}

	controls.draw = function(){
		controls.background(255,255,255);

		joyStick.draw();
		controls.drawBorder();
		controls.drawMachOne();
	}

	controls.drawBorder = function(){
		controls.strokeWeight(4);
		controls.stroke(51);
		controls.noFill();
		controls.rect(0,0,controls.width,controls.height);
	}

	controls.drawMachOne = function(){
		var wave = new Wave();
		var xwidth = (((wave.propSpeed)/speedConstant)*controls.width/2)+controls.width/2;
		var ywidth = (((wave.propSpeed)/speedConstant)*controls.height/2)+controls.height/2;
		controls.strokeWeight(2);
		controls.stroke(0, 96, 252);
		controls.noFill();
		controls.ellipse(controls.width/2, controls.height/2, xwidth, ywidth);
	}

	controls.mouseDragged = function() {
		if(mouseInJoyStick(controls.mouseX, controls.mouseY) || joyStick.isBeingHeld == true){
			joyStick.isBeingHeld = true;
			joyStick.maxX = controls.constrain(controls.mouseX, 0, controls.width);
			joyStick.maxY = controls.constrain(controls.mouseY, 0, controls.height);

			doppler.source.xspeed = speedConstant*(controls.mouseX - controls.width/2)/(controls.width/2);
			doppler.source.yspeed = speedConstant*(controls.mouseY - controls.height/2)/(controls.height/2);
		}
	}
	controls.mouseReleased = function(){
		joyStick.isBeingHeld = false;
	}
	function mouseInJoyStick(x, y){
		return controls.dist(joyStick.maxX, joyStick.maxY, x, y) <= joyStick.r;
	}
}

var JoyStick = function(){
	this.r = 30;
	this.x = controls.width/2;
	this.y = controls.height/2;
	this.maxX = controls.constrain(this.x, 0, controls.width);
	this.maxY = controls.constrain(this.y, 0, controls.height);
	this.isBeingHeld = false;

	this.draw = function(){
		controls.noStroke();
		controls.fill(96, 113, 140);
		controls.ellipse(this.maxX, this.maxY, this.r*2, this.r*2);
	}
}