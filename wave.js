function Wave() {
	this.x = doppler.source.x;
	this.y = doppler.source.y;
	this.r = 0;
	this.propSpeed = 2;

	this.draw = function(){
		doppler.noFill();
		doppler.strokeWeight(3);
		doppler.stroke(198, 0, 0);
		doppler.ellipse(this.x, this.y, this.r*2, this.r*2);
	}
	this.propagate = function(){
		this.r += this.propSpeed;
	}
	this.offScreen = function(){
		if(Math.PI*Math.pow(this.r, 2) > 6*(doppler.width * doppler.height)) {
			return true;
		} else {
			return false;
		}
	}
}