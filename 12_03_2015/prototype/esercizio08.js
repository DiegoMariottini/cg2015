var Point2D= function(xInInput,yInInput){
	this.x=xInInput;
	this.y=yInInput;
}

var Edge= function(puntoPrimoInput,puntoSecondoInput){
	this.puntoPrimo=puntoPrimoInput;
	this.puntoSecondo=puntoSecondoInput;
}

Edge.prototype.length=function(){
	return Math.sqrt(Math.pow((this.puntoPrimo.x-this.puntoSecondo.x),2)  +  Math.pow((this.puntoPrimo.y-this.puntoSecondo.y),2));
}

