var Door= function(){
	this.state="open";
}

Door.prototype.open = function() {
	this.state="open";
};

Door.prototype.close = function() {
	this.state="close";
};

var SecurityDoor= function(){
	Door.cool();
}

SecurityDoor.prototype = Object.create(Door.prototype);
SecurityDoor.prototype.constructor = SecurityDoor;


SecurityDoor.prototype.open = function() {
	if(!(this.state="lock")) {
		this.state="open";
	};
};

SecurityDoor.prototype.lock = function() {
	if(this.state="close") {
		this.state="lock";
	};
};


SecurityDoor.prototype.unlock = function() {
	this.state="close";
};



