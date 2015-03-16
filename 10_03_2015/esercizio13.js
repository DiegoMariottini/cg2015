var Randomizza = function (){
	return Math.floor(Math.random() * 10000000);
}

var MassimoComunDivisore = function (primoNumero,secondoNumero){
	var maggiore,minore,temporanea;

	if (primoNumero > secondoNumero)  {
		maggiore=primoNumero;
		minore= secondoNumero
	} else{
		maggiore= secondoNumero;
		minore= primoNumero;
	};

	while (minore != 0){
		temporanea = minore;
		minore = maggiore%minore;
		maggiore= temporanea;
	}
	
	return maggiore;
}

var Esercizio13 = function(){
	var primoNumero=Randomizza();
	var secondoNumero=Randomizza();
	var comunDivisore=MassimoComunDivisore(primoNumero,secondoNumero);

	primoNumero = primoNumero/comunDivisore;
	secondoNumero = secondoNumero/comunDivisore;

	return (primoNumero*secondoNumero* comunDivisore);
	
}
