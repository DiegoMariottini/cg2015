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

var Triangle=function(latoUnoInput,latoDueInput,latoTreInput){
	this.latoUno=latoUnoInput;
	this.latoDue=latoDueInput;
	this.latoTre=latoTreInput;
}

Triangle.prototype.perimeter=function(){
	return this.latoUno+this.latoDue+this.latoTre;
}

Triangle.prototype.area= function(){
	var semiPerimetro = (this.perimeter())/2;
	return Math.sqrt(semiPerimetro*(semiPerimetro-this.latoUno)*(semiPerimetro-this.latoDue)*(semiPerimetro-this.latoTre) );
}