var Randomizza = function(){
	return Math.floor(Math.random() *100) % 100;
}

var Esercizio09 = function(n){
	if (n=0) {return undefined};
	var i;
	var ilPiuGrande = Randomizza;
	var numero;

	for(i = 1 ; i < n ; i++){
		numero=Randomizza;
		if (numero > ilPiuGrande) {
			ilPiuGrande=numero;
		};
	};

	console.log(ilPiuGrande);
}

