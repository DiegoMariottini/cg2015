var Randomizza = function (){
	return Math.floor(Math.random() * 10000000);
}

var esercizio14= function (){
	var primoNumero=Randomizza();
	var secondoNumero=Randomizza();

	console.log (primoNumero + secondoNumero )/2
	console.log (Math.sqrt((Math.pow(primoNumero-media,2) * Math.pow(secondoNumero-media,2))/2));
}