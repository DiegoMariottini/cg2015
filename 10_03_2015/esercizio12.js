var Randomizza = function (){
	return Math.floor(Math.random() * 10000000);
}

var Esercizio12 = function (){
	var primoNumero=Randomizza();
	var secondoNumero=Randomizza();
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
	
	if (maggiore===1) {
		return NaN;
	} else{
		return maggiore;
	};
}