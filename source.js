function Source(){
	this.radius = 10;
	this.xspeed = 0;
	this.yspeed = 0;
	this.x = doppler.width*0.50;
	this.y = doppler.height*0.50;
	this.draw = function(){
		doppler.fill(255, 255, 255);
		doppler.noStroke();
		doppler.ellipse(this.x, this.y, this.radius*2, this.radius*2);
	}
	this.update = function(){
		this.x = doppler.constrain(this.x+this.xspeed, 0, doppler.width);
		this.y = doppler.constrain(this.y+this.yspeed, 0, doppler.height);
	}
}