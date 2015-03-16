var Bingo = function(){
	this.numero= Math.floor((Math.random()*10) + 1);
}

Bingo.prototype.guess=function(number){
	return this.numero===number;
}