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
	this.bloccata = 0; // bloccata=1,non bloccata=0
}

SecurityDoor.prototype.open = function() {
	if(this.bloccata=0) {
		this.state="open";
	};
};

SecurityDoor.prototype.lock = function() {
	if(this.state="close") {
		this.bloccata=1;
	};
};


SecurityDoor.prototype.unlock = function() {
	this.bloccata=0;
};



